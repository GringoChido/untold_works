import { useEffect } from 'react';
import { EMAIL, LINKEDIN_URL, SITE_URL } from '../site';
import pageMetadata from '../data/seo.json';

type PageMeta = { title: string; description: string; type: string; image: { src: string; alt: string; width: number; height: number; type: string } };
const metadata = pageMetadata as Record<string, PageMeta>;
const personId = `${SITE_URL}/#joshua-semolik`;
const studioId = `${SITE_URL}/#studio`;
const websiteId = `${SITE_URL}/#website`;

const identity = [
  { '@type': 'Person', '@id': personId, name: 'Joshua Semolik', url: `${SITE_URL}/about`,
    image: `${SITE_URL}/images/about/joshua-thinking-1200.webp`,
    jobTitle: 'Creative Leader & Brand Storyteller', email: EMAIL, telephone: '+1-917-665-1221',
    sameAs: [LINKEDIN_URL], worksFor: { '@id': studioId },
    knowsAbout: ['Creative direction', 'Brand storytelling', 'Sales enablement', 'Brand strategy', 'Retail experiences', 'Commerce', 'Applied artificial intelligence', 'Film production', 'Marketing systems'],
    description: 'I work with teams on brand storytelling, creative direction and digital experiences, using AI from the first idea through launch.' },
  { '@type': 'Organization', '@id': studioId, name: 'Untold.works', url: `${SITE_URL}/`,
    foundingDate: '2017-01', founder: { '@id': personId }, email: EMAIL, telephone: '+1-917-665-1221',
    description: 'Independent creative and AI consulting across brands, commerce, music and entertainment.' },
  { '@type': 'WebSite', '@id': websiteId, name: 'Untold.works', url: `${SITE_URL}/`,
    inLanguage: 'en', publisher: { '@id': studioId }, about: { '@id': personId } },
];

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

export const usePageMeta = ({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const meta = metadata[path];
    const pageTitle = meta?.title ?? title;
    const pageDescription = meta?.description ?? description;
    const image = meta?.image ?? { src: '/images/og.png', alt: 'Untold.works: creative leadership and brand storytelling', width: 1200, height: 630, type: 'image/png' };
    document.title = pageTitle;
    setMeta('name', 'description', pageDescription);
    setMeta('name', 'author', 'Joshua Semolik');
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:locale', 'en_US');
    setMeta('property', 'og:image', SITE_URL + image.src);
    setMeta('property', 'og:image:alt', image.alt);
    setMeta('property', 'og:image:width', String(image.width));
    setMeta('property', 'og:image:height', String(image.height));
    setMeta('property', 'og:image:type', image.type);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDescription);
    setMeta('name', 'twitter:image', SITE_URL + image.src);
    setMeta('name', 'twitter:image:alt', image.alt);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let schema = document.head.querySelector<HTMLScriptElement>('#page-schema');
    if (!schema) {
      schema = document.createElement('script');
      schema.id = 'page-schema';
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }
    const isCase = path.startsWith('/work/') && !['/work/other-projects', '/work/robert-glasper-blue-note', '/work/billiard-factory-and-c-l-bailey'].includes(path);
    const page = { '@type': meta?.type ?? 'WebPage', '@id': `${url}#webpage`, url,
      name: pageTitle, description: pageDescription, inLanguage: 'en',
      isPartOf: { '@id': websiteId }, author: { '@id': personId }, publisher: { '@id': studioId },
      primaryImageOfPage: { '@type': 'ImageObject', url: SITE_URL + image.src, width: image.width, height: image.height, caption: image.alt },
      ...(path === '/about' ? { mainEntity: { '@id': personId } } : {}),
      ...(isCase ? { mainEntity: { '@type': 'CreativeWork', '@id': `${url}#case-study`, name: pageTitle.split(' | ')[0],
        genre: 'Portfolio case study', description: pageDescription, url, author: { '@id': personId } } } : {}),
    };
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': [...identity, page] }).replace(/</g, '\\u003c');
  }, [title, description, path, noindex]);
};
