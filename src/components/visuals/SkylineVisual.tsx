import { Img } from '../Img';
import { Tag } from './Tag';

/** Eight full-length page strips side by side, top-aligned, clipped by the frame. */
export const SkylineVisual = ({ images, tag }: { images: string[]; tag: string | null }) => (
  <div className="relative aspect-[16/10] overflow-hidden border-rule border-cream/35 bg-ink">
    <div className="grid grid-cols-8 items-start gap-x-2 px-3.5 pt-3.5">
      {images.map((src) => (
        <Img key={src} src={src} alt="" sizes="6vw" className="block h-auto w-full" />
      ))}
    </div>
    {tag && <Tag inverse>{tag}</Tag>}
  </div>
);
