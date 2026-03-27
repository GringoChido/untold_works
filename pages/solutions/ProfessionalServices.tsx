import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../App';
import { usePageMeta } from '../../hooks/usePageMeta';
import * as i18n from '../../i18n';
import QuickLeadForm from '../../components/QuickLeadForm';
import Breadcrumbs from '../../components/Breadcrumbs';
import NetworkConnector from '../../components/NetworkConnector';
import ProofStrip from '../../components/ProofStrip';
import CostComparison from '../../components/CostComparison';
import ResultCard from '../../components/ResultCard';

const ProfessionalServices: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.professionalServices.title,
    i18n.seo.professionalServices.description,
    {
      path: '/solutions/professional-services',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Professional Services — Business Systems',
          provider: { '@type': 'Organization', '@id': 'https://untold.works/#organization', name: 'Untold.works' },
          description: 'Complete business systems for service professionals including brand identity, website, CRM, booking, marketing, and training.',
          areaServed: ['Mexico', 'United States'],
          serviceType: 'Web Development & Business Systems',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Is this overkill for a solo practitioner?', acceptedAnswer: { '@type': 'Answer', text: 'No. This tier is specifically designed for solo practitioners and small firms (1-5 people). You don\'t need a large team to benefit from automated booking, CRM, and follow-ups. These systems save you 5-10 hours per week.' } },
            { '@type': 'Question', name: 'How is this different from Squarespace + Calendly + Mailchimp?', acceptedAnswer: { '@type': 'Answer', text: 'Those tools don\'t talk to each other. We build one integrated system where booking, email, CRM, and your website all share the same data — and AI handles the follow-ups automatically.' } },
            { '@type': 'Question', name: 'What does full ownership actually mean?', acceptedAnswer: { '@type': 'Answer', text: 'You own the code, the design, the data, and every credential. No monthly platform fees, no lock-in. It\'s yours.' } },
          ],
        },
      ],
    }
  );

  const audiences = [
    { en: 'Independent consultants', es: 'Consultores independientes' },
    { en: 'Medical & legal practices', es: 'Consultorios médicos y legales' },
    { en: 'Architects & designers', es: 'Arquitectos y diseñadores' },
    { en: 'Therapists & coaches', es: 'Terapeutas y coaches' },
    { en: 'Real estate agents', es: 'Agentes inmobiliarios' },
    { en: 'Photographers & artists', es: 'Fotógrafos y artistas' },
    { en: 'Healers & wellness practitioners', es: 'Sanadores y profesionales del bienestar' },
    { en: 'Financial advisors', es: 'Asesores financieros' },
  ];

  const packages = [
    {
      title: { en: 'Brand & Website', es: 'Marca y Sitio Web' },
      items: [
        { en: 'Brand identity & visual system', es: 'Identidad de marca y sistema visual' },
        { en: 'Mobile-first website', es: 'Sitio web mobile-first' },
        { en: 'Bilingual content (EN/ES)', es: 'Contenido bilingüe (EN/ES)' },
        { en: 'SEO & AEO optimization', es: 'Optimización SEO y AEO' },
      ],
    },
    {
      title: { en: 'Client Systems', es: 'Sistemas de Clientes' },
      items: [
        { en: 'Client management (CRM)', es: 'Gestión de clientes (CRM)' },
        { en: 'Online booking & scheduling', es: 'Reservas y agenda en línea' },
        { en: 'Automated appointment reminders', es: 'Recordatorios automáticos de citas' },
        { en: 'Client communication workflows', es: 'Flujos de comunicación con clientes' },
      ],
    },
    {
      title: { en: 'Marketing', es: 'Marketing' },
      items: [
        { en: 'Email marketing setup', es: 'Configuración de email marketing' },
        { en: 'Social media integration', es: 'Integración de redes sociales' },
        { en: 'Google Business Profile', es: 'Perfil de Google Business' },
        { en: 'Review management', es: 'Gestión de reseñas' },
      ],
    },
    {
      title: { en: 'Training & Handoff', es: 'Capacitación y Entrega' },
      items: [
        { en: 'Video training library', es: 'Biblioteca de videos de capacitación' },
        { en: 'Written documentation', es: 'Documentación escrita' },
        { en: 'Live walkthrough session', es: 'Sesión de recorrido en vivo' },
        { en: '30-day support window', es: 'Ventana de soporte de 30 días' },
      ],
    },
  ];

  const problems = [
    {
      before: { en: 'Scattered tools — Calendly, Mailchimp, Squarespace, Google Sheets', es: 'Herramientas dispersas — Calendly, Mailchimp, Squarespace, Google Sheets' },
      after: { en: 'One platform that handles everything', es: 'Una plataforma que maneja todo' },
    },
    {
      before: { en: 'Manual follow-ups you forget to send', es: 'Seguimientos manuales que olvidas enviar' },
      after: { en: 'Automated sequences that never miss', es: 'Secuencias automatizadas que nunca fallan' },
    },
    {
      before: { en: 'No online presence beyond a basic website', es: 'Sin presencia en línea más allá de un sitio web básico' },
      after: { en: 'Brand + website + SEO + AI discoverability', es: 'Marca + sitio web + SEO + descubribilidad por IA' },
    },
    {
      before: { en: 'No idea which clients are most valuable', es: 'Sin idea de cuáles clientes son más valiosos' },
      after: { en: 'Revenue dashboard with client analytics', es: 'Panel de ingresos con analítica de clientes' },
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
              en: 'One System to Run Your Entire Practice',
              es: 'Un Sistema Para Manejar Toda Tu Práctica',
            })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Doctors, lawyers, consultants, architects, therapists — if you serve clients one-on-one, this is built for you.',
              es: 'Médicos, abogados, consultores, arquitectos, terapeutas — si atiendes clientes uno a uno, esto está hecho para ti.',
            })}
          </p>

          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Starting at', es: 'Desde' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '$5,000 USD', es: '$5,000 USD' })}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Timeline', es: 'Plazo' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '4–6 weeks', es: '4–6 semanas' })}</span>
            </div>
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 block">{t({ en: 'Best for', es: 'Ideal para' })}</span>
              <span className="font-sans font-black text-xl">{t({ en: '1–5 person firms', es: 'Firmas de 1–5 personas' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Part of Network Systems ── */}
      <NetworkConnector
        capability={{ en: 'Professional Services', es: 'Servicios Profesionales' }}
        networkDescription={{
          en: 'Running a consulting firm, medical group, or multi-practitioner practice? Our Network Systems offering deploys these same tools across your entire team — unified brand, shared CRM, coordinated marketing.',
          es: '¿Diriges una firma de consultoría, grupo médico o práctica multi-profesional? Nuestra oferta de Network Systems despliega estas mismas herramientas en todo tu equipo — marca unificada, CRM compartido, marketing coordinado.',
        }}
        variant="light"
        relatedCapabilities={[
          { name: { en: 'Website Design', es: 'Diseño Web' }, path: '/websites' },
          { name: { en: 'SEO & AEO', es: 'SEO y AEO' }, path: '/seo-aeo' },
          { name: { en: 'Review & Reputation', es: 'Reseñas y Reputación' }, path: '/review-reputation' },
        ]}
      />

      {/* Visual */}
      <section className="border-b border-untold-border">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="/images/solutions/professional-services.jpg"
            srcSet="/images/solutions/professional-services-640w.jpg 640w, /images/solutions/professional-services-1024w.jpg 1024w, /images/solutions/professional-services-1920w.jpg 1920w, /images/solutions/professional-services.jpg 2121w"
            sizes="(max-width: 768px) 100vw, 50vw"
            alt={t({ en: 'Professional at work — consultant, therapist, or attorney in their practice', es: 'Profesional trabajando — consultor, terapeuta o abogado en su práctica' })}
            width={2121}
            height={1414}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'WHO THIS IS FOR', es: 'PARA QUIÉN ES ESTO' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 max-w-4xl">
            {t({
              en: 'Built for Professionals Who Serve Clients Directly',
              es: 'Hecho para Profesionales Que Atienden Clientes Directamente',
            })}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map((audience, idx) => (
              <div
                key={idx}
                className="border border-untold-border bg-white p-6 sm:p-8 flex items-start space-x-4 hover:border-untold-orange/30 transition-colors"
              >
                <span className="text-untold-orange font-sans font-black text-lg mt-0.5">+</span>
                <span className="text-lg font-serif">{t(audience)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
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
              en: 'You\'re the Expert. Your Systems Should Be Too.',
              es: 'Eres el Experto. Tus Sistemas También Deberían Serlo.',
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

      {/* What's Included */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: "WHAT'S INCLUDED", es: 'QUÉ INCLUYE' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 max-w-4xl">
            {t({
              en: 'Everything You Need to Run Your Practice',
              es: 'Todo Lo Que Necesitas Para Manejar Tu Práctica',
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

      {/* ── What You're Spending Now ── */}
      <CostComparison
        tier={{ en: 'Professional Services', es: 'Servicios Profesionales' }}
        tools={[
          { name: { en: 'Squarespace / Wix', es: 'Squarespace / Wix' }, cost: { en: '$25–$45/mo', es: '$25–$45/mes' } },
          { name: { en: 'Calendly (Pro)', es: 'Calendly (Pro)' }, cost: { en: '$12–$20/mo', es: '$12–$20/mes' } },
          { name: { en: 'Mailchimp (Standard)', es: 'Mailchimp (Standard)' }, cost: { en: '$20–$60/mo', es: '$20–$60/mes' } },
          { name: { en: 'HoneyBook / Dubsado', es: 'HoneyBook / Dubsado' }, cost: { en: '$40–$80/mo', es: '$40–$80/mes' } },
          { name: { en: 'Google Workspace', es: 'Google Workspace' }, cost: { en: '$14/mo', es: '$14/mes' } },
          { name: { en: 'Zapier (Starter)', es: 'Zapier (Starter)' }, cost: { en: '$20–$30/mo', es: '$20–$30/mes' } },
        ]}
        monthlyTotal={{ en: '$130–$250', es: '$130–$250' }}
        annualTotal={{ en: '$1,560–$3,000', es: '$1,560–$3,000' }}
        investment={{ en: '$5,000', es: '$5,000' }}
        bottomLine={{
          en: 'Breakeven in under 2 years. Then it\'s pure savings — $1,500–$3,000 back in your pocket every year.',
          es: 'Punto de equilibrio en menos de 2 años. Después son ahorros puros — $1,500–$3,000 de regreso cada año.',
        }}
      />

      {/* ── How We Make You Money ── */}
      <ResultCard
        headline={{
          en: 'More Billable Hours. Fewer No-Shows. Zero Admin Overhead.',
          es: 'Más Horas Facturables. Menos Ausencias. Cero Carga Administrativa.',
        }}
        stat="10+"
        statLabel={{ en: 'billable hours recovered per week', es: 'horas facturables recuperadas por semana' }}
        math={{
          en: 'At $150/hour, that\'s $6,000/month in recovered capacity.',
          es: 'A $150/hora, son $6,000/mes en capacidad recuperada.',
        }}
        supporting={{
          en: '5–10 hours/week saved on admin tasks through automated booking, reminders, and follow-ups.',
          es: '5–10 horas/semana ahorradas en tareas admin con reservas, recordatorios y seguimientos automáticos.',
        }}
        proofLink="/contact"
        proofLabel={{ en: 'Get your blueprint', es: 'Obtén tu plan' }}
      />

      {/* ── Proof Strip ── */}
      <ProofStrip variant="light" />

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
            {t({ en: 'Questions Before\nYou Start', es: 'Preguntas Antes\nde Empezar' })}
          </h3>

          <div className="space-y-0 border-t border-untold-border">
            {[
              {
                q: { en: 'Is this overkill for a solo practitioner?', es: '¿Es demasiado para un profesional independiente?' },
                a: { en: 'No. This tier is specifically designed for solo practitioners and small firms (1-5 people). You don\'t need a large team to benefit from automated booking, CRM, and follow-ups. These systems save you 5-10 hours per week — time you can spend with clients instead of admin.', es: 'No. Este nivel está diseñado específicamente para profesionales independientes y firmas pequeñas (1-5 personas). No necesitas un equipo grande para beneficiarte de reservas automatizadas, CRM y seguimientos. Estos sistemas te ahorran 5-10 horas por semana — tiempo que puedes dedicar a clientes en vez de administración.' },
              },
              {
                q: { en: 'What if I already have a website I like?', es: '¿Qué pasa si ya tengo un sitio web que me gusta?' },
                a: { en: 'We can integrate AI systems, CRM, and booking into your existing site — or we can rebuild it as part of the full ecosystem. We\'ll assess what you have and recommend the best path. Either way, you keep full ownership.', es: 'Podemos integrar sistemas de IA, CRM y reservas en tu sitio existente — o podemos reconstruirlo como parte del ecosistema completo. Evaluaremos lo que tienes y recomendaremos el mejor camino. De cualquier manera, mantienes la propiedad total.' },
              },
              {
                q: { en: 'How is this different from Squarespace + Calendly + Mailchimp?', es: '¿En qué se diferencia de Squarespace + Calendly + Mailchimp?' },
                a: { en: 'Those tools don\'t talk to each other. When a client books through Calendly, Mailchimp doesn\'t know. When someone fills out your contact form, your CRM doesn\'t update. We build one integrated system where booking, email, CRM, and your website all share the same data — and AI handles the follow-ups automatically.', es: 'Esas herramientas no se comunican entre sí. Cuando un cliente reserva por Calendly, Mailchimp no se entera. Cuando alguien llena tu formulario, tu CRM no se actualiza. Nosotros construimos un sistema integrado donde reservas, email, CRM y tu sitio web comparten los mismos datos — y la IA maneja los seguimientos automáticamente.' },
              },
              {
                q: { en: 'Do I need to be technical to manage this after handoff?', es: '¿Necesito ser técnico para manejarlo después de la entrega?' },
                a: { en: 'Not at all. We build for non-technical professionals. You\'ll get video training, written guides, and a live walkthrough session. Plus 30 days of support after launch for any questions.', es: 'Para nada. Construimos para profesionales no técnicos. Recibirás capacitación en video, guías escritas y una sesión en vivo. Más 30 días de soporte después del lanzamiento para cualquier pregunta.' },
              },
              {
                q: { en: 'What does "full ownership" actually mean?', es: '¿Qué significa realmente "propiedad total"?' },
                a: { en: 'You own the code, the design, the data, and every credential. We hand over everything — no monthly platform fees, no lock-in, no "you need us to make changes." It\'s yours. If you want to hire someone else to maintain it later, you can.', es: 'Eres dueño del código, el diseño, los datos y cada credencial. Entregamos todo — sin cuotas mensuales de plataforma, sin ataduras, sin "nos necesitas para hacer cambios." Es tuyo. Si quieres contratar a alguien más para mantenerlo después, puedes.' },
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
                en: 'Their comprehensive growth strategy plan, tailored specifically for our needs, has not only given us a fresh, invigorated brand image but also opened up new revenue channels. This partnership has been a cornerstone in our journey towards a more dynamic and prosperous future.',
                es: 'Su plan integral de estrategia de crecimiento, diseñado específicamente para nuestras necesidades, no solo nos dio una imagen de marca fresca y renovada, sino que también abrió nuevos canales de ingresos. Esta asociación ha sido una piedra angular en nuestro camino hacia un futuro más dinámico y próspero.',
              })}
            </p>
            <div className="pt-6 border-t border-untold-border">
              <p className="font-sans font-black text-base uppercase tracking-tighter">William Berriochoa</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-gray mt-1">CEO, NoxGuard — US / Mexico</p>
            </div>
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
                  es: 'Cuéntanos Sobre Tu Práctica',
                })}
              </h3>
              <p className="text-lg sm:text-xl font-serif italic text-white/60 leading-relaxed max-w-xl">
                {t({
                  en: 'Share your info and we\'ll send you a breakdown of what your system could look like. No obligation, no pressure.',
                  es: 'Comparte tu información y te enviaremos un desglose de cómo podría verse tu sistema. Sin compromiso, sin presión.',
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
          <h2 className="font-sans font-black text-[clamp(2.5rem,10vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase">
            {t({
              en: 'Your Practice\nDeserves a System',
              es: 'Tu Práctica\nMerece un Sistema',
            })}
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray mb-8 max-w-2xl">
            {t({
              en: 'No lock-in. No monthly platform fees. Full ownership of everything we build — code, data, and credentials.',
              es: 'Sin ataduras. Sin cuotas mensuales de plataforma. Propiedad total de todo lo que construimos — código, datos y credenciales.',
            })}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-untold-orange mb-12">
            {t({ en: 'We take on 3 new professional services clients per month', es: 'Aceptamos 3 nuevos clientes de servicios profesionales por mes' })}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="group relative bg-untold-black text-white px-10 sm:px-16 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">
                {t({ en: 'Get Your System Blueprint', es: 'Obtén Tu Plan de Sistema' })}
              </span>
              <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
            <Link
              to="/solutions"
              className="border-2 border-untold-black px-10 sm:px-16 py-6 sm:py-8 font-sans font-black uppercase tracking-tighter text-lg sm:text-xl hover:bg-untold-black hover:text-white transition-all duration-300"
            >
              {t({ en: 'Compare All Tiers', es: 'Comparar Niveles' })}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalServices;
