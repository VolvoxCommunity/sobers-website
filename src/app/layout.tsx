import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { AndroidSmartBanner } from "@/components/landing/smart-banner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export const metadata: Metadata = {
  title: "Sobers — Recovery Redefined",
  description: "Empowering 12-step recovery with structured accountability, precise sobriety tracking, and visual timelines for sponsors and sponsees.",
  metadataBase: new URL("https://sobers.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sobers — Recovery Redefined",
    description: "Empowering 12-step recovery with structured accountability, precise sobriety tracking, and visual timelines.",
    url: "https://sobers.app",
    siteName: "Sobers",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sobers App — Track the journey, not just the days",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobers — Recovery Redefined",
    description: "Empowering 12-step recovery with structured accountability and precise tracking.",
    images: ["/twitter-image.png"],
    creator: "@volvox",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  itunes: {
    appId: "6755614815",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Sobers",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
    downloadUrl: [
      "https://apps.apple.com/app/id6755614815",
      "https://play.google.com/store/apps/details?id=com.volvox.sobers",
    ],
    author: {
      "@type": "Organization",
      name: "Volvox",
      url: "https://volvox.dev",
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AndroidSmartBanner />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
