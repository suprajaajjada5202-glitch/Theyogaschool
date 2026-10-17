export type Img = { src: string; alt: string; width: number; height: number };
export type GalleryPhoto = Img & { full: string };

export type Teacher = { slug: string; name: string; role: string; spec: string; photo: Img; bio: string[] };

export type ClassItem = {
  slug: string;
  name: string;
  level: string;
  duration: string | null;
  summary: string;
  description: string[];
  tag: string | null;
  image: Img | null;
};

/** path = the article URL (built-in articles keep their original /blog/YYYY/MM/DD/slug address) */
export type Post = {
  slug: string;
  path?: string;
  title: string;
  author: string;
  excerpt: string;
  body: string[];
  image: Img | null;
  publishedAt?: string;
};

export type Video = { id: string; title: string; duration: string };
export type ShortTestimonial = { quote: string; name: string; role: string };
export type Testimonial = { name: string; role: string; paragraphs: string[] };

export type Membership = {
  name: string;
  description: string;
  priceLabel: string;
  period: string | null;
  terms: string;
  features: string[];
  badge: string | null;
  featured: boolean;
  ctaLabel: string;
  ctaUrl: string;
};
export type PassGroup = { title: string; items: { name: string; price: string }[]; note: string | null };

export type Product = {
  name: string;
  category: string;
  description: string;
  priceLabel: string;
  image: Img | null;
  ctaLabel: string;
  ctaUrl: string;
};

export type TimetableRow = {
  id: string;
  day: number; // 1 = Monday … 7 = Sunday
  start: string; // "HH:MM"
  end: string | null;
  className: string;
  classSlug: string | null;
  teacher: string | null;
  level: string | null;
  notes: string | null;
  bookUrl: string | null;
};

export type EventItem = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string | null;
  teacher: string | null;
  priceLabel: string | null;
  description: string | null;
  bookUrl: string | null;
};

export type Voucher = { id: string; name: string; price: number | null; description: string | null; buyUrl: string };
