import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { strategicPillars } from "@/lib/strategy";

export const metadata: Metadata = {
  title: "Our Strategy",
  description: "Explore the five strategic pillars guiding ELENOI's people, partnerships, portfolio and growth.",
  alternates: { canonical: "/about/strategy" },
};

export default function StrategyPage() {
  return (
    <>
      <section className="strategy-hero wrap">
        <p className="section-number">Our strategy / 05 pillars</p>
        <div className="strategy-hero__body">
          <h1>How purpose becomes <em>progress.</em></h1>
          <p>ELENOI&apos;s strategy is built to multiply capability: developing people, enabling enterprise, forming strategic partnerships and expanding a diversified portfolio with global ambition.</p>
        </div>
      </section>

      <section className="strategy-framework">
        <div className="wrap">
          <div className="strategy-framework__intro">
            <p className="eyebrow">The ELENOI framework</p>
            <p>These five pillars guide how we develop our people, choose our opportunities and build businesses that can create lasting value.</p>
          </div>
          <div className="strategy-list">
            {strategicPillars.map((pillar) => (
              <article className="strategy-pillar" key={pillar.number}>
                <span className="strategy-pillar__number">{pillar.number}</span>
                <h2>{pillar.title}</h2>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strategy-portfolio wrap">
        <div>
          <p className="section-number">Strategy in practice</p>
          <h2>A portfolio built to serve real needs.</h2>
        </div>
        <div>
          <p>From hospitality and commerce to real estate, renewable energy, technology, agriculture and publishing, ELENOI applies its strategy across a diversified group of active business interests.</p>
          <Link className="button button--green" href="/businesses">Explore our businesses <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="strategy-contact wrap">
        <p className="eyebrow">Work with us</p>
        <h2>Strategy grows stronger through the right partnerships.</h2>
        <Link className="text-link" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
      </section>
    </>
  );
}
