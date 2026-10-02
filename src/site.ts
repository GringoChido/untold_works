export const SITE_URL = 'https://untold.works';
export const SITE_NAME = 'Untold.works';
export const TAGLINE = 'The portfolio of Joshua Semolik';

/** Open item, ask Joshua: the email for the nav and footer. Empty renders the design placeholder. */
export const EMAIL = '';
export const MAILTO = EMAIL ? `mailto:${EMAIL}` : 'mailto:';

/** Layer 08, Scale, stays off until launch. Set VITE_FEATURE_SCALE=true to show it. */
export const FEATURE_SCALE = import.meta.env.VITE_FEATURE_SCALE === 'true';
