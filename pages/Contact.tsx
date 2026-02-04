
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';
import * as i18n from '../i18n';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.contactPage;
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('joshua@untold.works');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Hero Header - Active Connection Hub */}
      <section className="px-10 pt-32 pb-24 lg:pt-56 lg:pb-32 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center space-x-4 mb-14">
            <span className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></span>
            <p className="font-mono text-[12px] uppercase tracking-[0.5em] font-bold text-white/40">
              {t(content.eyebrow)}
            </p>
          </div>
          <h1 className="font-sans font-black text-[clamp(3.5rem,10vw,140px)] leading-[0.8] mb-12 tracking-tighter uppercase max-w-5xl">
            {t(content.headline)}
          </h1>
          <p className="text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl border-l-4 border-untold-orange pl-10 leading-tight">
            {t(content.subheadline)}
          </p>
        </div>
      </section>

      {/* Main Hub Content */}
      <section className="px-10 py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-24">
          
          {/* Left Column: Direct Links & Anchors */}
          <div className="lg:col-span-5 space-y-24">
            <div className="space-y-16">
              <div className="group">
                <span className="block font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 mb-6 font-bold group-hover:text-untold-orange transition-colors">
                  {t(content.emailLabel)}
                </span>
                <div className="flex flex-col items-start space-y-4">
                  <a 
                    href="mailto:joshua@untold.works" 
                    className="text-3xl lg:text-5xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors"
                  >
                    joshua@untold.works
                  </a>
                  <button 
                    onClick={handleCopyEmail}
                    className="font-mono text-[10px] uppercase tracking-widest text-untold-orange font-bold hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>{copied ? '[_COPIED_TO_CLIPBOARD_]' : '[_COPY_UPLINK_ADR_]'}</span>
                  </button>
                </div>
              </div>

              <div className="group">
                <span className="block font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 mb-6 font-bold group-hover:text-untold-orange transition-colors">
                  {t(content.locationLabel)}
                </span>
                <p className="text-2xl lg:text-3xl font-serif italic text-white/60 leading-relaxed max-w-sm">
                  {t(content.location)}
                </p>
              </div>

              <div className="pt-12 border-t border-white/5">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-8 group"
                >
                  <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-untold-orange group-hover:bg-untold-orange/5 transition-all">
                    <span className="text-3xl text-untold-orange group-hover:scale-125 transition-transform duration-500">→</span>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.5em] text-white/40 font-bold group-hover:text-white transition-colors">
                    {t(content.socialLabel)}
                  </span>
                </a>
              </div>
            </div>

            {/* Aesthetic Logic Audit */}
            <div className="hidden lg:block pt-16 opacity-10">
              <div className="font-mono text-[10px] leading-relaxed uppercase tracking-[0.2em] space-y-2 text-white/50">
                <div className="text-untold-orange">&gt; ESTABLISHING_HANDSHAKE... [OK]</div>
                <div>&gt; ENCRYPTING_SIGNAL_v2.6... [ACTIVE]</div>
                <div>&gt; ROUTING_TO_MEXICO_NODE_01... [DONE]</div>
                <div className="text-untold-orange">&gt; STAND_BY_FOR_RESPONSE_PACKET</div>
              </div>
            </div>
          </div>

          {/* Right Column: Submission Protocol */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/10 p-12 lg:p-20 relative overflow-hidden group shadow-2xl">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-8 pointer-events-none">
                 <div className="w-16 h-px bg-white/20"></div>
                 <div className="w-px h-16 bg-white/20 absolute top-8 right-8"></div>
              </div>

              {status === 'success' ? (
                <div className="py-24 text-center space-y-12 animate-in fade-in zoom-in duration-700">
                  <div className="w-24 h-24 rounded-full border-2 border-untold-orange flex items-center justify-center mx-auto bg-untold-orange/5">
                    <span className="text-5xl text-untold-orange animate-pulse">✦</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-5xl lg:text-6xl uppercase tracking-tighter mb-4">Signal Received.</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Stand by for connection.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-6">
                    <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold ml-1">SUBJECT_IDENTITY</label>
                    <input 
                      required
                      type="text"
                      placeholder="ENTER_YOUR_NAME"
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl lg:text-3xl font-sans font-black uppercase tracking-tighter outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/5"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-6">
                    <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold ml-1">DIGITAL_ADR (EMAIL)</label>
                    <input 
                      required
                      type="email"
                      placeholder="ENTER_CONTACT_UPLINK"
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-2xl lg:text-3xl font-sans font-black uppercase tracking-tighter outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/5"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-6">
                    <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold ml-1">WORKFLOW_CONTEXT (INTENT)</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="MAP_YOUR_SPECIFIC_AI_CHALLENGE_OR_OPPORTUNITY"
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl lg:text-2xl font-serif italic outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/5 resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-untold-orange text-white py-12 font-sans font-black uppercase tracking-tighter text-2xl hover:bg-white hover:text-untold-black active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_40px_100px_rgba(255,77,23,0.1)] mt-8"
                  >
                    {status === 'submitting' ? 'UPLOADING_SIGNAL...' : t(content.cta)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
