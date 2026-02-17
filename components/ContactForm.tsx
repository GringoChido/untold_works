import React, { useState } from 'react';
import { useLanguage } from '../App';

const ContactForm: React.FC = () => {
  const { lang, t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solution: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const body = new URLSearchParams();
    body.append('form-name', 'contact');
    body.append('name', formData.name);
    body.append('email', formData.email);
    body.append('phone', formData.phone);
    body.append('company', formData.company);
    body.append('solution', formData.solution);
    body.append('language', lang);
    body.append('message', formData.message);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString()
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', solution: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const solutionOptions = [
    { value: '', label: t({ en: 'Select a solution...', es: 'Seleccionar solución...' }) },
    { value: 'professional-services', label: t({ en: 'Professional Services', es: 'Servicios Profesionales' }) },
    { value: 'small-business', label: t({ en: 'Small Business', es: 'Pequeña Empresa' }) },
    { value: 'enterprise', label: t({ en: 'Enterprise', es: 'Empresarial' }) },
    { value: 'not-sure', label: t({ en: 'Not Sure Yet', es: 'No estoy seguro aún' }) }
  ];

  if (status === 'success') {
    return (
      <div className="bg-white/[0.02] border border-white/10 p-12 lg:p-20 text-center space-y-8">
        <div className="w-20 h-20 rounded-full border-2 border-untold-orange flex items-center justify-center mx-auto bg-untold-orange/5">
          <span className="text-4xl text-untold-orange">✓</span>
        </div>
        <h3 className="font-sans font-black text-3xl lg:text-4xl uppercase tracking-tighter">
          {t({ en: 'Message Received', es: 'Mensaje Recibido' })}
        </h3>
        <p className="text-lg text-white/60 font-serif italic max-w-md mx-auto">
          {t({
            en: "Thanks for reaching out! We'll get back to you within 24 hours.",
            es: '¡Gracias por contactarnos! Te responderemos en un plazo de 24 horas.'
          })}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/[0.02] border border-white/10 p-8 sm:p-12 lg:p-16 space-y-8">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><input name="bot-field" /></p>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block">
            {t({ en: 'Name', es: 'Nombre' })} *
          </label>
          <input
            required
            type="text"
            className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
            placeholder={t({ en: 'Your name', es: 'Tu nombre' })}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block">
            {t({ en: 'Email', es: 'Correo' })} *
          </label>
          <input
            required
            type="email"
            className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
            placeholder={t({ en: 'your@email.com', es: 'tu@correo.com' })}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block">
            {t({ en: 'Phone', es: 'Teléfono' })}
          </label>
          <input
            type="tel"
            className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
            placeholder={t({ en: 'Optional', es: 'Opcional' })}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="space-y-3">
          <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block">
            {t({ en: 'Company / Business', es: 'Empresa / Negocio' })}
          </label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg font-serif outline-none focus:border-untold-orange transition-all text-white placeholder:text-white/20"
            placeholder={t({ en: 'Your business name', es: 'Nombre de tu negocio' })}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block">
          {t({ en: 'Which solution interests you?', es: '¿Qué solución te interesa?' })}
        </label>
        <select
          className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg font-serif outline-none focus:border-untold-orange transition-all text-white appearance-none cursor-pointer"
          value={formData.solution}
          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
        >
          {solutionOptions.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-untold-black text-white">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold block">
          {t({ en: 'Message', es: 'Mensaje' })} *
        </label>
        <textarea
          required
          rows={5}
          className="w-full bg-transparent border-b-2 border-white/10 py-4 text-lg font-serif outline-none focus:border-untold-orange transition-all text-white resize-none placeholder:text-white/20"
          placeholder={t({ en: 'Tell us about your business and what you need...', es: 'Cuéntanos sobre tu negocio y lo que necesitas...' })}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 font-mono text-sm">
          {t({ en: 'Something went wrong. Please try again or email us at info@untold.works', es: 'Algo salió mal. Intenta de nuevo o escríbenos a info@untold.works' })}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-untold-orange text-white py-6 font-sans font-black uppercase tracking-tighter text-xl hover:bg-white hover:text-untold-black active:scale-[0.98] transition-all disabled:opacity-50 mt-4"
      >
        {status === 'submitting'
          ? t({ en: 'Sending...', es: 'Enviando...' })
          : t({ en: 'Send Message', es: 'Enviar Mensaje' })}
      </button>
    </form>
  );
};

export default ContactForm;
