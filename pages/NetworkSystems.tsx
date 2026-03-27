import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

const NetworkSystems: React.FC = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'Network Systems — AI-Powered Digital Infrastructure for Business Networks | Untold.works',
      es: 'Network Systems — Infraestructura Digital con IA para Redes de Negocios | Untold.works',
    },
    {
      en: 'Deploy AI-powered digital systems across your entire business network. Websites, SEO/AEO/GEO, dashboards, sales enablement, and mobile apps — one system, every location. Manufacturers, restaurant groups, franchise systems, and brand networks.',
      es: 'Despliega sistemas digitales con IA en toda tu red de negocios. Sitios web, SEO/AEO/GEO, dashboards, habilitación de ventas y apps móviles — un sistema, cada ubicación. Fabricantes, grupos restauranteros, franquicias y redes de marca.',
    },
    {
      path: '/network-systems',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Network Systems — AI-Powered Digital Infrastructure',
          provider: { '@type': 'Organization', name: 'Untold.works', url: 'https://untold.works' },
          description: 'AI-powered digital systems deployed across entire business networks. Unified websites, SEO/AEO/GEO, dashboards, sales enablement, mobile apps, and system operations for manufacturer-dealer networks, franchise systems, restaurant groups, and brand networks.',
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['Network Digital Infrastructure', 'Dealer Network Enablement', 'Multi-Location Digital Systems', 'AI Business Systems'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Will my dealers lose SEO rankings when migrating to the new system?', acceptedAnswer: { '@type': 'Answer', text: 'No. We handle full SEO migration with 301 redirects, preserved URL structures, and enhanced technical SEO. Most dealer sites see improved rankings within 60 days because the new system is built with modern SEO, AEO, and GEO best practices. For dormant sites with minimal existing rankings, the new system creates a massive improvement from day one.' } },
            { '@type': 'Question', name: 'Do we own the websites and systems you build?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Full ownership transfer is part of every engagement. Code, data, content, documentation — it is all yours. No lock-in, no hostage situations. The ongoing system operations fee covers continuous optimization and management, not access to your own assets.' } },
            { '@type': 'Question', name: 'What if our dealers are not tech-savvy?', acceptedAnswer: { '@type': 'Answer', text: 'The system is designed to run without dealers needing to do anything. They do not manage the site, write content, or configure SEO. The system handles it. Dealers get a simple dashboard showing their leads and performance. That is it.' } },
            { '@type': 'Question', name: 'How long does it take to deploy across a network?', acceptedAnswer: { '@type': 'Answer', text: 'We pilot with 2-3 locations in 3-4 weeks, then roll out across the full network in phases. Each additional deployment gets faster as the system is already configured for your brand. A 30-location network can be fully deployed in 3-4 months.' } },
          ],
        },
      ],
    }
  );

  const scopeItems = [
    {
      category: { en: 'BRAND & CREATIVE', es: 'MARCA Y CREATIVIDAD' },
      items: [
        { en: 'Brand guidelines enforcement across every location', es: 'Aplicación de lineamientos de marca en cada ubicación' },
        { en: 'Photography and video for each location and product line', es: 'Fotografía y video para cada ubicación y línea de productos' },
        { en: 'Campaign creative, seasonal assets, and promotional materials', es: 'Creatividad de campaña, materiales estacionales y promocionales' },
        { en: 'Localized creative variations per market', es: 'Variaciones creativas localizadas por mercado' },
        { en: 'Copywriting and brand messaging across every touchpoint', es: 'Copywriting y mensajes de marca en cada punto de contacto' },
      ],
    },
    {
      category: { en: 'WEB & DIGITAL INFRASTRUCTURE', es: 'WEB E INFRAESTRUCTURA DIGITAL' },
      items: [
        { en: 'Individual websites designed, built, hosted, secured, and maintained per location', es: 'Sitios web individuales diseñados, construidos, alojados, asegurados y mantenidos por ubicación' },
        { en: 'Mobile optimization, ADA compliance, and performance monitoring', es: 'Optimización móvil, accesibilidad ADA y monitoreo de rendimiento' },
        { en: 'CMS management and continuous content updates', es: 'Gestión de CMS y actualizaciones continuas de contenido' },
        { en: 'Customer-facing and internal mobile applications', es: 'Aplicaciones móviles para clientes e internas' },
      ],
    },
    {
      category: { en: 'SEO, AEO & GEO', es: 'SEO, AEO Y GEO' },
      items: [
        { en: 'Local SEO for every location and market', es: 'SEO local para cada ubicación y mercado' },
        { en: 'AEO optimization so AI assistants recommend your brand', es: 'Optimización AEO para que asistentes de IA recomienden tu marca' },
        { en: 'GEO for visibility in generative search results', es: 'GEO para visibilidad en resultados de búsqueda generativa' },
        { en: 'Google Business Profile management per location', es: 'Gestión de Google Business Profile por ubicación' },
        { en: 'Review generation and reputation monitoring', es: 'Generación de reseñas y monitoreo de reputación' },
      ],
    },
    {
      category: { en: 'CONTENT & SOCIAL', es: 'CONTENIDO Y REDES SOCIALES' },
      items: [
        { en: 'Blog content, thought leadership, and buying guides', es: 'Contenido de blog, liderazgo de pensamiento y guías de compra' },
        { en: 'Social media across multiple platforms per location', es: 'Redes sociales en múltiples plataformas por ubicación' },
        { en: 'Email marketing campaigns and automated sequences', es: 'Campañas de email marketing y secuencias automatizadas' },
        { en: 'Seasonal content calendars and quarterly campaigns', es: 'Calendarios estacionales y campañas trimestrales' },
      ],
    },
    {
      category: { en: 'PAID MEDIA', es: 'MEDIOS PAGADOS' },
      items: [
        { en: 'Campaign strategy and creative per market', es: 'Estrategia de campaña y creatividad por mercado' },
        { en: 'Audience targeting, retargeting, and budget allocation', es: 'Segmentación, retargeting y asignación de presupuesto' },
        { en: 'Performance optimization and ROI reporting', es: 'Optimización de rendimiento y reportes de ROI' },
      ],
    },
    {
      category: { en: 'SALES ENABLEMENT', es: 'HABILITACIÓN DE VENTAS' },
      items: [
        { en: 'Product comparison tools and digital catalogs', es: 'Herramientas de comparación y catálogos digitales' },
        { en: 'Financing calculators and quote request flows', es: 'Calculadoras de financiamiento y flujos de cotización' },
        { en: 'Competitive battle cards and sales collateral', es: 'Battle cards competitivas y materiales de ventas' },
        { en: 'Lead capture, routing, and CRM integration', es: 'Captura de leads, enrutamiento e integración con CRM' },
      ],
    },
    {
      category: { en: 'ANALYTICS & INTELLIGENCE', es: 'ANALÍTICA E INTELIGENCIA' },
      items: [
        { en: 'Traffic, conversion, and lead tracking per location', es: 'Seguimiento de tráfico, conversiones y leads por ubicación' },
        { en: 'Network-wide performance dashboards for HQ', es: 'Dashboards de rendimiento de la red para oficina central' },
        { en: 'Full integration with Salesforce, HubSpot, GA4, POS, and existing tools', es: 'Integración completa con Salesforce, HubSpot, GA4, POS y herramientas existentes' },
        { en: 'Custom AI assistant trained on your organization data', es: 'Asistente de IA personalizado entrenado con los datos de tu organización' },
        { en: 'Market demand and product trend analysis', es: 'Análisis de demanda de mercado y tendencias de productos' },
      ],
    },
    {
      category: { en: 'OPERATIONS & MANAGEMENT', es: 'OPERACIONES Y GESTIÓN' },
      items: [
        { en: 'Project management across every account', es: 'Gestión de proyectos en cada cuenta' },
        { en: 'Quarterly campaign coordination and deployment', es: 'Coordinación y despliegue de campañas trimestrales' },
        { en: 'Quality control, brand compliance, and reporting', es: 'Control de calidad, cumplimiento de marca y reportes' },
        { en: 'Hosting, security, uptime, and system maintenance', es: 'Hosting, seguridad, uptime y mantenimiento del sistema' },
      ],
    },
  ];

  const capabilities = [
    {
      group: { en: 'DIGITAL PRESENCE', es: 'PRESENCIA DIGITAL' },
      groupSub: { en: 'Get Found', es: 'Que Te Encuentren' },
      items: [
        { name: { en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' }, link: '/websites', desc: { en: 'AI-built, brand-first, mobile-ready websites deployed across every location in your network.', es: 'Sitios web construidos con IA, marca primero, mobile-ready, desplegados en cada ubicación de tu red.' } },
        { name: { en: 'Copywriting & Brand Messaging', es: 'Copywriting y Mensajes de Marca' }, link: '/copywriting', desc: { en: 'Website copy, ad copy, email sequences, product descriptions. One brand voice, consistent everywhere.', es: 'Copy web, copy publicitario, secuencias de email, descripciones de productos. Una voz de marca, consistente en todos lados.' } },
        { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, link: '/seo-aeo', desc: { en: 'Search dominance, AI recommendations, and generative search visibility. The compounding network effect.', es: 'Dominio en búsquedas, recomendaciones de IA y visibilidad en búsquedas generativas. El efecto de red compuesto.' } },
        { name: { en: 'AI Content Engine', es: 'Motor de Contenido con IA' }, link: '/ai-content', desc: { en: 'Continuous automated content — blogs, product spotlights, seasonal guides. Sites never go stale.', es: 'Contenido automatizado continuo — blogs, destacados de productos, guías estacionales. Los sitios nunca se estancan.' } },
        { name: { en: 'Social Media', es: 'Redes Sociales' }, link: '/social-media', desc: { en: 'Coordinated presence across platforms. Campaign assets pushed to every location simultaneously.', es: 'Presencia coordinada en plataformas. Materiales de campaña distribuidos a cada ubicación simultáneamente.' } },
        { name: { en: 'Paid Advertising', es: 'Publicidad Pagada' }, link: '/ads', desc: { en: 'Google, Meta, LinkedIn. Coordinated media across markets with network-wide budget optimization.', es: 'Google, Meta, LinkedIn. Medios coordinados en mercados con optimización de presupuesto a nivel de red.' } },
      ],
    },
    {
      group: { en: 'BUSINESS OPERATIONS', es: 'OPERACIONES DE NEGOCIO' },
      groupSub: { en: 'Run the Business', es: 'Opera el Negocio' },
      items: [
        { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, link: '/dashboard', desc: { en: 'Full integration with Salesforce, HubSpot, GA4, POS — every tool in your stack. Custom internal dashboards with a built-in AI assistant trained on your organization.', es: 'Integración completa con Salesforce, HubSpot, GA4, POS — cada herramienta de tu stack. Dashboards internos personalizados con asistente de IA entrenado en tu organización.' } },
        { name: { en: 'Sales Enablement', es: 'Habilitación de Ventas' }, link: '/sales-enablement', desc: { en: 'Product sheets, comparison tools, financing calculators, quote flows, battle cards — updated automatically as your product line evolves.', es: 'Fichas de producto, herramientas de comparación, calculadoras de financiamiento, flujos de cotización, battle cards — actualizados automáticamente conforme evoluciona tu línea.' } },
        { name: { en: 'Mobile Applications', es: 'Aplicaciones Móviles' }, link: '/mobile-apps', desc: { en: 'Customer-facing apps, sales floor tools, management apps. Your network in every pocket.', es: 'Apps para clientes, herramientas para piso de ventas, apps de gestión. Tu red en cada bolsillo.' } },
      ],
    },
    {
      group: { en: 'INFRASTRUCTURE', es: 'INFRAESTRUCTURA' },
      groupSub: { en: 'Keep It Running', es: 'Mantenlo Funcionando' },
      items: [
        { name: { en: 'Hosting & System Operations', es: 'Hosting y Operación del Sistema' }, link: '/hosting', desc: { en: 'Security, uptime, continuous SEO optimization, content generation, campaign deployment, monitoring. One monthly fee. Everything managed.', es: 'Seguridad, uptime, optimización SEO continua, generación de contenido, despliegue de campañas, monitoreo. Una cuota mensual. Todo gestionado.' } },
        { name: { en: 'Review & Reputation Management', es: 'Gestión de Reseñas y Reputación' }, link: '/review-reputation', desc: { en: 'Automated review flows, monitoring, and response across Google, Yelp, and industry platforms.', es: 'Flujos automatizados de reseñas, monitoreo y respuesta en Google, Yelp y plataformas de la industria.' } },
      ],
    },
  ];

  const faqs = [
    {
      q: { en: 'Will my locations lose their existing SEO rankings when we migrate?', es: '¿Mis ubicaciones perderán su posicionamiento SEO al migrar?' },
      a: { en: 'No. We handle full SEO migration with 301 redirects, preserved URL structures, and enhanced technical SEO. Most sites see improved rankings within 60 days because the new system is built with modern SEO, AEO, and GEO best practices. For dormant sites with minimal existing rankings, the new system creates a massive improvement from day one.', es: 'No. Manejamos la migración SEO completa con redirecciones 301, estructuras de URL preservadas y SEO técnico mejorado. La mayoría de los sitios ven mejoras en su posicionamiento dentro de 60 días porque el nuevo sistema está construido con las mejores prácticas modernas de SEO, AEO y GEO. Para sitios dormidos con poco posicionamiento existente, el nuevo sistema crea una mejora masiva desde el día uno.' },
    },
    {
      q: { en: 'Do we own the websites and systems you build?', es: '¿Somos dueños de los sitios web y sistemas que construyen?' },
      a: { en: 'Yes. Full ownership transfer is part of every engagement. Code, data, content, documentation — it\'s all yours. No lock-in, no hostage situations. The ongoing system operations fee covers continuous optimization and management, not access to your own assets.', es: 'Sí. La transferencia total de propiedad es parte de cada proyecto. Código, datos, contenido, documentación — todo es tuyo. Sin candados, sin rehenes. La cuota mensual de operación del sistema cubre optimización y gestión continua, no el acceso a tus propios activos.' },
    },
    {
      q: { en: 'What if our dealers or locations aren\'t tech-savvy?', es: '¿Qué pasa si nuestros distribuidores no son expertos en tecnología?' },
      a: { en: 'The system is designed to run without anyone at the location needing to do anything. They don\'t manage the site, write content, or configure SEO. The system handles it. They get a simple dashboard showing their leads and performance — and an AI assistant they can ask questions in plain language. That\'s it.', es: 'El sistema está diseñado para funcionar sin que nadie en la ubicación necesite hacer nada. No gestionan el sitio, no escriben contenido, no configuran SEO. El sistema lo maneja. Reciben un dashboard simple mostrando sus leads y rendimiento — y un asistente de IA al que pueden hacer preguntas en lenguaje normal. Eso es todo.' },
    },
    {
      q: { en: 'How long does it take to deploy across our network?', es: '¿Cuánto tiempo toma desplegar en toda nuestra red?' },
      a: { en: 'We pilot with 2-3 locations in 3-4 weeks. Then roll out across the full network in phases. Each additional deployment gets faster because the system is already configured for your brand. A 30-location network can be fully deployed in 3-4 months.', es: 'Hacemos piloto con 2-3 ubicaciones en 3-4 semanas. Luego desplegamos en toda la red por fases. Cada despliegue adicional es más rápido porque el sistema ya está configurado para tu marca. Una red de 30 ubicaciones puede desplegarse completamente en 3-4 meses.' },
    },
    {
      q: { en: 'Is AI-generated content good enough to represent our brand?', es: '¿El contenido generado por IA es suficientemente bueno para representar nuestra marca?' },
      a: { en: 'AI is the engine, but the system is configured to your brand voice, your product specifications, your messaging standards. The content is reviewed and refined through our quality process. Look at the case studies below — if you can\'t tell it\'s AI-generated, the question answers itself.', es: 'La IA es el motor, pero el sistema está configurado con tu voz de marca, tus especificaciones de producto, tus estándares de mensaje. El contenido es revisado y refinado a través de nuestro proceso de calidad. Mira los casos de estudio abajo — si no puedes notar que es generado por IA, la pregunta se responde sola.' },
    },
    {
      q: { en: 'What if our competitors do the same thing?', es: '¿Qué pasa si nuestros competidores hacen lo mismo?' },
      a: { en: 'First-mover advantage is real. The network SEO/AEO/GEO effect compounds over time — every month your unified network is live, you\'re building a gap that\'s extremely difficult to close. The brand that moves first creates a digital moat. Every month you wait is a month your competitors could be building theirs.', es: 'La ventaja del primero en moverse es real. El efecto de red en SEO/AEO/GEO se compone con el tiempo — cada mes que tu red unificada está activa, construyes una brecha que es extremadamente difícil de cerrar. La marca que se mueve primero crea un foso digital. Cada mes que esperas es un mes que tus competidores podrían estar construyendo el suyo.' },
    },
    {
      q: { en: 'How does this compare to each location hiring their own agency?', es: '¿Cómo se compara con que cada ubicación contrate su propia agencia?' },
      a: { en: 'Thirty locations hiring individual agencies means thirty separate strategies, zero coordination, zero network effects, and a combined spend of $90K-$150K per month with nothing connecting them. A unified system costs a fraction of that and every site strengthens every other site. It\'s not just cheaper — it\'s exponentially more effective.', es: 'Treinta ubicaciones contratando agencias individuales significa treinta estrategias separadas, cero coordinación, cero efectos de red y un gasto combinado de $90K-$150K por mes sin nada conectándolos. Un sistema unificado cuesta una fracción de eso y cada sitio fortalece a todos los demás. No solo es más barato — es exponencialmente más efectivo.' },
    },
    {
      q: { en: 'What happens if we cancel?', es: '¿Qué pasa si cancelamos?' },
      a: { en: 'The sites are yours. The content is yours. The data is yours. Full ownership, always. But the system operations stop — content stops generating, SEO stops compounding, campaigns stop deploying, the AI visibility fades. The value is in the continuous operation, not just the initial build.', es: 'Los sitios son tuyos. El contenido es tuyo. Los datos son tuyos. Propiedad total, siempre. Pero las operaciones del sistema se detienen — el contenido deja de generarse, el SEO deja de componerse, las campañas dejan de desplegarse, la visibilidad de IA se desvanece. El valor está en la operación continua, no solo en la construcción inicial.' },
    },
  ];

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* ═══════════════════════════════════════════════════════════
          HERO — Name the Problem
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 pt-12 sm:pt-20 pb-20 sm:pb-32 lg:pb-48">
        <div className="max-w-[1440px] mx-auto">
          <Breadcrumbs
            crumbs={[
              { label: { en: 'Home', es: 'Inicio' }, path: '/' },
              { label: { en: 'Network Systems', es: 'Network Systems' } },
            ]}
            variant="dark"
          />

          <div className="mt-12 sm:mt-20">
            <div className="flex items-center space-x-4 mb-8 sm:mb-12">
              <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
              <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/50">
                {t({ en: 'FLAGSHIP OFFERING', es: 'OFERTA PRINCIPAL' })}
              </p>
            </div>

            <h1 className="font-sans font-black text-[clamp(2.2rem,7vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase text-white">
              {t({ en: 'Your Network Is Your Most Powerful Asset.', es: 'Tu Red Es Tu Activo Más Poderoso.' })}
              <br />
              <span className="text-untold-orange">
                {t({ en: 'Or Your Biggest Liability.', es: 'O Tu Mayor Vulnerabilidad.' })}
              </span>
            </h1>

            <div className="max-w-3xl">
              <p className="text-xl sm:text-2xl font-serif italic text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'You invest in your brand. But at the point of sale — your dealers\' websites, your franchisees\' digital storefronts, your partners\' online presence — your brand disappears. Outdated sites. Broken links. Competitor products alongside yours.',
                  es: 'Inviertes en tu marca. Pero en el punto de venta — los sitios web de tus distribuidores, los escaparates digitales de tus franquiciatarios, la presencia en línea de tus socios — tu marca desaparece. Sitios desactualizados. Links rotos. Productos de la competencia junto a los tuyos.',
                })}
              </p>
              <p className="text-lg font-serif text-white/50 leading-relaxed">
                {t({
                  en: 'We deploy AI-powered digital systems across your entire network. One platform. Every location. Continuously running.',
                  es: 'Desplegamos sistemas digitales con IA en toda tu red. Una plataforma. Cada ubicación. Funcionando continuamente.',
                })}
              </p>
            </div>

            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-white/5 backdrop-blur-sm px-8 sm:px-16 py-6 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/10 transition-all"
              >
                <span className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter text-white">
                  {t({ en: 'Let\'s Talk About Your Network', es: 'Hablemos de Tu Red' })}
                </span>
                <span className="text-3xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE SCOPE — What it actually takes
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'THE REALITY', es: 'LA REALIDAD' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'Here\'s What It Actually Takes to Digitally Enable a 30-Location Network.', es: 'Esto Es Lo Que Realmente Se Necesita Para Habilitar Digitalmente una Red de 30 Ubicaciones.' })}
          </h2>

          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-16">
            {t({
              en: 'A traditional agency would staff this with 12-15 specialists: web developers, designers, SEO analysts, content writers, social media managers, paid media buyers, analytics specialists, project managers, and account directors. Annual cost: $800K – $1.2M.',
              es: 'Una agencia tradicional asignaría 12-15 especialistas: desarrolladores web, diseñadores, analistas SEO, redactores, community managers, media buyers, especialistas en analítica, project managers y directores de cuenta. Costo anual: $800K – $1.2M.',
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-untold-border">
            {scopeItems.map((group, gIdx) => (
              <div key={gIdx} className="bg-white p-6 sm:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.4em] text-untold-orange font-bold mb-5 pb-4 border-b border-untold-border">
                  {t(group.category)}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start space-x-2">
                      <span className="text-untold-orange mt-1 text-xs shrink-0">+</span>
                      <span className="text-sm text-untold-gray leading-snug">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border border-untold-border bg-white p-8 sm:p-12 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-untold-gray/60 mb-4">
              {t({ en: 'TRADITIONAL APPROACH', es: 'ENFOQUE TRADICIONAL' })}
            </p>
            <p className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter text-untold-black mb-3">
              {t({ en: '12–15 Specialists. $800K+/Year.', es: '12–15 Especialistas. $800K+/Año.' })}
            </p>
            <p className="text-lg font-serif italic text-untold-gray">
              {t({ en: 'No wonder most networks have never done this.', es: 'No es sorpresa que la mayoría de las redes nunca hayan hecho esto.' })}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE SHIFT — AI changed the economics
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-20 sm:py-32 text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'THE SHIFT', es: 'EL CAMBIO' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'Now Here\'s How It Actually Gets Done.', es: 'Ahora Así Es Como Se Hace Realidad.' })}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl font-serif italic text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'Every item on that list is real. Every item used to require a specialist. Here\'s what changed: AI doesn\'t replace the strategy — it replaces the army you needed to execute it.',
                  es: 'Cada elemento de esa lista es real. Cada uno solía requerir un especialista. Esto es lo que cambió: la IA no reemplaza la estrategia — reemplaza al ejército que necesitabas para ejecutarla.',
                })}
              </p>

              <div className="space-y-6">
                {[
                  { en: 'One system deployment covers every website in the network — not separate builds per location.', es: 'Un solo despliegue del sistema cubre cada sitio web de la red — no construcciones separadas por ubicación.' },
                  { en: 'AI generates and localizes creative assets, content, and copy across the network continuously.', es: 'La IA genera y localiza activos creativos, contenido y copy a través de la red continuamente.' },
                  { en: 'SEO, AEO, and GEO run as automated engines, not manual audits.', es: 'SEO, AEO y GEO funcionan como motores automatizados, no auditorías manuales.' },
                  { en: 'Campaigns deploy from HQ to every location simultaneously.', es: 'Las campañas se despliegan desde oficina central a cada ubicación simultáneamente.' },
                  { en: 'Dashboards aggregate intelligence across the entire network in real time.', es: 'Los dashboards agregan inteligencia de toda la red en tiempo real.' },
                  { en: 'One strategic team with AI systems replaces what used to take a department.', es: 'Un equipo estratégico con sistemas de IA reemplaza lo que antes tomaba un departamento.' },
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <span className="text-untold-orange font-mono text-sm mt-1 shrink-0">→</span>
                    <p className="text-lg font-serif text-white/60 leading-relaxed">{t(point)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center">
              <div className="border border-white/10 bg-white/5 p-8 sm:p-12 w-full">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-untold-orange font-bold mb-6">
                  {t({ en: 'THE BOTTOM LINE', es: 'EN RESUMEN' })}
                </p>
                <p className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-[0.9] mb-6">
                  {t({ en: 'The Scope Hasn\'t Changed. What Changed Is What It Takes to Execute It.', es: 'El Alcance No Cambió. Lo Que Cambió Es Lo Que Se Necesita Para Ejecutarlo.' })}
                </p>
                <p className="text-base font-serif italic text-white/50 leading-relaxed">
                  {t({
                    en: 'For the first time, it\'s economically viable to digitally enable your entire network. Not one location at a time. All of them.',
                    es: 'Por primera vez, es económicamente viable habilitar digitalmente toda tu red. No una ubicación a la vez. Todas.',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE NETWORK EFFECT — Why unified is exponentially better
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'THE NETWORK EFFECT', es: 'EL EFECTO DE RED' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'Thirty Disconnected Websites Are Just Thirty Disconnected Websites.', es: 'Treinta Sitios Web Desconectados Son Solo Treinta Sitios Web Desconectados.' })}
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray max-w-4xl mb-16 leading-relaxed">
            {t({
              en: 'Thirty sites running on one unified system with coordinated SEO, AEO, and GEO? That\'s a network effect. Every site strengthens every other site. Your brand doesn\'t just show up in one market — it dominates every market where you have a presence.',
              es: 'Treinta sitios corriendo en un sistema unificado con SEO, AEO y GEO coordinados? Eso es un efecto de red. Cada sitio fortalece a todos los demás. Tu marca no solo aparece en un mercado — domina cada mercado donde tienes presencia.',
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: { en: 'Search Dominance', es: 'Dominio en Búsquedas' },
                desc: { en: 'Google sees 30 well-structured, interlinked sites with consistent brand data and treats your network as an authoritative ecosystem. Each site boosts every other site\'s rankings.', es: 'Google ve 30 sitios bien estructurados, interconectados, con datos de marca consistentes y trata tu red como un ecosistema autoritativo. Cada sitio impulsa el posicionamiento de todos los demás.' },
              },
              {
                title: { en: 'AI Visibility', es: 'Visibilidad en IA' },
                desc: { en: 'When someone asks ChatGPT or Perplexity about your products, 30 sites with consistent structured data is 30x the signal of one site alone. You\'re training the AI to recommend you.', es: 'Cuando alguien pregunta a ChatGPT o Perplexity sobre tus productos, 30 sitios con datos estructurados consistentes son 30x la señal de un solo sitio. Estás entrenando a la IA para que te recomiende.' },
              },
              {
                title: { en: 'Market Coverage', es: 'Cobertura de Mercado' },
                desc: { en: 'One site competes in one market. A unified network competes in every market simultaneously — all coordinated, all reinforcing each other.', es: 'Un sitio compite en un mercado. Una red unificada compite en cada mercado simultáneamente — todos coordinados, todos reforzándose mutuamente.' },
              },
              {
                title: { en: 'Compounding Returns', es: 'Retornos Compuestos' },
                desc: { en: 'Every piece of content, every product update, every campaign deploys across the entire network. One action, thirty results. The longer it runs, the stronger it gets.', es: 'Cada pieza de contenido, cada actualización de producto, cada campaña se despliega en toda la red. Una acción, treinta resultados. Mientras más tiempo funciona, más fuerte se vuelve.' },
              },
            ].map((card, idx) => (
              <div key={idx} className="border border-untold-border bg-white p-8 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-3">
                  {t(card.title)}
                </h3>
                <p className="text-base font-serif text-untold-gray leading-relaxed">
                  {t(card.desc)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l-4 border-untold-orange pl-6 sm:pl-10 max-w-3xl">
            <p className="text-xl sm:text-2xl font-serif italic text-untold-gray leading-relaxed">
              {t({
                en: 'Your competitors\' locations are running disconnected, outdated sites. That\'s your window. A unified network isn\'t just better — it\'s the kind of advantage that\'s nearly impossible to catch once you have it.',
                es: 'Las ubicaciones de tus competidores están corriendo sitios desconectados y desactualizados. Esa es tu ventana. Una red unificada no es solo mejor — es el tipo de ventaja que es casi imposible de alcanzar una vez que la tienes.',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE SYSTEM — Twelve Capabilities
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-20 sm:py-32 text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'THE SYSTEM', es: 'EL SISTEMA' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'A Full Agency Offering.\nDelivered as a System.', es: 'Una Oferta de Agencia Completa.\nEntregada como Sistema.' })}
          </h2>

          <p className="text-xl font-serif italic text-white/60 max-w-3xl mb-16">
            {t({
              en: 'Everything a top-tier agency would deliver — without the headcount, the overhead, or the six-figure monthly retainer. One integrated system. Twelve capabilities. Every location.',
              es: 'Todo lo que una agencia de primer nivel entregaría — sin la nómina, los gastos generales o el retainer mensual de seis cifras. Un sistema integrado. Doce capacidades. Cada ubicación.',
            })}
          </p>

          {capabilities.map((group, gIdx) => (
            <div key={gIdx} className={gIdx > 0 ? 'mt-16' : ''}>
              <div className="flex items-center space-x-4 mb-8 pb-4 border-b border-white/10">
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter">
                  {t(group.group)}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                  {t(group.groupSub)}
                </span>
              </div>

              <div className={`grid ${group.items.length > 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : group.items.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-px bg-white/10`}>
                {group.items.map((item, iIdx) => {
                  const inner = (
                    <div className="bg-untold-black p-6 sm:p-8 flex flex-col h-full group">
                      <h4 className="font-sans font-black text-lg uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors">
                        {t(item.name)}
                      </h4>
                      <p className="text-sm font-serif text-white/50 leading-relaxed flex-grow">
                        {t(item.desc)}
                      </p>
                      {item.link && (
                        <span className="mt-4 inline-flex items-center space-x-2 font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange">
                          <span>{t({ en: 'Learn more', es: 'Más info' })}</span>
                          <span>→</span>
                        </span>
                      )}
                    </div>
                  );

                  return item.link ? (
                    <Link key={iIdx} to={item.link} className="block">
                      {inner}
                    </Link>
                  ) : (
                    <div key={iIdx}>{inner}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROCESS — How Deployment Works
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'THE PROCESS', es: 'EL PROCESO' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'How We Deploy.', es: 'Cómo Desplegamos.' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: '01',
                title: { en: 'Audit', es: 'Auditoría' },
                desc: { en: 'We map your network\'s current digital presence, identify gaps, and design the system architecture. Brand assets, product data, and location details are gathered.', es: 'Mapeamos la presencia digital actual de tu red, identificamos brechas y diseñamos la arquitectura del sistema. Se recopilan activos de marca, datos de productos y detalles de ubicaciones.' },
              },
              {
                phase: '02',
                title: { en: 'Pilot', es: 'Piloto' },
                desc: { en: 'We deploy the full system to 2-3 locations. You see the before and after. Your network sees the results. This is where the concept becomes undeniable.', es: 'Desplegamos el sistema completo en 2-3 ubicaciones. Ves el antes y después. Tu red ve los resultados. Aquí es donde el concepto se vuelve innegable.' },
              },
              {
                phase: '03',
                title: { en: 'Rollout', es: 'Despliegue' },
                desc: { en: 'We deploy across the full network in phases. Each wave gets faster as the system is dialed in. The network dashboard comes online showing network-wide performance.', es: 'Desplegamos en toda la red por fases. Cada ola es más rápida conforme el sistema se afina. El dashboard de red se activa mostrando rendimiento de toda la red.' },
              },
              {
                phase: '04',
                title: { en: 'Optimize', es: 'Optimizar' },
                desc: { en: 'The system runs continuously. Data compounds. The network effect builds. Quarterly campaigns deploy. We monitor, optimize, and report on the entire network.', es: 'El sistema funciona continuamente. Los datos se componen. El efecto de red crece. Las campañas trimestrales se despliegan. Monitoreamos, optimizamos y reportamos de toda la red.' },
              },
            ].map((step) => (
              <div key={step.phase} className="border border-untold-border bg-white p-8 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4">
                  {t({ en: 'PHASE', es: 'FASE' })} {step.phase}
                </span>
                <h3 className="font-sans font-black text-2xl uppercase tracking-tighter mb-3">
                  {t(step.title)}
                </h3>
                <p className="text-base font-serif text-untold-gray leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CASE STUDY — C.L. Bailey
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-20 sm:py-32 text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'CASE STUDY', es: 'CASO DE ESTUDIO' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'C.L. Bailey Dealer Network', es: 'Red de Distribuidores C.L. Bailey' })}
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-white/70 max-w-3xl mb-16 leading-relaxed">
            {t({
              en: 'C.L. Bailey\'s dealer network was running dormant websites — some untouched for years. We deployed our system across multiple dealers. Every site now showcases C.L. Bailey as the lead brand with AI-powered platforms, dashboards, local SEO, and sales enablement tools.',
              es: 'La red de distribuidores de C.L. Bailey tenía sitios web dormidos — algunos sin tocar por años. Desplegamos nuestro sistema en múltiples distribuidores. Cada sitio ahora muestra a C.L. Bailey como la marca líder con plataformas impulsadas por IA, dashboards, SEO local y herramientas de habilitación de ventas.',
            })}
          </p>

          <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-12">
            {[
              {
                name: { en: 'C.L. Bailey', es: 'C.L. Bailey' },
                role: { en: 'Manufacturer — Hub Site', es: 'Fabricante — Sitio Central' },
                url: 'https://clbailey.com',
              },
              {
                name: { en: 'Lexington Billiards', es: 'Lexington Billiards' },
                role: { en: 'Dealer — Network Deployment', es: 'Distribuidor — Despliegue de Red' },
                url: 'https://lexington-billiards.netlify.app',
              },
              {
                name: { en: 'Regal Billiards', es: 'Regal Billiards' },
                role: { en: 'Dealer — Network Deployment', es: 'Distribuidor — Despliegue de Red' },
                url: 'https://regalbilliards.netlify.app',
              },
            ].map((site, idx) => (
              <a
                key={idx}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-untold-black p-6 sm:p-8 group hover:bg-white/5 transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-3">
                  {t(site.role)}
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors mb-2">
                  {t(site.name)}
                </h3>
                <span className="font-mono text-[11px] text-untold-orange">
                  {t({ en: 'View site →', es: 'Ver sitio →' })}
                </span>
              </a>
            ))}
          </div>

          <div className="border-l-4 border-untold-orange pl-6 sm:pl-10 max-w-2xl">
            <p className="text-lg font-serif italic text-white/50 leading-relaxed">
              {t({
                en: 'The response at a recent industry trade show validated the approach — dealers across the network saw the rebuilt sites and wanted in. The system is now expanding across the C.L. Bailey dealer network.',
                es: 'La respuesta en una feria reciente de la industria validó el enfoque — distribuidores de toda la red vieron los sitios reconstruidos y quisieron participar. El sistema ahora se expande por toda la red de distribuidores de C.L. Bailey.',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'QUESTIONS', es: 'PREGUNTAS' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'What You\'re Probably Asking.', es: 'Lo Que Probablemente Te Preguntas.' })}
          </h2>

          <div className="max-w-3xl space-y-0">
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

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-20 sm:py-32 text-white">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'Your Network Is Waiting.', es: 'Tu Red Está Esperando.' })}
          </h2>
          <p className="text-xl font-serif italic text-white/60 max-w-2xl mx-auto mb-12">
            {t({
              en: 'Every month your network runs on fragmented, outdated sites, you\'re losing ground to competitors who might move first. Let\'s talk about what a unified system looks like for your network.',
              es: 'Cada mes que tu red funciona con sitios fragmentados y desactualizados, pierdes terreno ante competidores que podrían moverse primero. Hablemos de cómo se ve un sistema unificado para tu red.',
            })}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-white/5 px-8 sm:px-16 py-6 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/10 transition-all"
          >
            <span className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter">
              {t({ en: 'Let\'s Talk About Your Network', es: 'Hablemos de Tu Red' })}
            </span>
            <span className="text-3xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkSystems;
