"use client";
import Link from "next/link";
import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { heroSlides } from "@/data/content";
import { LOGO, OFFER_URL } from "@/lib/site";

const DURATION = 3500; // time per hero slide (ms)
const pad = (n: number) => String(n).padStart(2, "0");

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));
  const [cycle, setCycle] = useState(0); // restarts the progress-bar animation

  const go = useCallback(
    (i: number) => {
      const next = (i + heroSlides.length) % heroSlides.length;
      setLeaving(current !== next ? current : null);
      setCurrent(next);
      setLoaded((s) => new Set(s).add(next).add((next + 1) % heroSlides.length));
      setCycle((c) => c + 1);
    },
    [current],
  );

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => {
      if (!document.hidden) go(current + 1);
    }, DURATION);
    return () => clearTimeout(t);
  }, [current, paused, cycle, go]);

  useEffect(() => {
    const onLoad = () => setLoaded((s) => new Set(s).add(1));
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <section
      className={`hero on-dark${paused ? " is-paused" : ""}`}
      id="top"
      aria-roledescription="carousel"
      aria-label="The Yoga School studio"
      style={{ "--hero-dur": `${DURATION}ms` } as CSSProperties}
    >
      <div className="hero__slides">
        {heroSlides.map((s, i) => (
          <figure
            key={s.src}
            className={`hero__slide${i === current ? " is-active" : ""}${i === leaving ? " is-leaving" : ""}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${heroSlides.length}`}
            aria-hidden={i !== current}
          >
            <img
              decoding="async"
              src={loaded.has(i) ? s.src : undefined}
              alt={s.alt}
              width={s.width}
              height={s.height}
              fetchPriority={i === 0 ? "high" : undefined}
            />
          </figure>
        ))}
      </div>

      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Authentic Knoff Yoga · Cairns</p>
          <h1>
            <span className="line">
              <span>Stretch your body,</span>
            </span>
            <span className="line">
              <span>
                <em>calm your mind.</em>
              </span>
            </span>
          </h1>
          <p className="hero__sub">
            Our passion is to share the physical, mental and spiritual benefits of yoga. Beginners are always welcome.
          </p>
          <div className="hero__actions">
            <a className="btn btn--teal" href={OFFER_URL} target="_blank" rel="noopener">
              Claim the New Student Offer{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </a>{" "}
            <Link className="btn btn--glass" href="/pages/classes">
              Explore Classes
            </Link>
          </div>
        </div>

        <div className="hero__panel">
          <a className="hero__offer" href={OFFER_URL} target="_blank" rel="noopener">
            <img decoding="async" src={LOGO} alt="" width={180} height={180} />
            <span>
              <strong>30 days for $99</strong>
              <span>Unlimited classes for new students*</span>
            </span>
          </a>
          <div className="hero__controls">
            <span className="hero__count" aria-live="polite">
              <span>{pad(current + 1)}</span> / {pad(heroSlides.length)}
            </span>
            <div className="hero__bars" role="group" aria-label="Choose slide">
              {heroSlides.map((_, i) => (
                <button
                  key={i === current ? `active-${cycle}` : i}
                  type="button"
                  className={i === current ? "is-active" : i < current ? "is-done" : undefined}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === current}
                  onClick={() => go(i)}
                >
                  <span></span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="icon-btn"
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
              onClick={() => setPaused((p) => !p)}
            >
              <svg aria-hidden="true">
                <use href={paused ? "#i-play" : "#i-pause"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span className="hero__scroll" aria-hidden="true"></span>
    </section>
  );
}
