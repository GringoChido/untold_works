import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../App';
import * as i18n from '../i18n';
import { Layers, Zap, PenTool, Terminal, Activity, Code2, Globe } from 'lucide-react';

const CuratedEngine: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.curatedEngine;
  const s = i18n.stack;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    { 
      key: 'engine', 
      label: content.categories.engine.label, 
      tagline: content.categories.engine.tagline, 
      insight: content.categories.engine.insight,
      tools: s.engine,
      icon: <Zap className="w-5 h-5" />,
      color: 'text-untold-orange'
    },
    { 
      key: 'ops', 
      label: content.categories.ops.label, 
      tagline: content.categories.ops.tagline, 
      insight: content.categories.ops.insight,
      tools: s.ops,
      icon: <Layers className="w-5 h-5" />,
      color: 'text-cyan-400'
    },
    { 
      key: 'workspace', 
      label: content.categories.workspace.label, 
      tagline: content.categories.workspace.tagline, 
      insight: content.categories.workspace.insight,
      tools: s.workspace,
      icon: <PenTool className="w-5 h-5" />,
      color: 'text-purple-400'
    }
  ];

  const balanceStats = [
    { label: content.balance.creative, value: 95 },
    { label: content.balance.technical, value: 90 },
    { label: content.balance.integration, value: 100 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="px-10 py-32 lg:py-48 bg-[#050505] border-t border-b border-white/5 relative overflow-hidden font-mono selection:bg-untold-orange/30">
      {/* IDE Style Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Neon Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-untold-orange/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-[1440px] mx-auto relative">
        {/* Terminal Header Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-white/10 pb-10">
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
            </div>
            <h2 className="text-[12px] uppercase tracking-[0.6em] font-bold text-white/40">
              {t(content.title)}
            </h2>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-8 text-[10px] text-white/20 font-bold tracking-[0.3em]">
            <span className="flex items-center space-x-2"><Activity className="w-3 h-3 text-untold-orange" /> <span>SYSTEM_READY</span></span>
            <span className="flex items-center space-x-2"><Code2 className="w-3 h-3 text-cyan-400" /> <span>ENGINE_LOADED</span></span>
            <span className="flex items-center space-x-2"><Globe className="w-3 h-3 text-purple-400" /> <span>JS_2026_ACTIVE</span></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="mb-24">
              <h3 className="text-3xl lg:text-5xl font-serif italic text-white/90 leading-[1.15] tracking-tight mb-10 max-w-4xl">
                {t(content.headline)}
              </h3>
              <div className="flex items-center space-x-4">
                <div className="h-0.5 w-12 bg-untold-orange"></div>
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold">Principal Architect // Joshua Semolik</p>
              </div>
            </div>

            <div className="space-y-10">
              {categories.map((cat, idx) => (
                <div 
                  key={cat.key} 
                  onMouseEnter={() => setActiveCategory(cat.key)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`group relative border transition-all duration-500 overflow-hidden ${activeCategory === cat.key ? 'border-white/30 bg-white/[0.04]' : 'border-white/5 bg-white/[0.01]'}`}
                >
                  <div className="grid md:grid-cols-12">
                    {/* Lateral Label */}
                    <div className="md:col-span-4 p-10 border-b md:border-b-0 md:border-r border-white/5 flex flex-col justify-between">
                      <div>
                        <div className={`flex items-center space-x-4 mb-8 ${cat.color} opacity-40 group-hover:opacity-100 transition-opacity`}>
                          {cat.icon}
                          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">SECTOR_0{idx + 1}</span>
                        </div>
                        <h4 className={`font-sans font-black text-2xl uppercase tracking-tighter leading-none mb-4 group-hover:text-white transition-colors`}>
                          {t(cat.label)}
                        </h4>
                      </div>
                      
                      <div className="mt-8">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold leading-relaxed">
                          {t(cat.tagline)}
                        </p>
                      </div>
                    </div>

                    {/* Tools & Playbook Insight */}
                    <div className="md:col-span-8 p-10 relative">
                      <AnimatePresence mode="wait">
                        {activeCategory === cat.key ? (
                          <motion.div 
                            key="insight"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="absolute inset-0 p-10 bg-untold-black/90 backdrop-blur-md z-10 flex flex-col justify-center"
                          >
                            <span className="text-[10px] text-untold-orange mb-4 font-bold tracking-[0.5em] uppercase">Joshua's Insight</span>
                            <p className="text-xl lg:text-2xl font-serif italic text-white leading-relaxed">
                              {t(cat.insight)}
                            </p>
                            <div className="mt-8 flex items-center space-x-2 text-white/20">
                              <Terminal className="w-4 h-4" />
                              <span className="text-[9px] uppercase tracking-widest">_LOG_EXTRACTED_SUCCESSFULLY</span>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-2 md:grid-cols-3 gap-8"
                      >
                        {cat.tools.map((tool) => (
                          <motion.div 
                            key={tool}
                            variants={itemVariants}
                            className="flex flex-col space-y-3"
                          >
                            <span className="text-sm font-black uppercase tracking-tight text-white/70 group-hover:text-white transition-colors">
                              {tool.replace(/_/g, ' ')}
                            </span>
                            <span className="text-[8px] uppercase tracking-[0.2em] text-untold-orange/50 font-bold leading-tight group-hover:text-untold-orange transition-colors">
                              {t((content.workflows as any)[tool])}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: System Balance Visualization */}
          <div className="lg:col-span-4">
            <div className="sticky top-48">
              <div className="border border-white/10 bg-white/[0.02] p-10 lg:p-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-12 h-12" /></div>
                
                <h4 className="text-[12px] uppercase tracking-[0.5em] font-bold text-untold-orange mb-14">
                  {t(content.balance.title)}
                </h4>

                <div className="space-y-12">
                  {balanceStats.map((stat, idx) => (
                    <div key={idx} className="space-y-4 group">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 group-hover:text-white transition-colors">{t(stat.label)}</span>
                        <span className="text-xl font-black text-white">{stat.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1.5, delay: idx * 0.2 }}
                          viewport={{ once: true }}
                          className={`absolute inset-y-0 left-0 ${idx === 0 ? 'bg-purple-500' : idx === 1 ? 'bg-cyan-500' : 'bg-untold-orange'}`}
                        ></motion.div>
                        <div className="absolute inset-y-0 left-0 bg-white/20 blur-sm w-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-white/5 space-y-6">
                  <p className="text-[11px] text-white/40 leading-relaxed italic">
                    This profile confirms my capability as the bridge between creative vision and enterprise execution. 
                  </p>
                  <div className="flex items-center space-x-3 text-[9px] text-untold-orange font-bold uppercase tracking-[0.2em]">
                    <span className="w-2 h-2 rounded-full bg-untold-orange animate-ping"></span>
                    <span>Systems Alignment: Optimized</span>
                  </div>
                </div>
              </div>

              {/* Technical Code Snippet Detail */}
              <div className="mt-10 p-10 bg-[#0a0a0a] border border-white/5 text-[10px] text-white/10 leading-tight">
                <pre>
                  <code>{`// JS_SYNC_PROTOCOL
const harmony = {
  vision: 0.95,
  execution: 0.90,
  integration: 1.0,
  bridge: (v, e) => v * e * 1.5
};
return harmony.bridge();`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Node */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-20 text-[9px] uppercase tracking-[0.4em] font-bold">
          <div className="flex items-center space-x-4">
            <span>STND_OP_V.2026</span>
            <span className="text-untold-orange">●</span>
            <span>JOSHUA_SEMOLIK</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>ARCHITECTURAL_AUDIT_COMPLETE</span>
            <span>0x4A6B_92F1</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedEngine;