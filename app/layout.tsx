import type { Metadata } from "next";
import { Cinzel, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-ui-family",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elenoi.com"),
  title: {
    default: "ELENOI Nig. Ltd | Enterprise for lasting progress",
    template: "%s | ELENOI Nig. Ltd",
  },
  description:
    "ELENOI Nig. Ltd is a diversified Nigerian group building businesses across hospitality, commerce, real estate, renewable energy, technology, agriculture and publishing.",
  keywords: [
    "ELENOI Nig Ltd",
    "Nigerian business group",
    "Nigerian conglomerate",
    "business leadership development Nigeria",
    "Flamingo French Fries",
    "Flourish Real Estate",
    "Oije Farms",
    "renewable energy Nigeria",
  ],
  applicationName: "ELENOI Nig. Ltd",
  category: "business",
  creator: "ELENOI Nig. Ltd",
  publisher: "ELENOI Nig. Ltd",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "ELENOI Nig. Ltd",
    description: "A diversified Nigerian group building capable people and enduring businesses.",
    type: "website",
    locale: "en_NG",
    url: "https://elenoi.com",
    siteName: "ELENOI Nig. Ltd",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "ELENOI Nig. Ltd" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELENOI Nig. Ltd",
    description: "Enterprise for lasting progress.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${outfit.variable} ${jakarta.variable}`}>
      <body className="bg-platinum text-obsidian antialiased transition-colors duration-300 dark:bg-obsidian dark:text-platinum">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://elenoi.com/#organization",
                  name: "ELENOI Nig. Ltd",
                  url: "https://elenoi.com",
                  logo: "https://elenoi.com/icon.svg",
                  description: "A diversified Nigerian group building capable people and enduring businesses.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "No. 4 KFF Street, after Central Mosque, Gidan Kwano",
                    addressLocality: "Minna",
                    addressRegion: "Niger State",
                    addressCountry: "NG",
                  },
                  email: "elenoi.nig.ltd@gmail.com",
                  telephone: "+2348026968067",
                  subOrganization: [
                    { "@type": "Organization", name: "Flamingo French Fries", url: "https://flamingo.com.ng" },
                    { "@type": "Organization", name: "Flamingo Enterprise", url: "https://flamingo.com.ng" },
                    { "@type": "Organization", name: "Flourish Real Estate", url: "https://flamingo.com.ng/real-estates" },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://elenoi.com/#website",
                  url: "https://elenoi.com",
                  name: "ELENOI Nig. Ltd",
                  publisher: { "@id": "https://elenoi.com/#organization" },
                  inLanguage: "en-NG",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
