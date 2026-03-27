import React, { useMemo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import { blogPosts } from '../data/blogPosts';
import Breadcrumbs from '../components/Breadcrumbs';
import AuthorByline from '../components/AuthorByline';
import BlogMoneyCTA from '../components/BlogMoneyCTA';
import ProofStrip from '../components/ProofStrip';
import * as i18n from '../i18n';
import type { Pillar } from '../types';

const pillarLinks: Record<Exclude<Pillar, 'all'>, { path: string; label: { en: string; es: string } }> = {
  'professional-services': { path: '/solutions/professional-services', label: { en: 'Explore Professional Services Solutions', es: 'Explorar Soluciones para Servicios Profesionales' } },
  'small-business': { path: '/solutions/small-business', label: { en: 'Explore Small Business Solutions', es: 'Explorar Soluciones para Pequeña Empresa' } },
  enterprise: { path: '/solutions/enterprise', label: { en: 'Explore Enterprise Solutions', es: 'Explorar Soluciones Empresariales' } },
};

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  const pageTitle = post ? `${t(post.title)} — Untold.works` : 'Blog — Untold.works';
  const pageDesc = post ? t(post.excerpt) : '';

  const ogImage = post?.image ? `https://untold.works${post.image}` : undefined;

  const schema = useMemo(() => {
    if (!post) return undefined;
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title.en,
      description: post.excerpt.en,
      image: post.image ? `https://untold.works${post.image}` : undefined,
      author: { '@type': 'Person', '@id': 'https://untold.works/#founder', name: post.author, jobTitle: 'Founder & AI Systems Architect', url: 'https://untold.works/about', sameAs: ['https://www.linkedin.com/in/semolik/'] },
      publisher: {
        '@type': 'Organization',
        '@id': 'https://untold.works/#organization',
        name: 'Untold.works',
        logo: { '@type': 'ImageObject', url: 'https://untold.works/images/logo.png' },
      },
      datePublished: post.date,
      dateModified: post.dateModified || post.date,
      url: `https://untold.works/blog/${post.slug}`,
      mainEntityOfPage: `https://untold.works/blog/${post.slug}`,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.prose h2', '.prose h3'],
      },
      about: {
        '@type': 'Thing',
        name: post.category.replace(/-/g, ' '),
      },
      inLanguage: ['en', 'es'],
      keywords: post.tags?.join(', '),
    };
  }, [post]);

  usePageMeta(pageTitle, pageDesc, {
    path: `/blog/${slug || ''}`,
    ogType: 'article',
    ogImage,
    schema,
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="bg-untold-beige min-h-screen font-serif text-untold-black">
      {/* Header */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-40 border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Blog', es: 'Blog' }, path: '/blog' },
                { label: post.title },
              ]}
            />
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-untold-orange transition-colors mb-12 block"
          >
            <span>&larr;</span>
            <span>{t({ en: 'Back to Blog', es: 'Volver al Blog' })}</span>
          </Link>

          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange font-bold">
              {post.category.replace(/-/g, ' ')}
            </span>
            <span className="font-mono text-[10px] text-white/30">{post.date}</span>
            <span className="font-mono text-[10px] text-white/30">{post.author}</span>
          </div>

          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.85] mb-8">
            {t(post.title)}
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-white/60 leading-relaxed">
            {t(post.excerpt)}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto">
          <div
            className="prose prose-lg prose-untold"
            style={{
              lineHeight: '1.8',
            }}
            dangerouslySetInnerHTML={{ __html: t(post.content) }}
          />
          <AuthorByline name={post.author} date={post.date} variant="light" />
          <div className="mt-12">
            <BlogMoneyCTA />
          </div>
        </div>
      </section>

      {/* Pillar CTA — internal link to relevant solution page */}
      {post.pillar && post.pillar !== 'all' && pillarLinks[post.pillar] && (
        <section className="px-5 sm:px-10 py-10">
          <div className="max-w-[900px] mx-auto">
            <Link
              to={pillarLinks[post.pillar].path}
              className="flex items-center justify-between border border-untold-orange/20 bg-untold-orange/5 p-6 sm:p-8 hover:border-untold-orange/40 hover:bg-untold-orange/10 transition-all group"
            >
              <span className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors">
                {t(pillarLinks[post.pillar].label)}
              </span>
              <span className="text-2xl text-untold-orange group-hover:translate-x-2 transition-transform">&rarr;</span>
            </Link>
          </div>
        </section>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-5 sm:px-10 py-16 sm:py-24 border-t border-untold-border">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-10">
              {t({ en: 'Related Articles', es: 'Art\u00edculos Relacionados' })}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="border border-untold-border bg-white p-6 hover:border-untold-orange/20 hover:shadow-lg transition-all group"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-orange font-bold block mb-3">
                    {rp.category.replace(/-/g, ' ')}
                  </span>
                  <h4 className="font-sans font-black text-lg uppercase tracking-tighter group-hover:text-untold-orange transition-colors leading-tight mb-3">
                    {t(rp.title)}
                  </h4>
                  <p className="font-serif italic text-untold-gray text-sm leading-relaxed">
                    {t(rp.excerpt)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProofStrip />

      {/* CTA */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 text-center">
        <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-8">
          {t(i18n.blogPage.ctaHeadline)}
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-untold-orange text-white px-10 py-5 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
        >
          {t(i18n.blogPage.ctaCta)}
        </Link>
      </section>
    </div>
  );
};

export default BlogPost;
