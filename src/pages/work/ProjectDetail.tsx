import { Navigate, useLocation } from 'react-router-dom';
import { CaseFilm } from '../../components/CaseFilm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { FillLink } from '../../components/PageFill';
import { Visual } from '../../components/visuals/Visual';
import { caseCopy } from '../../data/caseCopy';
import { cardClasses, factHref, isExternal, projectEntries, slugify, type Project } from '../../data/categories';
import { usePageMeta } from '../../hooks/usePageMeta';
import { toneForCategory } from '../../theme';

const ProjectVisual = ({ project, poster = false }: { project: Project; poster?: boolean }) => {
  const visual = project.visual;
  if (visual.type === 'image') {
    return (
      <div className={`overflow-hidden bg-ink ${poster ? 'p-3 md:p-8' : ''}`}>
        <Img
          src={visual.src}
          alt={visual.alt}
          sizes={poster ? '(min-width: 768px) 700px, 100vw' : '(min-width: 1440px) 1312px, 100vw'}
          eager
          className={poster ? 'mx-auto block h-auto w-full max-w-[700px] object-contain' : `block aspect-[16/10] w-full ${visual.fit === 'contain' ? 'bg-cream object-contain p-4 md:p-10' : 'object-cover'}`}
        />
      </div>
    );
  }

  return (
    <div className={`flex min-h-[360px] items-center justify-center p-5 md:min-h-[640px] md:p-16 ${cardClasses[project.color]}`}>
      <div className="w-full max-w-[960px]">
        <Visual visual={visual} sizes="(min-width: 768px) 960px, 100vw" size="home" eager />
      </div>
    </div>
  );
};

