import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { breadcrumbJsonLd, STUDIO_SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio Services",
  description:
    "Artchunk Studio delivers defined creative and digital outcomes — brand, product, web, marketing and content — owned from brief to handover by one accountable partner.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Artchunk Studio Services",
    description:
      "Focused projects, campaigns, retainers and managed solutions with strategy, creativity and digital execution around one agreed outcome.",
    url: "/studio",
  },
};

export default function StudioPage() {
  return (
    <SiteChrome tone="bone">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Studio", path: "/studio" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Artchunk Studio",
            provider: { "@id": "https://artchunk.com/#organization" },
            description:
              "Defined creative and digital projects owned from brief to handover.",
            areaServed: ["GB", "AE", "SA", "QA", "BH", "KW", "OM"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Studio services",
              itemListElement: STUDIO_SERVICES.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.name,
                  description: service.description,
                },
              })),
            },
          },
        ]}
      />
      <section className="section bone seo-hero">
        <div className="field ink">ARTCHUNK STUDIO</div>
        <h1 className="display">
          A defined outcome.
          <br />
          Properly owned.
        </h1>
        <p className="lead" style={{ color: "#45504c", maxWidth: 720 }}>
          Artchunk Studio is for focused projects, campaigns, retainers and
          complete managed solutions. We bring the right mix of strategy,
          creativity and digital execution around one agreed outcome, then own
          the route from brief to handover.
        </p>
      </section>

      <section className="section black">
        <div className="field">SERVICES</div>
        <h2 className="section-title">What Studio can deliver.</h2>
        <div className="seo-card-grid">
          {STUDIO_SERVICES.map((service, index) => (
            <article className="seo-card" key={service.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <div className="seo-split">
          <div>
            <h3>Use Studio when</h3>
            <ul className="seo-list">
              <li>You know the outcome that needs to be delivered.</li>
              <li>The work crosses more than one specialist discipline.</li>
              <li>You want one partner to coordinate the full route.</li>
              <li>The project, campaign or launch has a defined finish line.</li>
            </ul>
          </div>
          <div>
            <h3>Studio can become Talent</h3>
            <p className="body">
              When project work becomes recurring, the relationship can move
              into reserved monthly capacity or a dedicated specialist
              arrangement without rebuilding the context from zero.
            </p>
            <div className="seo-actions">
              <Link className="btn lime" href="/talent">
                Explore Talent ↗
              </Link>
              <Link className="btn ghost" href="/#final">
                Start a project ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
