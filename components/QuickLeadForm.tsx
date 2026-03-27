import React, { useState } from 'react';
import { useLanguage } from '../App';

interface QuickLeadFormProps {
  pillar?: string;
}

const QuickLeadForm: React.FC<QuickLeadFormProps> = ({ pillar = 'general' }) => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const body = new URLSearchParams();
    body.append('form-name', 'quick-lead');
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('pillar', pillar);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="border border-untold-orange/20 bg-untold-orange/5 p-8 text-center space-y-4">
        <h4 className="font-sans font-black text-2xl uppercase tracking-tighter text-untold-orange">
          {t({ en: 'Thanks!', es: '¡Gracias!' })}
        </h4>
        <p className="text-white/60 font-serif italic">
          {t({
            en: "We'll send you more information and reach out to schedule a conversation.",
            es: 'Te enviaremos más información y nos pondremos en contacto para agendar una conversación.'
          })}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-white/[0.02] p-6 sm:p-8 space-y-5">
      <h4 className="font-sans font-black text-xl uppercase tracking-tighter mb-2">
        {t({ en: 'Get Started', es: 'Comenzar' })}
      </h4>
      <input type="hidden" name="form-name" value="quick-lead" />
      <input type="hidden" name="pillar" value={pillar} />
      <p className="hidden"><input name="bot-field" /></p>

      <input
        required
        type="text"
        className="w-full bg-transparent border-b-2 border-white/10 py-3 text-base font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
        placeholder={t({ en: 'Your name *', es: 'Tu nombre *' })}
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        required
        type="email"
        className="w-full bg-transparent border-b-2 border-white/10 py-3 text-base font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
        placeholder={t({ en: 'Your email *', es: 'Tu correo *' })}
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="tel"
        className="w-full bg-transparent border-b-2 border-white/10 py-3 text-base font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
        placeholder={t({ en: 'Phone (optional)', es: 'Teléfono (opcional)' })}
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      {status === 'error' && (
        <p className="text-red-400 font-mono text-xs">
          {t({ en: 'Something went wrong. Try again.', es: 'Algo salió mal. Intenta de nuevo.' })}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-untold-orange text-white py-4 font-sans font-black uppercase tracking-tighter text-base hover:bg-white hover:text-untold-black active:scale-[0.98] transition-all disabled:opacity-50"
      >
        {status === 'submitting'
          ? t({ en: 'Sending...', es: 'Enviando...' })
          : t({ en: 'Get Started', es: 'Comenzar' })}
      </button>
    </form>
  );
};

export default QuickLeadForm;
