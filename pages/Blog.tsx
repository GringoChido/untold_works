
import { Link } from 'react-router-dom';
import React from 'react';
import { useLanguage } from '../App';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Header Section */}
      <section className="px-10 pt-32 pb-24 lg:pt-56 lg:pb-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t({ en: 'THOUGHT_LAB // Simple insights on a big shift.', es: 'THOUGHT_LAB // Ideas simples sobre un gran cambio.' })}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(3.5rem,10vw,140px)] leading-[0.8] mb-12 tracking-tighter uppercase max-w-5xl">
            {t({ en: 'Clear thinking\nfor the AI era.', es: 'Pensamiento claro\nen la era de la IA.' })}
          </h1>
          <p className="text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl border-l-4 border-untold-orange pl-10 leading-tight">
            {t({ 
              en: 'Cutting through the noise of AI to find the workflows that actually work for you.', 
              es: 'Atravesando el ruido de la IA para encontrar los flujos de trabajo que realmente funcionan para ti.' 
            })}
          </p>
        </div>
      </section>

      {/* Blog Grid - Photography Driven */}
      <section className="px-10 py-12 lg:py-24">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug} 
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-untold-black border border-white/10 hover:border-untold-orange transition-all duration-700 overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-[16/9] relative overflow-hidden bg-white/5 border-b border-white/10">
                  <img 
                    src={post.images[0]} 
                    alt={t(post.title)} 
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  {/* Subtle Orange Duotone Overlay on Hover */}
                  <div className="absolute inset-0 bg-untold-orange/20 opacity-0 group-hover:opacity-100 mix-blend-multiply transition-opacity duration-700"></div>
                  
                  {/* Category Badge - Floating Mono */}
                  <div className="absolute top-6 left-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] bg-untold-black/80 backdrop-blur px-4 py-2 text-untold-orange font-bold border border-untold-orange/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-10 lg:p-14 flex flex-col grow">
                  <div className="flex justify-between items-center mb-8 font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
                    <span>{post.date}</span>
                    <span>{post.readTime} READ</span>
                  </div>
                  
                  <h3 className="font-sans font-black text-3xl lg:text-4xl uppercase tracking-tighter mb-8 leading-none group-hover:text-untold-orange transition-colors">
                    {t(post.title)}
                  </h3>
                  
                  <p className="text-lg lg:text-xl font-serif leading-relaxed text-white/50 group-hover:text-white/80 transition-colors mb-12">
                    {t(post.excerpt)}
                  </p>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex space-x-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="font-mono text-[8px] border border-white/10 px-2 py-1 text-white/20 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-2xl text-untold-orange group-hover:translate-x-3 transition-transform duration-500">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Area */}
      <section className="px-10 py-32 lg:py-48 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
           <span className="font-mono text-[11px] uppercase tracking-[0.6em] text-untold-orange block mb-10 font-bold">STAY_UPDATED</span>
           <h2 className="font-sans font-black text-5xl lg:text-7xl mb-12 uppercase tracking-tighter leading-none">
             Cross-border AI<br/>workflows in your inbox.
           </h2>
           <div className="flex flex-col items-center">
             <Link 
               to="/contact"
               className="bg-white text-untold-black px-16 py-8 font-sans font-black uppercase tracking-widest text-lg hover:bg-untold-orange hover:text-white transition-all shadow-xl"
             >
               Establish Connection
             </Link>
             <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
               Join the inner circle for production-ready insights.
             </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
