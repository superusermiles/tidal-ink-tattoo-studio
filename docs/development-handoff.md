# Tidal Ink Tattoo Studio Development Handoff

## Project Setup
- Framework: Next.js with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment target: Vercel
- Output mode: static export

## Repo Path
`/home/bob/workspace/tidal-ink-tattoo-studio`

## Site Path
`/home/bob/workspace/tidal-ink-tattoo-studio/site`

## Required Pages
- `/`
- `/artists/`
- `/gallery/`
- `/booking/`
- `/contact/`

## Core Requirements
- Build all required pages before first production build
- Use semantic HTML and accessible heading structure
- Use real, production-quality copy aligned with the brief
- Mobile-first responsive implementation
- Premium dark aesthetic with gold accents
- NZ English throughout

## Content Direction
- Premium custom tattoo studio in Mount Maunganui, New Zealand
- Emphasise bespoke work, professionalism, hygiene, collaboration, and comfort
- Present multiple artists with different specialties
- Make booking process clear and approachable

## Technical Requirements
### Next Config
Use static export configuration:
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
```

### SEO
- Unique metadata per page
- Open Graph support
- robots.txt
- sitemap.xml
- LocalBusiness or Organization structured data

### Performance
- Keep JS light
- Prefer CSS/Tailwind over client-side logic
- Avoid unnecessary dependencies

## Suggested Content Model
### Artists
Create at least three artist profiles:
- Fine line / botanical specialist
- Blackwork / geometric specialist
- Illustrative / custom storytelling specialist

### Gallery Categories
- Fine Line
- Blackwork
- Ornamental
- Custom Pieces

### Booking Policies
- Consultation required for custom work
- Deposit required to secure appointment
- 48-hour notice for rescheduling
- ID required for first-time clients
- Aftercare guidance provided at appointment

## Deliverables
- Complete docs set restored
- Complete site built in `site/`
- Successful `npm run build`
- Production deployment to Vercel
- Git commit and push to `main`

## Completion Notes Required
Add task notes for:
1. Exact live Vercel URL
2. Repo path confirmation: `/home/bob/workspace/tidal-ink-tattoo-studio`
