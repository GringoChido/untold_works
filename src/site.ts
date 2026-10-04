export const SITE_URL = 'https://untold.works';
export const SITE_NAME = 'Untold.works';
export const TAGLINE = 'AI transformation & creative direction';

/** Set an email here when Joshua is ready to use it as the contact destination. */
export const EMAIL = '';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/semolik/';
export const CONTACT_HREF = EMAIL ? `mailto:${EMAIL}` : LINKEDIN_URL;
export const CONTACT_LABEL = EMAIL ? 'Email' : 'LinkedIn';

/** Layer 08, Scale, stays off until launch. Set VITE_FEATURE_SCALE=true to show it. */
export const FEATURE_SCALE = import.meta.env.VITE_FEATURE_SCALE === 'true';
