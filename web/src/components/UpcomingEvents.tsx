import type { EventItem } from "@/lib/types";
import { Use } from "./Icons";
import { Reveal } from "./Reveal";

const TZ = "Australia/Brisbane"; // Cairns time
const fmt = (d: string, o: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-AU", { timeZone: TZ, ...o }).format(new Date(d));

/** Upcoming events from Supabase. Nothing is shown when there are none (the Momence widget below still lists workshops). */
export function UpcomingEvents({ events }: { events: EventItem[] }) {
  if (!events.length) return null;
  return (
    <div className="events">
      <h2 className="book-head">Upcoming events</h2>
      <div className="events__list">
        {events.map((e) => {
          const when =
            fmt(e.startsAt, { weekday: "long", hour: "numeric", minute: "2-digit" }) +
            (e.endsAt ? ` – ${fmt(e.endsAt, { hour: "numeric", minute: "2-digit" })}` : "");
          return (
            <Reveal as="article" className="event" key={e.id}>
              <p className="event__date">
                <b>{fmt(e.startsAt, { day: "numeric" })}</b>
                {fmt(e.startsAt, { month: "short" })}
              </p>
              <div className="event__body">
                <h3>{e.title}</h3>
                <p className="event__meta">{[when, e.teacher, e.priceLabel].filter(Boolean).join(" · ")}</p>
                <div className="prose">
                  {(e.description ?? "")
                    .split(/\n\s*\n/)
                    .filter(Boolean)
                    .map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                </div>
              </div>
              {e.bookUrl && (
                <a className="btn btn--primary btn--sm" href={e.bookUrl} target="_blank" rel="noopener">
                  Book <Use id="i-arrow" />
                </a>
              )}
            </Reveal>
          );
        })}
      </div>
      <h2 className="book-head">Book online</h2>
    </div>
  );
}
