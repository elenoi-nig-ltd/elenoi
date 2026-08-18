import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Business } from "@/lib/businesses";

export function BusinessRow({ business, index }: { business: Business; index: number }) {
  return (
    <article className={`business-row business-row--${business.accent}`}>
      <div className="business-row__number">{String(index + 1).padStart(2, "0")}</div>
      <div className="business-row__image">
        <Image src={business.image} alt={`${business.name} activity`} fill sizes="(max-width: 800px) 100vw, 34vw" />
      </div>
      <div className="business-row__content">
        <p className="eyebrow">{business.activity}</p>
        <h2>{business.name}</h2>
        <p>{business.summary}</p>
        <div className="business-row__meta">
          <span><MapPin size={14} aria-hidden="true" /> {business.location}</span>
          <Link href={`/businesses/${business.slug}`}>
            View profile <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
