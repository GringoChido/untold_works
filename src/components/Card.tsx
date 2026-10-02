import type { ReactNode } from 'react';
import { cardClasses, factHref, isExternal, slugify, type CardColor, type Fact, type Visual as VisualData } from '../data/categories';
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
  /** Home: the whole card opens the category. */
  to?: string;
  /** Grid: the name opens the project page. */
  nameTo?: string;
  size?: 'home' | 'grid';
  eager?: boolean;
};

const hostOf = (href: string): string => new URL(href).hostname.replace(/^www\./, '');

const FactValue = ({ fact, color }: { fact: Fact; color: CardColor }) => {
  if (!fact.href) return <span>{fact.value}</span>;
  if (isExternal(fact.href)) {
    return (
      <a href={fact.href} target="_blank" rel="noopener noreferrer" aria-label={`${fact.value} ${hostOf(fact.href)}`} className="no-underline">
        {fact.value}
      </a>
    );
  }
  return (
    <FillLink to={factHref(fact.href)} color={color} className="no-underline">
      {fact.value}
    </FillLink>
  );
};

/** A project or category card: index, name, caption, visual, fact rows, house bar. Hover lifts it 4px. */
export const Card = ({ index, name, color, visual, barRight, caption, facts, rows, to, nameTo, size = 'grid', eager }: Props) => {
  const home = size === 'home';
  const sizes = home ? '(min-width: 900px) 45vw, 100vw' : '(min-width: 1100px) 30vw, (min-width: 768px) 45vw, 100vw';
  const nameSize = home ? 'text-[44px] md:text-[68px]' : name.length > 20 ? 'text-[32px]' : 'text-[36px]';

  const body = (
    <div className={`flex grow flex-col ${home ? 'gap-4 p-6 pb-0' : 'gap-3.5 p-5 pb-0'}`}>
      <span className="lbl text-[14px]">{index}</span>
      <h2 className={`name flex min-h-[1.84em] items-end ${nameSize}`}>
        {nameTo ? (
          <FillLink to={nameTo} color={color} className="no-underline">
            {name}
          </FillLink>
        ) : (
          name
        )}
      </h2>
      {caption && <p className="voice text-[24px] leading-[1.25]">{caption}</p>}
      <Visual visual={visual} sizes={sizes} size={size} eager={eager} />
      <div className={`rows ${home ? '' : 'text-[15px]'}`}>
        {rows?.map((row) => (
          <div key={row}>
            <span>{row}</span>
          </div>
        ))}
        {facts?.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <FactValue fact={fact} color={color} />
          </div>
        ))}
      </div>
    </div>
  );

  const bar = (
    <div className={`bar mt-6 ${home ? 'px-6' : 'px-5'} ${color === 'ink' ? 'border-t border-cream/35' : ''}`}>
      <span>Untold.works</span>
      <span>{barRight}</span>
    </div>
  );

  return (
    <article
      id={slugify(name)}
      className={`flex scroll-mt-6 flex-col transition-transform duration-200 ease-out hover:-translate-y-1 ${cardClasses[color]}`}
    >
      {to ? (
        <FillLink to={to} color={color} className="flex grow flex-col no-underline">
          {body}
          {bar}
        </FillLink>
      ) : (
        <>
          {body}
          {bar}
        </>
      )}
    </article>
  );
};
