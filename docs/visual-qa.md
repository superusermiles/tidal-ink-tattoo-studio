# Tidal Ink Tattoo Studio Visual QA

## QA Recheck Status
Blocked. Public deployment access is now available at the latest Vercel URL, but the required screenshot workflow still cannot run in this environment because Playwright Chromium exits with `SIGSYS` before capture. A code review against the approved brief, design spec, development handoff, and current implementation was completed instead.

## Inputs Used
- Repo path: `/home/bob/workspace/tidal-ink-tattoo-studio`
- Live URL: `https://site-png0wjb4f-stephenandrews-projects.vercel.app`
- Design spec reviewed: `docs/design-spec.md`
- Brief reviewed: `docs/brief.md`
- Development requirements reviewed: `docs/development-handoff.md`

## Screenshot Attempt
- Attempted required capture command: `node /home/bob/scripts/screenshot.mjs https://site-png0wjb4f-stephenandrews-projects.vercel.app /home/bob/workspace/tidal-ink-tattoo-studio/files/screenshots/`
- Playwright Chromium launch failed with `signal=SIGSYS` before any page screenshots were captured.
- No live visual evidence from the current deployment could be produced in this task run.

## Implementation Review Findings
### Passes
- Colour palette aligns with the design spec. `app/globals.css` uses near-black `#0A0A0B`, deep charcoal `#121317`, slate `#1B1E24`, soft ivory `#F3EFE7`, muted grey `#B8B2A7`, and aged gold `#C8A96B`.
- Typography direction aligns with the spec. `app/layout.tsx` uses a refined serif heading font and clean sans-serif body font.
- Header navigation matches the required IA with Home, Artists, Gallery, Booking, and Contact links plus a gold-outlined booking CTA.
- Hero CTA pair now matches the approved design intent: primary booking CTA and secondary `View artists` CTA.
- Home page now includes all five required booking steps in order.
- Artist cards now include name, specialty, short bio, experience indicator, and a per-card booking CTA.
- Gallery preview now uses category-led cards instead of the previous generic repeated title pattern.
- Accessibility basics remain present: skip link, semantic header/main/footer, and focus-visible treatment.
- Local business schema, robots, and sitemap are present.

### Issues Found
1. **Major — Required interior pages are still not evidenced in the provided app router snapshot.**
   - The brief and handoff require `/artists/`, `/gallery/`, `/booking/`, and `/contact/`.
   - The provided `site/app` files reviewed in this pass still only evidence `page.tsx`, `layout.tsx`, `globals.css`, `robots.ts`, and `sitemap.ts`.
   - Navigation structure is correct, but the route files themselves are not evidenced in the reviewed implementation snapshot.

2. **Major — Gallery category naming is still partially off-spec.**
   - The design handoff requires `Fine Line`, `Blackwork`, `Ornamental`, and `Custom Pieces`.
   - The current home preview uses `Fine Line`, `Blackwork`, `Illustrative`, and `Custom Ornamental`.
   - This is stronger than the earlier implementation, but it still does not exactly match the approved gallery taxonomy.

3. **Major — Metadata base URL still points to the previous blocked Vercel deployment.**
   - `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` still use `https://site-mbse8ft0k-stephenandrews-projects.vercel.app`.
   - The current public review URL is `https://site-png0wjb4f-stephenandrews-projects.vercel.app`.
   - Canonical, Open Graph, robots, sitemap, and schema URL references should be updated to the active deployment or final production domain.

4. **Major — Live visual QA remains incomplete because screenshot capture is blocked by environment tooling.**
   - The required screenshot command fails before browser launch completes.
   - Layout fidelity, responsive behaviour, spacing, and rendered route completeness cannot be visually signed off from this environment.

## Overall Assessment
The implementation is materially closer to the approved design than the earlier reviewed state. Key home-page issues previously flagged are now resolved in code: the correct secondary hero CTA is in place, the booking process includes five steps, artist cards are complete, and gallery cards are more aligned with the brief. However, the build still cannot be fully approved because required interior routes are not evidenced in the reviewed app snapshot, gallery taxonomy is not an exact match to spec, metadata still points at the old deployment URL, and screenshot-based live QA remains blocked by the environment.

## Required Next Step
1. Ensure the required `/artists/`, `/gallery/`, `/booking/`, and `/contact/` route files are present in `site/app` and deployed.
2. Align gallery category naming exactly to the approved set: `Fine Line`, `Blackwork`, `Ornamental`, and `Custom Pieces`.
3. Update metadata, schema, robots, and sitemap URLs to the active production domain in service.
4. Redeploy.
5. Rerun visual QA in a screenshot-capable environment.
