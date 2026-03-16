# AEO Audit Report: Untold.works
**Date**: 2026-03-16
**Domain**: untold.works
**Stack**: Vite + React 19 SPA, Tailwind CSS, Netlify

---

## AEO Readiness Score: 48/100 (Grade D)

| Category | Score | Grade |
|----------|-------|-------|
| Content & Citability | 15/25 | C |
| E-E-A-T Signals | 7/25 | F |
| Technical AEO | 21/25 | A |
| Off-Page Authority | 5/25 | F |

**The technical foundation is strong. The content spine has gaps. E-E-A-T and off-page are the main weaknesses.**

---

## Content & Citability -- 15/25

- **Pages audited:** 15
- **Highly citable:** 4 (SeoAeo, Dashboard, SMA, Queretaro)
- **Moderately citable:** 8
- **Not citable:** 3 (ProfessionalServices, SmallBusiness, Enterprise)
- **Pages using question headers:** 6/15
- **Pages with FAQ sections:** 12/15
- **Pages with comparison tables:** 5/15
- **Pages addressing objections:** 3/15

### Issues
1. **Solution pages have ZERO FAQ sections** -- ProfessionalServices, SmallBusiness, Enterprise
2. **Most H2/H3 headers are statements, not questions** -- AI engines match question-format headers to user queries
3. **No true HTML `<table>` comparison tables** -- card grids are not machine-parseable as comparison data
4. **Objection handling is minimal** -- only 3 pages address "what if this isn't right for me" type concerns
5. **MexicoCity and UnitedStates** location pages only have 3 FAQs (should be 5+)
6. **About and Contact pages** have FAQs but no FAQPage schema

---

## E-E-A-T Signals -- 7/25

- **Author attribution:** 2/24 pages (blog posts only)
- **Expert commentary/quotes:** 0/24 pages
- **Statistics with sources:** 0 sourced (10+ unsourced stats across service pages)
- **Case studies/testimonials:** 4/24 pages
- **Multiple perspectives:** 0/24 pages
- **FAQ sections with clear answers:** 11/24

### Issues
1. **10+ statistics have ZERO source citations** -- "40% of product searches start in AI chat" etc. AI engines discount unsourced claims
2. **No expert quotes anywhere** -- no third-party voices on any page
3. **Service pages have no author attribution** -- anonymous company voice
4. **Testimonials only on 2 pages** (About, Solutions) -- component exists but not used on service pages
5. **No Person schema on About page** for founder
6. **Blog posts lack external source links**

---

## Technical AEO -- 21/25

- **Organization schema:** Present (description outdated)
- **Article schema:** 19/19 blog posts
- **Service schema:** 9/9 service pages
- **FAQPage schema:** 11/11 FAQ pages
- **Content prerendered:** Yes (65 routes via Puppeteer)
- **robots.txt:** All major AI bots explicitly allowed
- **Sitemap:** 50+ URLs, hreflang on most pages
- **Alt text:** All images have descriptive alt
- **llms.txt:** Present + llms-full.txt (419 lines)
- **Internal linking:** Strong cross-linking between service pages

### Issues
1. **Organization schema description outdated** -- still references "n8n" and "musicians"
2. **Article schema missing `about`/`mentions` entity arrays**
3. **Blog posts missing hreflang in sitemap**
4. **`/privacy` route missing from prerender and sitemap**
5. **Placeholder phone numbers in location schemas** -- +52-415-100-0000 etc. (obviously fake)
6. **About, Contact, Portfolio pages lack JSON-LD schema**

---

## Off-Page Authority -- 5/25

- **Knowledge base listings:** Only LinkedIn exists
- **Social fortress:** 2 profiles (LinkedIn + Instagram)
- **UGC presence:** None detected
- **Digital PR/citations:** None detected
- **Entity clarity:** 7/10 on-site, weak off-site

### Issues
1. **No Google Business Profile** -- blocked by missing street address + phone
2. **No Crunchbase, Clutch, or directory listings**
3. **Placeholder phone numbers** are a trust/consistency red flag
4. **Only 2 social profiles** -- missing Twitter/X, Facebook, YouTube
5. **No UGC on Reddit/Quora** despite having expert-level blog content
6. **No external citations or press mentions**

---

## Priority Actions (Ordered by Impact)

### Code Fixes (can do now)
1. Add FAQ sections + FAQPage schema to ProfessionalServices, SmallBusiness, Enterprise
2. Add Testimonials component to all 5 service pages
3. Fix Organization schema description in index.html
4. Remove placeholder phone numbers from location page schemas
5. Add FAQPage schema to About and Contact pages
6. Add Person schema to About page
7. Convert key H2 headers to question format across service pages
8. Add source citations to statistics on service pages
9. Add /privacy to prerender routes and sitemap

### Content Actions (manual)
10. Get a real phone number and physical address for GBP
11. Create Google Business Profile
12. Create Crunchbase and Clutch.co profiles
13. Begin Reddit/Quora engagement (5 answers/week)
14. Create Twitter/X and Facebook Business Page
15. Pitch 1 guest post/month (SEJ, Moz, Forbes Mexico)

---

## Quick Wins (< 30 minutes each)
1. Import `<Testimonials />` on all 5 service pages (copy from About.tsx)
2. Update Organization description in index.html line 44
3. Remove fake phone numbers from 4 location page schemas
4. Add `/privacy` to prerender.mjs routes array
5. Add Person schema to About.tsx usePageMeta call
