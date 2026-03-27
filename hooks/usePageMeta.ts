import { useEffect } from 'react';
import { useLanguage } from '../App';

const BASE_URL = 'https://untold.works';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-image.png`;

type Bilingual = { en: string; es: string };

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string, attrs?: Record<string, string>) {
  const selector = attrs
    ? `link[rel="${rel}"]${Object.entries(attrs).map(([k, v]) => `[${k}="${v}"]`).join('')}`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  (el as HTMLLinkElement).href = href;
}

function setJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  // Remove any existing elements with this id prefix
  document.querySelectorAll(`[id^="${id}"]`).forEach((el) => el.remove());

  const items = Array.isArray(data) ? data : [data];
  items.forEach((item, i) => {
    const el = document.createElement('script');
    el.id = items.length > 1 ? `${id}-${i}` : id;
    el.setAttribute('type', 'application/ld+json');
    el.textContent = JSON.stringify(item);
    document.head.appendChild(el);
  });
}

interface PageMetaOptions {
  path?: string;
  ogType?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

/**
 * Language-aware SEO hook.
 * Accepts bilingual {en, es} objects for title & description.
 * Meta tags, OG, Twitter, hreflang, and JSON-LD all update
 * reactively when the user switches language.
 */
export function usePageMeta(
  title: Bilingual | string,
  description: Bilingual | string,
  options?: PageMetaOptions
) {
  const { lang } = useLanguage();

  // Resolve to the current language
  const resolvedTitle = typeof title === 'string' ? title : title[lang];
  const resolvedDesc = typeof description === 'string' ? description : description[lang];

  useEffect(() => {
    const path = options?.path || window.location.pathname;
    const url = `${BASE_URL}${path}`;
    const ogImage = options?.ogImage || DEFAULT_OG_IMAGE;
    const ogType = options?.ogType || 'website';

    // ── Title ──
    document.title = resolvedTitle;

    // ── HTML lang attribute ──
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en';

    // ── Basic meta ──
    setMetaTag('name', 'description', resolvedDesc);

    // ── Content language meta ──
    setMetaTag('http-equiv', 'content-language', lang === 'es' ? 'es-MX' : 'en');

    // ── Canonical — always points to the language-neutral (English) URL ──
    const canonicalUrl = url;
    setLinkTag('canonical', canonicalUrl);

    // ── Hreflang — es-MX for Mexico, en for English, x-default fallback ──
    setLinkTag('alternate', url, { hreflang: 'en' });
    setLinkTag('alternate', `${url}${url.includes('?') ? '&' : '?'}lang=es`, { hreflang: 'es-MX' });
    setLinkTag('alternate', url, { hreflang: 'x-default' });

    // ── Open Graph ──
    setMetaTag('property', 'og:title', resolvedTitle);
    setMetaTag('property', 'og:description', resolvedDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Untold.works');
    setMetaTag('property', 'og:locale', lang === 'es' ? 'es_MX' : 'en_US');
    setMetaTag('property', 'og:locale:alternate', lang === 'es' ? 'en_US' : 'es_MX');

    // ── Twitter Card ──
    setMetaTag('name', 'twitter:title', resolvedTitle);
    setMetaTag('name', 'twitter:description', resolvedDesc);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@untoldworks');
    setMetaTag('name', 'twitter:creator', '@untoldworks');

    // ── Robots ──
    if (options?.noindex) {
      setMetaTag('name', 'robots', 'noindex, nofollow');
    }

    // ── JSON-LD Page Schema ──
    if (options?.schema) {
      setJsonLd('page-schema', options.schema);
    }

    // ── BreadcrumbList schema ──
    const breadcrumbs = buildBreadcrumbs(path, resolvedTitle, lang);
    if (breadcrumbs.length > 1) {
      setJsonLd('breadcrumb-schema', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: bc.name,
          item: bc.url,
        })),
      });
    }
  }, [resolvedTitle, resolvedDesc, lang, options?.path, options?.ogType, options?.ogImage, options?.schema, options?.noindex]);
}

function buildBreadcrumbs(
  path: string,
  pageTitle: string,
  lang: 'en' | 'es'
): { name: string; url: string }[] {
  const crumbs: { name: string; url: string }[] = [
    { name: lang === 'es' ? 'Inicio' : 'Home', url: BASE_URL },
  ];

  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return crumbs;

  const labelMap: Record<string, { en: string; es: string }> = {
    solutions: { en: 'Solutions', es: 'Soluciones' },
    portfolio: { en: 'Portfolio', es: 'Portafolio' },
    blog: { en: 'Blog', es: 'Blog' },
    about: { en: 'About', es: 'Nosotros' },
    contact: { en: 'Contact', es: 'Contacto' },
    workshops: { en: 'Workshops', es: 'Talleres' },
    'professional-services': { en: 'Professional Services', es: 'Servicios Profesionales' },
    'small-business': { en: 'Small Business', es: 'Pequeños Negocios' },
    enterprise: { en: 'Enterprise', es: 'Empresarial' },
    'seo-aeo': { en: 'SEO & AEO', es: 'SEO y AEO' },
    'social-media': { en: 'Social Media', es: 'Redes Sociales' },
    ads: { en: 'Ads', es: 'Publicidad' },
    dashboard: { en: 'Dashboard', es: 'Dashboard' },
    websites: { en: 'Website Design', es: 'Diseño Web' },
    copywriting: { en: 'Copywriting', es: 'Redacción de Textos' },
    'ai-content': { en: 'AI Content', es: 'Contenido IA' },
    'sales-enablement': { en: 'Sales Enablement', es: 'Habilitación de Ventas' },
    'mobile-apps': { en: 'Mobile Apps', es: 'Apps Móviles' },
    hosting: { en: 'Hosting', es: 'Hosting' },
    'review-reputation': { en: 'Review & Reputation', es: 'Reseñas y Reputación' },
    'network-systems': { en: 'Network Systems', es: 'Network Systems' },
    'digital-presence': { en: 'Digital Presence', es: 'Presencia Digital' },
    'business-operations': { en: 'Business Operations', es: 'Operaciones de Negocio' },
    infrastructure: { en: 'Infrastructure', es: 'Infraestructura' },
  };

  let accumulated = '';
  for (let i = 0; i < segments.length; i++) {
    accumulated += `/${segments[i]}`;
    const isLast = i === segments.length - 1;
    const label = labelMap[segments[i]];
    crumbs.push({
      name: isLast ? pageTitle.split(' — ')[0] : (label ? label[lang] : segments[i]),
      url: `${BASE_URL}${accumulated}`,
    });
  }

  return crumbs;
}
