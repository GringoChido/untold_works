import { Link } from 'react-router-dom';
import { factHref, isExternal, slugify, type Fact, type Visual as VisualData } from '../data/categories';
import { Visual } from './visuals/Visual';

type Props = {
  name: string;
  visual: VisualData;
  caption?: string;
  facts: Fact[];
  nameTo: string;
  eager?: boolean;
};

const hostOf = (href: string): string => new URL(href).hostname.replace(/^www\./, '');

const FactValue = ({ fact }: { fact: Fact }) => {
  if (!fact.href) return <span>{fact.value}</span>;
  if (isExternal(fact.href)) {
    return (
      <a href={fact.href} target="_blank" rel="noopener noreferrer" aria-label={fact.value + ' ' + hostOf(fact.href)} className="underline underline-offset-4">
        {fact.value}
      </a>
    );
  }
  return <Link to={factHref(fact.href)} className="underline underline-offset-4">{fact.value}</Link>;
};

export const Card = ({ name, visual, caption, facts, nameTo, eager }: Props) => (
  <article id={slugify(name)} className="catalog-card flex scroll-mt-6 flex-col bg-cream text-ink">
    <div className="catalog-card-body flex grow flex-col gap-4 p-5 md:p-6">
      <Link to={nameTo} aria-label={`Open ${name} project`} className="block no-underline">
        <Visual visual={visual} sizes="(min-width: 768px) 48vw, 100vw" size="grid" eager={eager} />
      </Link>
      <div>
        <h2 className="name m-0 text-[clamp(26px,2.7vw,36px)] leading-[1.05]">
          <Link to={nameTo} className="no-underline">{name} <span aria-hidden="true">↗</span></Link>
        </h2>
        {caption && <p className="voice mb-0 mt-3 max-w-prose text-[20px] leading-[1.32]">{caption}</p>}
      </div>
      <details className="mt-auto border-t border-current">
        <summary className="cursor-pointer py-3 text-[15px] font-semibold">Project facts</summary>
        <div className="rows">
          {facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><FactValue fact={fact} /></div>)}
        </div>
      </details>
    </div>
  </article>
);
