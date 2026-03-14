# AEO Audit Report: Untold.works

**Date**: 2026-03-14
**Domain**: untold.works
**Stack**: Vite + React SPA, Puppeteer prerendering, Tailwind CSS, Netlify

---

## AEO Readiness Score: 42/100 (Grade: D)

| Category | Score | Grade |
|----------|-------|-------|
| Content & Citability | 8/25 | F |
| E-E-A-T Signals | 8/25 | F |
| Technical AEO | 21/25 | A |
| Off-Page Authority | 5/25 | F |

**Summary**: Strong technical foundation — prerendering, schema markup, robots.txt, llms.txt, and sitemap are all solid. But the content layer and authority signals are severely underoptimized for AI citation. No question-format headers, no visible FAQ sections, no real author attribution, no testimonials, and minimal off-page presence.

---

## Content & Citability — 8/25

**Pages audited**: 12
**Highly citable**: 0 | **Moderately citable**: 4 | **Not citable**: 8

| Metric | Result |
|--------|--------|
| Pages using question headers | 0/12 |
| Pages with FAQ sections | 0/12 (Home has schema-only FAQ, not visible) |
| Pages with comparison tables | 0/12 |
| Pages addressing objections | 1/12 |

### Issues

1. **Zero question-format headers** — Every H1/H2/H3 across all 12 pages is a declarative statement or keyword phrase. AI engines strongly prefer content structured around natural questions.
   - `pages/Home.tsx:82` — H1: "AI-Powered Business Ecosystems." → Should be: "What Does Untold.works Build?"
   - `pages/About.tsx:32` — Declarative headline → "Who Is Behind Untold.works?"
   - `pages/Portfolio.tsx:41` — "Systems We've Built." → "What Has Untold.works Built?"
   - `pages/solutions/ProfessionalServices.tsx` — All declarative → "Who Is This Built For?"
   - `pages/ProjectDetail.tsx:200,206,212` — Machine-style labels (`SYSTEM_CHALLENGE`) → "What Was the Challenge?"

2. **No visible FAQ sections** — `pages/Home.tsx:8-53` has FAQ JSON-LD schema with 5 good questions, but they are NOT rendered on the page. No other page has any FAQ.
   - Fix: Render the existing Home FAQ as visible HTML. Add FAQ sections to Solutions, About, Workshops, and Contact pages.

3. **No comparison tables** — The Solutions page and 3 sub-pages present tiers side-by-side but without a structured comparison table.
   - Fix: Add a comparison table on `pages/Solutions.tsx` with rows for features, audience, timeline, and deliverables.

4. **Objection handling nearly absent** — Only `pages/solutions/ProfessionalServices.tsx:305` has "No lock-in. No monthly fees..." buried in the CTA.
   - Fix: Add "Is this right for my business?" sections to solution pages. Address: "Do I need to be technical?", "Can a Mexico-based agency serve US clients?"

5. **Blog posts lack FAQ sections** — Blog content in `data/blogPosts.ts` is the most citable content but has no FAQ or key-takeaway sections.
   - Fix: Add a "Frequently Asked Questions" section and a key-takeaway summary to each blog post.

### Page Scores

| Page | Score | Key Gap |
|------|-------|---------|
| Home | 10/25 | FAQ hidden in schema, no question headers |
| About | 5/25 | Narrative only, no lists/tables/FAQ |
| Contact | 3/25 | Purely functional, no informational content |
| Portfolio | 5/25 | No intro content, no FAQ |
| ProjectDetail | 7/25 | Good structure but machine-style labels |
| Blog | 5/25 | Listing page, no intro content |
| BlogPost | 12/25 | Best content, but no FAQ sections |
| Workshops | 7/25 | No FAQ, no "who is this for?" |
| Solutions | 10/25 | Has one question header, but no comparison table |
| ProfessionalServices | 11/25 | Good structure, but no FAQ or question headers |
| SmallBusiness | 10/25 | Same pattern as ProfessionalServices |
| Enterprise | 9/25 | Same pattern, less semantic richness |

---

## E-E-A-T Signals — 8/25

