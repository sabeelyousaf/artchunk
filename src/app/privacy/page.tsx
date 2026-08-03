import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { LEGAL_ENTITY, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Artchunk collects, uses and protects personal information submitted through artchunk.com.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SiteChrome tone="bone">
      <section className="section bone legal-page">
        <div className="field ink">LEGAL / PRIVACY</div>
        <h1 className="display">Privacy Policy</h1>
        <p className="lead legal-lead">
          This policy explains how {SITE_NAME} ({LEGAL_ENTITY}) handles personal
          information collected through {SITE_URL.replace("https://", "")}.
        </p>
        <div className="seo-prose legal-prose">
          <p className="body">Last updated: 3 August 2026</p>
          <h2>Who we are</h2>
          <p className="body">
            {SITE_NAME} is the public brand of {LEGAL_ENTITY}. For privacy
            enquiries, contact us through the website enquiry form or the email
            address published on artchunk.com.
          </p>
          <h2>Information we collect</h2>
          <p className="body">
            When you submit an enquiry we may collect your name, work email,
            company name, phone number, preferred service route, project details,
            budget range and any other information you choose to share.
          </p>
          <p className="body">
            We may also collect basic technical data such as IP address, browser
            type and pages visited through analytics tools, where enabled.
          </p>
          <h2>How we use information</h2>
          <p className="body">
            We use enquiry details to respond to your request, qualify the right
            Artchunk route, prepare proposals and improve our services. We do not
            sell personal information.
          </p>
          <h2>Legal basis</h2>
          <p className="body">
            Where applicable, we process enquiry data based on your consent and
            our legitimate interest in responding to business requests and
            operating the website.
          </p>
          <h2>Sharing</h2>
          <p className="body">
            We may share information with trusted processors who help us run the
            website and email delivery (for example hosting and transactional
            email providers), only as needed to operate Artchunk services.
          </p>
          <h2>Retention</h2>
          <p className="body">
            Enquiry records are kept for as long as needed to handle the
            conversation and maintain ordinary business records, unless a longer
            period is required by law.
          </p>
          <h2>Your rights</h2>
          <p className="body">
            Depending on your location, you may have rights to access, correct,
            delete or restrict processing of your personal information. Contact
            us to make a request.
          </p>
          <h2>Related policies</h2>
          <p className="body">
            See also our <Link href="/cookies">Cookie Policy</Link> and{" "}
            <Link href="/terms">Terms &amp; Conditions</Link>.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
