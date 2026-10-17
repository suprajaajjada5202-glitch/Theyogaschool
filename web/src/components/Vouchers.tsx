import type { ReactNode } from "react";
import type { Voucher } from "@/lib/types";
import { Use } from "./Icons";
import { Reveal } from "./Reveal";

const money = (n: number | null) => (n == null ? "" : `$${n % 1 ? n.toFixed(2) : n.toLocaleString("en-AU")}`);

/** Gift voucher options from Supabase; when none are published the standard cards (children) show. */
export function Vouchers({ vouchers, children }: { vouchers: Voucher[]; children: ReactNode }) {
  if (!vouchers.length) return <>{children}</>;
  return (
    <div className="info-cards">
      {vouchers.map((v, n) => (
        <Reveal className="info-card voucher" key={v.id} delay={n % 3 || undefined}>
          <p className="voucher__price">{money(v.price)}</p>
          <h3>{v.name}</h3>
          <p>{v.description}</p>
          <a className="btn btn--primary btn--sm" href={v.buyUrl} target="_blank" rel="noopener">
            Buy voucher <Use id="i-arrow" />
          </a>
        </Reveal>
      ))}
    </div>
  );
}
