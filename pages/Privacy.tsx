import React from 'react';
import { useLanguage } from '../App';
import { usePageMeta } from '../hooks/usePageMeta';

const PrivacyPage: React.FC = () => {
  const { t } = useLanguage();

  usePageMeta(
    { en: 'Privacy Policy — Untold.works', es: 'Política de Privacidad — Untold.works' },
    { en: 'How Untold.works collects, uses, and protects your personal information.', es: 'Cómo Untold.works recopila, usa y protege tu información personal.' },
    { path: '/privacy' }
  );

  return (
    <div className="bg-untold-beige min-h-screen font-serif text-untold-black">
      <section className="bg-untold-black text-white px-5 sm:px-10 py-20 sm:py-32 lg:py-40 border-b border-white/10">
        <div className="max-w-[900px] mx-auto">
          <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.85] mb-6">
            {t({ en: 'Privacy Policy', es: 'Política de Privacidad' })}
          </h1>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            {t({ en: 'Last updated: March 14, 2026', es: 'Última actualización: 14 de marzo de 2026' })}
          </p>
        </div>
      </section>

      <section className="px-5 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto prose prose-lg prose-untold space-y-12">

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'Who We Are', es: 'Quiénes Somos' })}
            </h2>
            <p className="text-lg text-untold-gray leading-relaxed">
              {t({
                en: 'Untold.works is a creative technology agency based in San Miguel de Allende, Guanajuato, Mexico, operated by Joshua Semolik. Our website address is https://untold.works.',
                es: 'Untold.works es una agencia de tecnología creativa con sede en San Miguel de Allende, Guanajuato, México, operada por Joshua Semolik. La dirección de nuestro sitio web es https://untold.works.',
              })}
            </p>
          </div>

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'What Information We Collect', es: 'Qué Información Recopilamos' })}
            </h2>
            <p className="text-lg text-untold-gray leading-relaxed mb-4">
              {t({
                en: 'We collect information you voluntarily provide through our contact form:',
                es: 'Recopilamos información que proporcionas voluntariamente a través de nuestro formulario de contacto:',
              })}
            </p>
            <ul className="list-disc pl-6 text-lg text-untold-gray space-y-2">
              <li>{t({ en: 'Name', es: 'Nombre' })}</li>
              <li>{t({ en: 'Email address', es: 'Dirección de correo electrónico' })}</li>
              <li>{t({ en: 'Phone number (optional)', es: 'Número de teléfono (opcional)' })}</li>
              <li>{t({ en: 'Company or business name (optional)', es: 'Nombre de empresa o negocio (opcional)' })}</li>
              <li>{t({ en: 'Project details you share in the message field', es: 'Detalles del proyecto que compartas en el campo de mensaje' })}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'How We Use Your Information', es: 'Cómo Usamos Tu Información' })}
            </h2>
            <ul className="list-disc pl-6 text-lg text-untold-gray space-y-2">
              <li>{t({ en: 'To respond to your inquiry and discuss your project', es: 'Para responder a tu consulta y discutir tu proyecto' })}</li>
              <li>{t({ en: 'To send you a project proposal if requested', es: 'Para enviarte una propuesta de proyecto si la solicitas' })}</li>
              <li>{t({ en: 'To communicate about ongoing projects', es: 'Para comunicarnos sobre proyectos en curso' })}</li>
            </ul>
            <p className="text-lg text-untold-gray leading-relaxed mt-4">
              {t({
                en: 'We do not sell, rent, or share your personal information with third parties for marketing purposes. We will never send you unsolicited marketing emails.',
                es: 'No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing. Nunca te enviaremos correos de marketing no solicitados.',
              })}
            </p>
          </div>

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'Analytics & Cookies', es: 'Analítica y Cookies' })}
            </h2>
            <p className="text-lg text-untold-gray leading-relaxed">
              {t({
                en: 'This website uses Netlify Analytics for basic traffic metrics. Netlify Analytics is server-side — it does not use cookies or track individual users. No personal data is collected through analytics. We do not use Google Analytics or any third-party tracking pixels.',
                es: 'Este sitio web utiliza Netlify Analytics para métricas básicas de tráfico. Netlify Analytics funciona del lado del servidor — no usa cookies ni rastrea usuarios individuales. No se recopilan datos personales a través de la analítica. No usamos Google Analytics ni pixeles de seguimiento de terceros.',
              })}
            </p>
          </div>

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'Data Storage & Security', es: 'Almacenamiento y Seguridad de Datos' })}
            </h2>
            <p className="text-lg text-untold-gray leading-relaxed">
              {t({
                en: 'Form submissions are processed through Resend (email delivery) and stored securely. We take reasonable measures to protect your information from unauthorized access. Your data is retained only as long as necessary for business communication purposes.',
                es: 'Los envíos de formularios se procesan a través de Resend (entrega de correo) y se almacenan de forma segura. Tomamos medidas razonables para proteger tu información del acceso no autorizado. Tus datos se conservan solo el tiempo necesario para fines de comunicación comercial.',
              })}
            </p>
          </div>

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'Your Rights', es: 'Tus Derechos' })}
            </h2>
            <p className="text-lg text-untold-gray leading-relaxed">
              {t({
                en: 'You have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, contact us at info@untold.works.',
                es: 'Tienes derecho a solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento. Para ejercer estos derechos, contáctanos en info@untold.works.',
              })}
            </p>
          </div>

          <div>
            <h2 className="font-sans font-black text-2xl uppercase tracking-tighter mb-4">
              {t({ en: 'Contact', es: 'Contacto' })}
            </h2>
            <p className="text-lg text-untold-gray leading-relaxed">
              {t({
                en: 'For any privacy-related questions, contact Joshua Semolik at info@untold.works.',
                es: 'Para cualquier pregunta relacionada con la privacidad, contacta a Joshua Semolik en info@untold.works.',
              })}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
