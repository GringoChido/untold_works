import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import QuickLeadForm from '../components/QuickLeadForm';
import Testimonials from '../components/Testimonials';
import Breadcrumbs from '../components/Breadcrumbs';
const SocialMedia: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Social Media Management & Strategy — Content, Analytics & Growth | Untold.works',
      es: 'Gestión y Estrategia de Redes Sociales — Contenido, Analítica y Crecimiento | Untold.works'
    },
    {
      en: 'Social media strategy, content creation, analytics, and platform management for businesses in Mexico and the US. Instagram, Facebook, LinkedIn, and TikTok. Bilingual social media that drives real business results.',
      es: 'Estrategia de redes sociales, creación de contenido, analítica y gestión de plataformas para negocios en México y EE.UU. Instagram, Facebook, LinkedIn y TikTok. Redes sociales bilingües que generan resultados reales.'
    },
    {
      path: '/social-media',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Social Media Management & Strategy — Untold.works',
          description: 'Social media strategy, content creation, analytics, and management for businesses in Mexico and the United States. Bilingual content across Instagram, Facebook, LinkedIn, and TikTok.',
          url: 'https://untold.works/social-media',
          provider: {
            '@type': 'Organization',
            name: 'Untold.works',
            url: 'https://untold.works',
          },
          areaServed: [
            { '@type': 'Country', name: 'Mexico' },
            { '@type': 'Country', name: 'United States' },
          ],
          serviceType: ['Social Media Management', 'Content Strategy', 'Social Media Analytics', 'Community Management'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What social media platforms does Untold.works manage?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We manage Instagram, Facebook, LinkedIn, and TikTok for businesses in Mexico and the United States. Each platform gets a tailored strategy — not the same post copied everywhere. We create platform-native content in both English and Spanish, optimized for each algorithm and audience.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Qué plataformas de redes sociales maneja Untold.works?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Manejamos Instagram, Facebook, LinkedIn y TikTok para negocios en México y Estados Unidos. Cada plataforma recibe una estrategia personalizada — no el mismo post copiado en todos lados. Creamos contenido nativo para cada plataforma en inglés y español, optimizado para cada algoritmo y audiencia.'
              }
            },
            {
              '@type': 'Question',
              name: 'How much does social media management cost in Mexico?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Social media audits start at $800 USD. Content strategy and creation packages start at $2,000 USD. Ongoing management with daily posting and community management starts at $1,000 USD per month. All packages include bilingual content in English and Spanish.'
              }
            },
            {
              '@type': 'Question',
              name: 'What is the difference between organic social media and paid advertising?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Organic social media is content you post for free — it builds brand awareness, trust, and community over time. Paid advertising (ads) uses budget to reach specific audiences quickly with targeted messages. Most businesses need both: organic builds your foundation, paid accelerates your results. Untold.works offers both as separate services.'
              }
            },
            {
              '@type': 'Question',
              name: '¿Manejan redes sociales bilingües en inglés y español?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sí. Creamos todo el contenido de redes sociales en inglés y español simultáneamente. No traducimos — creamos contenido nativo para cada idioma. Esto es especialmente importante para negocios en San Miguel de Allende y otras ciudades turísticas que sirven tanto a clientes locales como internacionales.'
              }
            },
          ]
        }
      ] as any,
    }
  );

  const packages = [
    {
      title: { en: 'Social Media Audit', es: 'Auditoría de Redes Sociales' },
      price: 'From $800 USD',
      items: [
        { en: 'Account health review across all platforms', es: 'Revisión de salud de cuentas en todas las plataformas' },
        { en: 'Competitor social media analysis', es: 'Análisis de redes sociales de competidores' },
        { en: 'Content performance audit', es: 'Auditoría de rendimiento de contenido' },
        { en: 'Platform-specific recommendations', es: 'Recomendaciones específicas por plataforma' },
        { en: 'Audience demographics analysis', es: 'Análisis de demografía de audiencia' },
        { en: 'Hashtag & keyword strategy', es: 'Estrategia de hashtags y keywords' },
      ],
      footer: { en: 'One-time. Delivered in 1 week.', es: 'Único pago. Entregado en 1 semana.' },
      highlight: false,
    },
    {
      title: { en: 'Content Strategy & Creation', es: 'Estrategia y Creación de Contenido' },
      price: 'From $2,000 USD',
      items: [
        { en: 'Brand voice guide (EN + ES)', es: 'Guía de voz de marca (EN + ES)' },
        { en: 'Content calendar (30 days)', es: 'Calendario de contenido (30 días)' },
        { en: 'AI-generated photo & video assets + brand kit', es: 'Assets de foto y video generados con IA + kit de marca' },
        { en: '30-day content bank (posts + stories)', es: 'Banco de contenido de 30 días (posts + stories)' },
        { en: 'Caption writing in both languages', es: 'Redacción de captions en ambos idiomas' },
        { en: 'Platform-specific format optimization', es: 'Optimización de formato por plataforma' },
      ],
      footer: { en: 'One-time + optional monthly. Delivered in 2 weeks.', es: 'Único pago + mensual opcional. Entregado en 2 semanas.' },
      highlight: false,
    },
    {
      title: { en: 'Analytics & Reporting', es: 'Analítica y Reportes' },
      price: 'From $1,500 USD',
      items: [
        { en: 'Custom analytics dashboard setup', es: 'Configuración de dashboard de analítica personalizado' },
        { en: 'KPI tracking & benchmarking', es: 'Seguimiento de KPIs y benchmarking' },
        { en: 'Monthly performance reports', es: 'Reportes mensuales de rendimiento' },
        { en: 'Audience growth analysis', es: 'Análisis de crecimiento de audiencia' },
        { en: 'ROI attribution modeling', es: 'Modelado de atribución de ROI' },
        { en: 'Competitor tracking & benchmarking', es: 'Seguimiento y benchmarking de competidores' },
      ],
      footer: { en: 'One-time setup + monthly reports.', es: 'Configuración única + reportes mensuales.' },
      highlight: true,
    },
    {
      title: { en: 'Ongoing Social Media Management', es: 'Gestión Continua de Redes Sociales' },
      price: 'From $1,000/mo USD',
      items: [
        { en: 'Daily posting across platforms', es: 'Publicaciones diarias en todas las plataformas' },
        { en: 'Community management & engagement', es: 'Gestión de comunidad y engagement' },
        { en: 'Paid boost strategy & execution', es: 'Estrategia y ejecución de boosts pagados' },
        { en: 'Monthly content calendar', es: 'Calendario de contenido mensual' },
        { en: 'Monthly strategy calls', es: 'Llamadas de estrategia mensuales' },
        { en: 'Bilingual content creation', es: 'Creación de contenido bilingüe' },
      ],
      footer: { en: 'Monthly retainer. Cancel anytime.', es: 'Retainer mensual. Cancela cuando quieras.' },
      highlight: false,
    },
  ];

  const steps = [
    {
      num: '01',
      title: { en: 'Audit', es: 'Auditoría' },
      desc: {
        en: 'We analyze your current social presence, your competitors, and your target audience across all platforms.',
        es: 'Analizamos tu presencia social actual, tus competidores y tu audiencia objetivo en todas las plataformas.'
      }
    },
    {
      num: '02',
      title: { en: 'Strategize', es: 'Estrategia' },
      desc: {
        en: 'We build a content strategy tailored to your brand, your market, and your business goals — in both languages.',
        es: 'Construimos una estrategia de contenido adaptada a tu marca, tu mercado y tus objetivos de negocio — en ambos idiomas.'
      }
    },
    {
      num: '03',
      title: { en: 'Execute', es: 'Ejecutar' },
      desc: {
        en: 'We create and publish content, manage your community, and run paid boosts to accelerate growth.',
        es: 'Creamos y publicamos contenido, gestionamos tu comunidad y ejecutamos boosts pagados para acelerar el crecimiento.'
      }
    },
    {
      num: '04',
      title: { en: 'Optimize', es: 'Optimizar' },
      desc: {
        en: 'Monthly analysis of what\'s working. We double down on winners, cut what isn\'t performing, and evolve the strategy.',
        es: 'Análisis mensual de lo que funciona. Reforzamos lo que gana, eliminamos lo que no rinde y evolucionamos la estrategia.'
      }
    },
  ];

  const faqs = [
    {
      q: { en: 'What platforms do you manage?', es: '¿Qué plataformas manejan?' },
      a: {
        en: 'Instagram, Facebook, LinkedIn, and TikTok. Each platform gets a tailored strategy — not the same post copied everywhere. We create platform-native content in both English and Spanish, optimized for each algorithm and audience.',
        es: 'Instagram, Facebook, LinkedIn y TikTok. Cada plataforma recibe una estrategia personalizada — no el mismo post copiado en todos lados. Creamos contenido nativo para cada plataforma en inglés y español, optimizado para cada algoritmo y audiencia.'
      }
    },
    {
      q: { en: 'What\'s the difference between organic and paid social?', es: '¿Cuál es la diferencia entre social orgánico y pagado?' },
      a: {
        en: 'Organic social media builds trust and community over time through free content. Paid advertising uses budget to reach specific audiences quickly with targeted messages. You need both. We offer social media management (this page) and paid ads as separate services.',
        es: 'Las redes sociales orgánicas construyen confianza y comunidad con el tiempo a través de contenido gratuito. La publicidad pagada usa presupuesto para llegar a audiencias específicas rápidamente con mensajes dirigidos. Necesitas ambos. Ofrecemos gestión de redes sociales (esta página) y anuncios pagados como servicios separados.'
      }
    },
    {
      q: { en: 'How quickly will I see results?', es: '¿Qué tan rápido veré resultados?' },
      a: {
        en: 'Engagement improvements within 2-4 weeks. Meaningful follower growth and lead generation within 2-3 months. Social media is a long game but we accelerate it with data-driven strategy.',
        es: 'Mejoras en engagement dentro de 2-4 semanas. Crecimiento significativo de seguidores y generación de leads dentro de 2-3 meses. Las redes sociales son un juego a largo plazo pero lo aceleramos con estrategia basada en datos.'
      }
    },
    {
      q: { en: 'Do I approve content before it goes live?', es: '¿Apruebo el contenido antes de que se publique?' },
      a: {
        en: 'Always. We prepare content calendars in advance. You review and approve everything before it\'s scheduled. No surprises.',
        es: 'Siempre. Preparamos calendarios de contenido con anticipación. Tú revisas y apruebas todo antes de que se programe. Sin sorpresas.'
      }
    },
    {
      q: { en: 'Can you manage bilingual social accounts?', es: '¿Pueden manejar cuentas bilingües?' },
      a: {
        en: 'Yes. We create native content in English and Spanish — not translations. This is especially important for businesses in tourist markets like San Miguel de Allende.',
        es: 'Sí. Creamos contenido nativo en inglés y español — no traducciones. Esto es especialmente importante para negocios en mercados turísticos como San Miguel de Allende.'
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
                { label: { en: 'Social Media', es: 'Redes Sociales' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'SOCIAL MEDIA', es: 'REDES SOCIALES' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Your Social Media Should Work as Hard as You Do', es: 'Tus Redes Sociales Deben Trabajar Tan Duro Como Tú' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'From strategy to execution — content built on real photography and video direction, not stock templates. Bilingual, platform-native, and designed to convert followers into customers.',
              es: 'De la estrategia a la ejecución — contenido basado en dirección real de fotografía y video, no plantillas genéricas. Bilingüe, nativo de cada plataforma, y diseñado para convertir seguidores en clientes.'
            })}
          </p>
        </div>
      </section>

      {/* ── Visual: Social Media Examples ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-12 sm:py-16 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto grid sm:grid-cols-3 gap-6">

          {/* Mock Instagram Feed */}
          <div className="aspect-square bg-untold-black rounded-lg overflow-hidden p-4 flex flex-col">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-untold-orange flex items-center justify-center text-white text-[9px] font-black">U.</div>
              <span className="text-white text-[11px] font-bold">untold.works</span>
              <span className="text-white/30 text-[10px] ml-auto">Instagram</span>
            </div>
            <div className="grid grid-cols-3 gap-1 flex-grow">
              {[
                'bg-gradient-to-br from-untold-orange/80 to-untold-orange/30',
                'bg-gradient-to-br from-white/20 to-white/5',
                'bg-gradient-to-br from-untold-orange/40 to-untold-orange/10',
                'bg-gradient-to-br from-white/10 to-white/5',
                'bg-gradient-to-br from-untold-orange/60 to-untold-orange/20',
                'bg-gradient-to-br from-white/15 to-white/5',
                'bg-gradient-to-br from-untold-orange/30 to-untold-orange/10',
                'bg-gradient-to-br from-white/20 to-white/10',
                'bg-gradient-to-br from-untold-orange/50 to-untold-orange/15',
              ].map((bg, i) => (
                <div key={i} className={`${bg} rounded-sm`} />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-white/40 text-[10px] font-mono">12 POSTS / MONTH</span>
              <span className="text-untold-orange text-[10px] font-mono font-bold">EN + ES</span>
            </div>
          </div>

          {/* Mock Content Calendar */}
          <div className="aspect-square bg-white rounded-lg overflow-hidden border border-untold-border p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="font-sans font-black text-[11px] uppercase tracking-tight">March 2026</span>
              <span className="text-untold-orange text-[10px] font-mono font-bold">CONTENT CALENDAR</span>
            </div>
            <div className="grid grid-cols-7 gap-px flex-grow text-[8px] font-mono">
              {['M','T','W','T','F','S','S'].map((d, i) => (
                <div key={`h-${i}`} className="text-center text-untold-gray/40 font-bold pb-1">{d}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => {
                const hasPost = [1,3,5,8,10,12,14,15,17,19,22,24,26,29].includes(i + 1);
                const isReel = [3,10,17,24].includes(i + 1);
                const isStory = [5,12,19,26].includes(i + 1);
                return (
                  <div
                    key={i}
                    className={`flex flex-col items-center justify-center rounded-sm ${
                      hasPost ? (isReel ? 'bg-untold-orange text-white' : isStory ? 'bg-untold-orange/20 text-untold-orange' : 'bg-untold-black text-white') : 'text-untold-gray/30'
                    }`}
                  >
                    <span className="text-[7px]">{i + 1}</span>
                    {hasPost && <span className="text-[5px] mt-0.5">{isReel ? 'REEL' : isStory ? 'STORY' : 'POST'}</span>}
                  </div>
                );
              })}
            </div>
            <div className="mt-2 flex items-center space-x-3 text-[8px] font-mono">
              <span className="flex items-center space-x-1"><span className="w-2 h-2 rounded-sm bg-untold-black" /><span>Post</span></span>
              <span className="flex items-center space-x-1"><span className="w-2 h-2 rounded-sm bg-untold-orange" /><span>Reel</span></span>
              <span className="flex items-center space-x-1"><span className="w-2 h-2 rounded-sm bg-untold-orange/20" /><span>Story</span></span>
            </div>
          </div>

          {/* Mock Analytics Dashboard */}
          <div className="aspect-square bg-untold-black rounded-lg overflow-hidden p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white text-[11px] font-black uppercase tracking-tight">Analytics</span>
              <span className="text-untold-orange text-[10px] font-mono font-bold">LIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { label: 'Reach', value: '24.8K', change: '+32%' },
                { label: 'Engagement', value: '4.7%', change: '+18%' },
                { label: 'Followers', value: '3,241', change: '+156' },
                { label: 'Link Clicks', value: '847', change: '+41%' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 rounded-sm p-2">
                  <p className="text-white/40 text-[8px] font-mono uppercase">{stat.label}</p>
                  <p className="text-white text-sm font-black">{stat.value}</p>
                  <p className="text-untold-orange text-[9px] font-mono font-bold">{stat.change}</p>
                </div>
              ))}
            </div>
            <div className="flex-grow bg-white/5 rounded-sm p-2 flex flex-col">
              <p className="text-white/40 text-[8px] font-mono uppercase mb-2">30-Day Growth</p>
              <div className="flex-grow flex items-end space-x-1">
                {[35,42,38,55,48,62,58,72,65,78,82,75,88,92,85,95,90,98,88,105,95,110,102,115,108,120,125,118,130,128].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-untold-orange/60 rounded-t-sm hover:bg-untold-orange transition-colors"
                    style={{ height: `${(h / 130) * 100}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-white/30 text-[9px] font-mono">Feb 15 — Mar 16</span>
              <span className="text-untold-orange text-[9px] font-mono font-bold">↑ TRENDING</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'THE GAP', es: 'LA BRECHA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Posting Is Not a Strategy', es: 'Publicar No Es una Estrategia' })}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed mb-6">
                {t({
                  en: 'Most businesses treat social media like a chore — random posts with no analytics, no strategy, and no connection to business goals. They spend hours creating content that gets buried by algorithms because it wasn\'t designed for the platform. Meanwhile, their competitors are building audiences and converting followers into customers.',
                  es: 'La mayoría de los negocios tratan las redes sociales como una tarea — publicaciones al azar sin analítica, sin estrategia y sin conexión con los objetivos del negocio. Pasan horas creando contenido que queda enterrado por los algoritmos porque no fue diseñado para la plataforma. Mientras tanto, sus competidores construyen audiencias y convierten seguidores en clientes.'
                })}
              </p>
              <p className="font-serif italic text-untold-gray text-lg leading-relaxed">
                {t({
                  en: 'Social media isn\'t about being everywhere — it\'s about being strategic where it matters. With data-driven content and platform-native strategy, your social presence becomes a growth engine, not a time sink.',
                  es: 'Las redes sociales no se tratan de estar en todos lados — se trata de ser estratégico donde importa. Con contenido basado en datos y estrategia nativa para cada plataforma, tu presencia social se convierte en un motor de crecimiento, no en un sumidero de tiempo.'
                })}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">78%</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'of consumers discover new businesses on social media', es: 'de consumidores descubren negocios nuevos en redes sociales' })}
                </p>
              </div>
              <div className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <p className="font-sans font-black text-5xl sm:text-6xl tracking-tighter text-untold-orange mb-2">3hrs</p>
                <p className="font-serif italic text-untold-gray">
                  {t({ en: 'per day wasted on unstrategic manual posting', es: 'al día desperdiciadas en publicaciones manuales sin estrategia' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'PACKAGES', es: 'PAQUETES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'What We Offer', es: 'Lo Que Ofrecemos' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`border bg-white p-6 sm:p-8 flex flex-col ${
                  pkg.highlight
                    ? 'border-l-4 border-l-untold-orange border-t border-r border-b border-untold-border'
                    : 'border-untold-border'
                }`}
              >
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-2">
                  {t(pkg.title)}
                </h3>
                <p className="font-mono text-[13px] text-untold-orange font-bold mb-6">{pkg.price}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base">{t(item)}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-serif italic text-untold-gray/60 border-t border-untold-border pt-4">
                  {t(pkg.footer)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'HOW IT WORKS', es: 'CÓMO FUNCIONA' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-12">
            {t({ en: 'Four Steps to Social Growth', es: 'Cuatro Pasos Hacia el Crecimiento Social' })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-untold-border bg-untold-beige p-6 sm:p-8"
              >
                <span className="font-mono text-[11px] text-untold-orange font-bold">{step.num}</span>
                <h3 className="font-sans font-black text-xl uppercase tracking-tighter mb-3 mt-2">
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

      {/* ── Related Reading ── */}
      <section className="bg-white px-5 sm:px-10 py-12 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-6">
            {t({ en: 'RELATED READING', es: 'LECTURA RELACIONADA' })}
          </span>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link to="/blog/ai-content-strategy-what-to-automate-and-what-to-keep-human" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Deep Dive', es: 'Análisis' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'AI Content Strategy: Automate vs. Human', es: 'Estrategia de Contenido IA: Automatizar vs. Humano' })}</p>
            </Link>
            <Link to="/blog/san-miguel-de-allende-digital-presence-guide-2026" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'SMA Digital Presence Guide 2026', es: 'Guía de Presencia Digital SMA 2026' })}</p>
            </Link>
            <Link to="/blog/run-your-business-from-your-phone" className="border border-untold-border bg-untold-beige p-6 hover:border-untold-orange transition-all">
              <p className="font-sans font-black text-sm uppercase tracking-tighter mb-2">{t({ en: 'Guide', es: 'Guía' })}</p>
              <p className="font-serif italic text-untold-gray">{t({ en: 'Run Your Business from Your Phone', es: 'Maneja Tu Negocio Desde Tu Teléfono' })}</p>
            </Link>
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
            {t({ en: 'Questions About Social Media', es: 'Preguntas Sobre Redes Sociales' })}
          </h2>

          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-untold-border bg-untold-beige p-6 sm:p-8">
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  {t(faq.q)}
                </h3>
                <p className="font-serif italic text-untold-gray text-base leading-relaxed">
                  {t(faq.a)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Lead Form ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'GET STARTED', es: 'COMENZAR' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Get a Free Social Media Audit', es: 'Obtén una Auditoría de Redes Sociales Gratis' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\'ll send you a custom report on your current social media presence, content performance, and specific recommendations to grow your audience and convert followers into customers.',
              es: 'Completa el formulario y te enviaremos un reporte personalizado sobre tu presencia actual en redes sociales, rendimiento de contenido y recomendaciones específicas para crecer tu audiencia y convertir seguidores en clientes.'
            })}
          </p>
          <QuickLeadForm pillar="Social Media" />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-20 sm:py-32 text-center border-t border-untold-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter mb-8">
            {t({ en: 'Ready to Own Your Social Presence?', es: '¿Listo para Dominar Tus Redes Sociales?' })}
          </h2>
          <p className="text-xl font-serif italic text-untold-gray mb-12 max-w-2xl mx-auto">
            {t({
              en: 'Stop posting into the void. Get a strategy that turns your social media into a growth engine — in English and Spanish.',
              es: 'Deja de publicar al vacío. Obtén una estrategia que convierta tus redes sociales en un motor de crecimiento — en inglés y español.'
            })}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-white px-10 sm:px-16 py-5 sm:py-6 font-sans font-black uppercase tracking-tighter text-lg hover:scale-105 active:scale-95 transition-all"
          >
            {t({ en: 'Start a Conversation', es: 'Iniciar Conversación' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SocialMedia;
