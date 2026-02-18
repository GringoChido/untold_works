import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import { projects } from '../data/projects';
import StereoTeaser from '../components/StereoTeaser';
import { Pillar } from '../types';

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
    i18n.seo.portfolio.description
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
              en: 'Systems We\u2019ve\nBuilt.',
              es: 'Sistemas Que\nHemos Construido.'
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
              className={`px-5 py-2 font-mono text-[11px] uppercase tracking-[0.3em] font-bold transition-all border ${
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

      {/* Grid */}
      <section className="px-5 sm:px-10 py-10">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {filtered.map((project, idx) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative bg-untold-black flex flex-col hover:bg-white/5 transition-all duration-700"
            >
              {/* Cover Image */}
              <div className="aspect-[16/10] overflow-hidden border-b border-white/10">
                <img
                  src={project.heroImage || project.images[0]}
                  alt={t(project.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-10 lg:p-14 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/30">PROJECT_00{idx + 1}</span>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-untold-orange group-hover:border-untold-orange transition-all duration-500">
                    <span className="text-lg group-hover:scale-125 transition-transform duration-500">&rarr;</span>
                  </div>
                </div>

                <h2 className="font-sans font-black text-3xl lg:text-5xl leading-[0.95] uppercase tracking-tighter mb-6 transition-colors group-hover:text-untold-orange">
                  {t(project.name)}
                </h2>

                <p className="text-lg lg:text-xl font-serif text-untold-beige/60 leading-relaxed mb-8">
                  {t(project.summary)}
                </p>

                {project.metrics && (
                  <div className="flex gap-8 mb-8 pt-6 border-t border-white/5">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx}>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2">{t(metric.label)}</span>
                        <span className="text-2xl lg:text-3xl font-sans font-black tracking-tighter text-untold-orange">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.pillar && (
                    <span className="border border-untold-orange/30 bg-untold-orange/10 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-untold-orange">
                      {project.pillar.replace(/-/g, ' ')}
                    </span>
                  )}
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-white/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white group-hover:border-white/50 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
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
