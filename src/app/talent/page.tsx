import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { breadcrumbJsonLd, DESIGN_DESK_PLANS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talent & Pricing",
  description:
    "Artchunk Talent adds managed specialists and Design Desk pricing from £129/month — recurring design capacity with one accountable lead owning workflow, quality and continuity.",
  alternates: { canonical: "/talent" },
  openGraph: {
    title: "Artchunk Talent & Design Desk Pricing",
    description:
      "Flexible capacity, dedicated specialists and managed teams. Design Desk plans from Essential (£129) to Scale (£399) per month.",
    url: "/talent",
  },
};

const MODES = [
  {
    title: "Flexible capacity",
    text: "Reserved monthly hours for recurring production, campaigns and changing priorities — without hiring full-time too early.",
  },
  {
    title: "Dedicated specialist",
    text: "A part-time or full-time professional primarily allocated to your business, with Artchunk owning continuity and quality.",
  },
  {
    title: "Managed small team",
    text: "Complementary specialists coordinated through one Artchunk Account Lead, so you get coverage without managing every role yourself.",
  },
  {
    title: "Senior or fractional lead",
    text: "Experienced creative, product or delivery leadership through a tailored arrangement when direction matters as much as output.",
  },
] as const;

export default function TalentPage() {
  return (
    <SiteChrome>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Talent", path: "/talent" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Artchunk Talent",
            provider: { "@id": "https://artchunk.com/#organization" },
            description:
              "Managed creative talent and Design Desk monthly design capacity.",
            offers: DESIGN_DESK_PLANS.map((plan) => ({
              "@type": "Offer",
              name: `Design Desk ${plan.name}`,
              description: plan.summary,
              priceCurrency: "GBP",
              price: plan.price.replace("£", ""),
              unitText: "MONTH",
            })),
          },
        ]}
      />
      <section className="section dark grid-bg seo-hero">
        <div className="field">ARTCHUNK TALENT / FLAGSHIP MODEL</div>
        <h1 className="display">
          More capability.
          <br />
          Less management.
        </h1>
        <p className="lead">
          Artchunk Talent is for businesses that need the right people without
          creating another recruitment and management burden. Add a specialist,
          reserve ongoing capability or have Artchunk build and manage a small
          team — while one accountable lead owns workflow, quality and
          continuity.
        </p>
      </section>

      <section className="section black">
        <div className="field">HOW TALENT WORKS</div>
        <h2 className="section-title">Four ways to add capacity.</h2>
        <div className="seo-card-grid seo-card-grid--4">
          {MODES.map((mode, index) => (
            <article className="seo-card" key={mode.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{mode.title}</h3>
              <p>{mode.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark">
        <div className="field">DESIGN DESK / PRICING</div>
        <h2 className="section-title">
          Dependable monthly
          <br />
          design capacity.
        </h2>
        <div className="seo-pricing-grid">
          {DESIGN_DESK_PLANS.map((plan) => (
            <article className="seo-price-card" key={plan.name}>
              <span className="plan-kicker">{plan.name}</span>
              <div className="plan-price">
                <span>£</span>
                <strong>{plan.price.replace("£", "")}</strong>
                <small>/ month</small>
              </div>
              <p className="seo-hours">{plan.hours}</p>
              <p>{plan.summary}</p>
            </article>
          ))}
        </div>
        <p className="seo-footnote">
          Package hours include production, meetings, communication, revisions,
          project management and quality review. 3-month billing saves 8%. Extra
          hours are added only after client approval.
        </p>
        <div className="seo-actions">
          <Link className="btn lime" href="/#final">
            Discuss Design Desk ↗
          </Link>
          <Link className="btn ghost" href="/consultation">
            Book a £10 clarity session ↗
          </Link>
        </div>
      </section>
    </SiteChrome>
  );
}
