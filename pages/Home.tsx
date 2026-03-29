import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/projects';
import * as i18n from '../i18n';

import ProofStrip from '../components/ProofStrip';



const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How Untold.works Builds Operational Alignment Systems',
  description: 'We analyze information flow, design coordination systems, build the infrastructure, and transfer full ownership to the client.',
  totalTime: 'P8W',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Map', text: 'We map how information currently moves between your company, partners, distributors, locations, and teams. We identify where alignment breaks down.' },
    { '@type': 'HowToStep', position: 2, name: 'Design', text: 'We design the four coordination systems — product information, communication, lead routing, and sales visibility — around the tools your teams already use.' },
    { '@type': 'HowToStep', position: 3, name: 'Build', text: 'We build the systems, connect the integrations, and automate the coordination workflows. All tested, all documented.' },
    { '@type': 'HowToStep', position: 4, name: 'Transfer', text: 'We train your teams on every system. Video walkthroughs, documentation, and live sessions. Then we hand over the keys. Full ownership.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Untold.works build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build operational alignment systems for distributed businesses — manufacturers, franchise groups, multi-location brands, and organizations that coordinate across partners, distributors, and teams. Our systems organize product information, communication, lead routing, and sales visibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an operational alignment system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An operational alignment system organizes how information moves across a distributed business. Instead of adding more software tools, we build coordination infrastructure — a product information system, structured communication, automated lead routing, and sales visibility — so companies and their partners work from the same information.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses does Untold serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve distributed businesses where many people or organizations must operate together: manufacturers and distributors, brands and retail partners, restaurant groups and locations, artist management, and multi-location organizations across Mexico and the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Untold.works located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in San Miguel de Allende, Guanajuato, Mexico, serving clients across Mexico and the United States.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the systems you build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Full ownership transfer is part of every project. You get the systems, the data, the documentation, and video training. No lock-in, no recurring fees for access to your own infrastructure.',
      },
    },
  ],
};

