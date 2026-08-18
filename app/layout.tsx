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
    "ELENOI Nig. Ltd is a diversified Nigerian group building businesses across hospitality, commerce, real estate, energy, technology, agriculture and publishing.",
  openGraph: {
    title: "ELENOI Nig. Ltd",
    description: "Enterprise for lasting progress.",
    type: "website",
    locale: "en_NG",
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
      </body>
    </html>
  );
}
