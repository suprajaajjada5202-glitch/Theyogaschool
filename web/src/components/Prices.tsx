import { Fragment, type ReactNode } from "react";
import type { Membership, PassGroup } from "@/lib/types";
import { CtaLink } from "./CtaLink";
import { Use } from "./Icons";
import { Reveal } from "./Reveal";

/** Membership cards (Supabase "prices" rows with category = membership, or built-in). */
export function MembershipCards({ plans }: { plans: Membership[] }) {
  return (
    <div className="pricing">
      {plans.map((p, n) => (
        <Reveal as="article" key={p.name} className={`plan${p.featured ? " plan--featured on-dark" : ""}`} delay={n || undefined}>
          {p.badge && <span className="plan__badge">{p.badge}</span>}
          <h3>{p.name}</h3>
          <p className="plan__desc">{p.description}</p>
          <p className="plan__price">
            {p.priceLabel} {p.period && <span>/ {p.period}</span>}
          </p>
          {p.terms && <p className="plan__terms">{p.terms}</p>}
          <ul>
            {p.features.map((f) => (
              <li key={f}>
                <Use id="i-check" />
                {f}
              </li>
            ))}
          </ul>
          <CtaLink className={`btn ${p.featured ? "btn--teal" : "btn--outline"}`} href={p.ctaUrl}>
            {p.ctaLabel}
          </CtaLink>
        </Reveal>
      ))}
    </div>
  );
}

/** Text with the studio phone number turned into a call link. */
function withPhone(text: string) {
  const parts = text.split("0412 499 700");
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && <a href="tel:+61412499700">0412 499 700</a>}
    </span>
  ));
}

/** Passes lists in two columns, then the fine print (children). */
export function PassesList({ groups, children }: { groups: PassGroup[]; children?: ReactNode }) {
  const half = Math.min(3, Math.ceil(groups.length / 2) + (groups.length > 4 ? 1 : 0));
  const columns = [groups.slice(0, half), groups.slice(half)];
  return (
    <div className="passes__body">
      {columns.map((col, c) => (
        <div className="price-list" key={c}>
          {col.map((g) => (
            <Fragment key={g.title}>
              <h4>{g.title}</h4>
              <ul>
                {g.items.map((i) => (
                  <li key={i.name}>
                    <span>{i.name}</span>
                    <span>{i.price}</span>
                  </li>
                ))}
              </ul>
              {g.note && <small>{withPhone(g.note)}</small>}
            </Fragment>
          ))}
        </div>
      ))}
      {children}
    </div>
  );
}
