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
import { toneForCategory } from '../theme';

const pad = (n: number): string => String(n).padStart(2, '0');
type Editorial = { featured: string[]; engagements: { name: string; to: string; detail: string }[] };
const selection = editorial as Record<string, Editorial>;

const projectValue: Record<string, string> = {
  '/work/spring-stuebner-store': '27 shoppable room stories connect a 34-station floor plan to products and showroom visits.',
  '/work/c-l-bailey-portal-and-concierge': 'AI answers room-fit questions; a private portal equips dealers with product and brand materials.',
  '/work/engine-room': 'One campaign record makes briefs, files, owners, schedules and social status visible to the team.',
  '/work/content-factory': 'AI-assisted posts move through product checks and human approval before scheduled publishing.',
  '/work/savor': 'Familiar food and chef content help explain a new process for making fats.',
  '/work/lalah-hathaway': 'Seven objects in one photograph lead fans to music, video, tour, merch and contact.',
  '/work/second-son-productions': 'Seven artist pages give each project its own story and live-event path.',
  '/work/robtober': 'Five years of content documents a residency that changes collaborators night by night.',
  '/work/home-field': 'AI-made rooms and film connect to a live offer page, scheduled social and sales capture.',
  '/work/black-radio-experience': 'Four years of content direction documents performances and the Napa audience experience.',
  '/work/savor-chef-series': 'Chef-led demonstrations show how an unfamiliar ingredient performs in working kitchens.',
};

const FeaturedGrid = ({ projects }: { projects: Project[] }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-9">
    {projects.map((project, index) => (
      <Card
        key={project.projectPage}
        index={pad(index + 1)}
        name={project.name}
        caption={projectValue[project.projectPage]}
        color={project.color}
        visual={project.visual}
        facts={project.facts}
        nameTo={project.projectPage}
        barRight={pad(index + 1) + ' / ' + pad(projects.length)}
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
  const featured = all.filter((project) => featuredRoutes.has(project.projectPage));
  const supporting = all.filter((project) => !featuredRoutes.has(project.projectPage));

  usePageMeta({ title: category.name + ', Untold.works', description: category.intro, path: '/' + category.slug });

  return (
    <Layout tone={toneForCategory(category.slug)}>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: category.name }]} />
      <main id="main" className="flex flex-col">
        <CategoryHero category={category} />

        <section className="flex flex-col gap-8 border-t border-current pb-20 pt-10 md:pb-24" aria-labelledby="category-engagements-title">
          <LabelRow left={<span id="category-engagements-title">Lead engagements</span>} right={pad(config.engagements.length) + ' connected cases'} />
          <div className="grid gap-5 md:grid-cols-2">
            {config.engagements.map((caseItem, index) => (
              <Link key={caseItem.to} to={caseItem.to} className="group flex min-h-[230px] flex-col justify-between gap-10 border border-current p-6 no-underline md:p-8">
                <span className="lbl">{pad(index + 1) + ' / Case study'}</span>
                <div>
                  <h2 className="name m-0 max-w-[680px] text-[clamp(32px,3.3vw,50px)] leading-[1]">{caseItem.name}</h2>
                  <p className="m-0 mt-4 max-w-[560px] text-[18px] leading-[1.4]">{caseItem.detail}</p>
                </div>
                <span className="text-[15px] font-semibold underline underline-offset-4">Read the engagement ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 pb-20 md:pb-24" aria-labelledby="category-evidence-title">
          <LabelRow left={<span id="category-evidence-title">Featured projects</span>} right={pad(featured.length) + ' cases'} />
          <FeaturedGrid projects={featured} />
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
