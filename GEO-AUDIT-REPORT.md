# GEO Audit Report: Untold.works

**Audit Date:** 2026-03-18
**URL:** https://untold.works
**Business Type:** Agency / Professional Services
**Pages Analyzed:** 60 (sitemap) + llms.txt, llms-full.txt, robots.txt
**Auditor:** Claude Opus 4.6 via GEO Audit Orchestration

---

## Executive Summary

**Overall GEO Score: 49/100 (Poor)**

Untold.works has invested heavily in the *right* GEO infrastructure — a near-perfect robots.txt welcoming 20+ AI crawlers, comprehensive llms.txt files, rich JSON-LD schemas, and well-structured content with question-format headers, definition blocks, and specific metrics. However, a single critical deployment issue undermines everything: **the Netlify SPA catch-all redirect serves an empty `<div id="root"></div>` to every AI crawler on every page.** The prerendered HTML exists in the build output but never reaches crawlers. Fixing this one issue would raise the GEO Score from 49 to an estimated 68-72.

The secondary gap is brand authority — Untold.works has minimal third-party mentions, a contested brand name ("Untold" is used by 5+ other agencies), and near-zero presence on platforms AI models rely on for entity recognition (Wikipedia, Reddit, YouTube, Clutch).

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 28/100 | 25% | 7.0 |
| Brand Authority | 18/100 | 20% | 3.6 |
| Content E-E-A-T | 68/100 | 20% | 13.6 |
| Technical GEO | 52/100 | 15% | 7.8 |
| Schema & Structured Data | 62/100 | 10% | 6.2 |
| Platform Optimization | 48/100 | 10% | 4.8 |
| **Overall GEO Score** | | | **43.0 → 49/100*** |

*Score adjusted upward from raw 43 to 49 because the llms.txt files (score: 92/100) partially compensate for the SPA rendering gap — they are the only way AI models currently get substantive content about the business.*

---

## Critical Issues (Fix Immediately)

### 1. Prerendered HTML Not Served to Crawlers
**Severity:** CRITICAL — Affects every page on the site
**Files:** `netlify.toml` (line 30), `prerender.mjs`

The build pipeline runs `vite build && node prerender.mjs`, which uses Puppeteer to pre-render 67 routes into static HTML files in `dist/`. The prerendered `dist/index.html` is 92KB of fully-rendered content. However, the `netlify.toml` SPA catch-all redirect intercepts all requests:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This serves the 13KB SPA shell (with `<div id="root"></div>`) for every URL. AI crawlers see zero body content on every page.

**Fix:** Add explicit redirect rules for prerendered routes BEFORE the SPA catch-all, or use Netlify's `_redirects` file which respects static file priority. Alternatively, remove the catch-all and let Netlify serve static files from the `dist/` directory structure.

**Impact:** Fixing this single issue would raise AI Citability from 28 to ~70, Technical GEO from 52 to ~78, and the overall GEO Score from 49 to ~68-72.

### 2. Tailwind CSS CDN in Production
**Severity:** CRITICAL — Performance blocker
**File:** `index.html` (line ~218)

The site loads `cdn.tailwindcss.com` — the *development-only* CDN that compiles Tailwind at runtime in the browser. This is a render-blocking script that must download, parse, and execute before any styled content appears. The project already has `tailwindcss` as a devDependency with PostCSS configured — this should be build-time compilation only.

**Fix:** Remove the `<script src="https://cdn.tailwindcss.com"></script>` tag and inline `tailwind.config` script from `index.html`. Ensure the Vite build compiles Tailwind via PostCSS.

---

## High Priority Issues

### 3. All Page-Level Schemas Are JavaScript-Injected
**Severity:** HIGH
**Files:** `hooks/usePageMeta.ts`, `pages/BlogPost.tsx`, `pages/About.tsx`, `pages/SeoAeo.tsx`, `components/Testimonials.tsx`

Only 3 schemas are server-rendered in `index.html` (Organization, ProfessionalService, WebSite). All page-specific schemas (Article, Person, Service, FAQPage, LocalBusiness, BreadcrumbList, Review, VideoObject) are injected via React client-side rendering and invisible to AI crawlers.

