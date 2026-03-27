import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

const services = [
  {
    num: '01',
    name: { en: 'Website Design', es: 'Diseño Web' },
    path: '/websites',
    desc: {
      en: 'Mobile-first websites built for conversion, speed, and AI discoverability.',
      es: 'Sitios web mobile-first construidos para conversión, velocidad y descubrimiento por IA.',
    },
  },
  {
    num: '02',
    name: { en: 'Copywriting', es: 'Copywriting' },
    path: '/copywriting',
    desc: {
      en: 'Strategic brand messaging that speaks to humans and ranks for machines.',
      es: 'Mensajería de marca estratégica que habla a humanos y posiciona en máquinas.',
    },
  },
  {
    num: '03',
    name: { en: 'SEO & AEO', es: 'SEO y AEO' },
    path: '/seo-aeo',
    desc: {
      en: 'Search engine and AI engine optimization — be visible where decisions are made.',
      es: 'Optimización para motores de búsqueda e IA — sé visible donde se toman decisiones.',
    },
  },
  {
    num: '04',
    name: { en: 'Social Media', es: 'Redes Sociales' },
    path: '/social-media',
    desc: {
      en: 'Platform-native content and automation that builds audience and drives leads.',
      es: 'Contenido nativo de plataforma y automatización que construye audiencia y genera leads.',
    },
  },
];

const DigitalPresence = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Digital Presence — Website, Content, SEO & Social Media | Untold.works',
      es: 'Presencia Digital — Sitio Web, Contenido, SEO y Redes Sociales | Untold.works',
    },
    {
      en: 'Your complete digital front door: website design, copywriting, SEO & AEO optimization, and social media management. Be found, be chosen, be remembered.',
      es: 'Tu puerta digital completa: diseño web, copywriting, optimización SEO y AEO, y gestión de redes sociales. Sé encontrado, sé elegido, sé recordado.',
    },
    {
      path: '/digital-presence',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Digital Presence Services — Untold.works',
        description: 'Complete digital presence services: website design, copywriting, SEO & AEO, and social media management for businesses in Mexico and the US.',
        url: 'https://untold.works/digital-presence',
        provider: {
          '@type': 'Organization',
          name: 'Untold.works',
          url: 'https://untold.works',
        },
        areaServed: [
          { '@type': 'Country', name: 'Mexico' },
          { '@type': 'Country', name: 'United States' },
        ],
        serviceType: ['Website Design', 'Copywriting', 'SEO', 'AEO', 'Social Media Management'],
      },
    }
  );

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
                { label: { en: 'Digital Presence', es: 'Presencia Digital' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'DIGITAL PRESENCE', es: 'PRESENCIA DIGITAL' })}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Be Found. Be Chosen. Be Remembered.', es: 'Sé Encontrado. Sé Elegido. Sé Recordado.' })}
          </h1>

          <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl leading-tight border-l-4 border-untold-orange pl-6 sm:pl-10">
            {t({
              en: 'Your website, your content, your search visibility, your social proof — the complete digital front door for your business.',
              es: 'Tu sitio web, tu contenido, tu visibilidad en buscadores, tu prueba social — la puerta digital completa para tu negocio.',
            })}
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="bg-untold-beige px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'CAPABILITIES', es: 'CAPACIDADES' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'Four Pillars of Digital Presence', es: 'Cuatro Pilares de Presencia Digital' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-12">
            {t({
              en: 'Each service stands on its own. Together, they form a system that compounds results.',
              es: 'Cada servicio funciona por sí solo. Juntos, forman un sistema que multiplica resultados.',
            })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.num} className="bg-white border border-untold-border p-6 sm:p-8 hover:shadow-lg transition-shadow flex flex-col">
                <div className="font-mono text-4xl font-black text-untold-orange mb-4">{service.num}</div>
                <h3 className="font-sans font-black text-lg uppercase tracking-tighter mb-3">
                  <Link to={service.path} className="hover:text-untold-orange transition-colors">
                    {t(service.name)}
                  </Link>
                </h3>
                <p className="font-serif text-untold-gray text-sm leading-relaxed mb-6 flex-1">
                  {t(service.desc)}
                </p>
                <Link
                  to={service.path}
                  className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-untold-orange hover:text-untold-black transition-colors"
                >
                  {t({ en: 'Explore →', es: 'Explorar →' })}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How These Connect ── */}
      <section className="bg-white px-5 sm:px-10 py-16 sm:py-24 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'BETTER TOGETHER', es: 'MEJOR JUNTOS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'How These Connect', es: 'Cómo Se Conectan' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mb-8">
            {t({
              en: 'A website without SEO is invisible. SEO without good copy is forgettable. Copy without social distribution stays unread. These four capabilities are designed to work as one system — each amplifying the others.',
              es: 'Un sitio web sin SEO es invisible. SEO sin buen copy es olvidable. Copy sin distribución social queda sin leer. Estas cuatro capacidades están diseñadas para funcionar como un solo sistema — cada una amplificando a las otras.',
            })}
          </p>

          <div className="bg-untold-black text-white p-8 sm:p-10 border border-untold-orange/30">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-untold-orange font-bold mb-4">
              {t({ en: 'NETWORK SYSTEMS', es: 'NETWORK SYSTEMS' })}
            </p>
            <p className="font-serif text-lg italic leading-relaxed mb-6">
              {t({
                en: 'For multi-location businesses, Digital Presence scales across every location — one brand system, consistent everywhere, managed centrally.',
                es: 'Para negocios con múltiples ubicaciones, la Presencia Digital escala en cada ubicación — un sistema de marca, consistente en todas partes, gestionado centralmente.',
              })}
            </p>
            <Link
              to="/network-systems"
              className="inline-block bg-untold-orange text-untold-black px-8 py-3 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
            >
              {t({ en: 'Learn About Network Systems', es: 'Conoce Network Systems' })}
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-4">
            {t({ en: 'Ready to Build Your Digital Presence?', es: '¿Listo Para Construir Tu Presencia Digital?' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-white/60 max-w-2xl mx-auto mb-10">
            {t({
              en: 'Tell us where you are today and where you want to be. We\'ll map the fastest path.',
              es: 'Cuéntanos dónde estás hoy y a dónde quieres llegar. Trazaremos el camino más rápido.',
            })}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-untold-black px-10 py-4 font-sans font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
          >
            {t({ en: 'Start a Conversation', es: 'Inicia una Conversación' })}
          </Link>
        </div>
      </section>

    </div>
  );
};

export default DigitalPresence;
