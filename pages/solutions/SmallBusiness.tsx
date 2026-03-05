import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';

const SmallBusiness: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.smallBusiness.title,
    i18n.seo.smallBusiness.description,
    {
      path: '/solutions/small-business',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Small Business Platforms',
        provider: { '@type': 'Organization', name: 'Untold.works' },
        description: 'AI-powered business platforms for growing teams. Mobile-first websites, AI workflows, bilingual content, SEO optimization, team CRM, and full ownership transfer.',
        areaServed: ['Mexico', 'United States'],
        serviceType: 'Web Development & Business Systems',
      },
    }
  );

  const audiences = [
    {
      title: { en: 'Restaurants & Hospitality', es: 'Restaurantes y Hospitalidad' },
      desc: {
        en: 'Online menus, reservations, team scheduling, and guest management systems.',
        es: 'Menús en línea, reservaciones, programación de equipo y sistemas de gestión de huéspedes.'
      }
    },
    {
      title: { en: 'Retail & E-Commerce', es: 'Retail y Comercio Electr\u00f3nico' },
      desc: {
        en: 'Product catalogs, inventory tracking, POS integration, and online storefronts.',
        es: 'Cat\u00e1logos de productos, seguimiento de inventario, integraci\u00f3n POS y tiendas en l\u00ednea.'
      }
    },
    {
      title: { en: 'Service Companies', es: 'Empresas de Servicios' },
      desc: {
        en: 'Client intake, job scheduling, field operations, and automated follow-ups.',
        es: 'Recepci\u00f3n de clientes, programaci\u00f3n de trabajos, operaciones de campo y seguimientos automatizados.'
      }
    },
    {
      title: { en: 'Property Management', es: 'Administraci\u00f3n de Propiedades' },
      desc: {
        en: 'Tenant portals, maintenance requests, lease tracking, and owner reporting.',
        es: 'Portales de inquilinos, solicitudes de mantenimiento, seguimiento de contratos y reportes a propietarios.'
      }
    },
    {
      title: { en: 'Event Venues', es: 'Espacios para Eventos' },
      desc: {
        en: 'Booking calendars, vendor coordination, client communication, and event CRM.',
        es: 'Calendarios de reservaciones, coordinaci\u00f3n de proveedores, comunicaci\u00f3n con clientes y CRM de eventos.'
      }
    },
    {
      title: { en: 'Multi-Location Businesses', es: 'Negocios Multi-Ubicaci\u00f3n' },
      desc: {
        en: 'Centralized dashboards, location-based reporting, and unified brand systems.',
        es: 'Paneles centralizados, reportes por ubicaci\u00f3n y sistemas de marca unificados.'
      }
    }
  ];

  const packages = [
    {
      number: '01',
      title: { en: 'Brand & Platform', es: 'Marca y Plataforma' },
      items: [
        { en: 'Full brand identity system', es: 'Sistema completo de identidad de marca' },
        { en: 'Mobile-first responsive website', es: 'Sitio web responsivo mobile-first' },
        { en: 'Bilingual content (EN/ES)', es: 'Contenido biling\u00fce (EN/ES)' },
        { en: 'SEO & LLM-optimized structure', es: 'Estructura optimizada para SEO y LLMs' }
      ]
    },
    {
      number: '02',
      title: { en: 'AI Workflows & Team Systems', es: 'Flujos de IA y Sistemas de Equipo' },
      items: [
        { en: 'Team CRM & client database', es: 'CRM de equipo y base de datos de clientes' },
        { en: 'AI workflow automation', es: 'Automatizaci\u00f3n de flujos con IA' },
        { en: 'Inventory or booking management', es: 'Gesti\u00f3n de inventario o reservaciones' },
        { en: 'Automated follow-ups & reminders', es: 'Seguimientos y recordatorios automatizados' }
      ]
    },
    {
      number: '03',
      title: { en: 'Marketing & Growth', es: 'Marketing y Crecimiento' },
      items: [
        { en: 'AI-powered email campaigns', es: 'Campa\u00f1as de email con IA' },
        { en: 'Social media automation', es: 'Automatizaci\u00f3n de redes sociales' },
        { en: 'Google Business & review management', es: 'Google Business y gesti\u00f3n de rese\u00f1as' },
        { en: 'Analytics & revenue dashboard', es: 'Panel de anal\u00edtica e ingresos' }
      ]
    },
    {
      number: '04',
      title: { en: 'Training & Ownership Transfer', es: 'Capacitaci\u00f3n y Transferencia de Propiedad' },
      items: [
        { en: 'Team training sessions', es: 'Sesiones de capacitaci\u00f3n del equipo' },
        { en: 'Role-based documentation', es: 'Documentaci\u00f3n basada en roles' },
        { en: 'Video walkthroughs & live session', es: 'Videos paso a paso y sesi\u00f3n en vivo' },
        { en: '30-day support window', es: 'Ventana de soporte de 30 d\u00edas' }
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: { en: 'Analyze', es: 'Analizar' },
      desc: {
        en: 'We audit your operations, team workflows, and tech stack. We identify where AI can eliminate manual work and where automation will have the biggest impact.',
        es: 'Auditamos tus operaciones, flujos de equipo y stack tecnol\u00f3gico. Identificamos d\u00f3nde la IA puede eliminar trabajo manual y d\u00f3nde la automatizaci\u00f3n tendr\u00e1 mayor impacto.'
      }
    },
    {
      number: '02',
      title: { en: 'Plan', es: 'Planificar' },
      desc: {
        en: 'We architect your platform \u2014 brand, mobile-first website, AI workflows, SEO structure, and bilingual content. You approve the full scope before we build.',
        es: 'Arquitectamos tu plataforma \u2014 marca, sitio web mobile-first, flujos de IA, estructura SEO y contenido biling\u00fce. Apruebas todo el alcance antes de que construyamos.'
      }
    },
    {
      number: '03',
      title: { en: 'Build', es: 'Construir' },
      desc: {
        en: 'We build your brand, mobile-ready website, team CRM, AI workflows, and automations. SEO-optimized and LLM-discoverable from day one. All tested, all documented.',
        es: 'Construimos tu marca, sitio web mobile-ready, CRM de equipo, flujos de IA y automatizaciones. Optimizado para SEO y descubrible por LLMs desde el d\u00eda uno. Todo probado, todo documentado.'
      }
    },
    {
      number: '04',
      title: { en: 'Train & Deliver', es: 'Capacitar y Entregar' },
      desc: {
        en: 'We train your entire team \u2014 video walkthroughs, role-based docs, and live sessions. Then we hand over all credentials and provide 30 days of support. Your platform, your data, your keys.',
        es: 'Capacitamos a todo tu equipo \u2014 videos paso a paso, documentaci\u00f3n por roles y sesiones en vivo. Despu\u00e9s entregamos todas las credenciales y proporcionamos 30 d\u00edas de soporte. Tu plataforma, tus datos, tus llaves.'
      }
    }
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
                { label: { en: 'Solutions', es: 'Soluciones' }, path: '/solutions' },
                { label: { en: 'Small Business', es: 'Pequeña Empresa' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'SMALL BUSINESS', es: 'PEQUE\u00d1A EMPRESA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'AI-Powered Platforms for Growing Teams', es: 'Plataformas Impulsadas por IA para Equipos en Crecimiento' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Restaurants, hotels, retail, service companies \u2014 teams of 2\u201350 that need AI workflows, mobile-ready systems, and one platform instead of twenty logins.',
              es: 'Restaurantes, hoteles, retail, empresas de servicios \u2014 equipos de 2\u201350 que necesitan flujos de IA, sistemas mobile-ready y una plataforma en vez de veinte contraseñas.'
            })}
          </p>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHO THIS IS FOR', es: 'PARA QUI\u00c9N ES ESTO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Built for Businesses with Teams', es: 'Construido para Negocios con Equipos' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item, idx) => (
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

      {/* ── What's Included ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: "WHAT'S INCLUDED", es: 'QU\u00c9 INCLUYE' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Your AI-Powered Business Platform', es: 'Tu Plataforma de Negocio Impulsada por IA' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.number}
                className="border border-untold-border p-6 sm:p-8 flex flex-col hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {pkg.number}
                </span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-5">
                  {t(pkg.title)}
                </h3>
                <ul className="space-y-3 flex-grow">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1 text-sm">+</span>
                      <span className="text-base font-serif">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW IT WORKS', es: 'C\u00d3MO FUNCIONA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Four Steps to Your AI-Powered Platform', es: 'Cuatro Pasos a Tu Plataforma Impulsada por IA' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="font-sans font-black text-[80px] leading-none text-untold-orange/10 absolute -top-2 -left-1 select-none pointer-events-none">
                  {step.number}
                </span>
                <div className="pt-16 sm:pt-20">
                  <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3">
                    {t(step.title)}
                  </h3>
                  <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                    {t(step.desc)}
                  </p>
                </div>
              </div>
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
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Tell Us About Your Business', es: 'Cu\u00e9ntanos Sobre Tu Negocio' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\u2019ll send you more information about how we can help your team grow.',
              es: 'Completa el formulario y te enviaremos m\u00e1s informaci\u00f3n sobre c\u00f3mo podemos ayudar a tu equipo a crecer.'
            })}
          </p>
          <QuickLeadForm pillar="Small Business" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Scale Your Business?', es: '\u00bfListo para Escalar Tu Negocio?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Let\u2019s build the AI-powered platform your team needs to operate, grow, and win.',
              es: 'Construyamos la plataforma impulsada por IA que tu equipo necesita para operar, crecer y ganar.'
            })}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t({ en: 'Start a Conversation', es: 'Iniciar Conversaci\u00f3n' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmallBusiness;
