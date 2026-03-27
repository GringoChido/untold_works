import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const MobileApps: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Mobile Applications — Customer & Internal Apps for Business Networks | Untold.works',
      es: 'Aplicaciones Móviles — Apps para Clientes e Internas para Redes de Negocios | Untold.works'
    },
    {
      en: 'Deploy customer-facing and internal mobile apps across your entire network. Product catalogs, sales floor tools, management dashboards. One app framework, every location.',
      es: 'Despliega aplicaciones móviles para clientes e internas en toda tu red. Catálogos de productos, herramientas de piso de ventas, dashboards de gestión. Un marco de app, cada ubicación.'
    },
    {
      path: '/mobile-apps',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Mobile Applications — Untold.works',
          description: 'Customer-facing apps, sales floor tools, and management applications for business networks. iOS and Android. One app framework deployed across every location.',
          url: 'https://untold.works/mobile-apps',
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
          serviceType: ['Mobile App Development', 'iOS Apps', 'Android Apps', 'Enterprise Mobile'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Do you build for iOS and Android?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We build for both iOS and Android using cross-platform frameworks (React Native) or native development depending on your requirements. Your customers and teams can access the app on whatever device they use.'
              }
            },
            {
              '@type': 'Question',
              name: 'Does each location get their own app?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'It\'s one app with location-based customization. Locations see their own inventory, customers, KPIs, and local settings. This keeps deployment and updates simple while giving each location a tailored experience.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can you customize the app for different user groups?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We build role-based access — customers see product catalogs, field teams see inventory and customer profiles, managers see analytics dashboards. All within one app.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const appCategories = [
    {
      group: { en: 'CUSTOMER-FACING APPS', es: 'APPS PARA CLIENTES' },
      items: [
        { en: 'Product catalogs and browsing', es: 'Catálogos de productos y navegación' },
        { en: 'Store locators with directions', es: 'Localizadores de tiendas con direcciones' },
        { en: 'Loyalty programs and rewards', es: 'Programas de lealtad y recompensas' },
        { en: 'Appointment booking and scheduling', es: 'Reserva y programación de citas' },
      ]
    },
    {
      group: { en: 'SALES FLOOR TOOLS', es: 'HERRAMIENTAS DE PISO DE VENTAS' },
      items: [
        { en: 'Mobile product configurators', es: 'Configuradores de productos móviles' },
        { en: 'Real-time quote builders', es: 'Generadores de cotizaciones en tiempo real' },
        { en: 'Inventory lookup and availability', es: 'Búsqueda de inventario y disponibilidad' },
        { en: 'Customer profiles and history', es: 'Perfiles de clientes e historial' },
      ]
    },
    {
      group: { en: 'MANAGEMENT & OPERATIONS', es: 'GESTIÓN Y OPERACIONES' },
      items: [
        { en: 'Network performance dashboards', es: 'Dashboards de rendimiento de red' },
        { en: 'Location monitoring and KPIs', es: 'Monitoreo de ubicaciones y KPIs' },
        { en: 'Team communication and alerts', es: 'Comunicación de equipo y alertas' },
        { en: 'Real-time reporting and analytics', es: 'Reportes y analítica en tiempo real' },
      ]
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Requirements & UX Design', es: 'Requisitos y Diseño UX' },
      desc: {
        en: 'Understand your network needs, user flows, and business requirements. We design custom interfaces for different user groups — customers, sales teams, and managers.',
        es: 'Comprendemos tus necesidades de red, flujos de usuario y requisitos comerciales. Diseñamos interfaces personalizadas para diferentes grupos — clientes, equipos de ventas y gerentes.'
      }
    },
    {
      num: '02',
      title: { en: 'Development & Brand Integration', es: 'Desarrollo e Integración de Marca' },
      desc: {
        en: 'Build iOS and Android apps using your brand guidelines. Integrate with your existing systems and data infrastructure.',
        es: 'Construimos apps iOS y Android usando tus lineamientos de marca. Integración con tus sistemas existentes e infraestructura de datos.'
      }
    },
    {
      num: '03',
      title: { en: 'Beta Testing & Rollout', es: 'Pruebas Beta y Lanzamiento' },
      desc: {
        en: 'Test with pilot locations, gather feedback, refine the experience. Then roll out across your entire network.',
        es: 'Pruebas con ubicaciones piloto, recopilamos feedback, refinamos la experiencia. Luego desplegamos en toda tu red.'
      }
    },
    {
      num: '04',
      title: { en: 'Continuous Feature Updates', es: 'Actualizaciones Continuas' },
      desc: {
        en: 'Push new features and improvements to all locations simultaneously. Gather usage data to optimize performance.',
        es: 'Publica nuevas características y mejoras en todas las ubicaciones simultáneamente. Recopila datos de uso para optimizar rendimiento.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'iOS and Android, or just one platform?', es: '¿iOS y Android, o solo una plataforma?' },
      a: {
        en: 'We build for both iOS and Android using cross-platform frameworks (React Native) or native development depending on your requirements. Your customers and teams can access the app on whatever device they use.',
        es: 'Construimos para iOS y Android usando marcos multiplataforma (React Native) o desarrollo nativo según tus requisitos. Tus clientes y equipos pueden acceder a la app en cualquier dispositivo que usen.'
      }
    },
    {
      q: { en: 'Does each location get their own app?', es: '¿Cada ubicación obtiene su propia app?' },
      a: {
        en: 'It\'s one app with location-based customization. Locations see their own inventory, customers, KPIs, and local settings. This keeps deployment and updates simple while giving each location a tailored experience.',
        es: 'Es una app con personalización basada en ubicación. Las ubicaciones ven su propio inventario, clientes, KPIs y configuraciones locales. Esto mantiene el despliegue y las actualizaciones simples dando a cada ubicación una experiencia personalizada.'
      }
    },
    {
      q: { en: 'How are updates handled across the network?', es: '¿Cómo se manejan las actualizaciones en toda la red?' },
      a: {
        en: 'Updates are managed through both app store releases (for major features) and in-app content updates. You control the rollout schedule, and all locations receive updates simultaneously, ensuring network-wide consistency.',
        es: 'Las actualizaciones se administran mediante lanzamientos en tienda de apps (para características principales) y actualizaciones de contenido en la app. Controlas el cronograma de lanzamiento y todas las ubicaciones reciben actualizaciones simultáneamente.'
      }
    },
    {
      q: { en: 'What about offline functionality?', es: '¿Qué hay de la funcionalidad sin conexión?' },
      a: {
        en: 'We build offline capabilities so field teams and customers can use the app without constant connectivity. Data syncs automatically when the connection returns — no lost information.',
        es: 'Construimos capacidades sin conexión para que los equipos de campo y clientes usen la app sin conectividad constante. Los datos se sincronizan automáticamente cuando la conexión regresa — sin información perdida.'
      }
    },
    {
      q: { en: 'How does the app integrate with our existing systems?', es: '¿Cómo se integra la app con nuestros sistemas existentes?' },
      a: {
        en: 'We connect to your ERP, inventory management, CRM, or other backend systems via APIs. Real-time data flows to the app so your team always has current information.',
        es: 'Conectamos a tu ERP, gestión de inventario, CRM u otros sistemas backend a través de APIs. Los datos en tiempo real fluyen a la app para que tu equipo siempre tenga información actual.'
      }
    },
    {
      q: { en: 'Can you customize for different user groups?', es: '¿Pueden personalizar para diferentes grupos de usuarios?' },
      a: {
        en: 'Yes. We build role-based access — customers see product catalogs, field teams see inventory and customer profiles, managers see analytics dashboards. All within one app.',
        es: 'Sí. Construimos acceso basado en roles — los clientes ven catálogos de productos, los equipos de campo ven inventario y perfiles de clientes, los gerentes ven dashboards de analítica. Todo dentro de una app.'
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
                { label: { en: 'Mobile Applications', es: 'Aplicaciones Móviles' } },
              ]}
              variant="dark"
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'MOBILE APPLICATIONS', es: 'APLICACIONES MÓVILES' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Your Network In Every Pocket', es: 'Tu Red En Cada Bolsillo' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Customer-facing apps, sales floor tools, management dashboards. One app framework deployed across every location with unlimited customization and seamless network-wide updates.',
              es: 'Apps para clientes, herramientas de piso de ventas, dashboards de gestión. Un marco de app desplegado en cada ubicación con personalización ilimitada y actualizaciones sincronizadas en toda la red.'
            })}
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-untold-black px-8 py-3 sm:px-10 sm:py-4 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
            >
              {t({ en: 'Start Your Mobile Strategy', es: 'Comienza Tu Estrategia Móvil' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'APP CATEGORIES', es: 'CATEGORÍAS DE APPS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'What We Build', es: 'Lo Que Construimos' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'Scalable mobile applications designed for your entire network — from customer engagement to internal operations.',
              es: 'Aplicaciones móviles escalables diseñadas para toda tu red — desde engagement del cliente hasta operaciones internas.'
            })}
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-untold-border">
            {appCategories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-untold-orange font-bold mb-5 pb-4 border-b border-untold-border">
                  {t(cat.group)}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start space-x-2">
                      <span className="text-untold-orange mt-1 text-xs shrink-0">+</span>
                      <span className="text-sm text-untold-gray leading-snug">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Scale ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'AT NETWORK SCALE', es: 'A ESCALA DE RED' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6">
            {t({ en: 'One Framework. Every Location.', es: 'Un Marco. Cada Ubicación.' })}
          </h2>
          <p className="text-xl font-serif italic text-white/60 leading-relaxed max-w-3xl mb-8">
            {t({
              en: 'Headquarters maintains brand consistency and core features while each location gets a customized view of inventory, customers, and local data. Single deployment. Infinite customization. Every location empowered.',
              es: 'La sede mantiene la coherencia de marca y características principales mientras que cada ubicación obtiene una vista personalizada del inventario, clientes y datos locales. Un despliegue. Personalización infinita. Cada ubicación empoderada.'
            })}
          </p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW WE WORK', es: 'CÓMO TRABAJAMOS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'The Development Process', es: 'El Proceso de Desarrollo' })}
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
            {t({ en: 'Questions About Mobile Apps', es: 'Preguntas Sobre Apps Móviles' })}
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
        capability={{ en: 'Mobile Applications', es: 'Aplicaciones Móviles' }}
        networkDescription={{
          en: 'Deploy powerful mobile tools across every location in your network. From customer engagement to field operations to management dashboards — a consistent digital experience that scales with your business.',
          es: 'Despliega herramientas móviles poderosas en cada ubicación de tu red. Desde engagement del cliente hasta operaciones de campo hasta dashboards de gestión — una experiencia digital consistente que escala con tu negocio.',
        }}
        relatedCapabilities={[
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
          { name: { en: 'Sales Enablement', es: 'Habilitación de Ventas' }, path: '/sales-enablement' },
          { name: { en: 'Websites', es: 'Sitios Web' }, path: '/websites' },
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

export default MobileApps;
