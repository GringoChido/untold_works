import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import { projects } from '../data/projects';
import { inProgressProjects, verticalLabels, verticalOrder } from '../data/in-progress-projects';
import StereoTeaser from '../components/StereoTeaser';
import { Pillar, ProjectVertical } from '../types';

const pillarFilters: { key: Pillar | 'all'; label: { en: string; es: string } }[] = [
  { key: 'all', label: { en: 'All Projects', es: 'Todos los Proyectos' } },
  { key: 'professional-services', label: { en: 'Professional Services', es: 'Servicios Profesionales' } },
  { key: 'small-business', label: { en: 'Small Business', es: 'Pequeña Empresa' } },
  { key: 'enterprise', label: { en: 'Enterprise', es: 'Empresarial' } },
];

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activePillar, setActivePillar] = useState<Pillar | 'all'>('all');

  usePageMeta(
    i18n.seo.portfolio.title,
    i18n.seo.portfolio.description,
    { path: '/portfolio' }
  );

  const filtered = activePillar === 'all'
    ? projects
    : projects.filter((p) => p.pillar === activePillar);

  return (
    <div className="bg-untold-black text-white min-h-screen font-serif">
      {/* Header */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 lg:py-48 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-10">
            <span className="w-3 h-3 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'SELECTED PROJECTS', es: 'PROYECTOS SELECCIONADOS' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(3rem,8vw,120px)] leading-[0.8] mb-16 tracking-tighter uppercase">
            {t({
              en: 'What Has\nUntold.works Built?',
              es: '¿Qué Ha Construido\nUntold.works?'
            })}
          </h1>
          <p className="text-2xl lg:text-4xl font-serif italic text-white/60 max-w-5xl leading-tight">
            {t({
              en: 'AI-powered business ecosystems built for real businesses across Mexico and the United States.',
              es: 'Ecosistemas empresariales con IA construidos para negocios reales en M\u00e9xico y Estados Unidos.'
            })}
          </p>
        </div>
      </section>

      {/* Pillar Filters */}
      <section className="px-5 sm:px-10 py-6 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-wrap gap-3">
          {pillarFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActivePillar(filter.key)}
              className={`px-5 py-3 min-h-[44px] font-mono text-[11px] uppercase tracking-[0.3em] font-bold transition-all border ${
                activePillar === filter.key
                  ? 'bg-untold-orange text-white border-untold-orange'
                  : 'border-white/10 text-white/40 hover:text-white hover:border-white/30'
              }`}
            >
              {t(filter.label)}
            </button>
          ))}
        </div>
      </section>

      {/* Completed Projects Grid — compact cards */}
      <section className="px-5 sm:px-10 py-10">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {filtered.map((project, idx) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative bg-untold-black flex flex-col hover:bg-white/5 transition-all duration-700"
            >
              {/* Cover Image */}
              <div className="aspect-[16/9] overflow-hidden border-b border-white/10">
                <img
                  src={project.heroImage || project.images[0]}
                  alt={t(project.name)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">PROJECT_00{idx + 1}</span>
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:bg-untold-orange group-hover:border-untold-orange transition-all duration-500">
                    <span className="text-sm group-hover:scale-125 transition-transform duration-500">&rarr;</span>
                  </div>
                </div>

                <h2 className="font-sans font-black text-xl sm:text-2xl lg:text-3xl leading-[0.95] uppercase tracking-tighter mb-3 transition-colors group-hover:text-untold-orange">
                  {t(project.name)}
                </h2>

                <p className="text-sm lg:text-base font-serif text-untold-beige/60 leading-relaxed mb-5 line-clamp-3">
                  {t(project.summary)}
                </p>

                {project.metrics && (
                  <div className="flex gap-6 mb-5 pt-4 border-t border-white/5">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-1">{t(metric.label)}</span>
                        <span className="text-xl font-sans font-black tracking-tighter text-untold-orange">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.pillar && (
                    <span className="border border-untold-orange/30 bg-untold-orange/10 px-3 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-untold-orange">
                      {project.pillar.replace(/-/g, ' ')}
                    </span>
                  )}
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white group-hover:border-white/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* Currently Building Section */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-t border-untold-orange/20">
        <div className="max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-untold-orange">
              {t({ en: 'CURRENTLY BUILDING', es: 'EN CONSTRUCCIÓN' })}
            </p>
          </div>
          <h2 className="font-sans font-black text-[clamp(2rem,5vw,80px)] leading-[0.85] mb-6 tracking-tighter uppercase">
            {t({ en: "What's on\nthe Bench", es: 'Lo Que Estamos\nConstruyendo' })}
          </h2>
          <p className="text-xl lg:text-2xl font-serif italic text-white/50 max-w-4xl mb-20">
            {t({
              en: 'Active client builds across industries — from game room showrooms to Grammy-winning artist platforms.',
              es: 'Proyectos activos para clientes en múltiples industrias — desde salas de juegos hasta plataformas para artistas ganadores del Grammy.'
            })}
          </p>

          {/* Vertical Groups */}
          {verticalOrder.map((vertical) => {
            const groupProjects = inProgressProjects.filter((p) => p.vertical === vertical);
            if (groupProjects.length === 0) return null;
            return (
              <div key={vertical} className="mb-16 last:mb-0">
                {/* Vertical Label */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-untold-orange/50"></div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold">
                    {t(verticalLabels[vertical])}
                  </span>
                  <div className="flex-1 h-px bg-white/5"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {groupProjects.map((project) => {
                    const isExternal = project.websiteUrl.length > 0;
                    const CardWrapper = isExternal ? 'a' : 'div';
                    const cardProps = isExternal
                      ? { href: project.websiteUrl, target: '_blank', rel: 'noopener noreferrer' }
                      : {};

                    return (
                      <CardWrapper
                        key={project.id}
                        {...cardProps}
                        className={`group relative bg-untold-black border-l-2 border-l-untold-orange/30 flex flex-col ${
                          isExternal ? 'hover:bg-white/5 cursor-pointer' : 'cursor-default'
                        } transition-all duration-500`}
                      >
                        {/* Preview Image */}
                        {project.previewImage && (
                          <div className="aspect-[16/9] overflow-hidden border-b border-white/10 relative">
                            <img
                              src={project.previewImage}
                              alt={t(project.name)}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                              <span className="w-2 h-2 rounded-full bg-untold-orange animate-pulse"></span>
                              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-untold-orange font-bold">
                                {t({ en: 'Active Build', es: 'En Construcción' })}
                              </span>
                            </div>
                            {isExternal && (
                              <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-untold-orange group-hover:border-untold-orange transition-all duration-500">
                                <span className="text-sm group-hover:scale-125 transition-transform duration-500">&#x2197;</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Card Content */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                          <h3 className="font-sans font-black text-lg sm:text-xl leading-[0.95] uppercase tracking-tighter mb-3 group-hover:text-untold-orange transition-colors">
                            {t(project.name)}
                          </h3>

                          <p className="text-sm font-serif text-untold-beige/50 leading-relaxed mb-5 flex-1 line-clamp-3">
                            {t(project.description)}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 group-hover:border-white/30 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {isExternal && (
                            <div className="mt-4 pt-4 border-t border-white/5">
                              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-untold-orange transition-colors">
                                {t({ en: 'Visit Live Preview', es: 'Ver Vista Previa' })} &rarr;
                              </span>
                            </div>
                          )}
                        </div>
                      </CardWrapper>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stereo Teaser */}
      <StereoTeaser />

      {/* Footer CTA */}
      <section className="px-5 sm:px-10 py-24 sm:py-48 text-center border-t border-white/5">
        <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-8xl mb-12 uppercase tracking-tighter leading-none">
          {t({ en: 'Ready to build\nyour system?', es: '\u00bfListo para construir\ntu sistema?' })}
        </h2>
        <Link to="/contact" className="inline-block bg-untold-orange text-white px-10 sm:px-24 py-6 sm:py-10 font-sans font-black uppercase tracking-tighter text-lg sm:text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)]">
          {t({ en: 'START A CONVERSATION', es: 'INICIAR CONVERSACI\u00d3N' })}
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
