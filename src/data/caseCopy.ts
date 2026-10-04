import type { CaseFilmProps } from '../components/CaseFilm';
import { caseCopyCampaigns } from './caseCopyCampaigns';
import { caseCopySystems } from './caseCopySystems';
import { caseCopyWebsites } from './caseCopyWebsites';

export type CaseCopy = {
  parent?: { label: string; to: string };
  next?: { label: string; to: string };
  headline: string;
  lead: string;
  storyTitle: string;
  story: string;
  value: string;
  visualLayout?: 'poster';
  visualCredit?: string;
  details?: ReadonlyArray<{ eyebrow: string; title: string; body: string }>;
  focus: ReadonlyArray<{ label: string; text: string }>;
  films?: ReadonlyArray<CaseFilmProps>;
  gallery?: ReadonlyArray<{ src: string; alt: string; caption: string; layout?: 'wide' | 'portrait' | 'landscape'; fit?: 'contain' | 'cover' }>;
  galleryNote?: string;
  links?: ReadonlyArray<{ label: string; href: string }>;
};

/** Every compact case has its own editorial angle. Detailed cases remain hand built. */
export const caseCopy: Record<string, CaseCopy> = {
  ...caseCopySystems,
  ...caseCopyWebsites,
  ...caseCopyCampaigns,
};
