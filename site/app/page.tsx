import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tattoo Studio Mount Maunganui",
  description:
    "Discover a premium tattoo studio in Mount Maunganui for custom tattoos, fine line, blackwork, and illustrative work with consultation-led bookings.",
};

const artistProfiles = [
  {
    name: "Ariana Vale",
    specialty: "Fine line and botanical custom tattoos",
    description:
      "Ariana creates elegant fine line tattoos, floral compositions, and softly detailed black and grey work for clients across Mount Maunganui and Tauranga.",
  },
  {
    name: "Mika Stone",
    specialty: "Blackwork and ornamental tattoo design",
    description:
      "Mika specialises in bold blackwork, ornamental flow, and large-scale custom tattoo concepts with a strong focus on placement and longevity.",
  },
  {
    name: "Noah Reef",
    specialty: "Illustrative and bespoke storytelling tattoos",
    description:
      "Noah blends illustrative detail with custom concepts to build tattoos that feel personal, balanced, and highly refined.",
  },
];

const galleryHighlights = [
  "Fine line floral sleeve designed for a Mount Maunganui tattoo client",
  "Blackwork back piece created at a premium Bay of Plenty tattoo studio",
  "Illustrative forearm tattoo with detailed linework and soft shading",
  "Custom ornamental chest tattoo crafted through consultation-led design",
];

const bookingSteps = [
  "Share your idea, placement, scale, and reference images through our booking form.",
  "Meet with your preferred tattoo artist for a consultation to refine concept, timing, and budget.",
  "Confirm your session with a deposit and receive clear preparation guidance before your appointment.",
];

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Premium tattoo studio · Mount Maunganui</p>
            <h1 className="section-title max-w-4xl">Tattoo Studio in Mount Maunganui for Refined Custom Work</h1>
            <p className="lead mt-8">
              Tidal Ink Tattoo Studio creates premium custom tattoos for clients in Mount Maunganui,
              Tauranga, and across the Bay of Plenty. Our calm, consultation-led process pairs refined
              artistry with a clean, professional studio experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/booking/" className="button button-solid">
                Book a consultation
              </Link>
              <Link href="/gallery/" className="button button-outline">
                View tattoo gallery
              </Link>
            </div>
          </div>
          <div className="editorial-card overflow-hidden rounded-[2rem] p-4">
            <div
              className="placeholder-image flex min-h-[24rem] items-end rounded-[1.5rem] p-8"
              role="img"
              aria-label="Premium custom tattoo studio interior in Mount Maunganui with dark finishes and gold accents"
            >
              <div>
                <p className="eyebrow">Calm. Artistic. Precise.</p>
                <p className="mt-4 max-w-md text-base leading-8 text-[--color-muted]">
                  A modern tattoo studio designed for thoughtful custom work, client comfort, and high-end presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-panel">
        <div className="container-wide grid gap-10 lg:grid-cols-3">
          <div className="editorial-card rounded-[1.75rem] p-8">
            <p className="eyebrow">Custom tattoos Tauranga</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.12em] text-[--color-text]">
              Consultation-first design
            </h2>
            <p className="mt-4 text-sm leading-7 text-[--color-muted]">
              Every tattoo begins with a collaborative consultation. We shape concept, placement, scale, style, and flow before ink touches skin.
            </p>
          </div>
          <div className="editorial-card rounded-[1.75rem] p-8">
            <p className="eyebrow">Tattoo artists Mount Maunganui</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.12em] text-[--color-text]">
              Specialist artistry
            </h2>
            <p className="mt-4 text-sm leading-7 text-[--color-muted]">
              Our tattoo artists specialise in fine line, blackwork, ornamental, and illustrative tattoos with a premium editorial aesthetic.
            </p>
          </div>
          <div className="editorial-card rounded-[1.75rem] p-8">
            <p className="eyebrow">Premium tattoo studio Bay of Plenty</p>
            <h2 className="mt-4 text-3xl font-heading uppercase tracking-[0.12em] text-[--color-text]">
              Client comfort
            </h2>
            <p className="mt-4 text-sm leading-7 text-[--color-muted]">
              Hygiene, clear communication, and a relaxed environment are built into every appointment from enquiry to aftercare.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <p className="eyebrow">Featured artists</p>
          <h2 className="section-title max-w-4xl">Tattoo artists in Mount Maunganui with distinct signature styles</h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {artistProfiles.map((artist) => (
              <article key={artist.name} className="editorial-card rounded-[1.75rem] p-8">
                <div
                  className="placeholder-image mb-6 min-h-[16rem] rounded-[1.25rem]"
                  role="img"
                  aria-label={`${artist.name} custom tattoo artist in Mount Maunganui specialising in ${artist.specialty.toLowerCase()}`}
                />
                <h3 className="font-heading text-2xl uppercase tracking-[0.1em] text-[--color-text]">{artist.name}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.26em] text-[--color-accent]">{artist.specialty}</p>
                <p className="mt-4 text-sm leading-7 text-[--color-muted]">{artist.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-panel">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Gallery preview</p>
            <h2 className="section-title">Custom tattoo gallery shaped by detail and craftsmanship</h2>
            <p className="lead mt-8">
              Explore a curated selection of fine line, blackwork, ornamental, and illustrative tattoo work produced for clients throughout Mount Maunganui and Tauranga.
            </p>
            <Link href="/gallery/" className="button button-outline mt-10">
              Browse the gallery
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {galleryHighlights.map((item) => (
              <article key={item} className="editorial-card rounded-[1.5rem] p-6">
                <div
                  className="placeholder-image min-h-[12rem] rounded-[1.1rem]"
                  role="img"
                  aria-label={item}
                />
                <h3 className="mt-5 text-lg font-semibold uppercase tracking-[0.1em] text-[--color-text]">Signature piece</h3>
                <p className="mt-3 text-sm leading-7 text-[--color-muted]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="eyebrow">Booking process</p>
            <h2 className="section-title">How to book your custom tattoo consultation</h2>
            <p className="lead mt-8">
              We guide each client from initial idea through concept refinement, booking confirmation, and appointment preparation.
            </p>
          </div>
          <div className="grid gap-6">
            {bookingSteps.map((step, index) => (
              <article key={step} className="editorial-card rounded-[1.5rem] p-8">
                <h3 className="text-sm uppercase tracking-[0.3em] text-[--color-accent]">Step {index + 1}</h3>
                <p className="mt-4 text-base leading-8 text-[--color-muted]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-panel">
        <div className="container-wide editorial-card rounded-[2rem] px-8 py-12 text-center sm:px-12">
          <p className="eyebrow">Visit Tidal Ink Tattoo Studio</p>
          <h2 className="mt-4 font-heading text-4xl uppercase tracking-[0.12em] text-[--color-text] sm:text-5xl">
            Premium tattoo appointments in Mount Maunganui
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[--color-muted]">
            Enquire about custom tattoos, choose your preferred artist, and secure a consultation with a studio that values artistry, hygiene, and client care.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/booking/" className="button button-solid">
              Start your booking
            </Link>
            <Link href="/contact/" className="button button-outline">
              Contact the studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
