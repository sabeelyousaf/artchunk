import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { LEGAL_ENTITY, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Artchunk uses cookies and similar technologies on artchunk.com.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <SiteChrome tone="bone">
      <section className="section bone legal-page">
        <div className="field ink">LEGAL / COOKIES</div>
        <h1 className="display">Cookie Policy</h1>
        <p className="lead legal-lead">
          This page explains how {SITE_NAME} ({LEGAL_ENTITY}) uses cookies and
          similar technologies.
        </p>
        <div className="seo-prose legal-prose">
          <p className="body">Last updated: 3 August 2026</p>
          <h2>What cookies are</h2>
          <p className="body">
            Cookies are small files stored on your device that help websites
            remember preferences, understand traffic and improve performance.
          </p>
          <h2>How we use cookies</h2>
          <p className="body">
            We may use essential cookies required for the site to function, and —
            where configured — analytics cookies to understand how visitors use
            artchunk.com so we can improve content and experience.
          </p>
          <h2>Analytics</h2>
          <p className="body">
            If Google Analytics is enabled, it may set cookies to measure visits
            and interactions. Analytics is configured with IP anonymisation where
            supported.
          </p>
          <h2>Managing cookies</h2>
          <p className="body">
            You can control or delete cookies through your browser settings.
            Blocking some cookies may affect site functionality.
          </p>
          <h2>More information</h2>
          <p className="body">
            For personal data handling, see our{" "}
            <Link href="/privacy">Privacy Policy</Link>. For site use terms, see{" "}
            <Link href="/terms">Terms &amp; Conditions</Link>.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
