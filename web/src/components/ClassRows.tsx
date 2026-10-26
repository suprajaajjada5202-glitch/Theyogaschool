import Link from "next/link";
import type { ClassItem } from "@/lib/types";
import { Use } from "./Icons";
import { Reveal } from "./Reveal";

/** Full class sections on /pages/classes (Supabase "classes" table, or the built-in list). */
export function ClassRows({ classes }: { classes: ClassItem[] }) {
  return (
    <div className="rows">
      {classes.map((c) => (
        <Reveal as="article" className="row" id={`class-${c.slug}`} key={c.slug}>
          <div className="row__media">
            <div className="arch">
              <div className="arch__frame">
                {c.image && (
                  <img
                    decoding="async"
                    src={c.image.src}
                    alt={c.image.alt}
                    width={c.image.width}
                    height={c.image.height}
                    loading="lazy"
                  />
                )}
              </div>
              {c.tag && (
                <p className="arch__badge">
                  <span>
                    <Use id="i-check" />
                  </span>
                  {c.tag}
                </p>
              )}
            </div>
          </div>
          <div>
            <p className="row__sub">{c.level}</p>
            <h2>{c.name}</h2>
            <div className="card__meta">
              <span className="chip">
                <Use id="i-level" />
                {c.level}
              </span>{" "}
              {c.duration && (
                <span className="chip">
                  <Use id="i-clock" />
                  {c.duration}
                </span>
              )}
            </div>
            <div className="prose">
              {c.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="row__actions">
              {c.slug === "private" ? (
                <>
                  <a className="btn btn--primary" href="tel:+61412499700">
                    Call 0412 499 700 to book
                  </a>
                  <Link className="btn btn--outline" href="/pages/contact-us?enquiry=Private%20session">
                    Send an enquiry
                  </Link>
                </>
              ) : (
                <>
                  <Link className="btn btn--primary" href="/pages/timetable">
                    Book on the timetable <Use id="i-arrow" />
                  </Link>
                  <Link className="btn btn--outline" href="/pages/prices">
                    Passes &amp; prices
                  </Link>
                </>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Class cards for the home page slider: same list as /pages/classes, each linking to its section there. */
export function ClassCards({ classes }: { classes: ClassItem[] }) {
  return (
    <>
      {classes.map((c) => (
        <li className="slide" key={c.slug}>
          <article className="card">
            <div className="card__media">
              {c.image && (
                <img
                  decoding="async"
                  src={c.image.src}
                  alt={c.image.alt}
                  width={c.image.width}
                  height={c.image.height}
                  loading="lazy"
                />
              )}
              {c.tag && <span className="card__tag">{c.tag}</span>}
            </div>
            <div className="card__body">
              <h3>{c.name}</h3>
              <p>{c.summary}</p>
              <div className="card__meta">
                <span className="chip">
                  <Use id="i-level" />
                  {c.level}
                </span>{" "}
                {c.duration && (
                  <span className="chip">
                    <Use id="i-clock" />
                    {c.duration}
                  </span>
                )}
              </div>
              <Link className="link-arrow" href={`/pages/classes#class-${c.slug}`}>
                Class details <Use id="i-arrow" />
                <span className="sr-only">: {c.name}</span>
              </Link>
            </div>
          </article>
        </li>
      ))}
    </>
  );
}

export function ClassJump({ classes }: { classes: ClassItem[] }) {
  return (
    <Reveal as="nav" className="jump" aria-label="Jump to a class">
      {classes.map((c) => (
        <a key={c.slug} href={`#class-${c.slug}`}>
          {c.name}
        </a>
      ))}
    </Reveal>
  );
}
