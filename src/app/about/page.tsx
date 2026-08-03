import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Artchunk is a design-led partner for ambitious businesses — creative and digital execution with managed specialist talent, owned through one accountable lead across the UK, GCC and international markets.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Artchunk",
    description:
      "Studio and Talent under one standard of thinking, craft and accountability — for teams that need more than a marketplace or a traditional agency pitch.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <SiteChrome tone="bone">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="section bone seo-hero">
        <div className="seo-hero-grid">
          <div>
            <div className="field ink">ABOUT ARTCHUNK</div>
            <h1 className="display">
              Built around
              <br />
              the work.
            </h1>
            <p className="lead" style={{ color: "#3f4946" }}>
              Artchunk is a design-led partner for ambitious businesses,
              bringing creative and digital execution together with managed
              specialist talent in one connected company.
            </p>
          </div>
          <div className="seo-hero-visual">
            <img
              src="/images/embed-7.webp"
              alt="Objects from the Artchunk visual world"
            />
          </div>
        </div>
      </section>

      <section className="section black">
        <div className="seo-prose">
          <p className="body">
            Studio and Talent are two ways to work with the same standard of
            thinking, craft and accountability. We exist for teams that need
            more than a marketplace of freelancers and more than a traditional
            agency pitch.
          </p>
          <p className="body">
            Every engagement is owned through one Artchunk lead, so briefs stay
            clear, quality stays protected and progress does not get lost
            between people. Brand, product, marketing and technology can move in
            the same direction — whether you need a defined project, recurring
            specialist capacity or a managed team.
          </p>
          <p className="body">
            The standard does not change with the route. Clear thinking, careful
            craft and accountable delivery are the baseline on every engagement,
            from the first conversation to the final handover.
          </p>
          <strong className="seo-aside">
            Supporting clients across the UK, GCC and international markets.
          </strong>
          <div className="seo-actions">
            <Link className="btn lime" href="/talent">
              Explore Talent ↗
            </Link>
            <Link className="btn ghost" href="/studio">
              Explore Studio ↗
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
