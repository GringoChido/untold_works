import React from 'react';
import { useLanguage } from '../App';

const testimonials = [
  {
    quote: {
      en: 'Joshua and the team at Untold.works have been pivotal in reshaping NoxGuard\'s growth trajectory. Their comprehensive growth strategy plan, tailored specifically for our needs, has not only given us a fresh, invigorated brand image but also opened up new revenue channels. As we move towards 2024, their innovative approach and consistent implementation keep us ahead in a competitive market. This partnership has been a cornerstone in our journey towards a more dynamic and prosperous future.',
      es: 'Joshua y el equipo de Untold.works han sido fundamentales para transformar la trayectoria de crecimiento de NoxGuard. Su plan integral de estrategia de crecimiento, diseñado específicamente para nuestras necesidades, no solo nos dio una imagen de marca fresca y renovada, sino que también abrió nuevos canales de ingresos. Su enfoque innovador e implementación consistente nos mantienen adelante en un mercado competitivo. Esta asociación ha sido una piedra angular en nuestro camino hacia un futuro más dinámico y próspero.',
    },
    name: 'William Berriochoa',
    role: { en: 'NoxGuard — US / Mexico', es: 'NoxGuard — EE.UU. / México' },
  },
  {
    quote: {
      en: 'Working with Joshua at Untold.works has been a transformative experience for Billiard Factory\'s social media presence. His creative approach consistently drives growth and engagement, surpassing our expectations consistently. This partnership has genuinely amplified our digital presence.',
      es: 'Trabajar con Joshua en Untold.works ha sido una experiencia transformadora para la presencia en redes sociales de Billiard Factory. Su enfoque creativo impulsa consistentemente el crecimiento y la interacción, superando nuestras expectativas de manera constante. Esta asociación ha amplificado genuinamente nuestra presencia digital.',
    },
    name: 'Ryan Stick',
    role: { en: 'Billiard Factory', es: 'Billiard Factory' },
  },
  {
    quote: {
      en: 'Working with Joshua has been pivotal in elevating Second Son Productions. His unparalleled creativity and audience engagement strategies have been instrumental. Joshua consistently delivers innovative concepts that captivate our audience and significantly boost ticket sales for our artists. Collaborating with him means transforming great ideas into exceptional results. His contribution to our success is immeasurable, consistently making our events and artists stand out in a crowded industry.',
      es: 'Trabajar con Joshua ha sido fundamental para elevar Second Son Productions. Su creatividad inigualable y sus estrategias de engagement han sido instrumentales. Joshua entrega consistentemente conceptos innovadores que cautivan a nuestra audiencia e impulsan significativamente las ventas de boletos para nuestros artistas. Colaborar con él significa transformar grandes ideas en resultados excepcionales. Su contribución a nuestro éxito es invaluable, haciendo que nuestros eventos y artistas destaquen en una industria saturada.',
    },
    name: 'Vincent Bennett',
    role: { en: 'Second Son Productions', es: 'Second Son Productions' },
  },
];

interface TestimonialsProps {
  variant?: 'light' | 'dark';
}

const Testimonials: React.FC<TestimonialsProps> = ({ variant = 'light' }) => {
  const { t } = useLanguage();
  const isDark = variant === 'dark';

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://untold.works/#organization',
    name: 'Untold.works',
    url: 'https://untold.works',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
    },
    review: testimonials.map(item => ({
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Organization',
        '@id': 'https://untold.works/#organization',
      },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: item.name },
      reviewBody: item.quote.en,
      datePublished: '2024-01-15',
    })),
  };

  return (
    <section className={`px-5 sm:px-10 py-20 sm:py-32 ${isDark ? 'bg-untold-black text-white border-b border-white/5' : 'bg-white border-b border-untold-border'}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
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
