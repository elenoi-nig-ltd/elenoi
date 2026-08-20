import type { Metadata } from "next";
import { BusinessRow } from "@/components/business-row";
import { businesses } from "@/lib/businesses";

export const metadata: Metadata = {
  title: "Our Businesses",
  description: "Explore ELENOI's active businesses across seven sectors of the Nigerian economy.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesPage() {
  return (
    <>
      <section className="page-hero page-hero--portfolio wrap">
        <div className="page-hero__label"><p className="section-number">Our portfolio / 07 active ventures</p><span>01—07</span></div>
        <h1>Enterprise with<br /><em>practical purpose.</em></h1>
        <p>Our portfolio spans the everyday and the long-term: feeding communities, enabling commerce, developing property, generating energy, advancing ideas and growing knowledge.</p>
      </section>
      <section className="business-index wrap">
        <div className="business-index__intro"><p className="eyebrow">The ELENOI portfolio</p><p>Seven active ventures. One group-wide commitment to useful work, disciplined growth and human capacity.</p></div>
        <div className="business-index__key">
          <span>No.</span><span>Business activity</span><span>Profile</span>
        </div>
        {businesses.map((business, index) => <BusinessRow business={business} index={index} key={business.slug} />)}
      </section>
    </>
  );
}
