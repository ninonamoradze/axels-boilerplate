import type { Metadata } from "next";
import localFont from "next/font/local";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const bitcountSingle = localFont({
  src: "../fonts/bitcount-single-latin.woff2",
  variable: "--font-bitcount-single",
  display: "swap",
  weight: "400",
  preload: false,
});

const datatype = localFont({
  src: "../fonts/datatype-latin.woff2",
  variable: "--font-datatype",
  display: "swap",
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "შენი სახლი უნივერსიტეტის ქუჩაზე — Your tagline here",
    template: "%s | შენი სახლი უნივერსიტეტის ქუჩაზე",
  },
  description:
    "არსის უძრავი ქონების პროექტი — შენი სახლი უნივერსიტეტის ქუჩაზე. კლიენტის პირადი კაბინეტი.",
  keywords: ["შენი სახლი", "უნივერსიტეტის ქუჩა", "არსი", "უძრავი ქონება"],
  authors: [{ name: "არსი" }],
  creator: "არსი",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "შენი სახლი უნივერსიტეტის ქუჩაზე",
    title: "შენი სახლი უნივერსიტეტის ქუჩაზე — Your tagline here",
    description: "არსის უძრავი ქონების პროექტი — შენი სახლი უნივერსიტეტის ქუჩაზე.",
  },
  twitter: {
    card: "summary_large_image",
    title: "შენი სახლი უნივერსიტეტის ქუჩაზე — Your tagline here",
    description: "არსის უძრავი ქონების პროექტი — შენი სახლი უნივერსიტეტის ქუჩაზე.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bitcountSingle.variable} ${datatype.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
