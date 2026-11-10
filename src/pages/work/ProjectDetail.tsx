import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShopifyShowcase } from './ShopifyShowcase';
import { NotFound } from '../NotFound';
import { CaseFilm } from '../../components/CaseFilm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { Visual } from '../../components/visuals/Visual';
import { caseCopy } from '../../data/caseCopy';
import { cardClasses, factHref, isExternal, projectEntries, slugify, type Project } from '../../data/categories';
import { usePageMeta } from '../../hooks/usePageMeta';

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

const HomeFieldFilm = ({ project }: { project: Project }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <figure id="home-field-film" className="m-0">
      {playing ? (
        <iframe
          className="block aspect-video w-full border-0 bg-ink"
          src="https://www.youtube-nocookie.com/embed/PQPKLvWnTHc?autoplay=1&playsinline=1"
          title="Shoot Pool, Not People! by Billiard Factory"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="relative block aspect-video w-full overflow-hidden bg-ink text-left" onClick={() => setPlaying(true)} aria-label="Play Shoot Pool, Not People!">
          {project.visual.type === 'image' && <Img src={project.visual.src} alt={project.visual.alt} sizes="(min-width: 1440px) 1312px, 100vw" eager className="absolute inset-0 h-full w-full object-cover" />}
          <span className="absolute bottom-4 left-4 bg-ink px-5 py-3 font-semibold text-cream md:bottom-7 md:left-7"><span aria-hidden="true">▶ </span>Play film</span>
        </button>
      )}
      <figcaption className="flex flex-wrap items-baseline justify-between gap-3 border-b border-current py-4">
        <span className="name text-[24px] leading-tight">Shoot Pool, Not People!</span>
        <a className="text-link" href="https://www.youtube.com/watch?v=PQPKLvWnTHc" target="_blank" rel="noopener noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
      </figcaption>
    </figure>
  );
};

