import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';

const Home: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.home.title,
    i18n.seo.home.description,
    { path: '/' }
  );

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-56 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t(i18n.hero.eyebrow)}
            </p>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.8rem,12vw,160px)] leading-[0.82] mb-12 tracking-tighter uppercase max-w-[1400px]">
            {t(i18n.hero.headline)}
          </h1>

          <div className="mb-16 max-w-5xl border-l-4 border-untold-orange pl-6 sm:pl-10 space-y-4">
            <p className="text-xl sm:text-2xl lg:text-[42px] font-serif italic text-white leading-[1.15] tracking-tight">
              {t(i18n.hero.tagline)}
            </p>
            <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.3em] text-white/40 font-bold">
              {t(i18n.hero.subheadline)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/10 px-8 sm:px-16 py-6 sm:py-10 hover:border-untold-orange hover:bg-untold-orange/5 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.15)]"
            >
              <span className="font-sans font-black text-lg sm:text-2xl uppercase tracking-tighter">
                {t(i18n.hero.primaryCta)}
              </span>
              <span className="text-3xl sm:text-5xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
            </Link>
            <a
              href="#what-we-build"
              className="font-mono text-[12px] uppercase tracking-[0.3em] text-white/40 hover:text-untold-orange transition-colors py-6 sm:py-10"
            >
              {t(i18n.hero.secondaryCta)} ↓
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: LOCATION BADGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border px-5 sm:px-10 py-10 sm:py-14">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-4">
          <span className="w-2 h-2 rounded-full bg-untold-orange shrink-0"></span>
          <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.4em] text-untold-gray font-bold text-center">
            {t(i18n.locationBadge.text)}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: DEFINE YOUR OPERATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85]">
              {t({ en: 'Define Your\nOperation.', es: 'Define Tu\nOperación.' })}
            </h3>
            <p className="text-lg sm:text-xl font-serif italic text-untold-gray max-w-3xl mx-auto">
              {t({ en: 'We build the AI-powered platform that fits your current scale. Select the ecosystem that matches your business today.', es: 'Construimos la plataforma impulsada por IA que se adapta a tu escala actual. Selecciona el ecosistema que corresponde a tu negocio hoy.' })}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                id: 'professional-services',
                number: '01',
                title: { en: 'Professional Services', es: 'Servicios Profesionales' },
                subtitle: { en: 'Your entire business on one AI-powered platform.', es: 'Todo tu negocio en una plataforma impulsada por IA.' },
                who: { en: 'Consultants, coaches, photographers, attorneys, architects, therapists — anyone selling expertise.', es: 'Consultores, coaches, fotógrafos, abogados, arquitectos, terapeutas — cualquiera que venda su experiencia.' },
                features: [
                  { en: 'Brand identity & AI-powered website', es: 'Identidad de marca y sitio web con IA' },
                  { en: 'Automated client acquisition funnel', es: 'Embudo automatizado de adquisición de clientes' },
                  { en: 'CRM with AI follow-up sequences', es: 'CRM con secuencias de seguimiento con IA' },
                  { en: 'Booking, scheduling & intake forms', es: 'Reservas, agenda y formularios de admisión' },
                  { en: 'Revenue dashboard & analytics', es: 'Panel de ingresos y analítica' }
                ],
                footer: { en: 'You focus on your clients. The system handles everything else.', es: 'Tú te enfocas en tus clientes. El sistema se encarga de todo lo demás.' }
              },
              {
                id: 'small-business',
                number: '02',
                title: { en: 'Small Business Platforms', es: 'Plataformas para Pequeñas Empresas' },
                subtitle: { en: 'Connected systems that scale with your team.', es: 'Sistemas conectados que escalan con tu equipo.' },
                who: { en: 'Restaurants, retail shops, agencies, clinics, property managers — teams of 2–50 that need systems, not spreadsheets.', es: 'Restaurantes, tiendas, agencias, clínicas, administradores de propiedades — equipos de 2–50 que necesitan sistemas, no hojas de cálculo.' },
                features: [
                  { en: 'Full brand ecosystem & website', es: 'Ecosistema de marca completo y sitio web' },
                  { en: 'Team CRM & AI workflow automation', es: 'CRM de equipo y automatización con IA' },
                  { en: 'Marketing engine (email, social, content)', es: 'Motor de marketing (email, redes, contenido)' },
                  { en: 'Operations management & inventory', es: 'Gestión de operaciones e inventario' },
                  { en: 'Multi-user analytics & team reporting', es: 'Analítica multiusuario y reportes de equipo' }
                ],
                footer: { en: 'One platform your whole team actually uses. No more twenty logins.', es: 'Una plataforma que todo tu equipo realmente usa. No más veinte contraseñas.' }
              },
              {
                id: 'enterprise',
                number: '03',
                title: { en: 'Enterprise & Operations', es: 'Empresarial y Operaciones' },
                subtitle: { en: 'AI infrastructure for complex business operations.', es: 'Infraestructura de IA para operaciones empresariales complejas.' },
                who: { en: 'Logistics companies, manufacturing, multi-location brands, franchises — operations that need intelligent systems at scale.', es: 'Empresas de logística, manufactura, marcas multi-ubicación, franquicias — operaciones que necesitan sistemas inteligentes a escala.' },
                features: [
                  { en: 'Enterprise brand system & digital platform', es: 'Sistema de marca empresarial y plataforma digital' },
                  { en: 'Multi-team CRM & revenue pipeline', es: 'CRM multi-equipo y pipeline de ingresos' },
                  { en: 'AI operations & process automation', es: 'Operaciones con IA y automatización de procesos' },
                  { en: 'Custom integrations & data architecture', es: 'Integraciones personalizadas y arquitectura de datos' },
                  { en: 'Revenue operations, forecasting & reporting', es: 'Operaciones de ingresos, pronósticos y reportes' }
                ],
                footer: { en: 'Built for complexity. Designed for clarity. Owned by you.', es: 'Construido para la complejidad. Diseñado para la claridad. Propiedad tuya.' }
              }
            ].map((pillar) => (
              <Link
                key={pillar.id}
                to={`/solutions/${pillar.id}`}
                className="group border border-untold-border bg-white p-8 sm:p-10 lg:p-12 flex flex-col hover:border-untold-orange/30 hover:shadow-lg transition-all"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-6">{pillar.number}</span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors">
                  {t(pillar.title)}
                </h4>
                <p className="text-lg font-serif italic text-untold-gray mb-4">
                  {t(pillar.subtitle)}
                </p>

                <p className="text-sm font-mono text-untold-orange/70 mb-8 pb-4 border-b border-untold-border">
                  {t(pillar.who)}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-untold-orange mt-1.5 text-sm">+</span>
                      <span className="text-base">{t(feature)}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-serif italic text-untold-gray/60 mb-6 border-t border-untold-border pt-6">
                  {t(pillar.footer)}
                </p>

                <span className="inline-flex items-center space-x-3 font-sans font-black text-base uppercase tracking-tighter text-untold-orange group-hover:translate-x-2 transition-transform">
                  <span>{t({ en: 'Explore This Ecosystem', es: 'Explorar Este Ecosistema' })}</span>
                  <span className="text-xl">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: WHAT WE BUILD
      ═══════════════════════════════════════════════════════════ */}
      <section id="what-we-build" className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-beige border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'WHAT WE BUILD', es: 'LO QUE CONSTRUIMOS' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t(i18n.whatWeBuild.headline)}
          </h3>
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-untold-gray mb-20 max-w-4xl leading-tight">
            {t(i18n.whatWeBuild.subheadline)}
          </p>

          {/* Three phases */}
          <div className="grid lg:grid-cols-3 gap-px bg-untold-border border border-untold-border mb-16">
            {i18n.whatWeBuild.phases.map((phase, idx) => (
              <div key={idx} className="bg-white p-8 sm:p-12 lg:p-14 flex flex-col group hover:bg-untold-beige/50 transition-all">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-6">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-6 group-hover:text-untold-orange transition-colors">
                  {t(phase.title)}
                </h4>
                <p className="text-base sm:text-lg font-serif italic text-untold-gray leading-relaxed mb-8 flex-grow">
                  {t(phase.description)}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-untold-border">
                  {((phase as any).deliverables || (phase as any).features || (phase as any).options || []).map((item: { en: string; es: string }, i: number) => (
                    <span key={i} className="text-[10px] font-mono uppercase tracking-[0.2em] text-untold-black/40 border border-untold-border px-3 py-1">
                      {t(item)}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-6 group"
            >
              <span className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter border-b-4 border-untold-orange pb-2 group-hover:text-untold-orange transition-colors">
                {t(i18n.whatWeBuild.cta)}
              </span>
              <span className="text-3xl group-hover:translate-x-4 transition-transform duration-500 text-untold-orange">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: HOW WE WORK
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-black"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'OUR PROCESS', es: 'NUESTRO PROCESO' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85]">
            {t(i18n.howWeWork.headline)}
          </h3>
          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray mb-20 max-w-3xl">
            {t(i18n.howWeWork.subheadline)}
          </p>

          <div className="border-t border-untold-border">
            {i18n.howWeWork.stages.map((stage) => (
              <div
                key={stage.number}
                className="grid lg:grid-cols-12 gap-0 border-b border-untold-border group hover:bg-untold-beige transition-all duration-500"
              >
                <div className="lg:col-span-4 p-6 sm:p-10 lg:p-14 lg:border-r border-untold-border">
                  <span className="font-mono text-[11px] font-bold text-untold-orange mb-6 block tracking-[0.4em] uppercase">
                    {t({ en: `STAGE ${stage.number}`, es: `ETAPA ${stage.number}` })}
                  </span>
                  <h4 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter leading-tight group-hover:text-untold-orange transition-colors">
                    {t(stage.title)}
                  </h4>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-black/30 mt-4">
                    {t(stage.subtitle)}
                  </p>
                </div>
                <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14 flex flex-col justify-between">
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-untold-gray leading-relaxed mb-8">
                    {t(stage.description)}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-untold-border/50">
                    {stage.deliverables.map((d, i) => (
                      <span key={i} className="text-[10px] font-mono uppercase tracking-[0.2em] text-untold-black/40 border border-untold-border px-3 py-1">
                        {t(d)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: WHY UNTOLD
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 bg-untold-black text-white border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-20">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t(i18n.whyUntold.eyebrow)}
            </h2>
          </div>

          <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-12 leading-[0.85]">
            {t(i18n.whyUntold.headline)}
          </h3>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl font-serif text-white/70 leading-relaxed mb-12">
                {t(i18n.whyUntold.opening)}
              </p>
              <h4 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-6 text-untold-orange">
                {t(i18n.whyUntold.dontMissHeadline)}
              </h4>
              <p className="text-lg sm:text-xl font-serif text-white/60 leading-relaxed">
                {t(i18n.whyUntold.dontMissContent)}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {i18n.whyUntold.differentiators.map((diff, idx) => (
                  <div key={idx} className="border-l-2 border-untold-orange/30 pl-6 hover:border-untold-orange transition-colors">
                    <h5 className="font-sans font-black text-lg uppercase tracking-tighter mb-2">
                      {t(diff.title)}
                    </h5>
                    <p className="font-serif italic text-white/50 text-base leading-relaxed">
                      {t(diff.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-16">
            <h4 className="font-sans font-black text-2xl sm:text-4xl uppercase tracking-tighter mb-6">
              {t(i18n.whyUntold.closingHeadline)}
            </h4>
            <p className="text-lg sm:text-xl font-serif italic text-white/50 max-w-3xl leading-relaxed">
              {t(i18n.whyUntold.closingContent)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 lg:py-72 text-center bg-untold-beige/40">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(3rem,14vw,180px)] leading-[0.8] mb-10 sm:mb-16 tracking-tighter uppercase text-center">
            {t(i18n.finalCta.headline)}
          </h2>
          <Link
            to="/contact"
            className="group relative bg-untold-black text-white px-10 sm:px-24 py-6 sm:py-10 rounded-none text-lg sm:text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <span className="relative z-10">{t(i18n.finalCta.cta)}</span>
            <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
