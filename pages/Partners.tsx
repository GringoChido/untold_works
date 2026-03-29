import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import QuickLeadForm from '../components/QuickLeadForm';

const Partners: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Referral Partners — Earn by Connecting Businesses to Untold.works',
      es: 'Socios de Referencia — Gana Conectando Negocios con Untold.works'
    },
    {
      en: 'Refer businesses that need operational alignment systems. Earn 10% of first project value. Two tracks: casual referrals or ongoing strategic partnerships. No tiers, no portals, no complexity.',
      es: 'Refiere negocios que necesiten sistemas de alineación operativa. Gana el 10% del valor del primer proyecto. Dos vías: referidos casuales o alianzas estratégicas continuas. Sin niveles, sin portales, sin complejidad.'
    },
    {
      path: '/partners',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Referral Partners — Untold.works',
          description: 'Referral partner program for consultants, accountants, agencies, and professionals who encounter businesses with operational alignment problems. Earn 10% of first project value.',
          url: 'https://untold.works/partners',
          publisher: {
            '@type': 'Organization',
            '@id': 'https://untold.works/#organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How does the Untold.works referral program work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Introduce a business that needs operational alignment systems. If they become a client, you earn 10% of the first project value, paid when the client pays. One introduction, one check.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who can be a referral partner?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Anyone who encounters businesses with alignment problems: consultants, accountants, marketing agencies, IT providers, lawyers, real estate professionals, and ERP/CRM implementors.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between a referral partner and a strategic partner?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Referral partners send introductions as they come up — no commitment, no application. Strategic partners are professionals who refer regularly and want a reciprocal relationship: mutual referrals, co-branded case studies, and featured listing on the Untold.works site.',
              },
            },
          ],
        },
      ] as any,
    }
  );

  const partnerTypes = [
    {
      title: { en: 'Business Consultants & Fractional COOs', es: 'Consultores de Negocios y COOs Fraccionales' },
      desc: { en: 'You diagnose operational chaos — scattered data, misaligned teams, broken processes. Your clients need someone to build the technical solution.', es: 'Diagnosticas caos operativo — datos dispersos, equipos desalineados, procesos rotos. Tus clientes necesitan a alguien que construya la solución técnica.' },
    },
    {
      title: { en: 'Accountants & Fractional CFOs', es: 'Contadores y CFOs Fraccionales' },
      desc: { en: 'You see the data silos in the financials. Revenue attribution is guesswork. Reporting takes weeks because information lives in different systems.', es: 'Ves los silos de datos en las finanzas. La atribución de ingresos es adivinanza. Los reportes tardan semanas porque la información vive en diferentes sistemas.' },
    },
    {
      title: { en: 'Marketing Agencies That Don\'t Do Dev', es: 'Agencias de Marketing Que No Hacen Desarrollo' },
      desc: { en: 'You run great campaigns but the funnel behind them is broken. Leads come in and die. Your client needs the system, not more ads.', es: 'Ejecutas grandes campañas pero el funnel detrás está roto. Los leads llegan y mueren. Tu cliente necesita el sistema, no más anuncios.' },
    },
    {
      title: { en: 'IT Consultants & Managed Service Providers', es: 'Consultores de TI y Proveedores de Servicios Administrados' },
      desc: { en: 'You manage the tech stack but can\'t architect the operational layer on top. Your client needs systems that connect their tools into a coherent whole.', es: 'Administras el stack tecnológico pero no puedes arquitectar la capa operativa encima. Tu cliente necesita sistemas que conecten sus herramientas en un todo coherente.' },
    },
    {
      title: { en: 'Cross-Border Lawyers & Relocation Consultants', es: 'Abogados Transfronterizos y Consultores de Reubicación' },
      desc: { en: 'You help US businesses operate in Mexico. They need bilingual digital infrastructure — websites, WhatsApp systems, CRM — built by someone who understands both markets.', es: 'Ayudas a empresas de EE.UU. a operar en México. Necesitan infraestructura digital bilingüe — sitios web, sistemas WhatsApp, CRM — construida por alguien que entiende ambos mercados.' },
    },
    {
      title: { en: 'ERP & CRM Implementation Consultants', es: 'Consultores de Implementación de ERP y CRM' },
      desc: { en: 'You install Salesforce, HubSpot, or NetSuite. But your client needs everything around it — the website, the lead routing, the automation, the dashboards.', es: 'Instalas Salesforce, HubSpot o NetSuite. Pero tu cliente necesita todo lo que lo rodea — el sitio web, el enrutamiento de leads, la automatización, los dashboards.' },
    },
  ];

  const faqs = [
    {
      q: { en: 'How does the referral work?', es: '¿Cómo funciona la referencia?' },
      a: {
        en: 'Send an intro email connecting the business to Untold. CC us or make a warm introduction. We handle everything from there — discovery call, proposal, build, delivery. You don\'t need to sell, explain our services, or manage the relationship. One email.',
        es: 'Envía un email de introducción conectando al negocio con Untold. Ponernos en copia o hacer una presentación cálida. Nosotros manejamos todo desde ahí — llamada de descubrimiento, propuesta, construcción, entrega. No necesitas vender, explicar nuestros servicios ni manejar la relación. Un email.'
      },
    },
    {
      q: { en: 'How much do referral partners earn?', es: '¿Cuánto ganan los socios de referencia?' },
      a: {
        en: '10% of the first project value, paid when the client pays. Our projects range from $5,000 to $30,000+, so a single referral can earn $500 to $3,000+. No caps.',
        es: '10% del valor del primer proyecto, pagado cuando el cliente paga. Nuestros proyectos van de $5,000 a $30,000+, así que una sola referencia puede ganar $500 a $3,000+. Sin topes.'
      },
    },
    {
      q: { en: 'Is there an application process?', es: '¿Hay un proceso de solicitud?' },
      a: {
        en: 'For referral partners: no. Anyone can send a referral at any time. For strategic partners who want reciprocal referrals and a featured listing: yes, we have a brief conversation to make sure the fit is right.',
        es: 'Para socios de referencia: no. Cualquiera puede enviar una referencia en cualquier momento. Para socios estratégicos que quieren referidos recíprocos y un listado destacado: sí, tenemos una breve conversación para asegurar que el ajuste sea correcto.'
      },
    },
    {
      q: { en: 'What makes a good referral?', es: '¿Qué hace una buena referencia?' },
      a: {
        en: 'A business with 2+ employees that has outgrown their current tools. They\'re coordinating across people, locations, or partners using spreadsheets, email, and manual processes. They know something is broken but don\'t know how to fix it. That\'s our client.',
        es: 'Un negocio con 2+ empleados que ha superado sus herramientas actuales. Coordinan entre personas, ubicaciones o socios usando hojas de cálculo, email y procesos manuales. Saben que algo está roto pero no saben cómo arreglarlo. Ese es nuestro cliente.'
      },
    },
    {
      q: { en: 'Do you refer back to strategic partners?', es: '¿Refieren de vuelta a socios estratégicos?' },
      a: {
        en: 'Yes. Our clients regularly need accountants, lawyers, consultants, IT support, and marketing services. Strategic partners get first consideration for reciprocal referrals in their specialty.',
        es: 'Sí. Nuestros clientes regularmente necesitan contadores, abogados, consultores, soporte de TI y servicios de marketing. Los socios estratégicos reciben primera consideración para referidos recíprocos en su especialidad.'
      },
    },
    {
      q: { en: 'What geographies do you serve?', es: '¿Qué geografías atienden?' },
      a: {
        en: 'Mexico and the United States. We\'re based in San Miguel de Allende and serve businesses across both countries. Cross-border referrals are especially valuable — US businesses entering Mexico, Mexican businesses expanding to the US.',
        es: 'México y Estados Unidos. Estamos basados en San Miguel de Allende y atendemos negocios en ambos países. Las referencias transfronterizas son especialmente valiosas — empresas de EE.UU. entrando a México, negocios mexicanos expandiéndose a EE.UU.'
      },
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
                { label: { en: 'Partners', es: 'Socios' } },
              ]}
              variant="dark"
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'REFERRAL NETWORK', es: 'RED DE REFERIDOS' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'You See the Problem Every Day. We Build the Fix.', es: 'Ves el Problema Todos los Días. Nosotros Construimos la Solución.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Consultants, accountants, agencies, and advisors encounter businesses with broken operations every day. Refer them to Untold. We build the alignment system. You earn 10% of the first project.',
              es: 'Consultores, contadores, agencias y asesores encuentran negocios con operaciones rotas todos los días. Refiérelos a Untold. Nosotros construimos el sistema de alineación. Tú ganas el 10% del primer proyecto.'
            })}
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-untold-black px-8 py-3 sm:px-10 sm:py-4 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
            >
              {t({ en: 'Become a Partner', es: 'Ser Socio' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Two Tracks ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'Two Tracks. Zero Complexity.', es: 'Dos Vías. Cero Complejidad.' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'No tiers. No portals. No badges. Just a clear, honest referral relationship between professionals.',
              es: 'Sin niveles. Sin portales. Sin insignias. Solo una relación de referidos clara y honesta entre profesionales.'
            })}
          </p>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Track 1 */}
            <div className="border border-untold-border p-8 sm:p-12 bg-untold-beige">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
                {t({ en: 'TRACK 1', es: 'VÍA 1' })}
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-4 leading-[0.9]">
                {t({ en: 'Referral Partner', es: 'Socio de Referencia' })}
              </h3>
              <p className="font-serif text-untold-gray text-lg leading-relaxed mb-8">
                {t({
                  en: 'For anyone who encounters a business that needs help. No application. No commitment. Send an introduction when the moment is right.',
                  es: 'Para cualquiera que encuentre un negocio que necesite ayuda. Sin solicitud. Sin compromiso. Envía una introducción cuando el momento sea el correcto.'
                })}
              </p>
              <div className="space-y-4 border-t border-untold-border pt-6">
                {[
                  { en: 'Send one intro email connecting the business to Untold', es: 'Envía un email de introducción conectando al negocio con Untold' },
                  { en: 'We handle discovery, proposal, build, and delivery', es: 'Nosotros manejamos descubrimiento, propuesta, construcción y entrega' },
                  { en: 'Earn 10% of first project value when the client pays', es: 'Gana el 10% del valor del primer proyecto cuando el cliente paga' },
                  { en: 'Projects range from $5,000 to $30,000+', es: 'Los proyectos van de $5,000 a $30,000+' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-untold-orange font-mono text-sm font-bold mt-0.5">+</span>
                    <p className="font-serif text-sm text-untold-black leading-relaxed">{t(item)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2 */}
            <div className="border border-untold-orange/30 p-8 sm:p-12 bg-untold-black text-white">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
                {t({ en: 'TRACK 2', es: 'VÍA 2' })}
              </span>
              <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-4 leading-[0.9]">
                {t({ en: 'Strategic Partner', es: 'Socio Estratégico' })}
              </h3>
              <p className="font-serif text-white/60 text-lg leading-relaxed mb-8">
                {t({
                  en: 'For professionals who want an ongoing, reciprocal relationship. You refer to us. We refer back to you. We build together.',
                  es: 'Para profesionales que quieren una relación continua y recíproca. Tú refieres a nosotros. Nosotros referimos de vuelta a ti. Construimos juntos.'
                })}
              </p>
              <div className="space-y-4 border-t border-white/10 pt-6">
                {[
                  { en: 'Everything in Referral Partner, plus:', es: 'Todo lo de Socio de Referencia, más:' },
                  { en: 'Reciprocal referrals — your specialty, our clients', es: 'Referidos recíprocos — tu especialidad, nuestros clientes' },
                  { en: 'Featured listing on untold.works with your name, specialty, and link', es: 'Listado destacado en untold.works con tu nombre, especialidad y enlace' },
                  { en: 'Co-branded case studies when projects overlap', es: 'Casos de estudio co-branded cuando los proyectos se cruzan' },
                  { en: 'Brief conversation to confirm fit — not an application, a handshake', es: 'Breve conversación para confirmar ajuste — no una solicitud, un apretón de manos' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-untold-orange font-mono text-sm font-bold mt-0.5">+</span>
                    <p className="font-serif text-sm text-white/80 leading-relaxed">{t(item)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Process — 3 Steps ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE PROCESS', es: 'EL PROCESO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'One Introduction. That\'s It.', es: 'Una Introducción. Eso Es Todo.' })}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                title: { en: 'Introduce', es: 'Presenta' },
                desc: { en: 'Send an email connecting the business to Untold. A warm intro, a CC, a forwarded conversation — whatever feels natural. You don\'t need to pitch our services.', es: 'Envía un email conectando al negocio con Untold. Una intro cálida, un CC, una conversación reenviada — lo que se sienta natural. No necesitas vender nuestros servicios.' },
              },
              {
                num: '02',
                title: { en: 'We Build', es: 'Nosotros Construimos' },
                desc: { en: 'We run the discovery call, write the proposal, architect the system, and deliver the project. You stay informed but never have to manage anything.', es: 'Nosotros hacemos la llamada de descubrimiento, escribimos la propuesta, arquitectamos el sistema y entregamos el proyecto. Te mantienes informado pero nunca tienes que manejar nada.' },
              },
              {
                num: '03',
                title: { en: 'You Earn', es: 'Tú Ganas' },
                desc: { en: '10% of the first project value, paid when the client pays. No invoicing gymnastics — we send you a check. Your client gets a great result. You look good for making the connection.', es: '10% del valor del primer proyecto, pagado cuando el cliente paga. Sin gimnasia de facturación — te enviamos un pago. Tu cliente obtiene un gran resultado. Tú te ves bien por hacer la conexión.' },
              },
            ].map((step, idx) => (
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

      {/* ── Who This Is For ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'WHO THIS IS FOR', es: 'PARA QUIÉN ES ESTO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'You Already Know These Businesses', es: 'Ya Conoces a Estos Negocios' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'Every one of these professionals encounters businesses with alignment problems. If that\'s you — we should talk.',
              es: 'Cada uno de estos profesionales encuentra negocios con problemas de alineación. Si ese eres tú — deberíamos hablar.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((type, idx) => (
              <div key={idx} className="bg-untold-beige border border-untold-border p-6 sm:p-8">
                <h3 className="font-sans font-black text-base uppercase tracking-tighter mb-3">
                  {t(type.title)}
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed">
                  {t(type.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Math ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
            {t({ en: 'THE MATH', es: 'LAS CUENTAS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-12 leading-[0.85]">
            {t({ en: 'One Referral. Real Money.', es: 'Una Referencia. Dinero Real.' })}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                project: { en: 'Professional Services', es: 'Servicios Profesionales' },
                value: '$5,000',
                earn: '$500',
              },
              {
                project: { en: 'Small Business', es: 'Pequeña Empresa' },
                value: '$15,000',
                earn: '$1,500',
              },
              {
                project: { en: 'Enterprise', es: 'Empresarial' },
                value: '$30,000+',
                earn: '$3,000+',
              },
            ].map((tier, idx) => (
              <div key={idx} className="border border-white/10 p-6 sm:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 block mb-3">
                  {t(tier.project)}
                </span>
                <div className="font-sans font-black text-lg text-white/40 mb-1">
                  {tier.value} {t({ en: 'project', es: 'proyecto' })}
                </div>
                <div className="font-sans font-black text-3xl sm:text-4xl text-untold-orange tracking-tight">
                  {tier.earn}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 block mt-1">
                  {t({ en: 'your referral fee', es: 'tu comisión' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About Partnering', es: 'Preguntas Sobre Ser Socio' })}
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
                  <div className="pb-8 pr-0 sm:pr-12">
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

      {/* ── CTA ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'Let\'s Build a Referral Relationship.', es: 'Construyamos una Relación de Referidos.' })}
          </h2>
          <p className="font-serif italic text-untold-gray text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t({
              en: 'Whether you have a referral right now or want to explore a strategic partnership — reach out. One conversation is all it takes.',
              es: 'Ya sea que tengas una referencia ahora mismo o quieras explorar una alianza estratégica — contáctanos. Una conversación es todo lo que se necesita.'
            })}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-4 sm:space-x-8 group border border-untold-black/20 px-6 sm:px-12 py-5 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/5 transition-all"
          >
            <span className="font-sans font-black text-base sm:text-xl uppercase tracking-tighter">
              {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
            </span>
            <span className="text-4xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto">
          <QuickLeadForm />
        </div>
      </section>

    </div>
  );
};

export default Partners;