export const ProjectDetail = () => {
  const { pathname } = useLocation();
  const index = projectEntries.findIndex(({ project }) => project.projectPage === pathname);
  const entry = projectEntries[index];
  const copy = entry && caseCopy[`${entry.category.slug}/${slugify(entry.project.name)}`];

  usePageMeta({
    title: entry ? `${entry.project.name}, Untold.works` : 'Page not found | Untold.works',
    description: copy?.lead ?? 'This page could not be found. Explore my work or get in touch.',
    path: pathname,
    noindex: !entry || !copy,
  });

  if (!entry || !copy) return <NotFound />;

  const { category, project } = entry;
  const parent = copy.parent ?? { label: category.name, to: `/${category.slug}` };
  const next = projectEntries[(index + 1) % projectEntries.length];
  const nextTarget = copy.next ?? { label: next.project.name, to: next.project.projectPage };
  const live = project.facts.find((fact) => fact.href && isExternal(fact.href));
  const destinationLabel = live?.label === 'Preview' ? 'View preview ↗' : live?.value.startsWith('Live') ? 'View live work ↗' : 'View project ↗';

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/' }, parent, { label: project.name }]} />
      <main id="main" className="flex flex-col">
        {project.projectPage === '/work/off-storis' ? <ShopifyShowcase /> : (
          <>
            <section className="pb-8 pt-10 md:pb-10 md:pt-14" aria-labelledby="project-title">
              <p className="lbl m-0 text-[13px]">{project.name}</p>
              <h1 id="project-title" className="display m-0 mt-5 max-w-[1180px] break-words text-[clamp(49px,6.3vw,96px)] leading-[0.92]">
                {copy.headline}
              </h1>
              <div className="mt-6 flex max-w-[890px] flex-col items-start gap-4">
                <p className="voice m-0 text-[clamp(21px,2vw,28px)] leading-[1.32]">{copy.lead}</p>
                {copy.films?.length ? <a href="#project-films" className="text-link">{copy.films.length > 1 ? 'Watch the films' : 'Watch the film'} <span aria-hidden="true">↓</span></a> : null}
              </div>
            </section>

            {project.projectPage === '/work/home-field' ? <HomeFieldFilm project={project} /> : (
            <figure className="m-0">
              <ProjectVisual project={project} poster={copy.visualLayout === 'poster'} />
              <figcaption className="lbl flex flex-wrap items-center justify-between gap-4 border-b border-current py-4 text-[13px]">
                <span className="flex flex-col gap-2">
                  <span>{`${project.name} / ${category.name}${project.visual.tag ? ` / ${project.visual.tag}` : ''}`}</span>
                  {copy.visualCredit && <span>{copy.visualCredit}</span>}
                </span>
                {live && <a href={live.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{destinationLabel}</a>}
              </figcaption>
            </figure>
            )}
          </>
        )}

        <section className="py-10 md:py-14" aria-labelledby="project-story-title">

          <div>
            <h2 id="project-story-title" className="name m-0 max-w-[930px] text-[clamp(38px,4.2vw,64px)] leading-[0.98]">
              {copy.storyTitle}
            </h2>
            <p className="voice m-0 mt-7 max-w-[850px] text-[clamp(19px,1.8vw,24px)] leading-[1.48]">{copy.story}</p>
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
            <LabelRow left={<span id="project-details-title">A closer look</span>} />
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

        <details className="mb-12 border-y border-current md:mb-16">
          <summary id="project-record-title" className="name cursor-pointer py-5 text-[clamp(23px,2.2vw,32px)]">Project details &amp; credits</summary>
          <div className="grid gap-8 pb-8 md:grid-cols-2 md:gap-16">
            <dl id="project-focus-title" className="m-0">
              {copy.focus.map((item) => (
                <div key={item.label} className="border-t border-current py-4">
                  <dt className="lbl text-[13px]">{item.label}</dt>
                  <dd className="m-0 mt-2 max-w-prose text-[17px] leading-[1.45]">{item.text}</dd>
                </div>
              ))}
            </dl>
            <dl className="m-0 border-b border-current">
              {project.facts.map((fact) => (
                <div key={fact.label} className="grid gap-2 border-t border-current py-4 sm:grid-cols-[minmax(130px,0.65fr)_minmax(0,1.35fr)] sm:gap-8">
                  <dt className="lbl text-[13px]">{fact.label}</dt>
                  <dd className="m-0 text-[18px] leading-[1.4]">
                    {fact.href ? (
                      isExternal(fact.href) ?
                        <a href={fact.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{fact.value}</a> :
                        <Link to={factHref(fact.href)} className="underline underline-offset-4">{fact.value}</Link>
                    ) : fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </details>

        {copy.links && copy.links.length > 0 && (
          <section className="flex flex-col gap-4 pb-10 md:pb-14" aria-labelledby="project-links-title">
            <LabelRow left={<span id="project-links-title">See the work</span>} right="Projects & destinations" />
            <div className="grid gap-x-12 md:grid-cols-2">
              {copy.links.map((link) => isExternal(link.href) ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="name flex items-baseline justify-between gap-6 border-b border-current py-4 text-[clamp(20px,2vw,28px)] leading-[1.08] no-underline">
                  <span>{link.label.replace(/\s*↗$/, '')}</span><span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link key={link.href} to={link.href} className="name flex items-baseline justify-between gap-6 border-b border-current py-4 text-[clamp(20px,2vw,28px)] leading-[1.08] no-underline">
                  <span>{link.label}</span><span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
        <p className="m-0 pb-12 md:pb-16"><Link to="/work-together#contact" className="text-link">Talk with me about your project <span aria-hidden="true">↗</span></Link></p>
      </main>
      <HouseBar back={{ label: `← ${parent.label}`, to: parent.to }} next={{ label: `Next: ${nextTarget.label} →`, to: nextTarget.to }} />
      <Footer />
    </Layout>
  );
};
