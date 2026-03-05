import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import { blogPosts } from '../data/blogPosts';
import { BlogCategory } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsletterForm from '../components/NewsletterForm';

const categories: { key: BlogCategory | 'all'; label: { en: string; es: string } }[] = [
  { key: 'all', label: { en: 'All', es: 'Todos' } },
  { key: 'ai-education', label: { en: 'AI Education', es: 'Educaci\u00f3n IA' } },
  { key: 'website-ecosystem', label: { en: 'Website + AI', es: 'Web + IA' } },
  { key: 'mobile-first', label: { en: 'Mobile-First', es: 'Mobile-First' } },
  { key: 'san-miguel', label: { en: 'San Miguel', es: 'San Miguel' } },
  { key: 'case-studies', label: { en: 'Case Studies', es: 'Casos de Estudio' } },
  { key: 'industry-guides', label: { en: 'Industry Guides', es: 'Gu\u00edas por Industria' } },
  { key: 'build-notes', label: { en: 'Build Notes', es: 'Notas de Construcci\u00f3n' } },
];

const categoryMeta: Record<BlogCategory, { title: { en: string; es: string }; description: { en: string; es: string } }> = {
  'ai-education': {
    title: { en: 'AI Education Articles | ChatGPT, Automation & AI Tools — Untold.works', es: 'Artículos de Educación IA | ChatGPT, Automatización y Herramientas IA — Untold.works' },
    description: { en: 'Learn how to use ChatGPT, AI automation tools, and practical AI workflows for your business. Guides for small businesses and professional services.', es: 'Aprende a usar ChatGPT, herramientas de automatización IA y flujos de trabajo prácticos de IA para tu negocio.' },
  },
  'website-ecosystem': {
    title: { en: 'Website & AI Strategy Articles | Headless CMS, Bilingual Sites — Untold.works', es: 'Artículos de Estrategia Web e IA | CMS Headless, Sitios Bilingües — Untold.works' },
    description: { en: 'Modern website architecture, headless CMS, bilingual website strategy, and AI-powered web ecosystems for businesses in the US and Mexico.', es: 'Arquitectura web moderna, CMS headless, estrategia de sitios bilingües y ecosistemas web con IA para negocios en EE.UU. y México.' },
  },
  'mobile-first': {
    title: { en: 'Mobile-First Business Guides | Page Speed & 3G Performance — Untold.works', es: 'Guías Mobile-First para Negocios | Velocidad y Rendimiento 3G — Untold.works' },
    description: { en: 'Mobile-first website optimization, page speed on slow connections, and running your business from your phone. Practical guides for Mexico and LATAM markets.', es: 'Optimización mobile-first de sitios web, velocidad de carga en conexiones lentas y cómo manejar tu negocio desde tu teléfono.' },
  },
  'san-miguel': {
    title: { en: 'San Miguel de Allende Business Guides | Digital Presence & Tourism — Untold.works', es: 'Guías de Negocios en San Miguel de Allende | Presencia Digital y Turismo — Untold.works' },
    description: { en: 'Digital marketing and online presence guides for businesses in San Miguel de Allende. Capture tourist traffic, build local SEO, and grow your SMA business.', es: 'Guías de marketing digital y presencia en línea para negocios en San Miguel de Allende. Captura tráfico turístico y crece tu negocio.' },
  },
  'case-studies': {
    title: { en: 'AI & Automation Case Studies | Real Business Results — Untold.works', es: 'Casos de Estudio de IA y Automatización | Resultados Reales — Untold.works' },
    description: { en: 'Real case studies of AI automation, website rebuilds, and digital transformation for hotels, law firms, ecommerce brands, and professional services.', es: 'Casos de estudio reales de automatización IA, reconstrucción de sitios web y transformación digital para hoteles, despachos y marcas.' },
  },
  'industry-guides': {
    title: { en: 'Industry-Specific Digital Guides | Professional Services & Retail — Untold.works', es: 'Guías Digitales por Industria | Servicios Profesionales y Retail — Untold.works' },
    description: { en: 'Industry-specific digital playbooks for professional services, retail, and hospitality. Website architecture, lead generation, and AI automation strategies.', es: 'Guías digitales por industria para servicios profesionales, retail y hospitalidad. Arquitectura web, generación de leads y automatización IA.' },
  },
  'build-notes': {
    title: { en: 'Build Notes | Behind the Scenes at Untold.works', es: 'Notas de Construcción | Detrás de Cámaras en Untold.works' },
    description: { en: 'Behind-the-scenes build notes from Untold.works. How we build AI-powered websites and automation systems for real businesses.', es: 'Notas de construcción detrás de cámaras de Untold.works. Cómo construimos sitios web y sistemas de automatización con IA.' },
  },
};

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const { category: urlCategory } = useParams<{ category?: string }>();
  const validCategory = urlCategory && categories.some(c => c.key === urlCategory) ? urlCategory as BlogCategory : undefined;
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>(validCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const meta = validCategory && categoryMeta[validCategory]
    ? categoryMeta[validCategory]
    : { title: i18n.seo.blog.title, description: i18n.seo.blog.description };

  usePageMeta(meta.title, meta.description, {
    path: validCategory ? `/blog/category/${validCategory}` : '/blog',
  });

  const filtered = useMemo(() => {
    let posts = activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.en.toLowerCase().includes(q) ||
          p.title.es.toLowerCase().includes(q) ||
          p.excerpt.en.toLowerCase().includes(q) ||
          p.excerpt.es.toLowerCase().includes(q)
      );
    }

    return posts.sort((a, b) => b.date.localeCompare(a.date));
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-untold-beige min-h-screen font-serif text-untold-black">
      {/* Hero */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={
                validCategory
                  ? [
                      { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                      { label: { en: 'Blog', es: 'Blog' }, path: '/blog' },
                      { label: categories.find(c => c.key === validCategory)?.label || { en: validCategory, es: validCategory } },
                    ]
                  : [
                      { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                      { label: { en: 'Blog', es: 'Blog' } },
                    ]
              }
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'BLOG', es: 'BLOG' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(3rem,8vw,120px)] leading-[0.8] mb-8 tracking-tighter uppercase">
            {t(i18n.blogPage.headline)}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight">
            {t(i18n.blogPage.subheadline)}
          </p>
        </div>
      </section>

      {/* Filters + Search */}
      <section className="px-5 sm:px-10 py-6 border-b border-untold-border bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                to={cat.key === 'all' ? '/blog' : `/blog/category/${cat.key}`}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] font-bold transition-all border ${
                  activeCategory === cat.key
                    ? 'bg-untold-black text-white border-untold-black'
                    : 'border-untold-border text-untold-gray hover:text-untold-black hover:border-untold-black'
                }`}
              >
                {t(cat.label)}
              </Link>
            ))}
          </div>
          <input
            type="text"
            placeholder={t(i18n.blogPage.searchPlaceholder)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-b-2 border-untold-border py-2 px-1 text-sm font-serif outline-none focus:border-untold-orange transition-all w-full sm:w-64"
          />
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-xl font-serif italic text-untold-gray py-20">
              {t({ en: 'No posts found.', es: 'No se encontraron art\u00edculos.' })}
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group border border-untold-border bg-white hover:shadow-lg hover:border-untold-orange/20 transition-all flex flex-col"
                >
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                        {post.category.replace(/-/g, ' ')}
                      </span>
                      <span className="font-mono text-[9px] text-untold-gray/40">{post.date}</span>
                    </div>
                    <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-4 group-hover:text-untold-orange transition-colors leading-tight">
                      {t(post.title)}
                    </h3>
                    <p className="font-serif italic text-untold-gray text-base leading-relaxed mb-6 flex-grow">
                      {t(post.excerpt)}
                    </p>
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                      {t(i18n.blogPage.readMore)} &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter + CTA */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6">
              {t(i18n.blogPage.newsletterHeadline)}
            </h3>
            <p className="font-serif italic text-white/50 text-lg mb-8">
              {t(i18n.blogPage.newsletterSubheadline)}
            </p>
            <NewsletterForm />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6">
              {t(i18n.blogPage.ctaHeadline)}
            </h3>
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-white px-10 py-5 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all w-fit"
            >
              {t(i18n.blogPage.ctaCta)}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
