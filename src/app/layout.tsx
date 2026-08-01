import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const aeonik = localFont({
  src: [
    { path: "../fonts/Aeonik-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Aeonik-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Aeonik-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Aeonik-Medium.ttf", weight: "600", style: "normal" },
    { path: "../fonts/Aeonik-Medium.ttf", weight: "650", style: "normal" },
    { path: "../fonts/Aeonik-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/Aeonik-Bold.ttf", weight: "800", style: "normal" },
    { path: "../fonts/Aeonik-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-aeonik",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Artchunk — Website Visual Direction V4.3",
  description:
    "Artchunk connects managed specialist talent with creative and digital project delivery through one accountable relationship.",
};

export const viewport: Viewport = {
  themeColor: "#111615",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={aeonik.variable}>
      <body className={aeonik.className}>{children}</body>
    </html>
  );
}
