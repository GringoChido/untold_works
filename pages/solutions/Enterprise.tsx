import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Testimonials from '../../components/Testimonials';
import Breadcrumbs from '../../components/Breadcrumbs';

const Enterprise: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.enterprise.title,
    i18n.seo.enterprise.description,
    {
      path: '/solutions/enterprise',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Enterprise Team Solutions',
          provider: { '@type': 'Organization', name: 'Untold.works' },
          description: 'AI infrastructure for complex business operations. AI-powered workflows, mobile-ready platforms, multilingual content, and full operational visibility across departments.',
          areaServed: ['Mexico', 'United States'],
          serviceType: 'Enterprise Web Development & Business Systems',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'How does phased rollout work for large teams?', acceptedAnswer: { '@type': 'Answer', text: 'We deploy department by department — sales, then marketing, then operations. Each phase includes training, validation, and adoption monitoring before we move to the next.' } },
            { '@type': 'Question', name: 'Can you integrate with our existing systems?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build custom integrations with your current tools — ERP, accounting software, existing CRM, payment systems, or proprietary databases. If an API exists, we can connect to it.' } },
            { '@type': 'Question', name: 'What does full ownership transfer mean at the enterprise level?', acceptedAnswer: { '@type': 'Answer', text: 'You own everything — code, data, documentation, credentials, and infrastructure. We also provide department-specific documentation, admin handoff protocols, and a formal transition plan.' } },
          ],
        },
      ],
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
        { en: 'Multilingual content (EN/ES+)', es: 'Contenido multilingüe (EN/ES+)' },
        { en: 'Advanced SEO & AEO', es: 'SEO y AEO avanzado' },
      ],
    },
    {
      number: '02',
      title: { en: 'AI Revenue Systems', es: 'Sistemas de Ingresos con IA' },
      features: [
        { en: 'Multi-team CRM & AI pipeline management', es: 'CRM multi-equipo y gestión de pipeline con IA' },
        { en: 'AI-powered lead routing & scoring', es: 'Enrutamiento y calificación de leads con IA' },
        { en: 'Sales enablement & automation', es: 'Habilitación de ventas y automatización' },
        { en: 'Revenue attribution & forecasting', es: 'Atribución de ingresos y pronósticos' },
      ],
    },
    {
      number: '03',
      title: { en: 'AI Marketing & Operations', es: 'Marketing y Operaciones con IA' },
      features: [
        { en: 'AI-driven email & nurture sequences', es: 'Secuencias de email y nutrición con IA' },
        { en: 'Multi-channel campaign automation', es: 'Automatización de campañas multi-canal' },
        { en: 'Cross-department workflow automation', es: 'Automatización de flujos entre departamentos' },
        { en: 'Custom integrations & data architecture', es: 'Integraciones personalizadas y arquitectura de datos' },
      ],
    },
    {
      number: '04',
      title: { en: 'Training & Ownership Transfer', es: 'Capacitación y Transferencia de Propiedad' },
      features: [
        { en: 'Executive & team training sessions', es: 'Sesiones de capacitación ejecutiva y de equipo' },
        { en: 'Department-specific documentation', es: 'Documentación específica por departamento' },
        { en: 'Phased rollout & deployment plan', es: 'Plan de implementación y despliegue por fases' },
        { en: '60-day support & optimization', es: 'Soporte y optimización de 60 días' },
      ],
    },
  ];

  const differentiators = [
    {
      title: { en: 'Phased Rollout', es: 'Implementación por Fases' },
      description: {
        en: 'Enterprise systems don\'t launch overnight. We deploy department by department, validate each phase with your team, and ensure adoption before moving to the next.',
        es: 'Los sistemas empresariales no se lanzan de la noche a la mañana. Desplegamos departamento por departamento, validamos cada fase con tu equipo y aseguramos la adopción antes de avanzar.',
      },
    },
    {
      title: { en: '60-Day Support', es: 'Soporte de 60 Días' },
      description: {
        en: 'Twice the post-launch support of our other tiers. We stay with your team through two full months of real-world operation — optimizing, troubleshooting, and refining.',
        es: 'El doble de soporte post-lanzamiento que nuestros otros niveles. Nos quedamos con tu equipo durante dos meses completos de operación real — optimizando, solucionando y refinando.',
      },
    },
    {
      title: { en: 'Cross-Department Integration', es: 'Integración Entre Departamentos' },
      description: {
        en: 'Sales, marketing, operations, and leadership see the same data. No more silos, no more conflicting reports. One source of truth across every team.',
        es: 'Ventas, marketing, operaciones y liderazgo ven los mismos datos. Sin más silos, sin más reportes contradictorios. Una fuente de verdad para todos los equipos.',
      },
    },
    {
      title: { en: 'Executive Dashboards', es: 'Dashboards Ejecutivos' },
      description: {
        en: 'Leadership gets real-time visibility into revenue, operations, and team performance — without needing to ask anyone for a report.',
        es: 'El liderazgo obtiene visibilidad en tiempo real de ingresos, operaciones y desempeño del equipo — sin necesidad de pedir un reporte a nadie.',
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
              en: 'AI Infrastructure for Organizations That Need More',
              es: 'Infraestructura de IA para Organizaciones Que Necesitan Más',
            })}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'For organizations with 20+ employees, multiple departments, or multi-location operations that have outgrown off-the-shelf tools.',
              es: 'Para organizaciones con 20+ empleados, múltiples departamentos u operaciones multi-ubicación que superaron las herramientas genéricas.',
            })}
          </p>

          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Pricing', es: 'Precio' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: 'Custom Quote', es: 'Cotización Personalizada' })}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Timeline', es: 'Plazo' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '8–16 weeks', es: '8–16 semanas' })}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Post-launch support', es: 'Soporte post-lanzamiento' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '60 days', es: '60 días' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="border-b border-untold-border">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="/images/solutions/enterprise.webp"
            alt={t({ en: 'Enterprise operations — corporate office, warehouse, or executive team meeting', es: 'Operaciones empresariales — oficina corporativa, almacén o reunión de equipo ejecutivo' })}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'WHO THIS IS FOR', es: 'PARA QUIÉN ES' })}
            </h2>
          </div>
          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 max-w-3xl">
            {t({
              en: 'Built for Organizations That Have Outgrown Off-the-Shelf',
              es: 'Hecho Para Organizaciones Que Superaron Lo Genérico',
            })}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audienceItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 flex items-start space-x-4 hover:border-untold-orange/30 transition-colors"
              >
                <span className="text-untold-orange font-bold mt-0.5">+</span>
                <span className="text-base font-serif">{t(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Enterprise Different */}
      <section className="bg-white px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'WHY ENTERPRISE', es: 'POR QUÉ EMPRESARIAL' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 max-w-4xl leading-[0.85]">
            {t({
              en: 'What Sets This Tier Apart',
              es: 'Lo Que Diferencia Este Nivel',
            })}
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="border-t-2 border-untold-orange pt-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-3 block">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-4">
                  {t(diff.title)}
                </h4>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(diff.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-5 sm:px-10 py-16 sm:py-24 bg-untold-beige border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: "WHAT'S INCLUDED", es: 'QUÉ INCLUYE' })}
            </h2>
          </div>
          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12 max-w-3xl">
            {t({
              en: 'Your AI-Powered Enterprise Platform',
              es: 'Tu Plataforma Empresarial Impulsada por IA',
            })}
          </h3>
          <div className="grid sm:grid-cols-2 gap-px bg-untold-border border border-untold-border">
            {cards.map((card) => (
              <div
                key={card.number}
                className="bg-white p-8 sm:p-10 lg:p-14 flex flex-col"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {card.number}
                </span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-6">
                  {t(card.title)}
                </h4>
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

      {/* ── FAQ ── */}
      <section className="bg-white px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'Enterprise Questions,\nDirect Answers', es: 'Preguntas Empresariales,\nRespuestas Directas' })}
          </h3>

          <div className="space-y-0 border-t border-untold-border">
            {[
              {
                q: { en: 'How does phased rollout work for large teams?', es: '¿Cómo funciona la implementación por fases para equipos grandes?' },
                a: { en: 'We deploy department by department. Sales gets their CRM and pipeline tools first. Then marketing gets campaign automation. Then operations. Each phase includes training, validation, and adoption monitoring before we move to the next. This reduces disruption and ensures each team is confident before we add complexity.', es: 'Desplegamos departamento por departamento. Ventas obtiene su CRM y herramientas de pipeline primero. Después marketing recibe automatización de campañas. Luego operaciones. Cada fase incluye capacitación, validación y monitoreo de adopción antes de avanzar a la siguiente. Esto reduce la disrupción y asegura que cada equipo esté seguro antes de agregar complejidad.' },
              },
              {
                q: { en: 'Can you integrate with our existing systems?', es: '¿Pueden integrarse con nuestros sistemas existentes?' },
                a: { en: 'Yes. We build custom integrations with your current tools — ERP, accounting software, existing CRM, payment systems, or proprietary databases. We architect the data layer so everything flows through one unified system. If an API exists, we can connect to it.', es: 'Sí. Construimos integraciones personalizadas con tus herramientas actuales — ERP, software contable, CRM existente, sistemas de pago o bases de datos propietarias. Arquitectamos la capa de datos para que todo fluya por un sistema unificado. Si existe una API, nos podemos conectar.' },
              },
              {
                q: { en: 'Why 60 days of support instead of 30?', es: '¿Por qué 60 días de soporte en vez de 30?' },
                a: { en: 'Enterprise systems are more complex. Your team needs time to encounter real-world edge cases — end-of-month reporting, seasonal spikes, multi-department coordination. 60 days gives us enough time to optimize based on actual usage patterns, not just initial setup.', es: 'Los sistemas empresariales son más complejos. Tu equipo necesita tiempo para encontrar casos reales — reportes de fin de mes, picos estacionales, coordinación entre departamentos. 60 días nos dan tiempo suficiente para optimizar basándonos en patrones de uso reales, no solo la configuración inicial.' },
              },
              {
                q: { en: 'How do you handle multi-location operations?', es: '¿Cómo manejan operaciones multi-ubicación?' },
                a: { en: 'Each location gets its own configuration within the unified platform — local SEO, location-specific booking, regional pricing, and local team access. Leadership gets a centralized dashboard that rolls up data from all locations. One system, multiple views.', es: 'Cada ubicación obtiene su propia configuración dentro de la plataforma unificada — SEO local, reservas específicas por ubicación, precios regionales y acceso del equipo local. El liderazgo obtiene un dashboard centralizado que consolida datos de todas las ubicaciones. Un sistema, múltiples vistas.' },
              },
              {
                q: { en: 'What does "full ownership transfer" mean at the enterprise level?', es: '¿Qué significa "transferencia total de propiedad" a nivel empresarial?' },
                a: { en: 'Same as every tier — you own everything. Code, data, documentation, credentials, and infrastructure. The difference at enterprise is we also provide department-specific documentation, admin handoff protocols, and a formal transition plan. Your IT team gets full access to maintain and extend the system independently.', es: 'Igual que en cada nivel — eres dueño de todo. Código, datos, documentación, credenciales e infraestructura. La diferencia a nivel empresarial es que también proporcionamos documentación específica por departamento, protocolos de entrega administrativa y un plan de transición formal. Tu equipo de TI obtiene acceso completo para mantener y extender el sistema de forma independiente.' },
              },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-untold-border group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h4>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-lg font-serif text-untold-gray leading-relaxed pr-12">
                  {t(faq.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* Quick Lead Form */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
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
                  en: 'Let\'s Talk About Your Organization',
                  es: 'Hablemos Sobre Tu Organización',
                })}
              </h3>
              <p className="font-serif italic text-white/60 text-lg leading-relaxed max-w-xl">
                {t({
                  en: 'Leave your info and we\'ll schedule a discovery call to scope your enterprise platform.',
                  es: 'Deja tu información y agendaremos una llamada de descubrimiento para definir el alcance de tu plataforma empresarial.',
                })}
              </p>
            </div>
            <QuickLeadForm pillar="Enterprise" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-beige border-t border-untold-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sans font-black text-[clamp(2.5rem,10vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase">
            {t({
              en: 'Ready to Build Your\nAI Infrastructure?',
              es: '¿Listo Para Construir Tu\nInfraestructura de IA?',
            })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'No lock-in. Full documentation. Complete ownership transfer. Let\'s build the AI infrastructure your organization needs to scale.',
              es: 'Sin ataduras. Documentación completa. Transferencia total de propiedad. Construyamos la infraestructura de IA que tu organización necesita para escalar.',
            })}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
            >
              {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
            </Link>
            <Link
              to="/solutions"
              className="inline-block border-2 border-untold-black px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:bg-untold-black hover:text-white transition-all duration-300"
            >
              {t({ en: 'Compare All Solutions', es: 'Comparar Soluciones' })}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
