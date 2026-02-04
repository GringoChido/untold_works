
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../App';
import { blogPosts } from '../data/blogPosts';

const BlogPostTemplate: React.FC = () => {
  const { postSlug } = useParams();
  const { t } = useLanguage();
  
  const currentIndex = blogPosts.findIndex(p => p.slug === postSlug);
  const post = blogPosts[currentIndex];

  // Scroll-to-Top Rule
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postSlug]);

  if (!post) return <Navigate to="/blog" />;

  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* 3-Photo Rule: Visual Slot 1 (Intro Hero) */}
      <div className="w-full aspect-[21/9] lg:aspect-[24/8] overflow-hidden border-b border-white/10 relative bg-zinc-900">
        {post.images[0] && (
          <img 
            src={post.images[0]} 
            alt="Hero Setting" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-75"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-untold-black/90 to-transparent"></div>
        <div className="absolute bottom-10 left-10 flex flex-col items-start font-mono text-[9px] uppercase tracking-[0.5em] text-white/40">
           <span>VISUAL_ARTIFACT // 01</span>
           <span className="text-untold-orange font-bold">INTRO_VIBE_ACTIVE</span>
        </div>
      </div>

      {/* Editorial Header */}
      <header className="px-10 pt-20 pb-20 lg:pt-32 lg:pb-32 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <Link to="/blog" className="inline-flex items-center space-x-4 group mb-16">
             <span className="text-2xl group-hover:-translate-x-3 transition-transform duration-500 text-untold-orange">←</span>
             <span className="font-mono text-[11px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">Back to insights</span>
          </Link>

          <div className="flex items-center space-x-8 mb-10 font-mono text-[11px] uppercase tracking-[0.4em] font-bold text-white/30">
            <span className="text-untold-orange">WRITTEN_BY // {post.author}</span>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <span>CATEGORY // {post.category}</span>
          </div>

          <h1 className="font-sans font-black text-[clamp(2.5rem,8vw,90px)] leading-[0.95] tracking-tight mb-16 max-w-4xl">
            {t(post.title)}
          </h1>

          <div className="flex items-center space-x-12 py-10 border-t border-white/5">
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2">PUBLISHED</span>
              <span className="font-mono font-bold text-sm text-white/60">{post.date}</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-2">READTIME</span>
              <span className="font-mono font-bold text-sm text-white/60">{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <article className="px-10 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-xl prose-invert max-w-none">
            {t(post.content).split('\n\n').map((block, i, arr) => {
              // Custom Block: MONOSPACED STEPS
              if (block.includes('[STEPS]')) {
                 const steps = block.replace('[STEPS]', '').trim().split('\n');
                 return (
                   <div key={i} className="my-20 space-y-4">
                      {steps.map((step, sIdx) => (
                        <div key={sIdx} className="bg-white/[0.03] border border-white/10 p-6 flex items-center space-x-8 group hover:border-untold-orange transition-colors">
                           <span className="font-mono text-untold-orange font-bold text-xl">{String(sIdx + 1).padStart(2, '0')}</span>
                           <span className="font-mono text-white/80 uppercase tracking-widest text-xs font-bold leading-relaxed">{step.trim()}</span>
                        </div>
                      ))}
                   </div>
                 );
              }

              // Custom Block: SCHEMA GRID
              if (block.includes('[SCHEMA]')) {
                const schemaLines = block.replace('[SCHEMA]', '').trim().split('\n');
                const title = schemaLines[0].replace(/\*\*/g, '');
                const items = schemaLines.slice(1);
                return (
                  <div key={i} className="my-20 p-10 bg-untold-orange/5 border-2 border-untold-orange/20 relative group">
                     <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-untold-orange/40 uppercase tracking-[0.4em] font-bold">OPERATIONAL_CLARITY_GRID</div>
                     <h4 className="font-sans font-black text-2xl uppercase tracking-tighter text-untold-orange mb-10">{title}</h4>
                     <ul className="space-y-6">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start space-x-4 text-white/70 italic text-xl leading-relaxed">
                             <span className="text-untold-orange font-bold text-2xl leading-none">•</span>
                             <span>{item.replace(/^[0-9]\./, '').trim()}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
                );
              }

              // Custom Block: TERMINAL WINDOW
              if (block.includes('[TERMINAL]')) {
                const code = block.replace('[TERMINAL]', '').trim();
                return (
                  <div key={i} className="my-20 bg-[#0a0a0a] border border-white/20 rounded-lg overflow-hidden shadow-2xl">
                     <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                        <div className="flex space-x-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">RECLAIM_ENGINE.TS</span>
                     </div>
                     <div className="p-8 lg:p-12 overflow-x-auto">
                        <pre className="font-mono text-[14px] leading-relaxed text-untold-orange/80">
                           <code>{code}</code>
                        </pre>
                     </div>
                  </div>
                );
              }

              if (block.startsWith('###')) {
                const heading = block.replace('###', '').trim();
                // Determine if this is the first H3 to insert Slot 2
                const h3Indices = arr.map((b, idx) => b.startsWith('###') ? idx : -1).filter(idx => idx !== -1);
                const isFirstH3 = h3Indices[0] === i;

                return (
                  <React.Fragment key={i}>
                    <h3 className="font-sans font-bold text-3xl lg:text-4xl mt-24 mb-10 text-white tracking-tight">
                      {heading}
                    </h3>
                    
                    {/* 3-Photo Rule: Visual Slot 2 (Middle Insight) - Deterministic after first H3 */}
                    {isFirstH3 && post.images[1] && (
                      <div className="my-20 border border-white/10 overflow-hidden bg-zinc-900 group relative">
                        <img 
                          src={post.images[1]} 
                          alt="Process Insight Artifact" 
                          className="w-full aspect-video object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                          onError={(e) => (e.currentTarget.style.display = 'none')}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-untold-black to-transparent">
                           <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 font-bold tracking-[0.3em]">FIGURE_02: OPERATIONAL_MAPPING</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              }
              
              const parts = block.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i} className="text-xl lg:text-2xl leading-relaxed mb-10 text-white/60 font-serif tracking-normal">
                  {parts.map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={j} className="text-white font-bold">{part.replace(/\*\*/g, '')}</strong>;
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* 3-Photo Rule: Visual Slot 3 (Closing Artifact) */}
          <div className="mt-24 mb-16 border border-white/10 bg-zinc-900 relative group min-h-[300px]">
             {post.images[2] && (
               <img 
                 src={post.images[2]} 
                 alt="Closing Artifact" 
                 className="w-full aspect-[21/9] object-cover grayscale brightness-75 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                 onError={(e) => (e.currentTarget.style.display = 'none')}
               />
             )}
             <div className="absolute top-10 left-10 w-px h-24 bg-untold-orange/40"></div>
             <div className="absolute top-10 left-10 w-24 h-px bg-untold-orange/40"></div>
             <div className="absolute bottom-6 right-6 font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">GROUNDING_ARTIFACT_DEPLOYED</div>
          </div>

          {/* Result-Focused Footer CTA - Links to /contact */}
          <div className="mt-32 pt-32 border-t border-white/10 text-center">
             <h4 className="font-sans font-black text-4xl lg:text-6xl uppercase tracking-tighter mb-12 text-white leading-[0.9]">
                Stop the Pilot Trap.<br/>Start making AI work.
             </h4>
             <Link 
              to="/contact"
              className="bg-untold-orange text-white px-20 py-8 font-sans font-black uppercase tracking-tighter text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl inline-block"
             >
               Establish Connection
             </Link>
          </div>
        </div>
      </article>

      {/* Navigation Loop */}
      <section className="px-10 py-32 lg:py-48 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-24">
          <div className="text-center md:text-left">
             <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/20 mb-6 block font-bold tracking-widest">NEXT_INSIGHT</span>
             <Link to={`/blog/${nextPost.slug}`} className="group inline-flex items-center space-x-12">
                <h4 className="font-sans font-black text-3xl lg:text-5xl uppercase tracking-tighter group-hover:text-untold-orange transition-colors max-w-xl leading-none">
                  {t(nextPost.title)}
                </h4>
                <span className="text-6xl text-untold-orange group-hover:translate-x-6 transition-transform duration-500">→</span>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostTemplate;
