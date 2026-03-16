import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import Testimonials from '../components/Testimonials';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.aboutPage;

  usePageMeta(
    i18n.seo.about.title,
    i18n.seo.about.description,
    {
      path: '/about',
      schema: [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          mainEntity: {
            '@type': 'Person',
            name: 'Joshua Semolik',
            jobTitle: 'Founder & Creative Director',
            worksFor: { '@type': 'Organization', name: 'Untold.works', '@id': 'https://untold.works/#organization' },
            url: 'https://untold.works/about',
            sameAs: ['https://www.linkedin.com/in/semolik/'],
            knowsAbout: ['AI-powered websites', 'brand identity', 'bilingual web development', 'SEO', 'AEO', 'workflow automation'],
            description: '25 years of creative direction. Based in San Miguel de Allende, Mexico. Building AI-powered business ecosystems for companies across Mexico and the United States.',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Who runs Untold.works?', acceptedAnswer: { '@type': 'Answer', text: 'Untold.works is run by Joshua Semolik, a creative director with 25 years of experience, based in San Miguel de Allende, Guanajuato, Mexico.' } },
            { '@type': 'Question', name: 'Can a Mexico-based agency serve US clients effectively?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our bilingual team works remotely with businesses across Mexico and the United States. Same timezone, native-level English and Spanish, and deep understanding of both markets.' } },
            { '@type': 'Question', name: 'Why San Miguel de Allende?', acceptedAnswer: { '@type': 'Answer', text: 'San Miguel de Allende sits at the intersection of US and Mexican business culture. Strong expat community, growing tech ecosystem, and a creative environment that attracts world-class talent.' } },
          ],
        },
      ],
    }
  );

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Hero */}
      <section className="px-5 sm:px-10 pt-20 sm:pt-32 pb-24 sm:pb-40 lg:pt-56 lg:pb-64 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

        <div className="max-w-[1440px] mx-auto relative">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'ABOUT // UNTOLD.WORKS', es: 'ACERCA DE // UNTOLD.WORKS' })}
            </p>
          </div>

          <div className="max-w-5xl">
            <h1 className="font-sans font-black text-[clamp(2.5rem,7vw,100px)] leading-[0.85] mb-12 tracking-tighter uppercase text-white">
              {t(content.hero.headline)}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-[40px] font-serif italic leading-[1.2] text-white/80 tracking-tight max-w-4xl border-l-4 border-untold-orange pl-6 sm:pl-10 mb-8">
              {t(content.hero.hook)}
            </p>
            <p className="text-base sm:text-xl lg:text-2xl font-sans font-bold text-white/40 tracking-tight max-w-3xl pl-7 sm:pl-11 italic">
              {t(content.hero.regional)}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Photo */}
      <section className="bg-untold-beige border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2">
          <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src="/images/about-photo.webp"
              alt="Joshua Semolik — Founder of Untold.works, San Miguel de Allende"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="px-5 sm:px-10 lg:px-16 py-16 sm:py-24 flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-untold-orange block mb-6">
              {t({ en: 'THE FOUNDER', es: 'EL FUNDADOR' })}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-6 leading-[0.85]">
              Joshua Semolik
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-untold-black/60 leading-relaxed">
              {t({
                en: '25 years of creative direction. Based in San Miguel de Allende, Mexico. Building AI-powered business ecosystems for companies across Mexico and the United States.',
                es: '25 años de dirección creativa. Basado en San Miguel de Allende, México. Construyendo ecosistemas empresariales impulsados por IA para empresas en México y Estados Unidos.'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Why Mexico / Why San Miguel */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 bg-untold-beige text-untold-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-untold-black/40">
              {t(content.whyMexico.eyebrow)}
            </p>
          </div>

          <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter leading-[0.85] mb-20 max-w-6xl">
            {t(content.whyMexico.headline)}
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Mexico */}
            <div>
              <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed">
                {t(content.whyMexico.mexicoContent)}
              </p>
            </div>

            {/* San Miguel */}
            <div>
              <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed">
                {t(content.whyMexico.smaContent)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 sm:gap-24 items-start">
          <div className="lg:col-span-4">
            <div className="sticky top-48">
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 block mb-10">THE_STORY // LOG_01</span>
              <h2 className="font-sans font-black text-4xl lg:text-6xl uppercase tracking-tighter text-untold-orange leading-none">
                {t({ en: 'Creative Foundation.\nTechnical Execution.', es: 'Base Creativa.\nEjecución Técnica.' })}
              </h2>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-24 lg:pl-16">
            <div className="group">
              <p className="text-xl sm:text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight hover:text-white transition-colors">
                {t(content.narrative.veteran)}
              </p>
            </div>

            <div className="pt-24 border-t border-white/5 group">
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 block mb-10">THE_PHILOSOPHY // LOG_02</span>
              <p className="text-xl sm:text-3xl lg:text-5xl font-serif text-white/70 leading-[1.25] tracking-tight">
                {t(content.narrative.theBridge)}
              </p>
            </div>

            <div className="pt-24 border-t border-white/5 group">
              <span className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-untold-orange block mb-10">THE_MANIFESTO // LOG_03</span>
              <p className="text-xl sm:text-3xl lg:text-5xl font-serif italic text-white/90 leading-[1.15] tracking-tight">
                "{t(content.narrative.manifesto)}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials variant="dark" />

      {/* FAQ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-beige text-untold-black border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'FREQUENTLY ASKED QUESTIONS', es: 'PREGUNTAS FRECUENTES' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'What People Want\nto Know About Us', es: '¿Qué Quiere Saber\nla Gente Sobre Nosotros?' })}
          </h3>

          <div className="space-y-0 border-t border-untold-border">
            {[
              { q: { en: 'Who runs Untold.works?', es: '¿Quién dirige Untold.works?' }, a: { en: 'Untold.works is led by Joshua Semolik, a creative director and technologist with decades of experience in branding, design, and AI systems. The agency combines deep creative expertise with modern technology to build complete business ecosystems.', es: 'Untold.works está dirigido por Joshua Semolik, un director creativo y tecnólogo con décadas de experiencia en branding, diseño y sistemas de IA. La agencia combina experiencia creativa profunda con tecnología moderna para construir ecosistemas empresariales completos.' } },
              { q: { en: 'Can a Mexico-based agency serve US clients effectively?', es: '¿Puede una agencia en México atender clientes de EE.UU. efectivamente?' }, a: { en: 'Absolutely. We work with clients across both countries. Our bilingual team, shared time zones, and deep understanding of both markets make cross-border collaboration seamless. Many of our clients are US businesses looking to reach Mexican audiences, or Mexican businesses expanding north.', es: 'Absolutamente. Trabajamos con clientes en ambos países. Nuestro equipo bilingüe, husos horarios compartidos y profundo entendimiento de ambos mercados hacen que la colaboración transfronteriza sea fluida. Muchos de nuestros clientes son negocios de EE.UU. que buscan audiencias mexicanas, o negocios mexicanos expandiéndose al norte.' } },
              { q: { en: 'What makes Untold.works different from other agencies?', es: '¿Qué hace diferente a Untold.works de otras agencias?' }, a: { en: 'We lead with brand and storytelling, then layer in AI technology. Most agencies do one or the other. We also transfer full ownership of everything we build — no lock-in, no monthly fees for access to your own systems.', es: 'Lideramos con marca y narrativa, después integramos tecnología de IA. La mayoría de las agencias hacen una cosa u otra. También transferimos propiedad total de todo lo que construimos — sin ataduras, sin cuotas mensuales por acceso a tus propios sistemas.' } },
              { q: { en: 'What industries do you have experience in?', es: '¿En qué industrias tienen experiencia?' }, a: { en: 'Professional services (law firms, consultants, therapists), hospitality (hotels, restaurants), retail, music and entertainment, e-commerce, and enterprise operations. Our portfolio includes projects across all of these sectors.', es: 'Servicios profesionales (despachos, consultores, terapeutas), hospitalidad (hoteles, restaurantes), retail, música y entretenimiento, e-commerce y operaciones empresariales. Nuestro portafolio incluye proyectos en todos estos sectores.' } },
              { q: { en: 'Do you work with startups or only established businesses?', es: '¿Trabajan con startups o solo negocios establecidos?' }, a: { en: 'Both. We work with solo practitioners launching their first practice, growing small businesses adding AI systems, and established enterprises modernizing operations. Our solutions scale to match where you are today.', es: 'Ambos. Trabajamos con profesionales independientes lanzando su primera práctica, pequeños negocios en crecimiento agregando sistemas de IA, y empresas establecidas modernizando operaciones. Nuestras soluciones se adaptan a donde estés hoy.' } },
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

      {/* Closing CTA */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 text-center bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="w-px h-32 bg-gradient-to-b from-untold-orange to-transparent mx-auto mb-16"></div>
          <h2 className="font-sans font-black text-3xl sm:text-6xl lg:text-[110px] mb-12 uppercase tracking-tighter leading-none text-white">
            {t(content.closing.headline)}
          </h2>
          <p className="text-2xl lg:text-[2.2rem] font-serif italic mb-24 max-w-4xl mx-auto text-white/50 leading-relaxed">
            {t(content.closing.subtext)}
          </p>
          <Link
            to="/contact"
            className="bg-untold-orange text-white px-8 sm:px-16 py-5 sm:py-8 font-sans font-black uppercase tracking-tighter text-base sm:text-xl hover:scale-105 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)] inline-block active:scale-95"
          >
            {t(i18n.navigation.cta)}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
