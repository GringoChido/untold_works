import { Tag } from './Tag';

const bigSize = (text: string): string => (text.length <= 6 ? 'text-[64px]' : text.length <= 11 ? 'text-[52px]' : 'text-[40px]');

/** A panel in the card color: the big line at width 125/900, the small line in italic 300. */
export const TypeVisual = ({ big, small, tag }: { big: string; small: string; tag: string | null }) => (
  <div className="relative flex aspect-auto min-h-[170px] flex-col justify-center gap-2.5 overflow-hidden border-rule border-current px-[22px] pb-[46px] pt-5 md:aspect-[16/10]">
    <span className={`display leading-[0.9] ${bigSize(big)}`}>{big}</span>
    <span className="voice text-[18px] leading-[1.25]">{small}</span>
    {tag && <Tag>{tag}</Tag>}
  </div>
);
