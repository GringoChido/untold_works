import { projectCount, type Category } from '../data/categories';
import { Chip } from './Chip';
import { LabelRow } from './LabelRow';

export const CategoryHero = ({ category }: { category: Category }) => (
  <section className="category-hero flex flex-col gap-8 pb-14 pt-16 md:pb-20 md:pt-24">
    <LabelRow left={`${category.index} / 04`} right={`${projectCount(category)} project records`} />
    <h1 className="display max-w-[1180px] text-[clamp(58px,9vw,132px)]">{category.name}</h1>
    <div className="grid items-start gap-x-16 gap-y-8 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
      <p className="chapter-statement m-0 max-w-[700px] text-[clamp(35px,4vw,56px)] leading-[1.05]">{category.caption}</p>
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
