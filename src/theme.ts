export type Tone = { className: string };

/** Each discipline has a quiet atmosphere; the work supplies the stronger color. */
export const tones = {
  intro: { className: 'tone-intro' },
  platforms: { className: 'tone-platforms' },
  'brand-and-product': { className: 'tone-brand-and-product' },
  websites: { className: 'tone-websites' },
  campaigns: { className: 'tone-campaigns' },
  close: { className: 'tone-close' },
} satisfies Record<string, Tone>;

export type HomeScene = keyof typeof tones;

export const toneForCategory = (slug: string): Tone =>
  slug in tones ? tones[slug as HomeScene] : tones.intro;
