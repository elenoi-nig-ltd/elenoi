import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { businesses, getBusiness } from "@/lib/businesses";

export function generateStaticParams() {
  return businesses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const business = getBusiness((await params).slug);
  if (!business) return {};
  return { title: business.name, description: business.summary };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const business = getBusiness((await params).slug);
  if (!business) notFound();
  const currentIndex = businesses.findIndex(
    ({ slug }) => slug === business.slug,
  );
  const nextBusiness = businesses[(currentIndex + 1) % businesses.length];

  return (
    <>
      <section className={`detail-hero detail-hero--${business.accent}`}>
        <div className="detail-hero__image">
          <Image
            src={business.image}
            alt={`${business.name} activity`}
            fill
            priority
            sizes="100vw"
          />
          <div className="detail-hero__veil" />
        </div>
        <div className="detail-hero__content wrap">
          <Link className="back-link text-gray-300" href="/businesses">
            <ArrowLeft size={16} /> All businesses
          </Link>
          <p className="eyebrow">{business.activity}</p>
          <h1 className="text-gray-300">{business.name}</h1>
          <p>{business.eyebrow}</p>
        </div>
      </section>
      <section className="detail-body wrap">
        <aside>
          <span>
            Activity {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(businesses.length).padStart(2, "0")}
          </span>
          <p>
            <MapPin size={15} /> {business.location}
          </p>
        </aside>
        <div className="detail-copy">
          <p className="eyebrow">What we do</p>
          <h2>{business.summary}</h2>
          <p>{business.description}</p>
          <div className="service-list">
            {business.services.map((service, index) => (
              <span key={service}>
                <i>0{index + 1}</i>
                {service}
              </span>
            ))}
          </div>
          {business.externalUrl && (
            <a
              className="button button--green"
              href={business.externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit business website <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </section>
      <section className="next-business wrap">
        <p className="section-number">Next activity</p>
        <Link href={`/businesses/${nextBusiness.slug}`}>
          <span>{nextBusiness.activity}</span>
          <strong>{nextBusiness.name}</strong>
          <ArrowUpRight size={28} />
        </Link>
      </section>
    </>
  );
}
