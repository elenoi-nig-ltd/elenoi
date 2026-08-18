import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Handshake,
  Lightbulb,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BusinessRow } from "@/components/business-row";
import { businesses } from "@/lib/businesses";

const strategies = [
  {
    icon: Users,
    title: "Develop people",
    text: "Home-grown leadership and human capital prepared for meaningful responsibility.",
  },
  {
    icon: Handshake,
    title: "Build together",
    text: "Strategic collaboration that combines shared purpose with practical capability.",
  },
  {
    icon: Lightbulb,
    title: "Create opportunity",
    text: "Mentorship, enterprise and applied ideas that move people into productive work.",
  },
  {
    icon: Compass,
    title: "Grow with discipline",
    text: "A diversified portfolio built for accountable, sustainable and far-reaching impact.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/businesses/ancient-scroll-publishers.jpg"
            alt="Books and knowledge representing ELENOI's publishing activity"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__veil" />
        </div>
        <div className="hero__content wrap">
          <div className="hero__copy">
            <p className="eyebrow">
              <span /> Nigerian enterprise / 01
            </p>
            <h1>ELENOI</h1>
            <p className="hero__statement">
              A diversified Nigerian group building capable people and enduring
              businesses for a more productive future.
            </p>
            <div className="hero__actions">
              <Link className="button button--green" href="/businesses">
                Explore our businesses <ArrowUpRight size={17} />
              </Link>
              <Link className="text-link" href="/about">
                Discover our purpose <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero__index">
            <strong>07</strong>
            <span>
              active ventures
              <br />
              one shared purpose
            </span>
          </div>
        </div>
        <div className="hero__side-note">
          <span>ELENOI NIG. LTD</span>
          <span>Enterprise for lasting progress</span>
        </div>
        <a
          className="scroll-cue"
          href="#portfolio"
          aria-label="Scroll to our portfolio"
        >
          <ArrowDown size={18} />
        </a>
      </section>

      <section className="intro wrap">
        <p className="section-number">01 / Who we are</p>
        <div className="intro__body">
          <h2>A group built around the power of enterprise.</h2>
          <div>
            <p>
              ELENOI Nig. Ltd is a diversified Nigerian company building
              businesses that meet real needs and unlock human potential.
            </p>
            <p>
              Across food, commerce, property, energy, technology, agriculture
              and publishing, our ventures share one standard: useful work,
              pursued with excellence.
            </p>
            <Link className="text-link" href="/about">
              Our story and principles <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="wrap proof-strip__grid">
          <div>
            <strong>07</strong>
            <span>active business interests</span>
          </div>
          <div>
            <strong>01</strong>
            <span>shared standard of excellence</span>
          </div>
          <div>
            <strong>NG</strong>
            <span>built from Nigeria, open to the world</span>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="section-head wrap">
          <div>
            <p className="section-number">02 / Our activities</p>
            <h2>
              One group.
              <br />
              Many ways to build.
            </h2>
          </div>
          <p>
            Each ELENOI business responds to a practical need while contributing
            to a wider ambition for leadership, capacity and national
            development.
          </p>
        </div>
        <div className="business-list wrap">
          {businesses.slice(0, 4).map((business, index) => (
            <BusinessRow
              business={business}
              index={index}
              key={business.slug}
            />
          ))}
        </div>
        <div className="portfolio__more wrap">
          <Link className="button button--outline" href="/businesses">
            View all seven activities <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="purpose" id="purpose">
        <div className="purpose__lead wrap">
          <p className="section-number">03 / Our purpose</p>
          <p className="eyebrow">Our vision</p>
          <h2>
            To set a global pace in human capital, business leadership and
            empowerment.
          </h2>
          <p>
            We are building an organisation of excellence, impact and reach that
            contributes to Nigeria's position in the global economy.
          </p>
        </div>
        <div className="strategy-grid wrap">
          {strategies.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <span className="strategy-grid__index">0{index + 1}</span>
              <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="spotlight wrap">
        <div className="spotlight__image">
          <Image
            src="/images/businesses/flamingo-french-fries.jpg"
            alt="Flamingo food and hospitality"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
        <div className="spotlight__content">
          <p className="section-number">04 / Business spotlight</p>
          <p className="eyebrow eyebrow--gold">Flamingo</p>
          <h2 className="text-4xl">Everyday convenience, made local.</h2>
          <p>
            Flamingo is ELENOI's consumer platform for food, household
            essentials, internet services and property discovery, built around
            the needs of students and communities in Minna.
          </p>
          <a
            className="button button--gold"
            href="https://flamingo.com.ng"
            target="_blank"
            rel="noreferrer"
          >
            Visit Flamingo <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </>
  );
}
