import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '../../components/Chip';
import { CaseFilm } from '../../components/CaseFilm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { FillLink } from '../../components/PageFill';
import { Frame } from '../../components/visuals/Frame';
import { Tag } from '../../components/visuals/Tag';
import { categoryBySlug } from '../../data/categories';
import { blackRadioRecap, rRNowFilm } from '../../data/musicMedia';
import { usePageMeta } from '../../hooks/usePageMeta';

const Fact = ({ label, children, last = false }: { label: string; children: ReactNode; last?: boolean }) => (
  <div className={`flex justify-between gap-4 border-t-rule border-cream py-[11px] ${last ? 'border-b-rule' : ''}`}>
    <span>{label}</span>
    <span className="text-right">{children}</span>
  </div>
);

const records = [
  { date: 'Oct 14, 2022', title: 'Black Radio III Supreme Edition', edition: '3LP colored vinyl', note: 'Black Radio III won the Grammy for Best R&B Album.' },
  { date: 'Jun 7, 2024', title: 'Let Go', edition: 'Limited edition silver vinyl', note: '' },
  { date: 'Aug 28, 2024', title: 'Code Derivation', edition: 'Limited edition gold vinyl', note: '' },
  { date: 'Oct 11, 2024', title: 'Keys to the City Volume One', edition: 'Limited edition translucent blue vinyl', note: 'Recorded at Blue Note New York during Robtober.' },
];

const selectedFilms = [
  {
    title: 'Behind the scenes of Code Derivation',
    context: 'Robert Glasper · Los Angeles',
    role: 'Creative direction and production',
    videoId: 'jQYjpCC3cyQ',
    href: 'https://www.youtube.com/watch?v=jQYjpCC3cyQ',
    detail: '/work/robert-glasper-album-releases',
  },
  {
    title: 'Color of Noize',
    context: 'Derrick Hodge · Angélique Kidjo · Carnegie Hall',
    role: 'Creative direction and production',
    videoId: 'ba3KhYBhMys',
    href: 'https://www.youtube.com/watch?v=ba3KhYBhMys',
    detail: '/work/color-of-noize',
  },
];

const londonPhotos = [
  { src: 'blue-note-london-arrivals.jpg', alt: 'Guests and a black taxi outside Blue Note London on opening night', caption: 'Opening-night arrivals' },
  { src: 'blue-note-london-marquee.jpg', alt: 'The illuminated Blue Note London marquee announcing the grand opening', caption: 'A new marquee in London' },
  { src: 'blue-note-london-opening.jpg', alt: 'Opening remarks on stage beneath the Blue Note London sign', caption: 'Inside the new room' },
];

const companyAndRosterSites = [
  { name: 'Second Son Productions', line: 'Company and artist site build · project preview', to: '/work/second-son-productions' },
  { name: 'Lalah Hathaway', line: 'Live Made in Chicago artist site, built with AI from supplied media', to: '/work/lalah-hathaway' },
  { name: 'Derrick Hodge', line: 'Artist site preview and Color of Noize tour content', to: '/work/derrick-hodge' },
];

const otherArtistSites = [
  { name: 'Elena Pinderhughes', line: 'Live site for her debut album and wider practice', to: '/work/elena-pinderhughes' },
  { name: 'Qmillion', line: 'Producer and mixer portfolio · project preview', to: '/work/qmillion' },
];

const SiteLinks = ({ sites }: { sites: typeof companyAndRosterSites }) => (
  <ul className="border-b-rule border-ink">
    {sites.map((site) => (
      <li key={site.name}>
        <FillLink to={site.to} color="burgundy" className="flex flex-col gap-2 border-t-rule border-ink py-[18px] no-underline">
          <span className="name text-[26px] leading-none tracking-[-0.02em]">{site.name}</span>
          <span className="voice text-[18px] leading-[1.3]">{site.line}</span>
        </FillLink>
      </li>
    ))}
  </ul>
);