const Home: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    i18n.seo.home.title,
    i18n.seo.home.description,
    { path: '/', schema: [faqSchema, howToSchema] }
  );

  return (
    <div className="bg-untold-beige font-serif text-untold-black">

      {/* Dark wrapper — hero + proof strip */}
      <div className="bg-untold-black">

      {/* ═══════════════════════════════════════════════════════════
          1. HERO — Headline + Supporting Line
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-untold-black overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/video/hero-home-poster.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/video/hero-home-1080p.webm" type="video/webm" />
          <source src="/video/hero-home-1080p.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Content */}
        <div className="relative w-full px-5 sm:px-10 pt-24 sm:pt-40 lg:pt-52 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="max-w-[900px]">
            <div className="flex items-center space-x-4 mb-8 sm:mb-14">
              <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
              <p className="font-mono text-[11px] lg:text-[13px] uppercase tracking-[0.6em] font-bold text-white/50">
                {t(i18n.hero.eyebrow)}
              </p>
            </div>

            <h1 className="font-sans font-black text-[clamp(2.8rem,9vw,120px)] leading-[0.82] mb-12 tracking-tighter uppercase text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
              {t(i18n.hero.headline)}
            </h1>

            <div className="mb-16 max-w-5xl border-l-4 border-untold-orange pl-6 sm:pl-10 space-y-4">
              <p className="text-xl sm:text-2xl lg:text-[32px] font-serif italic text-white leading-[1.15] tracking-tight drop-shadow-[0_1px_10px_rgba(0,0,0,0.4)]">
                {t(i18n.hero.tagline)}
              </p>
              <p className="font-mono text-[11px] sm:text-[13px] uppercase tracking-[0.3em] text-white/50 font-bold">
                {t(i18n.hero.subheadline)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link
                to="/network-systems"
                className="inline-flex items-center space-x-6 sm:space-x-10 group border border-white/20 bg-black/30 backdrop-blur-sm px-8 sm:px-16 py-6 sm:py-10 hover:border-untold-orange hover:bg-untold-orange/10 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.15)]"
              >
                <span className="font-sans font-black text-lg sm:text-2xl uppercase tracking-tighter text-white">
                  {t(i18n.hero.primaryCta)}
                </span>
                <span className="text-3xl sm:text-5xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
              </Link>
              <Link
                to="/contact"
                className="font-mono text-[12px] uppercase tracking-[0.3em] text-white/50 hover:text-untold-orange transition-colors py-6 sm:py-10"
              >
                {t(i18n.hero.secondaryCta)} →
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Proof Strip */}
      <ProofStrip />

      </div>{/* end dark wrapper */}

      {/* ═══════════════════════════════════════════════════════════
          2. ALIGNMENT INSIGHT — The core insight
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32 lg:py-40 text-center">
          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.85] mb-6">
            {t(i18n.alignmentInsight.headline)}
          </h2>
          <p className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tighter leading-[0.85] text-untold-orange mb-10">
            {t(i18n.alignmentInsight.punchline)}
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-untold-gray leading-relaxed max-w-2xl mx-auto">
            {t(i18n.alignmentInsight.body)}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. THE ALIGNMENT BREAKDOWN — Problems list
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-beige/40 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t({ en: 'THE PROBLEM', es: 'EL PROBLEMA' })}
            </span>
          </div>

          <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-6 leading-[0.85] max-w-5xl">
            {t(i18n.alignmentBreakdown.headline)}
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-untold-gray leading-relaxed max-w-4xl mb-16">
            {t(i18n.alignmentBreakdown.subheadline)}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-untold-border border border-untold-border mb-16">
            {i18n.alignmentBreakdown.problems.map((problem, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 flex items-start space-x-4">
                <span className="font-mono text-[10px] text-untold-orange font-bold mt-1 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="font-serif text-base text-untold-gray leading-relaxed">
                  {t(problem)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-untold-orange pl-6 sm:pl-10 max-w-4xl">
            <p className="text-xl sm:text-2xl font-serif italic text-untold-black leading-[1.15] tracking-tight">
              {t(i18n.alignmentBreakdown.transition)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3b. INFORMATION FLOW — How communication becomes structure
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t(i18n.informationFlow.eyebrow)}
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-12 leading-[0.85] max-w-5xl">
            {t(i18n.informationFlow.headline)}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6 max-w-xl">
              {i18n.informationFlow.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="font-serif text-lg sm:text-xl text-untold-gray leading-relaxed">
                  {t(paragraph)}
                </p>
              ))}
            </div>

            <div className="relative flex flex-col justify-center space-y-8">
              <img
                src="/images/whatsapp-logo-520.png"
                alt=""
                aria-hidden="true"
                width={520}
                height={520}
                loading="lazy"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[440px] lg:w-[520px] opacity-[0.12] pointer-events-none select-none"
              />
              <div className="relative border-l-4 border-untold-orange pl-6 sm:pl-10">
                <p className="font-serif italic text-xl sm:text-2xl text-untold-black leading-[1.15] tracking-tight">
                  {t(i18n.informationFlow.principle)}
                </p>
              </div>
              <Link
                to="/mexico"
                className="relative inline-flex items-center space-x-4 group self-start"
              >
                <span className="font-sans font-black text-base sm:text-lg uppercase tracking-tighter text-untold-orange group-hover:text-untold-black transition-colors">
                  {t({ en: 'See How This Works in Mexico', es: 'Cómo Funciona Esto en México' })}
                </span>
                <span className="text-xl text-untold-orange group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          4. DISTRIBUTED BUSINESSES — Who this is for
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-black/30 font-bold mb-12">
            {t(i18n.distributedBusinesses.eyebrow)}
          </p>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-12 leading-[0.85] max-w-5xl">
            {t(i18n.distributedBusinesses.headline)}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-untold-border border border-untold-border mb-12">
            {i18n.distributedBusinesses.examples.map((example, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold block mb-3">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="font-sans font-black text-base uppercase tracking-tighter">
                  {t(example)}
                </p>
              </div>
            ))}
          </div>

          <p className="font-serif italic text-xl sm:text-2xl text-untold-gray leading-relaxed max-w-3xl">
            {t(i18n.distributedBusinesses.body)}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. THE FOUR SYSTEMS — Untold System Model
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-black text-white border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32 lg:py-40">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t(i18n.fourSystems.eyebrow)}
            </span>
          </div>

          <h2 className="font-sans font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tighter mb-16 leading-[0.85] max-w-5xl">
            {t(i18n.fourSystems.headline)}
          </h2>

          <div className="grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {i18n.fourSystems.systems.map((system) => (
              <div key={system.number} className="bg-untold-black p-8 sm:p-10 lg:p-12">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4 block">
                  {system.number}
                </span>
                <h3 className="font-sans font-black text-2xl sm:text-3xl uppercase tracking-tighter mb-4 leading-[0.9]">
                  {t(system.title)}
                </h3>
                <p className="font-serif text-white/60 text-base leading-relaxed">
                  {t(system.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. HOW WE DEPLOY — The Process
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32">
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold">
              {t(i18n.processSection.eyebrow)}
            </span>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.85] max-w-4xl">
            {t(i18n.processSection.headline)}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-untold-border border border-untold-border mb-16">
            {i18n.processSection.steps.map((step) => (
              <div key={step.number} className="bg-white p-6 sm:p-8 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-orange font-bold mb-4 block">
                  {step.number}
                </span>
                <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter mb-3">
                  {t(step.title)}
                </h3>
                <p className="font-serif text-base text-untold-gray leading-relaxed mb-6 flex-grow">
                  {t(step.description)}
                </p>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                  {t(step.deliverable)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-untold-orange pl-6 sm:pl-10 max-w-3xl">
            <p className="font-serif italic text-xl sm:text-2xl text-untold-black leading-[1.15] tracking-tight">
              {t(i18n.processSection.closing)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. AI READINESS — Automation + AI positioning
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-untold-beige/40 border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-black/30 font-bold mb-12">
            {t(i18n.aiPositioning.eyebrow)}
          </p>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl">
            {t(i18n.aiPositioning.headline)}
          </h2>

          <div className="space-y-6 max-w-3xl mb-12">
            {i18n.aiPositioning.body.map((paragraph, idx) => (
              <p key={idx} className="font-serif text-lg sm:text-xl text-untold-gray leading-relaxed">
                {t(paragraph)}
              </p>
            ))}
          </div>

          <div className="border-l-4 border-untold-orange pl-6 sm:pl-10 max-w-3xl">
            <p className="font-serif italic text-xl sm:text-2xl text-untold-black leading-[1.15] tracking-tight">
              {t(i18n.aiPositioning.principle)}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. OWNERSHIP PHILOSOPHY
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-untold-border">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-20 sm:py-32">
          <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-untold-black/30 font-bold mb-12">
            {t(i18n.ownershipPhilosophy.eyebrow)}
          </p>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl">
            {t(i18n.ownershipPhilosophy.headline)}
          </h2>

          <div className="space-y-6 max-w-3xl">
            {i18n.ownershipPhilosophy.body.map((paragraph, idx) => (
              <p key={idx} className="font-serif text-lg sm:text-xl text-untold-gray leading-relaxed">
                {t(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          9. SELECTED WORK — Portfolio proof
      ═══════════════════════════════════════════════════════════ */}
      <section id="selected-work" className="px-5 sm:px-10 py-20 sm:py-32 bg-untold-black text-white border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between mb-16 gap-4 flex-wrap">
            <div className="flex items-center space-x-4">
              <span className="w-2.5 h-2.5 rounded-full bg-untold-orange shrink-0"></span>
              <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/40">
                {t({ en: 'SELECTED WORK', es: 'TRABAJO SELECCIONADO' })}
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden sm:inline-flex items-center space-x-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-untold-orange transition-colors font-bold"
            >
              <span>{t({ en: 'View All', es: 'Ver Todo' })}</span>
              <span className="text-untold-orange">→</span>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {['noxguard-brand-rebrand', 'billiard-factory-retail-architecture', 'derrick-hodge', 'casa-schuck']
              .map(id => projects.find(p => p.id === id)!)
              .map((project, idx) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group relative bg-untold-black overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.heroImage || project.images[0]}
                    alt={t(project.name)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3 block">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter leading-[0.9] mb-3 group-hover:text-untold-orange transition-colors">
                    {t(project.name)}
                  </h3>
                  {project.metrics && (
                    <div className="flex gap-6">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => (
                        <div key={mIdx} className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-sans font-black text-untold-orange">{metric.value}</span>
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">{t(metric.label)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-4 font-sans font-black text-lg uppercase tracking-tighter text-untold-orange"
            >
              <span>{t({ en: 'View All Projects', es: 'Ver Todos los Proyectos' })}</span>
              <span className="text-2xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 bg-white border-b border-untold-border">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-untold-black/40">
              {t({ en: 'FREQUENTLY ASKED QUESTIONS', es: 'PREGUNTAS FRECUENTES' })}
            </p>
          </div>

          <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'What Do People\nAsk Us?', es: '¿Qué Nos\nPreguntan?' })}
          </h2>

          <div className="space-y-0 border-t border-untold-border">
            {[
              {
                q: { en: 'What does Untold.works build?', es: '¿Qué construye Untold.works?' },
                a: { en: 'We build operational alignment systems for distributed businesses — manufacturers, franchise groups, multi-location brands, and organizations that coordinate across partners, distributors, and teams. Our systems organize product information, communication, lead routing, and sales visibility.', es: 'Construimos sistemas de alineación operativa para negocios distribuidos — fabricantes, grupos de franquicia, marcas multi-ubicación y organizaciones que coordinan entre socios, distribuidores y equipos. Nuestros sistemas organizan información de producto, comunicación, enrutamiento de leads y visibilidad de ventas.' },
              },
              {
                q: { en: 'What is an operational alignment system?', es: '¿Qué es un sistema de alineación operativa?' },
                a: { en: 'It organizes how information moves across a distributed business. Instead of adding more software tools, we build coordination infrastructure — a single source of truth for product data, structured communication, automated lead routing, and clear sales visibility — so companies and their partners work from the same information.', es: 'Organiza cómo fluye la información en un negocio distribuido. En lugar de agregar más herramientas de software, construimos infraestructura de coordinación — una fuente única de verdad para datos de producto, comunicación estructurada, enrutamiento automático de leads y visibilidad de ventas — para que empresas y socios trabajen con la misma información.' },
              },
              {
                q: { en: 'What types of businesses does Untold serve?', es: '¿Qué tipos de negocios atiende Untold?' },
                a: { en: 'We serve distributed businesses where many people or organizations must operate together: manufacturers and distributors, brands and retail partners, restaurant groups, artist management, and multi-location organizations across Mexico and the United States.', es: 'Atendemos negocios distribuidos donde muchas personas u organizaciones deben operar juntas: fabricantes y distribuidores, marcas y socios de retail, grupos restauranteros, managements de artistas y organizaciones multi-ubicación en México y Estados Unidos.' },
              },
              {
                q: { en: 'Where is Untold.works located?', es: '¿Dónde se ubica Untold.works?' },
                a: { en: 'We are based in San Miguel de Allende, Guanajuato, Mexico, serving clients across Mexico and the United States.', es: 'Estamos ubicados en San Miguel de Allende, Guanajuato, México, atendiendo clientes en México y Estados Unidos.' },
              },
              {
                q: { en: 'Do I own the systems you build?', es: '¿Soy dueño de los sistemas que construyen?' },
                a: { en: 'Yes. Full ownership transfer is part of every project. You get the systems, the data, the documentation, and video training. No lock-in, no recurring fees for access to your own infrastructure.', es: 'Sí. La transferencia completa de propiedad es parte de cada proyecto. Recibes los sistemas, los datos, la documentación y capacitación en video. Sin ataduras, sin cuotas recurrentes por acceder a tu propia infraestructura.' },
              },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-untold-border group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h3 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h3>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-lg font-serif text-untold-gray leading-relaxed pr-0 sm:pr-12">
                  {t(faq.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          10. FINAL CTA — Invitation to conversation
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 lg:py-72 text-center bg-untold-beige/40">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2 className="font-sans font-black text-[clamp(3rem,14vw,180px)] leading-[0.8] mb-10 sm:mb-16 tracking-tighter uppercase text-center whitespace-pre-line">
            {t(i18n.finalCta.headline)}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/contact"
              className="group relative bg-untold-black text-white px-10 sm:px-24 py-6 sm:py-10 text-lg sm:text-2xl font-sans font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all duration-700 shadow-[0_40px_100px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <span className="relative z-10">{t(i18n.finalCta.cta)} →</span>
              <div className="absolute inset-0 bg-untold-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
            </Link>
            <Link
              to="/portfolio"
              className="font-mono text-[12px] uppercase tracking-[0.3em] text-untold-black/40 hover:text-untold-orange transition-colors py-6 sm:py-10"
            >
              {t({ en: 'See our work', es: 'Ver nuestro trabajo' })} →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
