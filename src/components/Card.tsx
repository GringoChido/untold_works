import type { ReactNode } from 'react';
import { factHref, isExternal, slugify, type CardColor, type Fact, type Visual as VisualData } from '../data/categories';
import { FillLink } from './PageFill';
import { Visual } from './visuals/Visual';

type Props = {
  index: string;
  name: string;
  color: CardColor;
  visual: VisualData;
  barRight: ReactNode;
  caption?: string;
  facts?: Fact[];
  rows?: string[];
  to?: string;
  nameTo?: string;
  size?: 'home' | 'grid';
  eager?: boolean;
};

const hostOf = (href: string): string => new URL(href).hostname.replace(/^www\./, '');

const FactValue = ({ fact, color }: { fact: Fact; color: CardColor }) => {
  if (!fact.href) return <span>{fact.value}</span>;
  if (isExternal(fact.href)) {
    return (
      <a href={fact.href} target="_blank" rel="noopener noreferrer" aria-label={fact.value + ' ' + hostOf(fact.href)} className="underline underline-offset-4">
        {fact.value}
      </a>
    );
  }
  return <FillLink to={factHref(fact.href)} color={color} className="underline underline-offset-4">{fact.value}</FillLink>;
};

/** The category index stays uniform so each project's own imagery can lead. */
export const Card = ({ index, name, color, visual, barRight, caption, facts, rows, to, nameTo, size = 'grid', eager }: Props) => {
  const home = size === 'home';
  const sizes = home ? '(min-width: 900px) 45vw, 100vw' : '(min-width: 768px) 48vw, 100vw';
  const titleClass = name.length > 24 ? 'text-[29px]' : 'text-[34px]';

  const body = (
    <div className="catalog-card-body flex grow flex-col gap-4 p-5 md:p-6">
      <div className="flex items-baseline justify-between gap-4 border-b border-ink/35 pb-3">
        <span className="lbl">{index}</span>
        <span className="lbl">Selected work</span>
      </div>
      {nameTo ? (
        <FillLink to={nameTo} color={color} aria-label={`Open ${name} project`} className="block no-underline">
          <Visual visual={visual} sizes={sizes} size={size} eager={eager} />
        </FillLink>
      ) : <Visual visual={visual} sizes={sizes} size={size} eager={eager} />}
      <div className="flex flex-col gap-2">
        <h2 className={['name', 'm-0', 'leading-[1.02]', titleClass].join(' ')}>
          {nameTo ? <FillLink to={nameTo} color={color} className="no-underline">{name}</FillLink> : name}
        </h2>
        {caption && <p className="voice m-0 text-[20px] leading-[1.3]">{caption}</p>}
      </div>
      {(rows?.length || facts?.length) ? (
        <div className="rows mt-auto pt-4">
          {rows?.map((row) => <div key={row}><span>{row}</span></div>)}
          {facts?.map((fact) => (
            <div key={fact.label}>
              <span>{fact.label}</span>
              <FactValue fact={fact} color={color} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );

  const end = (
    <div className="catalog-card-end flex items-center justify-between gap-5 border-t border-ink/35 px-5 py-4 text-[13px] font-medium md:px-6">
      <span>untold.works</span>
      <span>{nameTo ? <FillLink to={nameTo} color={color} className="underline underline-offset-4">Open project ↗</FillLink> : barRight}</span>
    </div>
  );

  return (
    <article id={slugify(name)} className="catalog-card flex scroll-mt-6 flex-col bg-cream text-ink">
      {to ? <FillLink to={to} color={color} className="flex grow flex-col no-underline">{body}{end}</FillLink> : <>{body}{end}</>}
    </article>
  );
};
