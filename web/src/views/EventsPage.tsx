/* Converted from the static page; interactive parts are React components. */
import { Reveal } from "@/components/Reveal";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/lib/seo";
import { getEvents } from "@/lib/data";
import { Use } from "@/components/Icons";

/* Workshops listed on the live Events page, word for word, with their Momence information links. */
const WORKSHOPS: { title: string; day: string; month: string; when: string[]; text: string; links: [string, string][] }[] = [
  {
    title: "Breathwork Diving Deeper with Tanja",
    day: "31",
    month: "Oct",
    when: ["Saturday 31 October 2:00 – 3:30 pm"],
    text: "This class moves deeper into conscious connected breathing, where we explore faster breaths combined with holds, riding the wave until a deep sense of consciousness is reached.",
    links: [["More information", "https://momence.com/l/MjhzXdo2"]],
  },
  {
    title: "Foundation Workshop with Rossi",
    day: "14",
    month: "Nov",
    when: ["Saturday 14th November 2:00 – 5:00 pm"],
    text: "This workshop will cover all the poses in the Knoff Yoga Foundation syllabus.",
    links: [["More information", "https://momence.com/l/15hRkWka"]],
  },
  {
    title: "Intermediate Workshop with Rossi",
    day: "28",
    month: "Nov",
    when: ["Day one – Saturday 28th November 2:00 – 5:00 pm", "Day two – Saturday 5th December 2:00 – 5:00 pm"],
    text: "This workshop will cover the poses in the Knoff Yoga Intermediate syllabus. Due to the number of poses in this syllabus the workshop is broken down into two days, you may attend just one or both days.",
    links: [
      ["More information Day one", "https://momence.com/l/79hLO0Lo"],
      ["More information Day two", "https://momence.com/l/rqhW61Wv"],
      ["More information both days", "https://momence.com/l/mXh4Mb4b"],
    ],
  },
];

export default async function EventsPage() {
  const [events] = await Promise.all([getEvents()]);
  return (
    <>
      {" "}
      <section className="page-hero">
        {" "}
        <svg className="blob blob--a" viewBox="0 0 500 500" aria-hidden="true">
          <path
            fill="currentColor"
            d="M421 316Q387 382 323 413T187 427Q121 381 92 309T79 166Q113 93 186 66T331 74Q402 113 428 181T421 316Z"
          />
        </svg>{" "}
        <svg className="blob blob--b" viewBox="0 0 500 500" aria-hidden="true">
          <path
            fill="currentColor"
            d="M421 316Q387 382 323 413T187 427Q121 381 92 309T79 166Q113 93 186 66T331 74Q402 113 428 181T421 316Z"
          />
        </svg>{" "}
        <div className="container page-hero__grid">
          {" "}
          <Reveal>
            {" "}
            <nav aria-label="Breadcrumb">
              <ol className="crumbs">
                <li>
                  <Link href="/pages/home">Home</Link>
                </li>
                <li aria-current="page">Events</li>
              </ol>
            </nav>{" "}
            <p className="eyebrow">Events & workshops</p>{" "}
            <h1>
              Go <em>deeper</em>
            </h1>{" "}
            <p className="lead">
              Workshops, special classes and events at The Yoga School. See what&rsquo;s coming up below, and book your place
              online.
            </p>{" "}
          </Reveal>{" "}
          <Reveal delay={1} className="arch">
            {" "}
            <div className="arch__frame">
              <img
                decoding="async"
                src="/images/headers/studio.jpg"
                alt="The studio set up with mats and blocks, ready for class"
                width="800"
                height="300"
                style={{ objectPosition: "51% 50%" }}
              />
            </div>{" "}
            <p className="arch__badge">
              <span>
                <svg aria-hidden="true">
                  <use href="#i-check" />
                </svg>
              </span>
              Book online
            </p>{" "}
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      <section className="section" style={{ paddingTop: "var(--s-4)" }} aria-label="Upcoming events">
        {" "}
        <div className="container">
          {" "}
          <UpcomingEvents events={events} />{" "}
        </div>{" "}
      </section>{" "}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="workshops-title">
        <div className="container">
          <div className="events">
            <h2 className="book-head" id="workshops-title">
              Workshops
            </h2>
            <div className="events__list">
              {WORKSHOPS.map((w) => (
                <Reveal as="article" className="event" key={w.title}>
                  <p className="event__date">
                    <b>{w.day}</b>
                    {w.month}
                  </p>
                  <div className="event__body">
                    <h3>{w.title}</h3>
                    {w.when.map((t) => (
                      <p className="event__meta" key={t}>
                        {t}
                      </p>
                    ))}
                    <div className="prose">
                      <p>{w.text}</p>
                    </div>
                    {w.links.map(([label, href]) => (
                      <p key={href}>
                        <a className="link-arrow" href={href} target="_blank" rel="noopener">
                          {label} <Use id="i-arrow" />
                          <span className="sr-only">: {w.title} (opens Momence in a new tab)</span>
                        </a>
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="section section--tint" aria-labelledby="regular-title">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Every month</p>
            <h2 id="regular-title">
              Regular events: Sound Meditation &amp; <em>Kirtan</em>
            </h2>
          </Reveal>
          <div className="info-cards">
            <Reveal className="info-card">
              <h3>Sound Meditation with Renee</h3>
              <p>
                Generally every first Friday and every last Saturday of the month (but please check the{" "}
                <Link href="/pages/timetable">timetable</Link> for confirmation), 12:00 – 1:00 pm. Group Sound Meditations are $20
                per person.
              </p>
              <p>
                Contact Renee on <a href="tel:+61428846799">0428 846799</a> or visit her website{" "}
                <a href="http://www.soundangelmusic.com" target="_blank" rel="noopener">
                  www.soundangelmusic.com
                </a>
                . The Yoga School does not take bookings for this event.
              </p>
            </Reveal>
            <Reveal delay={1} className="info-card">
              <h3>Kirtan</h3>
              <p>Every first Saturday of the month, 5:30 – 7:30 pm. By donation, and children are welcome.</p>
              <p>
                For more information visit the &lsquo;Kirtan in Cairns&rsquo; Facebook page or contact the organiser Judy Austin on
                0427 60513 or <a href="mailto:judyearthsister@hotmail.com">judyearthsister@hotmail.com</a>. The Yoga School does
                not take bookings for this event.
              </p>
            </Reveal>
          </div>
        </div>
      </section>{" "}
      <section className="section cta-band" aria-labelledby="cta-title">
        {" "}
        <div className="cta-band__rings" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>{" "}
        <Reveal className="container">
          {" "}
          <p className="breath">Breathe in · Breathe out</p>{" "}
          <h2 id="cta-title">
            Start your <em>journey</em>
          </h2>{" "}
          <p>Yoga is for everyone. Beginners are always welcome. Just bring yourself and a towel.</p>{" "}
          <div className="row-actions">
            {" "}
            <a
              className="btn btn--primary"
              href="https://momence.com/The-Yoga-School/membership/30-days-$99-NS-intro-offer-special!/113989"
              target="_blank"
              rel="noopener"
            >
              Claim the New Student Offer{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </a>{" "}
            <Link className="btn btn--outline" href="/pages/timetable">
              See the timetable
            </Link>{" "}
          </div>{" "}
        </Reveal>{" "}
      </section>{" "}
      <JsonLd data={seo("events").jsonLd} />
    </>
  );
}
