import React, { useState } from 'react';
import { useLanguage } from '../App';

const NewsletterForm: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const body = new URLSearchParams();
    body.append('form-name', 'newsletter');
    body.append('email', email);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className="text-untold-orange font-mono text-sm font-bold">
        {t({ en: "Subscribed! We'll send you updates on AI tools, case studies, and guides.", es: '¡Suscrito! Te enviaremos actualizaciones sobre herramientas de IA, casos de estudio y guías.' })}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden"><input name="bot-field" /></p>
      <input
        required
        type="email"
        className="flex-1 bg-transparent border-b-2 border-white/10 py-3 text-base font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20 min-w-0"
        placeholder={t({ en: 'Your email', es: 'Tu correo' })}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-untold-orange text-white px-6 py-3 font-sans font-black uppercase tracking-tighter text-sm hover:bg-white hover:text-untold-black transition-all disabled:opacity-50 shrink-0"
      >
        {status === 'submitting'
          ? '...'
          : t({ en: 'Subscribe', es: 'Suscribir' })}
      </button>
    </form>
  );
};

export default NewsletterForm;
