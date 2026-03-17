import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import Testimonials from '../components/Testimonials';

const creativeWork = [
  { id: 'xxGPdk9Yj_U', title: { en: 'R+R=NOW Record Release and Tour', es: 'R+R=NOW Lanzamiento de Disco y Gira' }, client: 'Robert Glasper / Blue Note', role: { en: 'Directed, Shot & Edited', es: 'Dirigido, Filmado y Editado' } },
  { id: '000xjrlHSnQ', title: { en: 'The 2025 Black Radio Experience Recap', es: 'Resumen de Black Radio Experience 2025' }, client: 'Blue Note Jazz Festival', role: { en: 'Creative Direction & Production', es: 'Dirección Creativa y Producción' } },
  { id: 'ba3KhYBhMys', title: { en: 'Color of Noize — Derrick Hodge, Angelique Kidjo & Carnegie Hall', es: 'Color of Noize — Derrick Hodge, Angelique Kidjo y Carnegie Hall' }, client: 'Carnegie Hall', role: { en: 'Creative Direction & Production', es: 'Dirección Creativa y Producción' } },
  { id: 'iQBpjgxBET4', title: { en: 'We Were Here — Massive Brand Launch', es: 'We Were Here — Gran Lanzamiento de Marca' }, client: 'Brand Campaign', role: { en: 'Creative Direction & Production', es: 'Dirección Creativa y Producción' } },
  { id: 'jQYjpCC3cyQ', title: { en: 'Robert Glasper — Behind the Scenes of Code Derivation', es: 'Robert Glasper — Detrás de Cámaras de Code Derivation' }, client: 'Robert Glasper', role: { en: 'Creative Direction & Production', es: 'Dirección Creativa y Producción' } },
  { id: 'k7Mh38JEXDM', title: { en: 'OMI Brand Video', es: 'Video de Marca OMI' }, client: 'OMI Growth', role: { en: 'Brand Strategy & Production', es: 'Estrategia de Marca y Producción' } },
];

