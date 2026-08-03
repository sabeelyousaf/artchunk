"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  FOOTER_ROUTES,
  LEGAL_ENTITY,
  PRIMARY_NAV,
  SITE_NAME,
} from "@/lib/site";

type SiteChromeProps = {
  children: React.ReactNode;
  tone?: "dark" | "bone";
};

export function SiteChrome({ children, tone = "dark" }: SiteChromeProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={`site seo-shell seo-shell--${tone}`}>
      <header className="header scrolled" id="header">
        <Link className="brand" href="/" aria-label={`${SITE_NAME} home`}>
          <img src="/images/logo.png" alt={SITE_NAME} />
        </Link>
        <nav className="nav" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="btn lime nav-keep" href="/?open=Talent%20enquiry">
            Hire talent
          </Link>
        </nav>
        <button
          className={`menu-btn${menuOpen ? " open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="seoMobileMenu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="menu-icon menu-icon-open"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="menu-icon menu-icon-close"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      <nav
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="seoMobileMenu"
        hidden={!menuOpen}
        aria-label="Mobile primary"
      >
        {PRIMARY_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="btn lime"
          href="/?open=Talent%20enquiry"
          onClick={() => setMenuOpen(false)}
        >
          Hire talent
        </Link>
      </nav>

      <main className="seo-main">{children}</main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/logo.png" alt={SITE_NAME} />
            <p>
              Creative talent, digital services and technology — connected
              through one accountable relationship, so good work keeps moving.
            </p>
          </div>
          <div className="footer-cols">
            <div>
              <strong>Routes</strong>
              {FOOTER_ROUTES.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <strong>Company</strong>
              {FOOTER_COMPANY.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <strong>Legal</strong>
              {FOOTER_LEGAL.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <span>© 2026 {LEGAL_ENTITY}. All rights reserved.</span>
        </div>
        <div className="footer-close">
          Good work should move. <strong>Preferably forward.</strong>
        </div>
      </footer>
    </div>
  );
}
