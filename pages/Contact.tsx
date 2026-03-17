import React, { useState } from 'react';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';
import * as i18n from '../i18n';
import ContactForm from '../components/ContactForm';
import ImagePlaceholder from '../components/ImagePlaceholder';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const content = i18n.contactPage;
  const [copied, setCopied] = useState(false);

  usePageMeta(
    i18n.seo.contact.title,
    i18n.seo.contact.description,
    {
      path: '/contact',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do I contact Untold.works?', acceptedAnswer: { '@type': 'Answer', text: 'Email info@untold.works or fill out the contact form on our website. We typically respond within 24 hours.' } },
          { '@type': 'Question', name: 'Where is Untold.works located?', acceptedAnswer: { '@type': 'Answer', text: 'We are based in San Miguel de Allende, Guanajuato, Mexico. We serve clients across Mexico and the United States remotely.' } },
          { '@type': 'Question', name: 'Do you offer free consultations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our initial conversation is free and no-obligation. We discuss your needs and recommend the best path forward before any commitment.' } },
        ],
      },
    }
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@untold.works');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-untold-black min-h-screen font-serif text-white selection:bg-untold-orange selection:text-white">
      {/* Hero Header */}
      <section className="px-5 sm:px-10 pt-20 sm:pt-32 pb-24 lg:pt-56 lg:pb-32 border-b border-white/10">
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
          <p className="text-2xl lg:text-4xl font-serif italic text-white/60 max-w-4xl border-l-4 border-untold-orange pl-6 sm:pl-10 leading-tight">
            {t(content.subheadline)}
          </p>
        </div>
      </section>

      {/* Location Image */}
      <section className="border-b border-white/10">
        <ImagePlaceholder
          label="San Miguel de Allende — workspace or street scene"
          aspect="aspect-[21/9]"
          variant="dark"
          dimensions="1440 × 617px"
        />
      </section>

      {/* Main Content */}
      <section className="px-5 sm:px-10 py-24 lg:py-40">
        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-24">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-24">
            <div className="space-y-16">
              <div className="group">
                <span className="block font-mono text-[11px] uppercase tracking-[0.6em] text-white/20 mb-6 font-bold group-hover:text-untold-orange transition-colors">
                  {t(content.emailLabel)}
                </span>
                <div className="flex flex-col items-start space-y-4">
                  <a
                    href="mailto:info@untold.works"
                    className="text-3xl lg:text-5xl font-sans font-black uppercase tracking-tighter hover:text-untold-orange transition-colors break-all"
                  >
                    info@untold.works
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="font-mono text-[10px] uppercase tracking-widest text-untold-orange font-bold hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>{copied ? '[_COPIED_]' : '[_COPY_EMAIL_]'}</span>
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
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-10 py-20 sm:py-32 border-t border-white/10">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
            <h2 className="font-mono text-[13px] uppercase tracking-[0.6em] font-bold text-white/30">
              {t({ en: 'FREQUENTLY ASKED QUESTIONS', es: 'PREGUNTAS FRECUENTES' })}
            </h2>
          </div>

          <h3 className="font-sans font-black text-3xl sm:text-5xl uppercase tracking-tighter mb-16 leading-[0.85]">
            {t({ en: 'What Happens After\nI Reach Out?', es: '¿Qué Pasa Después\nde que Me Contacto?' })}
          </h3>

          <div className="space-y-0 border-t border-white/10">
            {[
              { q: { en: 'How quickly do you respond?', es: '¿Qué tan rápido responden?' }, a: { en: 'We typically respond within 24 hours during business days. Most inquiries get a response the same day.', es: 'Normalmente respondemos en 24 horas durante días hábiles. La mayoría de las consultas reciben respuesta el mismo día.' } },
              { q: { en: 'What happens after I submit the form?', es: '¿Qué pasa después de enviar el formulario?' }, a: { en: 'We review your message and schedule a 30-minute discovery call. No sales pitch — just a real conversation about your business, what you need, and whether we are the right fit.', es: 'Revisamos tu mensaje y programamos una llamada de descubrimiento de 30 minutos. Sin discurso de ventas — solo una conversación real sobre tu negocio, lo que necesitas y si somos el equipo adecuado.' } },
              { q: { en: 'Do you offer free consultations?', es: '¿Ofrecen consultas gratuitas?' }, a: { en: 'The initial discovery call is always free. We will assess your current setup, discuss your goals, and outline what a project would look like — no commitment required.', es: 'La llamada inicial de descubrimiento siempre es gratuita. Evaluaremos tu configuración actual, discutiremos tus objetivos y delinearemos cómo sería un proyecto — sin compromiso.' } },
              { q: { en: 'Can I just get a website without the full ecosystem?', es: '¿Puedo solo obtener un sitio web sin todo el ecosistema?' }, a: { en: 'Yes. Every project is scoped to your needs. Some clients start with a brand identity and website, then add AI systems and automation later as they grow.', es: 'Sí. Cada proyecto se adapta a tus necesidades. Algunos clientes comienzan con identidad de marca y sitio web, y después agregan sistemas de IA y automatización conforme crecen.' } },
            ].map((faq, idx) => (
              <details key={idx} className="border-b border-white/10 group">
                <summary className="flex items-center justify-between py-6 sm:py-8 cursor-pointer list-none">
                  <h4 className="font-sans font-black text-lg sm:text-xl uppercase tracking-tighter pr-8 group-open:text-untold-orange transition-colors">
                    {t(faq.q)}
                  </h4>
                  <span className="text-2xl text-untold-orange shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="pb-8 text-lg font-serif text-white/60 leading-relaxed pr-12">
                  {t(faq.a)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
