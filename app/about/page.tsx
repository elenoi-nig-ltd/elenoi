import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { LeaderCard } from "@/components/leader-card";
import {
  boardSecretary,
  companyRegistration,
  directors,
} from "@/lib/leadership";

export const metadata: Metadata = {
  title: "About ELENOI",
  description: "Discover ELENOI's vision, mission, strategy and values.",
  alternates: { canonical: "/about" },
};

const values = [
  "Hard work",
  "Integrity",
  "Constant learning",
  "Constant teaching",
  "Creativity",
  "Thrift and financial discipline",
  "Accountability",
  "Sacrifice and selflessness",
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about wrap">
        <p className="section-number">About ELENOI</p>
        <h1>
          Built to develop
          <br />
          <em>people and enterprise.</em>
        </h1>
        <p>
          ELENOI Nig. Ltd brings diverse business interests together around a
          clear belief: capable people, principled leadership and useful
          enterprise can transform a nation.
        </p>
      </section>
      <section className="manifesto wrap">
        <p className="section-number">01 / Our foundation</p>
        <blockquote>
          “Excellence is not a destination. It is the discipline behind
          everything we choose to build.”
        </blockquote>
      </section>
      <section className="vision-mission">
        <div className="wrap vision-mission__grid">
          <article>
            <span>Vision</span>
            <h2>A model of organisational excellence.</h2>
            <p>
              Setting a global pace in human capital and business leadership
              development and empowerment, while repositioning Nigeria as a
              major player in the global economy.
            </p>
          </article>
          <article>
            <span>Mission</span>
            <h2>Impact and reach, grounded in purpose.</h2>
            <p>
              To build a global organisation, second to none in excellence,
              committed to human capacity and nation building for kingdom
              advancement by the wisdom of God.
            </p>
          </article>
        </div>
      </section>
      <section className="about-strategy-link wrap">
        <div>
          <p className="section-number">Our strategic direction</p>
          <h2>See how ELENOI turns purpose into progress.</h2>
        </div>
        <Link className="button button--outline" href="/about/strategy">
          Explore our strategy <ArrowUpRight size={17} />
        </Link>
      </section>
      <section className="leadership wrap" id="leadership">
        <div className="leadership__intro">
          <div>
            <p className="section-number">02 / Leadership & governance</p>
            <h2>The people entrusted with the work.</h2>
          </div>
          <p>
            ELENOI is guided by a board committed to responsible stewardship,
            disciplined growth and the long-term health of the organisation.
          </p>
        </div>
        <div className="leadership__directors">
          {directors.map((leader) => (
            <LeaderCard leader={leader} key={leader.slug} />
          ))}
          {/*<LeaderCard leader={boardSecretary} key={boardSecretary.slug} />*/}
        </div>
        <div className="leadership__secretary">
          <div className="registration-detail">
            <span>Corporate registration</span>
            <strong>{companyRegistration}</strong>
          </div>
        </div>
      </section>
      <section className="values wrap">
        <div className="values__intro">
          <p className="section-number">03 / How we work</p>
          <h2>The standards we carry into every venture.</h2>
        </div>
        <div className="values__list">
          {values.map((value, index) => (
            <div key={value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{value}</strong>
              <Check size={17} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
