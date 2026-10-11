import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TopUtilityBar } from "@/components/layout/top-utility-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true, // Safeguard: WCAG 2.1 SC 1.4.4 compliance - unrestricted zoom enabled
  themeColor: "#04101e",
};

export const metadata: Metadata = {
  title: {
    default: "Aqua Nation Sports Academy (ANSA) | Swimming Academy Dubai & Abu Dhabi",
    template: "%s | Aqua Nation Sports Academy (ANSA)"
  },
  description: "UAE\'s premier swimming academy mentored by Dronacharya Awardee & 4-time Olympic Coach Pradeep Kumar. 9 temperature-controlled pool facilities across Dubai and Abu Dhabi. Book your swimming assessment.",
  keywords: [
    "Swimming Academy Dubai",
    "Swimming Classes Dubai",
    "Olympic Swimming Coach Dubai",
    "Kids Swimming Lessons UAE",
    "Aqua Nation Sports Academy",
    "ANSA swimming",
    "Swimming classes Abu Dhabi",
    "Lady swimming coach Dubai",
    "Olympic 50m pool Dubai",
    "Adult swimming lessons Dubai"
  ],
  metadataBase: new URL("https://aquanationsports.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Aqua Nation Sports Academy (ANSA) | Olympic Swimming Coaching in UAE",
    description: "Train under 4-time Olympic Coach Pradeep Kumar. 9 temperature-controlled pools in Dubai & Abu Dhabi. Structured swimming pathways from beginner safety to elite squads.",
    url: "https://aquanationsports.com",
    siteName: "Aqua Nation Sports Academy (ANSA)",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/brand/ansa-logo.png",
        width: 800,
        height: 320,
        alt: "Aqua Nation Sports Academy UAE"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Nation Sports Academy (ANSA) UAE",
    description: "Olympic Swimming Academy across 9 pools in Dubai and Abu Dhabi.",
    images: ["/images/brand/ansa-logo.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        {/* Accessible Skip-to-Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-teal-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
        >
          Skip to main content
        </a>

        {/* Global Utility Contact Bar */}
        <TopUtilityBar />

        {/* Main Sticky Header */}
        <Header />

        {/* Dynamic Main Body Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Institutional Footer */}
        <Footer />
      </body>
    </html>
  );
}
