import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const WhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'WhatsApp Business Systems — AI-Powered Communication for Mexico | Untold.works',
      es: 'Sistemas WhatsApp Business — Comunicación con IA para México | Untold.works'
    },
    {
      en: 'WhatsApp Business API integration with AI-powered lead qualification, shared team inboxes, automated follow-ups, and CRM integration. Built for businesses in Mexico and the United States.',
      es: 'Integración de WhatsApp Business API con calificación de leads con IA, buzones de equipo compartidos, seguimientos automatizados e integración CRM. Construido para negocios en México y Estados Unidos.'
    },
    {
      path: '/whatsapp',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'WhatsApp Business Systems — Untold.works',
          description: 'WhatsApp Business API integration with AI-powered lead qualification chatbot, shared team inbox, automated follow-up sequences, CRM integration, and analytics dashboard for businesses in Mexico and the United States.',
          url: 'https://untold.works/whatsapp',
          provider: {
            '@type': 'Organization',
            '@id': 'https://untold.works/#organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['WhatsApp Business API', 'AI Chatbot', 'Business Communication', 'Lead Qualification'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is the difference between WhatsApp Business and WhatsApp Business API?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'WhatsApp Business is the free app for small businesses — one phone, one user, basic catalog. WhatsApp Business API is the enterprise-grade platform that enables multi-agent shared inboxes, AI-powered automation, CRM integration, message templates, and analytics. We build on the API.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can you integrate WhatsApp with our existing CRM?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We connect WhatsApp Business API to Salesforce, HubSpot, Pipedrive, and custom CRMs through n8n automation. Every conversation is linked to a contact record with full history.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does the AI qualification chatbot work?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'When a new lead messages your WhatsApp number, an AI agent built with n8n and OpenAI engages in natural conversation to qualify intent, capture key information, and route the lead to the right team member — all within seconds.',
              },
            },
          ],
        },
      ] as any,
    }
  );

  const capabilities = [
    {
      title: { en: 'WhatsApp Business API Integration', es: 'Integración de WhatsApp Business API' },
      desc: { en: 'Enterprise-grade WhatsApp infrastructure — not the free app. Multi-agent access, message templates, and full API control.', es: 'Infraestructura WhatsApp de nivel empresarial — no la app gratuita. Acceso multi-agente, plantillas de mensajes y control total de la API.' },
    },
    {
      title: { en: 'AI-Powered Lead Qualification', es: 'Calificación de Leads con IA' },
      desc: { en: 'An AI chatbot built with n8n and OpenAI that qualifies leads in real-time through natural conversation — capturing intent, budget, and timeline before a human ever responds.', es: 'Un chatbot con IA construido con n8n y OpenAI que califica leads en tiempo real a través de conversación natural — capturando intención, presupuesto y cronograma antes de que un humano responda.' },
    },
    {
      title: { en: 'Shared Team Inbox', es: 'Buzón Compartido de Equipo' },
      desc: { en: 'Multiple team members managing conversations from one number. Auto-assignment, internal notes, conversation history, and manager visibility.', es: 'Múltiples miembros del equipo gestionando conversaciones desde un solo número. Auto-asignación, notas internas, historial de conversaciones y visibilidad gerencial.' },
    },
    {
      title: { en: 'Message Templates & Quick Replies', es: 'Plantillas de Mensajes y Respuestas Rápidas' },
      desc: { en: 'Pre-approved message templates for outbound communication and quick replies for common questions — maintaining brand consistency across every conversation.', es: 'Plantillas de mensajes pre-aprobadas para comunicación saliente y respuestas rápidas para preguntas comunes — manteniendo consistencia de marca en cada conversación.' },
    },
    {
      title: { en: 'Automated Follow-Up Sequences', es: 'Secuencias de Seguimiento Automatizadas' },
      desc: { en: 'Time-based follow-up sequences that re-engage leads who go quiet. No conversation dies because someone forgot to follow up.', es: 'Secuencias de seguimiento basadas en tiempo que re-enganchan leads que se quedan callados. Ninguna conversación muere porque alguien olvidó dar seguimiento.' },
    },
    {
      title: { en: 'CRM Integration', es: 'Integración CRM' },
      desc: { en: 'Every WhatsApp conversation linked to a contact record in your CRM. Full conversation history, lead scoring, and pipeline tracking.', es: 'Cada conversación de WhatsApp vinculada a un registro de contacto en tu CRM. Historial completo de conversaciones, scoring de leads y seguimiento de pipeline.' },
    },
    {
      title: { en: 'Analytics Dashboard', es: 'Dashboard de Analítica' },
      desc: { en: 'Response times, conversation volume, conversion rates, team performance, and customer satisfaction — all in one dashboard.', es: 'Tiempos de respuesta, volumen de conversaciones, tasas de conversión, rendimiento del equipo y satisfacción del cliente — todo en un dashboard.' },
    },
    {
      title: { en: 'Multi-Language Support', es: 'Soporte Multi-Idioma' },
      desc: { en: 'AI chatbot and templates in English and Spanish. Automatic language detection routes conversations to the right-language agent.', es: 'Chatbot con IA y plantillas en inglés y español. Detección automática de idioma enruta conversaciones al agente del idioma correcto.' },
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Communication Audit', es: 'Auditoría de Comunicación' },
      desc: {
        en: 'We map your current WhatsApp usage, lead flow, and communication gaps. Who talks to whom, what falls through the cracks, and where conversations die.',
        es: 'Mapeamos tu uso actual de WhatsApp, flujo de leads y brechas de comunicación. Quién habla con quién, qué se pierde y dónde mueren las conversaciones.'
      },
    },
    {
      num: '02',
      title: { en: 'System Architecture', es: 'Arquitectura del Sistema' },
      desc: {
        en: 'We design the WhatsApp Business API setup, AI qualification flows, routing rules, and CRM integration based on your team structure and sales process.',
        es: 'Diseñamos la configuración de WhatsApp Business API, flujos de calificación con IA, reglas de enrutamiento e integración CRM basados en tu estructura de equipo y proceso de ventas.'
      },
    },
    {
      num: '03',
      title: { en: 'Build & Integration', es: 'Construcción e Integración' },
      desc: {
        en: 'We deploy the full WhatsApp system — API setup, AI chatbot training, CRM connections, templates, and the shared inbox. Your team gets hands-on training.',
        es: 'Desplegamos el sistema completo de WhatsApp — configuración de API, entrenamiento del chatbot con IA, conexiones CRM, plantillas y el buzón compartido. Tu equipo recibe capacitación práctica.'
      },
    },
    {
      num: '04',
      title: { en: 'Optimize & Scale', es: 'Optimizar y Escalar' },
      desc: {
        en: 'We monitor conversation data, refine the AI qualification, and optimize response workflows. As your team grows, the system scales with you.',
        es: 'Monitoreamos datos de conversaciones, refinamos la calificación con IA y optimizamos flujos de respuesta. Conforme tu equipo crece, el sistema escala contigo.'
      },
    },
  ];

  const faqs = [
    {
      q: { en: 'What is the difference between WhatsApp Business and WhatsApp Business API?', es: '¿Cuál es la diferencia entre WhatsApp Business y WhatsApp Business API?' },
      a: {
        en: 'WhatsApp Business is the free app for small businesses — one phone, one user, basic catalog. WhatsApp Business API is the enterprise-grade platform that enables multi-agent shared inboxes, AI-powered automation, CRM integration, message templates, and analytics. We build on the API.',
        es: 'WhatsApp Business es la app gratuita para pequeños negocios — un teléfono, un usuario, catálogo básico. WhatsApp Business API es la plataforma de nivel empresarial que permite buzones compartidos multi-agente, automatización con IA, integración CRM, plantillas de mensajes y analítica. Nosotros construimos sobre la API.'
      },
    },
    {
      q: { en: 'Can you integrate WhatsApp with our existing CRM?', es: '¿Pueden integrar WhatsApp con nuestro CRM existente?' },
      a: {
        en: 'Yes. We connect WhatsApp Business API to Salesforce, HubSpot, Pipedrive, and custom CRMs through n8n automation. Every conversation is linked to a contact record with full history.',
        es: 'Sí. Conectamos WhatsApp Business API a Salesforce, HubSpot, Pipedrive y CRMs personalizados a través de automatización n8n. Cada conversación se vincula a un registro de contacto con historial completo.'
      },
    },
    {
      q: { en: 'How does the AI qualification chatbot work?', es: '¿Cómo funciona el chatbot de calificación con IA?' },
      a: {
        en: 'When a new lead messages your WhatsApp number, an AI agent built with n8n and OpenAI engages in natural conversation to qualify intent, capture key information (budget, timeline, requirements), and route the lead to the right team member — all within seconds. No lead waits for a human to manually triage.',
        es: 'Cuando un nuevo lead envía mensaje a tu número de WhatsApp, un agente de IA construido con n8n y OpenAI entabla conversación natural para calificar intención, capturar información clave (presupuesto, cronograma, requisitos) y enrutar al lead al miembro correcto del equipo — todo en segundos. Ningún lead espera a que un humano haga triaje manual.'
      },
    },
    {
      q: { en: 'Why can\'t we just use the free WhatsApp Business app?', es: '¿Por qué no podemos simplemente usar la app gratuita de WhatsApp Business?' },
      a: {
        en: 'The free app works for one person on one phone. The moment you have a team, multiple lead sources, or need to track conversations — you need the API. No shared inbox, no automation, no CRM link, no analytics. Personal WhatsApp for business means leads leak, conversations die, and managers have zero visibility.',
        es: 'La app gratuita funciona para una persona en un teléfono. En el momento en que tienes un equipo, múltiples fuentes de leads, o necesitas rastrear conversaciones — necesitas la API. Sin buzón compartido, sin automatización, sin conexión CRM, sin analítica. WhatsApp personal para negocios significa leads que se pierden, conversaciones que mueren y gerentes sin visibilidad.'
      },
    },
    {
      q: { en: 'Is this relevant for businesses in the United States?', es: '¿Esto es relevante para negocios en Estados Unidos?' },
      a: {
        en: 'Absolutely. If your business serves Hispanic markets, works with partners in Mexico or Latin America, or has any cross-border operations — WhatsApp is how your customers and partners prefer to communicate. US agencies don\'t build these systems. We do.',
        es: 'Absolutamente. Si tu negocio atiende mercados hispanos, trabaja con socios en México o Latinoamérica, o tiene operaciones transfronterizas — WhatsApp es cómo tus clientes y socios prefieren comunicarse. Las agencias de EE.UU. no construyen estos sistemas. Nosotros sí.'
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
                { label: { en: 'Network Systems', es: 'Network Systems' }, path: '/network-systems' },
                { label: { en: 'WhatsApp Systems', es: 'Sistemas WhatsApp' } },
              ]}
              variant="dark"
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'WHATSAPP SYSTEMS', es: 'SISTEMAS WHATSAPP' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'WhatsApp Is How Mexico Does Business. We Make It a System.', es: 'WhatsApp Es Cómo México Hace Negocios. Nosotros Lo Convertimos en Sistema.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Most businesses run WhatsApp on personal phones with no shared visibility, no routing, and no follow-up tracking. Conversations die. Leads leak. Managers have zero visibility into what\'s happening. We fix that.',
              es: 'La mayoría de los negocios usan WhatsApp en teléfonos personales sin visibilidad compartida, sin enrutamiento y sin seguimiento. Las conversaciones mueren. Los leads se pierden. Los gerentes no tienen visibilidad de lo que sucede. Nosotros lo arreglamos.'
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
            {t({ en: 'WHATSAPP BUSINESS INFRASTRUCTURE', es: 'INFRAESTRUCTURA WHATSAPP BUSINESS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'What We Build', es: 'Lo Que Construimos' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'A complete WhatsApp Business API system with AI qualification, shared team access, automated follow-ups, and full CRM integration.',
              es: 'Un sistema completo de WhatsApp Business API con calificación con IA, acceso compartido de equipo, seguimientos automatizados e integración CRM completa.'
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-untold-beige border border-untold-border p-6 sm:p-8">
                <h3 className="font-sans font-black text-base uppercase tracking-tighter mb-3">
                  {t(cap.title)}
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed">
                  {t(cap.desc)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-untold-black text-white p-8 sm:p-10 border border-untold-orange/30">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-untold-orange font-bold mb-4">
              {t({ en: 'THE CROSS-BORDER ADVANTAGE', es: 'LA VENTAJA TRANSFRONTERIZA' })}
            </p>
            <p className="font-serif text-lg italic leading-relaxed">
              {t({
                en: 'US agencies don\'t build WhatsApp systems. Mexican businesses need them. Untold bridges both — we understand WhatsApp Business API at a technical level and build systems that serve teams across Mexico and the United States.',
                es: 'Las agencias de EE.UU. no construyen sistemas WhatsApp. Los negocios mexicanos los necesitan. Untold conecta ambos mundos — entendemos WhatsApp Business API a nivel técnico y construimos sistemas que sirven a equipos en México y Estados Unidos.'
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
                {t({ en: 'THE PROBLEM', es: 'EL PROBLEMA' })}
              </span>
              <p className="text-xl font-serif italic text-white/60 leading-relaxed">
                {t({
                  en: 'Your sales team uses personal WhatsApp accounts. When someone leaves, their conversations leave with them. Leads come in and nobody knows who responded, what was said, or whether the follow-up happened. The owner has zero visibility into the most important communication channel in their business.',
                  es: 'Tu equipo de ventas usa cuentas personales de WhatsApp. Cuando alguien se va, sus conversaciones se van con ellos. Llegan leads y nadie sabe quién respondió, qué se dijo, o si el seguimiento se hizo. El dueño no tiene visibilidad del canal de comunicación más importante de su negocio.'
                })}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
                {t({ en: 'THE FIX', es: 'LA SOLUCIÓN' })}
              </span>
              <p className="text-xl font-serif italic text-white/60 leading-relaxed">
                {t({
                  en: 'One business number. Shared team inbox. AI qualification on every inbound lead. Automated follow-ups. Every conversation linked to a CRM record. Managers see response times, conversion rates, and team performance in real-time. WhatsApp becomes a system, not a liability.',
                  es: 'Un número de negocio. Buzón compartido de equipo. Calificación con IA en cada lead entrante. Seguimientos automatizados. Cada conversación vinculada a un registro CRM. Los gerentes ven tiempos de respuesta, tasas de conversión y rendimiento del equipo en tiempo real. WhatsApp se convierte en un sistema, no en un riesgo.'
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
            {t({ en: 'Questions About WhatsApp Systems', es: 'Preguntas Sobre Sistemas WhatsApp' })}
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

      {/* ── Network Connector ── */}
      <NetworkConnector
        capability={{ en: 'WhatsApp Systems', es: 'Sistemas WhatsApp' }}
        networkDescription={{
          en: 'Transform WhatsApp from scattered personal conversations into a structured business communication system. AI-powered lead qualification, shared team inbox, automated follow-ups, and full CRM integration — so no conversation dies and no lead leaks.',
          es: 'Transforma WhatsApp de conversaciones personales dispersas en un sistema de comunicación empresarial estructurado. Calificación de leads con IA, buzón compartido de equipo, seguimientos automatizados e integración CRM completa — para que ninguna conversación muera y ningún lead se pierda.',
        }}
        relatedCapabilities={[
          { name: { en: 'Sales Enablement', es: 'Habilitación de Ventas' }, path: '/sales-enablement' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
          { name: { en: 'Reviews & Reputation', es: 'Reseñas y Reputación' }, path: '/review-reputation' },
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

export default WhatsApp;
