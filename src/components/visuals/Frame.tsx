import { Img } from '../Img';
import { Tag } from './Tag';

type Props = { src: string; alt: string; tag: string | null; fit: 'cover' | 'contain'; sizes: string; eager?: boolean };

/** A 16:10 image with its tag. Cover-fit, or contain-fit inside a 1.5px frame for the SVG plan. */
export const Frame = ({ src, alt, tag, fit, sizes, eager }: Props) => (
  <div className={`relative aspect-[16/10] overflow-hidden ${fit === 'contain' ? 'border-rule border-current' : 'bg-ink'}`}>
    <Img
      src={src}
      alt={alt}
      sizes={sizes}
      eager={eager}
      className={`block h-full w-full ${fit === 'contain' ? 'object-contain p-3 pb-10' : 'object-cover'}`}
    />
    {tag && <Tag>{tag}</Tag>}
  </div>
);
