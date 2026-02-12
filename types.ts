
export type Language = 'en' | 'es';

export interface ContentStrings {
  [key: string]: {
    en: string;
    es: string;
  };
}

export interface Metric {
  label: { en: string; es: string };
  value: string;
}

export interface Project {
  id: string;
  name: { en: string; es: string };
  client: { en: string; es: string };
  timeline: string;
  stack: string[];
  services: { en: string; es: string }[];
  summary: { en: string; es: string };
  challenge: { en: string; es: string };
  goal: { en: string; es: string };
  solution: { en: string; es: string };
  metrics?: Metric[];
  tags: string[];
  images: string[];
  imageAlts?: string[];
  codeSnippets?: {
    language: string;
    code: string;
    title: string;
  }[];
}

export interface WorkflowProof {
  name: { en: string; es: string };
  description: { en: string; es: string };
  builtWith: { en: string; es: string };
  tags: string[];
}

export interface Track {
  id: string;
  name: string;
  artist: string;
  spotifyId: string;
  previewUrl: string | null;
}

export interface StereoState {
  power: boolean;
  playing: boolean;
  volume: number;
  currentTrack: Track | null;
  currentTrackIndex: number;
  shuffledQueue: Track[];
  vuLeft: number;
  vuRight: number;
}

// ── Untold Slides ──

export type SlideScene =
  | 'vintage'
  | 'haring'
  | 'bigsur'
  | 'polaroid'
  | 'tokyo'
  | 'brutalist'
  | 'campfire'
  | 'cinema';

export interface SlideImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface SlideCollection {
  id: string;
  title: string;
  subtitle: string;
  scene: SlideScene;
  track: Track;
  images: SlideImage[];
}

export interface SlidesState {
  activeCollection: SlideCollection | null;
  currentImageIndex: number;
  playing: boolean;
  musicPlaying: boolean;
  volume: number;
}

