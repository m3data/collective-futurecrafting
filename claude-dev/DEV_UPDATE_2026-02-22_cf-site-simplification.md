# DEV_UPDATE_2026-02-22_cf-site-simplification

## Constraint Acknowledgement

This update is written under the constraints defined in EarthianLabs root CLAUDE.md.

- **Irreversibility constraints respected:** YES
- **Metabolic governors stressed:** LOW
- **Any overrides?** None

## Local Context

The Collective Futurecrafting website was an 18+ page Jekyll site carrying significant structural weight: two dropdown navigation menus, a full Craft section (10 pages), a separate About sub-site (3 pages plus index), a Resources section, a Playground, and a WISDOM Protocol page. The site's architecture was outpacing the project's actual stage — a seedling with a small, active steward group, not yet a scaled movement.

The session goal was a focused simplification: strip to the pages that genuinely serve the current moment and leave everything else preserved but unpublished, ready for future use as wiki/RAG material or staged reactivation.

Starting state: ~18 published pages, 2 dropdown nav menus with 11 sub-items total.
Ending state: 4 published pages (Home, About, Blog, Join), 3 flat nav links, no dropdowns.

## Decisions Made

- **Homepage redesign** (reversible: CSS and includes retained, prior content in git history) — replaced narrative-heavy homepage with circle-invitation-first structure, adapting content from `context-building/start-a-circle.html` prototype into the existing Jekyll design system. Sections: Hero, charcoal question section, what is a circle, 4-step how-to (story-section layout with SVGs), Presencing Circle practice card, six guidelines, four "what grows" cards, six FAQ items, closing CTA.

- **Content-pod refactor on homepage** (reversible: old class names still exist in codebase) — initial implementation used 12+ gradient content-pod blocks; refactored to lightweight native HTML. Added three new CSS classes to `assets/css/main.css` (~100 lines appended): `.cf-question`, `.cf-guideline`, `.cf-faq__item`. Establishes a lighter pattern for future CF pages.

- **Navigation collapse** (reversible) — `_data/navigation.yml` reduced from two dropdown menus (About: 3 items, Craft: 8 items) plus Blog and Get Involved, to three flat links: About, Blog, Join. No dropdowns needed at current scale.

- **About page consolidation** (reversible: sub-pages preserved with `published: false`) — `pages/about/index.md` now holds the full about content: CF overview (drawing from proem), origins (3 paragraphs from origins.md), all four steward bios (via `steward-bio.html` include), closing CTA. Sub-pages `proem.md`, `origins.md`, `stewards.md` set to `published: false`.

- **Join page simplification** (reversible) — `pages/get-involved.md` permalink changed from `/get-involved/` to `/join/`. Content simplified to: ways to connect section + Substack link + Tally.so contact form. Removed WISDOM Protocol, Playground, and closing parallax sections.

- **13 pages unpublished** (reversible: all content preserved in repo, `published: false` in frontmatter) — 10 craft pages (index, philosophy, provocation, principles, patterns, practices, protocol, playground, play, weaving), 1 resources page, plus 2 previously-unpublished pages (indigenous-wisdom, crisis-response) confirmed as-is. Verified: `grep -r "published: false"` returns 16 files (14 newly unpublished + 2 pre-existing).

- **Layout and config cleanup** (reversible: deleted includes were unused) — `_layouts/default.html`: removed story-weaver.css/js conditional loading for `/play` URL, removed resources RSS link. Deleted `_includes/carousel.html` and `_includes/timeline-node.html` (dead includes). `_config.yml`: `resources` and `story_nodes` collections set to `output: false`.

- **Broken link fixes** (reversible) — privacy page link `/get-involved#contact` updated to `/join/#contact`; two blog posts updated from `/get-involved` to `/join/`. One blog post link to `/craft/patterns/` left as-is (historical context, not a navigation path).

- **No redirects added** (deferred, not decided) — old `/craft/*`, `/get-involved/`, `/about/proem/`, `/about/origins/`, `/about/stewards/`, `/resources/` URLs will 404. Jekyll-redirect-from plugin could handle this. Decision deferred to Mat.

- **Welcome modal retained** (deferred to Mat) — acknowledgement of country still shows on first visit; Mat to confirm whether it stays for the simplified site.

## Compression Summary

The CF site is now a 4-page site (Home, About, Blog, Join) with flat navigation. The circle is the entry point — the homepage leads with invitation, not architecture.

All craft material survives as `published: false` pages, accessible in the repo for future use (wiki, RAG, staged reactivation). Nothing was deleted except two dead includes and two conditional script loads.

The homepage introduced a lightweight CSS pattern (`.cf-question`, `.cf-guideline`, `.cf-faq__item`) that should be used for future CF pages rather than reaching for content-pods by default.

Key open decision: **redirects**. Old URLs (10 craft pages, get-involved, 3 about sub-pages, resources) currently 404. If external links or search indexing matters, `jekyll-redirect-from` gem handles this without structural changes.

Jekyll dev server confirmed running at `http://127.0.0.1:4000/` post-changes.

## Residue / Open Tensions

1. **Redirect gap** — 13+ URLs will 404 with no forwarding. If the site has any indexed presence or linked content (newsletters, social posts), this creates dead ends. The fix is straightforward (`jekyll-redirect-from` is already a common Jekyll plugin) but the decision about which URLs matter enough to redirect belongs to Mat. This is the heaviest open item.

2. **Welcome modal scope** — the acknowledgement of country modal was designed for a site that framed itself as drawing on indigenous knowledge lineages (via the Craft section). With the Craft section hidden, the modal's presence on a 4-page circle-invitation site may feel mismatched or may feel exactly right. Mat's call.

3. **Blog page header** — the blog page was not touched during this session. It may carry navigation or framing that references the old site structure. Flagged for a future review pass.

4. **Mobile layout untested visually** — the hamburger menu was verified structurally (3 items, no dropdowns, correct links) but not rendered on an actual mobile viewport. The story-section layout used for the 4-step how-to on the homepage uses SVGs that could reflow unexpectedly on narrow screens.

5. **Content-pod on Join page** — the simplified Join page still uses a content-pod (`theme="terra-sky"`) for the "Ways to connect" section. This is inconsistent with the lighter CSS pattern introduced on the homepage. Low priority but a mild design inconsistency.

6. **past-kairos-convos/ and Sense indexing** — unrelated to this session but flagged from infrastructure context: inclusion and weighting of past conversation logs in Sense corpus is still pending. No action needed here but the tension exists.
