# AEO Audit Report: Untold.works

**Date**: 2026-03-29
**Domain**: untold.works
**Stack**: Vite + React + TypeScript, Netlify, Puppeteer prerendering

---

## AEO Readiness Score: 82/100 (Grade: B+)

Strong foundation with specific gaps in content citability and freshness signals.

---

## Content & Citability -- 20/25

**Pages audited:** 10 key pages + 4 blog posts
**Highly citable:** Solutions, Websites, SeoAeo, WhatsApp, blog posts (7)
**Moderately citable:** Home, About, NetworkSystems, Partners, SalesEnablement (5)

### Strengths
- FAQ sections with FAQPage schema on every major page
- Bilingual FAQ strategy on SeoAeo.tsx (Spanish-language AEO queries)
- WhatsApp AI blog post is a citability powerhouse (Mexico-specific, original data)
- Specific pricing throughout ($5K/$10K/custom) -- far more citable than "contact us"
- Rich semantic vocabulary (MQL, BANT, RevOps, agentic workflows)

### Critical Gaps
1. **H2 headers site-wide are brand declarations, not questions.** "THE FOUR SYSTEMS" instead of "What Are the Four Systems Every Business Needs?" -- AI models skip declarative headers when scanning for answers.
2. **No comparison tables on key pages.** Missing: WhatsApp Business vs API, SEO vs AEO vs GEO, Network Systems vs Traditional Agency, Traditional vs Digital Sales Tools.
3. **Blog posts lack "Key Takeaways" summaries** -- AI models extract the first structured summary they find.

---

## E-E-A-T Signals -- 20/25

### Strengths
- Person schema (index.html + About.tsx) is comprehensive: MIT Sloan, Emmy nominations, 20 years experience, knowsAbout, sameAs
- AuthorByline on every blog post with photo, name, credentials
- ProofStrip surfaces 4 client-verified metrics across the site
- 12 portfolio projects with specific challenge/goal/solution/metrics
- First-person voice ("I engineered", "I deployed") signals real experience

### Critical Gaps
1. **0 out of 25 blog posts have `dateModified`** -- Google sees all articles as unmodified since publication
2. **Only 1 out of 25 blog posts has `tags`** -- 24 posts have no keywords in Article schema
3. **AuthorByline says "Founder & Creative Director" but schema says "Founder & AI Systems Architect"** -- inconsistency
4. **Only 3 testimonials** for 12 portfolio projects -- thin social proof
5. **Blog Article schema author is inline** -- should reference `@id: #founder` to inherit full credentials
6. **No external source citations in blog posts** -- claims without supporting links

---

## Technical AEO -- 23/25

### Strengths
- Organization, ProfessionalService, WebSite, Person schemas all production-grade
- Service + FAQPage schema on all 18 service pages
- Article schema with speakable on all blog posts
- robots.txt explicitly allows 18 AI crawlers
- llms.txt and llms-full.txt are comprehensive with HTML `<link>` exposure
- Puppeteer prerendering covers 82 routes
- Meta tags, OG, Twitter Card, canonical, hreflang all correct on 36 pages
- Alt text on all functional images

### Critical Gaps
1. **`/whatsapp` and `/partners` missing from prerender.mjs** -- crawlers see empty SPA shell
2. **`/whatsapp` and `/partners` missing from sitemap.xml**
3. **Speakable schema only on blog posts** -- missing from service pages and homepage

---

## Off-Page Authority -- 19/25

### Strengths
- LinkedIn (company + personal), Instagram, GitHub, Vimeo all linked in schema
- Named clients with live URLs in portfolio
- Location pages for 5 geographic markets
- Clear business location and contact info

### Gaps
1. No Google Business Profile visible
2. No media mentions, press features, or "as seen in" badges
3. No external backlink strategy visible from the site
4. No Wikipedia or Crunchbase presence
5. Blog posts don't link to external authoritative sources

---

## Priority Actions (ordered by impact)

### CRITICAL (do now)
1. Add `/whatsapp` and `/partners` to `prerender.mjs` routes array
2. Add `/whatsapp` and `/partners` to `public/sitemap.xml`
3. Add `dateModified` to all 25 blog posts in `data/blogPosts.ts`
4. Add `tags` to all 25 blog posts

### HIGH (this sprint)
5. Convert H2 headers site-wide from brand declarations to question format
6. Enrich BlogPost Article schema author to reference `@id: #founder`
7. Fix AuthorByline title: "Founder & AI Systems Architect" everywhere
8. Add comparison tables to WhatsApp, SeoAeo, NetworkSystems, SalesEnablement
9. Add "Key Takeaways" summaries to top of long blog posts
10. Add WhatsApp and Partners to llms.txt and llms-full.txt

### MEDIUM (next sprint)
11. Add speakable schema to service pages
12. Add more testimonials (target 6-8)
13. Add phone/WhatsApp contact to Contact page
14. Add external source citations to blog posts
15. Add Terms of Service page

### LOW (backlog)
16. Add editorial policy / content disclosure
17. Convert pricing cards to semantic `<table>` on Websites and SeoAeo
18. Add "At a Glance" structured summary to About page
