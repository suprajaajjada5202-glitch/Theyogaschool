import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer on-dark">
      {" "}
      <div className="container">
        {" "}
        <div className="footer__grid">
          {" "}
          <div className="footer__brand">
            {" "}
            <img
              decoding="async"
              src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/Site_Logo2.png"
              alt="The Yoga School logo"
              width="180"
              height="180"
              loading="lazy"
            />{" "}
            <p>Stretch your body, calm your mind.</p>{" "}
            <div className="socials">
              {" "}
              <a
                href="https://www.facebook.com/theyogaschoolaustralia/"
                target="_blank"
                rel="noopener"
                aria-label="The Yoga School on Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z"
                  />
                </svg>
              </a>{" "}
              <a
                href="https://www.instagram.com/theyogaschoolcairns/"
                target="_blank"
                rel="noopener"
                aria-label="The Yoga School on Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
                  </g>
                </svg>
              </a>{" "}
              <a
                href="https://www.youtube.com/@theyogaschoolcairns5508"
                target="_blank"
                rel="noopener"
                aria-label="The Yoga School on YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3-5.2 3Z"
                  />
                </svg>
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>Explore</h3>{" "}
            <ul className="footer__links">
              {" "}
              <li>
                <Link href="/pages/about">About</Link>
              </li>{" "}
              <li>
                <Link href="/pages/classes">Classes</Link>
              </li>{" "}
              <li>
                <Link href="/pages/teachers">Teachers</Link>
              </li>{" "}
              <li>
                <Link href="/pages/timetable">Timetable</Link>
              </li>{" "}
              <li>
                <Link href="/pages/prices">Prices</Link>
              </li>{" "}
              <li>
                <Link href="/pages/photo-gallery">Gallery</Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>More</h3>{" "}
            <ul className="footer__links">
              {" "}
              <li>
                <Link href="/pages/teacher-training">Teacher Training</Link>
              </li>{" "}
              <li>
                <Link href="/workplace-wellbeing">Workplace Wellbeing</Link>
              </li>{" "}
              <li>
                <Link href="/pages/blog1">Blog</Link>
              </li>{" "}
              <li>
                <Link href="/pages/faqs">FAQs</Link>
              </li>{" "}
              <li>
                <Link href="/pages/events">Events</Link>
              </li>{" "}
              <li>
                <Link href="/pages/testimonials">Testimonials</Link>
              </li>{" "}
              <li>
                <Link href="/pages/videos">Videos</Link>
              </li>{" "}
              <li>
                <Link href="/gift-vouchers">Gift Vouchers</Link>
              </li>{" "}
              <li>
                <Link href="/pages/shop">Shop</Link>
              </li>{" "}
              <li>
                <a href="https://momence.com/video/plugin/23652" target="_blank" rel="noopener">
                  On-demand Videos
                </a>
              </li>{" "}
              <li>
                <Link href="/pages/NewStudentRegistration">New Student Registration</Link>
              </li>{" "}
              <li>
                <Link href="/pages/terms-and-conditions">Terms &amp; Conditions</Link>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3>Visit</h3>{" "}
            <address style={{ fontStyle: "normal" }}>
              Suite 14, 159-161 Pease Street
              <br />
              Piccones Village, Edge Hill
              <br />
              Cairns QLD 4870, Australia
            </address>{" "}
            <p style={{ marginTop: "16px" }}>
              <a href="tel:+61412499700">0412 499 700</a>
              <br />
              <a href="mailto:info@theyogaschool.com.au">info@theyogaschool.com.au</a>
            </p>{" "}
            <p>
              <a href="https://momence.com/sign-in" target="_blank" rel="noopener">
                Student Login →
              </a>
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <p className="footer__word" aria-hidden="true">
          calm your mind
        </p>{" "}
        <div className="footer__bottom">
          {" "}
          <p>
            © <span>{new Date().getFullYear()}</span> The Yoga School. All rights reserved.
          </p>{" "}
          <p>
            Website by{" "}
            <a href="https://voolasoftwaresolutions.com/" target="_blank" rel="noopener">
              Voola Software Solutions
            </a>
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}
