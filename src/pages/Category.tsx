import { Card } from '../components/Card';
import { CategoryHero } from '../components/CategoryHero';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HouseBar } from '../components/HouseBar';
import { Layout } from '../components/Layout';
import { FillLink } from '../components/PageFill';
import { categoryBySlug, nextCategory, projectRoute, type Project } from '../data/categories';
import { usePageMeta } from '../hooks/usePageMeta';

const pad = (n: number): string => String(n).padStart(2, '0');

const Grid = ({ projects, eagerFirst = false }: { projects: Project[]; eagerFirst?: boolean }) => (
  <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
    {projects.map((project, i) => (
      <Card
        key={project.name}
        index={pad(project.order)}
        name={project.name}
        color={project.color}
        visual={project.visual}
        facts={project.facts}
        nameTo={projectRoute(project.projectPage) ?? undefined}
        barRight={`${pad(project.order)} / ${pad(projects.length)}`}
        eager={eagerFirst && i < 3}
      />
    ))}
  </div>
);

export const Category = ({ slug }: { slug: string }) => {
  const category = categoryBySlug(slug);
  const next = nextCategory(category);
  usePageMeta({ title: `${category.name}, Untold.works`, description: category.intro, path: `/${category.slug}` });

  return (
    <Layout rail={`Untold.works, ${category.name}`}>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: category.name }]} />
      <main id="main" className="flex flex-col">
        <CategoryHero category={category} />
        <section className="pb-24 pt-12" aria-label={`${category.name} projects`}>
          <Grid projects={category.projects} eagerFirst />
        </section>
        {category.music.length > 0 && (
          <section className="flex flex-col gap-7 pb-24" aria-labelledby="music-headline">
            <div className="grid items-end gap-x-10 gap-y-5 bg-ink px-6 py-9 text-cream md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:px-10">
              <div className="flex flex-col gap-3.5">
                <span className="lbl">Music · eight years</span>
                <h2 id="music-headline" className="display text-[clamp(40px,5vw,72px)] leading-[0.88]">
                  Robert Glasper and Blue Note
                </h2>
                <p className="voice text-[24px] leading-[1.3]">
                  Album releases, five Robtobers, a club opening in Los Angeles, and four years running content for the Black Radio
                  Experience.
                </p>
              </div>
              <FillLink to="/work/robert-glasper-blue-note" color="ink" className="lbl house-underline md:justify-self-end">
                Open the project →
              </FillLink>
            </div>
            <Grid projects={category.music} />
          </section>
        )}
      </main>
      <HouseBar back={{ label: '← All work', to: '/' }} next={{ label: `Next: ${next.name} →`, to: `/${next.slug}` }} />
      <Footer />
    </Layout>
  );
};
