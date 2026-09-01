export const SITE_URL = "https://artchunk.com";
export const SITE_NAME = "Artchunk";
export const LEGAL_ENTITY = "Artchunk Industries";

export const HOME_TITLE = "Artchunk | Managed Talent & Digital Solutions";
export const HOME_DESCRIPTION =
  "Artchunk provides managed creative and digital talent, plus branding, marketing, web, software and product delivery through one accountable team.";

export type NavItem = {
  href: string;
  label: string;
  description: string;
};

/** Primary crawlable routes used for nav, footer, sitemap and sitelinks. */
export const PRIMARY_NAV: NavItem[] = [
  {
    href: "/talent",
    label: "Talent",
    description:
      "Managed specialists, Design Desk pricing and recurring creative capacity without the hiring burden.",
  },
  {
    href: "/studio",
    label: "Studio",
    description:
      "Defined creative and digital projects owned from brief to handover by Artchunk Studio.",
  },
  {
    href: "/consultation",
    label: "Consultation",
    description:
      "Book a £10 Clarity Session to define the immediate problem and the sensible next step.",
  },
  {
    href: "/about",
    label: "About",
    description:
      "Artchunk is a design-led partner connecting Studio delivery and managed Talent under one lead.",
  },
  {
    href: "/faq",
    label: "FAQs",
    description:
      "Clear answers on Studio vs Talent, managed teams, pricing routes and the £10 Clarity Session.",
  },
];

export const FOOTER_ROUTES = [
  { href: "/talent", label: "Talent" },
  { href: "/studio", label: "Studio" },
  { href: "/#process", label: "How it works" },
  { href: "/consultation", label: "Consultation" },
] as const;

export const FOOTER_COMPANY = [
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQs" },
  { href: "/#final", label: "Contact" },
] as const;

export const FOOTER_LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
] as const;

export const LEGAL_PAGES = [
  {
    href: "/privacy",
    label: "Privacy Policy",
    description:
      "How Artchunk collects, uses and protects personal information submitted through artchunk.com.",
  },
  {
    href: "/terms",
    label: "Terms & Conditions",
    description:
      "Terms governing use of the Artchunk website and enquiries submitted through artchunk.com.",
  },
  {
    href: "/cookies",
    label: "Cookie Policy",
    description:
      "How Artchunk uses cookies and similar technologies on artchunk.com.",
  },
] as const;

export const FAQS = [
  {
    question: "What is the difference between Studio and Talent?",
    answer:
      "Studio is for a defined project or outcome that Artchunk owns and delivers. Talent is for ongoing capacity, dedicated specialists or a team Artchunk can manage with you.",
  },
  {
    question: "Can Artchunk manage the team for us?",
    answer:
      "Yes. Artchunk can handle sourcing, onboarding, priorities, workflow, quality, payroll, continuity and replacement through one accountable lead. You keep visibility and set the business direction.",
  },
  {
    question: "Do we need to know exactly what we need?",
    answer:
      "No. If the problem is clear but the solution is not, start with the £10 Clarity Session.",
  },
  {
    question: "Can we start small and expand later?",
    answer:
      "Yes. Begin with one project or focused monthly capacity, then add specialists, increase hours or move to a managed team as the need becomes clearer.",
  },
  {
    question: "What roles can Artchunk provide?",
    answer:
      "Design Desk is the flagship launch offer. Other design, development, marketing, content and delivery roles are scoped through discovery and offered only when Artchunk can source and manage them responsibly.",
  },
  {
    question: "Do you only work with UK businesses?",
    answer:
      "No. Artchunk supports clients across the UK, GCC and international markets.",
  },
  {
    question: "Is the £10 session a full strategy?",
    answer:
      "No. It is a focused 20-minute direction-setting session with a concise written next-step summary.",
  },
] as const;

export const STUDIO_SERVICES = [
  {
    name: "Brand and creative",
    description:
      "Brand strategy, identity, campaigns, packaging, presentations and marketing collateral shaped around one clear direction.",
  },
  {
    name: "UI, UX and product",
    description:
      "Research, user journeys, interfaces, prototypes, product design and design systems for websites and applications.",
  },
  {
    name: "Web, software and apps",
    description:
      "Websites, e-commerce, landing pages, web applications, mobile products, maintenance and development support.",
  },
  {
    name: "Marketing and social",
    description:
      "Campaign strategy, content systems, social management, paid media, email and performance reporting.",
  },
  {
    name: "Content and SEO",
    description:
      "Brand messaging, website copy, articles, scripts, SEO content and search optimisation.",
  },
] as const;

export const DESIGN_DESK_PLANS = [
  {
    name: "Essential",
    price: "£129",
    hours: "Up to 30 hours / month",
    summary:
      "A focused monthly design allocation for businesses that need dependable production support without a full internal hire.",
  },
  {
    name: "Growth",
    price: "£249",
    hours: "Up to 60 hours / month",
    summary:
      "A stronger monthly allocation for businesses with recurring campaigns, brand production and more than one active priority.",
  },
  {
    name: "Scale",
    price: "£399",
    hours: "100+ hours / month",
    summary:
      "A high-capacity arrangement for established teams that need sustained design output and multiple priorities moving together.",
  },
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_ENTITY,
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.png"),
    description: HOME_DESCRIPTION,
    sameAs: [
      "https://pk.linkedin.com/company/artchunk",
      "https://www.instagram.com/artchunkindustries/",
    ],
    areaServed: ["GB", "AE", "SA", "QA", "BH", "KW", "OM"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: HOME_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export function siteNavigationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRIMARY_NAV.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.label,
      description: item.description,
      url: absoluteUrl(item.href),
    })),
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
