
import React, { useState } from 'react';
import { useLanguage } from '../App';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const payload = {
      ...formData,
      source: 'untold.works_website',
      timestamp: new Date().toISOString()
    };

    console.log('Sending to GHL API:', JSON.stringify(payload, null, 2));

    setTimeout(() => {
      setStatus('success');
      setTimeout(onClose, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative bg-untold-beige w-full max-w-2xl rounded-none shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-untold-border">
        <div className="p-12 lg:p-20">
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 w-12 h-12 flex items-center justify-center border-2 border-untold-border text-untold-black hover:bg-black hover:text-white transition-all font-bold"
          >
            ✕
          </button>

          {status === 'success' ? (
            <div className="py-24 text-center">
              <div className="text-6xl mb-8">✦</div>
              <h2 className="font-sans font-black text-6xl uppercase tracking-tighter mb-4 leading-none">{t({ en: 'Signal Received.', es: 'Señal Recibida.' })}</h2>
              <p className="font-mono text-xs text-untold-gray uppercase tracking-[0.4em] font-bold">{t({ en: 'Stand by for uplink.', es: 'Espere enlace ascendente.' })}</p>
            </div>
          ) : (
            <>
              <div className="mb-14">
                <span className="font-mono text-[11px] uppercase tracking-[0.4em] font-bold text-untold-orange mb-6 block">Communication Module</span>
                <h2 className="font-sans font-black text-6xl lg:text-7xl mb-6 uppercase tracking-tighter leading-[0.85]">
                  {t({ en: 'Start the Conversation', es: 'Iniciar Conversación' })}
                </h2>
                <p className="text-untold-black text-xl font-medium leading-relaxed max-w-md">
                  {t({ 
                    en: 'Grounded systems for high-load workflows.', 
                    es: 'Sistemas fundamentados para flujos de alta carga.' 
                  })}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-gray-400 pl-1 tracking-widest">Given Name</label>
                    <input 
                      required
                      className="w-full p-5 bg-white border-2 border-untold-border rounded-none outline-none focus:border-untold-orange transition-all font-serif text-lg font-medium"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-gray-400 pl-1 tracking-widest">Family Name</label>
                    <input 
                      required
                      className="w-full p-5 bg-white border-2 border-untold-border rounded-none outline-none focus:border-untold-orange transition-all font-serif text-lg font-medium"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-gray-400 pl-1 tracking-widest">Digital Contact (Email)</label>
                    <input 
                      required
                      type="email"
                      className="w-full p-5 bg-white border-2 border-untold-border rounded-none outline-none focus:border-untold-orange transition-all font-serif text-lg font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                </div>
                <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold text-gray-400 pl-1 tracking-widest">System Context</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full p-5 bg-white border-2 border-untold-border rounded-none outline-none focus:border-untold-orange transition-all resize-none font-serif text-lg font-medium"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-untold-black text-white py-8 rounded-none font-sans font-black uppercase tracking-[0.2em] text-lg hover:bg-untold-orange transition-all disabled:opacity-50 mt-6 shadow-2xl"
                >
                  {status === 'submitting' ? 'Transmitting...' : t({ en: 'Establish Uplink', es: 'Establecer Enlace' })}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
