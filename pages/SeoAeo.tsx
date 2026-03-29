import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Testimonials from '../components/Testimonials';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const SeoAeo: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'SEO & AEO — Ranked on Google, Cited by AI | Untold.works',
      es: 'SEO y AEO — En Google y Citado por IA | Untold.works'
    },
    {
      en: 'SEO and Answer Engine Optimization for businesses in Mexico and the US. Get found on Google and recommended by ChatGPT, Perplexity, and AI search engines. Bilingual SEO and AI discovery.',
      es: 'SEO y Optimización para Motores de Respuesta para negocios en México y EE.UU. Aparece en Google y sé recomendado por ChatGPT, Perplexity y buscadores de IA. SEO bilingüe y descubrimiento por IA.'
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
            '@id': 'https://untold.works/#organization',
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

  const packages = [
    {
      title: { en: 'Technical SEO Foundation', es: 'Fundación SEO Técnica' },
      price: 'From $1,500 USD',
      items: [
        { en: 'Site speed & Core Web Vitals audit', es: 'Auditoría de velocidad y Core Web Vitals' },
        { en: 'Schema markup (Organization, LocalBusiness, Service)', es: 'Schema markup (Organization, LocalBusiness, Service)' },
        { en: 'XML sitemap optimization', es: 'Optimización de sitemap XML' },
        { en: 'Robots.txt & crawl configuration', es: 'Configuración de robots.txt y rastreo' },
        { en: 'Mobile-first technical fixes', es: 'Correcciones técnicas mobile-first' },
        { en: 'Meta tags & Open Graph optimization', es: 'Optimización de meta tags y Open Graph' },
      ],
      footer: { en: 'One-time. Delivered in 1 week.', es: 'Único pago. Entregado en 1 semana.' },
      highlight: false,
    },
    {
      title: { en: 'Bilingual Local Dominance', es: 'Dominio Local Bilingüe' },
      price: 'From $2,500 USD',
      items: [
        { en: 'Google Business Profile setup & optimization', es: 'Configuración y optimización de Google Business Profile' },
        { en: 'Location landing pages (EN + ES)', es: 'Páginas de ubicación (EN + ES)' },
        { en: 'Bilingual keyword targeting & hreflang', es: 'Segmentación de keywords bilingüe y hreflang' },
        { en: 'Local schema markup (LocalBusiness, GeoCoordinates)', es: 'Schema markup local (LocalBusiness, GeoCoordinates)' },
        { en: 'Review strategy & first Google Posts', es: 'Estrategia de reseñas y primeros Google Posts' },
        { en: 'Competitor keyword gap analysis', es: 'Análisis de brechas de keywords vs competencia' },
      ],
      footer: { en: 'One-time + optional monthly. Delivered in 2 weeks.', es: 'Único pago + mensual opcional. Entregado en 2 semanas.' },
      highlight: false,
    },
    {
      title: { en: 'AEO & AI Discovery', es: 'AEO y Descubrimiento por IA' },
      price: 'From $3,000 USD',
      items: [
        { en: 'llms.txt implementation & AI crawler access', es: 'Implementación de llms.txt y acceso para crawlers de IA' },
        { en: 'FAQ schema across key pages', es: 'Schema de FAQ en páginas clave' },
        { en: 'Answer-format content optimization', es: 'Optimización de contenido en formato de respuesta' },
        { en: 'Structured data for AI citation', es: 'Datos estructurados para citación por IA' },
        { en: 'AI engine monitoring (ChatGPT, Perplexity, Gemini, Claude)', es: 'Monitoreo en motores de IA (ChatGPT, Perplexity, Gemini, Claude)' },
        { en: 'Bilingual AEO content strategy', es: 'Estrategia de contenido AEO bilingüe' },
      ],
      footer: { en: 'One-time + optional monthly. Delivered in 2-3 weeks.', es: 'Único pago + mensual opcional. Entregado en 2-3 semanas.' },
      highlight: true,
    },
    {
      title: { en: 'Ongoing SEO & AEO Management', es: 'Gestión Continua de SEO y AEO' },
      price: 'From $500/mo USD',
      items: [
        { en: 'Monthly performance reporting', es: 'Reportes mensuales de rendimiento' },
        { en: 'Content updates & keyword tracking', es: 'Actualizaciones de contenido y seguimiento de keywords' },
        { en: 'Google Business Profile posting', es: 'Publicaciones en Google Business Profile' },
        { en: 'Schema maintenance & new page optimization', es: 'Mantenimiento de schema y optimización de páginas nuevas' },
        { en: 'AI citation monitoring & optimization', es: 'Monitoreo y optimización de citaciones por IA' },
        { en: 'Quarterly strategy review', es: 'Revisión estratégica trimestral' },
      ],
      footer: { en: 'Monthly retainer. Cancel anytime.', es: 'Retainer mensual. Cancela cuando quieras.' },
      highlight: false,
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Audit', es: 'Auditoría' },
      desc: {
        en: 'We scan your entire site for SEO issues, check your AI discoverability, and benchmark your competitors.',
        es: 'Escaneamos todo tu sitio buscando problemas de SEO, verificamos tu descubrimiento por IA y analizamos a tus competidores.'
      }
    },
    {
      num: '02',
      title: { en: 'Implement', es: 'Implementar' },
      desc: {
        en: 'We fix technical issues, add schema markup, optimize for AI engines, and build location-specific content.',
        es: 'Corregimos problemas técnicos, agregamos schema markup, optimizamos para motores de IA y creamos contenido por ubicación.'
      }
    },
    {
      num: '03',
      title: { en: 'Monitor', es: 'Monitorear' },
      desc: {
        en: 'We track your rankings, AI citations, local search presence, and content performance across both languages.',
        es: 'Rastreamos tus rankings, citaciones por IA, presencia en búsqueda local y rendimiento de contenido en ambos idiomas.'
      }
    },
    {
      num: '04',
      title: { en: 'Optimize', es: 'Optimizar' },
      desc: {
        en: 'Monthly improvements based on real data. New content, updated schema, fresh Google Posts, and expanding keyword coverage.',
        es: 'Mejoras mensuales basadas en datos reales. Nuevo contenido, schema actualizado, Google Posts frescos y cobertura de keywords en expansión.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'What is AEO (Answer Engine Optimization)?', es: '¿Qué es AEO (Optimización para Motores de Respuesta)?' },
      a: {
        en: 'AEO is the practice of optimizing your website and content so AI-powered search engines like ChatGPT, Perplexity, Google AI Overviews, and Claude recommend your business when users ask questions. While SEO gets you ranked in search results, AEO gets you cited and recommended in AI-generated answers. Untold.works is one of the first agencies in Mexico offering AEO as a service.',
        es: 'AEO es la práctica de optimizar tu sitio web y contenido para que buscadores de IA como ChatGPT, Perplexity, Google AI Overviews y Claude recomienden tu negocio cuando los usuarios hacen preguntas. Mientras el SEO te posiciona en resultados de búsqueda, AEO hace que te citen y recomienden en respuestas generadas por IA. Untold.works es una de las primeras agencias en México que ofrece AEO como servicio.'
      }
    },
    {
      q: { en: 'How much does SEO cost in Mexico?', es: '¿Cuánto cuesta el SEO en México?' },
      a: {
        en: 'SEO Foundation packages start at $1,500 USD for a technical audit, schema markup, sitemap optimization, and Core Web Vitals fixes. Bilingual Local SEO packages start at $2,500 USD and include Google Business Profile optimization, location pages, and keyword targeting in English and Spanish. AEO packages start at $3,000 USD and include llms.txt implementation, FAQ schema, AI crawler configuration, and answer-format content optimization.',
        es: 'Los paquetes de Fundación SEO comienzan en $1,500 USD por auditoría técnica, schema markup, optimización de sitemap y correcciones de Core Web Vitals. Los paquetes de SEO Local Bilingüe comienzan en $2,500 USD e incluyen optimización de Google Business Profile, páginas de ubicación y segmentación de keywords en inglés y español. Los paquetes de AEO comienzan en $3,000 USD e incluyen implementación de llms.txt, schema de FAQ, configuración de crawlers de IA y optimización de contenido en formato de respuesta.'
      }
    },
    {
      q: { en: 'Is there an AEO agency in Mexico?', es: '¿Hay agencia de AEO en México?' },
      a: {
        en: 'Yes. Untold.works is one of the first agencies in Mexico offering AEO (Answer Engine Optimization) services. We help businesses get recommended by ChatGPT, Perplexity, Google AI Overviews, and other AI search engines, in addition to traditional SEO. We\'re based in San Miguel de Allende and serve clients across Mexico and the United States.',
        es: 'Sí. Untold.works es una de las primeras agencias en México que ofrece servicios de AEO (Optimización para Motores de Respuesta). Ayudamos a negocios a ser recomendados por ChatGPT, Perplexity, Google AI Overviews y otros buscadores de IA, además del SEO tradicional. Estamos basados en San Miguel de Allende y servimos clientes en todo México y Estados Unidos.'
      }
    },
    {
      q: { en: 'What is the difference between SEO and AEO?', es: '¿Cuál es la diferencia entre SEO y AEO?' },
      a: {
        en: 'SEO optimizes for search engine rankings — appearing on page 1 of Google for specific keywords. AEO optimizes for AI-generated answers — being the business that ChatGPT, Perplexity, or Google AI Overviews recommends when someone asks "who is the best web designer in San Miguel de Allende?" Both are essential in 2026: SEO drives traffic, AEO drives trust and recommendations.',
        es: 'SEO optimiza para rankings en motores de búsqueda — aparecer en la página 1 de Google para keywords específicos. AEO optimiza para respuestas generadas por IA — ser el negocio que ChatGPT, Perplexity o Google AI Overviews recomienda cuando alguien pregunta "¿quién es el mejor diseñador web en San Miguel de Allende?" Ambos son esenciales en 2026: SEO genera tráfico, AEO genera confianza y recomendaciones.'
      }
    },
    {
      q: { en: '40% of searches now start in AI — what does that mean for my business?', es: '40% de las búsquedas empiezan en IA — ¿qué significa eso para mi negocio?' },
      a: {
        en: 'It means that if your business isn\'t optimized for AI engines, you\'re invisible to a growing segment of potential customers. When someone asks ChatGPT "best hotel in San Miguel de Allende" or Perplexity "web designer near me," your business needs to be in that answer. AEO ensures you\'re not just ranked — you\'re recommended.',
        es: 'Significa que si tu negocio no está optimizado para motores de IA, eres invisible para un segmento creciente de clientes potenciales. Cuando alguien le pregunta a ChatGPT "mejor hotel en San Miguel de Allende" o a Perplexity "diseñador web cerca de mí," tu negocio necesita estar en esa respuesta. AEO asegura que no solo estés posicionado — sino recomendado.'
      }
    },
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
                { label: { en: 'SEO & AEO', es: 'SEO y AEO' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'SEARCH & DISCOVERY', es: 'BÚSQUEDA Y DESCUBRIMIENTO' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'SEO Got You Ranked. AEO Gets You Recommended.', es: 'SEO Te Posiciona. AEO Te Recomienda.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10 mb-10">
            {t({
              en: 'When someone asks ChatGPT who does what you do in your city, does your name come up? We make sure it does.',
              es: 'Cuando alguien le pregunta a ChatGPT quién hace lo que tú haces en tu ciudad, ¿aparece tu nombre? Nos aseguramos de que sí.'
            })}
          </p>

          <div className="inline-flex items-center space-x-4 border border-untold-orange/30 bg-untold-orange/5 px-6 py-3">
            <span className="w-2 h-2 rounded-full bg-untold-orange animate-pulse"></span>
            <span className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.3em] font-bold text-untold-orange">
              {t({ en: 'The First AEO Agency in Mexico', es: 'La Primera Agencia de AEO en México' })}
            </span>
          </div>
        </div>
      </section>

      {/* ── AEO Definition Block (AEO-optimized for LLM citation) ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'What Is AEO (AI Engine Optimization)?', es: '¿Qué Es AEO (Optimización para Motores de IA)?' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed mb-6">
            {t({
              en: 'AEO (AI Engine Optimization) is the practice of optimizing web content so that AI systems — ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews — can find, understand, and cite your business in their responses. While SEO focuses on ranking in traditional search results, AEO focuses on being recommended and cited by AI assistants.',
              es: 'AEO (Optimización para Motores de IA) es la práctica de optimizar contenido web para que los sistemas de IA — ChatGPT, Claude, Gemini, Perplexity y Google AI Overviews — puedan encontrar, entender y citar tu negocio en sus respuestas. Mientras que el SEO se enfoca en posicionar en resultados de búsqueda tradicionales, el AEO se enfoca en ser recomendado y citado por asistentes de IA.'
            })}
          </p>
          <p className="text-base font-serif text-untold-black/50 leading-relaxed">
            {t({
              en: 'AEO includes implementing structured data (JSON-LD schemas), FAQ markup, llms.txt files, question-format content headers, speakable properties, and E-E-A-T signals. Untold.works is the first AEO agency in Mexico, optimizing businesses for citation across all major AI platforms.',
              es: 'El AEO incluye implementar datos estructurados (schemas JSON-LD), markup de FAQ, archivos llms.txt, encabezados de contenido en formato de pregunta, propiedades speakable y señales E-E-A-T. Untold.works es la primera agencia de AEO en México, optimizando negocios para ser citados en todas las principales plataformas de IA.'
            })}
          </p>
        </div>
      </section>

      {/* ── SEO vs AEO Comparison (AEO-optimized) ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-10 leading-[0.85]">
            {t({ en: 'What Is the Difference Between SEO and AEO?', es: '¿Cuál Es la Diferencia Entre SEO y AEO?' })}
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="border border-untold-border p-6 sm:p-8 bg-untold-beige/50">
              <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-4">SEO</h3>
              <ul className="space-y-3">
                {[
                  { en: 'Optimizes for Google search rankings', es: 'Optimiza para rankings en Google' },
                  { en: 'Targets keyword-based queries', es: 'Apunta a búsquedas por palabras clave' },
                  { en: 'Drives clicks to your website', es: 'Genera clics hacia tu sitio web' },
                  { en: 'Measured by rankings and traffic', es: 'Se mide por posiciones y tráfico' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-untold-orange mt-1">+</span>
                    <span className="font-serif text-base text-untold-black/70">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-untold-orange/30 p-6 sm:p-8 bg-untold-orange/5">
              <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-4 text-untold-orange">AEO</h3>
              <ul className="space-y-3">
                {[
                  { en: 'Optimizes for AI system citations', es: 'Optimiza para citaciones por sistemas de IA' },
                  { en: 'Targets conversational questions', es: 'Apunta a preguntas conversacionales' },
                  { en: 'Gets your business recommended by AI', es: 'Logra que la IA recomiende tu negocio' },
                  { en: 'Measured by AI mentions and citations', es: 'Se mide por menciones y citaciones de IA' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-untold-orange mt-1">+</span>
                    <span className="font-serif text-base text-untold-black/70">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-base font-serif italic text-untold-gray mt-8 text-center">
            {t({
              en: 'You need both. SEO gets you ranked. AEO gets you recommended. We do both.',
              es: 'Necesitas ambos. SEO te posiciona. AEO te recomienda. Hacemos ambos.'
            })}
          </p>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE SHIFT', es: 'EL CAMBIO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Google Is Not Enough Anymore', es: 'Google Ya No Es Suficiente' })}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed mb-6">
                {t({
                  en: 'In 2026, people don\'t just Google things — they ask AI. ChatGPT, Perplexity, Google AI Overviews, and Claude are becoming the first place people go for recommendations. "Best restaurant in San Miguel." "Web designer near me." "Hotel boutique SMA." If your business isn\'t optimized for these AI engines, you\'re invisible to a growing share of your market.',
                  es: 'En 2026, la gente no solo busca en Google — le pregunta a la IA. ChatGPT, Perplexity, Google AI Overviews y Claude se están convirtiendo en el primer lugar donde la gente busca recomendaciones. "Mejor restaurante en San Miguel." "Diseñador web cerca de mí." "Hotel boutique SMA." Si tu negocio no está optimizado para estos motores de IA, eres invisible para una parte creciente de tu mercado.'
                })}
              </p>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed">
                {t({
                  en: 'SEO gets you on the map. AEO gets you in the conversation. You need both.',
                  es: 'SEO te pone en el mapa. AEO te pone en la conversación. Necesitas ambos.'
                })}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">40%</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'of product searches now start in AI chat', es: 'de búsquedas de productos empiezan en chat de IA' })}
                </p>
              </div>
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">90%</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'of founders said AEO was the biggest revenue opportunity of 2026', es: 'de fundadores dijeron que AEO fue la mayor oportunidad de ingresos de 2026' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'PACKAGES', es: 'PAQUETES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'What We Offer', es: 'Lo Que Ofrecemos' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`border bg-white p-6 sm:p-8 flex flex-col ${
                  pkg.highlight
                    ? 'border-l-4 border-l-untold-orange border-t border-r border-b border-untold-border'
                    : 'border-untold-border'
                }`}
              >
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-2">
                  {t(pkg.title)}
                </h3>
                <p className="font-mono text-[13px] text-untold-orange font-bold mb-6">{pkg.price}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base">{t(item)}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-serif italic text-untold-gray/60 border-t border-untold-border pt-4">
                  {t(pkg.footer)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Four Steps to Visibility', es: 'Cuatro Pasos Hacia la Visibilidad' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-untold-border bg-untold-beige p-6 sm:p-8"
              >
                <span className="font-mono text-[11px] text-untold-orange font-bold">{step.num}</span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3 mt-2">
                  {t(step.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Reading ── */}
      <section className="bg-white px-5 sm:px-10 py-12 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
            {t({ en: 'RELATED READING', es: 'LECTURA RELACIONADA' })}
          </span>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link to="/blog/aeo-the-shift-nobodys-talking-about" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'AEO: The Shift Nobody\'s Talking About', es: 'AEO: El Cambio del que Nadie Habla' })}</p>
            </Link>
            <Link to="/blog/san-miguel-de-allende-digital-presence-guide-2026" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'SMA Digital Presence Guide 2026', es: 'Guía de Presencia Digital SMA 2026' })}</p>
            </Link>
            <Link to="/blog/bilingual-websites-why-translation-plugins-fail" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Why Translation Plugins Fail for Bilingual Websites', es: 'Por Qué los Plugins de Traducción Fallan' })}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ — AEO Optimized ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About SEO & AEO', es: 'Preguntas Sobre SEO y AEO' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(faq.q)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(faq.a)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Systems Connector ── */}
      <NetworkConnector
        capability={{ en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }}
        networkDescription={{
          en: 'At network scale, unified SEO, AEO, and GEO creates a compounding effect. Thirty sites with consistent structured data and coordinated optimization don\'t just perform independently — every site strengthens every other site. Google sees an authoritative network. AI engines see 30x the signal. That\'s the network effect.',
          es: 'A escala de red, SEO, AEO y GEO unificados crean un efecto compuesto. Treinta sitios con datos estructurados consistentes y optimización coordinada no solo funcionan independientemente — cada sitio fortalece a todos los demás. Google ve una red autoritativa. Los motores de IA ven 30x la señal. Ese es el efecto de red.',
        }}
        relatedCapabilities={[
          { name: { en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' }, path: '/websites' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
          { name: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
          { name: { en: 'Paid Advertising', es: 'Publicidad Pagada' }, path: '/ads' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREE AUDIT', es: 'AUDITORÍA GRATIS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Get a Free SEO & AEO Audit', es: 'Obtén una Auditoría SEO y AEO Gratis' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\'ll send you a custom report showing your current SEO health, AI discoverability score, and specific recommendations to get ranked and recommended.',
              es: 'Completa el formulario y te enviaremos un reporte personalizado mostrando tu salud SEO actual, tu puntuación de descubrimiento por IA y recomendaciones específicas para posicionarte y ser recomendado.'
            })}
          </p>
          <QuickLeadForm pillar="SEO & AEO" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Get Found?', es: '¿Listo para Ser Encontrado?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Get ranked on Google. Get recommended by AI. Get found by the customers who are already looking for you.',
              es: 'Posiciónate en Google. Sé recomendado por IA. Sé encontrado por los clientes que ya te están buscando.'
            })}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SeoAeo;
