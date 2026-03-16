# Build SEO & AEO Solution Page + Home Page Intro Block

## Context
Untold.works is a bilingual (EN/ES) AI agency based in San Miguel de Allende, Mexico. We're adding a new standalone service page at `/seo-aeo` for our SEO & AEO (Answer Engine Optimization) offering. This is NOT a 4th solution pillar — it's a standalone root-level page like our location pages (`/san-miguel-de-allende`, `/queretaro`, etc.).

We also need an intro block on the Home page that links to this new page.

## What to Build

### 1. New Page: `pages/SeoAeo.tsx`

**Route:** `/seo-aeo` (root level, not under /solutions/)

**Design Pattern:** Match the existing location pages (e.g., `pages/locations/SanMiguelDeAllende.tsx`) for visual style. Use the same Tailwind classes, section patterns, and component imports.

**Required Imports:**
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
```

**Meta Tags (usePageMeta):**
```tsx
usePageMeta(
  {
    en: 'SEO & AEO Services — Get Ranked and Recommended | Untold.works',
    es: 'Servicios SEO y AEO — Posiciónate y Sé Recomendado | Untold.works'
  },
  {
    en: 'SEO and Answer Engine Optimization (AEO) for businesses in Mexico and the US. Get found on Google and recommended by ChatGPT, Perplexity, and AI search engines. Bilingual SEO, local dominance, and AI discovery.',
    es: 'SEO y Optimización para Motores de Respuesta (AEO) para negocios en México y EE.UU. Aparece en Google y sé recomendado por ChatGPT, Perplexity y buscadores de IA. SEO bilingüe, dominio local y descubrimiento por IA.'
  },
  {
    path: '/seo-aeo',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'SEO & AEO Services — Untold.works',
        description: 'Search Engine Optimization and Answer Engine Optimization for businesses in Mexico and the United States. Bilingual SEO, local search dominance, structured data, and AI engine citation optimization.',
        url: 'https://untold.works/seo-aeo',
        provider: {
          '@type': 'Organization',
          name: 'Untold.works',
          url: 'https://untold.works',
        },
        areaServed: [
          { '@type': 'Country', name: 'Mexico' },
          { '@type': 'Country', name: 'United States' },
        ],
        serviceType: ['SEO', 'AEO', 'Answer Engine Optimization', 'Local SEO', 'Bilingual SEO'],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is AEO (Answer Engine Optimization)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AEO is the practice of optimizing your website and content so AI-powered search engines like ChatGPT, Perplexity, Google AI Overviews, and Claude recommend your business when users ask questions. While SEO gets you ranked in search results, AEO gets you cited and recommended in AI-generated answers. Untold.works is one of the first agencies in Mexico offering AEO as a service.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Qué es la optimización para motores de respuesta (AEO)?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AEO es la práctica de optimizar tu sitio web y contenido para que buscadores de IA como ChatGPT, Perplexity, Google AI Overviews y Claude recomienden tu negocio cuando los usuarios hacen preguntas. Mientras el SEO te posiciona en resultados de búsqueda, AEO hace que te citen y recomienden en respuestas generadas por IA. Untold.works es una de las primeras agencias en México que ofrece AEO como servicio.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much does SEO cost in Mexico?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO Foundation packages start at $1,500 USD for a technical audit, schema markup, sitemap optimization, and Core Web Vitals fixes. Bilingual Local SEO packages start at $2,500 USD and include Google Business Profile optimization, location pages, and keyword targeting in English and Spanish. AEO packages start at $3,000 USD and include llms.txt implementation, FAQ schema, AI crawler configuration, and answer-format content optimization.'
            }
          },
          {
            '@type': 'Question',
            name: '¿Hay agencia de AEO en México?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí. Untold.works es una de las primeras agencias en México que ofrece servicios de AEO (Optimización para Motores de Respuesta). Ayudamos a negocios a ser recomendados por ChatGPT, Perplexity, Google AI Overviews y otros buscadores de IA, además del SEO tradicional. Estamos basados en San Miguel de Allende y servimos clientes en todo México y Estados Unidos.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the difference between SEO and AEO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'SEO optimizes for search engine rankings — appearing on page 1 of Google for specific keywords. AEO optimizes for AI-generated answers — being the business that ChatGPT, Perplexity, or Google AI Overviews recommends when someone asks "who is the best web designer in San Miguel de Allende?" Both are essential in 2026: SEO drives traffic, AEO drives trust and recommendations.'
            }
          },
        ]
      }
    ] as any,
  }
);
```

**Page Sections (in order):**

**A. Hero (black bg, matches location page hero pattern)**
- Breadcrumbs: Home → SEO & AEO
- Orange pulse dot + eyebrow: "SEARCH & DISCOVERY"
- H1 EN: "SEO Got You Ranked. AEO Gets You Recommended."
- H1 ES: "SEO Te Posiciona. AEO Te Recomienda."
- Subtitle (italic, orange left border):
  - EN: "When someone asks ChatGPT who does what you do in your city, does your name come up? We make sure it does."
  - ES: "Cuando alguien le pregunta a ChatGPT quién hace lo que tú haces en tu ciudad, ¿aparece tu nombre? Nos aseguramos de que sí."

**B. The Problem section (white bg)**
- Eyebrow: "THE SHIFT"
- H2 EN: "Google Is Not Enough Anymore"
- H2 ES: "Google Ya No Es Suficiente"
- Two-column layout. Left column: descriptive text explaining that in 2026, people ask AI for recommendations, not just Google. Right column: 3 stat cards:
  - "40%" — EN: "of product searches now start in AI chat" / ES: "de búsquedas de productos empiezan en chat de IA"
  - "0" — EN: "businesses in SMA optimized for AI discovery" / ES: "negocios en SMA optimizados para descubrimiento por IA"
  - "90%" — EN: "of founders said AEO was the biggest revenue opportunity of 2026" / ES: "de fundadores dijeron que AEO fue la mayor oportunidad de ingresos de 2026"

**C. Packages section (beige bg) — 4 packages in a 2x2 grid on desktop, stacked on mobile**

Package 1: SEO Foundation
- EN: "Technical SEO Foundation" / ES: "Fundación SEO Técnica"
- Price: "From $1,500 USD"
- Items: Site speed & Core Web Vitals audit, Schema markup (Organization, LocalBusiness, Service), XML sitemap optimization, Robots.txt & crawl configuration, Mobile-first technical fixes, Meta tags & Open Graph optimization
- Footer: "One-time. Delivered in 1 week."

Package 2: Bilingual Local Dominance
- EN: "Bilingual Local Dominance" / ES: "Dominio Local Bilingüe"
- Price: "From $2,500 USD"
- Items: Google Business Profile setup & optimization, Location landing pages (EN + ES), Bilingual keyword targeting & hreflang, Local schema markup (LocalBusiness, GeoCoordinates), Review strategy & first Google Posts, Competitor keyword gap analysis
- Footer: "One-time + optional monthly. Delivered in 2 weeks."

Package 3: AEO & AI Discovery (highlight this one with an orange left border or different bg to make it stand out as the differentiator)
- EN: "AEO & AI Discovery" / ES: "AEO y Descubrimiento por IA"
- Price: "From $3,000 USD"
- Items: llms.txt implementation & AI crawler access, FAQ schema across key pages, Answer-format content optimization, Structured data for AI citation, AI engine monitoring (ChatGPT, Perplexity, Gemini, Claude), Bilingual AEO content strategy
- Footer: "One-time + optional monthly. Delivered in 2-3 weeks."

Package 4: Ongoing Management
- EN: "Ongoing SEO & AEO Management" / ES: "Gestión Continua de SEO y AEO"
- Price: "From $500/mo USD"
- Items: Monthly performance reporting, Content updates & keyword tracking, Google Business Profile posting, Schema maintenance & new page optimization, AI citation monitoring & optimization, Quarterly strategy review
- Footer: "Monthly retainer. Cancel anytime."

**D. How It Works section (white bg) — 4 steps, same visual pattern as location pages "Why" sections**
1. Audit — We scan your entire site for SEO issues, check your AI discoverability, and benchmark your competitors.
2. Implement — We fix technical issues, add schema markup, optimize for AI engines, and build location-specific content.
3. Monitor — We track your rankings, AI citations, local search presence, and content performance across both languages.
4. Optimize — Monthly improvements based on real data. New content, updated schema, fresh Google Posts, and expanding keyword coverage.

**E. Related Reading section (white bg, matches location page pattern)**
Link to 3 blog posts:
- `/blog/aeo-the-shift-nobodys-talking-about` — "AEO: The Shift Nobody's Talking About"
- `/blog/san-miguel-de-allende-digital-presence-guide-2026` — "SMA Digital Presence Guide 2026"
- `/blog/bilingual-websites-why-translation-plugins-fail` — "Why Translation Plugins Fail"

**F. FAQ section (white bg, visible FAQ matching the schema above)**
Render all 5 FAQ items from the schema as visible content (same pattern as location page FAQs — bordered cards with h3 question, p answer).

**G. QuickLeadForm section (black bg)**
- Pillar: "SEO & AEO"
- Heading EN: "Get a Free SEO & AEO Audit"
- Heading ES: "Obtén una Auditoría SEO y AEO Gratis"
- Subtitle text explaining they'll get a custom report showing their current SEO health + AEO readiness

**H. Final CTA (beige bg, centered, matches location page pattern)**
- H2 EN: "Ready to Get Found?"
- H2 ES: "¿Listo para Ser Encontrado?"
- Link to /contact

### 2. Add Route in App.tsx

Add lazy import:
```tsx
const SeoAeo = lazy(() => import('./pages/SeoAeo'));
```

Add route (place it near the other root-level pages, before /analog):
```tsx
<Route path="/seo-aeo" element={<SeoAeo />} />
```

### 3. Add to Sitemap (`public/sitemap.xml`)

Add before the `<!-- Secondary -->` comment:
```xml
  <url>
    <loc>https://untold.works/seo-aeo</loc>
    <lastmod>2026-03-16</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://untold.works/seo-aeo" />
    <xhtml:link rel="alternate" hreflang="es-MX" href="https://untold.works/seo-aeo?lang=es" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://untold.works/seo-aeo" />
  </url>
