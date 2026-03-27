import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

const Infrastructure: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    {
      en: 'Infrastructure — Hosting, Mobile Apps & Reputation Management | Untold.works',
      es: 'Infraestructura — Hosting, Apps Móviles y Gestión de Reputación | Untold.works',
    },
    {
      en: 'Managed hosting, progressive web apps, and automated reputation management. The invisible systems that keep your business running and your credibility intact.',
      es: 'Hosting administrado, aplicaciones web progresivas y gestión automatizada de reputación. Los sistemas invisibles que mantienen tu negocio funcionando y tu credibilidad intacta.',
    },
    { path: '/infrastructure' }
  );

  const services = [
    {
      number: '01',
      title: { en: 'Hosting', es: 'Hosting' },
      path: '/hosting',
      description: {
        en: 'Managed hosting with 99.9% uptime, daily backups, and zero-downtime deployments.',
        es: 'Hosting administrado con 99.9% de disponibilidad, respaldos diarios y despliegues sin tiempo de inactividad.',
      },
    },
    {
      number: '02',
      title: { en: 'Mobile Apps', es: 'Apps Móviles' },
      path: '/mobile-apps',
      description: {
        en: 'Native-feeling progressive web apps that work offline and load instantly.',
        es: 'Aplicaciones web progresivas con sensación nativa que funcionan sin conexión y cargan al instante.',
      },
    },
    {
      number: '03',
      title: { en: 'Review & Reputation', es: 'Reseñas y Reputación' },
      path: '/review-reputation',
      description: {
        en: 'Automated review collection, monitoring, and response — protect and grow your reputation.',
        es: 'Recolección, monitoreo y respuesta automatizada de reseñas — protege y haz crecer tu reputación.',
      },
    },
  ];

  return (
    <div className="bg-untold-beige min-h-screen font-serif text-untold-black">
      {/* ── Hero ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs
              variant="dark"
              crumbs={[
                { label: { en: 'Home', es: 'Inicio' }, path: '/' },
                { label: { en: 'Solutions', es: 'Soluciones' }, path: '/solutions' },
                { label: { en: 'Infrastructure', es: 'Infraestructura' } },
              ]}
            />
          </div>
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t({ en: 'INFRASTRUCTURE', es: 'INFRAESTRUCTURA' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-8 tracking-tighter uppercase max-w-5xl">
            {t({
              en: 'The Foundation Nobody Sees. The Reliability Everyone Feels.',
              es: 'La Base Que Nadie Ve. La Confiabilidad Que Todos Sienten.',
            })}
          </h1>
          <p className="text-xl sm:text-2xl font-serif italic text-white/60 max-w-3xl leading-relaxed">
            {t({
              en: 'Hosting, mobile apps, and reputation management — the invisible systems that keep your business running and your credibility intact.',
              es: 'Hosting, apps móviles y gestión de reputación — los sistemas invisibles que mantienen tu negocio funcionando y tu credibilidad intacta.',
            })}
          </p>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="px-5 sm:px-10 py-20 sm:py-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-untold-border">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-untold-beige p-8 sm:p-12 flex flex-col"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-untold-gray mb-6">
                  {service.number}
                </p>
                <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tight mb-4">
                  <Link to={service.path} className="hover:text-untold-orange transition-colors">
                    {t(service.title)}
                  </Link>
                </h3>
                <p className="font-serif italic text-untold-gray leading-relaxed mb-8 flex-1">
                  {t(service.description)}
                </p>
                <Link
                  to={service.path}
                  className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-untold-orange hover:text-untold-black transition-colors"
                >
                  {t({ en: 'Explore →', es: 'Explorar →' })}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How These Connect ── */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-t border-untold-border">
        <div className="max-w-[1440px] mx-auto max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-untold-gray mb-6">
            {t({ en: 'HOW THESE CONNECT', es: 'CÓMO SE CONECTAN' })}
          </p>
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
            {t({
              en: 'One System, Not Three Tools.',
              es: 'Un Sistema, No Tres Herramientas.',
            })}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-untold-gray leading-relaxed mb-8">
            {t({
              en: 'Your hosting keeps the site fast and secure. Your mobile app gives customers instant access. Your reputation system turns happy customers into public proof. Together, they form the operational backbone that every other service depends on.',
              es: 'Tu hosting mantiene el sitio rápido y seguro. Tu app móvil da acceso instantáneo a los clientes. Tu sistema de reputación convierte clientes satisfechos en prueba pública. Juntos, forman la columna vertebral operativa de la que depende cada otro servicio.',
            })}
          </p>
          <Link
            to="/network-systems"
            className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold text-untold-orange hover:text-untold-black transition-colors"
          >
            {t({ en: 'See the full Network Systems offering →', es: 'Ver la oferta completa de Network Systems →' })}
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tight mb-6">
            {t({
              en: 'Build on a Foundation That Scales.',
              es: 'Construye Sobre una Base Que Escala.',
            })}
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            {t({
              en: 'Tell us where your infrastructure breaks down. We will show you how to fix it — and keep it running.',
              es: 'Cuéntanos dónde falla tu infraestructura. Te mostraremos cómo arreglarla — y mantenerla funcionando.',
            })}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-untold-orange text-untold-black font-mono text-[11px] uppercase tracking-[0.3em] font-bold px-10 py-4 hover:bg-white transition-colors"
          >
            {t({ en: 'Start the Conversation', es: 'Inicia la Conversación' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