export const ProjectDetail = () => {
  const { pathname } = useLocation();
  const index = projectEntries.findIndex(({ project }) => project.projectPage === pathname);
  const entry = projectEntries[index];
  const copy = entry && caseCopy[`${entry.category.slug}/${slugify(entry.project.name)}`];

  usePageMeta({
    title: entry ? `${entry.project.name}, Untold.works` : 'Work, Untold.works',
    description: copy?.lead ?? 'Selected work by Joshua Semolik.',
    path: pathname,
  });

  if (!entry || !copy) return <Navigate to="/" replace />;

  const { category, project } = entry;
  const parent = copy.parent ?? { label: category.name, to: `/${category.slug}` };
  const next = projectEntries[(index + 1) % projectEntries.length];
  const nextTarget = copy.next ?? { label: next.project.name, to: next.project.projectPage };
  const live = project.facts.find((fact) => fact.href && isExternal(fact.href));

  return (
    <Layout tone={toneForCategory(category.slug)}>
      <Header crumbs={[{ label: 'Work', to: '/' }, parent, { label: project.name }]} />
      <main id="main" className="flex flex-col">
        <section className="grid gap-8 pb-11 pt-12 md:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] md:items-end md:gap-16 md:pb-16 md:pt-20" aria-labelledby="project-title">
          <div className="flex flex-col gap-5">
            <p className="lbl m-0 text-[13px]">{`${category.index} / ${category.name} · ${String(project.order).padStart(2, '0')}`}</p>
            <h1 id="project-title" className="display m-0 max-w-[900px] break-words text-[clamp(49px,6.6vw,103px)] leading-[0.92]">
              {copy.headline}
            </h1>
          </div>
          <div className="flex max-w-[440px] flex-col gap-5 border-t border-current pt-5">
            <span className="name text-[clamp(22px,2.1vw,30px)] leading-[1.05]">{project.name}</span>
            <p className="voice m-0 text-[clamp(22px,2.2vw,30px)] leading-[1.28]">{copy.lead}</p>
            {copy.films && copy.films.length > 0 && <a href="#project-films" className="text-link self-start">{copy.films.length > 1 ? 'Watch the films' : 'Watch the film'} <span aria-hidden="true">↓</span></a>}
          </div>
        </section>

        <figure className="m-0">
          <ProjectVisual project={project} poster={copy.visualLayout === 'poster'} />
          <figcaption className="lbl flex flex-wrap items-center justify-between gap-4 border-b border-current py-4 text-[13px]">
            <span className="flex flex-col gap-2">
              <span>{`${project.name} / ${category.name}${project.visual.tag ? ` / ${project.visual.tag}` : ''}`}</span>
              {copy.visualCredit && <span>{copy.visualCredit}</span>}
            </span>
            {live && <a href={live.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{live.label === 'Preview' ? 'View preview ↗' : 'View live work ↗'}</a>}
          </figcaption>
        </figure>

        <section className="grid gap-x-16 gap-y-9 pb-20 pt-20 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:pb-28 md:pt-28" aria-labelledby="project-story-title">
          <div className="flex flex-col gap-7">
            <LabelRow left="The work" right={project.visual.tag ?? 'Selected project'} />
            <h2 id="project-story-title" className="name m-0 max-w-[540px] text-[clamp(38px,4.2vw,64px)] leading-[0.98]">
              {copy.storyTitle}
            </h2>
          </div>
          <div className="flex max-w-[690px] flex-col gap-8 md:pt-14">
            <p className="voice m-0 text-[clamp(24px,2.6vw,36px)] leading-[1.27]">{copy.story}</p>
            <div className="border-t border-current pt-5">
              <span className="lbl text-[12px]">Why this work matters</span>
              <p className="m-0 mt-4 text-[19px] leading-[1.5]">{copy.value}</p>
            </div>
          </div>
        </section>

        {copy.films && copy.films.length > 0 && (
          <section id="project-films" className="flex scroll-mt-6 flex-col gap-7 pb-20 md:pb-28" aria-labelledby="project-films-title">
            <LabelRow left={<span id="project-films-title">Watch the work</span>} right="Selected films" />
            {copy.films.map((film) => <CaseFilm key={film.id} {...film} />)}
          </section>
        )}

        {copy.gallery && copy.gallery.length > 0 && (
          <section className="flex flex-col gap-7 pb-20 md:pb-28" aria-labelledby="project-gallery-title">
            <LabelRow left={<span id="project-gallery-title">The visual record</span>} right={copy.galleryNote ?? 'Project imagery'} />
            <div className="grid gap-6 md:grid-cols-3">
              {copy.gallery.map((item) => (
                <figure key={item.src} className={`m-0 min-w-0 ${item.layout === 'wide' ? 'md:col-span-3' : ''}`}>
                  <div className={`overflow-hidden bg-cream ${item.layout === 'wide' ? 'aspect-[16/9]' : item.layout === 'landscape' ? 'aspect-[3/2]' : 'aspect-[4/5]'}`}>
                    <Img
                      src={item.src}
                      alt={item.alt}
                      sizes={item.layout === 'wide' ? '(min-width: 1440px) 1312px, 100vw' : '(min-width: 768px) 33vw, 100vw'}
                      className={`block h-full w-full ${item.fit === 'contain' || item.layout === 'wide' || item.layout === 'landscape' ? 'object-contain' : 'object-cover'}`}
                    />
                  </div>
                  <figcaption className="lbl border-b border-current py-4 text-[13px]">{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {copy.details && copy.details.length > 0 && (
          <section className="flex flex-col gap-7 pb-20 md:pb-28" aria-labelledby="project-details-title">
            <LabelRow left={<span id="project-details-title">A closer look</span>} right={`${String(copy.details.length).padStart(2, '0')} parts`} />
            <div className="border-b border-current">
              {copy.details.map((detail, detailIndex) => (
                <article key={`${detail.eyebrow}-${detailIndex}`} className="grid gap-5 border-t border-current py-8 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.82fr)_minmax(0,1.1fr)] md:gap-10 md:py-10">
                  <span className="lbl pt-1 text-[13px]">{`${String(detailIndex + 1).padStart(2, '0')} / ${detail.eyebrow}`}</span>
                  <h3 className="name m-0 max-w-[440px] text-[clamp(28px,2.8vw,42px)] leading-[1.06]">{detail.title}</h3>
                  <p className="m-0 max-w-[620px] text-[18px] leading-[1.55]">{detail.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="flex flex-col gap-9 pb-20 md:pb-28" aria-labelledby="project-focus-title">
          <LabelRow left={<span id="project-focus-title">Inside the project</span>} right={`${String(copy.focus.length).padStart(2, '0')} details`} />
          <div className="grid gap-x-16 gap-y-9 md:grid-cols-2">
            {copy.focus.map((item, itemIndex) => (
              <div key={item.label} className="flex flex-col gap-5 border-t border-current pt-5">
                <span className="lbl text-[13px]">{`${String(itemIndex + 1).padStart(2, '0')} / ${item.label}`}</span>
                <p className="name m-0 max-w-[570px] text-[clamp(25px,2.7vw,37px)] leading-[1.13]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 pb-24 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-16 md:pb-32" aria-labelledby="project-record-title">
          <div>
            <LabelRow left="Project record" right="Selected facts" />
            <h2 id="project-record-title" className="name m-0 pt-7 text-[clamp(37px,4.2vw,62px)] leading-[0.98]">At a glance.</h2>
          </div>
          <dl className="m-0 border-b border-current">
            {project.facts.map((fact) => (
              <div key={fact.label} className="grid gap-2 border-t border-current py-4 sm:grid-cols-[minmax(130px,0.65fr)_minmax(0,1.35fr)] sm:gap-8">
                <dt className="lbl text-[13px]">{fact.label}</dt>
                <dd className="m-0 text-[18px] leading-[1.4]">
                  {fact.href ? (
                    isExternal(fact.href) ?
                      <a href={fact.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{fact.value}</a> :
                      <FillLink to={factHref(fact.href)} color={project.color} className="underline underline-offset-4">{fact.value}</FillLink>
                  ) : fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {copy.links && copy.links.length > 0 && (
          <section className="flex flex-col gap-7 pb-24 md:pb-32" aria-labelledby="project-links-title">
            <LabelRow left={<span id="project-links-title">See the work</span>} right="Projects & destinations" />
            <div className="grid gap-x-12 md:grid-cols-2">
              {copy.links.map((link) => isExternal(link.href) ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="name flex items-baseline justify-between gap-6 border-b border-current py-6 text-[clamp(24px,2.5vw,36px)] leading-[1.08] no-underline">
                  <span>{link.label.replace(/\s*↗$/, '')}</span><span aria-hidden="true">↗</span>
                </a>
              ) : (
                <FillLink key={link.href} to={link.href} color={project.color} className="name flex items-baseline justify-between gap-6 border-b border-current py-6 text-[clamp(24px,2.5vw,36px)] leading-[1.08] no-underline">
                  <span>{link.label}</span><span aria-hidden="true">→</span>
                </FillLink>
              ))}
            </div>
          </section>
        )}
      </main>
      <HouseBar back={{ label: `← ${parent.label}`, to: parent.to }} next={{ label: `Next: ${nextTarget.label} →`, to: nextTarget.to }} />
      <Footer />
    </Layout>
  );
};
