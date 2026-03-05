import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';

const Enterprise: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.enterprise.title,
    i18n.seo.enterprise.description,
    {
      path: '/solutions/enterprise',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Enterprise Team Solutions',
        provider: { '@type': 'Organization', name: 'Untold.works' },
        description: 'AI infrastructure for complex business operations. AI-powered workflows, mobile-ready platforms, multilingual content, and full operational visibility across departments.',
        areaServed: ['Mexico', 'United States'],
        serviceType: 'Enterprise Web Development & Business Systems',
      },
    }
  );

  const audienceItems = [
    { en: 'Growing companies (20+ employees)', es: 'Empresas en crecimiento (20+ empleados)' },
    { en: 'Multi-department organizations', es: 'Organizaciones con múltiples departamentos' },
    { en: 'Companies with sales teams', es: 'Empresas con equipos de ventas' },
    { en: 'Franchise operations', es: 'Operaciones de franquicia' },
    { en: 'Organizations modernizing legacy systems', es: 'Organizaciones modernizando sistemas heredados' },
    { en: 'Companies expanding to new markets', es: 'Empresas expandiéndose a nuevos mercados' },
  ];

  const cards = [
    {
      number: '01',
      title: { en: 'Brand & Digital Platform', es: 'Marca y Plataforma Digital' },
      features: [
        { en: 'Enterprise brand system', es: 'Sistema de marca empresarial' },
        { en: 'Mobile-first corporate website', es: 'Sitio web corporativo mobile-first' },
        { en: 'Multilingual content (EN/ES+)', es: 'Contenido multiling\u00fce (EN/ES+)' },
        { en: 'Advanced SEO & LLM discoverability', es: 'SEO avanzado y descubribilidad por LLMs' },
      ],
    },
    {
      number: '02',
      title: { en: 'AI Revenue Systems', es: 'Sistemas de Ingresos con IA' },
      features: [
        { en: 'Multi-team CRM & AI pipeline management', es: 'CRM multi-equipo y gesti\u00f3n de pipeline con IA' },
        { en: 'AI-powered lead routing & scoring', es: 'Enrutamiento y calificaci\u00f3n de leads con IA' },
        { en: 'Sales enablement & automation', es: 'Habilitaci\u00f3n de ventas y automatizaci\u00f3n' },
        { en: 'Revenue attribution & forecasting', es: 'Atribuci\u00f3n de ingresos y pron\u00f3sticos' },
      ],
    },
    {
      number: '03',
      title: { en: 'AI Marketing & Operations', es: 'Marketing y Operaciones con IA' },
      features: [
        { en: 'AI-driven email & nurture sequences', es: 'Secuencias de email y nutrici\u00f3n con IA' },
        { en: 'Multi-channel campaign automation', es: 'Automatizaci\u00f3n de campa\u00f1as multi-canal' },
        { en: 'AI workflow & process automation', es: 'Automatizaci\u00f3n de flujos y procesos con IA' },
        { en: 'Custom integrations & data architecture', es: 'Integraciones personalizadas y arquitectura de datos' },
      ],
    },
    {
      number: '04',
      title: { en: 'Training & Ownership Transfer', es: 'Capacitaci\u00f3n y Transferencia de Propiedad' },
      features: [
        { en: 'Executive & team training sessions', es: 'Sesiones de capacitaci\u00f3n ejecutiva y de equipo' },
        { en: 'Department-specific documentation', es: 'Documentaci\u00f3n espec\u00edfica por departamento' },
        { en: 'Phased rollout & deployment plan', es: 'Plan de implementaci\u00f3n y despliegue por fases' },
        { en: '60-day support & optimization', es: 'Soporte y optimizaci\u00f3n de 60 d\u00edas' },
      ],
    },
  ];

  const steps = [
    {
      number: '01',
      title: { en: 'Analyze', es: 'Analizar' },
      description: {
        en: 'We audit your systems, revenue operations, team workflows, and tech stack. We map where AI can automate processes, cut operational overhead, and create competitive advantage.',
        es: 'Auditamos tus sistemas, operaciones de ingresos, flujos de equipo y stack tecnol\u00f3gico. Mapeamos d\u00f3nde la IA puede automatizar procesos, reducir costos operativos y crear ventaja competitiva.',
      },
    },
    {
      number: '02',
      title: { en: 'Plan', es: 'Planificar' },
      description: {
        en: 'We architect your platform \u2014 brand system, mobile-first website, AI workflows, multilingual content, SEO & LLM strategy, and a phased rollout with clear milestones.',
        es: 'Arquitectamos tu plataforma \u2014 sistema de marca, sitio web mobile-first, flujos de IA, contenido multiling\u00fce, estrategia SEO y LLM, y un despliegue por fases con hitos claros.',
      },
    },
    {
      number: '03',
      title: { en: 'Build', es: 'Construir' },
      description: {
        en: 'We build and integrate everything \u2014 brand, mobile-ready platform, AI workflows, CRM, automations, and reporting. SEO-optimized and LLM-discoverable from day one. All tested, all documented.',
        es: 'Construimos e integramos todo \u2014 marca, plataforma mobile-ready, flujos de IA, CRM, automatizaciones y reportes. Optimizado para SEO y descubrible por LLMs desde el d\u00eda uno. Todo probado, todo documentado.',
      },
    },
    {
      number: '04',
      title: { en: 'Train & Deploy', es: 'Capacitar y Desplegar' },
      description: {
        en: 'We train your teams department by department \u2014 video walkthroughs, role-based docs, and live sessions. Then we hand over all credentials and support you through 60 days of operation. Your platform, your data, your keys.',
        es: 'Capacitamos a tus equipos departamento por departamento \u2014 videos paso a paso, documentaci\u00f3n por roles y sesiones en vivo. Despu\u00e9s entregamos todas las credenciales y te apoyamos durante 60 d\u00edas de operaci\u00f3n. Tu plataforma, tus datos, tus llaves.',
      },
    },
  ];

  return (
    <div className="bg-untold-beige font-serif text-untold-black">
      {/* Hero */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Solutions', es: 'Soluciones' }, path: '/solutions' },
                { label: { en: 'Enterprise', es: 'Empresarial' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'ENTERPRISE', es: 'EMPRESARIAL' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({
              en: 'AI Infrastructure for Complex Operations',
              es: 'Infraestructura de IA para Operaciones Complejas',
            })}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'For organizations that need AI-powered workflows across departments, mobile-ready systems, multilingual platforms, and full operational visibility.',
              es: 'Para organizaciones que necesitan flujos de trabajo con IA entre departamentos, sistemas mobile-ready, plataformas multiling\u00fces y visibilidad operacional completa.',
            })}
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-10">
            <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold text-untold-gray/50">
              {t({ en: 'WHO THIS IS FOR', es: 'PARA QUIÉN ES' })}
            </p>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 max-w-3xl">
            {t({
              en: 'Built for Organizations That Need More',
              es: 'Hecho Para Organizaciones Que Necesitan Más',
            })}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audienceItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 flex items-start space-x-4"
              >
                <span className="text-untold-orange font-bold mt-0.5">+</span>
                <span className="text-base font-serif">{t(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-5 sm:px-10 py-16 sm:py-24 bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-10">
            <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold text-untold-gray/50">
              {t({ en: "WHAT'S INCLUDED", es: 'QUÉ INCLUYE' })}
            </p>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 max-w-3xl">
            {t({
              en: 'Your AI-Powered Enterprise Platform',
              es: 'Tu Plataforma Empresarial Impulsada por IA',
            })}
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {cards.map((card) => (
              <div
                key={card.number}
                className="border border-untold-border p-8 sm:p-10 flex flex-col"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {card.number}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-6">
                  {t(card.title)}
                </h3>
                <ul className="space-y-3">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base font-serif">{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-10">
            <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold text-untold-gray/50">
              {t({ en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' })}
            </p>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 max-w-3xl">
            {t({
              en: 'Four Steps to Your AI Infrastructure',
              es: 'Cuatro Pasos a Tu Infraestructura de IA',
            })}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="border-t-2 border-untold-orange pt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-3 block">
                  {t({ en: 'STEP', es: 'PASO' })} {step.number}
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-4">
                  {t(step.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center space-x-4 mb-10">
            <span className="w-2 h-2 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'GET STARTED', es: 'COMENZAR' })}
            </p>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({
              en: 'Interested in Enterprise?',
              es: '¿Interesado en Empresarial?',
            })}
          </h2>
          <p className="font-serif italic text-white/60 text-lg mb-10">
            {t({
              en: 'Leave your info and we\'ll send you more details about our enterprise solutions.',
              es: 'Deja tu información y te enviaremos más detalles sobre nuestras soluciones empresariales.',
            })}
          </p>
          <QuickLeadForm pillar="Enterprise" />
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-10 py-16 sm:py-24 bg-white border-t border-untold-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-8">
            {t({
              en: 'Ready to Build Your AI Infrastructure?',
              es: '\u00bfListo Para Construir Tu Infraestructura de IA?',
            })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Let\u2019s build the AI-powered platform that gives your organization the infrastructure to scale.',
              es: 'Construyamos la plataforma impulsada por IA que le d\u00e9 a tu organizaci\u00f3n la infraestructura para escalar.',
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

export default Enterprise;