export const GlasperBlueNote = () => {
  usePageMeta({
    title: 'Second Son Productions and related music work, Untold.works',
    description:
      'Joshua Semolik’s music work with Second Son Productions and artists including Robert Glasper, Lalah Hathaway, Derrick Hodge and Chief Adjuah, with related Blue Note venue and festival projects. Each project has its own role and client credit.',
    path: '/work/robert-glasper-blue-note',
  });
  const albumVisual = categoryBySlug('campaigns').music[0].visual;

  return (
    <Layout>
      <Header crumbs={[{ label: 'Selected work', to: '/' }, { label: 'Music work' }]} />
      <main id="main" className="flex flex-col">
        {/* The spread */}
        <section className="mt-10 grid bg-ink text-cream md:min-h-[860px] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" aria-labelledby="music-work-title">
          <div className="flex min-w-0 flex-col justify-between gap-7 px-6 py-10 md:px-12">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="lbl">Selected engagement</span>
                <Chip className="border-rule border-cream text-[14px] tracking-[0.08em]">Music</Chip>
              </div>
              <span className="lbl text-right text-[13px]">Artist sites · releases · live music</span>
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 id="music-work-title" className="display break-words text-[clamp(40px,5.2vw,80px)]">Second Son Productions &amp; related music work</h1>
              <p className="voice text-[26px] leading-[1.3]">
                Second Son is an artist management company. My work with its roster and related teams connects sites, releases, films, social content and Blue Note’s rooms and Napa festival.
              </p>
            </div>
            <div className="wdth-62 flex flex-col text-[16px] font-semibold uppercase leading-[1.15] tracking-[0.05em] md:text-[17px]">
              <Fact label="Company">Second Son Productions · site build</Fact>
              <Fact label="Robert Glasper">Four release teams · films · Robtober content</Fact>
              <Fact label="Chief Adjuah">Ongoing artist collaboration</Fact>
              <Fact label="Blue Note LA">Club launch and opening content</Fact>
              <Fact label="Blue Note Napa">Black Radio Experience · Content Director, four years</Fact>
              <Fact label="Artist sites" last>Lalah Hathaway · Derrick Hodge · Elena Pinderhughes · Qmillion</Fact>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-ink">
            <Img
              src="glasper-london-portrait.jpg"
              alt="Robert Glasper in denim and a cap against a blue curtain at Blue Note London"
              sizes="(min-width: 768px) 45vw, 100vw"
              eager
              className="absolute inset-0 block h-full w-full object-cover object-[50%_30%]"
            />
            <p className="absolute inset-x-0 bottom-0 m-0 bg-gradient-to-t from-ink/90 to-transparent px-6 pb-5 pt-16 text-[12px] leading-[1.5]">Blue Note London · September 23, 2026<br />Photography: Rob Jones / @hirobjones / @khromacollective</p>
          </div>
        </section>

        {/* Robert Glasper release work */}
        <section className="flex flex-col gap-7 pb-[88px] pt-24" aria-labelledby="records-headline">
          <LabelRow left={<span id="records-headline">Robert Glasper / records</span>} right="Release team" />
          <div className="grid gap-x-12 gap-y-5 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <h2 className="name max-w-[780px] text-[clamp(36px,4.4vw,62px)] leading-[0.98]">Four releases with distinct stories and editions.</h2>
            <p className="voice max-w-[510px] text-[22px] leading-[1.4]">I worked with the release team across four Robert Glasper records. Each needed its own identity and physical edition while remaining legible as part of his wider catalog.</p>
          </div>
          <div className="grid items-start gap-x-12 gap-y-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <ol className="border-b-rule border-ink">
              {records.map((record) => (
                <li
                  key={record.title}
                  className="grid items-baseline gap-x-7 gap-y-1.5 border-t-rule border-ink py-[18px] md:grid-cols-[180px_minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]"
                >
                  <span className="lbl text-[14px]">{record.date}</span>
                  <span className="name text-[30px] leading-none tracking-[-0.02em]">{record.title}</span>
                  <span className="lbl text-[14px]">{record.edition}</span>
                  <span className="voice text-[18px] leading-[1.3]">{record.note}</span>
                </li>
              ))}
            </ol>
            {albumVisual.type === 'image' && (
              <Frame src={albumVisual.src} alt={albumVisual.alt} tag={albumVisual.tag} fit={albumVisual.fit} sizes="(min-width: 768px) 40vw, 100vw" />
            )}
          </div>
          <p className="lbl text-[13px]">The image shows selected album artwork for Let Go and Code Derivation. The 2024 dates mark original album releases; the vinyl editions listed above are separate physical issues.</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-[16px] font-semibold">
            <Link to="/work/robert-glasper-album-releases" className="text-link">Explore the four releases <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        {/* Public films from the longer creative relationship */}
        <section className="flex flex-col gap-8 border-t border-ink pb-24 pt-8" aria-labelledby="music-films-headline">
          <LabelRow left={<span id="music-films-headline">Music / films and content production</span>} right="Selected public work" />
          <div className="grid gap-x-14 gap-y-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <h2 className="name max-w-[780px] text-[clamp(36px,4.4vw,62px)] leading-[0.98]">Content for releases, residencies and live events.</h2>
            <p className="voice max-w-[560px] text-[22px] leading-[1.4]">I develop concepts with release teams and labels, manage shoots and produce material artists can use to introduce a record, announce a show and document what happened on stage. The films below show specific examples and my credited role in each.</p>
          </div>
          <CaseFilm {...blackRadioRecap} />
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-[16px] font-semibold">
            <span>My role across the festival program: Content Director.</span>
            <Link to="/work/black-radio-experience" className="text-link">Explore the festival work <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {selectedFilms.map((film) => (
              <article key={film.videoId} className="flex min-w-0 flex-col gap-4 border-t border-ink pt-4">
                <a href={film.href} target="_blank" rel="noopener noreferrer" className="group block no-underline" aria-label={`Watch ${film.title} on YouTube`}>
                  <div className="relative aspect-video overflow-hidden bg-ink">
                    <img
                      src={`https://i.ytimg.com/vi/${film.videoId}/hqdefault.jpg`}
                      alt={`Video still from ${film.title}`}
                      loading="lazy"
                      decoding="async"
                      className="block h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span aria-hidden="true" className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full bg-cream text-ink shadow-lg">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-5"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </div>
                </a>
                <span className="lbl text-[12px]">{film.context}</span>
                <h3 className="name m-0 text-[clamp(26px,2.6vw,36px)] leading-[1.02]">{film.title}</h3>
                <p className="m-0 text-[17px] leading-[1.5]">{'My role: ' + film.role + '.'}</p>
                <div className="mt-auto flex flex-wrap gap-x-7 gap-y-2 text-[15px] font-semibold">
                  <a href={film.href} target="_blank" rel="noopener noreferrer" className="text-link">Watch film <span aria-hidden="true">↗</span></a>
                  <Link to={film.detail} className="text-link">Project context <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
          <CaseFilm {...rRNowFilm} />
          <div className="grid gap-x-14 gap-y-5 border-t border-ink pt-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <p className="voice m-0 max-w-[660px] text-[21px] leading-[1.4]">Earlier, I directed, shot and edited release films for the Robert Glasper Experiment’s <em>Art Science</em> and R+R=NOW.</p>
            <div className="flex flex-wrap items-start gap-x-8 gap-y-3 text-[16px] font-semibold">
              <a href="https://www.youtube.com/watch?v=wxZb1zpfM7s" target="_blank" rel="noopener noreferrer" className="text-link">Watch Art Science <span aria-hidden="true">↗</span></a>
              <a href="https://www.youtube.com/watch?v=xxGPdk9Yj_U" target="_blank" rel="noopener noreferrer" className="text-link">Watch R+R=NOW <span aria-hidden="true">↗</span></a>
              <Link to="/work/art-science-and-r-r-now-release-films" className="text-link">Explore the film project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <p className="lbl m-0 text-[12px] leading-[1.4]">Blue Note Jazz Festival presents the Black Radio Experience.</p>
        </section>

        {/* The rooms */}
        <section className="flex flex-col gap-8 bg-ink px-6 pb-16 pt-14 text-cream md:px-12" aria-labelledby="rooms-headline">
          <LabelRow left={<span id="rooms-headline">Blue Note / rooms and festival</span>} right="New York · Los Angeles · Napa Valley" className="border-cream/50" />
          <p className="voice max-w-[930px] text-[22px] leading-[1.4]">These were separate projects with Robert Glasper and Blue Note. Blue Note presents the Napa festival, with Glasper at its musical center.</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden bg-ink">
                <Img src="robtober-2026-poster-clean.png" alt="Robtober NYC 2026 Season 8 event poster announcing October 1 through November 1 and 11 episodes" sizes="(min-width: 768px) 30vw, 100vw" className="block h-auto w-full object-contain" />
              </div>
              <p className="lbl m-0 text-[12px] leading-[1.3] text-cream/70">Blue Note New York / Season 8 event artwork</p>
              <h2 className="name text-[32px] leading-none tracking-[-0.02em]">Robtober 2026</h2>
              <p className="text-[18px] leading-[1.5]">
                Season 8 runs October 1–November 1 with 11 episodes. My ongoing work with Glasper includes content across five years of the residency.
              </p>
              <Link to="/work/robtober" className="text-link mt-auto">Explore Robtober <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-burgundy">
                <Img src="blue-note-la-glasper.jpg" alt="Robert Glasper on stage at Blue Note Los Angeles on opening night" sizes="(min-width: 768px) 30vw, 100vw" className="block h-full w-full object-cover" />
                <Tag inverse>Opening night</Tag>
              </div>
              <p className="lbl m-0 text-[12px] leading-[1.3] text-cream/70">Photography: Todd Cooper / @toddcoop</p>
              <h2 className="name text-[32px] leading-none tracking-[-0.02em]">Blue Note Los Angeles</h2>
              <p className="text-[18px] leading-[1.5]">
                I worked on launch and opening content for the club. Glasper headlined its August 2025 grand opening.
              </p>
              <Link to="/work/blue-note-los-angeles" className="text-link mt-auto">Explore the launch content <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Img src="black-radio-experience-stage-clean.png" alt="The Black Radio Experience stage with festival signage above the performers and audience" sizes="(min-width: 768px) 30vw, 100vw" className="block h-full w-full object-contain" />
              </div>
              <p className="lbl m-0 text-[12px] leading-[1.3] text-cream/70">Black Radio Experience / Napa Valley</p>
              <h2 className="name text-[32px] leading-none tracking-[-0.02em]">Black Radio Experience</h2>
              <p className="text-[18px] leading-[1.5]">
                I served as Content Director for four years of Blue Note’s Napa Valley festival, curated by Glasper. It became the Black Radio Experience in 2024.
              </p>
              <Link to="/work/black-radio-experience" className="text-link mt-auto">Explore the festival work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-7 pb-24 pt-20" aria-labelledby="london-headline">
          <LabelRow left="Blue Note London" right="September 23, 2026" />
          <div className="grid gap-7 md:grid-cols-2">
            <h2 id="london-headline" className="name m-0 text-[clamp(36px,4.4vw,62px)] leading-[0.98]">Opening night in London.</h2>
            <p className="voice m-0 max-w-[600px] text-[22px] leading-[1.4]">Robert Glasper at the grand opening of Blue Note London. A look at the arrivals, the marquee and the room through the photography of Rob Jones.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {londonPhotos.map((photo) => (
              <figure key={photo.src} className="m-0 min-w-0">
                <Img src={photo.src} alt={photo.alt} sizes="(min-width: 768px) 33vw, 100vw" className="block aspect-[3/2] w-full bg-ink object-contain" />
                <figcaption className="lbl border-b border-current py-4 text-[12px]">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="lbl m-0 text-[12px]">Photography: Rob Jones / @hirobjones / @khromacollective</p>
        </section>

        <section id="chief-adjuah" className="flex scroll-mt-8 flex-col gap-7 border-t border-ink pb-24 pt-8" aria-labelledby="chief-adjuah-title">
          <LabelRow left="Second Son Productions" right="Artist collaboration" />
          <div className="grid items-center gap-x-14 gap-y-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <figure className="m-0 min-w-0">
              <Img src="chief-adjuah-live.jpg" alt="Chief Adjuah singing on stage with a gold-toned stringed instrument" sizes="(min-width: 768px) 60vw, 100vw" className="block aspect-[3/2] w-full bg-ink object-contain" />
              <figcaption className="lbl border-b border-current py-4 text-[12px]">Photography: Frédérique Ménard-Aubin</figcaption>
            </figure>
            <div className="flex flex-col items-start gap-7">
              <h2 id="chief-adjuah-title" className="name m-0 text-[clamp(36px,4.4vw,62px)] leading-[0.98]">Chief Adjuah</h2>
              <p className="voice m-0 max-w-[540px] text-[22px] leading-[1.4]">My work with Chief Adjuah is an ongoing part of my collaboration with Second Son Productions and its artists.</p>
              <Link to="/work/second-son-productions" className="text-link">Explore the Second Son site project <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>

        {/* Company, roster and other artist sites */}
        <section className="flex flex-col gap-7 pb-24 pt-[88px]" aria-labelledby="artist-sites-headline">
          <LabelRow left={<span id="artist-sites-headline">Company and artist sites</span>} right="Live work and project previews" />
          <div className="grid gap-x-16 gap-y-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <h2 className="name max-w-[680px] text-[clamp(34px,3.6vw,52px)] leading-[0.98]">Artist sites built around each artist’s work.</h2>
            <div className="flex max-w-[650px] flex-col gap-5">
              <p className="voice m-0 text-[22px] leading-[1.4]">Today, I use AI to build around artists’ own photography, film and music. Lalah Hathaway’s Made in Chicago site turns a supplied photograph into seven navigational objects leading to listening, video, touring, merchandise and contact.</p>
              <p className="m-0 text-[17px] leading-[1.5]">The Second Son company site and the artist projects below each have their own scope. Elena Pinderhughes and Qmillion are presented as separate artist collaborations.</p>
            </div>
          </div>
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h3 className="lbl text-[14px]">Second Son Productions and roster artists</h3>
              <SiteLinks sites={companyAndRosterSites} />
              <Frame src="color-of-noize.jpg" alt="Derrick Hodge conducting the Color of Noize orchestra" tag="Color of Noize tour" fit="cover" sizes="(min-width: 768px) 40vw, 100vw" />
              <p className="text-[18px] leading-[1.5]">I also made tour content for Derrick Hodge’s Color of Noize project.</p>
              <Link to="/work/color-of-noize" className="text-link self-start">Explore the tour work <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="lbl text-[14px]">Other artist collaborations</h3>
              <SiteLinks sites={otherArtistSites} />
            </div>
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Selected work', to: '/' }} next={{ label: 'Next: Billiard Factory landing pages →', to: '/work/landing-pages' }} />
      <Footer />
    </Layout>
  );
};
