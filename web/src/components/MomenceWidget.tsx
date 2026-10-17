"use client";
import { useEffect, useRef } from "react";

const SRC = "https://momence.com/plugin/host-schedule/host-schedule.js";
const SETTINGS = { host_id: "23652", teacher_ids: "[]", location_ids: "[]", tag_ids: "[]", default_filter: "show-all" };

/** Live Momence timetable / workshops widget (same account as the current site).
    Momence finds its script via `script[host_id][src$="host-schedule.js"]` and draws the timetable
    right after that script tag, so the script is placed inside this box. A unique query string that
    still ends in "host-schedule.js" makes the module run again after client-side navigation. */
export function MomenceWidget() {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = host.current;
    if (!box) return;
    const s = document.createElement("script");
    s.type = "module";
    s.async = true;
    s.src = `${SRC}?v=${Date.now()}&f=host-schedule.js`;
    Object.entries(SETTINGS).forEach(([k, v]) => s.setAttribute(k, v));
    box.appendChild(s);
    return () => {
      box.innerHTML = "";
    };
  }, []);
  return (
    <>
      <div id="ribbon-schedule"></div>
      <div ref={host} style={{ display: "contents" }}></div>
    </>
  );
}
