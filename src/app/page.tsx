import fs from "fs";
import path from "path";
import Script from "next/script";
import { JsonLd } from "@/components/json-ld";
import { faqPageJsonLd } from "@/lib/site";

export default function Home() {
  const html = fs
    .readFileSync(path.join(process.cwd(), "public", "site-body.html"), "utf8")
    .replace(/\r\n/g, "\n");

  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <div
        style={{ display: "contents" }}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Script src="/site-app.js" strategy="afterInteractive" />
    </>
  );
}
