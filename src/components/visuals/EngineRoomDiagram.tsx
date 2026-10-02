import { Tag } from './Tag';

type Props = { nodes: string[]; tag: string | null; size?: 'home' | 'grid' };

const Arrow = ({ children }: { children: string }) => (
  <span aria-hidden="true" className="flex items-center justify-center text-[14px] font-semibold">
    {children}
  </span>
);

/** Campaign calendar → Deliverable kits → Approval queue ↓, then Klaviyo email ← Content Factory (built by Brady) ← Facebook, Instagram. */
export const EngineRoomDiagram = ({ nodes, tag, size = 'grid' }: Props) => {
  const [calendar, kits, approval, klaviyo, factory, social] = nodes;
  const match = factory.match(/^(.*?) \((.*)\)$/);
  const factoryName = match ? match[1] : factory;
  const factoryNote = match ? match[2] : null;
  const node = size === 'home' ? 'node px-1.5 py-1.5 text-[11px] md:px-2 md:py-2.5 md:text-[14px]' : 'node px-1 py-1 text-[11px] md:px-2 md:py-[7px] md:text-[12px]';
  const row = 'grid grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)] items-stretch';

  return (
    <div
      className={`relative flex aspect-auto flex-col justify-center overflow-hidden bg-panel text-cream md:aspect-[16/10] ${
        size === 'home' ? 'gap-1.5 px-3 pb-12 pt-4 md:gap-2.5 md:px-6 md:pb-[52px] md:pt-6' : 'gap-1.5 px-3 pb-10 pt-3 md:gap-2 md:px-4 md:pt-[18px]'
      }`}
    >
      <div className={row}>
        <div className={node}>{calendar}</div>
        <Arrow>→</Arrow>
        <div className={node}>{kits}</div>
        <Arrow>→</Arrow>
        <div className={node}>{approval}</div>
      </div>
      <div className={row}>
        <span />
        <span />
        <span />
        <span />
        <Arrow>↓</Arrow>
      </div>
      <div className={row}>
        <div className={node}>{social}</div>
        <Arrow>←</Arrow>
        <div className={node}>
          {factoryName}
          {factoryNote && <span className="font-normal normal-case tracking-[0.02em]">{factoryNote}</span>}
        </div>
        <Arrow>←</Arrow>
        <div className={node}>{klaviyo}</div>
      </div>
      {tag && <Tag>{tag}</Tag>}
    </div>
  );
};
