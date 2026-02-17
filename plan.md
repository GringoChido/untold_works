# Untold.works V2 — Implementation Plan

## Overview
Complete rebuild of untold.works as a 3-pillar client acquisition platform with bilingual support, AI chat widget, lead capture, 12 case studies, and full SEO.

**New project location:** `/Users/joshuasemolik/Desktop/untold-works-v2/`
**Existing site:** Untouched. Zero changes.

---

## Phase 1: Project Setup & Foundation
> Estimated: ~1 session

### 1.1 Scaffold the project
- Create `/Users/joshuasemolik/Desktop/untold-works-v2/`
- Initialize Vite + React 19 + TypeScript
- Install dependencies: react-router-dom, framer-motion, lucide-react
- Install dev deps: tailwindcss, postcss, autoprefixer
- Configure Tailwind with custom colors (untold-beige, untold-orange, etc.) and fonts (Inter, Libre Caslon Text, IBM Plex Mono, Share Tech Mono)
- Set up Google Fonts in index.html
- Create globals.css with Tailwind directives + custom CSS variables
- Configure vite.config.ts, tsconfig.json, netlify.toml

### 1.2 Core architecture
- Set up TypeScript types (`src/types/index.ts`) — all interfaces from the spec (CaseStudy, BilingualContent, Language, etc.)
- Build i18n system (`src/utils/i18n.ts` + `src/hooks/useLanguage.ts`) — LanguageContext, `t()` helper, localStorage persistence, URL param support
- Set up React Router with all routes: `/`, `/solutions/solo`, `/solutions/small-business`, `/solutions/enterprise`, `/portfolio`, `/portfolio/:id`, `/about`, `/contact`, `/blog`
- Build App.tsx with layout wrapper (Navbar + Footer on all pages)
- Build `useScrollToTop` hook

### 1.3 Layout components
- **Navbar.tsx** — mobile hamburger, logo, nav links, language toggle (flag icons), orange CTA button
- **Footer.tsx** — SEO-rich footer with links, location, contact, bilingual
- **LanguageToggle.tsx** — EN/ES switcher with flag icons

### 1.4 Shared components
- **CTAButton.tsx** — orange button, consistent styling, multiple variants
- **BilingualBadge.tsx** — EN/ES indicator
- **TechBadge.tsx** — technology tag pills
- **StatsCounter.tsx** — animated number counter (Framer Motion)
- **TestimonialCard.tsx** — client quote card
- **VideoPlayer.tsx** — responsive video embed

---

## Phase 2: Homepage
> Estimated: ~1 session

### 2.1 Homepage sections (in order)
- **Hero.tsx** — main headline + universal message + CTA (bilingual)
- **PillarSelector.tsx** — 3 interactive cards (Solo / Small Business / Enterprise) linking to pillar pages
- **WhatWeBuild.tsx** — 6 ecosystem items with icons (marketing, websites, apps, automation, CRM, training)
- **ProcessDiagram.tsx** — 4-stage visual (Strategy → Scaffolding → Build → Deploy)
- **StatsBar.tsx** — 4 key metrics with animated counters
- **FeaturedCaseStudies.tsx** — 3 highlighted case study cards
- **CTASection.tsx** — book-a-call CTA with bilingual copy

### 2.2 Homepage content
- All bilingual copy for every section (EN + ES) in the i18n data file
- SEO meta tags via MetaTags component

---

## Phase 3: Pillar Pages (Solo, Small Business, Enterprise)
> Estimated: ~1 session

### 3.1 Shared pillar components
- **PillarHero.tsx** — dynamic hero based on pillar type
- **WhoThisIsFor.tsx** — industry examples grid
- **WhatYouGet.tsx** — deliverables checklist
- **PricingCard.tsx** — investment range + timeline
- **ProcessApplied.tsx** — 4 stages customized per pillar
- **CaseStudyCarousel.tsx** — horizontal scroll of related case studies
- FAQ section with expandable accordions

### 3.2 Three pages using shared components
- **Solo.tsx** (`/solutions/solo`) — $5K-$8K, 2-3 weeks, solo entrepreneurs
- **SmallBusiness.tsx** (`/solutions/small-business`) — $15K-$30K, 4-8 weeks
- **Enterprise.tsx** (`/solutions/enterprise`) — $30K-$100K+, 8-16 weeks

### 3.3 Pillar content
- All bilingual content for each pillar page
- 10+ FAQs per pillar (bilingual)
- Industry-specific examples and use cases

---

## Phase 4: Data & Case Studies
> Estimated: ~1 session

### 4.1 Data files
- **caseStudies.ts** — all 12 case studies with full structure (client info, challenge, solution 4-stages, results metrics, testimonials, tags) — all bilingual
- **testimonials.ts** — client quotes
- **services.ts** — service offerings data
- **faqs.ts** — 20+ FAQs bilingual
- **seoKeywords.ts** — target keywords by pillar

