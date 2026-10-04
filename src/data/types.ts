export type CardColor = 'sage' | 'ochre' | 'teal' | 'burgundy' | 'ink';

export type Fact = { label: string; value: string; href?: string };

export type Visual =
  | { type: 'image'; src: string; alt: string; tag: string | null; fit: 'cover' | 'contain' }
  | { type: 'type'; big: string; small: string; tag: string | null }
  | { type: 'flow'; nodes: string[]; tag: string | null }
  | { type: 'engine-room-diagram'; nodes: string[]; tag: string | null }
  | { type: 'skyline'; images: string[]; tag: string | null }
  | { type: 'vinyl'; discs: string[]; tag: string | null };

export type Project = {
  order: number;
  name: string;
  color: CardColor;
  visual: Visual;
  facts: Fact[];
  projectPage: string;
};

export type Category = {
  slug: string;
  index: string;
  name: string;
  color: CardColor;
  caption: string;
  intro: string;
  layers: string[];
  projects: Project[];
  music: Project[];
};
