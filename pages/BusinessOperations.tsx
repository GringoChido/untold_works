import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

interface BilingualContent {
  en: string;
  es: string;
}

interface ServiceCard {
  number: string;
  name: BilingualContent;
  description: BilingualContent;
  path: string;
}

const BusinessOperations: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Business Operations — AI-Powered Dashboards, Content, Sales & Ads | Untold.works',
      es: 'Operaciones de Negocio — Dashboards, Contenido, Ventas y Ads con IA | Untold.works',
    },
    {
      en: 'AI-powered dashboards, content engines, sales tools, and ad systems — the operational backbone that lets your team do more with less.',
      es: 'Dashboards con IA, motores de contenido, herramientas de ventas y sistemas de publicidad — la columna operativa que permite a tu equipo hacer más con menos.',
    },
    {
      path: '/business-operations',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Business Operations — AI-Powered Operational Systems',
        provider: { '@type': 'Organization', name: 'Untold.works', url: 'https://untold.works' },
        description: 'AI-powered dashboards, content engines, sales enablement tools, and ad management systems for businesses in Mexico and the United States.',
        areaServed: [
          { '@type': 'Country', name: 'Mexico' },
          { '@type': 'Country', name: 'United States' },
        ],
        serviceType: ['Business Intelligence', 'AI Content Production', 'Sales Enablement', 'Ad Management'],
      },
    }
  );

  const services: ServiceCard[] = [
    {
      number: '01',
      name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' },
      description: {
        en: 'Real-time analytics and AI insights across every channel — one screen, full clarity.',
        es: 'Analítica en tiempo real e insights de IA en cada canal — una pantalla, claridad total.',
      },
      path: '/dashboard',
    },
    {
      number: '02',
      name: { en: 'AI Content', es: 'Contenido con IA' },
      description: {
        en: 'AI-assisted content production that maintains your voice while scaling output.',
        es: 'Producción de contenido asistida por IA que mantiene tu voz mientras escala la producción.',
      },
      path: '/ai-content',
    },
    {
      number: '03',
      name: { en: 'Sales Enablement', es: 'Habilitación de Ventas' },
      description: {
        en: 'CRM automation, pipeline intelligence, and AI follow-ups that close deals faster.',
        es: 'Automatización de CRM, inteligencia de pipeline y seguimientos con IA que cierran ventas más rápido.',
      },
      path: '/sales-enablement',
    },
    {
      number: '04',
      name: { en: 'Ads', es: 'Publicidad' },
      description: {
        en: 'Multi-platform ad management with AI optimization and transparent ROI tracking.',
        es: 'Gestión de publicidad multiplataforma con optimización por IA y seguimiento transparente de ROI.',
      },
      path: '/ads',
    },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Solutions', es: 'Soluciones' }, path: '/solutions' },
                { label: { en: 'Business Operations', es: 'Operaciones de Negocio' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'BUSINESS OPERATIONS', es: 'OPERACIONES DE NEGOCIO' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Automate the Machine. Focus on the Mission.', es: 'Automatiza la Máquina. Enfócate en la Misión.' })}
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-white/60 max-w-3xl">
            {t({
              en: 'AI-powered dashboards, content engines, sales tools, and ad systems — the operational backbone that lets your team do more with less.',
              es: 'Dashboards con IA, motores de contenido, herramientas de ventas y sistemas de publicidad — la columna operativa que permite a tu equipo hacer más con menos.',
            })}
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-untold-border">
            {services.map((service) => (
              <div
                key={service.number}
                className="p-8 sm:p-12 border-b border-r border-untold-border last:border-b-0 md:[&:nth-child(odd):last-child]:col-span-2 group"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.6em] text-untold-gray mb-4 block">
                  {service.number}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-4">
                  <Link to={service.path} className="hover:text-untold-orange transition-colors">
                    {t(service.name)}
                  </Link>
                </h3>
                <p className="font-serif italic text-untold-gray mb-6">
                  {t(service.description)}
                </p>
                <Link
                  to={service.path}
                  className="font-mono text-sm uppercase tracking-widest text-untold-orange hover:text-untold-black transition-colors"
                >
                  {t({ en: 'Explore →', es: 'Explorar →' })}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How These Connect ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto max-w-4xl">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'How These Connect', es: 'Cómo Se Conectan' })}
          </h2>
          <p className="text-xl font-serif italic text-white/60 mb-12 max-w-3xl">
            {t({
              en: 'These are not four separate tools. They are one system. Your dashboard pulls data from your ads and sales pipeline. Your AI content feeds your ads and sales sequences. Everything talks to everything — because we built it that way.',
              es: 'No son cuatro herramientas separadas. Son un sistema. Tu dashboard extrae datos de tus anuncios y pipeline de ventas. Tu contenido con IA alimenta tus anuncios y secuencias de ventas. Todo se comunica con todo — porque lo construimos así.',
            })}
          </p>
          <Link
            to="/network-systems"
            className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t({ en: 'See the Full System', es: 'Ver el Sistema Completo' })}
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Automate?', es: '¿Listo para Automatizar?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Tell us where the bottlenecks are. We will build the system that eliminates them.',
              es: 'Cuéntanos dónde están los cuellos de botella. Construiremos el sistema que los elimina.',
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

export default BusinessOperations;
