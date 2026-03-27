import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import NetworkConnector from '../../components/NetworkConnector';

const SmallBusiness: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.smallBusiness.title,
    i18n.seo.smallBusiness.description,
    {
      path: '/solutions/small-business',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Small Business Platforms',
          provider: { '@type': 'Organization', name: 'Untold.works' },
          description: 'AI-powered business platforms for growing teams. Mobile-first websites, AI workflows, bilingual content, SEO optimization, team CRM, and full ownership transfer.',
          areaServed: ['Mexico', 'United States'],
          serviceType: 'Web Development & Business Systems',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Can my team actually use this without a developer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build for teams, not developers. Every system includes role-based training — your manager, front desk, and marketing lead all get tailored walkthroughs. Plus 30 days of support.' } },
            { '@type': 'Question', name: 'How does this replace twenty different tools?', acceptedAnswer: { '@type': 'Answer', text: 'We integrate everything into one platform: website, CRM, booking or inventory, email marketing, social automation, and analytics. One login, shared data, AI-powered workflows.' } },
            { '@type': 'Question', name: 'What happens if we grow beyond 50 people?', acceptedAnswer: { '@type': 'Answer', text: 'The platform scales with you. We can upgrade to Enterprise tier. Because you own everything, there\'s no migration headache — we build on what already exists.' } },
          ],
        },
      ],
    }
  );

  const audiences = [
    {
      title: { en: 'Restaurants & Hospitality', es: 'Restaurantes y Hospitalidad' },
      desc: {
        en: 'Online menus, reservations, team scheduling, and guest management systems.',
        es: 'Menús en línea, reservaciones, programación de equipo y sistemas de gestión de huéspedes.',
      },
    },
    {
      title: { en: 'Retail & E-Commerce', es: 'Retail y Comercio Electrónico' },
      desc: {
        en: 'Product catalogs, inventory tracking, POS integration, and online storefronts.',
        es: 'Catálogos de productos, seguimiento de inventario, integración POS y tiendas en línea.',
      },
    },
    {
      title: { en: 'Service Companies', es: 'Empresas de Servicios' },
      desc: {
        en: 'Client intake, job scheduling, field operations, and automated follow-ups.',
        es: 'Recepción de clientes, programación de trabajos, operaciones de campo y seguimientos automatizados.',
      },
    },
    {
      title: { en: 'Property Management', es: 'Administración de Propiedades' },
      desc: {
        en: 'Tenant portals, maintenance requests, lease tracking, and owner reporting.',
        es: 'Portales de inquilinos, solicitudes de mantenimiento, seguimiento de contratos y reportes a propietarios.',
      },
    },
    {
      title: { en: 'Event Venues', es: 'Espacios para Eventos' },
      desc: {
        en: 'Booking calendars, vendor coordination, client communication, and event CRM.',
        es: 'Calendarios de reservaciones, coordinación de proveedores, comunicación con clientes y CRM de eventos.',
      },
    },
    {
      title: { en: 'Multi-Location Businesses', es: 'Negocios Multi-Ubicación' },
      desc: {
        en: 'Centralized dashboards, location-based reporting, and unified brand systems.',
        es: 'Paneles centralizados, reportes por ubicación y sistemas de marca unificados.',
      },
    },
  ];

  const packages = [
    {
      number: '01',
      title: { en: 'Brand & Platform', es: 'Marca y Plataforma' },
      items: [
        { en: 'Full brand identity system', es: 'Sistema completo de identidad de marca' },
        { en: 'Mobile-first responsive website', es: 'Sitio web responsivo mobile-first' },
        { en: 'Bilingual content (EN/ES)', es: 'Contenido bilingüe (EN/ES)' },
        { en: 'SEO & AEO optimization', es: 'Optimización SEO y AEO' },
      ],
    },
    {
      number: '02',
      title: { en: 'AI Workflows & Team Systems', es: 'Flujos de IA y Sistemas de Equipo' },
      items: [
        { en: 'Team CRM & client database', es: 'CRM de equipo y base de datos de clientes' },
        { en: 'AI workflow automation', es: 'Automatización de flujos con IA' },
        { en: 'Inventory or booking management', es: 'Gestión de inventario o reservaciones' },
        { en: 'Automated follow-ups & reminders', es: 'Seguimientos y recordatorios automatizados' },
      ],
    },
    {
      number: '03',
      title: { en: 'Marketing & Growth', es: 'Marketing y Crecimiento' },
      items: [
        { en: 'AI-powered email campaigns', es: 'Campañas de email con IA' },
        { en: 'Social media automation', es: 'Automatización de redes sociales' },
        { en: 'Google Business & review management', es: 'Google Business y gestión de reseñas' },
        { en: 'Analytics & revenue dashboard', es: 'Panel de analítica e ingresos' },
      ],
    },
    {
      number: '04',
      title: { en: 'Training & Ownership Transfer', es: 'Capacitación y Transferencia de Propiedad' },
      items: [
        { en: 'Team training sessions', es: 'Sesiones de capacitación del equipo' },
        { en: 'Role-based documentation', es: 'Documentación basada en roles' },
        { en: 'Video walkthroughs & live session', es: 'Videos paso a paso y sesión en vivo' },
        { en: '30-day support window', es: 'Ventana de soporte de 30 días' },
      ],
    },
  ];

  const problems = [
    {
      before: { en: 'Twenty logins — one for reservations, one for email, one for scheduling, one for payments...', es: 'Veinte contraseñas — una para reservaciones, otra para email, otra para agenda, otra para pagos...' },
      after: { en: 'One platform. One login. Everything connected.', es: 'Una plataforma. Un inicio de sesión. Todo conectado.' },
    },
    {
      before: { en: 'Manager spends 2 hours/day on tasks a machine could do', es: 'El gerente pasa 2 horas/día en tareas que una máquina podría hacer' },
      after: { en: 'AI workflows handle the repetitive work automatically', es: 'Los flujos de IA manejan el trabajo repetitivo automáticamente' },
    },
    {
      before: { en: 'No visibility into what\'s working — gut feelings instead of data', es: 'Sin visibilidad de qué funciona — intuición en vez de datos' },
      after: { en: 'Multi-user dashboard with real revenue analytics', es: 'Dashboard multiusuario con analítica real de ingresos' },
    },
    {
      before: { en: 'Staff can\'t update the website — changes take weeks', es: 'El equipo no puede actualizar el sitio — los cambios tardan semanas' },
      after: { en: 'Team-managed content with role-based access', es: 'Contenido gestionado por el equipo con acceso por roles' },
    },
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
              {t({ en: 'SMALL BUSINESS', es: 'PEQUEÑA EMPRESA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Stop Duct-Taping Tools Together', es: 'Deja de Parchar Herramientas' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Restaurants, hotels, retail, service companies — teams of 2–50 that need one AI-powered platform instead of twenty logins.',
              es: 'Restaurantes, hoteles, retail, empresas de servicios — equipos de 2–50 que necesitan una plataforma con IA en vez de veinte contraseñas.',
            })}
          </p>

          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Starting at', es: 'Desde' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '$10,000 USD', es: '$10,000 USD' })}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Timeline', es: 'Plazo' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '6–10 weeks', es: '6–10 semanas' })}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Best for', es: 'Ideal para' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: 'Teams of 2–50', es: 'Equipos de 2–50' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual ── */}
      <section className="border-b border-untold-border">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="/images/solutions/small-business.jpg"
            srcSet="/images/solutions/small-business-640w.jpg 640w, /images/solutions/small-business-1024w.jpg 1024w, /images/solutions/small-business.jpg 1600w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={t({ en: 'Small business team collaborating — restaurant, retail, or hotel operations', es: 'Equipo de pequeña empresa colaborando — operaciones de restaurante, retail u hotel' })}
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'WHO THIS IS FOR', es: 'PARA QUIÉN ES ESTO' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Built for Businesses with Teams', es: 'Construido para Negocios con Equipos' })}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((item, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 sm:p-8 hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <h4 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(item.title)}
                </h4>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(item.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-white px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'THE PROBLEM', es: 'EL PROBLEMA' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 max-w-4xl leading-[0.85]">
            {t({
              en: 'Your Team Is Spending Hours on Work That Should Take Minutes',
              es: 'Tu Equipo Pasa Horas en Trabajo Que Debería Tomar Minutos',
            })}
          </h3>

          <div className="border-t border-untold-border">
            {problems.map((problem, idx) => (
              <div key={idx} className="grid lg:grid-cols-2 gap-0 border-b border-untold-border">
                <div className="p-6 sm:p-8 lg:border-r border-untold-border">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-black/30 block mb-2">{t({ en: 'Before', es: 'Antes' })}</span>
                  <p className="text-lg font-serif text-untold-gray line-through decoration-untold-orange/30">{t(problem.before)}</p>
                </div>
                <div className="p-6 sm:p-8 bg-untold-beige/50">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-orange block mb-2">{t({ en: 'After', es: 'Después' })}</span>
                  <p className="text-lg font-serif font-bold">{t(problem.after)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: "WHAT'S INCLUDED", es: 'QUÉ INCLUYE' })}
            </h2>
          </div>
          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Your AI-Powered Business Platform', es: 'Tu Plataforma de Negocio Impulsada por IA' })}
          </h3>

          <div className="grid sm:grid-cols-2 gap-px bg-untold-border border border-untold-border">
            {packages.map((pkg) => (
              <div
                key={pkg.number}
                className="bg-white p-8 sm:p-10 lg:p-14 flex flex-col"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {pkg.number}
                </span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-8">
                  {t(pkg.title)}
                </h4>
                <ul className="space-y-4 flex-grow">
                  {pkg.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1 text-sm">+</span>
                      <span className="text-base sm:text-lg font-serif">{t(item)}</span>
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
            {t({ en: 'Questions Before\nYou Commit', es: 'Preguntas Antes\nde Comprometerte' })}
          </h3>

          <div className="space-y-0 border-t border-untold-border">
            {[
              {
                q: { en: 'Can my team actually use this without a developer?', es: '¿Mi equipo puede usar esto sin un desarrollador?' },
                a: { en: 'Yes. We build for teams, not developers. Every system includes role-based training — your manager, your front desk, your marketing lead all get walkthroughs tailored to what they need to do. Plus 30 days of support after launch.', es: 'Sí. Construimos para equipos, no para desarrolladores. Cada sistema incluye capacitación por roles — tu gerente, tu recepción, tu responsable de marketing reciben recorridos adaptados a lo que necesitan hacer. Más 30 días de soporte después del lanzamiento.' },
              },
              {
                q: { en: 'How does this replace twenty different tools?', es: '¿Cómo esto reemplaza veinte herramientas diferentes?' },
                a: { en: 'We integrate everything into one platform: your website, CRM, booking or inventory system, email marketing, social automation, and analytics dashboard. Instead of logging into Mailchimp, then Calendly, then Google Sheets, then your website backend — everything lives in one place and shares the same data.', es: 'Integramos todo en una plataforma: tu sitio web, CRM, sistema de reservas o inventario, email marketing, automatización de redes y panel de analítica. En vez de entrar a Mailchimp, luego Calendly, luego Google Sheets, luego tu backend — todo vive en un lugar y comparte los mismos datos.' },
              },
              {
                q: { en: 'What happens if we grow beyond 50 people?', es: '¿Qué pasa si crecemos más allá de 50 personas?' },
                a: { en: 'The platform scales with you. If you eventually need multi-department workflows, executive dashboards, or cross-team CRM, we can upgrade you to our Enterprise tier. Because you own everything, there\'s no migration headache — we build on what already exists.', es: 'La plataforma escala contigo. Si eventualmente necesitas flujos entre departamentos, dashboards ejecutivos o CRM multi-equipo, podemos actualizarte a nuestro nivel Empresarial. Como eres dueño de todo, no hay dolor de migración — construimos sobre lo que ya existe.' },
              },
              {
                q: { en: 'Do you work with restaurants and hotels specifically?', es: '¿Trabajan específicamente con restaurantes y hoteles?' },
                a: { en: 'Yes — hospitality is one of our core verticals. We build reservation systems, guest management, menu platforms, and WhatsApp AI integration specifically for restaurants, boutique hotels, and event venues in Mexico and the US.', es: 'Sí — la hospitalidad es uno de nuestros verticales principales. Construimos sistemas de reservaciones, gestión de huéspedes, plataformas de menú e integración de WhatsApp con IA específicamente para restaurantes, hoteles boutique y espacios de eventos en México y EE.UU.' },
              },
              {
                q: { en: 'What does the 6-10 week timeline actually look like?', es: '¿Cómo se ve realmente el plazo de 6-10 semanas?' },
                a: { en: 'Week 1-2: We audit your operations and plan the full platform. Week 3-6: We build brand, website, CRM, and AI workflows. Week 7-8: Testing, training, and documentation. Week 9-10: Launch, handoff, and start of 30-day support. You see progress throughout — not just a big reveal at the end.', es: 'Semana 1-2: Auditamos tus operaciones y planificamos la plataforma completa. Semana 3-6: Construimos marca, sitio web, CRM y flujos de IA. Semana 7-8: Pruebas, capacitación y documentación. Semana 9-10: Lanzamiento, entrega e inicio de soporte de 30 días. Ves progreso durante todo el proceso — no solo una gran revelación al final.' },
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

      {/* ── Proof ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'CLIENT RESULT', es: 'RESULTADO DE CLIENTE' })}
            </h2>
          </div>
          <div className="max-w-3xl">
            <span className="text-untold-orange text-6xl font-serif leading-none block mb-6">&ldquo;</span>
            <p className="text-xl sm:text-2xl font-serif italic text-untold-gray leading-relaxed mb-8">
              {t({
                en: 'Working with Joshua at Untold.works has been a transformative experience for Billiard Factory\'s social media presence. His creative approach consistently drives growth and engagement, surpassing our expectations consistently. This partnership has genuinely amplified our digital presence.',
                es: 'Trabajar con Joshua en Untold.works ha sido una experiencia transformadora para la presencia en redes sociales de Billiard Factory. Su enfoque creativo impulsa consistentemente el crecimiento y la interacción, superando nuestras expectativas de manera constante. Esta asociación ha amplificado genuinamente nuestra presencia digital.',
              })}
            </p>
            <div className="pt-6 border-t border-untold-border">
              <p className="font-sans font-black text-base uppercase tracking-tighter">Ryan Stick</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-gray mt-1">Billiard Factory</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Network Connector ── */}
      <NetworkConnector
        capability={{ en: 'Small Business Operations', es: 'Operaciones de Pequeña Empresa' }}
        networkDescription={{
          en: 'Running multiple locations or a franchise? Our Network Systems offering deploys this same platform across your entire operation — shared CRM, unified brand, location-specific dashboards.',
          es: '¿Operas múltiples ubicaciones o una franquicia? Nuestra oferta de Network Systems despliega esta misma plataforma en toda tu operación — CRM compartido, marca unificada, dashboards por ubicación.',
        }}
        relatedCapabilities={[
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
          { name: { en: 'AI Content', es: 'Contenido IA' }, path: '/ai-content' },
          { name: { en: 'Ads', es: 'Publicidad' }, path: '/ads' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
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
                {t({ en: 'Tell Us About Your Business', es: 'Cuéntanos Sobre Tu Negocio' })}
              </h3>
              <p className="text-lg sm:text-xl font-serif italic text-white/60 leading-relaxed max-w-xl">
                {t({
                  en: 'Fill out the form and we\'ll send you a breakdown of what your platform could look like. No obligation, no pressure.',
                  es: 'Completa el formulario y te enviaremos un desglose de cómo podría verse tu plataforma. Sin compromiso, sin presión.',
                })}
              </p>
            </div>
            <QuickLeadForm pillar="Small Business" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-[clamp(2.5rem,10vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase">
            {t({ en: 'One Platform.\nZero Excuses.', es: 'Una Plataforma.\nCero Excusas.' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-8 max-w-2xl mx-auto">
            {t({
              en: 'Your team gets one login, one dashboard, and one AI-powered system that replaces the tool sprawl. Full ownership — no recurring platform fees.',
              es: 'Tu equipo obtiene un inicio de sesión, un dashboard y un sistema con IA que reemplaza la maraña de herramientas. Propiedad total — sin cuotas recurrentes de plataforma.',
            })}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-untold-orange mb-12">
            {t({ en: 'Typical build: 6-10 weeks from kickoff to launch', es: 'Construcción típica: 6-10 semanas de inicio a lanzamiento' })}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
            >
              {t({ en: 'Get a Platform Proposal', es: 'Obtén una Propuesta de Plataforma' })}
            </Link>
            <Link
              to="/solutions"
              className="inline-block border-2 border-untold-black px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:bg-untold-black hover:text-white transition-all duration-300"
            >
              {t({ en: 'Compare All Tiers', es: 'Comparar Niveles' })}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmallBusiness;
