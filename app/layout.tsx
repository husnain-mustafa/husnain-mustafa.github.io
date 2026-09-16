import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://husnain-mustafa.github.io";
const DESCRIPTION =
  "Analytics engineer working across applied AI, Databricks, and enterprise analytics — production AI agents, semantic models, and the internal applications around them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Husnain Mustafa | Analytics Engineer",
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Husnain Mustafa",
    title: "Husnain Mustafa — Analytics Engineer",
    description: DESCRIPTION,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Husnain Mustafa, Analytics Engineer, Warsaw",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Husnain Mustafa — Analytics Engineer",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
