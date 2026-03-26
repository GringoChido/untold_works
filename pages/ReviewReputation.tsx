import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const ReviewReputation: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Review & Reputation Management — Automated Review Generation | Untold.works',
      es: 'Gestión de Reseñas y Reputación — Generación Automatizada de Reseñas | Untold.works'
    },
    {
      en: 'Automated review generation, cross-platform monitoring, AI-powered response drafting, and reputation scoring across every location in your network. Google, Yelp, and industry platforms.',
      es: 'Generación automatizada de reseñas, monitoreo multiplataforma, redacción de respuestas con IA y puntuación de reputación en cada ubicación de tu red. Google, Yelp y plataformas de la industria.'
    },
    {
      path: '/review-reputation',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Review & Reputation Management — Untold.works',
          description: 'Automated review generation and cross-platform monitoring for business networks. AI-powered response drafting, sentiment analysis, negative review escalation, and location-based reputation scoring.',
          url: 'https://untold.works/review-reputation',
          provider: {
            '@type': 'Organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['Reputation Management', 'Review Generation', 'Online Reviews', 'Brand Monitoring'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do automated review requests work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We integrate with your systems to capture customer interactions. At the optimal moment (usually 24-48 hours post-transaction), an invitation is sent via email or SMS. The customer clicks a link to your review page on Google, Yelp, or your website. No manual intervention needed. Response rates typically increase 3-5x with automated timing.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do you handle negative reviews?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Negative reviews trigger immediate escalation alerts. The system analyzes the sentiment and issue type, then suggests a response template tailored to address the complaint professionally. Your team can respond quickly, offer solutions, and demonstrate responsiveness.'
              }
            },
            {
              '@type': 'Question',
              name: 'How does this help SEO?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Google\'s algorithm heavily weights review count, recency, and sentiment when ranking local search results. More reviews = more fresh signals. Our automated system keeps your review stream active and visible, which directly improves your local SEO.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const capabilities = [
    {
      title: { en: 'Automated Review Request Flows', es: 'Flujos Automáticos de Solicitud de Reseñas' },
      desc: { en: 'Post-purchase and post-service review invitations sent at optimal times to maximize engagement and authentic feedback.', es: 'Invitaciones post-compra y post-servicio enviadas en el momento óptimo para maximizar el engagement y la retroalimentación auténtica.' },
    },
    {
      title: { en: 'Cross-Platform Monitoring', es: 'Monitoreo Multiplataforma' },
      desc: { en: 'Real-time tracking of reviews across Google, Yelp, industry-specific platforms, and your website.', es: 'Seguimiento en tiempo real de reseñas en Google, Yelp, plataformas específicas de la industria y tu sitio web.' },
    },
    {
      title: { en: 'AI-Powered Response Drafting', es: 'Redacción de Respuestas con IA' },
      desc: { en: 'Intelligent suggestions for professional, on-brand responses to every review — positive and negative.', es: 'Sugerencias inteligentes para respuestas profesionales y coherentes con tu marca a cada reseña — positiva o negativa.' },
    },
    {
      title: { en: 'Sentiment Analysis', es: 'Análisis de Sentimientos' },
      desc: { en: 'Automated categorization of reviews by sentiment, theme, and actionable insights for operations improvement.', es: 'Categorización automática de reseñas por sentimiento, tema e insights accionables para mejorar operaciones.' },
    },
    {
      title: { en: 'Negative Review Escalation', es: 'Escalamiento de Reseñas Negativas' },
      desc: { en: 'Immediate alerts and priority handling when critical reviews appear, with guided response templates.', es: 'Alertas inmediatas y manejo prioritario cuando aparecen reseñas críticas, con plantillas de respuesta guiada.' },
    },
    {
      title: { en: 'Review Widget Integration', es: 'Integración de Widget de Reseñas' },
      desc: { en: 'Embed your best reviews directly on your website to build trust and improve conversion rates.', es: 'Incrusta tus mejores reseñas directamente en tu sitio web para generar confianza y mejorar tasas de conversión.' },
    },
    {
      title: { en: 'Google Business Profile Optimization', es: 'Optimización de Google Business Profile' },
      desc: { en: 'Automated updates, photo management, and profile optimization to maximize visibility in local search.', es: 'Actualizaciones automáticas, gestión de fotos y optimización de perfil para maximizar visibilidad en búsqueda local.' },
    },
    {
      title: { en: 'Location-Based Reputation Scoring', es: 'Puntuación de Reputación por Ubicación' },
      desc: { en: 'Individual reputation metrics per location so you can identify underperforming sites and take action.', es: 'Métricas individuales de reputación por ubicación para identificar sitios de bajo rendimiento y tomar medidas.' },
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Reputation Audit', es: 'Auditoría de Reputación' },
      desc: {
        en: 'We analyze your current review landscape across all platforms, identify gaps, and benchmark against competitors.',
        es: 'Analizamos tu panorama actual de reseñas en todas las plataformas, identificamos brechas y comparamos con competidores.'
      }
    },
    {
      num: '02',
      title: { en: 'System Configuration', es: 'Configuración del Sistema' },
      desc: {
        en: 'We set up automated review request flows, configure monitoring across all platforms, and integrate your review widget.',
        es: 'Configuramos flujos automáticos de solicitud de reseñas, monitoreo en todas las plataformas e integración del widget.'
      }
    },
    {
      num: '03',
      title: { en: 'Automation Active', es: 'Automatización Activa' },
      desc: {
        en: 'Review requests go out automatically at optimal times. Monitoring runs 24/7. Your team gets alerts and draft responses.',
        es: 'Las solicitudes de reseñas se envían automáticamente en momentos óptimos. Monitoreo 24/7. Tu equipo recibe alertas y respuestas redactadas.'
      }
    },
    {
      num: '04',
      title: { en: 'Monitoring & Response', es: 'Monitoreo y Respuesta' },
      desc: {
        en: 'Continuous tracking, sentiment analysis, and guided response management. Monthly reputation reports track your progress.',
        es: 'Seguimiento continuo, análisis de sentimientos y gestión de respuestas guiadas. Reportes mensuales de reputación rastrean tu progreso.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'How do automated review requests work?', es: '¿Cómo funcionan las solicitudes automáticas de reseñas?' },
      a: {
        en: 'We integrate with your systems to capture customer interactions — purchases, service completions, appointment finishes. At the optimal moment (usually 24-48 hours post-transaction), an invitation is sent via email or SMS. The customer clicks a link to your review page on Google, Yelp, or your website. No manual intervention needed. Response rates typically increase 3-5x with automated timing.',
        es: 'Nos integramos con tus sistemas para capturar interacciones de clientes — compras, finalizaciones de servicio, citas completadas. En el momento óptimo (generalmente 24-48 horas después de la transacción), se envía una invitación por email o SMS. El cliente hace clic en un enlace a tu página de reseñas en Google, Yelp o tu sitio web. Sin intervención manual. Las tasas de respuesta típicamente aumentan 3-5x con el cronometraje automático.'
      }
    },
    {
      q: { en: 'Can we respond to reviews through the system?', es: '¿Podemos responder reseñas a través del sistema?' },
      a: {
        en: 'Yes. The system drafts professional, on-brand responses for every review — positive or negative. Your team reviews and approves in a centralized dashboard, then the response is posted directly to the platform. This keeps your tone consistent and ensures no reviews go unanswered.',
        es: 'Sí. El sistema redacta respuestas profesionales y coherentes con tu marca para cada reseña — positiva o negativa. Tu equipo revisa y aprueba en un dashboard centralizado, luego la respuesta se publica directamente en la plataforma. Esto mantiene tu tono consistente y asegura que ninguna reseña quede sin respuesta.'
      }
    },
    {
      q: { en: 'How do you handle negative reviews?', es: '¿Cómo manejan las reseñas negativas?' },
      a: {
        en: 'Negative reviews trigger immediate escalation alerts. The system analyzes the sentiment and issue type, then suggests a response template tailored to address the complaint professionally. Your team can respond quickly, offer solutions, and demonstrate responsiveness — which actually improves your overall reputation more than silence would.',
        es: 'Las reseñas negativas disparan alertas de escalamiento inmediato. El sistema analiza el sentimiento y tipo de problema, luego sugiere una plantilla de respuesta adaptada para abordar la queja profesionalmente. Tu equipo puede responder rápidamente, ofrecer soluciones y demostrar capacidad de respuesta — lo que mejora tu reputación general más que el silencio.'
      }
    },
    {
      q: { en: 'Which platforms do you monitor?', es: '¿Qué plataformas monitorean?' },
      a: {
        en: 'We monitor Google, Yelp, Facebook, TripAdvisor, industry-specific platforms relevant to your business, and your own website. The system pulls review data from all channels into one dashboard so you never miss a review.',
        es: 'Monitoreamos Google, Yelp, Facebook, TripAdvisor, plataformas específicas de la industria relevantes a tu negocio, y tu sitio web. El sistema extrae datos de reseñas de todos los canales en un dashboard único para que nunca pierdas una reseña.'
      }
    },
    {
      q: { en: 'How does this help SEO?', es: '¿Cómo esto ayuda al SEO?' },
      a: {
        en: 'Google\'s algorithm heavily weights review count, recency, and sentiment when ranking local search results. More reviews = more fresh signals. Positive sentiment = trust signal. Our automated system keeps your review stream active and visible, which directly improves your local SEO. Plus, reviews on your website create fresh content that search engines index.',
        es: 'El algoritmo de Google pondera mucho la cantidad de reseñas, recencia y sentimiento al clasificar resultados de búsqueda local. Más reseñas = más señales frescas. Sentimiento positivo = señal de confianza. Nuestro sistema automático mantiene tu flujo de reseñas activo y visible, lo que mejora directamente tu SEO local. Además, las reseñas en tu sitio web crean contenido fresco que los motores de búsqueda indexan.'
      }
    },
    {
      q: { en: 'Can you integrate with our existing tools?', es: '¿Pueden integrarse con nuestras herramientas existentes?' },
      a: {
        en: 'Our system integrates with major CRM platforms, booking systems, and point-of-sale solutions. We custom-map your customer data flows to trigger review requests at the right moments. If you use a tool we don\'t yet support, we can build a custom integration.',
        es: 'Nuestro sistema se integra con plataformas CRM principales, sistemas de reserva y soluciones de punto de venta. Mapeamos personalizadamente tus flujos de datos de clientes para disparar solicitudes de reseñas en los momentos correctos. Si usas una herramienta que aún no soportamos, podemos construir una integración personalizada.'
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
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Network Systems', es: 'Network Systems' }, path: '/network-systems' },
                { label: { en: 'Review & Reputation Management', es: 'Gestión de Reseñas y Reputación' } },
              ]}
              variant="dark"
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'REPUTATION MANAGEMENT', es: 'GESTIÓN DE REPUTACIÓN' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Your Network\'s Most Visible Asset', es: 'El Activo Más Visible de Tu Red' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Automated review generation, cross-platform monitoring, and AI-powered response drafting. Keep your reputation strong across every location in your network.',
              es: 'Generación automatizada de reseñas, monitoreo multiplataforma y redacción de respuestas con IA. Mantén tu reputación fuerte en cada ubicación de tu red.'
            })}
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-untold-black px-8 py-3 sm:px-10 sm:py-4 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
            >
              {t({ en: 'Get Started', es: 'Empezar' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Manage ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'CAPABILITIES', es: 'CAPACIDADES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'What We Manage', es: 'Lo Que Gestionamos' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'A complete reputation management system that runs across every location in your network.',
              es: 'Un sistema completo de gestión de reputación que funciona en cada ubicación de tu red.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-untold-border">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-untold-beige p-6 sm:p-8">
                <h3 className="font-sans font-black text-base uppercase tracking-tighter mb-3">
                  {t(cap.title)}
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed">
                  {t(cap.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Network Advantage ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE NETWORK ADVANTAGE', es: 'LA VENTAJA DE LA RED' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-8">
            {t({ en: 'Thirty Locations. One Unified Strategy.', es: 'Treinta Ubicaciones. Una Estrategia Unificada.' })}
          </h2>
          <p className="text-xl font-serif italic text-white/60 leading-relaxed">
            {t({
              en: 'Managing reputation across 30 locations isn\'t just 30 separate challenges — it\'s one unified strategy. A bad review at one location doesn\'t tank your entire network. Instead, your consistent high ratings across all locations signal trust and reliability to Google, your customers, and AI systems. The algorithm notices. Your network compounds.',
              es: 'Gestionar la reputación en 30 ubicaciones no es solo 30 desafíos separados — es una estrategia unificada. Una reseña negativa en una ubicación no destruye toda tu red. En cambio, tus calificaciones altas consistentes en todas las ubicaciones señalan confiabilidad a Google, tus clientes y sistemas de IA. El algoritmo lo nota. Tu red se compone.'
            })}
          </p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The Process', es: 'El Proceso' })}
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
            {t({ en: 'Questions About Reputation Management', es: 'Preguntas Sobre Gestión de Reputación' })}
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
                  <div className="pb-8 pr-12">
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
        capability={{ en: 'Review & Reputation Management', es: 'Gestión de Reseñas y Reputación' }}
        networkDescription={{
          en: 'Manage reputation across every location with unified monitoring, automated review workflows, and AI-powered response guidance. Your network\'s ratings compound — every strong location strengthens the whole.',
          es: 'Gestiona la reputación en cada ubicación con monitoreo unificado, flujos de trabajo automatizados de reseñas y guía de respuesta con IA. Las calificaciones de tu red se componen — cada ubicación fuerte fortalece al todo.',
        }}
        relatedCapabilities={[
          { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, path: '/seo-aeo' },
          { name: { en: 'Hosting & System Operations', es: 'Hosting y Operación del Sistema' }, path: '/hosting' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
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

export default ReviewReputation;
