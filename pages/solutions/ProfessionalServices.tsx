import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import ImagePlaceholder from '../../components/ImagePlaceholder';

const ProfessionalServices: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.professionalServices.title,
    i18n.seo.professionalServices.description,
    {
      path: '/solutions/professional-services',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Professional Services — Business Systems',
        provider: { '@type': 'Organization', name: 'Untold.works' },
        description: 'Complete business systems for service professionals including brand identity, website, CRM, booking, marketing, and training.',
        areaServed: ['Mexico', 'United States'],
        serviceType: 'Web Development & Business Systems',
      },
    }
  );

  const audiences = [
    { en: 'Independent consultants', es: 'Consultores independientes' },
    { en: 'Medical & legal practices', es: 'Consultorios m\u00e9dicos y legales' },
    { en: 'Architects & designers', es: 'Arquitectos y dise\u00f1adores' },
    { en: 'Therapists & coaches', es: 'Terapeutas y coaches' },
    { en: 'Real estate agents', es: 'Agentes inmobiliarios' },
    { en: 'Photographers & artists', es: 'Fot\u00f3grafos y artistas' },
    { en: 'Healers & wellness practitioners', es: 'Sanadores y profesionales del bienestar' },
    { en: 'Financial advisors', es: 'Asesores financieros' }
  ];

  const packages = [
    {
      title: { en: 'Brand & Website', es: 'Marca y Sitio Web' },
      items: [
        { en: 'Brand identity & visual system', es: 'Identidad de marca y sistema visual' },
        { en: 'Mobile-first website', es: 'Sitio web mobile-first' },
        { en: 'Bilingual content (EN/ES)', es: 'Contenido biling\u00fce (EN/ES)' },
        { en: 'SEO optimization', es: 'Optimizaci\u00f3n SEO' }
      ]
    },
    {
      title: { en: 'Client Systems', es: 'Sistemas de Clientes' },
      items: [
        { en: 'Client management (CRM)', es: 'Gesti\u00f3n de clientes (CRM)' },
        { en: 'Online booking & scheduling', es: 'Reservas y agenda en l\u00ednea' },
        { en: 'Automated appointment reminders', es: 'Recordatorios autom\u00e1ticos de citas' },
        { en: 'Client communication workflows', es: 'Flujos de comunicaci\u00f3n con clientes' }
      ]
    },
    {
      title: { en: 'Marketing', es: 'Marketing' },
      items: [
        { en: 'Email marketing setup', es: 'Configuraci\u00f3n de email marketing' },
        { en: 'Social media integration', es: 'Integraci\u00f3n de redes sociales' },
        { en: 'Google Business Profile', es: 'Perfil de Google Business' },
        { en: 'Review management', es: 'Gesti\u00f3n de rese\u00f1as' }
      ]
    },
    {
      title: { en: 'Training & Handoff', es: 'Capacitaci\u00f3n y Entrega' },
      items: [
        { en: 'Video training library', es: 'Biblioteca de videos de capacitaci\u00f3n' },
        { en: 'Written documentation', es: 'Documentaci\u00f3n escrita' },
        { en: 'Live walkthrough session', es: 'Sesi\u00f3n de recorrido en vivo' },
        { en: '30-day support window', es: 'Ventana de soporte de 30 d\u00edas' }
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: { en: 'Analyze', es: 'Analizar' },
      description: {
        en: 'We audit your practice, your client journey, and your current tools. We map where AI can cut time, where workflows can be automated, and what your platform needs to do.',
        es: 'Auditamos tu pr\u00e1ctica, el recorrido de tus clientes y tus herramientas actuales. Mapeamos d\u00f3nde la IA puede reducir tiempo, d\u00f3nde los flujos se pueden automatizar y qu\u00e9 necesita hacer tu plataforma.'
      }
    },
    {
      number: '02',
      title: { en: 'Plan', es: 'Planificar' },
      description: {
        en: 'We architect your complete platform \u2014 brand, mobile-first website, AI workflows, SEO structure, and bilingual content strategy. You approve the full scope before we build.',
        es: 'Arquitectamos tu plataforma completa \u2014 marca, sitio web mobile-first, flujos de IA, estructura SEO y estrategia de contenido biling\u00fce. Apruebas todo el alcance antes de que construyamos.'
      }
    },
    {
      number: '03',
      title: { en: 'Build', es: 'Construir' },
      description: {
        en: 'We build your brand identity, mobile-ready website, CRM, booking system, AI workflows, and automations. SEO-optimized and LLM-discoverable from day one. All tested, all documented.',
        es: 'Construimos tu identidad de marca, sitio web mobile-ready, CRM, sistema de reservas, flujos de IA y automatizaciones. Optimizado para SEO y descubrible por LLMs desde el d\u00eda uno. Todo probado, todo documentado.'
      }
    },
    {
      number: '04',
      title: { en: 'Train & Deliver', es: 'Capacitar y Entregar' },
      description: {
        en: 'We train you on every system we built \u2014 video walkthroughs, written docs, and a live session. Then we hand over all credentials and provide 30 days of support. Your platform, your data, your keys.',
        es: 'Te capacitamos en cada sistema que construimos \u2014 videos paso a paso, documentaci\u00f3n escrita y una sesi\u00f3n en vivo. Despu\u00e9s entregamos todas las credenciales y proporcionamos 30 d\u00edas de soporte. Tu plataforma, tus datos, tus llaves.'
      }
    }
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
                { label: { en: 'Professional Services', es: 'Servicios Profesionales' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'PROFESSIONAL SERVICES', es: 'SERVICIOS PROFESIONALES' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({
              en: 'Complete Business Systems for Service Professionals',
              es: 'Sistemas Completos de Negocio para Profesionales de Servicio'
            })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Doctors, lawyers, consultants, architects, therapists \u2014 if you serve clients one-on-one, this is built for you.',
              es: 'M\u00e9dicos, abogados, consultores, arquitectos, terapeutas \u2014 si atiendes clientes uno a uno, esto est\u00e1 hecho para ti.'
            })}
          </p>
        </div>
      </section>

      {/* ── Visual ── */}
      <section className="border-b border-untold-border">
        <ImagePlaceholder
          label="Professional at work — consultant, therapist, or attorney"
          aspect="aspect-[21/9]"
          dimensions="1440 × 617px"
        />
      </section>

      {/* Who This Is For */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'WHO THIS IS FOR', es: 'PARA QUI\u00c9N ES ESTO' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 max-w-4xl">
            {t({
              en: 'Built for Professionals Who Serve Clients Directly',
              es: 'Hecho para Profesionales Que Atienden Clientes Directamente'
            })}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((audience, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 sm:p-8 flex items-start space-x-4 hover:border-untold-orange/30 transition-colors"
              >
                <span className="text-untold-orange font-sans font-black text-lg mt-0.5">+</span>
                <span className="text-lg sm:text-xl font-serif">{t(audience)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: "WHAT'S INCLUDED", es: 'QU\u00c9 INCLUYE' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 max-w-4xl">
            {t({
              en: 'Everything You Need to Run Your Practice',
              es: 'Todo Lo Que Necesitas Para Manejar Tu Pr\u00e1ctica'
            })}
          </h3>

          <div className="grid sm:grid-cols-2 gap-px bg-untold-border border border-untold-border">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-10 lg:p-14 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-8">
                  {t(pkg.title)}
                </h4>
                <ul className="space-y-4 flex-grow">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base sm:text-lg font-serif text-untold-gray">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'HOW IT WORKS', es: 'C\u00d3MO FUNCIONA' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 max-w-4xl">
            {t({
              en: 'Four Steps to Your AI-Powered Platform',
              es: 'Cuatro Pasos a Tu Plataforma Impulsada por IA'
            })}
          </h3>

          <div className="border-t border-untold-border">
            {steps.map((step) => (
              <div
                key={step.number}
                className="grid lg:grid-cols-12 gap-0 border-b border-untold-border group hover:bg-white transition-all duration-500"
              >
                <div className="lg:col-span-4 p-6 sm:p-10 lg:p-14 lg:border-r border-untold-border">
                  <span className="font-mono text-[11px] font-bold text-untold-orange mb-6 block tracking-[0.4em] uppercase">
                    {t({ en: `STEP ${step.number}`, es: `PASO ${step.number}` })}
                  </span>
                  <h4 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight group-hover:text-untold-orange transition-colors">
                    {t(step.title)}
                  </h4>
                </div>
                <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14 flex items-center">
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-untold-gray leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="flex items-center space-x-4 mb-10">
                <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
                <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
                  {t({ en: 'GET STARTED', es: 'COMENZAR' })}
                </h2>
              </div>
              <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6">
                {t({
                  en: 'Tell Us About Your Practice',
                  es: 'Cu\u00e9ntanos Sobre Tu Pr\u00e1ctica'
                })}
              </h3>
              <p className="text-lg sm:text-xl font-serif italic text-white/60 leading-relaxed max-w-xl">
                {t({
                  en: 'Share your info and we\u2019ll send you a breakdown of what your system could look like. No obligation, no pressure.',
                  es: 'Comparte tu informaci\u00f3n y te enviaremos un desglose de c\u00f3mo podr\u00eda verse tu sistema. Sin compromiso, sin presi\u00f3n.'
                })}
              </p>
            </div>
            <QuickLeadForm pillar="Professional Services" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-10 py-24 sm:py-40 text-center bg-untold-beige/40">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(2.5rem,10vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase">
            {t({
              en: 'Ready to Build\nYour System?',
              es: '\u00bfListo Para Construir\nTu Sistema?'
            })}
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray mb-12 max-w-2xl">
            {t({
              en: 'No lock-in. No monthly fees for things you own. You get the keys to everything we build.',
              es: 'Sin ataduras. Sin cuotas mensuales por lo que es tuyo. Te damos las llaves de todo lo que construimos.'
            })}
          </p>
          <Link
            to="/contact"
            className="group relative bg-untold-black text-white px-10 sm:px-20 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">
              {t({ en: 'Start a Conversation', es: 'Iniciar Conversaci\u00f3n' })}
            </span>
            <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalServices;
