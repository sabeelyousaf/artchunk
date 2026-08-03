import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "£10 Clarity Session",
  description:
    "Book a focused 20-minute Artchunk Clarity Session for £10 — define the immediate problem, the sensible next step and what you do not need yet.",
  alternates: { canonical: "/consultation" },
  openGraph: {
    title: "Artchunk £10 Clarity Session",
    description:
      "A 20-minute consultation with a written next-step summary. £10 credited when you proceed with Artchunk.",
    url: "/consultation",
  },
};

const INCLUDES = [
  "Short pre-session brief",
  "One focused business, brand or digital challenge",
  "Practical recommendation on the next step",
  "Concise written summary after the call",
  "£10 credited when you proceed",
] as const;

export default function ConsultationPage() {
  return (
    <SiteChrome tone="bone">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Consultation", path: "/consultation" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Artchunk £10 Clarity Session",
            provider: { "@id": "https://artchunk.com/#organization" },
            description:
              "A focused 20-minute consultation to define the immediate problem and sensible next step.",
            offers: {
              "@type": "Offer",
              price: "10",
              priceCurrency: "GBP",
              availability: "https://schema.org/InStock",
            },
          },
        ]}
      />
      <section className="section lime-bg seo-hero">
        <div className="clarity-layout">
          <div className="clarity-copy">
            <div className="field ink">£10 CLARITY SESSION / INTRODUCTORY PRICE</div>
            <h1 className="display">
              Find your
              <br />
              next move.
            </h1>
            <p className="body">
              You may know the brand feels behind, marketing is inconsistent,
              admin is too manual or the business needs to grow — without knowing
              what to fix first.
            </p>
            <p className="body">
              The £10 Clarity Session is a focused 20-minute consultation to
              define the immediate problem, identify the help you actually need
              and rule out what you do not need yet.
            </p>
            <blockquote className="seo-quote">
              If the right answer is to do less, that is what we will tell you.
            </blockquote>
            <div className="seo-actions">
              <Link className="btn dark-btn" href="/#final">
                Book a £10 clarity session ↗
              </Link>
              <Link className="btn ghost-dark" href="/faq">
                Read FAQs ↗
              </Link>
            </div>
          </div>
          <div className="clarity-device">
            <img
              src="/images/embed-4.webp"
              alt="Astronaut hand holding Artchunk device"
            />
            <div className="device-card">
              <div className="device-card-top">
                <span>SESSION / 20 MINUTES</span>
                <strong>£10</strong>
              </div>
              <ul>
                {INCLUDES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
