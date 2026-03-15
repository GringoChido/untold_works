import React, { useState, useMemo } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import { blogPosts } from '../data/blogPosts';
import { BlogCategory } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';
import NewsletterForm from '../components/NewsletterForm';

const categories: { key: BlogCategory | 'all'; label: { en: string; es: string } }[] = [
  { key: 'all', label: { en: 'All', es: 'Todos' } },
  { key: 'build-notes', label: { en: 'Build Notes', es: 'Notas de Construccion' } },
  { key: 'aeo-search', label: { en: 'AEO & Search', es: 'AEO y Busqueda' } },
  { key: 'ai-for-business', label: { en: 'AI for Business', es: 'IA para Negocios' } },
  { key: 'creative-technology', label: { en: 'Creative Technology', es: 'Tecnologia Creativa' } },
  { key: 'case-studies', label: { en: 'Case Studies & Guides', es: 'Casos de Estudio y Guias' } },
];

const categoryMeta: Record<BlogCategory, { title: { en: string; es: string }; description: { en: string; es: string } }> = {
  'build-notes': {
    title: { en: 'Build Notes | Behind the Scenes at Untold.works', es: 'Notas de Construccion | Detras de Camaras en Untold.works' },
    description: { en: 'Behind-the-scenes build notes from Untold.works. How we build AI-powered websites and automation systems for real businesses.', es: 'Notas de construccion detras de camaras de Untold.works. Como construimos sitios web y sistemas de automatizacion con IA.' },
  },
  'aeo-search': {
    title: { en: 'AEO & Search Strategy | AI Engine Optimization Articles', es: 'AEO y Estrategia de Busqueda | Articulos de Optimizacion para Motores de IA' },
    description: { en: 'AI Engine Optimization and search strategy articles. Learn how to get your business recommended by AI platforms like ChatGPT, Gemini, and Perplexity.', es: 'Articulos sobre Optimizacion para Motores de IA y estrategia de busqueda. Aprende como lograr que tu negocio sea recomendado por plataformas de IA.' },
  },
  'ai-for-business': {
    title: { en: 'AI for Business | Practical AI Tools and Strategy', es: 'IA para Negocios | Herramientas y Estrategia Practica de IA' },
    description: { en: 'Practical AI advice for businesses. Learn to use ChatGPT, AI automation tools, and content strategy for your business.', es: 'Consejos practicos de IA para negocios. Aprende a usar ChatGPT, herramientas de automatizacion IA y estrategia de contenido.' },
  },
  'creative-technology': {
    title: { en: 'Creative Technology | Web Strategy, Mobile-First, Bilingual Sites', es: 'Tecnologia Creativa | Estrategia Web, Mobile-First, Sitios Bilingues' },
    description: { en: 'Modern web architecture, headless CMS, bilingual website strategy, mobile-first design, and AI-powered web ecosystems.', es: 'Arquitectura web moderna, CMS headless, estrategia de sitios bilingues, diseno mobile-first y ecosistemas web con IA.' },
  },
  'case-studies': {
    title: { en: 'Case Studies & Industry Guides | Real Business Results', es: 'Casos de Estudio y Guias por Industria | Resultados Reales' },
    description: { en: 'Real case studies and industry guides for hotels, law firms, restaurants, ecommerce, and professional services. Digital transformation that works.', es: 'Casos de estudio reales y guias por industria para hoteles, despachos, restaurantes, ecommerce y servicios profesionales.' },
  },
};

