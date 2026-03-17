import React from 'react';
import { useLanguage } from '../App';

const testimonials = [
  {
    quote: {
      en: 'Untold.works completely transformed how we operate. The AI-powered booking system alone saved us 15 hours a week — and the brand identity made us look like the premium property we always were.',
      es: 'Untold.works transformó completamente cómo operamos. Solo el sistema de reservas con IA nos ahorró 15 horas por semana — y la identidad de marca nos hizo ver como la propiedad premium que siempre fuimos.',
    },
    name: 'Joaquín Morales',
    role: { en: 'Owner, Boutique Hotel — San Miguel de Allende', es: 'Propietario, Hotel Boutique — San Miguel de Allende' },
  },
  {
    quote: {
      en: 'As a solo attorney, I needed systems that worked without a tech team. Joshua built me a complete client acquisition funnel — website, intake forms, CRM, automated follow-ups — and trained me to run it all myself.',
      es: 'Como abogado independiente, necesitaba sistemas que funcionaran sin un equipo técnico. Joshua me construyó un embudo completo de adquisición de clientes — sitio web, formularios, CRM, seguimientos automatizados — y me capacitó para manejarlo todo yo mismo.',
    },
    name: 'David Carrillo',
    role: { en: 'Immigration Attorney — Querétaro / Texas', es: 'Abogado de Inmigración — Querétaro / Texas' },
  },
  {
    quote: {
      en: 'We went from spreadsheets and WhatsApp chaos to a real business platform. The bilingual website doubled our US inquiries in the first quarter.',
      es: 'Pasamos del caos de hojas de cálculo y WhatsApp a una plataforma de negocio real. El sitio web bilingüe duplicó nuestras consultas de EE.UU. en el primer trimestre.',
    },
    name: 'María Elena Vega',
    role: { en: 'Founder, Interior Design Studio — México City', es: 'Fundadora, Estudio de Diseño de Interiores — Ciudad de México' },
  },
];

interface TestimonialsProps {
  variant?: 'light' | 'dark';
}

const Testimonials: React.FC<TestimonialsProps> = ({ variant = 'light' }) => {
  const { t } = useLanguage();
  const isDark = variant === 'dark';

  return (
    <section className={`px-5 sm:px-10 py-20 sm:py-32 ${isDark ? 'bg-untold-black text-white border-b border-white/5' : 'bg-white border-b border-untold-border'}`}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center space-x-4 mb-16">
          <span className="w-2.5 h-2.5 rounded-full bg-untold-orange"></span>
          <h2 className={`font-mono text-[13px] uppercase tracking-[0.6em] font-bold ${isDark ? 'text-white/40' : 'text-untold-black/40'}`}>
            {t({ en: 'CLIENT RESULTS', es: 'RESULTADOS DE CLIENTES' })}
          </h2>
        </div>

        <h3 className={`font-sans font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter mb-16 leading-[0.85] ${isDark ? 'text-white' : 'text-untold-black'}`}>
          {t({ en: 'What Do Our\nClients Say?', es: '¿Qué Dicen\nNuestros Clientes?' })}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 flex flex-col border ${isDark ? 'border-white/10 bg-white/[0.02]' : 'border-untold-border bg-untold-beige/30'}`}
            >
              <span className="text-untold-orange text-5xl font-serif leading-none mb-6">"</span>
              <p className={`text-lg font-serif italic leading-relaxed flex-grow mb-8 ${isDark ? 'text-white/70' : 'text-untold-gray'}`}>
                {t(item.quote)}
              </p>
              <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-untold-border'}`}>
                <p className={`font-sans font-black text-base uppercase tracking-tighter ${isDark ? 'text-white' : 'text-untold-black'}`}>
                  {item.name}
                </p>
                <p className={`font-mono text-[10px] uppercase tracking-[0.3em] mt-1 ${isDark ? 'text-white/40' : 'text-untold-gray'}`}>
                  {t(item.role)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
