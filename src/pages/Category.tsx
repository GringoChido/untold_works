import { Link } from 'react-router-dom';
import editorial from '../data/editorial.json';
import { Card } from '../components/Card';
import { CategoryHero } from '../components/CategoryHero';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HouseBar } from '../components/HouseBar';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { categoryBySlug, nextCategory, type Project } from '../data/categories';
import { usePageMeta } from '../hooks/usePageMeta';

const pad = (n: number): string => String(n).padStart(2, '0');
type Editorial = { featured: string[]; engagements: { name: string; to: string; detail: string }[] };
const selection = editorial as Record<string, Editorial>;

const projectValue: Record<string, string> = {
  '/work/noxguard': 'A rebrand for the warehouse, the road and the distributor’s sales pitch.',
  '/work/spring-stuebner-store': '27 shoppable room stories connect a 34-station floor plan to products and showroom visits.',
  '/work/c-l-bailey-portal-and-concierge': 'AI answers room-fit questions; a private portal equips dealers with product and brand materials.',
  '/work/engine-room': 'One campaign record makes briefs, files, owners, schedules and social status visible to the team.',
  '/work/content-factory': 'AI-assisted posts move through product checks and human approval before scheduled publishing.',
  '/work/savor': 'Familiar food and chef content help explain a new process for making fats.',
  '/work/lalah-hathaway': 'An immersive artist experience, newsletter migration and custom merchandise operations, with public checkout awaiting launch.',
  '/work/second-son-productions': 'Seven artist pages give each project its own story and live-event path.',
  '/work/robtober': 'Five years of content for a residency with a different cast of collaborators each night.',
  '/work/home-field': 'AI-made rooms and film connect to a live offer page, scheduled social and sales capture.',
  '/work/black-radio-experience': 'Four years directing festival content in Napa Valley, from live performances to the audience experience.',
  '/work/savor-chef-series': 'Chef-led demonstrations show how an unfamiliar ingredient performs in working kitchens.',
};

const FeaturedGrid = ({ projects }: { projects: Project[] }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-9">
    {projects.map((project, index) => (
      <Card
        key={project.projectPage}
        name={project.name}
        caption={projectValue[project.projectPage]}
        visual={project.visual}
        facts={project.facts}
        nameTo={project.projectPage}
        eager={index < 2}
      />
    ))}
  </div>
);

export const Category = ({ slug }: { slug: string }) => {
  const category = categoryBySlug(slug);
  const next = nextCategory(category);
  const config = selection[category.slug];
  const all = [...category.music, ...category.projects];
  const featuredRoutes = new Set(config.featured);
  const featured = config.featured.flatMap((route) => all.filter((project) => project.projectPage === route));
  const supporting = all.filter((project) => !featuredRoutes.has(project.projectPage));

  usePageMeta({ title: category.name + ', Untold.works', description: category.intro, path: '/' + category.slug });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: category.name }]} />
      <main id="main" className="flex flex-col">
        <CategoryHero category={category} />

        <section className="flex flex-col gap-8 pb-20 md:pb-24" aria-labelledby="category-evidence-title">
          <LabelRow left={<span id="category-evidence-title">Featured projects</span>} />
          <FeaturedGrid projects={featured} />
        </section>

        <section className="pb-14 md:pb-20" aria-labelledby="category-engagements-title">
          <LabelRow left={<span id="category-engagements-title">Related engagements</span>} />
          {config.engagements.filter((item) => !featuredRoutes.has(item.to)).map((item) => (
            <Link key={item.to} to={item.to} className="grid items-baseline gap-2 border-b border-current py-5 no-underline md:grid-cols-2 md:gap-8">
              <strong className="name text-[clamp(23px,2.3vw,32px)] leading-[1.1]">{item.name} <span aria-hidden="true">↗</span></strong>
              <span className="max-w-prose text-[17px] leading-[1.45]">{item.detail}</span>
            </Link>
          ))}
        </section>

        <section className="pb-24 md:pb-32" aria-labelledby="category-more-title">
          <LabelRow left={<span id="category-more-title">More work in this area</span>} right={pad(supporting.length) + ' project records'} />
          <div className="border-b border-current">
            {supporting.map((project, index) => (
              <Link key={project.projectPage} to={project.projectPage} className="grid grid-cols-[46px_minmax(0,1fr)_minmax(160px,0.5fr)_24px] items-baseline gap-5 border-t border-current py-5 no-underline max-sm:grid-cols-[32px_minmax(0,1fr)_20px]">
                <span className="lbl">{pad(index + 1)}</span>
                <strong className="name text-[clamp(22px,2.2vw,32px)] leading-[1.05]">{project.name}</strong>
                <span className="text-[14px] leading-[1.35] max-sm:hidden">{project.visual.tag ?? 'Project record'}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← All work', to: '/' }} next={{ label: 'Next: ' + next.name + ' →', to: '/' + next.slug }} />
      <Footer />
    </Layout>
  );
};
