
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import { projects } from '../data/projects';

const projectMeta: Record<string, { title: string; description: string }> = {
  'spotify-whatsapp-publishing': {
    title: 'Spotify-WhatsApp Pipeline — Joshua Semolik',
    description: 'AI publishing pipeline replacing manual content ops. 15 hours/week reclaimed, 10x capacity scaling using n8n, Claude Code, and RAG architecture.',
  },
  'black-radio-experience': {
    title: 'Black Radio GTM Engine — Joshua Semolik',
    description: 'Automated GTM campaign engine. 300% audience reach growth and 500+ engagement signals via Python-driven cross-platform distribution pipeline.',
  },
  'omi-lead-intake-qualification': {
    title: 'OMI Lead Intake & Routing — Joshua Semolik',
    description: 'Intelligent lead routing system with 98% MQL accuracy and 4.2x sales ROI. Agentic AI workflows using n8n, OpenAI, and CRM integration.',
  },
  'billiard-factory-retail-architecture': {
    title: 'Billiard Factory RevOps — Joshua Semolik',
    description: 'Unified omnichannel revenue operations. 20% sales lift across 4,000+ SKUs with 35% efficiency gain via ERP integration and n8n automation.',
  },
};

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const { t } = useLanguage();

  const currentIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[currentIndex];

  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  const meta = projectMeta[projectId || ''] || { title: 'Project — Joshua Semolik', description: '' };
  usePageMeta(meta.title, meta.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return <Navigate to="/portfolio" />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: t(project.name),
    description: t(project.summary),
    author: { '@type': 'Person', name: 'Joshua Semolik' },
    url: `https://untold.works/portfolio/${project.id}`,
  };

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Top Metadata Bar - High Contrast Mono */}
      <header className="px-10 pt-32 pb-16 lg:pt-48 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <Link to="/portfolio" className="inline-flex items-center space-x-4 group mb-8 md:mb-0">
               <span className="text-2xl group-hover:-translate-x-3 transition-transform duration-500 text-untold-orange">←</span>
               <span className="font-mono text-[11px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">Back to Portfolio</span>
            </Link>
            
            <div className="flex space-x-8 font-mono text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">
              <span className="text-untold-orange">PRODUCTION_READY</span>
              <span>VERIFIED_SYSTEM</span>
              <span>UNTOLD_WORKS_STND</span>
            </div>
          </div>
          
          <h1 className="font-sans font-black text-[clamp(3rem,10vw,140px)] leading-[0.8] uppercase tracking-tighter mb-24 max-w-5xl">
            {t(project.name)}
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/5 bg-white/[0.02] p-10">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">CLIENT</span>
              <p className="text-lg lg:text-xl font-bold uppercase tracking-tight font-mono text-untold-orange">{t(project.client)}</p>
            </div>
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">TIMELINE</span>
              <p className="text-lg lg:text-xl font-bold uppercase tracking-tight font-mono">{project.timeline}</p>
            </div>
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">TECHNICAL_STACK</span>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {project.stack.map((item, idx) => (
                  <p key={idx} className="text-[12px] font-bold uppercase tracking-tight font-mono text-white/60">{item}</p>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30">SERVICES_PROVIDED</span>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {project.services.map((service, idx) => (
                  <p key={idx} className="text-[12px] font-bold uppercase tracking-tight font-mono">{t(service)}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Narrative Grid - Split Layout */}
      <section className="px-10 py-32 lg:py-56 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-6 sticky top-48">
            <h2 className="text-4xl lg:text-7xl font-serif italic text-untold-orange leading-[1.05] tracking-tighter mb-16">
              {t(project.summary)}
            </h2>
            <div className="flex flex-wrap gap-4 mb-20">
              {project.tags.map(tag => (
                <span key={tag} className="border border-white/10 px-6 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  {tag}
                </span>
              ))}
            </div>
            {project.metrics && (
              <div className="grid grid-cols-2 gap-12 pt-16 border-t border-white/10">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="group">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 group-hover:text-untold-orange transition-colors">{t(metric.label)}</span>
                    <span className="text-6xl lg:text-8xl font-sans font-black tracking-tighter text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-6 space-y-32">
            <div className="group">
              <span className="block font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange mb-8 font-bold">SYSTEM_CHALLENGE</span>
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-white/70 group-hover:text-white transition-colors">
                {t(project.challenge)}
              </p>
            </div>
            <div className="group">
              <span className="block font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange mb-8 font-bold">OPERATIONAL_GOAL</span>
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-white/70 group-hover:text-white transition-colors">
                {t(project.goal)}
              </p>
            </div>
            <div className="group">
              <span className="block font-mono text-[11px] uppercase tracking-[0.5em] text-untold-orange mb-8 font-bold">TECHNICAL_SOLUTION</span>
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-white/70 group-hover:text-white transition-colors">
                {t(project.solution)}
              </p>
            </div>

            {project.codeSnippets && project.codeSnippets.map((snippet, idx) => (
              <div key={idx} className="pt-16 border-t border-white/5">
                <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 mb-8">{snippet.title}</span>
                <div className="bg-white/5 border border-white/10 p-10 overflow-x-auto">
                  <pre className="font-mono text-[13px] leading-relaxed text-untold-orange/80">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artifact Gallery - 4-Column Responsive Grid */}
      <section className="px-10 py-32 lg:py-48 bg-white/[0.02]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-24">
             <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
             <h2 className="font-mono text-[11px] uppercase tracking-[0.6em] font-bold text-white/40 tracking-widest">SYSTEM_VISUALS_&_ARTIFACTS</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.images.map((img, idx) => (
              <div key={idx} className="aspect-square bg-white/5 overflow-hidden group border border-white/10 hover:border-untold-orange transition-colors">
                <img 
                  src={img} 
                  alt={project.imageAlts?.[idx] || `${t(project.name)} artifact ${idx + 1}`}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Nav - Next/Previous Toggle */}
      <section className="px-10 py-32 border-t border-white/5 bg-black">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-px bg-white/5 border border-white/10">
           <Link to={`/portfolio/${prevProject.id}`} className="group p-12 lg:p-20 bg-black hover:bg-white/[0.03] transition-all border-r border-white/10">
              <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 mb-10">PREVIOUS_ARTIFACT</span>
              <div className="flex items-center space-x-8">
                <span className="text-4xl group-hover:-translate-x-4 transition-transform duration-500 text-untold-orange">←</span>
                <h3 className="font-sans font-black text-3xl lg:text-5xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors">
                  {t(prevProject.name)}
                </h3>
              </div>
           </Link>
           <Link to={`/portfolio/${nextProject.id}`} className="group p-12 lg:p-20 bg-black hover:bg-white/[0.03] transition-all text-right">
              <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 mb-10">NEXT_ARTIFACT</span>
              <div className="flex items-center justify-end space-x-8">
                <h3 className="font-sans font-black text-3xl lg:text-5xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors">
                  {t(nextProject.name)}
                </h3>
                <span className="text-4xl group-hover:translate-x-4 transition-transform duration-500 text-untold-orange">→</span>
              </div>
           </Link>
        </div>
        
        <div className="mt-32 text-center">
          <Link to="/contact" className="inline-block bg-untold-orange text-white px-20 py-10 font-sans font-black uppercase tracking-tighter text-2xl hover:scale-105 transition-all shadow-[0_30px_60px_rgba(255,77,23,0.3)]">
            {t({ en: 'BUILD_THIS_SYSTEM', es: 'CONSTRUIR_ESTE_SISTEMA' })}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
