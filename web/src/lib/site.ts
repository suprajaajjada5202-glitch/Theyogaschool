export const SITE_URL = "https://theyogaschool.com.au";
export const LOGO =
  "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/TheYogaSchool/Site_Logo2.png";
export const OFFER_URL = "https://momence.com/The-Yoga-School/membership/30-days-$99-NS-intro-offer-special!/113989";

export type NavItem = { href: string; label: string; sub: string; icon: string };

const I = {
  home: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z",
  about: "M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z",
  classes: "M4 19V5M4 19h16M8 15V9M12 15V7M16 15v-3",
  teachers: "M9 8a3 3 0 1 0 0 .01M3 20a6 6 0 0 1 12 0M17 11a2.5 2.5 0 1 0 0-.01M15.5 20a4.5 4.5 0 0 1 5.5-4.4",
  training: "M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5",
  schedule: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  prices: "M20 12l-8 8-8-8V4h8zM8 8h.01",
  gallery: "M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5M15 9h.01",
  events: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4M9 15l2 2 4-4",
  testimonials: "M7 7h4v4H8c0 2 1 3 3 3v2c-3 0-4-2-4-5zM14 7h4v4h-3c0 2 1 3 3 3v2c-3 0-4-2-4-5z",
  blog: "M5 4h11l3 3v13H5zM9 9h6M9 13h6M9 17h4",
  faqs: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z",
  workplace: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  contact: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 9.5h.01",
  shop: "M6 7h12l-1 13H7zM9 7a3 3 0 0 1 6 0",
  gift: "M4 8h16v12H4zM12 8v12M4 12h16M12 8S10.5 3 8 3.8C5.8 4.5 7 8 12 8zm0 0s1.5-5 4-4.2C18.2 4.5 17 8 12 8z",
};

const N = (href: string, label: string, sub: string, icon: string): NavItem => ({ href, label, sub, icon });

/** Desktop bar (in order) */
export const PRIMARY: NavItem[] = [
  N("/pages/home", "Home", "Welcome", I.home),
  N("/pages/about", "About", "Our story", I.about),
  N("/pages/classes", "Classes", "Levels 1–4 & more", I.classes),
  N("/pages/teachers", "Teachers", "Meet the team", I.teachers),
  N("/pages/teacher-training", "Training", "With the Masters", I.training),
  N("/pages/timetable", "Schedule", "Live timetable", I.schedule),
  N("/pages/prices", "Pricing", "Passes & memberships", I.prices),
  N("/pages/contact-us", "Contact", "Visit or call us", I.contact),
];

/** "More" dropdown */
export const MORE: NavItem[] = [
  N("/pages/photo-gallery", "Gallery", "Inside the studio", I.gallery),
  N("/pages/events", "Events", "Workshops & specials", I.events),
  N("/pages/testimonials", "Testimonials", "Student stories", I.testimonials),
  N("/pages/blog1", "Blog", "Reflections on practice", I.blog),
  N("/pages/faqs", "FAQs", "Good to know", I.faqs),
  N("/workplace-wellbeing", "Workplace", "Team wellbeing", I.workplace),
  N("/pages/shop", "Shop", "Props & meditation seats", I.shop),
  N("/gift-vouchers", "Gift vouchers", "Give the gift of yoga", I.gift),
];

/** Mobile menu tiles: everything, in a sensible order */
export const TILES: NavItem[] = [...PRIMARY.slice(0, 7), ...MORE.slice(0, 6), PRIMARY[7], MORE[6], MORE[7]];
