import { Fragment } from 'react';
import { Tag } from './Tag';

/** Stacked boxes with arrows between them. */
export const FlowVisual = ({ nodes, tag }: { nodes: string[]; tag: string | null }) => (
  <div className="relative flex aspect-auto flex-col justify-center overflow-hidden border-rule border-current px-8 pb-11 pt-3 md:aspect-[16/10] md:px-12">
    <div className="flex flex-col gap-[2px]">
      {nodes.map((node, i) => (
        <Fragment key={node}>
          {i > 0 && (
            <span aria-hidden="true" className="text-center text-[11px] font-semibold leading-none">
              ↓
            </span>
          )}
          <div className="node py-[3px] text-[11px] md:py-[5px] md:text-[12px]">{node}</div>
        </Fragment>
      ))}
    </div>
    {tag && <Tag>{tag}</Tag>}
  </div>
);
