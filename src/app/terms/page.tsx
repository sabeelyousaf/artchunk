import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { LEGAL_ENTITY, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Artchunk website and enquiries submitted through artchunk.com.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <SiteChrome tone="bone">
      <section className="section bone legal-page">
        <div className="field ink">LEGAL / TERMS</div>
        <h1 className="display">Terms &amp; Conditions</h1>
        <p className="lead legal-lead">
          These terms cover use of the {SITE_NAME} website operated by{" "}
          {LEGAL_ENTITY}.
        </p>
        <div className="seo-prose legal-prose">
          <p className="body">Last updated: 3 August 2026</p>
          <h2>Agreement</h2>
          <p className="body">
            By using {SITE_URL.replace("https://", "")} you agree to these terms.
            If you do not agree, please do not use the site.
          </p>
          <h2>Website purpose</h2>
          <p className="body">
            The website provides information about {SITE_NAME} services —
            managed creative and digital talent, studio delivery and related
            consultations. Website content is informational and does not create a
            client engagement by itself.
          </p>
          <h2>Enquiries</h2>
          <p className="body">
            Submitting an enquiry is a request for contact, not an automatic
            acceptance of work. Any project, talent arrangement or paid
            consultation is confirmed separately in writing.
          </p>
          <h2>Intellectual property</h2>
          <p className="body">
            Site design, copy, branding and media are owned by {LEGAL_ENTITY} or
            its licensors. You may not copy or reuse them without permission,
            except for ordinary personal browsing or sharing of public links.
          </p>
          <h2>Accuracy</h2>
          <p className="body">
            We aim to keep information current, but pricing, availability and
            service details may change. Confirm important details directly with
            Artchunk before relying on them.
          </p>
          <h2>Liability</h2>
          <p className="body">
            To the fullest extent permitted by law, {LEGAL_ENTITY} is not liable
            for losses arising from use of the website or reliance on general
            website content. Nothing in these terms excludes liability that
            cannot be excluded by law.
          </p>
          <h2>Third-party links</h2>
          <p className="body">
            Links to external sites are provided for convenience. We are not
            responsible for their content or practices.
          </p>
          <h2>Governing law</h2>
          <p className="body">
            These terms are governed by the laws applicable to {LEGAL_ENTITY}
            &apos;s principal place of business, without prejudice to mandatory
            consumer protections that may apply to you.
          </p>
          <h2>Related policies</h2>
          <p className="body">
            See also our <Link href="/privacy">Privacy Policy</Link> and{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
