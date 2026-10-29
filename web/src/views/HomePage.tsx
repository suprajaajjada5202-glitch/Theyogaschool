/* Converted from the static page; interactive parts are React components. */
import { HeroSlider } from "@/components/HeroSlider";
import { InlineYouTube } from "@/components/InlineYouTube";
import { MomentsStrip } from "@/components/MomentsStrip";
import { PostGrid } from "@/components/PostGrid";
import { MembershipCards } from "@/components/Prices";
import { Reveal } from "@/components/Reveal";
import { ClassCards } from "@/components/ClassRows";
import { LocateUs } from "@/components/LocateUs";
import { QuickLinks } from "@/components/QuickLinks";
import { SliderBar, SliderNav, SliderTrack } from "@/components/Slider";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { seo } from "@/lib/seo";
import { getClasses, getMemberships, getPosts, getProducts } from "@/lib/data";
import { getUpcomingClasses } from "@/lib/momence";
import { UpcomingClasses } from "@/components/UpcomingClasses";
import { ShopBanner } from "@/components/ShopBanner";

export default async function HomePage() {
  const [classes, memberships, posts, upcoming, products] = await Promise.all([
    getClasses(),
    getMemberships(),
    getPosts(),
    getUpcomingClasses(10),
    getProducts(),
  ]);

  return (
    <>
      <HeroSlider />{" "}
      <div className="marquee" aria-label="Classes we offer">
        {" "}
        <div className="marquee__track">
          {" "}
          <ul>
            <li>Knoff Yoga</li>
            <li>Yin Yoga</li>
            <li>Chair Yoga</li>
            <li>Strength Classes</li>
            <li>Mobility Classes</li>
            <li>Private Sessions</li>
            <li>Teacher Training</li>
            <li>Beginners Welcome</li>
          </ul>{" "}
          <ul aria-hidden="true">
            <li>Knoff Yoga</li>
            <li>Yin Yoga</li>
            <li>Chair Yoga</li>
            <li>Strength Classes</li>
            <li>Mobility Classes</li>
            <li>Private Sessions</li>
            <li>Teacher Training</li>
            <li>Beginners Welcome</li>
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <QuickLinks />
      <UpcomingClasses classes={upcoming} />{" "}
      <section className="section clip-x" aria-labelledby="intro-title">
        {" "}
        <div className="container">
          {" "}
          <div className="intro">
            {" "}
            <Reveal className="arch">
              {" "}
              <div className="arch__frame">
                <img
                  decoding="async"
                  src="/images/master-teachers.jpg"
                  alt="Master Teachers Nicky Knoff and James Bryan smiling in front of The Yoga School logo"
                  width="684"
                  height="629"
                  loading="lazy"
                />
              </div>{" "}
              <p className="arch__badge">
                <span>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                </span>
                Nicky Knoff & James Bryan
              </p>{" "}
            </Reveal>{" "}
            <Reveal delay={1}>
              {" "}
              <p className="eyebrow">Welcome to The Yoga School</p>{" "}
              <h2 id="intro-title">
                The only yoga school in Cairns with <em>true Master Teachers</em>
              </h2>{" "}
              <p className="lead">
                Our school is steeped in authenticity and knowledge of traditional yoga. Every teacher is trained exclusively by
                world-renowned Master Teachers Nicky Knoff and James Bryan, so you are in safe hands.
              </p>{" "}
              <div className="page-hero__actions">
                {" "}
                <Link className="btn btn--primary" href="/pages/about">
                  Our story{" "}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </Link>{" "}
                <Link className="btn btn--outline" href="/pages/teachers">
                  Meet the teachers
                </Link>{" "}
              </div>{" "}
            </Reveal>{" "}
          </div>{" "}
          <div className="stats-row">
            {" "}
            <Reveal className="tile stat stat--navy">
              <p className="stat__value">20</p>
              <p className="stat__label">Classes every week</p>
            </Reveal>{" "}
            <Reveal delay={1} className="tile stat stat--teal">
              <p className="stat__value">4</p>
              <p className="stat__label">Levels of study, plus Yin, Chair, Strength & Mobility</p>
            </Reveal>{" "}
            <Reveal delay={2} className="tile stat stat--pink">
              <p className="stat__value">
                80<small>+ yrs</small>
              </p>
              <p className="stat__label">Combined teaching experience of our Master Teachers</p>
            </Reveal>{" "}
            <Reveal delay={3} className="tile stat">
              <p className="stat__value">
                99.99<small>%</small>
              </p>
              <p className="stat__label">Of airborne particles removed in our purified studio</p>
            </Reveal>{" "}
          </div>{" "}
          <MomentsStrip />{" "}
        </div>{" "}
      </section>{" "}
      <svg className="wave " viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 48h1440V20c-120 18-240 28-360 20S840 6 720 6 480 30 360 34 120 22 0 12z" />
      </svg>{" "}
      <section className="section section--tint clip-x" style={{ paddingTop: "var(--s-6)" }} aria-labelledby="classes-title">
        {" "}
        <div className="container">
          {" "}
          <Reveal className="section-head section-head--row">
            <div>
              <p className="eyebrow">Classes & programs</p>
              <h2 id="classes-title">
                A comprehensive <em>yoga education</em>
              </h2>
              <p className="lead">4 levels of study and 20 classes a week. Students of every level of experience can benefit.</p>
            </div>
            <SliderNav target="classes-track" prevLabel="Previous classes" nextLabel="Next classes" pauseLabel="Pause classes">
              {" "}
            </SliderNav>
          </Reveal>{" "}
          <Reveal className="slider">
            {" "}
            <SliderTrack id="classes-track" label="Classes, scroll horizontally" auto={4000}>
              <ClassCards classes={classes} />
            </SliderTrack>{" "}
            <div className="slider-foot">
              <SliderBar target="classes-track" />
            </div>{" "}
          </Reveal>{" "}
          <Reveal className="section-foot">
            <Link className="btn btn--primary" href="/pages/classes">
              Explore all classes{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </Reveal>{" "}
          <div className="features">
            {" "}
            <Reveal className="feature">
              {" "}
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3Z"
                  />
                </svg>
              </div>{" "}
              <div>
                <h3>True Master Teachers</h3>
                <p>The only school in Cairns led by true Master Teachers.</p>
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={1} className="feature">
              {" "}
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />
                    <path d="m9 12 2 2 4-4" />
                  </g>
                </svg>
              </div>{" "}
              <div>
                <h3>Authentic, not a fad</h3>
                <p>Traditional yoga, tried and tested for decades.</p>
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={2} className="feature">
              {" "}
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="9" width="18" height="6" rx="3" />
                    <path d="M7 9v6M17 9v6" />
                  </g>
                </svg>
              </div>{" "}
              <div>
                <h3>Premium mats & props</h3>
                <p>Everything provided. Just bring a towel and water.</p>
              </div>{" "}
            </Reveal>{" "}
            <Reveal className="feature">
              {" "}
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"
                  />
                </svg>
              </div>{" "}
              <div>
                <h3>Clean, cool air</h3>
                <p>Air-conditioned studio with powerful air purifiers.</p>
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={1} className="feature">
              {" "}
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="2" />
                    <path d="M10 9h4l-1 5h3l2 6M13 14l-3 6M6 13a6 6 0 1 0 8 6" />
                  </g>
                </svg>
              </div>{" "}
              <div>
                <h3>Easy access</h3>
                <p>Street-level studio, fully wheelchair accessible.</p>
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={2} className="feature">
              {" "}
              <div className="feature__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 17h14l-1.5-6.5A2 2 0 0 0 15.6 9H8.4a2 2 0 0 0-1.9 1.5L5 17Z" />
                    <circle cx="8" cy="17" r="2" />
                    <circle cx="16" cy="17" r="2" />
                  </g>
                </svg>
              </div>{" "}
              <div>
                <h3>Free parking</h3>
                <p>Some undercover, under 60 seconds to the studio.</p>
              </div>{" "}
            </Reveal>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ============ HIGHLIGHTS SLIDER (automatic) ============ */}{" "}
      <section className="section section--white highlights clip-x" aria-labelledby="hl-title">
        {" "}
        <div className="container">
          {" "}
          <Reveal className="section-head section-head--row">
            {" "}
            <div>
              {" "}
              <p className="eyebrow">What’s on</p>{" "}
              <h2 id="hl-title">
                Highlights at <em>The Yoga School</em>
              </h2>{" "}
            </div>{" "}
            <SliderNav target="hl-track" prevLabel="Previous highlight" nextLabel="Next highlight" pauseLabel="Pause highlights">
              {" "}
            </SliderNav>{" "}
          </Reveal>{" "}
          <Reveal className="slider slider--1" aria-roledescription="carousel" aria-label="Highlights">
            {" "}
            <SliderTrack id="hl-track" label="" auto={5000}>
              {" "}
              <li className="slide hl" aria-roledescription="slide" aria-label="1 of 5">
                {" "}
                <div className="hl__media hl__media--contain">
                  <img
                    decoding="async"
                    src="/images/offer-banner.png"
                    alt="Introduction offer, 30 days for $99"
                    width="708"
                    height="263"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="hl__body">
                  {" "}
                  <p className="eyebrow">New students</p> <h3>30 days of unlimited classes for $99</h3>{" "}
                  <p>Knoff Yoga, Yin Yoga, Chair Yoga, Strength and Mobility classes. Conditions apply.</p>{" "}
                  <a
                    className="btn btn--primary btn--sm"
                    href="https://momence.com/The-Yoga-School/membership/30-days-$99-NS-intro-offer-special!/113989"
                    target="_blank"
                    rel="noopener"
                  >
                    Claim offer{" "}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </a>{" "}
                </div>{" "}
              </li>{" "}
              <li className="slide hl" aria-roledescription="slide" aria-label="2 of 5">
                {" "}
                <div className="hl__media hl__media--cover">
                  <img
                    decoding="async"
                    src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/dynpic.jpg"
                    alt="Master Teachers Nicky Knoff and James Bryan"
                    width="684"
                    height="629"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="hl__body">
                  {" "}
                  <p className="eyebrow">Teacher training</p> <h3>Train with the Masters</h3>{" "}
                  <p>Yoga Alliance registered (RYS200 and RYS300) with 9 levels of training, from Discovery to Master.</p>{" "}
                  <Link className="btn btn--primary btn--sm" href="/pages/teacher-training">
                    Explore training{" "}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>{" "}
                </div>{" "}
              </li>{" "}
              <li className="slide hl" aria-roledescription="slide" aria-label="3 of 5">
                {" "}
                <div className="hl__media hl__media--cover">
                  <img
                    decoding="async"
                    src="/images/gallery/DSC00019edit.jpg"
                    alt="A teacher giving a student a hands-on adjustment"
                    width="5472"
                    height="3080"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="hl__body">
                  {" "}
                  <p className="eyebrow">Private sessions</p> <h3>One-on-one, at your pace</h3>{" "}
                  <p>60 or 90 minute sessions for technique and specific health challenges. Small groups welcome.</p>{" "}
                  <Link className="btn btn--primary btn--sm" href="/pages/classes#class-private">
                    See private sessions{" "}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>{" "}
                </div>{" "}
              </li>{" "}
              <li className="slide hl" aria-roledescription="slide" aria-label="4 of 5">
                {" "}
                <div className="hl__media hl__media--cover">
                  <img
                    decoding="async"
                    src="/images/gallery/DSC00128.jpg"
                    alt="A large group practising triangle pose together"
                    width="2308"
                    height="1299"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="hl__body">
                  {" "}
                  <p className="eyebrow">Workplace wellbeing</p> <h3>Wellbeing for your whole team</h3>{" "}
                  <p>Breath work, yoga and meditation for local companies, government bodies and private groups.</p>{" "}
                  <Link className="btn btn--primary btn--sm" href="/workplace-wellbeing">
                    Request a quote{" "}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </Link>{" "}
                </div>{" "}
              </li>{" "}
              <li className="slide hl" aria-roledescription="slide" aria-label="5 of 5">
                {" "}
                <div className="hl__media hl__media--cover">
                  <img
                    decoding="async"
                    src="/images/gallery/DSC00090edit.jpg"
                    alt="Students standing with arms raised overhead"
                    width="3827"
                    height="2734"
                    loading="lazy"
                  />
                </div>{" "}
                <div className="hl__body">
                  {" "}
                  <p className="eyebrow">Gift vouchers</p> <h3>Give the gift of yoga</h3>{" "}
                  <p>Buy online or at the studio in Piccones Village, Edge Hill.</p>{" "}
                  <a className="btn btn--primary btn--sm" href="https://momence.com/gcc/23652" target="_blank" rel="noopener">
                    Buy a voucher{" "}
                    <svg aria-hidden="true">
                      <use href="#i-arrow" />
                    </svg>
                  </a>{" "}
                </div>{" "}
              </li>{" "}
            </SliderTrack>{" "}
            <div className="slider-foot">
              <SliderBar target="hl-track" />
            </div>{" "}
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      <section className="section section--white clip-x" aria-labelledby="teachers-title">
        {" "}
        <div className="container">
          {" "}
          <Reveal className="section-head section-head--row">
            <div>
              <p className="eyebrow">Our teachers</p>
              <h2 id="teachers-title">
                Meet the <em>team</em>
              </h2>
              <p className="lead">Every teacher is trained in the Knoff Yoga system. Tap a portrait to read their story.</p>
            </div>
            <SliderNav
              target="teachers-track"
              prevLabel="Previous teachers"
              nextLabel="Next teachers"
              pauseLabel="Pause teachers"
            >
              {" "}
            </SliderNav>
          </Reveal>{" "}
          <Reveal className="slider slider--4">
            {" "}
            <SliderTrack id="teachers-track" label="Teachers, scroll horizontally" auto={3000}>
              {" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#owenscotts" aria-label="Read Owen Scotts's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_10.jpg"
                      alt="Portrait of Owen Scotts"
                      width="457"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Owen Scotts</h3> <p className="teacher__role">Concierge</p>{" "}
                <p className="teacher__spec">Welcoming new students for over 19 years</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#nicolamaxwell" aria-label="Read Nicola Maxwell's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_1.jpg"
                      alt="Portrait of Nicola Maxwell"
                      width="457"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Nicola Maxwell</h3> <p className="teacher__role">Teacher & Office Manager</p>{" "}
                <p className="teacher__spec">Yoga Alliance E-RYT 500 · Kids & Teens yoga</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#rossipostler" aria-label="Read Rossi Postler's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_2.jpg"
                      alt="Portrait of Rossi Postler"
                      width="570"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Rossi Postler</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">Knoff Master Level teacher training</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#jenniferearl" aria-label="Read Jennifer Earl's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_6.jpg"
                      alt="Portrait of Jennifer Earl"
                      width="457"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Jennifer Earl</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">Hatha yoga & Ayurveda, studied in India</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#ronnieperry" aria-label="Read Ronnie Perry's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_0.jpg"
                      alt="Portrait of Ronnie Perry"
                      width="456"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Ronnie Perry</h3> <p className="teacher__role">Teacher & Studio Owner</p>{" "}
                <p className="teacher__spec">200 hrs Knoff teacher training · owner since 2018</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#tanjarichter" aria-label="Read Tanja Richter's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_7.jpg"
                      alt="Portrait of Tanja Richter"
                      width="455"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Tanja Richter</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">500+ hrs training · Chair Yoga & Therapy A</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#pennieburke" aria-label="Read Pennie Burke's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_8.jpg"
                      alt="Portrait of Pennie Burke"
                      width="457"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Pennie Burke</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">20+ years of practice · Chair & Holistic A</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#tinafielder" aria-label="Read Tina Fielder's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_9.jpg"
                      alt="Portrait of Tina Fielder"
                      width="456"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Tina Fielder</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">Trained with Nicky Knoff · yoga for all ages</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#nicolamellick" aria-label="Read Nicola Mellick's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_5.jpg"
                      alt="Portrait of Nicola Mellick"
                      width="455"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Nicola Mellick</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">Pregnancy yoga · Yoga Therapy A & B</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#janwatson" aria-label="Read Jan Watson's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_4.jpg"
                      alt="Portrait of Jan Watson"
                      width="640"
                      height="593"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Jan Watson</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">Certified Iyengar teacher · Senior Teacher, Yoga Australia</p>{" "}
              </li>{" "}
              <li className="slide teacher">
                {" "}
                <Link className="teacher__btn" href="/pages/teachers#tomokogregory" aria-label="Read Tomoko Gregory's bio">
                  {" "}
                  <span className="teacher__photo">
                    <img
                      decoding="async"
                      src="/images/teachers/teacher_3.jpg"
                      alt="Portrait of Tomoko Gregory"
                      width="605"
                      height="640"
                      loading="lazy"
                    />
                  </span>{" "}
                  <span className="teacher__more" aria-hidden="true">
                    Read bio{" "}
                    <svg>
                      <use href="#i-arrow" />
                    </svg>
                  </span>{" "}
                </Link>{" "}
                <h3>Tomoko Gregory</h3> <p className="teacher__role">Yoga Teacher</p>{" "}
                <p className="teacher__spec">All 9 levels of Knoff teacher training</p>{" "}
              </li>{" "}
            </SliderTrack>{" "}
            <div className="slider-foot">
              <SliderBar target="teachers-track" />
            </div>{" "}
          </Reveal>{" "}
          <Reveal className="section-foot">
            <Link className="btn btn--outline" href="/pages/teachers">
              All teacher profiles{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      <section className="section section--dark on-dark clip-x" aria-labelledby="training-title">
        {" "}
        <div className="container">
          {" "}
          <div className="split">
            {" "}
            <Reveal>
              {" "}
              <p className="eyebrow">Teacher training</p>{" "}
              <h2 id="training-title">
                Train with the <em>Masters</em>
              </h2>{" "}
              <p className="lead">
                Study exclusively with world-renowned Master Teachers Nicky Knoff and James Bryan. Teacher training is provided by
                The Yoga School’s sister company, Knoff Yoga.
              </p>{" "}
              <ul className="facts">
                {" "}
                <li>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span>Over 21 years combined Teacher Training experience and over 8 decades teaching Yoga</span>
                </li>{" "}
                <li>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span>Yoga Alliance registered (RYS200 and RYS300)</span>
                </li>{" "}
                <li>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span>9 levels of training (Discovery to Master)</span>
                </li>{" "}
                <li>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span>Intelligent, systematic and comprehensive training</span>
                </li>{" "}
                <li>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span>Courses conducted nationally and internationally</span>
                </li>{" "}
                <li>
                  <svg aria-hidden="true">
                    <use href="#i-check" />
                  </svg>
                  <span>Early-bird discount for registrations</span>
                </li>{" "}
              </ul>{" "}
              <div className="hero__actions">
                {" "}
                <Link className="btn btn--teal" href="/pages/teacher-training">
                  Explore teacher training{" "}
                  <svg aria-hidden="true">
                    <use href="#i-arrow" />
                  </svg>
                </Link>{" "}
                <Link className="btn btn--glass" href="/pages/contact-us?enquiry=Teacher%20training">
                  Ask about training
                </Link>{" "}
              </div>{" "}
              <p className="badges__note">Knoff Yoga is registered with Yoga Alliance (RYS200 and RYS300)</p>
              <div className="badges">
                {" "}
                <img
                  decoding="async"
                  className="wide"
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/YA_copy.png"
                  alt="Yoga Alliance"
                  width="448"
                  height="206"
                  loading="lazy"
                />{" "}
                <img
                  decoding="async"
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/the-yoga-school/S01-YA-SCHOOL-RYS-200.png"
                  alt="Yoga Alliance Registered Yoga School RYS 200"
                  width="155"
                  height="155"
                  loading="lazy"
                />{" "}
                <img
                  decoding="async"
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/S01-YA-SCHOOL-RYS-300_copy1.png"
                  alt="Yoga Alliance Registered Yoga School RYS 300"
                  width="155"
                  height="155"
                  loading="lazy"
                />{" "}
                <img
                  decoding="async"
                  className="wide"
                  src="https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/knofflogo.png"
                  alt="Knoff Yoga logo"
                  width="306"
                  height="127"
                  loading="lazy"
                />{" "}
              </div>{" "}
            </Reveal>{" "}
            <Reveal delay={1} className="tt-photo">
              <figure>
                <img
                  decoding="async"
                  src="/images/master-teachers.jpg"
                  alt="Master Teachers Nicky Knoff and James Bryan"
                  width="684"
                  height="629"
                  loading="lazy"
                />
                <figcaption>Master Teachers, Nicky Knoff and James Bryan</figcaption>
              </figure>
            </Reveal>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="section section--dark on-dark" style={{ paddingTop: 0 }} aria-labelledby="overview-title">
        <div className="container">
          <Reveal className="tt-video">
            <p className="eyebrow">Watch</p>
            <h2 id="overview-title">
              Knoff Yoga <em>overview</em>
            </h2>
              <InlineYouTube
                id="X9W4SDA4m8Q"
                label="Play video: Knoff Yoga Overview (8 minutes 50 seconds)"
                caption="▶ Knoff Yoga Overview · 8:50"
                thumb="https://i.ytimg.com/vi/X9W4SDA4m8Q/maxresdefault.jpg"
              />{" "}
            <p className="tt-channel">
              <Link href="/pages/videos">Watch more of our videos</Link>
            </p>
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      <section
        className="section section--dark on-dark"
        id="testimonials"
        aria-labelledby="testimonials-title"
        style={{ paddingTop: "0" }}
      >
        {" "}
        <div className="container">
          {" "}
          <h2 id="testimonials-title" className="sr-only">
            What our students say
          </h2>{" "}
          <TestimonialSlider />{" "}
          <Reveal className="section-foot">
            <Link className="btn btn--glass" href="/pages/testimonials">
              Read more student stories{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      <section className="section" aria-labelledby="pricing-title">
        {" "}
        <div className="container">
          {" "}
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Memberships</p>
            <h2 id="pricing-title">
              Affordable, <em>unlimited</em> yoga
            </h2>
            <p className="lead">Fortnightly direct debit with a minimum 12-week commitment.</p>
          </Reveal>{" "}
          <MembershipCards plans={memberships} />{" "}
          <Reveal className="section-foot">
            <Link className="btn btn--outline" href="/pages/prices">
              All passes & prices{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </Reveal>{" "}
        </div>{" "}
      </section>{" "}
      <ShopBanner products={products} />{" "}
      <section className="section section--tint" aria-labelledby="blog-title">
        {" "}
        <div className="container">
          {" "}
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">From the blog</p>
            <h2 id="blog-title">
              Reflections on <em>practice</em>
            </h2>
          </Reveal>{" "}
          <PostGrid posts={posts.slice(0, 3)} />{" "}
          <Reveal className="section-foot">
            <Link className="btn btn--outline" href="/pages/blog1">
              Visit the blog{" "}
              <svg aria-hidden="true">
                <use href="#i-arrow" />
              </svg>
            </Link>
          </Reveal>{" "}
        </div>{" "}
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
      <LocateUs />
      <JsonLd data={seo("home").jsonLd} />
    </>
  );
}
