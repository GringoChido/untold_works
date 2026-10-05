export const SITE_URL = 'https://untold.works';
export const SITE_NAME = 'Untold.works';
export const TAGLINE = 'AI transformation & creative direction';

export const EMAIL = 'joshua@untold.works';
export const PHONE_DISPLAY = '+1 (917) 665-1221';
export const PHONE_HREF = 'tel:+19176651221';
export const PROJECT_CONTACT_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent('Let’s discuss a project')}`;
export const LINKEDIN_URL = 'https://www.linkedin.com/in/semolik/';
export const CONTACT_HREF = EMAIL ? `mailto:${EMAIL}` : LINKEDIN_URL;
export const CONTACT_LABEL = EMAIL ? 'Email' : 'LinkedIn';

/** Layer 08, Scale, stays off until launch. Set VITE_FEATURE_SCALE=true to show it. */
export const FEATURE_SCALE = import.meta.env.VITE_FEATURE_SCALE === 'true';
