import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkConnector from '../components/NetworkConnector';

const AiContent: React.FC = () => {
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  usePageMeta(
    {
      en: 'AI Content Engine — Automated Blog Posts & Guides | Untold.works',
      es: 'Motor de Contenido IA — Blog Automatizado y Guías | Untold.works'
    },
    {
      en: 'AI-powered content engine generating continuous blog posts, buying guides, and location-specific content trained on your brand. One engine, every location, every month. AEO-optimized.',
      es: 'Motor de contenido con IA que genera publicaciones de blog, guías de compra y contenido por ubicación entrenado en tu marca. Un motor, cada ubicación, cada mes. Optimizado para AEO.'
    },
    {
      path: '/ai-content',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Content Engine — Untold.works',
          description: 'AI-powered content generation system that produces continuous blog posts, buying guides, industry insights, and location-specific content trained on your brand. AEO-optimized and designed for network-scale deployment.',
          url: 'https://untold.works/ai-content',
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
          serviceType: [
            'Content Generation',
            'AI Content Marketing',
            'Blog Automation',
            'SEO Content',
            'Location-Specific Content',
            'AEO Content',
            'Buying Guide Creation',
            'Industry Thought Leadership'
          ],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Is AI-generated content good for SEO?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Google officially approved AI-generated content in 2024. What matters is quality, relevance, and E-E-A-T (expertise, experience, authoritativeness, trustworthiness). Our engine produces all three by training on your products, voice, and expertise. Thin, generic AI content ranks poorly. Content trained on YOUR unique value proposition ranks well.'
              }
            },
            {
              '@type': 'Question',
              name: 'Will Google penalize AI content?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'No. Google penalizes low-quality content regardless of how it was made. They don\'t penalize AI content that\'s useful, original, and demonstrates expertise. Our engine produces original content trained on your business, not scraped generic templates.'
              }
            },
            {
              '@type': 'Question',
              name: 'How is the content personalized for each location?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'The engine uses location data (local competitors, local seasonality, local product availability, local customer preferences) to generate unique content for each site. A buying guide for Location A is different from Location B because customer needs, local competition, and product mix are different. Every piece is unique and GEO-optimized.'
              }
            },
            {
              '@type': 'Question',
              name: 'How much content does the engine produce?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Configurable. Typical deployment: 4-8 blog posts per location per month, rotating through content types (buying guides, seasonal, educational, thought leadership, FAQ, industry trends). For a network of 30 locations, that\'s 120-240 unique pieces monthly. All published automatically to the right locations.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do humans review content before publishing?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Optional. We can configure the engine to: (1) Generate and publish automatically (fastest), (2) Generate, wait for brand approval, then publish, (3) Generate, publish, then flag for human review. Brands concerned about quality usually run in mode #2 for 60 days to build confidence, then move to #1.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can the engine handle multiple languages?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Bilingual content generation (English + Spanish) is native. We train the engine on your brand voice in both languages, so each article is not translated — it\'s originally written in the target language with native fluency.'
              }
            },
            {
              '@type': 'Question',
              name: 'What happens to content after it\'s published?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Content lives on your website forever, accumulating backlinks and search authority over time. Each article is a lead capture opportunity and an SEO asset that works 24/7. The compounding effect is powerful: 30 locations × 4 articles/month × 12 months = 1,440 indexed assets driving traffic.'
              }
            },
            {
              '@type': 'Question',
              name: 'How does this differ from generic AI writing services?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Generic services produce the same article for everyone. Our engine trains on YOUR products, YOUR customer conversations, YOUR brand voice, YOUR expertise, and YOUR competitive landscape. The output is original, location-specific, and speaks directly to your customers\' actual problems and needs.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const contentTypes = [
    { name: { en: 'Blog Posts', es: 'Publicaciones de Blog' }, desc: { en: 'Industry insights, tips, how-tos, educational content', es: 'Información de la industria, consejos, instrucciones, contenido educativo' } },
    { name: { en: 'Buying Guides', es: 'Guías de Compra' }, desc: { en: 'Product comparison, feature breakdowns, selection criteria', es: 'Comparación de productos, desglose de características, criterios de selección' } },
    { name: { en: 'Seasonal Content', es: 'Contenido Estacional' }, desc: { en: 'Holiday guides, seasonal promotions, timely offers', es: 'Guías de vacaciones, promociones estacionales, ofertas oportunas' } },
    { name: { en: 'Industry Thought Leadership', es: 'Liderazgo de Pensamiento' }, desc: { en: 'Expert analysis, trend reports, market insights', es: 'Análisis experto, reportes de tendencias, información del mercado' } },
    { name: { en: 'Location-Specific Guides', es: 'Guías Específicas de Ubicación' }, desc: { en: 'Regional FAQs, local competitor analysis, regional demand', es: 'Preguntas frecuentes regionales, análisis de competidores locales, demanda regional' } },
    { name: { en: 'Case Studies', es: 'Casos de Estudio' }, desc: { en: 'Customer wins, problem-solution narratives, proof points', es: 'Éxitos de clientes, narrativas de problema-solución, puntos de prueba' } },
    { name: { en: 'FAQ Content', es: 'Contenido de Preguntas Frecuentes' }, desc: { en: 'Structured Q&A, answer-format content for AEO', es: 'Preguntas y respuestas estructuradas, contenido en formato de respuesta para AEO' } },
    { name: { en: 'Product Spotlights', es: 'Destacados de Productos' }, desc: { en: 'Deep-dive product content, feature highlights, use cases', es: 'Contenido detallado de productos, destacados de características, casos de uso' } },
  ];

  const pipeline = [
    {
      num: '01',
      title: { en: 'Brand Training', es: 'Entrenamiento de Marca' },
      desc: {
        en: 'Your product data, brand voice, customer testimonials, competitive landscape, and past content feed the AI engine. It learns what makes YOUR business different, how you talk, and what your customers actually value.',
        es: 'Los datos de tu producto, voz de marca, testimonios de clientes, panorama competitivo y contenido pasado alimentan el motor de IA. Aprende qué hace diferente a TU negocio, cómo hablas y qué realmente valoran tus clientes.'
      }
    },
    {
      num: '02',
      title: { en: 'Content Planning', es: 'Planificación de Contenido' },
      desc: {
        en: 'The engine creates a content calendar based on seasonality, trending topics, location-specific demand, customer search behavior, and SEO/AEO opportunities. Every piece aligns with your business goals and audience needs.',
        es: 'El motor crea un calendario de contenido basado en estacionalidad, temas tendencia, demanda específica de ubicación, comportamiento de búsqueda de clientes y oportunidades de SEO/AEO. Cada pieza se alinea con tus objetivos comerciales y necesidades del público.'
      }
    },
    {
      num: '03',
      title: { en: 'AI Generation', es: 'Generación de IA' },
      desc: {
        en: 'The engine writes original blog posts, buying guides, and thought leadership pieces optimized for search engines and AI language models. Every article includes schema markup, internal links, and CTAs trained on YOUR conversion funnel.',
        es: 'El motor escribe publicaciones de blog originales, guías de compra y piezas de liderazgo de pensamiento optimizadas para motores de búsqueda y modelos de lenguaje de IA. Cada artículo incluye schema markup, enlaces internos y CTAs entrenados en TU embudo de conversión.'
      }
    },
    {
      num: '04',
      title: { en: 'Quality Review', es: 'Revisión de Calidad' },
      desc: {
        en: 'Optional human review step. Brand team approves content for accuracy, brand alignment, and tone. Feedback loops train the engine to improve over time. Most brands skip this after 60 days of consistent quality.',
        es: 'Paso de revisión humana opcional. El equipo de marca aprueba el contenido para precisión, alineación de marca y tono. Los bucles de retroalimentación entrenan el motor para mejorar con el tiempo. La mayoría de marcas omiten esto después de 60 días de calidad consistente.'
      }
    },
    {
      num: '05',
      title: { en: 'Automated Publishing', es: 'Publicación Automatizada' },
      desc: {
        en: 'Content publishes automatically to the right location, right language, right URL structure. Blog feed updates, email subscribers get notified, RSS feeds populate, and Google indexing begins immediately. No manual steps.',
        es: 'El contenido se publica automáticamente en la ubicación correcta, idioma correcto, estructura de URL correcta. El feed de blog se actualiza, los suscriptores de correo electrónico reciben notificaciones, los feeds RSS se completan e indexación de Google comienza inmediatamente. Sin pasos manuales.'
      }
    },
    {
      num: '06',
      title: { en: 'Continuous Optimization', es: 'Optimización Continua' },
      desc: {
        en: 'The engine monitors performance data (page views, time on page, bounce rate, conversions, search impressions). High performers get promoted, low performers get updated, and the engine learns what resonates with YOUR specific audience.',
        es: 'El motor monitorea datos de rendimiento (vistas de página, tiempo en página, tasa de rebote, conversiones, impresiones de búsqueda). Los ganadores se promocionan, los de bajo rendimiento se actualizan y el motor aprende qué resuena con TU audiencia específica.'
      }
    },
  ];

  const process = [
    {
      num: '01',
      title: { en: 'Content Audit & Brand Training', es: 'Auditoría de Contenido y Entrenamiento de Marca' },
      desc: {
        en: 'We analyze your existing content, product library, brand voice, customer conversations, and competitive landscape. The AI engine ingests all of this and learns YOUR unique perspective, value proposition, and how to speak to YOUR customers.',
        es: 'Analizamos tu contenido existente, biblioteca de productos, voz de marca, conversaciones de clientes y panorama competitivo. El motor de IA ingiere todo esto y aprende TU perspectiva única, propuesta de valor y cómo hablarle a TUS clientes.'
      }
    },
    {
      num: '02',
      title: { en: 'Engine Configuration', es: 'Configuración del Motor' },
      desc: {
        en: 'We set up your engine: publishing frequency, content types mix, location-specific rules, language preferences, brand voice profile, and approval workflows. Then we test with sample articles to ensure quality and alignment before going live.',
        es: 'Configuramos tu motor: frecuencia de publicación, combinación de tipos de contenido, reglas específicas de ubicación, preferencias de idioma, perfil de voz de marca y flujos de aprobación. Luego probamos con artículos de muestra para garantizar calidad y alineación antes de lanzar.'
      }
    },
    {
      num: '03',
      title: { en: 'Content Pipeline Launch', es: 'Lanzamiento del Proceso de Contenido' },
      desc: {
        en: 'The engine goes live. Content begins generating and publishing automatically every day or week (depending on your configuration). You monitor dashboard, provide feedback, and the engine adjusts. After 30-60 days of proving itself, most clients move to hands-off mode.',
        es: 'El motor se lanza. El contenido comienza a generarse y publicarse automáticamente cada día o semana (según tu configuración). Monitoreas el dashboard, proporcionas retroalimentación y el motor se ajusta. Después de 30-60 días de probarse, la mayoría de clientes pasan a modo manos libres.'
      }
    },
    {
      num: '04',
      title: { en: 'Continuous Optimization', es: 'Optimización Continua' },
      desc: {
        en: 'The engine runs continuously, monitored by our team. Monthly reports show what\'s working, what isn\'t, and adjustments we\'re making. Performance improves over time as the engine learns from real audience behavior, search trends, and conversion data.',
        es: 'El motor se ejecuta continuamente, monitoreado por nuestro equipo. Los reportes mensuales muestran qué funciona, qué no, y ajustes que estamos haciendo. El rendimiento mejora con el tiempo mientras el motor aprende del comportamiento real de la audiencia, tendencias de búsqueda y datos de conversión.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'Is AI-generated content good for SEO?', es: '¿Es el contenido generado por IA bueno para SEO?' },
      a: {
        en: 'Yes. Google officially approved AI-generated content in 2024. What matters is quality, relevance, and E-E-A-T (expertise, experience, authoritativeness, trustworthiness). Our engine produces all three by training on your products, voice, and expertise. Thin, generic AI content ranks poorly. Content trained on YOUR unique value proposition ranks well.',
        es: 'Sí. Google aprobó oficialmente el contenido generado por IA en 2024. Lo que importa es la calidad, la relevancia y E-E-A-T (experiencia, conocimiento, autoridad, confiabilidad). Nuestro motor produce los tres al entrenarse con tus productos, tu voz y tu expertise. El contenido genérico de IA posiciona mal. El contenido entrenado con TU propuesta de valor única posiciona bien.'
      }
    },
    {
      q: { en: 'Will Google penalize AI content?', es: '¿Penalizará Google el contenido de IA?' },
      a: {
        en: 'No. Google penalizes low-quality content regardless of how it was made. They don\'t penalize AI content that\'s useful, original, and demonstrates expertise. Our engine produces original content trained on your business, not scraped generic templates.',
        es: 'No. Google penaliza el contenido de baja calidad sin importar cómo se hizo. No penalizan contenido de IA que sea útil, original y demuestre expertise. Nuestro motor produce contenido original entrenado con tu negocio, no plantillas genéricas copiadas.'
      }
    },
    {
      q: { en: 'How is the content personalized for each location?', es: '¿Cómo se personaliza el contenido para cada ubicación?' },
      a: {
        en: 'The engine uses location data (local competitors, local seasonality, local product availability, local customer preferences) to generate unique content for each site. A buying guide for Location A is different from Location B because customer needs, local competition, and product mix are different. Every piece is unique and GEO-optimized.',
        es: 'El motor usa datos de cada ubicación (competidores locales, estacionalidad, disponibilidad de productos, preferencias del cliente) para generar contenido único por sitio. Una guía de compra para la Ubicación A es diferente a la Ubicación B porque las necesidades del cliente, la competencia local y la mezcla de productos son distintas. Cada pieza es única y optimizada para GEO.'
      }
    },
    {
      q: { en: 'How much content does the engine produce?', es: '¿Cuánto contenido produce el motor?' },
      a: {
        en: 'Configurable. Typical deployment: 4-8 blog posts per location per month, rotating through content types (buying guides, seasonal, educational, thought leadership, FAQ, industry trends). For a network of 30 locations, that\'s 120-240 unique pieces monthly. All published automatically to the right locations.',
        es: 'Configurable. Despliegue típico: 4-8 posts por ubicación al mes, rotando entre tipos de contenido (guías de compra, estacionales, educativos, liderazgo de opinión, FAQ, tendencias de la industria). Para una red de 30 ubicaciones, son 120-240 piezas únicas al mes. Todo se publica automáticamente en las ubicaciones correctas.'
      }
    },
    {
      q: { en: 'Do humans review content before publishing?', es: '¿Los humanos revisan el contenido antes de publicarlo?' },
      a: {
        en: 'Optional. We can configure the engine to: (1) Generate and publish automatically (fastest), (2) Generate, wait for brand approval, then publish, (3) Generate, publish, then flag for human review. Brands concerned about quality usually run in mode #2 for 60 days to build confidence, then move to #1.',
        es: 'Opcional. Podemos configurar el motor para: (1) Generar y publicar automáticamente (lo más rápido), (2) Generar, esperar aprobación de la marca y luego publicar, (3) Generar, publicar y marcar para revisión humana. Las marcas preocupadas por la calidad normalmente arrancan en el modo #2 por 60 días para ganar confianza, y luego pasan al #1.'
      }
    },
    {
      q: { en: 'What\'s the compounding effect of 30 locations × 4 articles/month?', es: '¿Cuál es el efecto compuesto de 30 ubicaciones × 4 artículos/mes?' },
      a: {
        en: 'Massive. 30 locations × 4 articles/month × 12 months = 1,440 indexed, evergreen SEO assets. Each article builds authority over time, attracts organic traffic, captures leads, and improves your network\'s overall domain authority. After 12 months, your network has a permanent content library worth thousands of hours of manual writing.',
        es: 'Enorme. 30 ubicaciones × 4 artículos/mes × 12 meses = 1,440 activos SEO indexados y permanentes. Cada artículo construye autoridad con el tiempo, atrae tráfico orgánico, captura leads y mejora la autoridad de dominio de toda tu red. Después de 12 meses, tu red tiene una biblioteca de contenido permanente que equivale a miles de horas de redacción manual.'
      }
    },
    {
      q: { en: 'Can the engine handle multiple languages?', es: '¿Puede el motor manejar múltiples idiomas?' },
      a: {
        en: 'Yes. Bilingual content generation (English + Spanish) is native. We train the engine on your brand voice in both languages, so each article is not translated — it\'s originally written in the target language with native fluency.',
        es: 'Sí. La generación de contenido bilingüe (inglés + español) es nativa. Entrenamos el motor con la voz de tu marca en ambos idiomas, así que cada artículo no se traduce — se escribe originalmente en el idioma destino con fluidez nativa.'
      }
    },
    {
      q: { en: 'How does this differ from generic AI writing services?', es: '¿En qué difiere esto de los servicios genéricos de escritura con IA?' },
      a: {
        en: 'Generic services produce the same article for everyone. Our engine trains on YOUR products, YOUR customer conversations, YOUR brand voice, YOUR expertise, and YOUR competitive landscape. The output is original, location-specific, and speaks directly to your customers\' actual problems and needs.',
        es: 'Los servicios genéricos producen el mismo artículo para todos. Nuestro motor se entrena con TUS productos, TUS conversaciones con clientes, TU voz de marca, TU expertise y TU panorama competitivo. El resultado es original, específico por ubicación y habla directamente de los problemas y necesidades reales de tus clientes.'
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
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'AI Content Engine', es: 'Motor de Contenido IA' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'AI CONTENT ENGINE', es: 'MOTOR DE CONTENIDO IA' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Content That Never Stops.', es: 'Contenido Que Nunca Para.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10 mb-6">
            {t({
              en: 'Your website stays fresh. Your competitors stay behind. Automated, AI-powered content generation trained on YOUR brand.',
              es: 'Tu sitio web permanece fresco. Tus competidores se quedan atrás. Generación de contenido automatizada y impulsada por IA entrenada en TU marca.'
            })}
          </p>

          <p className="text-base sm:text-lg font-serif italic text-white/30 max-w-3xl pl-6 sm:pl-10">
            {t({
              en: 'One engine. Every location. Unique, trained, continuous content.',
              es: 'Un motor. Cada ubicación. Contenido único, entrenado y continuo.'
            })}
          </p>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-untold-orange text-untold-black font-sans font-black text-sm uppercase tracking-wider px-8 py-4 hover:bg-white transition-all"
            >
              {t({ en: 'Schedule a Demo', es: 'Programar una Demostración' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── What The Engine Produces ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'CONTENT TYPES', es: 'TIPOS DE CONTENIDO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'What The Engine Produces.', es: 'Lo Que Produce El Motor.' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, idx) => (
              <div key={idx} className="border border-untold-border bg-white p-6 sm:p-8">
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(type.name)}
                </h3>
                <p className="font-serif italic text-untold-gray text-sm leading-relaxed">
                  {t(type.desc)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-untold-black text-white p-8 sm:p-12">
            <h3 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'All Trained on YOUR Brand.', es: 'Todo Entrenado en TU Marca.' })}
            </h3>
            <p className="font-serif italic text-white/70 text-lg leading-relaxed max-w-3xl">
              {t({
                en: 'Every article isn\'t generic AI. It\'s trained on your products, voice, customer conversations, and competitive landscape. Generic AI content ranks poorly. Branded AI content ranks well.',
                es: 'Cada artículo no es IA genérica. Está entrenado en tus productos, voz, conversaciones de clientes y panorama competitivo. El contenido IA genérico se posiciona mal. El contenido IA de marca se posiciona bien.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE PIPELINE', es: 'EL PROCESO' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'From Training to Publishing.', es: 'Del Entrenamiento a la Publicación.' })}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pipeline.map((step) => (
              <div
                key={step.num}
                className="border border-untold-border bg-untold-beige p-6 sm:p-8"
              >
                <span className="font-mono text-[13px] text-untold-orange font-bold">{step.num}</span>
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3 mt-3">
                  {t(step.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Scale ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'NETWORK POWER', es: 'PODER DE RED' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'One Engine. Infinite Content.', es: 'Un Motor. Contenido Infinito.' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-12 max-w-2xl">
            {t({
              en: 'The magic of network scale: one engine producing unique, location-specific content across every site simultaneously.',
              es: 'La magia de escala de red: un motor produciendo contenido único específico de ubicación en cada sitio simultáneamente.'
            })}
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/5 border border-white/10 p-8 mb-6">
                <p className="font-sans font-black text-6xl sm:text-7xl tracking-tighter text-untold-orange mb-4">30</p>
                <p className="font-serif italic text-white/60 text-xl">
                  {t({ en: 'locations in your network', es: 'ubicaciones en tu red' })}
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8">
                <p className="font-sans font-black text-6xl sm:text-7xl tracking-tighter text-untold-orange mb-4">240</p>
                <p className="font-serif italic text-white/60 text-xl">
                  {t({ en: 'unique articles per month (4/location)', es: 'artículos únicos por mes (4/ubicación)' })}
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-untold-orange pl-6">
                  <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-2">
                    {t({ en: 'Localized Content', es: 'Contenido Localizado' })}
                  </h3>
                  <p className="font-serif italic text-white/60">
                    {t({
                      en: 'Each location gets content trained on local competitors, local seasonality, local product availability, and local customer behavior. Not the same article. Unique articles.',
                      es: 'Cada ubicación obtiene contenido entrenado en competidores locales, estacionalidad local, disponibilidad local de productos y comportamiento local de clientes. No es el mismo artículo. Artículos únicos.'
                    })}
                  </p>
                </div>

                <div className="border-l-4 border-untold-orange pl-6">
                  <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-2">
                    {t({ en: 'Compounding SEO Effect', es: 'Efecto SEO Compuesto' })}
                  </h3>
                  <p className="font-serif italic text-white/60">
                    {t({
                      en: '1,440 indexed assets (30 locations × 240 articles/year) each building authority, attracting backlinks, and driving organic traffic. After 12 months, your network has a permanent SEO foundation.',
                      es: '1,440 activos indexados (30 ubicaciones × 240 artículos/año) cada uno construyendo autoridad, atrayendo backlinks e impulsando tráfico orgánico. Después de 12 meses, tu red tiene una base SEO permanente.'
                    })}
                  </p>
                </div>

                <div className="border-l-4 border-untold-orange pl-6">
                  <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-2">
                    {t({ en: 'Network Authority', es: 'Autoridad de Red' })}
                  </h3>
                  <p className="font-serif italic text-white/60">
                    {t({
                      en: 'Your entire network becomes an authority. Cross-linking between locations boosts each site. Backlinks to one location boost all locations. Network effects make everyone stronger.',
                      es: 'Toda tu red se convierte en una autoridad. Los enlaces cruzados entre ubicaciones impulsan cada sitio. Los backlinks a una ubicación impulsan todas las ubicaciones. Los efectos de red hacen que todos sean más fuertes.'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'IMPLEMENTATION', es: 'IMPLEMENTACIÓN' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Four Steps to Continuous Content.', es: 'Cuatro Pasos para Contenido Continuo.' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {process.map((step) => (
              <div
                key={step.num}
                className="border border-untold-border bg-white p-6 sm:p-8"
              >
                <span className="font-mono text-[13px] text-untold-orange font-bold">{step.num}</span>
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3 mt-3">
                  {t(step.title)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(step.desc)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'FREQUENTLY ASKED', es: 'PREGUNTAS FRECUENTES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Questions About AI Content.', es: 'Preguntas Sobre Contenido IA.' })}
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-untold-border overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full text-left bg-untold-beige p-6 sm:p-8 hover:bg-untold-black hover:text-white transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-sans font-black text-lg uppercase tracking-tighter pr-4 flex-1">
                      {t(faq.q)}
                    </h3>
                    <span className={`w-6 h-6 flex-shrink-0 flex items-center justify-center transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                  </div>
                </button>

                {expandedFaq === idx && (
                  <div className="bg-white px-6 sm:px-8 py-6 sm:py-8 border-t border-untold-border">
                    <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                      {t(faq.a)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Systems Connector ── */}
      <NetworkConnector
        capability={{ en: 'AI Content Engine', es: 'Motor de Contenido IA' }}
        networkDescription={{
          en: 'This capability powers continuous content generation across your entire Network Systems. Deploy one AI engine across 30 locations. Every site gets fresh, unique, localized content every week. No manual writing. No content stalls. Your network competes on authority and depth.',
          es: 'Esta capacidad impulsa la generación continua de contenido en todo tu Network Systems. Despliega un motor de IA en 30 ubicaciones. Cada sitio obtiene contenido fresco, único y localizado cada semana. Sin escritura manual. Sin pausas de contenido. Tu red compite en autoridad y profundidad.',
        }}
        relatedCapabilities={[
          { name: { en: 'SEO, AEO & GEO', es: 'SEO, AEO y GEO' }, path: '/seo-aeo' },
          { name: { en: 'Copywriting', es: 'Redacción de Textos' }, path: '/copywriting' },
          { name: { en: 'Social Media', es: 'Redes Sociales' }, path: '/social-media' },
          { name: { en: 'Dashboard & Intelligence', es: 'Dashboard e Inteligencia' }, path: '/dashboard' },
        ]}
      />

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'READY TO DEPLOY?', es: '¿LISTO PARA DESPLEGAR?' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-3">
            {t({ en: 'Let\'s Talk Content.', es: 'Hablemos de Contenido.' })}
          </h2>
          <p className="font-serif italic text-untold-gray text-lg mb-12">
            {t({
              en: 'Schedule a 20-minute demo to see the engine in action and learn how your network can start generating continuous content.',
              es: 'Programa una demostración de 20 minutos para ver el motor en acción y aprende cómo tu red puede comenzar a generar contenido continuo.'
            })}
          </p>
          <QuickLeadForm />
        </div>
      </section>

    </div>
  );
};

export default AiContent;
