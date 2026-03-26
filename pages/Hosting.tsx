import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const Hosting: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Hosting & System Operations — Managed Infrastructure | Untold.works',
      es: 'Hosting y Operación del Sistema — Infraestructura Gestionada | Untold.works'
    },
    {
      en: 'One monthly fee covers everything: hosting, SSL, security monitoring, automated backups, continuous SEO optimization, content generation, campaign deployment, DNS management, and software updates.',
      es: 'Una tarifa mensual cubre todo: hosting, SSL, monitoreo de seguridad, copias de seguridad automatizadas, optimización SEO continua, generación de contenido, despliegue de campañas, gestión de DNS y actualizaciones de software.'
    },
    {
      path: '/hosting',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hosting & System Operations — Untold.works',
          description: 'Managed infrastructure for business networks. Hosting, SSL, security monitoring, automated backups, continuous SEO optimization, content generation scheduling, campaign deployment infrastructure, DNS management, and software updates.',
          url: 'https://untold.works/hosting',
          provider: {
            '@type': 'Organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['Web Hosting', 'Managed Infrastructure', 'System Operations', 'Website Maintenance'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What\'s included in the monthly fee?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Everything: hosting & CDN, SSL certificates, security monitoring, uptime monitoring, performance optimization, automated backups, continuous SEO optimization, content generation scheduling, campaign deployment infrastructure, DNS management, domain management, and software updates.'
              }
            },
            {
              '@type': 'Question',
              name: 'What about uptime guarantees?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We monitor uptime 24/7 and report availability in your dashboard. We target 99.9% uptime, backed by enterprise-grade infrastructure and global CDN.'
              }
            },
            {
              '@type': 'Question',
              name: 'How is security handled?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Multi-layer security: SSL certificates, vulnerability monitoring, automated backups every 6 hours, automatic software updates, continuous malware scanning, and WAF (Web Application Firewall). Everything is proactive, 24/7.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const includedItems = [
    { title: { en: 'Hosting & CDN', es: 'Hosting y CDN' } },
    { title: { en: 'SSL Certificates', es: 'Certificados SSL' } },
    { title: { en: 'Security Monitoring', es: 'Monitoreo de Seguridad' } },
    { title: { en: 'Uptime Monitoring', es: 'Monitoreo de Disponibilidad' } },
    { title: { en: 'Performance Optimization', es: 'Optimización de Rendimiento' } },
    { title: { en: 'Automated Backups', es: 'Copias de Seguridad Automatizadas' } },
    { title: { en: 'Continuous SEO Optimization', es: 'Optimización Continua de SEO' } },
    { title: { en: 'Content Generation Scheduling', es: 'Programación de Generación de Contenido' } },
    { title: { en: 'Campaign Deployment Infrastructure', es: 'Infraestructura de Despliegue de Campañas' } },
    { title: { en: 'DNS Management', es: 'Gestión de DNS' } },
    { title: { en: 'Domain Management', es: 'Gestión de Dominios' } },
    { title: { en: 'Software Updates', es: 'Actualizaciones de Software' } },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Infrastructure Audit', es: 'Auditoría de Infraestructura' },
      desc: {
        en: 'We assess your current infrastructure, identify bottlenecks, and plan the optimization.',
        es: 'Evaluamos tu infraestructura actual, identificamos cuellos de botella y planificamos la optimización.'
      }
    },
    {
      num: '02',
      title: { en: 'Migration & Setup', es: 'Migración y Configuración' },
      desc: {
        en: 'We migrate your sites, configure SSL, set up CDN, and establish monitoring across every location.',
        es: 'Migramos tus sitios, configuramos SSL, configuramos CDN y establecemos monitoreo en cada ubicación.'
      }
    },
    {
      num: '03',
      title: { en: 'Monitoring Active', es: 'Monitoreo Activo' },
      desc: {
        en: 'We start 24/7 monitoring, optimize performance, and ensure maximum uptime across the network.',
        es: 'Comenzamos el monitoreo 24/7, optimizamos el rendimiento y aseguramos máxima disponibilidad en toda la red.'
      }
    },
    {
      num: '04',
      title: { en: 'Continuous Operations', es: 'Operaciones Continuas' },
      desc: {
        en: 'Proactive maintenance, security patches, backups, and continuous improvement. Everything managed.',
        es: 'Mantenimiento proactivo, parches de seguridad, copias de seguridad y mejora continua. Todo gestionado.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'What\'s included in the monthly fee?', es: '¿Qué está incluido en la tarifa mensual?' },
      a: {
        en: 'Everything: hosting & CDN, SSL certificates, security monitoring, uptime monitoring, performance optimization, automated backups, continuous SEO optimization, content generation scheduling, campaign deployment infrastructure, DNS management, domain management, and software updates.',
        es: 'Todo: hosting y CDN, certificados SSL, monitoreo de seguridad, monitoreo de disponibilidad, optimización de rendimiento, copias de seguridad automatizadas, optimización continua de SEO, programación de generación de contenido, infraestructura de despliegue de campañas, gestión de DNS, gestión de dominios y actualizaciones de software.'
      }
    },
    {
      q: { en: 'What about uptime guarantees?', es: '¿Qué hay de las garantías de disponibilidad?' },
      a: {
        en: 'We monitor uptime 24/7 and report availability in your dashboard. We target 99.9% uptime, backed by enterprise-grade infrastructure and global CDN.',
        es: 'Monitoreamos la disponibilidad 24/7 y reportamos en tu dashboard. Nuestro objetivo es 99.9% de disponibilidad, respaldado por infraestructura de clase empresarial y CDN global.'
      }
    },
    {
      q: { en: 'Who handles domain transfers?', es: '¿Quién maneja las transferencias de dominio?' },
      a: {
        en: 'We handle the entire domain transfer process. We guide you through every step and coordinate directly with your current registrar.',
        es: 'Nosotros manejamos todo el proceso de transferencia de dominio. Te guiamos a través de cada paso y coordinamos directamente con tu registrador actual.'
      }
    },
    {
      q: { en: 'What if we need changes or updates?', es: '¿Qué pasa si necesitamos cambios o actualizaciones?' },
      a: {
        en: 'Content changes are easy through the dashboard. Deeper technical changes are handled through your dedicated account manager. Software updates happen automatically.',
        es: 'Los cambios de contenido son fáciles a través del dashboard. Los cambios técnicos más profundos se manejan a través de tu gestor de cuenta dedicado. Las actualizaciones de software se hacen automáticamente.'
      }
    },
    {
      q: { en: 'How is security handled?', es: '¿Cómo se maneja la seguridad?' },
      a: {
        en: 'Multi-layer security: SSL certificates, vulnerability monitoring, automated backups every 6 hours, automatic software updates, continuous malware scanning, and WAF (Web Application Firewall). Everything is proactive, 24/7.',
        es: 'Seguridad multinivel: certificados SSL, monitoreo de vulnerabilidades, copias de seguridad automatizadas cada 6 horas, actualización de software automática, escaneo de malware continuo y WAF (Web Application Firewall). Todo es proactivo, 24/7.'
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
                { label: { en: 'Hosting & System Operations', es: 'Hosting y Operación del Sistema' } },
              ]}
              variant="dark"
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'INFRASTRUCTURE', es: 'INFRAESTRUCTURA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'One Monthly Fee. Everything Managed.', es: 'Una Tarifa Mensual. Todo Gestionado.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Hosting, security, monitoring, backups, SEO optimization, content generation, campaign deployment, DNS, domain management, and software updates. All handled for you.',
              es: 'Hosting, seguridad, monitoreo, copias de seguridad, optimización SEO, generación de contenido, despliegue de campañas, DNS, gestión de dominios y actualizaciones de software. Todo manejado por ti.'
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

      {/* ── What's Included ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'EVERYTHING INCLUDED', es: 'TODO INCLUIDO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'One Fee. Everything Managed.', es: 'Una Tarifa. Todo Gestionado.' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'No surprise bills. No separate vendors for hosting, security, and maintenance. One monthly fee covers your entire network.',
              es: 'Sin facturas sorpresa. Sin proveedores separados para hosting, seguridad y mantenimiento. Una tarifa mensual cubre toda tu red.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-untold-border">
            {includedItems.map((item, idx) => (
              <div key={idx} className="bg-untold-beige p-6 flex items-start space-x-3">
                <span className="text-untold-orange mt-0.5 text-sm shrink-0">+</span>
                <span className="font-sans font-black text-sm uppercase tracking-tighter">
                  {t(item.title)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Matters ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHY IT MATTERS', es: 'POR QUÉ IMPORTA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-8">
            {t({ en: 'Without It, Sites Degrade.', es: 'Sin Esto, Los Sitios Se Degradan.' })}
          </h2>

          <div className="space-y-6">
            <p className="text-xl font-serif italic text-white/60 leading-relaxed">
              {t({
                en: 'Without system operations, sites degrade. Slowly at first, then faster and faster. Content goes stale. Security vulnerabilities appear. SEO erodes. Load times slow down.',
                es: 'Sin operaciones del sistema, los sitios se degradan. Lentamente al principio, luego cada vez más rápido. El contenido se vuelve obsoleto. Las vulnerabilidades de seguridad aparecen. El SEO se erosiona. Los tiempos de carga se ralentizan.'
              })}
            </p>
            <p className="text-xl font-serif italic text-white/60 leading-relaxed">
              {t({
                en: 'The system operations fee is what keeps the network alive and compounding. It\'s the engine that runs behind the scenes, automatically, every single day.',
                es: 'La tarifa de operaciones del sistema es lo que mantiene la red viva y haciendo compuesto. Es el motor que funciona detrás de las escenas, automáticamente, cada día.'
              })}
            </p>
            <p className="text-xl font-serif italic text-white/60 leading-relaxed">
              {t({
                en: 'Without it, you\'d need a full-time technical team. With it, everything just works.',
                es: 'Sin esto, necesitarías un equipo técnico a tiempo completo. Con esto, todo simplemente funciona.'
              })}
            </p>
          </div>
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
            {t({ en: 'Questions About Hosting & Operations', es: 'Preguntas Sobre Hosting y Operaciones' })}
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
        capability={{ en: 'Hosting & System Operations', es: 'Hosting y Operación del Sistema' }}
        networkDescription={{
          en: 'The infrastructure that keeps every site in the network running. Hosting, monitoring, security, backups, and continuous optimization — all handled automatically. One monthly fee for your entire network.',
          es: 'La infraestructura que mantiene cada sitio de la red funcionando. Hosting, monitoreo, seguridad, copias de seguridad y optimización continua — todo manejado automáticamente. Una tarifa mensual para toda tu red.',
        }}
        relatedCapabilities={[
          { name: { en: 'Websites', es: 'Sitios Web' }, path: '/websites' },
          { name: { en: 'Review & Reputation Management', es: 'Gestión de Reseñas y Reputación' }, path: '/review-reputation' },
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

export default Hosting;
