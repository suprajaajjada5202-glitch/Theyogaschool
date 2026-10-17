"use client";
import { useState } from "react";
import { moments } from "@/data/content";
import { Reveal } from "./Reveal";

/** Continuously moving photo strip (CSS animation); the button pauses it. */
export function MomentsStrip() {
  const [paused, setPaused] = useState(false);
  const row = (copy: boolean) => (
    <ul aria-hidden={copy || undefined}>
      {moments.map((m) => (
        <li className="moment" key={m.src}>
          <img decoding="async" src={m.src} alt={copy ? "" : m.alt} width={m.width} height={m.height} loading="lazy" />
        </li>
      ))}
    </ul>
  );
  return (
    <Reveal className={`moments${paused ? " is-paused" : ""}`}>
      <div className="moments__head">
        <p className="eyebrow">Studio moments</p>
        <button
          type="button"
          className="arrow arrow--sm"
          aria-label={paused ? "Play photo strip" : "Pause photo strip"}
          onClick={() => setPaused((p) => !p)}
        >
          <svg aria-hidden="true">
            <use href={paused ? "#i-play" : "#i-pause"} />
          </svg>
        </button>
      </div>
      <div className="moments__viewport" aria-label="Studio photos">
        <div className="moments__track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </Reveal>
  );
}
