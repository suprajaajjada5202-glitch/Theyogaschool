import { revalidateTag } from "next/cache";
import { adminToken, CONTENT_TABLES, isContentTable, userHeaders, type ContentTable } from "@/lib/adminAuth";
import { starterRows } from "@/lib/starter";
import { SUPABASE_URL } from "@/lib/supabase";

type Result = { table: string; status: "imported" | "skipped" | "error"; count: number; message?: string };

/** Tables with a unique slug: re-importing can never create duplicates there. */
const UNIQUE_SLUG: ContentTable[] = ["classes", "blog_posts"];

async function countRows(table: string, token: string) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=id`, {
    headers: userHeaders(token, { Prefer: "count=exact", Range: "0-0" }),
    cache: "no-store",
  });
  const total = res.headers.get("content-range")?.split("/")[1];
  if (!res.ok || total == null || total === "*") throw new Error(`Could not count ${table} (HTTP ${res.status})`);
  return Number(total);
}

async function importTable(table: ContentTable, token: string): Promise<Result> {
  const existing = await countRows(table, token);
  if (existing > 0) return { table, status: "skipped", count: existing, message: `Already has ${existing}` };
  let slugs = new Set<string>();
  if (table === "timetable") {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/classes?select=slug`, { headers: userHeaders(token), cache: "no-store" });
    if (r.ok) slugs = new Set(((await r.json()) as { slug: string }[]).map((c) => c.slug));
  }
  const rows = await starterRows(table, slugs);
  if (!rows.length) return { table, status: "skipped", count: 0, message: "Nothing to import" };
  // Rows may have different keys (e.g. memberships vs passes): name every column and let missing ones use the
  // column default, otherwise Supabase rejects the batch with "All object keys must match".
  const columns = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  const qs = new URLSearchParams({ columns: columns.join(",") });
  if (UNIQUE_SLUG.includes(table)) qs.set("on_conflict", "slug");
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${qs}`, {
    method: "POST",
    headers: userHeaders(token, {
      Prefer: ["return=minimal", "missing=default", ...(UNIQUE_SLUG.includes(table) ? ["resolution=ignore-duplicates"] : [])].join(","),
    }),
    body: JSON.stringify(rows),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { message?: string };
    return { table, status: "error", count: 0, message: err.message ?? `HTTP ${res.status}` };
  }
  revalidateTag(table, { expire: 0 });
  return { table, status: "imported", count: rows.length };
}

/** One import at a time, so two clicks (or two open tabs) can't both fill the same empty table. */
let queue: Promise<unknown> = Promise.resolve();

/** POST { tables?: string[] } — fills each EMPTY table with the website's current content.
    Tables that already have rows are left untouched, so this never overwrites your edits. */
export async function POST(req: Request) {
  const token = await adminToken(req);
  if (!token) return Response.json({ error: "Admins only. Sign in again." }, { status: 401 });
  const body = (await req.json().catch(() => ({}))) as { tables?: unknown[] };
  const wanted = (Array.isArray(body.tables) ? body.tables.filter(isContentTable) : [...CONTENT_TABLES]).sort(
    (a, b) => CONTENT_TABLES.indexOf(a) - CONTENT_TABLES.indexOf(b), // classes first: the timetable links to them
  );
  const run = queue.then(async () => {
    const results: Result[] = [];
    for (const table of wanted) {
      try {
        results.push(await importTable(table, token));
      } catch (e) {
        results.push({ table, status: "error", count: 0, message: e instanceof Error ? e.message : String(e) });
      }
    }
    return results;
  });
  queue = run.catch(() => undefined);
  return Response.json({ results: await run });
}
