import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const SalesEnablement: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Sales Enablement — Digital Sales Tools for Dealer Networks | Untold.works',
      es: 'Habilitación de Ventas — Herramientas Digitales de Ventas para Redes de Distribuidores | Untold.works'
    },
    {
      en: 'Deploy digital sales tools across your dealer network. Product configurators, comparison tools, financing calculators, quote flows, and battle cards — updated automatically from headquarters.',
      es: 'Despliega herramientas digitales de ventas en tu red de distribuidores. Configuradores de productos, herramientas de comparación, calculadoras de financiamiento, flujos de cotización y battle cards — actualizados automáticamente desde la sede.'
    },
    {
      path: '/sales-enablement',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Sales Enablement — Untold.works',
          description: 'Digital sales tools for manufacturer-dealer networks. Product configurators, comparison tools, financing calculators, quote request flows, battle cards, and sales floor kiosks — updated automatically from headquarters.',
          url: 'https://untold.works/sales-enablement',
          provider: {
            '@type': 'Organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['Sales Enablement', 'Digital Catalogs', 'Product Configurators', 'Dealer Tools'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How do the sales tools stay updated as our product line changes?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Tools are connected to your product data systems at headquarters. When you update product specs, pricing, or configurations there, every dealer\'s tools update automatically in real-time. No manual dealer updates. No version control nightmare.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can dealers customize tools for their local market?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. While core tools update from HQ, dealers can customize product selections, local pricing, financing options, and messaging for their specific market. The system maintains consistency while allowing regional flexibility.'
              }
            },
            {
              '@type': 'Question',
              name: 'What integrations are available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We integrate with your product databases, pricing systems, ERP, CRM, and DMS. This ensures data flows seamlessly between your systems and the dealer tools. Custom integrations are available based on your tech stack.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const salesTools = [
    {
      title: { en: 'Product Comparison Tools', es: 'Herramientas de Comparación de Productos' },
      desc: { en: 'Side-by-side feature comparisons that help customers make confident decisions on the sales floor', es: 'Comparaciones lado a lado de características que ayudan a los clientes a tomar decisiones seguras en el piso de ventas' },
    },
    {
      title: { en: 'Digital Catalogs', es: 'Catálogos Digitales' },
      desc: { en: 'Interactive product catalogs with specs, images, and pricing — always current, never outdated', es: 'Catálogos interactivos con especificaciones, imágenes y precios — siempre actualizados, nunca obsoletos' },
    },
    {
      title: { en: 'Financing Calculators', es: 'Calculadoras de Financiamiento' },
      desc: { en: 'Custom financing tools that show monthly payments, terms, and qualification — removing price objections on the spot', es: 'Herramientas de financiamiento personalizadas que muestran pagos mensuales, plazos y calificación — eliminando objeciones de precio en el momento' },
    },
    {
      title: { en: 'Quote Request Flows', es: 'Flujos de Solicitud de Cotización' },
      desc: { en: 'Structured quote builders that capture customer requirements and generate professional proposals automatically', es: 'Constructores de cotizaciones estructurados que capturan requisitos del cliente y generan propuestas profesionales automáticamente' },
    },
    {
      title: { en: 'Battle Cards', es: 'Battle Cards' },
      desc: { en: 'Competitive intelligence cards that arm your sales team with objection handlers and differentiators', es: 'Tarjetas de inteligencia competitiva que equipan a tu equipo de ventas con manejo de objeciones y diferenciadores' },
    },
    {
      title: { en: 'Product Configurators', es: 'Configuradores de Productos' },
      desc: { en: 'Build-your-own tools that let customers customize products and see real-time pricing', es: 'Herramientas de personalización que permiten a los clientes configurar productos y ver precios en tiempo real' },
    },
    {
      title: { en: 'Specification Sheets', es: 'Hojas de Especificaciones' },
      desc: { en: 'Printable and digital spec sheets generated from your product database — always accurate', es: 'Hojas de especificaciones impresas y digitales generadas de tu base de datos de productos — siempre precisas' },
    },
    {
      title: { en: 'Sales Floor Tablets & Kiosks', es: 'Tabletas y Quioscos para Piso de Ventas' },
      desc: { en: 'Dedicated tablet and kiosk interfaces designed for in-store customer engagement', es: 'Interfaces dedicadas para tabletas y quioscos diseñadas para engagement del cliente en tienda' },
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Sales Process Audit', es: 'Auditoría del Proceso de Ventas' },
      desc: {
        en: 'We map your current sales workflows, identify friction points, and understand what tools your dealers actually need.',
        es: 'Mapeamos tus flujos de ventas actuales, identificamos puntos de fricción y entendemos qué herramientas tus distribuidores realmente necesitan.'
      }
    },
    {
      num: '02',
      title: { en: 'Tool Design & Build', es: 'Diseño y Construcción de Herramientas' },
      desc: {
        en: 'We design and develop digital tools tailored to your product line, pricing, and sales process.',
        es: 'Diseñamos y desarrollamos herramientas digitales personalizadas para tu línea de productos, precios y proceso de ventas.'
      }
    },
    {
      num: '03',
      title: { en: 'Network Deployment', es: 'Implementación en la Red' },
      desc: {
        en: 'We roll out tools across your dealer network with training, support, and integration to your systems.',
        es: 'Implementamos herramientas en tu red de distribuidores con capacitación, apoyo e integración con tus sistemas.'
      }
    },
    {
      num: '04',
      title: { en: 'Continuous Updates', es: 'Actualizaciones Continuas' },
      desc: {
        en: 'As your product line evolves, tools update automatically. No dealer intervention needed.',
        es: 'A medida que tu línea de productos evoluciona, las herramientas se actualizan automáticamente. Sin intervención del distribuidor.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'How do the sales tools stay updated as our product line changes?', es: '¿Cómo se mantienen actualizadas las herramientas de ventas cuando cambia nuestra línea de productos?' },
      a: {
        en: 'Tools are connected to your product data systems at headquarters. When you update product specs, pricing, or configurations there, every dealer\'s tools update automatically in real-time. No manual dealer updates. No version control nightmare.',
        es: 'Las herramientas están conectadas a tus sistemas de datos de productos en la sede. Cuando actualizas especificaciones, precios o configuraciones allí, las herramientas de cada distribuidor se actualizan automáticamente en tiempo real. Sin actualizaciones manuales. Sin pesadillas de control de versiones.'
      }
    },
    {
      q: { en: 'Can dealers customize tools for their local market?', es: '¿Los distribuidores pueden personalizar herramientas para su mercado local?' },
      a: {
        en: 'Yes. While core tools update from HQ, dealers can customize product selections, local pricing, financing options, and messaging for their specific market. The system maintains consistency while allowing regional flexibility.',
        es: 'Sí. Mientras las herramientas principales se actualizan desde la sede, los distribuidores pueden personalizar selecciones de productos, precios locales, opciones de financiamiento y mensajería para su mercado específico. El sistema mantiene consistencia permitiendo flexibilidad regional.'
      }
    },
    {
      q: { en: 'Do sales teams need special training?', es: '¿Los equipos de ventas necesitan capacitación especial?' },
      a: {
        en: 'Tools are designed to be intuitive for your sales teams. We provide initial training, job aids, and video guides. Most teams are productive within their first week.',
        es: 'Las herramientas están diseñadas para ser intuitivas para tus equipos de ventas. Proporcionamos capacitación inicial, ayudas de trabajo y guías de video. La mayoría de los equipos son productivos en su primera semana.'
      }
    },
    {
      q: { en: 'What integrations are available?', es: '¿Qué integraciones están disponibles?' },
      a: {
        en: 'We integrate with your product databases, pricing systems, ERP, CRM, and DMS. This ensures data flows seamlessly between your systems and the dealer tools. Custom integrations are available based on your tech stack.',
        es: 'Nos integramos con tus bases de datos de productos, sistemas de precios, ERP, CRM y DMS. Esto asegura que los datos fluyan sin problemas entre tus sistemas y las herramientas de distribuidores. Integraciones personalizadas disponibles según tu stack tecnológico.'
      }
    },
    {
      q: { en: 'How does pricing work for a multi-dealer network?', es: '¿Cómo funciona el precio para una red de múltiples distribuidores?' },
      a: {
        en: 'Pricing scales with your network size and complexity. We work with you to build a model that covers your dealer count, number of tools, and support needs. Fixed or usage-based options available.',
        es: 'Los precios escalan con el tamaño y la complejidad de tu red. Trabajamos contigo para construir un modelo que cubra tu cantidad de distribuidores, número de herramientas y necesidades de apoyo. Opciones fijas o basadas en uso disponibles.'
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
                { label: { en: 'Sales Enablement', es: 'Habilitación de Ventas' } },
              ]}
              variant="dark"
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'SALES ENABLEMENT', es: 'HABILITACIÓN DE VENTAS' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Arm Your Sales Floor With Tools That Evolve', es: 'Equipa Tu Piso de Ventas Con Herramientas Que Evolucionan' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Product configurators, comparison tools, financing calculators, quote flows, battle cards. Updated automatically from headquarters as your product line changes. No more outdated PDFs.',
              es: 'Configuradores de productos, herramientas de comparación, calculadoras de financiamiento, flujos de cotización, battle cards. Actualizados automáticamente desde la sede conforme cambia tu línea de productos. Sin más PDFs desactualizados.'
            })}
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-untold-black px-8 py-3 sm:px-10 sm:py-4 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
            >
              {t({ en: 'Start a Project', es: 'Comenzar un Proyecto' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'DIGITAL SALES TOOLS', es: 'HERRAMIENTAS DIGITALES DE VENTAS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'What We Build', es: 'Lo Que Construimos' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'A complete suite of digital sales tools designed for manufacturer-dealer networks. Every tool updates automatically from your headquarters.',
              es: 'Una suite completa de herramientas digitales de ventas diseñadas para redes de fabricantes y distribuidores. Cada herramienta se actualiza automáticamente desde tu sede.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {salesTools.map((tool, idx) => (
              <div key={idx} className="bg-untold-beige border border-untold-border p-6 sm:p-8">
                <h3 className="font-sans font-black text-base uppercase tracking-tighter mb-3">
                  {t(tool.title)}
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed">
                  {t(tool.desc)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-untold-black text-white p-8 sm:p-10 border border-untold-orange/30">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-untold-orange font-bold mb-4">
              {t({ en: 'THE KEY', es: 'LA CLAVE' })}
            </p>
            <p className="font-serif text-lg italic leading-relaxed">
              {t({
                en: 'Every tool updates automatically from your headquarters as your product line evolves. No manual dealer updates. No outdated PDFs. No version control problems.',
                es: 'Cada herramienta se actualiza automáticamente desde tu sede conforme evoluciona tu línea de productos. Sin actualizaciones manuales del distribuidor. Sin PDFs obsoletos. Sin problemas de control de versiones.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
                {t({ en: 'THE CHALLENGE', es: 'EL DESAFÍO' })}
              </span>
              <p className="text-xl font-serif italic text-white/60 leading-relaxed">
                {t({
                  en: 'Dealer networks still rely on printed catalogs, hand-written quotes, and spreadsheet comparisons. Sales teams waste time hunting for specs. Customers lose confidence in inconsistent information.',
                  es: 'Las redes de distribuidores aún dependen de catálogos impresos, cotizaciones manuscritas y comparaciones en hojas de cálculo. Los equipos de ventas pierden tiempo buscando especificaciones. Los clientes pierden confianza por información inconsistente.'
                })}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
                {t({ en: 'THE FIX', es: 'LA SOLUCIÓN' })}
              </span>
              <p className="text-xl font-serif italic text-white/60 leading-relaxed">
                {t({
                  en: 'Deploy digital sales tools across every dealer in your network. Real-time product data, pricing, and configurations sync from your HQ system. Works on tablets, phones, and kiosks. Sales teams sell faster. Customers get accurate information.',
                  es: 'Implementa herramientas digitales de ventas en cada distribuidor de tu red. Los datos de productos en tiempo real, precios y configuraciones se sincronizan desde tu sistema de sede. Funciona en tabletas, teléfonos y quioscos. Los equipos de ventas venden más rápido. Los clientes obtienen información precisa.'
                })}
              </p>
            </div>
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
            {t({ en: 'The Deployment Process', es: 'El Proceso de Implementación' })}
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
            {t({ en: 'Questions About Sales Enablement', es: 'Preguntas Sobre Habilitación de Ventas' })}
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
        capability={{ en: 'Sales Enablement', es: 'Habilitación de Ventas' }}
        networkDescription={{
          en: 'Deploy digital sales tools across every dealer in your network. Product configurators, pricing calculators, and comparison tools that update automatically from headquarters. Equip your sales floor with the intelligence they need to close faster.',
          es: 'Implementa herramientas digitales de ventas en cada distribuidor de tu red. Configuradores de productos, calculadoras de precios y herramientas de comparación que se actualizan automáticamente desde la sede. Equipa tu piso de ventas con la inteligencia que necesitan para cerrar más rápido.',
        }}
        relatedCapabilities={[
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
          { name: { en: 'Websites', es: 'Sitios Web' }, path: '/websites' },
          { name: { en: 'Mobile Applications', es: 'Aplicaciones Móviles' }, path: '/mobile-apps' },
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

export default SalesEnablement;