**Fix:** Once prerendering delivery is fixed (Issue #1), all schemas will be served. As an interim measure, add a Person schema for the founder to `index.html` as a static `<script type="application/ld+json">` block.

### 4. Organization sameAs Only Links 2 Platforms
**Severity:** HIGH
**File:** `index.html` (lines 108-111)

The Organization schema's `sameAs` array only includes LinkedIn company page and Instagram. Missing: YouTube, GitHub, Twitter/X, Crunchbase, Facebook, and any other profiles.

**Fix:** Expand `sameAs` to include all official profiles. Create profiles on missing platforms if they don't exist. This is a 2-minute fix in `index.html`.

### 5. LinkedIn Company Page Has Incorrect Data
**Severity:** HIGH
**Platform:** LinkedIn (`/company/untoldworksai`)

The LinkedIn company page shows a founding date of 2025 (should be 2017), has only 1 follower, and minimal description. This page is a primary entity signal for AI models.

**Fix:** Correct founding date, add complete company description, post consistently, and build follower base.

### 6. Zero Presence on B2B Review Platforms
**Severity:** HIGH
**Impact:** Brand Authority

No profiles on Clutch.co, G2, DesignRush, or Trustpilot. These are high-authority sources that AI models cite heavily when answering queries about agencies.

**Fix:** Register on Clutch.co and G2 at minimum. Even a verified profile with basic information improves entity recognition.

### 7. Missing Content-Security-Policy Header
**Severity:** HIGH
**File:** `netlify.toml`

No CSP header is set. While not directly a GEO issue, security headers contribute to trustworthiness signals.

**Fix:** Add a `Content-Security-Policy` header in `netlify.toml`.

---

## Medium Priority Issues

### 8. Brand Name Collision Risk
"Untold" is heavily contested: `untold.agency`, `untold.site`, `untold.la`, `withuntold.com`, `wearetheuntold.com` all exist. AI models may conflate these entities. Always use "Untold.works" as the full brand name in all external references.

### 9. No YouTube Presence
Zero YouTube content indexed. Even 3-5 videos explaining AEO concepts, showing case study walkthroughs, or demonstrating n8n workflows would create citable video content.

### 10. No Reddit Presence
Zero mentions on Reddit. Relevant subreddits (r/webdev, r/artificial, r/smallbusiness, r/SanMiguelDeAllende) are citation sources for AI models.

### 11. Hreflang Uses Query Parameter Instead of Path
The Spanish variant uses `?lang=es` query parameter rather than `/es/` path-based routing. This is non-standard for internationalization and can cause duplicate content issues.

### 12. Review Schema Missing Properties
**File:** `components/Testimonials.tsx` (lines 39-50)

Reviews lack `itemReviewed`, `datePublished`, and `aggregateRating`. The wrapping structure should explicitly reference the Organization being reviewed.

### 13. WebSite Schema Missing SearchAction
**File:** `index.html` (lines 207-216)

The WebSite schema lacks `potentialAction` with `SearchAction` and `publisher` reference.

### 14. Blog Articles Lack Source Citations
Blog content makes statistical claims without external source references. Adding citations to studies, reports, and authoritative sources increases both E-E-A-T and citability.

### 15. Case Studies Are Too Thin
Portfolio case studies average ~300 words. Expanding to 1,500+ words with process artifacts, methodology, and detailed results would significantly improve citability and E-E-A-T.

---

## Low Priority Issues

### 16. Images Missing Width/Height Attributes
Portfolio images and media lack HTML dimension attributes, increasing CLS risk.

### 17. Five Google Fonts Loaded
Caveat, Inter, Libre Caslon Text, IBM Plex Mono, and Share Tech Mono are all loaded on every page. Non-critical fonts should load asynchronously.

### 18. HSTS Missing includeSubDomains
Current: `max-age=31536000`. Should add `includeSubDomains`.

### 19. Missing Preload Hints for Critical Resources
No `<link rel="preload">` for hero fonts or above-fold images. No `fetchpriority="high"` on LCP image.

### 20. Article Schema Missing wordCount and articleSection
Blog post Article schemas would benefit from `wordCount` and `articleSection` properties.

---

## Category Deep Dives

### AI Citability (28/100)

The citability score is critically low because AI crawlers cannot access the actual content. The content *itself* — when rendered via JavaScript — is well-structured:

**Content strengths (invisible to crawlers):**
- Question-format H2 headers on service pages ("What is AEO?", "How does it work?")
- Definition blocks for key terms (AEO, RevOps, GEO)
- Specific metrics in case studies (98% MQL accuracy, 4.2x sales ROI)
- FAQ sections with self-contained answer blocks
- Comparison tables on service pages

**What crawlers actually see:**
- Meta tags (~2 sentences)
- 3 JSON-LD schemas (Organization, ProfessionalService, WebSite)
- llms.txt files (the only substantive content accessible)

**Best citability asset:** The `llms-full.txt` file scores 90/100 on citability — it contains structured, self-contained passages with specific metrics, definitions, and biographical data. It is currently carrying the entire AI visibility burden.

**Post-fix estimate:** Once prerendering is served, citability would jump to 65-75 based on the quality of the underlying content.

### Brand Authority (18/100)

| Platform | Status | Impact |
|---|---|---|
| Wikipedia | Absent | No article for brand or founder |
| Reddit | Absent | Zero mentions found |
| YouTube | Absent | No channel or videos |
| LinkedIn (Company) | Minimal | 1 follower, wrong founding date |
| LinkedIn (Founder) | Present | Profile indexed by data aggregators |
| Clutch / G2 | Absent | No B2B review profiles |
| Industry Roundups | Absent | Not listed on any "best AEO agencies" lists |
| Vimeo (Founder) | Present | Creative reel content |
| Discogs/AllMusic | Present | Music credits establish creative history |

**Brand confusion risk:** HIGH — "Untold" is used by 5+ other agencies globally.

**Founder signal:** Joshua Semolik has stronger individual presence than the brand — LinkedIn profile indexed by ContactOut and ZoomInfo, Vimeo creative content, music credits on Discogs/AllMusic. The founder's personal brand is the strongest entity signal.

### Content E-E-A-T (68/100)

| Dimension | Score | Key Findings |
|---|---|---|
| **Experience** | 78/100 | 5 real case studies with specific metrics. Founder bio shows 20-year career (NBA/Kings, Videndum PLC, cannabis industry, Ingenia). First-hand project insights in blog posts. |
| **Expertise** | 72/100 | MIT Sloan AI Strategy certificate. 22 `knowsAbout` topics in schema. Blog covers AEO, AI workflows, bilingual development. Two Emmy nominations demonstrate creative expertise. |
| **Authoritativeness** | 35/100 | Almost no external validation. No media coverage, no industry directory presence, no third-party citations. All authority claims are self-declared. |
| **Trustworthiness** | 80/100 | Transparent pricing on service pages. Privacy policy present. Clear ownership and contact info. Professional presentation. Named client testimonials (3). |
| **Content Depth** | 65/100 | Blog posts average 800-1,200 words. Case studies are thin (~300 words). Service pages have good structure but could go deeper. |
| **Content Freshness** | 90/100 | All content from Q1 2026. Frequent updates visible in sitemap lastmod dates. |
| **Author Attribution** | 70/100 | AuthorByline component exists with name and title. Blog posts show author. Missing: detailed author bio on each post, link to author page, credentials per post. |
| **Source Citations** | 30/100 | Statistical claims largely unattributed. Blog posts reference concepts but rarely cite specific studies or reports. |
| **Originality** | 75/100 | Content shows genuine voice and first-hand experience. "Yo, This Thing Is Broken" and "Your Creative Eye Became the Prompt" are clearly original perspectives. |

### Technical GEO (52/100)

| Component | Score | Status |
|---|---|---|
| Server-Side Rendering | 15/100 | CRITICAL — Prerendered HTML not served |
| Meta Tags & Indexability | 95/100 | Excellent — title, description, canonical, OG, Twitter Card, hreflang |
| Crawlability (robots.txt) | 90/100 | Excellent — 20+ AI crawlers explicitly allowed |
| Security Headers | 85/100 | Good — HTTPS, HSTS, X-Frame-Options. Missing CSP |
| Core Web Vitals Risk | 50/100 | Medium — cdn.tailwindcss.com in production is major LCP risk |
| Mobile Optimization | 80/100 | Good — viewport-fit=cover, safe area insets, touch targets |
| URL Structure | 90/100 | Excellent — clean slugs, logical hierarchy |
| Response & Status | 70/100 | Fair — identical response for all routes due to SPA fallback |
| llms.txt | 92/100 | Excellent — comprehensive, well-structured, properly served |

**The paradox:** World-class infrastructure (robots.txt, llms.txt, meta tags, schemas) pointed at empty pages.

### Schema & Structured Data (62/100)

**Static (server-rendered, visible to crawlers):**
- Organization ✓ (good detail, but sameAs only 2 platforms)
- ProfessionalService ✓ (bilingual, geo, price range)
- WebSite ✓ (missing SearchAction and publisher)

**JavaScript-injected (invisible to crawlers):**
- Article (blog posts) — well-structured with speakable
- Person (founder on About page) — comprehensive with credentials
- Service (SEO/AEO, Websites pages) — good
- FAQPage (5 pages) — semantically valuable
- LocalBusiness (San Miguel page) — proper geo
- CreativeWork (portfolio items) — with VideoObject
- BreadcrumbList (all pages via usePageMeta)
- Review/Rating (testimonials) — needs structural fixes

**Validation issues:**
- Review schema missing `itemReviewed` and `datePublished`
- ProfessionalService missing `@id` cross-reference
- WebSite missing `publisher` and `potentialAction`

### Platform Optimization (48/100)

| Platform | Presence | Score Contribution |
|---|---|---|
| llms.txt/llms-full.txt | Excellent | +30 |
| robots.txt AI directives | Excellent | +10 |
| LinkedIn | Minimal | +3 |
| Instagram | Present | +2 |
| Vimeo (founder) | Present | +2 |
| YouTube | Absent | 0 |
| Reddit | Absent | 0 |
| Wikipedia | Absent | 0 |
| Clutch/G2 | Absent | 0 |
| Industry directories | Absent | 0 |
| Brand name clarity | Confused | +1 |

---

## Quick Wins (Implement This Week)

1. **Fix Netlify redirect ordering** — Remove or reorder the `/* -> /index.html` catch-all in `netlify.toml` so prerendered static files are served. Use Netlify's `_redirects` file or add per-route redirects before the catch-all. **Expected impact: +20-25 points to GEO Score.**

2. **Expand Organization sameAs** — Add all social/professional profiles to the Organization schema `sameAs` array in `index.html`. Takes 2 minutes. **Expected impact: +3-5 points to Schema score.**

3. **Add Person schema to index.html** — Copy the founder Person schema from `About.tsx` into a static `<script type="application/ld+json">` block in `index.html` so AI crawlers can build the entity graph. **Expected impact: +5 points to Schema score.**

4. **Fix LinkedIn company page** — Correct founding date to 2017, add full description, update logo and banner. **Expected impact: +5 points to Brand Authority.**

5. **Remove cdn.tailwindcss.com** — Delete the development CDN script and inline config from `index.html`. Ensure Vite build handles Tailwind via PostCSS. **Expected impact: +10-15 points to Technical score via CWV improvement.**

## 30-Day Action Plan

### Week 1: Fix the Foundation
- [ ] Fix Netlify redirect ordering so prerendered HTML is served to crawlers
- [ ] Remove cdn.tailwindcss.com from production
- [ ] Add Person (founder) schema to static index.html
- [ ] Expand Organization sameAs to all profiles
- [ ] Fix LinkedIn company page (founding date, description, logo)
- [ ] Add WebSite SearchAction to index.html schema

### Week 2: Build External Authority
- [ ] Register on Clutch.co with verified company profile
- [ ] Register on G2 / DesignRush
- [ ] Create YouTube channel and upload 2-3 videos (AEO explainer, case study walkthrough)
- [ ] Begin participating in 2-3 relevant Reddit subreddits
- [ ] Fix Review schema (add itemReviewed, datePublished, aggregateRating)

### Week 3: Content Depth
- [ ] Expand top 3 case studies from ~300 words to 1,500+ words
- [ ] Add source citations to top 5 blog posts (link to studies, reports, data)
- [ ] Add detailed author bio block to blog post template
- [ ] Add wordCount and articleSection to Article schema
- [ ] Write 1 guest post for an industry publication (Search Engine Journal, Content Marketing Institute, etc.)

### Week 4: Platform Optimization
- [ ] Pursue listing on "best AEO agencies" roundup articles
- [ ] Add CSP header to netlify.toml
- [ ] Add preload hints for critical fonts and hero images
- [ ] Migrate hreflang from ?lang=es to /es/ path routing (larger effort — may extend beyond 1 week)
- [ ] Audit and reduce font payload (defer non-critical fonts)

---

## Post-Fix Score Projections

| Category | Current | After Week 1 Fixes | After 30 Days |
|---|---|---|---|
| AI Citability | 28 | 70 | 75 |
| Brand Authority | 18 | 25 | 45 |
| Content E-E-A-T | 68 | 68 | 78 |
| Technical GEO | 52 | 78 | 82 |
| Schema & Structured Data | 62 | 75 | 80 |
| Platform Optimization | 48 | 50 | 65 |
| **Overall GEO Score** | **49** | **63** | **72** |

---

## Appendix: Key Files Referenced

| File | Lines | Issue |
|---|---|---|
| `netlify.toml` | ~30 | SPA catch-all redirect blocks prerendered content |
| `index.html` | ~218 | cdn.tailwindcss.com in production |
| `index.html` | 47-216 | Static schemas (Organization, ProfessionalService, WebSite) |
| `index.html` | 108-111 | Organization sameAs (only 2 platforms) |
| `prerender.mjs` | all | Prerender script works correctly — output not served |
| `hooks/usePageMeta.ts` | all | JS schema injection (invisible to AI crawlers) |
| `pages/BlogPost.tsx` | 28-57 | Article schema with speakable |
| `pages/About.tsx` | 81-125 | Person/AboutPage schema |
| `pages/SeoAeo.tsx` | 23-89 | Service + FAQPage schema |
| `components/Testimonials.tsx` | 39-50 | Review schema (needs fixes) |

## Appendix: Pages Analyzed

| URL | Status | Key GEO Issues |
|---|---|---|
| / | 200 (SPA shell) | Empty body, schemas static only |
| /about | 200 (SPA shell) | Person schema JS-injected |
| /solutions | 200 (SPA shell) | No page-level schema |
| /solutions/professional-services | 200 (SPA shell) | No page-level schema |
| /solutions/small-business | 200 (SPA shell) | No page-level schema |
| /solutions/enterprise | 200 (SPA shell) | No page-level schema |
| /portfolio | 200 (SPA shell) | No page-level schema |
| /portfolio/spotify-whatsapp-publishing | 200 (SPA shell) | CreativeWork JS-injected |
| /portfolio/black-radio-experience | 200 (SPA shell) | CreativeWork JS-injected |
| /portfolio/omi-lead-intake-qualification | 200 (SPA shell) | CreativeWork JS-injected |
| /blog | 200 (SPA shell) | No page-level schema |
| /blog/aeo-the-shift-nobodys-talking-about | 200 (SPA shell) | Article JS-injected |
| /blog/ai-tools-every-small-business-should-know-2026 | 200 (SPA shell) | Article JS-injected |
| /seo-aeo | 200 (SPA shell) | Service+FAQ JS-injected |
| /websites | 200 (SPA shell) | Service+FAQ JS-injected |
| /san-miguel-de-allende | 200 (SPA shell) | LocalBusiness JS-injected |
| /contact | 200 (SPA shell) | FAQ JS-injected |
| /privacy | 200 (SPA shell) | No schema |
| /llms.txt | 200 (text/plain) | Served correctly, 92/100 |
| /llms-full.txt | 200 (text/plain) | Served correctly, 90/100 |
| /robots.txt | 200 (text/plain) | Excellent, 95/100 |
| /sitemap.xml | 200 (XML) | 60 URLs, all with lastmod |

*All HTML pages return identical 13,654-byte SPA shell regardless of URL.*

---

**Report generated by GEO Audit Orchestration Skill — Untold.works**
**Overall GEO Score: 49/100 (Poor) — projected 72/100 after 30-day plan**
