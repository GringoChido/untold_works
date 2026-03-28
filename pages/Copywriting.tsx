import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const Copywriting: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Copywriting & Brand Messaging — AI-Powered Strategy | Untold.works',
      es: 'Copywriting y Mensajería de Marca con IA | Untold.works'
    },
    {
      en: 'Brand voice strategy, copywriting, and messaging for websites, ads, emails, and sales collateral. AI-generated drafts, human strategy, one voice across your network.',
      es: 'Estrategia de voz de marca, copywriting y mensajería para sitios web, anuncios, correos y materiales de ventas. Borradores con IA, estrategia humana, una sola voz en tu red.'
    },
    {
      path: '/copywriting',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Copywriting & Brand Messaging — Untold.works',
          description: 'Brand voice strategy, copywriting, and messaging for websites, ads, emails, and sales collateral. AI-generated content with human strategy. One consistent voice across your entire business network.',
          url: 'https://untold.works/copywriting',
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
          serviceType: ['Copywriting', 'Brand Voice Development', 'Content Strategy', 'Email Marketing', 'Website Copy'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do you maintain brand voice across multiple locations?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We create a comprehensive brand voice guide that defines tone, vocabulary, personality, and messaging principles. Our AI system learns this voice and generates copy across all platforms — websites, emails, ads, social captions, product descriptions — with perfect consistency. No location has to write their own copy; everything is ready to deploy.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can AI really write good copy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AI generates excellent first drafts but needs human strategy to be truly effective. We use AI to handle the heavy lifting — generating multiple options fast — while our copywriting strategists ensure every piece matches your brand voice, speaks to your specific audience, and drives the behavior you want. It\'s human strategy + AI speed.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do we get to review and approve copy before it publishes?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Always. We deliver all copy as drafts. You review, request changes, and approve before anything goes live. Nothing publishes without your sign-off.'
              }
            },
            {
              '@type': 'Question',
              name: 'What about different languages? Can you handle bilingual copy?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We develop bilingual brand voice guides in English and Spanish simultaneously. This means your tone, vocabulary, and messaging stay consistent in both languages — not translated, but native to each language. Critical for businesses serving both US and Mexican markets.'
              }
            },
            {
              '@type': 'Question',
              name: 'How does copywriting connect to our other marketing systems?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Your brand voice feeds into everything: websites (Websites capability), social media captions (Social Media capability), email campaigns (AI Content Engine), paid ads (Ads capability), and sales presentations (Slides capability). One voice, deployed everywhere. That consistency is what builds trust at scale.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const contentTypes = [
    {
      icon: '📄',
      title: { en: 'Website Copy', es: 'Texto para Sitios Web' },
      desc: { en: 'Homepage, about, service pages, calls-to-action — written to convert visitors into leads', es: 'Inicio, acerca de, páginas de servicio, llamadas a la acción — escritas para convertir visitantes en leads' }
    },
    {
      icon: '📢',
      title: { en: 'Ad Copy', es: 'Textos de Anuncios' },
      desc: { en: 'Google Ads, Facebook, Instagram, LinkedIn — platform-optimized headlines, body copy, and CTAs', es: 'Google Ads, Facebook, Instagram, LinkedIn — titulares optimizados, copy de cuerpo y CTAs' }
    },
    {
      icon: '✉️',
      title: { en: 'Email Sequences', es: 'Secuencias de Email' },
      desc: { en: 'Welcome series, nurture campaigns, promotional emails — designed to maintain engagement and drive sales', es: 'Series de bienvenida, campañas de nurture, emails promocionales — diseñados para mantener engagement y conducir ventas' }
    },
    {
      icon: '🏷️',
      title: { en: 'Product Descriptions', es: 'Descripciones de Productos' },
      desc: { en: 'E-commerce product copy that explains benefits, addresses objections, and closes sales', es: 'Copy de productos que explica beneficios, aborda objeciones y cierra ventas' }
    },
    {
      icon: '🎯',
      title: { en: 'Brand Voice Guides', es: 'Guías de Voz de Marca' },
      desc: { en: 'Comprehensive documentation of tone, vocabulary, personality, messaging pillars, and usage guidelines', es: 'Documentación completa de tono, vocabulario, personalidad, pilares de mensajería y guías de uso' }
    },
    {
      icon: '⚡',
      title: { en: 'Taglines & Slogans', es: 'Taglines y Eslóganes' },
      desc: { en: 'Memorable brand statements that capture your value proposition in one powerful line', es: 'Declaraciones de marca memorables que capturan tu propuesta de valor en una línea poderosa' }
    },
    {
      icon: '📱',
      title: { en: 'Social Captions', es: 'Captions para Redes Sociales' },
      desc: { en: 'Instagram, Facebook, LinkedIn, TikTok captions that match platform tone and audience expectations', es: 'Captions de Instagram, Facebook, LinkedIn, TikTok que coinciden con el tono de la plataforma y las expectativas de la audiencia' }
    },
    {
      icon: '📑',
      title: { en: 'Sales Collateral', es: 'Materiales de Venta' },
      desc: { en: 'One-pagers, case studies, presentations, and pitch decks that tell your story compellingly', es: 'One-pagers, casos de estudio, presentaciones y pitch decks que cuentan tu historia de manera convincente' }
    },
  ];

  const aiSection = [
    {
      title: { en: 'AI Generates', es: 'La IA Genera' },
      items: [
        { en: 'Multiple copy options in seconds', es: 'Múltiples opciones de texto en segundos' },
        { en: 'Content at scale across all channels', es: 'Contenido a escala en todos los canales' },
        { en: 'Consistent formatting and structure', es: 'Formato y estructura consistentes' },
        { en: 'Rapid iterations and A/B variants', es: 'Iteraciones rápidas y variantes A/B' },
      ]
    },
    {
      title: { en: 'Human Strategy Ensures', es: 'La Estrategia Humana Asegura' },
      items: [
        { en: 'Your unique brand voice comes through', es: 'Tu voz de marca única brilla' },
        { en: 'Copy speaks to your specific audience', es: 'El texto habla a tu audiencia específica' },
        { en: 'Messaging aligns with business goals', es: 'La mensajería se alinea con objetivos de negocio' },
        { en: 'Every piece drives the behavior you want', es: 'Cada pieza impulsa el comportamiento que deseas' },
      ]
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Brand Voice Audit', es: 'Auditoría de Voz de Marca' },
      desc: {
        en: 'We interview your team, analyze your current copy, study your competitors, and identify what makes your brand voice unique. What do you want to sound like? Who\'s listening? What moves them?',
        es: 'Entrevistamos a tu equipo, analizamos tu copy actual, estudiamos a tus competidores e identificamos qué hace tu voz única. ¿Cómo quieres sonar? ¿Quién está escuchando? ¿Qué los mueve?'
      }
    },
    {
      num: '02',
      title: { en: 'Voice System Configuration', es: 'Configuración del Sistema de Voz' },
      desc: {
        en: 'We document your brand voice in a comprehensive guide covering tone, vocabulary, personality traits, messaging pillars, and practical examples. Then we configure our AI system to learn and replicate that voice consistently across all platforms.',
        es: 'Documentamos tu voz de marca en una guía completa que cubre tono, vocabulario, rasgos de personalidad, pilares de mensajería y ejemplos prácticos. Luego configuramos nuestro sistema de IA para aprender y replicar esa voz consistentemente en todas las plataformas.'
      }
    },
    {
      num: '03',
      title: { en: 'Content Generation', es: 'Generación de Contenido' },
      desc: {
        en: 'We generate copy for websites, ads, emails, social captions, product descriptions, and sales collateral. AI produces the first drafts fast. Our copywriters refine them to perfection. Everything is ready to review.',
        es: 'Generamos texto para sitios web, anuncios, emails, captions de redes sociales, descripciones de productos y materiales de venta. La IA produce los borradores rápidamente. Nuestros copywriters los refinan a la perfección. Todo está listo para revisar.'
      }
    },
    {
      num: '04',
      title: { en: 'Quality & Consistency Review', es: 'Revisión de Calidad y Consistencia' },
      desc: {
        en: 'You review everything. We incorporate your feedback. We audit all copy to ensure consistent voice across channels. Once approved, content is ready to deploy across your network.',
        es: 'Revisas todo. Incorporamos tu feedback. Auditamos todo el texto para asegurar voz consistente en todos los canales. Una vez aprobado, el contenido está listo para desplegarse en tu red.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'How do you maintain brand voice across 30 locations?', es: '¿Cómo mantienes la voz de marca en 30 ubicaciones?' },
      a: {
        en: 'One brand voice guide + one configured AI system = consistent copy everywhere. Each location doesn\'t have to write their own copy or figure out their own messaging. Everything comes from a centralized system trained on your voice. A restaurant group gets website copy, email campaigns, menu descriptions, and social media captions that all sound like the same brand, even when they\'re written by different people in different locations.',
        es: 'Una guía de voz de marca + un sistema de IA configurado = textos consistentes en todas partes. Cada ubicación no tiene que escribir su propio copy o descubrir su propia mensajería. Todo proviene de un sistema centralizado entrenado en tu voz. Un grupo de restaurantes obtiene textos de sitio web, campañas de email, descripciones de menú y captions de redes sociales que todas suenan como la misma marca, incluso cuando son escritas por diferentes personas en diferentes ubicaciones.'
      }
    },
    {
      q: { en: 'Can AI really write good copy?', es: '¿La IA realmente puede escribir buenos textos?' },
      a: {
        en: 'AI generates good first drafts and handles scale well. But great copy needs human strategy: understanding your audience, knowing what message moves them, recognizing when a softer tone works better than aggressive selling. We use AI for speed and consistency, but humans for strategy. You get the best of both.',
        es: 'La IA genera buenos borradores iniciales y maneja bien la escala. Pero los buenos textos necesitan estrategia humana: entender tu audiencia, saber qué mensaje los mueve, reconocer cuándo un tono más suave funciona mejor que la venta agresiva. Usamos IA para velocidad y consistencia, pero humanos para estrategia. Obtienes lo mejor de ambos.'
      }
    },
    {
      q: { en: 'Do we get to review before publishing?', es: '¿Podemos revisar antes de publicar?' },
      a: {
        en: 'Always. Nothing goes live without your approval. We deliver drafts, you review, we incorporate feedback, you approve. We can also set up approval workflows so regional managers sign off on their location\'s copy before it publishes.',
        es: 'Siempre. Nada se publica sin tu aprobación. Entregamos borradores, revisas, incorporamos feedback, apruebas. También podemos configurar flujos de aprobación para que los gerentes regionales autoricen el copy de su ubicación antes de que se publique.'
      }
    },
    {
      q: { en: 'What about different languages? Can you handle bilingual copy?', es: '¿Qué pasa con diferentes idiomas? ¿Puedes manejar textos bilingües?' },
      a: {
        en: 'Yes. We develop brand voice guides in English and Spanish simultaneously — not translations but native voice in each language. Your tone, vocabulary, and personality come through equally in both. Essential for businesses in Mexico, the Southwest US, and border markets.',
        es: 'Sí. Desarrollamos guías de voz de marca en inglés y español simultáneamente — no traducciones sino voz nativa en cada idioma. Tu tono, vocabulario y personalidad brillan por igual en ambos. Esencial para negocios en México, el suroeste de EE.UU. y mercados fronterizos.'
      }
    },
    {
      q: { en: 'How does this connect to our other marketing systems?', es: '¿Cómo se conecta esto con otros sistemas de marketing?' },
      a: {
        en: 'Your brand voice is the foundation of everything. It powers website copy (Websites), social media captions (Social Media), email campaigns (AI Content Engine), ad copy (Ads), and presentation decks (Slides). One voice, multiple channels. That consistency builds trust and recognition. In Network Systems, you\'re not managing voice separately in each location — it\'s centralized and deployed everywhere.',
        es: 'Tu voz de marca es la base de todo. Potencia textos de sitio web (Websites), captions de redes sociales (Social Media), campañas de email (AI Content Engine), copy de anuncios (Ads) y presentaciones (Slides). Una voz, múltiples canales. Esa consistencia construye confianza y reconocimiento. En Network Systems, no gestionas la voz por separado en cada ubicación — está centralizada y desplegada en todas partes.'
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
                { label: { en: 'Copywriting', es: 'Copywriting' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'COPYWRITING & BRAND MESSAGING', es: 'COPYWRITING Y MENSAJERÍA DE MARCA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'One Brand Voice, Every Place', es: 'Una Voz de Marca, Todos Lados' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Brand strategy, copywriting, and AI-powered content generation. Website copy, emails, ads, social captions, product descriptions, sales collateral. One consistent voice deployed everywhere.',
              es: 'Estrategia de marca, copywriting y generación de contenido con IA. Textos de sitio web, emails, anuncios, captions de redes sociales, descripciones de productos, materiales de venta. Una voz consistente desplegada en todas partes.'
            })}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-untold-black px-8 py-3 sm:px-10 sm:py-4 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
            >
              {t({ en: 'Start Copywriting', es: 'Comenzar Copywriting' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Write ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'CONTENT TYPES', es: 'TIPOS DE CONTENIDO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'Everything Your Brand Says', es: 'Todo Lo Que Tu Marca Dice' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'One brand voice, consistent everywhere. From websites to emails to social to sales collateral — all sounding like you.',
              es: 'Una voz de marca consistente en todas partes. Desde sitios web a emails a redes sociales a materiales de venta — todos sonando como tú.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, idx) => (
              <div key={idx} className="bg-white border border-untold-border p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(type.title)}
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed">
                  {t(type.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How AI Changes Copy ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HUMAN STRATEGY + AI SPEED', es: 'ESTRATEGIA HUMANA + VELOCIDAD DE IA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'How We Generate Copy at Scale', es: 'Cómo Generamos Copy a Escala' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'AI handles the heavy lifting. Human strategy ensures it sounds like you and moves your audience.',
              es: 'La IA maneja el trabajo pesado. La estrategia humana asegura que suene como tú y mueva a tu audiencia.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {aiSection.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-6 text-untold-orange">
                  {t(section.title)}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-untold-orange text-xl mt-0.5">✓</span>
                      <span className="font-serif text-untold-gray">
                        {t(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-untold-black text-white p-8 sm:p-10 border border-untold-orange/30">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-untold-orange font-bold mb-4">
              {t({ en: 'IN NETWORK SYSTEMS', es: 'EN NETWORK SYSTEMS' })}
            </p>
            <p className="font-serif text-lg italic leading-relaxed">
              {t({
                en: 'Every location in your network gets copy that sounds like your brand — consistent tone, vocabulary, and personality across websites, emails, social media, ads, and sales materials. No location has to write it. No inconsistency. One voice, 30+ locations.',
                es: 'Cada ubicación en tu red obtiene copy que suena como tu marca — tono consistente, vocabulario y personalidad en todos los sitios web, emails, redes sociales, anuncios y materiales de venta. Ninguna ubicación tiene que escribirlo. Sin inconsistencias. Una voz, 30+ ubicaciones.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW WE WORK', es: 'CÓMO TRABAJAMOS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The Copywriting Process', es: 'El Proceso de Copywriting' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-untold-border p-6 sm:p-8">
                <div className="font-mono text-4xl font-black text-untold-orange mb-4">{step.num}</div>
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-4">
                  {t(step.title)}
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About Copywriting', es: 'Preguntas Sobre Copywriting' })}
          </h2>

          <div className="max-w-3xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-untold-border">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left py-6 sm:py-8 flex items-start justify-between gap-6 group"
                >
                  <span className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </span>
                  <span className={`text-untold-orange text-2xl shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="pb-8 pr-0 sm:pr-12">
                    <p className="text-base font-serif text-untold-gray leading-relaxed">
                      {t(faq.a)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Connector ── */}
      <NetworkConnector
        capability={{ en: 'Copywriting & Brand Messaging', es: 'Copywriting y Mensajería de Marca' }}
        networkDescription={{
          en: 'For business networks, one brand voice deployed everywhere. Your AI system learns your tone, vocabulary, and personality, then generates copy across websites, emails, ads, social media, product descriptions, and sales collateral. Every location sounds like your brand. No duplication of effort, perfect consistency.',
          es: 'Para redes de negocios, una voz de marca desplegada en todas partes. Tu sistema de IA aprende tu tono, vocabulario y personalidad, luego genera copy en sitios web, emails, anuncios, redes sociales, descripciones de productos y materiales de venta. Cada ubicación suena como tu marca. Sin duplicación de esfuerzos, consistencia perfecta.',
        }}
        relatedCapabilities={[
          { name: { en: 'Websites', es: 'Sitios Web' }, path: '/websites' },
          { name: { en: 'AI Content Engine', es: 'Motor de Contenido IA' }, path: '/ai-content' },
          { name: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto">
          <QuickLeadForm />
        </div>
      </section>

    </div>
  );
};

export default Copywriting;