### 4.2 Portfolio page
- **Portfolio.tsx** — filterable grid (by pillar, by industry)
- **FilterBar.tsx** — pillar/industry filter chips
- **CaseStudyCard.tsx** — preview card with metrics highlight
- **ResultsMetrics.tsx** — before/after comparison display

### 4.3 Case study detail page
- **CaseStudyFull.tsx** — full page for individual case study (`/portfolio/:id`)
- 4-stage solution breakdown
- Results metrics with visual comparison
- Testimonial section
- Related case studies

---

## Phase 5: About & Contact Pages
> Estimated: ~1 session

### 5.1 About page
- Joshua's story (200-300 words, bilingual)
- Build + Teach philosophy
- Tech stack visual
- Location info (San Miguel + serving US/MX)
- Expertise and process

### 5.2 Contact page
- **ContactForm.tsx** — general contact form (name, email, phone, company, message, pillar selector, language)
- **ConsultationForm.tsx** — strategy call booking form
- Netlify Forms integration (hidden form in index.html for detection)
- Form validation
- Success/error states (bilingual)
- All submissions → joshua@untold.works

---

## Phase 6: SEO & Analytics
> Estimated: ~1 session

### 6.1 SEO components
- **MetaTags.tsx** — dynamic title, description, keywords, canonical, OG tags, Twitter cards
- **StructuredData.tsx** — Organization, Service, FAQPage schemas
- **LocalBusinessSchema.tsx** — San Miguel geo data
- Hreflang tags for EN/ES on every page
- robots.txt + sitemap.xml generation

### 6.2 Analytics
- **analytics.ts** — GA4 event tracking utility
- **useAnalytics.ts** — hook for tracking page views and events
- Track: pillar clicks, CTA clicks, form submissions, language switches, scroll depth, chat interactions
- GTM-ready data layer setup
- Facebook Pixel placeholder

---

## Phase 7: AI Chat Widget (OpenAI)
> Estimated: ~1 session

### 7.1 Chat widget UI
- **WebChatBot.tsx** — floating bottom-right widget
- Collapsed: 60px orange circle with chat icon
- Expanded: 380×600px on desktop, full-screen on mobile
- Black header, beige message area, orange user bubbles, white bot bubbles
- Quick-reply buttons, typing indicator
- Language auto-detection + mid-conversation switching

### 7.2 Chat backend
- OpenAI API integration (GPT-4o-mini for cost efficiency)
- System prompt with full company knowledge (services, pricing, process, case studies)
- Bilingual responses (detect language, respond in kind)
- Lead capture within chat flow (name, email, interest)
- Pre-programmed quick replies for common paths

### 7.3 Chat features
- Appears after 10 seconds on page
- Unread indicator
- Typing animation
- Quick reply buttons (See case study / Learn pricing / Book call)
- Minimizable

---

## Phase 8: Blog Structure
> Estimated: ~0.5 session

- **BlogIndex.tsx** — blog listing page with cards
- **BlogPost.tsx** — individual post layout
- **blogPosts.ts** — data file with 3-5 initial placeholder posts
- Bilingual blog post structure
- SEO meta for each post

---

## Phase 9: Mobile Optimization & Polish
> Estimated: ~1 session

- Mobile-first responsive pass on every component
- 44px minimum touch targets
- Sticky mobile CTA button (bottom of screen)
- Swipe-friendly carousels (case studies, testimonials)
- Image optimization (lazy loading, proper sizing)
- Code splitting with React.lazy for route-based chunks
- Preload critical fonts and assets
- Test all breakpoints (375px, 768px, 1024px, 1440px)

---

## Phase 10: Final Testing & Deploy Config
> Estimated: ~0.5 session

- netlify.toml with build command, redirects, security headers, cache rules
- Verify all forms submit correctly
- Verify all routes work (no 404s)
- Verify language toggle on all pages
- Verify meta tags render correctly
- Run build and verify no TypeScript errors
- Performance check

---

## Key Technical Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Location | Desktop | User preference |
| Chat AI | OpenAI (GPT-4o-mini) | User preference, cost-effective |
| Forms | Netlify Forms | Free tier, built-in email notifications |
| i18n approach | React Context + t() helper | Matches existing site pattern, simple |
| Styling | Tailwind CSS | Matches existing site, utility-first |
| Animation | Framer Motion | Already in stack, smooth animations |
| Routing | React Router v7 | Already in stack |
| Fonts | Google Fonts (Inter, Libre Caslon Text, IBM Plex Mono, Share Tech Mono) | From spec |
| Images | Placeholder/Unsplash initially | Real images added later |

---

## What I'll Build First (Phase 1 + 2)
On approval, I'll immediately:
1. Create the project at `~/Desktop/untold-works-v2/`
2. Install all dependencies
3. Set up Tailwind, routing, i18n, types
4. Build Navbar, Footer, shared components
5. Build the complete Homepage with all sections
6. All bilingual content wired up

You'll have a working site you can view in browser after Phase 1+2.
