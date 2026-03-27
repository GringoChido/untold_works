import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const variants: { en: string; es: string }[] = [
  {
    en: 'This system costs less than your current Zapier plan. Seriously.',
    es: 'Este sistema cuesta menos que tu plan actual de Zapier. En serio.',
  },
  {
    en: 'Your CRM costs $200/month. In 5 years that\u2019s $12,000 \u2014 and you still don\u2019t own it.',
    es: 'Tu CRM cuesta $200/mes. En 5 a\u00f1os son $12,000 \u2014 y todav\u00eda no es tuyo.',
  },
  {
    en: '20 logins. 20 invoices. 0 ownership. There\u2019s a better way.',
    es: '20 contrase\u00f1as. 20 facturas. 0 propiedad. Hay una mejor forma.',
  },
  {
    en: 'What if your $12,000/year SaaS bill was $0?',
    es: '\u00bfQu\u00e9 tal si tu factura SaaS de $12,000/a\u00f1o fuera $0?',
  },
];

const BlogMoneyCTA: React.FC = () => {
  const { t } = useLanguage();
  const [variant] = useState(() => variants[Math.floor(Math.random() * variants.length)]);

  return (
    <div className="border border-untold-border bg-untold-beige p-8 sm:p-10">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-untold-gray block mb-4">
        {t({ en: 'The math', es: 'Las cuentas' })}
      </span>
      <h3 className="font-sans font-black text-xl sm:text-2xl uppercase tracking-tighter leading-tight mb-6">
        {t(variant)}
      </h3>
      <Link
        to="/savings"
        className="font-sans font-black text-untold-orange uppercase tracking-tighter text-lg hover:underline transition-all"
      >
        {t({ en: 'Compare \u2192', es: 'Comparar \u2192' })}
      </Link>
    </div>
  );
};

export default BlogMoneyCTA;
