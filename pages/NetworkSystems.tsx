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
      en: 'Network Systems — AI-Powered Business Systems for Any Size | Untold.works',
      es: 'Network Systems — Sistemas de Negocio con IA para Cualquier Tamaño | Untold.works',
    },
    {
      en: 'AI-powered digital systems that scale from one location to one hundred. Websites, SEO/AEO/GEO, dashboards, sales enablement, and mobile apps — built for you, owned by you. Establish your AI identity before your competitors do.',
      es: 'Sistemas digitales con IA que escalan de una ubicación a cien. Sitios web, SEO/AEO/GEO, dashboards, habilitación de ventas y apps móviles — construidos para ti, propiedad tuya. Establece tu identidad de IA antes que tus competidores.',
    },
    {
      path: '/network-systems',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Network Systems — AI-Powered Business Systems',
          provider: { '@type': 'Organization', name: 'Untold.works', url: 'https://untold.works' },
          description: 'AI-powered digital systems that scale from single businesses to 100+ location networks. Unified websites, SEO/AEO/GEO, dashboards, sales enablement, mobile apps, and system operations. Establish your business AI identity with a connected digital ecosystem.',
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['AI Business Systems', 'Digital Infrastructure', 'Multi-Location Digital Systems', 'AI Identity Establishment'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Do we own the websites and systems you build?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Full ownership transfer is part of every engagement. Code, data, content, documentation — it is all yours. No lock-in, no hostage situations. The ongoing system operations fee covers continuous optimization and management, not access to your own assets.' } },
            { '@type': 'Question', name: 'Does this work for a single business or do I need multiple locations?', acceptedAnswer: { '@type': 'Answer', text: 'Network Systems scales to fit. A single business gets the full AI-powered ecosystem — website, SEO/AEO/GEO, dashboards, sales tools, and automation. Multi-location businesses get all of that deployed across every location as one unified system. The architecture is the same. The scale is different.' } },
            { '@type': 'Question', name: 'What if our team is not tech-savvy?', acceptedAnswer: { '@type': 'Answer', text: 'The system is designed to run without anyone needing to be technical. We handle the technology. You get a simple dashboard showing your leads and performance, and an AI assistant you can ask questions in plain language.' } },
            { '@type': 'Question', name: 'How long does it take to deploy?', acceptedAnswer: { '@type': 'Answer', text: 'A single business system deploys in 4-8 weeks. For multi-location networks, we pilot with 2-3 locations in 3-4 weeks, then roll out across the full network in phases. A 30-location network can be fully deployed in 3-4 months.' } },
          ],
        },
      ],
    }
  );

  const scopeItems = [
    {
      category: { en: 'BRAND & CREATIVE', es: 'MARCA Y CREATIVIDAD' },
      items: [
        { en: 'Brand guidelines enforcement across every touchpoint', es: 'Aplicación de lineamientos de marca en cada punto de contacto' },
        { en: 'Photography, video, and campaign creative', es: 'Fotografía, video y creatividad de campaña' },
        { en: 'Copywriting and brand messaging across every channel', es: 'Copywriting y mensajes de marca en cada canal' },
      ],
    },
    {
      category: { en: 'WEB & DIGITAL INFRASTRUCTURE', es: 'WEB E INFRAESTRUCTURA DIGITAL' },
      items: [
        { en: 'Websites designed, built, hosted, secured, and maintained', es: 'Sitios web diseñados, construidos, alojados, asegurados y mantenidos' },
        { en: 'Mobile optimization, ADA compliance, and performance monitoring', es: 'Optimización móvil, accesibilidad ADA y monitoreo de rendimiento' },
        { en: 'CMS management and continuous content updates', es: 'Gestión de CMS y actualizaciones continuas de contenido' },
      ],
    },
    {
      category: { en: 'SEO, AEO & GEO', es: 'SEO, AEO Y GEO' },
      items: [
        { en: 'Search engine optimization for every market you serve', es: 'Optimización para buscadores en cada mercado que atiendes' },
        { en: 'AEO so AI assistants recommend your brand', es: 'AEO para que asistentes de IA recomienden tu marca' },
        { en: 'GEO for visibility in generative search results', es: 'GEO para visibilidad en resultados de búsqueda generativa' },
        { en: 'Google Business Profile management and review generation', es: 'Gestión de Google Business Profile y generación de reseñas' },
      ],
    },
    {
      category: { en: 'CONTENT & SOCIAL', es: 'CONTENIDO Y REDES SOCIALES' },
      items: [
        { en: 'Blog content, thought leadership, and buying guides', es: 'Contenido de blog, liderazgo de pensamiento y guías de compra' },
        { en: 'Social media across multiple platforms', es: 'Redes sociales en múltiples plataformas' },
        { en: 'Email marketing campaigns and automated sequences', es: 'Campañas de email marketing y secuencias automatizadas' },
      ],
    },
    {
      category: { en: 'PAID MEDIA', es: 'MEDIOS PAGADOS' },
      items: [
        { en: 'Campaign strategy and creative per market', es: 'Estrategia de campaña y creatividad por mercado' },
        { en: 'Audience targeting, retargeting, and budget optimization', es: 'Segmentación, retargeting y optimización de presupuesto' },
        { en: 'Performance tracking and ROI reporting', es: 'Seguimiento de rendimiento y reportes de ROI' },
      ],
    },
    {
      category: { en: 'SALES & INTELLIGENCE', es: 'VENTAS E INTELIGENCIA' },
      items: [
        { en: 'Product comparison tools and digital catalogs', es: 'Herramientas de comparación y catálogos digitales' },
        { en: 'Lead capture, routing, and CRM integration', es: 'Captura de leads, enrutamiento e integración con CRM' },
        { en: 'Custom dashboards with AI assistant trained on your data', es: 'Dashboards personalizados con asistente de IA entrenado en tus datos' },
      ],
    },
  ];

  const faqs = [
    {
      q: { en: 'Do we own the websites and systems you build?', es: '¿Somos dueños de los sitios web y sistemas que construyen?' },
      a: { en: 'Yes. Full ownership transfer is part of every engagement. Code, data, content, documentation — it\'s all yours. No lock-in, no hostage situations. The ongoing system operations fee covers continuous optimization and management, not access to your own assets.', es: 'Sí. La transferencia total de propiedad es parte de cada proyecto. Código, datos, contenido, documentación — todo es tuyo. Sin candados, sin rehenes. La cuota mensual de operación del sistema cubre optimización y gestión continua, no el acceso a tus propios activos.' },
    },
    {
      q: { en: 'What happens if we cancel?', es: '¿Qué pasa si cancelamos?' },
      a: { en: 'The sites are yours. The content is yours. The data is yours. Full ownership, always. But the system operations stop — content stops generating, SEO stops compounding, campaigns stop deploying, the AI visibility fades. The value is in the continuous operation, not just the initial build.', es: 'Los sitios son tuyos. El contenido es tuyo. Los datos son tuyos. Propiedad total, siempre. Pero las operaciones del sistema se detienen — el contenido deja de generarse, el SEO deja de componerse, las campañas dejan de desplegarse, la visibilidad de IA se desvanece. El valor está en la operación continua, no solo en la construcción inicial.' },
    },
    {
      q: { en: 'Does this work for a single business, or do I need multiple locations?', es: '¿Funciona para un solo negocio, o necesito múltiples ubicaciones?' },
      a: { en: 'Network Systems scales to fit. A single business gets the full AI-powered ecosystem — website, SEO/AEO/GEO, dashboards, sales tools, and automation. A 5-location operation gets all of that coordinated across locations. A 50-location network gets the full network effect. The architecture is the same. The scale is different.', es: 'Network Systems se adapta a tu escala. Un solo negocio obtiene el ecosistema completo con IA — sitio web, SEO/AEO/GEO, dashboards, herramientas de ventas y automatización. Una operación de 5 ubicaciones obtiene todo coordinado entre ubicaciones. Una red de 50 ubicaciones obtiene el efecto de red completo. La arquitectura es la misma. La escala es diferente.' },
    },
    {
      q: { en: 'Will my locations lose their existing SEO rankings when we migrate?', es: '¿Mis ubicaciones perderán su posicionamiento SEO al migrar?' },
      a: { en: 'No. We handle full SEO migration with 301 redirects, preserved URL structures, and enhanced technical SEO. Most sites see improved rankings within 60 days because the new system is built with modern SEO, AEO, and GEO best practices. For dormant sites with minimal existing rankings, the new system creates a massive improvement from day one.', es: 'No. Manejamos la migración SEO completa con redirecciones 301, estructuras de URL preservadas y SEO técnico mejorado. La mayoría de los sitios ven mejoras en su posicionamiento dentro de 60 días porque el nuevo sistema está construido con las mejores prácticas modernas de SEO, AEO y GEO. Para sitios dormidos con poco posicionamiento existente, el nuevo sistema crea una mejora masiva desde el día uno.' },
    },
    {
      q: { en: 'What if our team isn\'t tech-savvy?', es: '¿Qué pasa si nuestro equipo no es experto en tecnología?' },
      a: { en: 'The system is designed to run without anyone needing to be technical. They don\'t manage the site, write content, or configure SEO. The system handles it. You get a simple dashboard showing your leads and performance — and an AI assistant you can ask questions in plain language. That\'s it.', es: 'El sistema está diseñado para funcionar sin que nadie necesite ser técnico. No gestionan el sitio, no escriben contenido, no configuran SEO. El sistema lo maneja. Recibes un dashboard simple mostrando tus leads y rendimiento — y un asistente de IA al que puedes hacer preguntas en lenguaje normal. Eso es todo.' },
    },
    {
      q: { en: 'How long does it take to deploy?', es: '¿Cuánto tiempo toma desplegarlo?' },
      a: { en: 'A single business system deploys in 4-8 weeks. For multi-location networks, we pilot with 2-3 locations in 3-4 weeks, then roll out in phases. Each additional deployment gets faster because the system is already configured for your brand. A 30-location network can be fully deployed in 3-4 months.', es: 'Un sistema para un solo negocio se despliega en 4-8 semanas. Para redes multi-ubicación, hacemos piloto con 2-3 ubicaciones en 3-4 semanas, luego desplegamos por fases. Cada despliegue adicional es más rápido porque el sistema ya está configurado para tu marca. Una red de 30 ubicaciones puede desplegarse completamente en 3-4 meses.' },
    },
    {
      q: { en: 'Is AI-generated content good enough to represent our brand?', es: '¿El contenido generado por IA es suficientemente bueno para representar nuestra marca?' },
      a: { en: 'AI is the engine, but the system is configured to your brand voice, your product specifications, your messaging standards. The content is reviewed and refined through our quality process. Look at the case studies below — if you can\'t tell it\'s AI-generated, the question answers itself.', es: 'La IA es el motor, pero el sistema está configurado con tu voz de marca, tus especificaciones de producto, tus estándares de mensaje. El contenido es revisado y refinado a través de nuestro proceso de calidad. Mira los casos de estudio abajo — si no puedes notar que es generado por IA, la pregunta se responde sola.' },
    },
    {
      q: { en: 'What if our competitors do the same thing?', es: '¿Qué pasa si nuestros competidores hacen lo mismo?' },
      a: { en: 'First-mover advantage is real. The SEO/AEO/GEO effect compounds over time — every month your system is live, you\'re building a gap that\'s extremely difficult to close. The business that moves first creates a digital moat. Every month you wait is a month your competitors could be building theirs.', es: 'La ventaja del primero en moverse es real. El efecto de SEO/AEO/GEO se compone con el tiempo — cada mes que tu sistema está activo, construyes una brecha que es extremadamente difícil de cerrar. El negocio que se mueve primero crea un foso digital. Cada mes que esperas es un mes que tus competidores podrían estar construyendo el suyo.' },
    },
  ];

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* ═══════════════════════════════════════════════════════════
          HERO — The AI Identity Imperative
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
                {t({ en: 'AI-POWERED BUSINESS SYSTEMS', es: 'SISTEMAS DE NEGOCIO CON IA' })}
              </p>
            </div>

            <h1 className="font-sans font-black text-[clamp(2.2rem,7vw,100px)] leading-[0.85] mb-8 tracking-tighter uppercase text-white">
              {t({ en: 'Your Business Needs an AI Identity.', es: 'Tu Negocio Necesita una Identidad de IA.' })}
              <br />
              <span className="text-untold-orange">
                {t({ en: 'This Is How You Build It.', es: 'Así Es Como La Construyes.' })}
              </span>
            </h1>

            <div className="max-w-3xl">
              <p className="text-xl sm:text-2xl font-serif italic text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'ChatGPT, Perplexity, Gemini, and AI search are already deciding who gets recommended and who gets ignored. Your website, your content, your structured data, your digital presence — it all feeds the AI that your customers are asking for advice. The businesses that establish their AI identity now will own the next decade. The ones that wait will spend the next decade trying to catch up.',
                  es: 'ChatGPT, Perplexity, Gemini y la búsqueda con IA ya están decidiendo quién es recomendado y quién es ignorado. Tu sitio web, tu contenido, tus datos estructurados, tu presencia digital — todo alimenta la IA a la que tus clientes le piden consejo. Los negocios que establezcan su identidad de IA ahora dominarán la próxima década. Los que esperen pasarán la próxima década intentando alcanzarlos.',
                })}
              </p>
              <p className="text-lg font-serif text-white/50 leading-relaxed">
                {t({
                  en: 'We build AI-powered digital systems that scale from a single business to a hundred locations. One connected ecosystem — website, SEO, AEO, GEO, dashboards, sales tools, automation — built for you, owned by you.',
                  es: 'Construimos sistemas digitales con IA que escalan de un solo negocio a cien ubicaciones. Un ecosistema conectado — sitio web, SEO, AEO, GEO, dashboards, herramientas de ventas, automatización — construido para ti, propiedad tuya.',
                })}
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-white/5 backdrop-blur-sm px-8 sm:px-16 py-6 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/10 transition-all"
              >
                <span className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter text-white">
                  {t({ en: 'Build Your AI Identity', es: 'Construye Tu Identidad de IA' })}
                </span>
                <span className="text-3xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">→</span>
              </Link>
              <Link
                to="/solutions"
                className="font-mono text-[12px] uppercase tracking-[0.3em] text-white/40 hover:text-untold-orange transition-colors py-6 sm:py-8"
              >
                {t({ en: 'See solution tiers', es: 'Ver niveles de solución' })} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE REALITY — What a complete digital system actually requires
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
            {t({ en: 'Here\'s What a Real AI-Powered Business System Looks Like.', es: 'Así Se Ve un Sistema de Negocio Real Impulsado por IA.' })}
          </h2>

          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-16">
            {t({
              en: 'Whether you\'re a single location or a fifty-location network, a complete digital ecosystem requires the same categories of work. The difference is scale — not scope. Here\'s what goes into the system we build for you.',
              es: 'Ya sea que tengas una sola ubicación o una red de cincuenta, un ecosistema digital completo requiere las mismas categorías de trabajo. La diferencia es escala — no alcance. Esto es lo que incluye el sistema que construimos para ti.',
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-untold-border">
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
              {t({ en: 'DOING THIS THE OLD WAY', es: 'HACERLO A LA ANTIGUA' })}
            </p>
            <p className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tighter text-untold-black mb-3">
              {t({ en: 'An agency would charge $5K–$15K/month for one location. Multiply that across your network.', es: 'Una agencia cobraría $5K–$15K/mes por una ubicación. Multiplícalo por tu red.' })}
            </p>
            <p className="text-lg font-serif italic text-untold-gray">
              {t({ en: 'No wonder most businesses have never had a real digital system.', es: 'No es sorpresa que la mayoría de los negocios nunca hayan tenido un sistema digital real.' })}
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
            {t({ en: 'AI Didn\'t Replace the Strategy.\nIt Replaced the Army.', es: 'La IA No Reemplazó la Estrategia.\nReemplazó al Ejército.' })}
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl font-serif italic text-white/70 leading-relaxed mb-8">
                {t({
                  en: 'Everything on that list is real work. But AI changed what it takes to execute it. One strategic team with AI systems now delivers what used to require a department — at a fraction of the cost, whether you\'re one location or a hundred.',
                  es: 'Todo en esa lista es trabajo real. Pero la IA cambió lo que se necesita para ejecutarlo. Un equipo estratégico con sistemas de IA ahora entrega lo que antes requería un departamento — a una fracción del costo, ya sea una ubicación o cien.',
                })}
              </p>

              <div className="space-y-6">
                {[
                  { en: 'AI generates and localizes content, creative assets, and copy continuously — not one piece at a time.', es: 'La IA genera y localiza contenido, activos creativos y copy continuamente — no una pieza a la vez.' },
                  { en: 'SEO, AEO, and GEO run as automated engines, not manual audits. Your AI identity compounds every month.', es: 'SEO, AEO y GEO funcionan como motores automatizados, no auditorías manuales. Tu identidad de IA se compone cada mes.' },
                  { en: 'Campaigns deploy to every channel and location simultaneously from one system.', es: 'Las campañas se despliegan en cada canal y ubicación simultáneamente desde un sistema.' },
                  { en: 'Dashboards aggregate intelligence across your entire operation in real time.', es: 'Los dashboards agregan inteligencia de toda tu operación en tiempo real.' },
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
                  {t({ en: 'THE WINDOW', es: 'LA VENTANA' })}
                </p>
                <p className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter leading-[0.9] mb-6">
                  {t({ en: 'Right Now, Most Businesses Have Zero AI Identity. That\'s Your Advantage.', es: 'Ahora Mismo, La Mayoría de los Negocios Tienen Cero Identidad de IA. Esa Es Tu Ventaja.' })}
                </p>
                <p className="text-base font-serif italic text-white/50 leading-relaxed">
                  {t({
                    en: 'AI search is deciding who gets recommended RIGHT NOW. The businesses that establish their AI presence first — structured data, optimized content, connected systems — will be the ones AI learns to trust and recommend. This window won\'t stay open.',
                    es: 'La búsqueda con IA está decidiendo quién es recomendado AHORA MISMO. Los negocios que establezcan su presencia de IA primero — datos estructurados, contenido optimizado, sistemas conectados — serán los que la IA aprenda a confiar y recomendar. Esta ventana no estará abierta para siempre.',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CASE STUDY — C.L. Bailey (moved up for proof after reframe)
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
                image: '/images/in-progress/cl-bailey.jpg',
              },
              {
                name: { en: 'Lexington Billiards', es: 'Lexington Billiards' },
                role: { en: 'Dealer — Network Deployment', es: 'Distribuidor — Despliegue de Red' },
                url: 'https://lexington-billiards.netlify.app',
                image: '/images/in-progress/lexington-billiards.webp',
              },
              {
                name: { en: 'Regal Billiards', es: 'Regal Billiards' },
                role: { en: 'Dealer — Network Deployment', es: 'Distribuidor — Despliegue de Red' },
                url: 'https://regalbilliards.netlify.app',
                image: '/images/in-progress/regal-billiards.jpg',
              },
            ].map((site, idx) => (
              <a
                key={idx}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-untold-black group hover:bg-white/5 transition-colors overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={site.image}
                    alt={t(site.name)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-3">
                    {t(site.role)}
                  </span>
                  <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors mb-2">
                    {t(site.name)}
                  </h3>
                  <span className="font-mono text-[11px] text-untold-orange">
                    {t({ en: 'View site →', es: 'Ver sitio →' })}
                  </span>
                </div>
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
          THE NETWORK EFFECT — Why unified compounds
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
            {t({ en: 'One System Gets Stronger Over Time. Disconnected Tools Don\'t.', es: 'Un Sistema Se Fortalece Con el Tiempo. Herramientas Desconectadas No.' })}
          </h2>

          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray max-w-4xl mb-16 leading-relaxed">
            {t({
              en: 'A single business running on one connected system builds compounding advantages — every piece of content strengthens your SEO, every customer interaction trains your AI, every month the system gets smarter. For multi-location networks, this effect multiplies exponentially. Every site strengthens every other site.',
              es: 'Un solo negocio corriendo en un sistema conectado construye ventajas compuestas — cada pieza de contenido fortalece tu SEO, cada interacción con clientes entrena tu IA, cada mes el sistema se vuelve más inteligente. Para redes multi-ubicación, este efecto se multiplica exponencialmente. Cada sitio fortalece a todos los demás.',
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: { en: 'Search Dominance', es: 'Dominio en Búsquedas' },
                desc: { en: 'A well-structured site with consistent brand data, fresh content, and proper technical SEO builds authority that compounds month over month. Multiple locations multiply this effect.', es: 'Un sitio bien estructurado con datos de marca consistentes, contenido fresco y SEO técnico adecuado construye autoridad que se compone mes a mes. Múltiples ubicaciones multiplican este efecto.' },
              },
              {
                title: { en: 'AI Visibility', es: 'Visibilidad en IA' },
                desc: { en: 'When someone asks ChatGPT or Perplexity about your products, consistent structured data across your digital presence is the signal that gets you recommended. This is your AI identity.', es: 'Cuando alguien pregunta a ChatGPT o Perplexity sobre tus productos, datos estructurados consistentes en tu presencia digital son la señal que te hace ser recomendado. Esta es tu identidad de IA.' },
              },
              {
                title: { en: 'Market Coverage', es: 'Cobertura de Mercado' },
                desc: { en: 'One connected system lets you compete in every market you serve — all coordinated, all reinforcing each other, all managed from one place.', es: 'Un sistema conectado te permite competir en cada mercado que atiendes — todos coordinados, todos reforzándose mutuamente, todos gestionados desde un solo lugar.' },
              },
              {
                title: { en: 'Compounding Returns', es: 'Retornos Compuestos' },
                desc: { en: 'Every content update, product change, and campaign deploys across your entire operation. One action, maximum impact. The longer it runs, the stronger it gets.', es: 'Cada actualización de contenido, cambio de producto y campaña se despliega en toda tu operación. Una acción, máximo impacto. Mientras más tiempo funciona, más fuerte se vuelve.' },
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
                en: 'Your competitors are running disconnected, outdated tools — or nothing at all. That\'s your window. A connected AI-powered system isn\'t just better — it\'s the kind of advantage that\'s nearly impossible to catch once you have it.',
                es: 'Tus competidores están corriendo herramientas desconectadas y desactualizadas — o nada en absoluto. Esa es tu ventana. Un sistema conectado impulsado por IA no es solo mejor — es el tipo de ventaja que es casi imposible de alcanzar una vez que la tienes.',
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT'S INSIDE — Streamlined 3-pillar overview
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black px-5 sm:px-10 py-20 sm:py-32 text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'WHAT\'S INSIDE', es: 'QUÉ INCLUYE' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t({ en: 'Three Pillars.\nOne Connected System.', es: 'Tres Pilares.\nUn Sistema Conectado.' })}
          </h2>

          <p className="text-xl font-serif italic text-white/60 max-w-3xl mb-16">
            {t({
              en: 'Every system we build draws from three integrated capability sets. They work independently. They work better together.',
              es: 'Cada sistema que construimos se basa en tres conjuntos de capacidades integradas. Funcionan independientemente. Funcionan mejor juntos.',
            })}
          </p>

          <div className="grid lg:grid-cols-3 gap-px bg-white/10">
            {[
              {
                pillar: { en: 'DIGITAL PRESENCE', es: 'PRESENCIA DIGITAL' },
                sub: { en: 'Get Found', es: 'Que Te Encuentren' },
                items: [
                  { name: { en: 'Website Design & Rebuild', es: 'Diseño y Reconstrucción Web' }, link: '/websites' },
                  { name: { en: 'Copywriting & Brand Messaging', es: 'Copywriting y Mensajes de Marca' }, link: '/copywriting' },
                  { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, link: '/seo-aeo' },
                  { name: { en: 'AI Content Engine', es: 'Motor de Contenido con IA' }, link: '/ai-content' },
                  { name: { en: 'Social Media', es: 'Redes Sociales' }, link: '/social-media' },
                  { name: { en: 'Paid Advertising', es: 'Publicidad Pagada' }, link: '/ads' },
                ],
              },
              {
                pillar: { en: 'BUSINESS OPERATIONS', es: 'OPERACIONES DE NEGOCIO' },
                sub: { en: 'Run the Business', es: 'Opera el Negocio' },
                items: [
                  { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, link: '/dashboard' },
                  { name: { en: 'Sales Enablement', es: 'Habilitación de Ventas' }, link: '/sales-enablement' },
                  { name: { en: 'Mobile Applications', es: 'Aplicaciones Móviles' }, link: '/mobile-apps' },
                ],
              },
              {
                pillar: { en: 'INFRASTRUCTURE', es: 'INFRAESTRUCTURA' },
                sub: { en: 'Keep It Running', es: 'Mantenlo Funcionando' },
                items: [
                  { name: { en: 'Hosting & System Operations', es: 'Hosting y Operación del Sistema' }, link: '/hosting' },
                  { name: { en: 'Review & Reputation Management', es: 'Gestión de Reseñas y Reputación' }, link: '/review-reputation' },
                ],
              },
            ].map((group, gIdx) => (
              <div key={gIdx} className="bg-untold-black p-8 sm:p-10">
                <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-white/10">
                  <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter">
                    {t(group.pillar)}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                    {t(group.sub)}
                  </span>
                </div>
                <ul className="space-y-4">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <Link
                        to={item.link}
                        className="group flex items-center justify-between"
                      >
                        <span className="font-serif text-white/60 group-hover:text-untold-orange transition-colors">
                          {t(item.name)}
                        </span>
                        <span className="text-untold-orange text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE PROCESS — How Deployment Works
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
                desc: { en: 'We map your current digital presence, identify gaps, and design the system architecture. Brand assets, product data, and business details are gathered.', es: 'Mapeamos tu presencia digital actual, identificamos brechas y diseñamos la arquitectura del sistema. Se recopilan activos de marca, datos de productos y detalles del negocio.' },
              },
              {
                phase: '02',
                title: { en: 'Build', es: 'Construir' },
                desc: { en: 'We build the full system — website, AI workflows, SEO/AEO/GEO, dashboards, integrations. For networks, we pilot with 2-3 locations first. You see the before and after.', es: 'Construimos el sistema completo — sitio web, flujos de IA, SEO/AEO/GEO, dashboards, integraciones. Para redes, hacemos piloto con 2-3 ubicaciones primero. Ves el antes y después.' },
              },
              {
                phase: '03',
                title: { en: 'Deploy', es: 'Desplegar' },
                desc: { en: 'Single businesses go live. Networks roll out in phases — each wave faster as the system is dialed in. Your dashboard comes online showing real-time performance.', es: 'Los negocios individuales se lanzan. Las redes se despliegan por fases — cada ola más rápida conforme el sistema se afina. Tu dashboard se activa mostrando rendimiento en tiempo real.' },
              },
              {
                phase: '04',
                title: { en: 'Optimize', es: 'Optimizar' },
                desc: { en: 'The system runs continuously. Your AI identity compounds. SEO builds. Content generates. Campaigns deploy. We monitor, optimize, and report — the system gets stronger every month.', es: 'El sistema funciona continuamente. Tu identidad de IA se compone. El SEO crece. El contenido se genera. Las campañas se despliegan. Monitoreamos, optimizamos y reportamos — el sistema se fortalece cada mes.' },
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
          FAQ — Objection Handling
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
            {t({ en: 'Your AI Identity Starts Now.', es: 'Tu Identidad de IA Empieza Ahora.' })}
          </h2>
          <p className="text-xl font-serif italic text-white/60 max-w-2xl mx-auto mb-12">
            {t({
              en: 'Every month without a connected AI-powered system is a month your competitors could be building theirs. Whether you\'re one location or a hundred — let\'s talk about what your system looks like.',
              es: 'Cada mes sin un sistema conectado impulsado por IA es un mes que tus competidores podrían estar construyendo el suyo. Ya sea una ubicación o cien — hablemos de cómo se ve tu sistema.',
            })}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-white/5 px-8 sm:px-16 py-6 sm:py-8 hover:border-untold-orange hover:bg-untold-orange/10 transition-all"
          >
            <span className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter">
              {t({ en: 'Let\'s Build Your System', es: 'Construyamos Tu Sistema' })}
            </span>
            <span className="text-3xl text-untold-orange group-hover:translate-x-4 transition-transform duration-500">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkSystems;
