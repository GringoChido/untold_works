import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import { blogPosts } from '../../data/blogPosts';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';

const MEXICO_BLOG_SLUGS = [
  'whatsapp-ai-for-mexican-businesses-complete-guide',
  'san-miguel-de-allende-digital-presence-guide-2026',
  'how-sma-restaurants-can-capture-tourist-traffic-online',
  'n8n-vs-zapier-for-mexican-businesses',
  'geo-flip-your-marketing-strategy',
];

const Mexico: React.FC = () => {
  const { t } = useLanguage();

  const mexicoPosts = MEXICO_BLOG_SLUGS
    .map(slug => blogPosts.find(p => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  usePageMeta(
    i18n.mexicoPage.seo.title,
    i18n.mexicoPage.seo.description,
    {
      path: '/mexico',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Operational Systems for Mobile-First Businesses in Mexico',
          provider: {
            '@type': 'Organization',
            '@id': 'https://untold.works/#organization',
            name: 'Untold.works',
          },
          description: 'Structured business systems built around WhatsApp, mobile communication, and the tools Mexican businesses already use. Operational visibility for distributed teams.',
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'City', name: 'San Miguel de Allende' },
            { '@type': 'City', name: 'Mexico City' },
            { '@type': 'City', name: 'Querétaro' },
          ],
          serviceType: [
            'WhatsApp Business Automation',
            'Mobile-First Business Systems',
            'Operational Alignment Systems',
            'Bilingual Web Development',
          ],
          knowsLanguage: ['en', 'es'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How does Untold work with businesses that run on WhatsApp?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Untold captures the operational signals that already flow through WhatsApp — orders, confirmations, customer inquiries — and connects them to structured systems like CRM, inventory, and reporting tools. Teams keep using WhatsApp. The information behind it becomes organized and visible.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Untold reemplaza WhatsApp o los hábitos de comunicación del equipo?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Untold no elimina los canales de comunicación que los equipos ya usan. Construimos sistemas alrededor de esos hábitos para que la información operativa sea estructurada, visible y accionable en todo el negocio.',
              },
            },
            {
              '@type': 'Question',
              name: 'What types of businesses in Mexico does Untold serve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Restaurants, hotels, professional services, retail, manufacturers, distributors, and multi-location businesses across Mexico. Any business where communication tools carry real operational information.',
              },
            },
            {
              '@type': 'Question',
              name: '¿Cuánto cuesta un sistema operativo para negocios en México?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Los proyectos comienzan desde $5,000 USD para profesionales independientes. Sistemas para pequeños negocios van de $10,000 a $30,000 USD. Sistemas empresariales se cotizan según el alcance. Todos incluyen transferencia completa de propiedad.',
              },
            },
          ],
        },
      ] as any,
    }
  );

  const locationLinks = [
    { path: '/san-miguel-de-allende', label: { en: 'San Miguel de Allende', es: 'San Miguel de Allende' } },
    { path: '/mexico-city', label: { en: 'Mexico City', es: 'Ciudad de México' } },
    { path: '/queretaro', label: { en: 'Querétaro', es: 'Querétaro' } },
    { path: '/united-states', label: { en: 'United States', es: 'Estados Unidos' } },
  ];

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* ── Hero ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Mexico', es: 'México' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t(i18n.mexicoPage.hero.eyebrow)}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.2rem,7vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t(i18n.mexicoPage.hero.headline)}
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-white/60 max-w-4xl leading-relaxed border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t(i18n.mexicoPage.hero.tagline)}
          </p>
        </div>
      </section>

      {/* ── Hero Image ── */}
      <section className="border-b border-untold-border">
        <div className="w-full aspect-[21/9] overflow-hidden">
          <img
            src="/images/mexico-hero.jpg"
            alt={t({ en: 'Business operations across Mexico', es: 'Operaciones de negocio en México' })}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* ── What Mobile-First Operations Look Like ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t(i18n.mexicoPage.mobileOps.eyebrow)}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 leading-[0.85] max-w-5xl">
            {t(i18n.mexicoPage.mobileOps.headline)}
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-untold-border border border-untold-border">
            {i18n.mexicoPage.mobileOps.examples.map((example, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter mb-3">
                  {t(example.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(example.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Untold Works in This Environment ── */}
      <section className="bg-untold-beige/40 px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t(i18n.mexicoPage.howItWorks.eyebrow)}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6 leading-[0.85] max-w-5xl">
            {t(i18n.mexicoPage.howItWorks.headline)}
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-untold-gray leading-relaxed max-w-3xl mb-12">
            {t(i18n.mexicoPage.howItWorks.body)}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-untold-border border border-untold-border">
            {i18n.mexicoPage.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4 block">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-sans font-black text-base sm:text-lg uppercase tracking-tighter mb-3">
                  {t(step.label)}
                </h3>
                <p className="font-serif text-sm sm:text-base text-untold-gray leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Locations Cross-Links ── */}
      <section className="bg-white px-5 sm:px-10 py-12 sm:py-16 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t(i18n.mexicoPage.locations.eyebrow)}
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tighter mb-3 leading-[0.85]">
            {t(i18n.mexicoPage.locations.headline)}
          </h2>
          <p className="font-serif italic text-untold-gray text-lg mb-8">
            {t(i18n.mexicoPage.locations.body)}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {locationLinks.map((loc) => (
              <Link
                key={loc.path}
                to={loc.path}
                className="border border-untold-border bg-untold-beige p-4 sm:p-6 hover:border-untold-orange hover:shadow-lg transition-all text-center"
              >
                <p className="font-sans font-black text-sm sm:text-base uppercase tracking-tighter text-untold-orange">
                  {t(loc.label)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog and Insights ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t(i18n.mexicoPage.blogSection.eyebrow)}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4 leading-[0.85]">
            {t(i18n.mexicoPage.blogSection.headline)}
          </h2>
          <p className="font-serif italic text-untold-gray text-lg mb-12 max-w-3xl">
            {t(i18n.mexicoPage.blogSection.intro)}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mexicoPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group border border-untold-border bg-white hover:border-untold-orange/40 hover:shadow-lg transition-all"
              >
                <div className="p-6 sm:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-3">
                    {post.category.replace(/-/g, ' ')}
                  </span>
                  <h3 className="font-sans font-black text-base sm:text-lg uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors leading-tight">
                    {t(post.title)}
                  </h3>
                  <p className="font-serif italic text-untold-gray text-sm leading-relaxed line-clamp-3">
                    {t(post.excerpt)}
                  </p>
                  <span className="inline-block mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                    {t({ en: 'Read →', es: 'Leer →' })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — AEO Optimized ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 leading-[0.85]">
            {t({ en: 'Questions About Mobile-First Business Systems', es: 'Preguntas Sobre Sistemas para Negocios Mobile-First' })}
          </h2>

          <div className="space-y-0 border-t border-untold-border max-w-3xl">
            {[
              {
                q: { en: 'Does Untold replace WhatsApp or other communication tools?', es: '¿Untold reemplaza WhatsApp u otras herramientas de comunicación?' },
                a: { en: 'No. Untold does not remove the communication channels teams already use. We build systems around those habits so operational information becomes structured, visible, and actionable across the business.', es: 'No. Untold no elimina los canales de comunicación que los equipos ya usan. Construimos sistemas alrededor de esos hábitos para que la información operativa sea estructurada, visible y accionable en todo el negocio.' },
              },
              {
                q: { en: 'What types of businesses in Mexico does Untold serve?', es: '¿Qué tipos de negocios en México atiende Untold?' },
                a: { en: 'Restaurants, hotels, professional services, retail, manufacturers, distributors, and multi-location businesses across Mexico. Any business where mobile communication carries real operational information — orders, coordination, customer service, team decisions.', es: 'Restaurantes, hoteles, servicios profesionales, retail, fabricantes, distribuidores y negocios multi-ubicación en todo México. Cualquier negocio donde la comunicación móvil lleva información operativa real — pedidos, coordinación, atención al cliente, decisiones de equipo.' },
              },
              {
                q: { en: 'How much does an operational system cost for a Mexican business?', es: '¿Cuánto cuesta un sistema operativo para un negocio en México?' },
                a: { en: 'Professional services systems start at $5,000 USD. Small business platforms range from $10,000–$30,000 USD. Enterprise systems are custom-quoted. All projects include full ownership transfer — no lock-in, no recurring fees for access to your systems.', es: 'Sistemas para servicios profesionales comienzan en $5,000 USD. Plataformas para pequeños negocios van de $10,000 a $30,000 USD. Los sistemas empresariales se cotizan según alcance. Todos incluyen transferencia completa de propiedad — sin ataduras, sin cuotas recurrentes.' },
              },
              {
                q: { en: 'Can Untold work with businesses that operate entirely in Spanish?', es: '¿Untold puede trabajar con negocios que operan completamente en español?' },
                a: { en: 'Yes. Our team is fully bilingual and based in San Miguel de Allende, Mexico. We work in Spanish, English, or both — whatever fits your business and your customers.', es: 'Sí. Nuestro equipo es completamente bilingüe y está basado en San Miguel de Allende, México. Trabajamos en español, inglés o ambos — lo que mejor se adapte a tu negocio y tus clientes.' },
              },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-untold-border group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h3 className="font-sans font-black text-base sm:text-lg uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h3>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-base sm:text-lg font-serif text-untold-gray leading-relaxed pr-0 sm:pr-12">
                  {t(faq.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'GET STARTED', es: 'COMENZAR' })}
          </span>
          <h2 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t(i18n.mexicoPage.cta.headline)}
          </h2>
          <p className="font-serif italic text-white/50 text-base sm:text-lg mb-10">
            {t(i18n.mexicoPage.cta.body)}
          </p>
          <QuickLeadForm pillar="Location - Mexico" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t(i18n.mexicoPage.cta.headline)}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t(i18n.mexicoPage.cta.body)}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-base sm:text-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mexico;
