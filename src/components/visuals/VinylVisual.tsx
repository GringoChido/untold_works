import { Tag } from './Tag';

type Disc = { title: string; year: string; finish: string };

const parse = (disc: string): Disc => {
  const match = disc.match(/^(.*?) \((\d{4}), (.*)\)$/);
  return match ? { title: match[1], year: match[2], finish: match[3] } : { title: disc, year: '', finish: '' };
};

/** Edition colors as classes, so the prerendered markup carries no inline styles. */
const finishClasses = (finish: string): string => {
  if (finish.includes('tri-color')) return 'bg-[conic-gradient(#B5452F_0_33%,#E3B23C_0_66%,#2F6F5E_0)]';
  if (finish.includes('silver')) return 'bg-[radial-gradient(circle_at_35%_30%,#D9D9D9,#9A9A9A_70%)]';
  if (finish.includes('gold')) return 'bg-[radial-gradient(circle_at_35%_30%,#F0D27A,#B08A2E_70%)]';
  return 'bg-[rgba(80,140,220,0.55)] border-rule border-cream/60';
};

type Props = { discs: string[]; tag: string | null; size?: 'card' | 'page' };

/** Four discs in their edition colors, with labels. */
export const VinylVisual = ({ discs, tag, size = 'card' }: Props) => (
  <div
    className={`relative flex flex-col justify-center overflow-hidden border-rule border-current ${
      size === 'page' ? 'bg-teal px-7 pb-14 pt-7 text-cream' : 'aspect-auto px-4 pb-11 pt-4 md:aspect-[16/10]'
    }`}
  >
    <ul className="grid grid-cols-4 items-start gap-2.5" aria-label="Vinyl editions">
      {discs.map((disc) => {
        const { title, year, finish } = parse(disc);
        return (
          <li key={disc} className="flex min-w-0 flex-col items-center gap-2">
            <div
              role="img"
              aria-label={`${title}, ${year}, ${finish}`}
              className={`relative aspect-square w-full rounded-full shadow-[inset_0_0_0_1px_rgba(20,18,16,0.25)] ${finishClasses(finish)}`}
            >
              <div className="absolute inset-[36%] rounded-full bg-ink" />
              <div className="absolute inset-[47.5%] rounded-full bg-cream" />
            </div>
            <span
              className={`wdth-62 text-center font-semibold uppercase leading-[1.1] tracking-[0.06em] ${
                size === 'page' ? 'text-[13px]' : 'text-[11px]'
              }`}
            >
              <span className="block">{title}</span>
              <span className="block">{year}</span>
            </span>
          </li>
        );
      })}
    </ul>
    {tag && <Tag>{tag}</Tag>}
  </div>
);
