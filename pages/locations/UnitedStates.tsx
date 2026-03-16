import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';

const UnitedStates: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Bilingual Web Design & AI Automation for US Businesses | Untold.works',
      es: 'Diseño Web Bilingüe y Automatización con IA para Empresas de EE.UU. | Untold.works'
    },
    {
      en: 'Nearshore web design and AI automation for US businesses serving Hispanic markets. Bilingual websites, WhatsApp automation, and revenue systems for law firms, healthcare, restaurants, and retail. Built by a Mexico-based team.',
      es: 'Diseño web nearshore y automatización con IA para empresas de EE.UU. que sirven mercados hispanohablantes. Sitios web bilingües, automatización de WhatsApp y sistemas de ingresos para despachos, salud, restaurantes y retail.'
    },
    {
      path: '/united-states',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Untold.works — United States',
          description: 'Nearshore bilingual web design and AI automation for US businesses serving Hispanic markets. Law firms, healthcare, restaurants, and retail.',
          url: 'https://untold.works/united-states',
          areaServed: { '@type': 'Country', name: 'United States' },
          serviceType: ['Bilingual Web Design', 'Nearshore Development', 'WhatsApp Automation', 'Hispanic Market Websites'],
          knowsLanguage: ['en', 'es'],
          priceRange: '$$$',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is nearshore web development?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nearshore web development means working with a team in a neighboring country — same timezone, similar culture, lower costs. Untold.works is based in Mexico (Central Time) and builds bilingual websites and AI platforms for US businesses at 40% lower cost than domestic agencies, with zero communication friction.'
              }
            },
            {
              '@type': 'Question',
              name: 'How do I build a bilingual website for Hispanic customers?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A true bilingual website needs native content in both languages — not auto-translation. Untold.works designs in English and Spanish simultaneously, with separate SEO strategies for each language, culturally appropriate messaging, and proper hreflang implementation so Google serves the right version to the right audience.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can I use WhatsApp for business in the United States?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. WhatsApp has over 100 million users in the United States, concentrated among Hispanic communities. Untold.works builds WhatsApp Business API integrations for US businesses — automated appointment reminders, bilingual customer support, promotional campaigns, and lead nurturing. It is the preferred communication channel for reaching Spanish-speaking customers in the US.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const services = [
    {
      title: { en: 'Bilingual Law Firm Platforms', es: 'Plataformas Bilingües para Despachos de Abogados' },
      desc: {
        en: 'Client intake in English and Spanish, bilingual case management, appointment scheduling, and lead capture for law firms serving Hispanic clients.',
        es: 'Captación de clientes en inglés y español, gestión de casos bilingüe, agenda de citas y captura de leads para despachos que sirven clientes hispanohablantes.'
      }
    },
    {
      title: { en: 'Healthcare Provider Websites', es: 'Sitios Web para Proveedores de Salud' },
      desc: {
        en: 'Bilingual patient portals, appointment booking, medical content, and HIPAA-compliant systems for healthcare providers and clinics serving bilingual communities.',
        es: 'Portales de pacientes bilingües, agenda de citas, contenido médico y sistemas conformes con HIPAA para proveedores de salud que sirven comunidades bilingües.'
      }
    },
    {
      title: { en: 'Restaurant & Hospitality Platforms', es: 'Plataformas para Restaurantes y Hospitalidad' },
      desc: {
        en: 'Bilingual menus, reservation systems, WhatsApp ordering, delivery integration, and marketing automation for restaurants and hospitality brands.',
        es: 'Menús bilingües, sistemas de reserva, pedidos por WhatsApp, integración de entregas y automatización de marketing para restaurantes y marcas hoteleras.'
      }
    },
    {
      title: { en: 'Retail & E-Commerce in Two Languages', es: 'Retail y E-Commerce en Dos Idiomas' },
      desc: {
        en: 'Bilingual product catalogs, payment processing for US and Mexico, inventory management, and growth automation for retail chains and online stores.',
        es: 'Catálogos bilingües, procesamiento de pagos para EE.UU. y México, gestión de inventario y automatización de crecimiento para cadenas y tiendas en línea.'
      }
    },
    {
      title: { en: 'WhatsApp & Email Automation', es: 'Automatización de WhatsApp y Email' },
      desc: {
        en: 'Bilingual chatbots for customer service, appointment reminders, promotional campaigns, and lead nurturing in both English and Spanish.',
        es: 'Chatbots bilingües para atención al cliente, recordatorios de citas, campañas promocionales y nutrición de leads en ambos idiomas.'
      }
    },
    {
      title: { en: 'Revenue & Growth Systems', es: 'Sistemas de Ingresos y Crecimiento' },
      desc: {
        en: 'CRM dashboards, pipeline management, revenue tracking, and AI analytics for growing US teams serving bilingual markets.',
        es: 'Dashboards CRM, gestión de pipeline, seguimiento de ingresos y análisis con IA para equipos estadounidenses que sirven mercados bilingües.'
      }
    }
  ];

  const whySection = [
    {
      title: { en: '62M+ Spanish Speakers in the US', es: '62M+ Hispanohablantes en EE.UU.' },
      desc: {
        en: 'The US Hispanic market is worth $1.3 trillion annually. Spanish speakers are 18% of the population — and growing. Your business can\'t ignore this market. They can\'t find you in English alone.',
        es: 'El mercado hispano estadounidense vale $1.3 billones al año. Los hispanohablantes son el 18% de la población — y creciendo. Tu negocio no puede ignorar este mercado.'
      }
    },
    {
      title: { en: 'Nearshore Advantage', es: 'Ventaja Nearshore' },
      desc: {
        en: 'Same timezone (Central Time), minimal language barrier, cultural fluency, and 40% lower costs than US agencies. You get Silicon Valley quality from Mexico — zero communication friction.',
        es: 'Misma zona horaria (Central), barrera de lenguaje mínima, fluidez cultural y 40% menos costo que agencias estadounidenses. Obtienes calidad de Silicon Valley desde México.'
      }
    },
    {
      title: { en: 'True Bilingual Expertise', es: 'Verdadera Experiencia Bilingüe' },
      desc: {
        en: 'We\'re not English speakers who translate. We\'re bilingual natives who understand both markets, both search behaviors, both cultural nuances. Your website won\'t sound awkward.',
        es: 'No somos angloparlantes que traducen. Somos nativos bilingües que entendemos ambos mercados, comportamientos de búsqueda y matices culturales. Tu sitio web no sonará incómodo.'
      }
    },
    {
      title: { en: 'Legal & Healthcare Compliance', es: 'Cumplimiento Legal y de Salud' },
      desc: {
        en: 'We build bilingual systems that meet US regulatory requirements — HIPAA for healthcare, compliance for legal services, FDA requirements, and accessibility standards.',
        es: 'Construimos sistemas bilingües que cumplen con requisitos regulatorios estadounidenses — HIPAA, cumplimiento legal, requisitos de FDA y estándares de accesibilidad.'
      }
    }
  ];

  const caseStudies = [
    { id: 'spotify-whatsapp-publishing', label: { en: 'Publishing + WhatsApp', es: 'Publicación + WhatsApp' } },
    { id: 'black-radio-experience', label: { en: 'Media Platform', es: 'Plataforma de Medios' } },
    { id: 'billiard-factory-retail-architecture', label: { en: 'Bilingual Retail', es: 'Retail Bilingüe' } }
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
                { label: { en: 'Locations', es: 'Ubicaciones' }, path: '/locations' },
                { label: { en: 'United States', es: 'Estados Unidos' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'UNITED STATES', es: 'ESTADOS UNIDOS' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Bilingual Web Platforms for US Markets', es: 'Plataformas Web Bilingües para Mercados de EE.UU.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Nearshore web design and AI automation for law firms, healthcare, restaurants, and retail chains serving the 62M+ Spanish-speaking Americans. Built by a Mexico-based team with zero language barriers.',
              es: 'Diseño web nearshore y automatización con IA para despachos, salud, restaurantes y cadenas minoristas que sirven a los 62M+ hispanohablantes estadounidenses. Construido por un equipo ubicado en México.'
            })}
          </p>
        </div>
      </section>

      {/* ── Services for US ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'BUILT FOR THE US', es: 'CONSTRUIDO PARA EE.UU.' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Services for Bilingual Markets', es: 'Servicios para Mercados Bilingües' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 sm:p-8 hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(item.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why US ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHY NEARSHORE', es: 'POR QUÉ NEARSHORE' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The Nearshore Advantage', es: 'La Ventaja del Nearshore' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {whySection.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-untold-beige p-6 sm:p-8"
              >
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3">
                  {t(item.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'PORTFOLIO', es: 'PORTAFOLIO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Recent Work', es: 'Trabajo Reciente' })}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                to={`/portfolio/${study.id}`}
                className="border border-untold-border bg-white p-6 sm:p-8 hover:border-untold-orange hover:shadow-lg transition-all"
              >
                <p className="font-sans font-black text-xl uppercase tracking-tighter text-untold-orange">
                  {t(study.label)}
                </p>
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
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Bilingual Web Design for the US', es: 'Diseño Web Bilingüe para EE.UU.' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'What is nearshore web development?', es: '¿Qué es desarrollo web nearshore?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Nearshore means working with a team in a neighboring country — same timezone, similar culture, lower costs. We are in Mexico (Central Time) and build bilingual websites and AI platforms for US businesses at 40% lower cost than domestic agencies.',
                  es: 'Nearshore significa trabajar con un equipo en un país vecino — misma zona horaria, cultura similar, costos más bajos. Estamos en México (hora Central) y construimos sitios web bilingües y plataformas de IA para empresas de EE.UU. a 40% menos costo.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'How do I reach Hispanic customers online?', es: '¿Cómo alcanzo clientes hispanos en línea?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'A true bilingual website needs native content in both languages — not auto-translation. We design in English and Spanish simultaneously, with separate SEO strategies for each language and culturally appropriate messaging. WhatsApp is also the preferred channel for reaching Spanish-speaking customers in the US.',
                  es: 'Un sitio web verdaderamente bilingüe necesita contenido nativo en ambos idiomas — no traducción automática. Diseñamos en inglés y español simultáneamente, con estrategias de SEO separadas para cada idioma y mensajería culturalmente apropiada.'
                })}
              </p>
            </div>

            <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
              <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                {t({ en: 'Can I use WhatsApp for business in the US?', es: '¿Puedo usar WhatsApp para negocios en EE.UU.?' })}
              </h3>
              <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                {t({
                  en: 'Yes. WhatsApp has over 100 million users in the US, concentrated among Hispanic communities. We build WhatsApp Business API integrations — automated appointment reminders, bilingual support, promotional campaigns, and lead nurturing.',
                  es: 'Sí. WhatsApp tiene más de 100 millones de usuarios en EE.UU., concentrados en comunidades hispanas. Construimos integraciones de WhatsApp Business API — recordatorios de citas, soporte bilingüe, campañas promocionales y nutrición de leads.'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'GET STARTED', es: 'COMENZAR' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Tell Us About Your Business', es: 'Cuéntanos Sobre Tu Negocio' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\'ll send you more information about bilingual platforms for your US business serving Hispanic markets.',
              es: 'Completa el formulario y te enviaremos más información sobre plataformas bilingües para tu negocio en EE.UU. que sirve mercados hispanohablantes.'
            })}
          </p>
          <QuickLeadForm pillar="Location - United States" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Reach Hispanic Markets?', es: '¿Listo para Llegar a Mercados Hispanohablantes?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Let\'s build a bilingual platform that captures both markets. Same timezone, native bilingual team, and 40% lower cost than US agencies.',
              es: 'Construyamos una plataforma bilingüe que capture ambos mercados. Misma zona horaria, equipo bilingüe nativo y 40% menos costo que agencias estadounidenses.'
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

export default UnitedStates;
