import { cardClasses, projectCount, type Category } from '../data/categories';
import { Chip } from './Chip';
import { LabelRow } from './LabelRow';

export const CategoryHero = ({ category }: { category: Category }) => (
  <section className={`mt-10 flex flex-col gap-[22px] px-6 pb-11 pt-10 md:px-12 ${cardClasses[category.color]}`}>
    <LabelRow left={`${category.index} / 04`} right={`${projectCount(category)} projects`} className="border-current" />
    <h1 className="display text-[clamp(36px,8vw,116px)]">{category.name}</h1>
    <p className="voice text-[clamp(24px,2.6vw,36px)] leading-[1.15]">{category.caption}</p>
    <div className="grid items-end gap-x-12 gap-y-[18px] pt-1.5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      <p className="max-w-[640px] text-[20px] leading-[1.5]">{category.intro}</p>
      <div className="flex flex-col gap-2.5 md:items-end">
        <span className="lbl text-[13px]">In the support system</span>
        <ul className="flex flex-wrap gap-2 md:justify-end" aria-label="Layers in the support system">
          {category.layers.map((layer) => (
            <li key={layer}>
              <Chip>{layer}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