| Signal | Score | Status |
|--------|-------|--------|
| Real author with credentials | 1/5 | 17/18 posts authored by "Untold.works" (company name). 1 post by Joshua Semolik but no bio/credentials anywhere. |
| Expert commentary/quotes | 0/4 | Zero named expert quotes on any page. |
| Statistics with sources | 1/4 | One vague citation ("Google has published research..."). All other stats uncited. |
| Case studies/testimonials | 3/4 | 5 named portfolio case studies (strong). 3 anonymous blog case studies. Zero client testimonials. |
| Multiple perspectives | 1/3 | Minor balance in AI content strategy post. No opposing viewpoints elsewhere. |
| Objection handling | 1/3 | Surface-level in 2 blog posts only. |
| FAQ with expert answers | 1/2 | Homepage FAQ exists but schema-only. |

### Priority Issues

1. **No real author attribution** — `data/blogPosts.ts:14,66,106,...` — All posts use `author: 'Untold.works'`. `pages/BlogPost.tsx:35` hardcodes Organization schema for author. `pages/BlogPost.tsx:90` renders author as tiny gray text with no link.
   - Fix: Create an author byline component with Joshua Semolik's name, photo, title ("Founder"), MIT Sloan credential, and LinkedIn link. Update Article schema to use `@type: Person`.

2. **Zero client testimonials** — No quotes from named clients appear anywhere on the site.
   - Fix: Add 3-5 named client testimonials to the homepage and/or solution pages.

3. **Uncited statistics** — `data/blogPosts.ts:35` ("80% of questions are repetitive"), `blogPosts.ts:131` ("cuts production time by 60%"), `blogPosts.ts:391` ("70% of local competitors") — all without sources.
   - Fix: Add specific source citations with links for all statistics.

4. **No privacy policy** — No privacy policy or terms of service page exists. Basic trust infrastructure.
   - Fix: Add a privacy policy page linked from the footer.

5. **Missing social links** — No social media links visible on any page (only in schema `sameAs`).
   - Fix: Add LinkedIn and Instagram links to the footer.

---

## Technical AEO — 21/25

| Check | Score | Status |
|-------|-------|--------|
| Organization schema | 3/4 | Present and detailed, but missing `@id` for entity linking |
| Article schema | 2/4 | Present on blog posts, but author is Organization (not Person), missing `dateModified` and `about`/`mentions` |
| FAQ schema | 2/2 | Present on homepage with 5 conversational questions |
| robots.txt | 4/4 | All AI bots explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, etc.) |
| Sitemap | 2/3 | Complete with hreflang, but unconfirmed GSC/Bing submission |
| HTML content rendering | 3/3 | Full Puppeteer prerendering of 35+ routes |
| Alt text | 2/2 | All images have alt attributes |
| Site architecture | 2/2 | Logical hierarchy, breadcrumbs, internal linking |
| llms.txt | 1/1 | Present and comprehensive |

### Priority Fixes

1. **[High] Article schema author** — `pages/BlogPost.tsx:35` — Change `{ "@type": "Organization" }` to `{ "@type": "Person", "name": "Joshua Semolik", "jobTitle": "Founder, Untold.works" }`.

2. **[High] Add `@id` to Organization schema** — `index.html:38` — Add `"@id": "https://untold.works/#organization"`. Reference in Article publisher.

3. **[Medium] Add `dateModified` to Article schema** — `pages/BlogPost.tsx:41` — Add `dateModified` field. AI engines use this for freshness.

4. **[Medium] Add `about`/`mentions` to Article schema** — `pages/BlogPost.tsx:27-44` — Add topic entities for content categorization.

5. **[Low] Add Solutions links to Footer** — `components/Footer.tsx` — Currently missing Professional Services, Small Business, Enterprise links.

6. **[Low] llms.txt consistency** — `public/llms.txt` mentions "Mexico City" but Organization schema only lists San Miguel de Allende.

---

## Off-Page Authority — 5/25

| Criteria | Score | Status |
|----------|-------|--------|
| Knowledge base listings | 1/6 | Only LinkedIn company page confirmed. No Google Business Profile, Crunchbase, Clutch, or Yelp. |
| Listing consistency | 1/3 | Schema `sameAs` exists for 2 profiles. Too few listings. |
| Social fortress | 2/4 | LinkedIn + Instagram active. Missing Twitter/X, Facebook, YouTube. |
| UGC presence | 0/4 | No Reddit, Quora, or forum presence for brand or founder. |
| Digital PR/citations | 0/5 | No external authority citations, guest posts, podcast appearances, or press mentions. |
| Citable content assets | 1/3 | Blog exists but no original research or data-driven reports. |

