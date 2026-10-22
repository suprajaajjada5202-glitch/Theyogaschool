"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useBodyLock } from "@/hooks/useBodyLock";
import { LOGO, MORE, OFFER_URL, PRIMARY, SHOP, TILES } from "@/lib/site";
import { TileIcon, Use } from "./Icons";
import { NavDrop } from "./NavDrop";
import { ThemeToggle } from "./ThemeToggle";

const HOME_PATHS = ["/", "/home", "/pages/home"];

/** Floating glass header, "More" dropdown, slide-in menu, scroll progress and back-to-top. */
export function Header() {
  const pathname = usePathname() ?? "/";
  const current = HOME_PATHS.includes(pathname) ? "/pages/home" : pathname;
  const light = !HOME_PATHS.includes(pathname); // inner pages have a light hero
  const isCurrent = (href: string) => href === current;

  const [solid, setSolid] = useState(light);
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleBtn = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useBodyLock(menuOpen);

  // Scroll: solid header, progress bar, back-to-top. The header always stays on screen.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setSolid(light || y > 40);
      setProgress(max > 0 ? y / max : 0);
      setShowTop(y > window.innerHeight);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [light]);

  // Close menus when the page changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Mobile menu: focus, Esc, focus trap, close on wide screens
  useEffect(() => {
    if (!menuOpen) return;
    const t = setTimeout(() => closeBtn.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleBtn.current?.focus();
      }
      if (e.key === "Tab" && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>("a, button");
        const first = f[0];
        const lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1180 && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const moreActive = MORE.some((m) => isCurrent(m.href));
  const navLink = (n: (typeof PRIMARY)[number]) => (
    <li key={n.href}>
      <Link href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>
        {n.label}
      </Link>
    </li>
  );
  const headerCls = ["site-header", light && "is-light", solid && "is-solid"].filter(Boolean).join(" ");

  return (
    <>
      <div className="progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }}></span>
      </div>

      <header className={headerCls}>
        <div className="container">
          <div className="island">
            <Link className="brand" href="/pages/home" aria-label="The Yoga School, home">
              <img src={LOGO} alt="The Yoga School logo" width={180} height={180} />
              <span className="brand-text">
                The Yoga School<small>Cairns · Knoff Yoga</small>
              </span>
            </Link>
            <nav className="nav-desktop" aria-label="Main">
              <ul>
                {/* Same order as the old site: About, then Shop */}
                {PRIMARY.slice(0, 2).map(navLink)}
                <NavDrop
                  id="drop-shop"
                  label="Shop"
                  items={SHOP}
                  pathname={pathname}
                  active={current === "/pages/shop"}
                  isCurrent={isCurrent}
                />
                {PRIMARY.slice(2).map(navLink)}
                <NavDrop id="drop-more" label="More" items={MORE} pathname={pathname} active={moreActive} isCurrent={isCurrent} />
              </ul>
            </nav>
            <div className="island__actions">
              <ThemeToggle />
              <Link className="btn btn--teal btn--sm header-cta" href="/pages/timetable">
                Book a Class
              </Link>
              <button
                ref={toggleBtn}
                className="nav-toggle"
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(true)}
              >
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`menu${menuOpen ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menuOpen}
      >
        <div className="menu__backdrop" onClick={() => setMenuOpen(false)}></div>
        <figure className="menu__photo on-dark">
          <img
            src="/images/gallery/DSC00180.jpg"
            alt="Students balancing in tree pose at The Yoga School"
            width={1000}
            height={714}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <p>Stretch your body, calm your mind.</p>
            <p>
              New students:{" "}
              <a href={OFFER_URL} target="_blank" rel="noopener">
                30 days of unlimited classes for $99 →
              </a>
            </p>
          </figcaption>
        </figure>
        <div className="menu__panel" ref={panel}>
          <div className="menu__top">
            <Link className="brand" href="/pages/home" aria-label="The Yoga School, home" onClick={() => setMenuOpen(false)}>
              <img src={LOGO} alt="" width={180} height={180} />
              <span className="brand-text">
                The Yoga School<small>Cairns · Knoff Yoga</small>
              </span>
            </Link>
            <button
              ref={closeBtn}
              className="menu__close"
              type="button"
              aria-label="Close menu"
              onClick={() => {
                setMenuOpen(false);
                toggleBtn.current?.focus();
              }}
            >
              <Use id="i-close" />
            </button>
          </div>
          <p className="menu__label">Explore</p>
          <nav aria-label="Mobile">
            <div className="menu__grid">
              {TILES.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={isCurrent(n.href) ? "is-active" : undefined}
                  aria-current={isCurrent(n.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <TileIcon d={n.icon} />
                  <span>
                    <strong>{n.label}</strong>
                    <small>{n.sub}</small>
                  </span>
                </Link>
              ))}
            </div>
          </nav>
          <div className="menu__cta">
            <Link className="btn btn--teal" href="/pages/timetable" onClick={() => setMenuOpen(false)}>
              Book a Class <Use id="i-arrow" />
            </Link>
            <a className="btn btn--outline btn--sm" href="tel:+61412499700">
              Call us
            </a>
            <a className="btn btn--primary btn--sm" href="https://wa.me/61412499700" target="_blank" rel="noopener">
              <Use id="i-whatsapp" /> WhatsApp
            </a>
          </div>
          <div className="menu__foot">
            <p>Suite 14, 159-161 Pease Street, Piccones Village, Edge Hill, Cairns QLD 4870</p>
            <div className="socials">
              <a href="https://www.facebook.com/theyogaschoolaustralia/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com/theyogaschoolcairns/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                  </g>
                </svg>
              </a>
              <a href="https://www.youtube.com/@theyogaschoolcairns5508" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3-5.2 3Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fab">
        <a
          className={`fab__top${showTop ? " is-visible" : ""}`}
          href="#"
          aria-label="Back to top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            });
          }}
        >
          <Use id="i-up" />
        </a>
        {/* PLACEHOLDER: confirm WhatsApp number */}
        <a
          className="fab__wa"
          href="https://wa.me/61412499700"
          target="_blank"
          rel="noopener"
          aria-label="Chat with The Yoga School on WhatsApp"
        >
          <Use id="i-whatsapp" />
        </a>
      </div>
    </>
  );
}
