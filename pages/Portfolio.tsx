import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { projects } from '../data/projects';
import CuratedEngine from '../components/CuratedEngine';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-untold-black text-white min-h-screen font-serif overflow-x-hidden max-w-full">
      {/* Header */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-24 sm:py-32 lg:py-48 border-b border-white/5">
        <div className="max-w-full lg:max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-10">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-untold-orange"></span>
            <p className="font-mono text-[10px] sm:text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'VERIFIED_SYSTEMS', es: 'SISTEMAS_VERIFICADOS' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(3rem,8vw,120px)] leading-[0.8] mb-16 tracking-tighter uppercase">
            {t({ 
              en: 'High-Integrity Systems:\nProduction-Ready\nAutomation.', 
              es: 'Sistemas de Alta Integridad:\nAutomatización Lista\npara Producción.' 
            })}
          </h1>
          <p className="text-2xl lg:text-4xl font-medium text-untold-beige/80 max-w-5xl leading-tight">
            {t({ 
              en: 'Engineering the technical spine of modern growth. Built on a foundation of 20 years of production-grade storytelling and enterprise execution.', 
              es: 'Ingeniería de la columna vertebral técnica del crecimiento moderno. Construido sobre una base de 20 años de narrativa de grado de producción y ejecución empresarial.' 
            })}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-10">
        <div className="max-w-full lg:max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {projects.map((project, idx) => (
            <Link 
              key={project.id} 
              to={`/portfolio/${project.id}`}
              className="group relative bg-untold-black p-12 lg:p-20 flex flex-col justify-between min-h-[750px] hover:bg-white/5 transition-all duration-700"
            >
              <div className="mb-20">
                <div className="flex justify-between items-start mb-14">
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/30 mb-4">ARTIFACT_00{idx + 1}</span>
                    {project.metrics && project.metrics[0] && (
                      <div className="flex flex-col mt-4">
                        <span className="text-6xl lg:text-8xl font-sans font-black tracking-tighter text-untold-orange leading-none mb-2">
                          {project.metrics[0].value}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                          {t(project.metrics[0].label)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:bg-untold-orange group-hover:border-untold-orange transition-all duration-500">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-500">→</span>
                  </div>
                </div>

                <h3 className="font-sans font-black text-4xl lg:text-6xl leading-[0.95] uppercase tracking-tighter mb-10 transition-colors group-hover:text-untold-orange">
                  {t(project.name)}
                </h3>

                <p className="text-xl lg:text-2xl font-serif text-untold-beige/60 leading-relaxed mb-16 max-w-lg">
                  {t(project.summary)}
                </p>

                {project.metrics && project.metrics.length > 1 && (
                  <div className="pt-10 border-t border-white/5">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 mb-4">{t(project.metrics[1].label)}</span>
                    <span className="text-3xl font-sans font-black tracking-tighter text-white">{project.metrics[1].value}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="border border-white/10 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white group-hover:border-white/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* The Curated Engine - Deep Dive */}
      <CuratedEngine />

      {/* Footer CTA */}
      <section className="w-full px-4 sm:px-6 md:px-10 py-48 text-center border-t border-white/5">
        <h2 className="font-sans font-black text-4xl lg:text-8xl mb-12 uppercase tracking-tighter leading-none">
          {t({ en: 'Ready to\nmap yours?', es: '¿Listo para\nmapear el tuyo?' })}
        </h2>
        <Link to="/contact" className="inline-block bg-untold-orange text-white px-24 py-10 font-sans font-black uppercase tracking-tighter text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_40px_100px_rgba(255,77,23,0.3)]">
          {t({ en: 'START A PROJECT', es: 'INICIAR PROYECTO' })}
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;