const VideoThumbnail: React.FC<{ videoId: string; title: string; client: string; role: string }> = ({ videoId, title, client, role }) => {
  const [playing, setPlaying] = useState(false);
  const play = useCallback(() => setPlaying(true), []);

  if (playing) {
    return (
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div>
      <button onClick={play} className="relative aspect-video w-full overflow-hidden group cursor-pointer bg-untold-black">
        <img
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-untold-orange/90 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </button>
      <div className="mt-4">
        <p className="font-sans font-black text-sm uppercase tracking-tighter text-white leading-tight">{title}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">{client}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange mt-1">{role}</p>
      </div>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.aboutPage;
  const founder = content.founder;
  const [showCertificate, setShowCertificate] = useState(false);

  const videoSchemas = creativeWork.map((video) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title.en,
    description: `${video.role.en} — ${video.client}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    uploadDate: '2024-01-01',
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
  }));

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
            jobTitle: 'Founder & AI Systems Architect',
            worksFor: { '@type': 'Organization', name: 'Untold.works', '@id': 'https://untold.works/#organization' },
            url: 'https://untold.works/about',
            image: 'https://untold.works/images/about-photo.webp',
            sameAs: ['https://www.linkedin.com/in/semolik/'],
            alumniOf: [
              { '@type': 'Organization', name: 'MIT Sloan School of Management', url: 'https://executive.mit.edu/' },
              { '@type': 'CollegeOrUniversity', name: 'Arizona State University' }
            ],
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              name: 'Artificial Intelligence: Implications for Business Strategy',
              credentialCategory: 'Certificate',
              educationalLevel: 'Executive Education',
              recognizedBy: { '@type': 'Organization', name: 'MIT Sloan School of Management', url: 'https://executive.mit.edu/' },
              dateCreated: '2026-01'
            },
            knowsAbout: [
              'AI systems architecture', 'agentic workflows', 'revenue operations', 'n8n workflow automation',
              'Claude AI', 'OpenAI Agents', 'RAG pipelines', 'predictive analytics', 'WhatsApp AI',
              'brand strategy', 'creative technology', 'digital transformation', 'CRM architecture',
              'Salesforce', 'HubSpot', 'conversion optimization', 'go-to-market strategy',
              'Next.js', 'React', 'TypeScript', 'Python', 'bilingual web development', 'SEO', 'AEO'
            ],
            description: 'AI systems architect and creative technologist with 20 years of experience building production AI systems, revenue operations platforms, and brand strategy across the US and Latin America. Built 6 AI systems for enterprise clients, engineered agentic workflows achieving 98% MQL accuracy, and unified revenue operations for 20% sales lift across 4,000+ SKUs. MIT Sloan School of Management, AI Strategy.',
          },
        },
        {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Who runs Untold.works?', acceptedAnswer: { '@type': 'Answer', text: 'Untold.works is led by Joshua Semolik, an AI systems architect and creative technologist with 20 years of experience spanning NBA Entertainment, global product launches at Videndum PLC, cross-border GTM strategy, and production AI systems. MIT Sloan AI Strategy. Based in San Miguel de Allende, Guanajuato, Mexico.' } },
            { '@type': 'Question', name: 'Can a Mexico-based agency serve US clients effectively?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our bilingual team works remotely with businesses across Mexico and the United States. Same timezone, native-level English and Spanish, and deep understanding of both markets.' } },
            { '@type': 'Question', name: 'Why San Miguel de Allende?', acceptedAnswer: { '@type': 'Answer', text: 'San Miguel de Allende sits at the intersection of US and Mexican business culture. Strong expat community, growing tech ecosystem, and a creative environment that attracts world-class talent.' } },
          ],
        },
        ...videoSchemas,
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

      {/* Founder */}
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
              {t(founder.eyebrow)}
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-3 leading-[0.85]">
              Joshua Semolik
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-untold-black/40 mb-6">
              {t(founder.title)}
            </p>
            <p className="text-lg sm:text-xl font-serif italic text-untold-black/60 leading-relaxed mb-8">
              {t(founder.bio)}
            </p>
            <a
              href="https://www.linkedin.com/in/semolik/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-untold-orange hover:text-untold-black transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] font-bold">
                {t(founder.linkedinLabel)}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-beige text-untold-black border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-untold-black/40">
              {t({ en: 'CAREER // TIMELINE', es: 'CARRERA // CRONOLOGÍA' })}
            </p>
          </div>

          <div className="max-w-4xl space-y-0">
            {founder.career.map((entry, idx) => (
              <div key={idx} className="border-l-2 border-untold-orange/30 pl-6 sm:pl-10 pb-10 last:pb-0 relative">
                <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-untold-orange"></span>
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] font-bold text-untold-orange block mb-2">
                  {entry.period}
                </span>
                <p className="font-sans font-black text-base sm:text-lg uppercase tracking-tighter leading-tight mb-1">
                  {t(entry.role)}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-untold-black/40 mb-3">
                  {t(entry.org)}
                </p>
                <p className="font-serif text-base text-untold-black/60 leading-relaxed">
                  {t(entry.detail)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Direction — Selected Work */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-white/10 bg-untold-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'CREATIVE DIRECTION // SELECTED WORK', es: 'DIRECCIÓN CREATIVA // TRABAJO SELECTO' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.85] mb-6 text-white max-w-4xl">
            {t({ en: 'Before We Built Systems,\nWe Told Stories.', es: 'Antes de Construir Sistemas,\nContamos Historias.' })}
          </h2>
          <p className="text-lg sm:text-xl font-serif italic text-white/50 max-w-3xl mb-16 leading-relaxed">
            {t({ en: 'Video production, creative direction, and brand campaigns for Robert Glasper, Blue Note Jazz Festival, Carnegie Hall, and more.', es: 'Producción de video, dirección creativa y campañas de marca para Robert Glasper, Blue Note Jazz Festival, Carnegie Hall y más.' })}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeWork.map((video) => (
              <VideoThumbnail
                key={video.id}
                videoId={video.id}
                title={t(video.title)}
                client={video.client}
                role={t(video.role)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Credentials */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-beige text-untold-black border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-untold-black/40">
              {t(founder.credentialsEyebrow)}
            </p>
          </div>

          <div className="max-w-4xl space-y-8">
            {/* MIT Sloan */}
            <div className="flex flex-col sm:flex-row items-start gap-5 border border-untold-border p-6 sm:p-8 bg-white/50">
              <img
                src="/images/mit-badge.svg"
                alt="MIT Management Executive Education Badge"
                className="w-16 h-16 shrink-0"
              />
              <div className="flex-1">
                <p className="font-sans font-black text-sm sm:text-base uppercase tracking-tight">
                  {t(founder.credentials.mit.institution)}
                </p>
                <p className="font-serif text-untold-black/60 text-sm sm:text-base mt-1 italic">
                  {t(founder.credentials.mit.program)}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-gray">
                    {t(founder.credentials.mit.date)}
                  </span>
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange hover:text-untold-black transition-colors font-bold cursor-pointer"
                  >
                    {t(founder.viewCertificate)}
                  </button>
                </div>
              </div>
            </div>

            {/* ASU */}
            <div className="flex items-start gap-5 border border-untold-border p-6 sm:p-8 bg-white/50">
              <div className="w-16 h-16 shrink-0 bg-untold-black/5 flex items-center justify-center">
                <span className="font-sans font-black text-lg text-untold-black/20">ASU</span>
              </div>
              <div>
                <p className="font-sans font-black text-sm sm:text-base uppercase tracking-tight">
                  {t(founder.credentials.asu.institution)}
                </p>
                <p className="font-serif text-untold-black/60 text-sm sm:text-base mt-1 italic">
                  {t(founder.credentials.asu.program)}
                </p>
              </div>
            </div>
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
            <div>
              <p className="text-lg sm:text-xl font-serif text-untold-black/70 leading-relaxed">
                {t(content.whyMexico.mexicoContent)}
              </p>
            </div>
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
              { q: { en: 'Who runs Untold.works?', es: '¿Quién dirige Untold.works?' }, a: { en: 'Untold.works is led by Joshua Semolik, an AI systems architect and creative technologist with 20 years of experience spanning NBA Entertainment, global product launches at Videndum PLC, cross-border GTM strategy, and production AI systems. MIT Sloan AI Strategy. Based in San Miguel de Allende, Mexico.', es: 'Untold.works está dirigido por Joshua Semolik, un arquitecto de sistemas de IA y tecnólogo creativo con 20 años de experiencia que abarca NBA Entertainment, lanzamientos de producto globales en Videndum PLC, estrategia GTM transfronteriza y sistemas de IA en producción. MIT Sloan AI Strategy. Basado en San Miguel de Allende, México.' } },
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

      {/* Certificate Lightbox */}
      {showCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-5 cursor-pointer"
          onClick={() => setShowCertificate(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowCertificate(false)}
              className="absolute -top-10 right-0 font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              {t(founder.closeCertificate)}
            </button>
            <img
              src="/images/mit-sloan-certificate.png"
              alt="MIT Sloan School of Management — Artificial Intelligence: Implications for Business Strategy — Joshua Semolik"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
