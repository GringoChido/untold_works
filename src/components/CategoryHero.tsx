import { projectCount, type Category } from '../data/categories';
import { Chip } from './Chip';
import { LabelRow } from './LabelRow';

export const CategoryHero = ({ category }: { category: Category }) => (
  <section className="category-hero flex flex-col gap-5 pb-9 pt-9 md:pb-12 md:pt-12">
    <LabelRow left={`${category.index} / 04`} right={`${projectCount(category)} project records`} />
    <h1 className="display max-w-[1180px] text-[clamp(48px,7vw,96px)]">{category.name}</h1>
    <div className="grid items-start gap-x-16 gap-y-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <p className="chapter-statement m-0 max-w-[700px] text-[clamp(27px,3vw,42px)] leading-[1.05]">{category.caption}</p>
      <div className="flex flex-col gap-6">
        <p className="m-0 max-w-[540px] text-[20px] leading-[1.45]">{category.intro}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Areas of work">
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
