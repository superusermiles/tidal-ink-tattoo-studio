# Tidal Ink Tattoo Studio Visual QA

## QA Recheck Status
Blocked. Live visual QA rerun could not be completed in this environment because the required screenshot workflow failed to launch Chromium. A code review against the approved brief, design spec, and current implementation was completed instead.

## Inputs Used
- Repo path: `/home/bob/workspace/tidal-ink-tattoo-studio`
- Live URL: `https://site-mbse8ft0k-stephenandrews-projects.vercel.app`
- Design spec reviewed: `docs/design-spec.md`
- Brief reviewed: `docs/brief.md`
- Development requirements reviewed: `docs/development-handoff.md`

## Screenshot Attempt
- Attempted required capture command: `node /home/bob/scripts/screenshot.mjs https://site-mbse8ft0k-stephenandrews-projects.vercel.app /home/bob/workspace/tidal-ink-tattoo-studio/files/screenshots/`
- Playwright Chromium launch failed with `signal=SIGSYS` before any page screenshots were captured.
- No visual evidence from the live deployment could be produced in this task run.

## Implementation Review Findings
### Passes
- Brand palette aligns closely with spec: near-black, charcoal, slate, soft ivory, muted grey, and aged gold are implemented in `app/globals.css`.
- Typography direction aligns with spec: serif display heading font and clean sans-serif body font are implemented in `app/layout.tsx`.
- Header navigation includes Home, Artists, Gallery, Booking, and Contact, with a gold-outlined booking CTA in desktop navigation.
- Home page includes the required premium dark hero, artist preview section, gallery preview, booking process section, and final CTA block.
- Footer includes studio name, location details, navigation repeat, booking CTA, and copyright line.
- Accessibility basics are present: skip link, semantic header/main/footer, and focus-visible styles.
- Robots and sitemap files exist.
- Local business schema is included in the layout.

### Issues Found
1. **Major — Required pages are missing from the app router.**
   - The spec and handoff require `/artists/`, `/gallery/`, `/booking/`, and `/contact/`.
   - The current `site/app` tree only shows `page.tsx`, `layout.tsx`, `globals.css`, `robots.ts`, and `sitemap.ts`.
   - This means the main navigation links point to pages that are not implemented in the provided code snapshot.

2. **Major — Home page booking process is incomplete versus the approved design.**
   - The design spec requires five steps: Share your idea, Consultation and artist match, Design approval and deposit, Session day, Aftercare.
   - The current home page only renders three booking steps.

3. **Major — Secondary hero CTA does not match the approved design.**
   - Spec requires secondary CTA: `View Artists`.
   - Current implementation uses `View tattoo gallery` linking to `/gallery/`.

4. **Major — Artist cards are incomplete.**
   - Spec requires artist name, specialty, short bio, experience indicator, and CTA to book.
   - Current cards include name, specialty, and description only. No experience indicator. No per-card booking CTA.

5. **Major — Gallery cards are incomplete.**
   - Spec requires category title and descriptive caption for featured work categories: Fine Line, Blackwork, Ornamental, Custom Pieces.
   - Current gallery preview cards repeat the generic title `Signature piece` rather than surfacing the required category titles.

6. **Major — Contact page requirements are not evidenced in current implementation.**
   - The brief and spec require address, hours, email, Instagram placeholder or link, travel/location details, and enquiry prompt on a dedicated contact page.
   - No dedicated contact route file is present in the provided app structure.

7. **Major — Booking page policy requirements are not evidenced in current implementation.**
   - The handoff requires deposits, 48-hour rescheduling notice, age requirement, preparation guidance, and aftercare guidance.
   - No dedicated booking route file is present in the provided app structure.

8. **Major — Metadata base URLs use a production domain that does not match the supplied live deployment URL.**
   - `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` all reference `https://tidalinktattoo.co.nz`.
   - Current live review URL is the Vercel deployment URL. This mismatch can create incorrect canonical, Open Graph, robots, and sitemap references until the custom domain is actually connected and serving.

## Overall Assessment
The visual direction and foundational styling are strong and mostly on-brief. The implementation appears polished at the home page level. But the build does not yet satisfy the approved scope because required interior pages are not evidenced, several component requirements are incomplete, and live screenshot-based QA could not be performed.

## Required Next Step
1. Implement the missing Artists, Gallery, Booking, and Contact pages.
2. Complete missing spec details on the home page: five booking steps, correct secondary hero CTA, artist card experience indicators and booking CTAs, and proper gallery category titles.
3. Ensure metadata, robots, and sitemap use the actual live production domain in service.
4. Redeploy.
5. Rerun visual QA with a screenshot-capable environment.