```

### 4. Add Intro Block to Home Page (`pages/Home.tsx`)

Insert a new section BETWEEN the end of Section 3 (the 3 ecosystem pillar cards, ends at line 228 `</section>`) and BEFORE Section 4 (Selected Work, starts at line 233).

This should be a compact, visually distinct callout — NOT a full section. Think of it as a bridge. Use a white background to contrast with the beige above and black below.

```tsx
      {/* ═══════════════════════════════════════════════════════════
          SECTION 3b: SEO & AEO CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-10 py-12 sm:py-16 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <Link to="/seo-aeo" className="group grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
                  {t({ en: 'NEW SERVICE', es: 'NUEVO SERVICIO' })}
                </span>
              </div>
              <h3 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors">
                {t({ en: 'SEO Got You Ranked. AEO Gets You Recommended.', es: 'SEO Te Posiciona. AEO Te Recomienda.' })}
              </h3>
              <p className="text-lg font-serif italic text-untold-gray max-w-2xl">
                {t({
                  en: 'Already have a website? Make it findable — on Google AND in AI answers. We optimize for both.',
                  es: '¿Ya tienes sitio web? Haz que te encuentren — en Google Y en respuestas de IA. Optimizamos para ambos.'
                })}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <span className="inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                <span>{t({ en: 'Explore SEO & AEO', es: 'Explorar SEO y AEO' })}</span>
                <span className="text-2xl">→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>
```

### 5. Design System Reference

**Colors (Tailwind custom classes):**
- `bg-untold-beige` — page background
- `bg-untold-black` — dark sections
- `text-untold-black` — primary text
- `text-untold-gray` — secondary text
- `text-untold-orange` — accent, links, CTAs
- `border-untold-border` — section dividers
- `bg-untold-orange` — buttons

**Typography:**
- Sans (headings): `font-sans font-black uppercase tracking-tighter`
- Serif (body): `font-serif italic text-untold-gray`
- Mono (eyebrows/labels): `font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold`

**Common Patterns:**
- Section: `px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border`
- Max width: `max-w-[1440px] mx-auto`
- Orange pulse: `w-3 h-3 rounded-full bg-untold-orange animate-pulse`
- Card: `border border-untold-border bg-white p-6 sm:p-8 hover:border-untold-orange/30 hover:shadow-lg transition-all`
- CTA button: `inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all`

### 6. Verification

After building, verify:
- `npx tsc --noEmit` has no errors on the new files
- The route is accessible at `/seo-aeo`
- All bilingual content uses `t({ en: '...', es: '...' })` pattern
- QuickLeadForm is imported and used with `pillar="SEO & AEO"`
- Breadcrumbs component is used in the hero
- Schema markup is passed to usePageMeta
- Internal links to blog posts use `<Link to="...">` not `<a href="...">`
