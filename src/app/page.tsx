import fs from "fs";
import path from "path";
import Script from "next/script";

export default function Home() {
  const html = fs.readFileSync(
    path.join(process.cwd(), "public", "site-body.html"),
    "utf8",
  );

  return (
    <>
      <div
        style={{ display: "contents" }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Script src="/site-app.js" strategy="afterInteractive" />
    </>
  );
}
