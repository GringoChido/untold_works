import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import QuickLeadForm from '../components/QuickLeadForm';

const WorkshopsPage: React.FC = () => {
  const { t } = useLanguage();
  const syllabus = i18n.workshopSyllabus;

  const eventSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'EducationEvent',
    name: 'AI for Everyday Life — Practical AI Workshop',
    description: 'A practical masterclass for daily life and small business. Learn ChatGPT, prompting techniques, and AI workflows in a single morning session.',
    organizer: {
      '@type': 'Organization',
      name: 'Untold.works',
      url: 'https://untold.works',
    },
    location: {
      '@type': 'Place',
      name: 'San Miguel de Allende',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'San Miguel de Allende',
        addressRegion: 'Guanajuato',
        addressCountry: 'MX',
      },
    },
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    inLanguage: ['en', 'es'],
    offers: {
      '@type': 'Offer',
      url: 'https://untold.works/workshops',
      availability: 'https://schema.org/LimitedAvailability',
    },
  }), []);

  usePageMeta(
    i18n.seo.workshops.title,
    i18n.seo.workshops.description,
    { path: '/workshops', schema: eventSchema }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Outcome-First Hero Section */}
      <section className="px-5 sm:px-10 pt-20 sm:pt-32 pb-24 lg:pt-56 lg:pb-40 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t(syllabus.eyebrow)}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-8">
              <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,120px)] leading-[0.85] mb-12 tracking-tighter uppercase text-white">
                {t(syllabus.headline)}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-4xl font-serif italic text-white/60 leading-[1.2] max-w-4xl border-l-4 border-untold-orange pl-6 sm:pl-10 mb-16">
                {t(syllabus.transformation)}
              </p>
              
              <div className="flex flex-wrap gap-x-12 gap-y-6 pt-12 border-t border-white/5 font-mono text-[11px] font-bold uppercase tracking-[0.4em] text-white/40">
                <span className="text-white">{t(syllabus.location)}</span>
                <span className="text-untold-orange">{t(syllabus.time)}</span>
                <span className="text-white">{t(syllabus.lead)}</span>
              </div>
            </div>

            <div className="lg:col-span-4 lg:pt-8">
              <div className="bg-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-14 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-white/20 uppercase tracking-[0.4em] font-bold">READY_TO_USE</div>
                <h2 className="font-sans font-black text-3xl uppercase tracking-tighter text-untold-orange">
                  {t(syllabus.cardTitle)}
                </h2>
                <p className="text-xl italic text-white/70 leading-relaxed">
                  {t(syllabus.rule)}
                </p>
                <Link 
                  to="/contact"
                  className="block w-full bg-untold-orange text-white py-6 text-center font-sans font-black uppercase tracking-tighter text-lg hover:bg-white hover:text-untold-black transition-all"
                >
                  {t(syllabus.cta)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Pathway Grid */}
      <section className="px-5 sm:px-10 py-16 sm:py-24 lg:py-40 bg-white/[0.01] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-24">
             <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
             <p className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 uppercase">LEARNING_LOG // EVERYDAY_PHASES</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {syllabus.phases.map((phase) => (
              <div key={phase.id} className="bg-untold-black p-6 sm:p-12 lg:p-16 flex flex-col group hover:bg-white/[0.03] transition-colors md:min-h-[450px]">
                <div className="flex justify-between items-start mb-12">
                  <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange font-bold">PHASE_{phase.id}</span>
                  <div className="w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-untold-orange transition-all"></div>
                </div>
                
                <h3 className="font-sans font-black text-4xl lg:text-5xl uppercase tracking-tighter text-white leading-none mb-10">
                  {t(phase.title)}
                </h3>
                
                <p className="text-xl lg:text-2xl font-serif italic text-white/50 leading-relaxed max-w-lg">
                  {t(phase.focus)}
                </p>

                <div className="mt-auto pt-10 border-t border-white/5 flex items-center space-x-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-untold-orange"></div>
                   <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">NO_JARGON // 100%_PRACTICAL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="px-5 sm:px-10 py-16 sm:py-24 lg:py-40 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="flex items-center space-x-4">
               <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
               <p className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/30 uppercase">{t(syllabus.kit.title)}</p>
            </div>
            <h3 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter text-white leading-[0.85]">
              {t({ en: 'Tools For\nReal Life\nImpact.', es: 'Herramientas\nPara Impacto\nReal.' })}
            </h3>
          </div>
          <div className="lg:col-span-6">
            <div className="bg-white/[0.02] border border-white/10 p-6 sm:p-12 lg:p-20 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-white/10 uppercase tracking-[0.4em] font-bold">STATUS // VERIFIED_ASSETS</div>
               <ul className="space-y-8">
                  {syllabus.kit.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-8 border-b border-white/5 pb-6 last:border-0 group/item">
                       <span className="font-mono text-untold-orange font-bold text-xl group-hover/item:translate-x-2 transition-transform">{String(idx + 1).padStart(2, '0')}</span>
                       <span className="font-sans font-black text-xl sm:text-3xl lg:text-4xl uppercase tracking-tighter text-white group-hover/item:text-untold-orange transition-colors">
                         {t(item)}
                       </span>
                    </li>
                  ))}
               </ul>
               <div className="mt-16 font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 italic">
                 {t({ en: '> Practical kit ready for immediate life integration.', es: '> Kit práctico listo para integración inmediata en tu vida.' })}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/30">
              {t({ en: 'FREQUENTLY ASKED QUESTIONS', es: 'PREGUNTAS FRECUENTES' })}
            </p>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'Is This Workshop\nRight for Me?', es: '¿Este Taller\nEs Para Mí?' })}
          </h3>

          <div className="space-y-0 border-t border-white/10">
            {[
              { q: { en: 'Do I need technical experience?', es: '¿Necesito experiencia técnica?' }, a: { en: 'No. This workshop is designed for people with zero AI experience. If you can use email and a smartphone, you can do everything we cover. No coding, no jargon.', es: 'No. Este taller está diseñado para personas sin experiencia en IA. Si puedes usar email y un smartphone, puedes hacer todo lo que cubrimos. Sin código, sin jerga.' } },
              { q: { en: 'How long is the workshop?', es: '¿Cuánto dura el taller?' }, a: { en: 'One morning session — approximately 3 hours. You leave with a complete toolkit and workflows you can use immediately.', es: 'Una sesión matutina — aproximadamente 3 horas. Sales con un kit completo de herramientas y flujos que puedes usar inmediatamente.' } },
              { q: { en: 'What will I be able to do after the workshop?', es: '¿Qué podré hacer después del taller?' }, a: { en: 'Draft emails in seconds, plan meals and schedules, practice languages, organize your business communications, and set up simple automations — all using AI tools you can access for free.', es: 'Redactar emails en segundos, planear comidas y horarios, practicar idiomas, organizar la comunicación de tu negocio y configurar automatizaciones simples — todo con herramientas de IA gratuitas.' } },
              { q: { en: 'How many people per session?', es: '¿Cuántas personas por sesión?' }, a: { en: 'We keep classes small (8-12 people) to ensure everyone gets personalized guidance and leaves with a working workflow.', es: 'Mantenemos clases pequeñas (8-12 personas) para asegurar que todos reciban guía personalizada y salgan con un flujo de trabajo funcional.' } },
              { q: { en: 'Is this for personal use or business?', es: '¿Es para uso personal o de negocio?' }, a: { en: 'Both. The first half covers everyday life applications (meal planning, language practice, email). The second half focuses on small business wins (customer communication, content creation, simple automation).', es: 'Ambos. La primera mitad cubre aplicaciones para la vida diaria (planes de comida, práctica de idiomas, email). La segunda mitad se enfoca en victorias para negocios (comunicación con clientes, creación de contenido, automatización simple).' } },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-white/10 group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h4>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-lg font-serif text-white/60 leading-relaxed pr-0 sm:pr-12">
                  {t(faq.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Lead Form */}
      <section className="bg-untold-black text-white px-5 sm:px-10 py-16 sm:py-24 border-b border-white/10">
        <div className="max-w-2xl mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-4">
            {t({ en: 'REGISTER INTEREST', es: 'REGISTRA TU INTERÉS' })}
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-4">
            {t({ en: 'Join the Next Workshop', es: 'Únete al Próximo Taller' })}
          </h2>
          <p className="font-serif italic text-white/50 text-lg mb-10">
            {t({
              en: 'Fill out the form and we\'ll notify you when the next AI workshop session is scheduled.',
              es: 'Completa el formulario y te notificaremos cuando se programe la próxima sesión del taller de IA.'
            })}
          </p>
          <QuickLeadForm pillar="Workshops" />
        </div>
      </section>

      {/* Final Call */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 lg:py-72 text-center bg-white/[0.02]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(4.5rem,14vw,180px)] leading-[0.8] mb-16 tracking-tighter uppercase text-white">
            {t({ en: 'Save\nYour\nTime.', es: 'Ahorra\nTu\nTiempo.' })}
          </h2>
          <p className="text-2xl lg:text-[2.5rem] text-white/50 mb-24 max-w-3xl mx-auto font-serif italic leading-tight tracking-tight">
            {t(syllabus.rule)}
          </p>
          <Link 
            to="/contact"
            className="bg-untold-orange text-white px-10 sm:px-24 py-6 sm:py-10 font-sans font-black uppercase tracking-tighter text-lg sm:text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)]"
          >
            {t(syllabus.cta)}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;