### 30-Day Action Plan

**Week 1:**
- Create Google Business Profile (highest single-impact item)
- Create Crunchbase and Clutch.co profiles
- Create Twitter/X and Facebook Business Page
- Sign up for HARO/Connectively as expert source

**Week 2:**
- Request reviews from 3 past clients on Clutch
- Create Quora profile for Joshua Semolik; answer 5 high-relevance questions
- Update `sameAs` schema in `index.html` with all new profiles
- Begin helpful commenting on r/webdev, r/smallbusiness, r/n8n

**Week 3:**
- Submit to DesignRush, Apple Maps, Yelp
- Begin "State of Digital Presence in SMA" research for data-driven report
- Pitch 2 podcast appearances

**Week 4:**
- Publish first data-driven blog post with original research
- Submit first guest post pitch (Smashing Magazine or Search Engine Journal)
- Create YouTube channel with first project walkthrough
- Audit NAP consistency across all listings

### Digital PR Angles
- "State of Digital Presence for Businesses in San Miguel de Allende (2026)"
- "Bilingual Website Performance Benchmarks: Mexico-US Corridor"
- "AI Automation ROI for Small Businesses: What Actually Works in 2026"
- Expert commentary: AI adoption in Latin American SMBs, bilingual digital marketing, SMA as tech hub

---

## Priority Actions (Ordered by Impact)

### High Impact — Content & E-E-A-T (potential +20 points)

1. **Rewrite headers as questions across all pages** — Change every H1/H2 from declarative to conversational question format. This is the single highest-impact AEO change. Affects all 12 pages.

2. **Add visible FAQ sections to 8 pages** — Home (render existing schema), About, Contact, Solutions, ProfessionalServices, SmallBusiness, Enterprise, Workshops. 5-7 questions each with expert answers.

3. **Create author byline component** — Name, photo, title, credentials, LinkedIn. Update all blog posts from "Untold.works" to "Joshua Semolik". Fix Article schema to use Person type.

4. **Add client testimonials** — 3-5 named client quotes on homepage and/or solution pages. Include name, title, company.

5. **Add comparison table to Solutions page** — Professional Services vs Small Business vs Enterprise with feature rows.

### Medium Impact — Technical & Trust (potential +5 points)

6. **Fix Organization schema `@id`** — `index.html:38` — enables proper entity linking across all pages.

7. **Add `dateModified` to Article schema** — `pages/BlogPost.tsx:41` — freshness signal for AI engines.

8. **Add privacy policy page** — Basic trust infrastructure. Link from footer.

9. **Add social media links to footer** — Currently only in schema `sameAs`, not visible.

10. **Cite statistics with sources** — Add source links to all stats in blog posts.

### High Impact — Off-Page (potential +15 points, requires external work)

11. **Create Google Business Profile** — Biggest single off-page action.

12. **Create Clutch.co profile with client reviews** — Primary source LLMs use for agency recommendations.

13. **Start Reddit/Quora presence** — 2-3 helpful replies per week on relevant subreddits.

14. **Publish first data-driven report** — Original research creates a citable asset.

15. **Expand social fortress** — Twitter/X, Facebook, YouTube. Update `sameAs` schema.

---

## Quick Wins (< 30 minutes each)

1. **Render Home FAQ as visible HTML** — The JSON-LD is already written (`pages/Home.tsx:8-53`). Just render the same 5 Q&As as an HTML section at the bottom of the page.

2. **Fix Article schema author to Person** — `pages/BlogPost.tsx:35` — One-line change from Organization to Person.

3. **Add `@id` to Organization schema** — `index.html:38` — One line addition.

4. **Add `dateModified` to Article schema** — `pages/BlogPost.tsx:41` — Small addition.

5. **Update blog post authors** — `data/blogPosts.ts` — Find/replace `author: 'Untold.works'` with `author: 'Joshua Semolik'`.

6. **Add social links to Footer** — `components/Footer.tsx` — Add LinkedIn and Instagram icons/links.

7. **Add Solutions links to Footer** — `components/Footer.tsx` — Add the 3 solution page links.

8. **Fix llms.txt consistency** — `public/llms.txt` — Align location references with schema.