const Blog: React.FC = () => {
  const { t } = useLanguage();
  const { category: urlCategory } = useParams<{ category?: string }>();
  const navigate = useNavigate();
  const validCategory = urlCategory && categories.some(c => c.key === urlCategory) ? urlCategory as BlogCategory : undefined;
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'all'>(validCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const meta = validCategory && categoryMeta[validCategory]
    ? categoryMeta[validCategory]
    : { title: i18n.seo.blog.title, description: i18n.seo.blog.description };

  usePageMeta(meta.title, meta.description, {
    path: validCategory ? `/blog/category/${validCategory}` : '/blog',
  });

  const allSorted = useMemo(() =>
    [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const filtered = useMemo(() => {
    let posts = activeCategory === 'all'
      ? allSorted
      : allSorted.filter((p) => p.category === activeCategory);

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

    return posts;
  }, [activeCategory, searchQuery, allSorted]);

  const groupedByCategory = useMemo(() => {
    const groups: { key: BlogCategory; label: { en: string; es: string }; posts: typeof blogPosts }[] = [];
    const catOrder: BlogCategory[] = ['build-notes', 'aeo-search', 'ai-for-business', 'creative-technology', 'case-studies'];

    for (const cat of catOrder) {
      const catPosts = filtered.filter(p => p.category === cat);
      if (catPosts.length > 0) {
        const catLabel = categories.find(c => c.key === cat)?.label || { en: cat, es: cat };
        groups.push({ key: cat, label: catLabel, posts: catPosts });
      }
    }
    return groups;
  }, [filtered]);

  const handleCategoryClick = (key: BlogCategory | 'all') => {
    setActiveCategory(key);
    navigate(key === 'all' ? '/blog' : `/blog/category/${key}`, { replace: true });
  };

  const isSearching = searchQuery.trim().length > 0;

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
      <section className="px-5 sm:px-10 py-6 border-b border-untold-border bg-white sticky top-0 z-30">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleCategoryClick(cat.key)}
                className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.3em] font-bold transition-all border relative ${
                  activeCategory === cat.key
                    ? 'bg-untold-black text-white border-untold-black'
                    : 'border-untold-border text-untold-gray hover:text-untold-black hover:border-untold-black'
                }`}
              >
                {t(cat.label)}
              </button>
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

      {/* Posts */}
      <section className="px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-xl font-serif italic text-untold-gray py-20"
              >
                {t({ en: 'No posts found.', es: 'No se encontraron articulos.' })}
              </motion.p>
            ) : isSearching ? (
              <motion.div
                key="search-results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {filtered.map((post) => (
                  <CompactPostRow key={post.slug} post={post} t={t} showCategory />
                ))}
              </motion.div>
            ) : activeCategory !== 'all' ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <CategorySection
                  posts={filtered}
                  t={t}
                  showCategory={false}
                />
              </motion.div>
            ) : (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-20"
              >
                {groupedByCategory.map((group) => (
                  <div key={group.key}>
                    <div className="flex items-center justify-between mb-8 border-b border-untold-border pb-4">
                      <h2 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter">
                        {t(group.label)}
                      </h2>
                      <button
                        onClick={() => handleCategoryClick(group.key)}
                        className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange font-bold hover:underline"
                      >
                        {t({ en: 'View all', es: 'Ver todos' })} &rarr;
                      </button>
                    </div>
                    <CategorySection
                      posts={group.posts}
                      t={t}
                      showCategory={false}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
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

const FeaturedCard: React.FC<{
  post: (typeof blogPosts)[number];
  t: (v: { en: string; es: string }) => string;
  showCategory: boolean;
}> = ({ post, t, showCategory }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group border border-untold-border bg-white hover:shadow-lg hover:border-untold-orange/20 transition-all flex flex-col"
  >
    <div className="p-8 sm:p-10 flex flex-col flex-grow">
      <div className="flex items-center gap-3 mb-5">
        {showCategory && (
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-orange font-bold">
            {post.category.replace(/-/g, ' ')}
          </span>
        )}
        <span className="font-mono text-[9px] text-untold-gray/40">{post.date}</span>
      </div>
      <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-5 group-hover:text-untold-orange transition-colors leading-tight">
        {t(post.title)}
      </h3>
      <p className="font-serif italic text-untold-gray text-base sm:text-lg leading-relaxed mb-6 flex-grow">
        {t(post.excerpt)}
      </p>
      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange font-bold">
        {t(i18n.blogPage.readMore)} &rarr;
      </span>
    </div>
  </Link>
);

const CompactPostRow: React.FC<{
  post: (typeof blogPosts)[number];
  t: (v: { en: string; es: string }) => string;
  showCategory?: boolean;
}> = ({ post, t, showCategory }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex items-baseline gap-4 py-3 border-b border-untold-border/50 hover:border-untold-orange/30 transition-colors"
  >
    <span className="font-mono text-[10px] text-untold-gray/40 shrink-0 w-20">{post.date}</span>
    {showCategory && (
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-untold-orange/70 font-bold shrink-0 hidden sm:inline">
        {post.category.replace(/-/g, ' ')}
      </span>
    )}
    <span className="font-sans font-bold text-sm sm:text-base uppercase tracking-tight group-hover:text-untold-orange transition-colors leading-tight">
      {t(post.title)}
    </span>
    <span className="font-mono text-[10px] text-untold-orange opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-auto">
      &rarr;
    </span>
  </Link>
);

const CategorySection: React.FC<{
  posts: (typeof blogPosts)[number][];
  t: (v: { en: string; es: string }) => string;
  showCategory: boolean;
}> = ({ posts, t, showCategory }) => {
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8">
        <FeaturedCard post={featured} t={t} showCategory={showCategory} />
        {rest.length > 0 && (
          <div className="flex flex-col justify-center">
            {rest.map((post) => (
              <CompactPostRow key={post.slug} post={post} t={t} showCategory={showCategory} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
