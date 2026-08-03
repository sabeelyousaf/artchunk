import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteChrome } from "@/components/site-chrome";
import { breadcrumbJsonLd, faqPageJsonLd, FAQS } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers on Artchunk Studio vs Talent, managed teams, Design Desk pricing, international clients and the £10 Clarity Session.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Artchunk FAQs",
    description:
      "Clear answers before the first conversation — Studio, Talent, managed teams and clarity sessions.",
    url: "/faq",
  },
};

export default function FaqPage() {
  return (
    <SiteChrome tone="bone">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faq" },
          ]),
          faqPageJsonLd(),
        ]}
      />
      <section className="section bone seo-hero">
        <div className="faq-layout">
          <div className="faq-copy">
            <div className="field ink">FAQ</div>
            <h1 className="section-title">
              Clear answers before the first conversation.
            </h1>
            <p className="body" style={{ color: "#45504c" }}>
              Still unsure which route fits? Book a £10 Clarity Session or start
              from Talent or Studio.
            </p>
            <div className="seo-actions">
              <Link className="btn dark-btn" href="/consultation">
                Book clarity ↗
              </Link>
              <Link className="btn ghost-dark" href="/">
                Back to home ↗
              </Link>
            </div>
          </div>
          <div className="faq-list">
            {FAQS.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
