import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const siteUrl = "https://tidal-ink-tattoo-studio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tidal Ink Tattoo Studio | Custom Tattoo Studio Mount Maunganui",
    template: "%s | Tidal Ink Tattoo Studio",
  },
  description:
    "Premium custom tattoo studio in Mount Maunganui for fine line, blackwork, illustrative, and bespoke tattoo consultations across Tauranga and Bay of Plenty.",
  keywords: [
    "tattoo studio Mount Maunganui",
    "custom tattoo studio Mount Maunganui",
    "tattoo artists Mount Maunganui",
    "custom tattoos Tauranga",
    "premium tattoo studio Bay of Plenty",
    "fine line tattoo Mount Maunganui",
    "blackwork tattoo Tauranga",
    "illustrative tattoo Bay of Plenty",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tidal Ink Tattoo Studio | Custom Tattoo Studio Mount Maunganui",
    description:
      "Premium custom tattoo studio in Mount Maunganui for fine line, blackwork, ornamental, and illustrative tattoos with consultation-led bookings.",
    url: siteUrl,
    siteName: "Tidal Ink Tattoo Studio",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tidal Ink Tattoo Studio | Custom Tattoo Studio Mount Maunganui",
    description:
      "Premium custom tattoo studio in Mount Maunganui for fine line, blackwork, ornamental, and illustrative tattoos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navigation = [
  { href: "/", label: "Home" },
  { href: "/artists/", label: "Artists" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/booking/", label: "Booking" },
  { href: "/contact/", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TattooParlor",
    name: "Tidal Ink Tattoo Studio",
    description:
      "Premium custom tattoo studio in Mount Maunganui specialising in fine line, blackwork, ornamental, and illustrative tattoos.",
    url: siteUrl,
    telephone: "+64 21 000 0000",
    email: "hello@tidalinktattoo.co.nz",
    address: {
      "@type": "PostalAddress",
      streetAddress: "12 Marine Parade",
      addressLocality: "Mount Maunganui",
      addressRegion: "Bay of Plenty",
      postalCode: "3116",
      addressCountry: "NZ",
    },
    areaServed: ["Mount Maunganui", "Tauranga", "Bay of Plenty"],
    sameAs: ["https://www.instagram.com/tidalinktattoo"],
  };

  return (
    <html lang="en-NZ" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,11,0.92)] backdrop-blur supports-[backdrop-filter]:bg-[rgba(10,10,11,0.75)]">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
              <Link href="/" className="brand-mark" aria-label="Tidal Ink Tattoo Studio home">
                <span className="block text-xs font-medium uppercase tracking-[0.45em] text-[--color-accent]">
                  Mount Maunganui
                </span>
                <span className="block font-heading text-2xl uppercase tracking-[0.18em] text-[--color-text] sm:text-3xl">
                  Tidal Ink
                </span>
              </Link>
              <nav aria-label="Primary">
                <ul className="hidden items-center gap-6 text-sm uppercase tracking-[0.28em] text-[--color-muted] md:flex">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link href="/booking/" className="button button-outline hidden md:inline-flex">
                Book now
              </Link>
            </div>
            <nav className="border-t border-white/10 px-6 py-3 md:hidden" aria-label="Mobile">
              <ul className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.24em] text-[--color-muted]">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <footer className="border-t border-white/10 bg-[--color-panel]">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[--color-accent]">Tidal Ink Tattoo Studio</p>
                <h2 className="mt-4 font-heading text-3xl uppercase tracking-[0.12em] text-[--color-text]">
                  Refined custom tattooing with a calm, professional studio experience.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[--color-muted]">
                  Visit us in Mount Maunganui for bespoke fine line, blackwork, ornamental, and illustrative tattoos shaped through a thoughtful consultation process.
                </p>
              </div>
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-[--color-text]">Navigate</h2>
                <ul className="mt-4 space-y-3 text-sm text-[--color-muted]">
                  {navigation.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="nav-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-[--color-text]">Visit the studio</h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[--color-muted]">
                  <p>12 Marine Parade, Mount Maunganui, Bay of Plenty 3116</p>
                  <p>Tue to Sat · 10am to 6pm</p>
                  <p>
                    <a className="nav-link" href="mailto:hello@tidalinktattoo.co.nz">
                      hello@tidalinktattoo.co.nz
                    </a>
                  </p>
                  <Link href="/booking/" className="button button-outline mt-2 inline-flex">
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 px-6 py-4 text-center text-xs uppercase tracking-[0.2em] text-[--color-muted]">
              © 2026 Tidal Ink Tattoo Studio. All rights reserved.
            </div>
          </footer>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
