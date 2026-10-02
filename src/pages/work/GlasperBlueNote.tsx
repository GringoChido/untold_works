import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '../../components/Chip';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { FillLink } from '../../components/PageFill';
import { Stamp } from '../../components/Stamp';
import { Frame } from '../../components/visuals/Frame';
import { Tag } from '../../components/visuals/Tag';
import { VinylVisual } from '../../components/visuals/VinylVisual';
import { categoryBySlug } from '../../data/categories';
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
  { date: 'Aug 22, 2025', title: 'Code Derivation', edition: 'Limited edition gold vinyl', note: '' },
  { date: 'Oct 10, 2025', title: 'Keys to the City Volume One', edition: 'Limited edition translucent blue vinyl', note: '' },
];

const roster = [
  { name: 'Derrick Hodge', line: 'Color of Noize tour content, and his artist site.', to: '/websites#derrick-hodge' },
  { name: 'Lalah Hathaway', line: 'Made in Chicago, an interactive site built around one music room.', to: '/websites#lalah-hathaway' },
  { name: 'Elena Pinderhughes', line: 'The debut album site for I Hope You Feel It Too.', to: '/work/elena-pinderhughes' },
  { name: 'Second Son Productions', line: 'The roster site for the management company itself.', to: '/websites#second-son-productions' },
];

export const GlasperBlueNote = () => {
  usePageMeta({
    title: 'Robert Glasper and Blue Note, Untold.works',
    description:
      'Eight years telling the story around one artist: his records, his residency, his clubs and his festival. Album releases on Loma Vista, Robtober at Blue Note New York, the Blue Note Los Angeles opening, and the Black Radio Experience.',
    path: '/work/robert-glasper-blue-note',
  });
  const albumVisual = categoryBySlug('campaigns').music[0].visual;

  return (
    <Layout rail="Untold.works, Robert Glasper and Blue Note">
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Campaigns', to: '/campaigns' }, { label: 'Robert Glasper and Blue Note' }]} />
      <main id="main" className="flex flex-col">
        {/* The spread */}
        <section className="mt-10 grid bg-ink text-cream md:min-h-[860px] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]" aria-label="Robert Glasper and Blue Note">
          <div className="flex min-w-0 flex-col justify-between gap-7 px-6 py-10 md:px-12">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="lbl">04 · Campaigns</span>
                <Chip className="border-rule border-cream text-[14px] tracking-[0.08em]">Music</Chip>
              </div>
              <Stamp big="8" small="Years" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="display break-words text-[clamp(40px,6vw,88px)]">Robert Glasper and Blue Note</h1>
              <p className="voice text-[26px] leading-[1.3]">
                Eight years telling the story around one artist: his records, his residency, his clubs and his festival.
              </p>
            </div>
            <div className="wdth-62 flex flex-col text-[16px] font-semibold uppercase leading-[1.15] tracking-[0.05em] md:text-[17px]">
              <Fact label="Artist">Robert Glasper</Fact>
              <Fact label="Releases">Black Radio III Supreme · Let Go · Code Derivation · Keys to the City</Fact>
              <Fact label="Residency">Robtober, Blue Note New York · five years</Fact>
              <Fact label="Launch">Blue Note Los Angeles · Aug 14, 2025</Fact>
              <Fact label="Festival">Black Radio Experience · Content Director, four years</Fact>
              <Fact label="Also">Derrick Hodge, Color of Noize tour</Fact>
              <Fact label="Live" last>
                <a href="https://robertglasper.com" target="_blank" rel="noopener noreferrer" className="no-underline">
                  robertglasper.com ↗
                </a>
              </Fact>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden bg-ink">
            <Img
              src="robert-glasper-portrait.jpg"
              alt="Robert Glasper seated on a blue chair"
              sizes="(min-width: 768px) 45vw, 100vw"
              eager
              className="absolute inset-0 block h-full w-full object-cover object-[50%_30%]"
            />
          </div>
        </section>

        {/* The records */}
        <section className="flex flex-col gap-7 pb-[88px] pt-24" aria-labelledby="records-headline">
          <LabelRow left={<span id="records-headline">The records</span>} right="Loma Vista Recordings" />
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
            {albumVisual.type === 'vinyl' && <VinylVisual discs={albumVisual.discs} tag={albumVisual.tag} size="page" />}
          </div>
          <p className="voice max-w-[900px] text-[22px] leading-[1.4]">
            Part of the release team on every one. Before that, I directed, shot and edited the release films for Art Science and R+R=NOW.
          </p>
        </section>

        {/* The rooms */}
        <section className="flex flex-col gap-8 bg-ink px-6 pb-16 pt-14 text-cream md:px-12" aria-labelledby="rooms-headline">
          <LabelRow left={<span id="rooms-headline">The rooms</span>} right="New York · Los Angeles · Napa Valley" className="border-cream/50" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Img src="robtober-blue-note-nyc.jpg" alt="Robert Glasper and band on stage at Blue Note New York" sizes="(min-width: 768px) 30vw, 100vw" className="block h-full w-full object-cover" />
                <Tag inverse>Blue Note New York</Tag>
              </div>
              <h2 className="name text-[32px] leading-none tracking-[-0.02em]">Robtober</h2>
              <p className="text-[18px] leading-[1.5]">
                Five Octobers of content for Glasper's annual residency at Blue Note New York. The residency is in its eighth season in 2026.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative flex aspect-[16/10] flex-col justify-center gap-3.5 overflow-hidden border-rule border-cream bg-burgundy px-8 pb-[52px] pt-7 text-cream">
                <span className="display text-[44px] leading-[0.9]">6372 Sunset</span>
                <span className="voice text-[20px]">Hollywood, August 14, 2025.</span>
                <Tag inverse>Blue Note Los Angeles</Tag>
              </div>
              <h2 className="name text-[32px] leading-none tracking-[-0.02em]">Blue Note Los Angeles</h2>
              <p className="text-[18px] leading-[1.5]">
                Content for the launch and the opening of the club at 6372 Sunset Boulevard, with Glasper headlining the grand opening on
                August 14, 2025.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <Img src="black-radio-experience-crowd.jpg" alt="The crowd at the Black Radio Experience in Napa Valley" sizes="(min-width: 768px) 30vw, 100vw" className="block h-full w-full object-cover" />
                <Tag inverse>Napa Valley</Tag>
              </div>
              <h2 className="name text-[32px] leading-none tracking-[-0.02em]">Black Radio Experience</h2>
              <p className="text-[18px] leading-[1.5]">
                Content Director for four years. The Blue Note Jazz Festival in Napa, curated by Glasper, became the Black Radio Experience in
                2024.
              </p>
            </div>
          </div>
        </section>

        {/* The roster */}
        <section className="flex flex-col gap-7 pb-24 pt-[88px]" aria-labelledby="roster-headline">
          <LabelRow left={<span id="roster-headline">The roster</span>} right="Managed by Second Son Productions" />
          <div className="grid items-start gap-x-12 gap-y-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div className="flex flex-col gap-[18px]">
              <h2 className="name text-[clamp(34px,3.6vw,52px)] leading-[0.98]">One roster, every format.</h2>
              <p className="text-[19px] leading-[1.5]">
                The same management company runs Glasper and the artists around him. That work runs from release content and festival
                direction to the sites themselves.
              </p>
              <Frame src="color-of-noize.jpg" alt="Derrick Hodge conducting the Color of Noize orchestra" tag="Color of Noize tour" fit="cover" sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
            <ul className="border-b-rule border-ink">
              {roster.map((artist) => {
                const inner = (
                  <>
                    <span className="name text-[26px] leading-none tracking-[-0.02em]">{artist.name}</span>
                    <span className="voice text-[18px] leading-[1.3]">{artist.line}</span>
                  </>
                );
                const className = 'flex flex-col gap-2 border-t-rule border-ink py-[18px] no-underline';
                return (
                  <li key={artist.name}>
                    {artist.to.startsWith('/work/') ? (
                      <FillLink to={artist.to} color="burgundy" className={className}>
                        {inner}
                      </FillLink>
                    ) : (
                      <Link to={artist.to} className={className}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← Campaigns', to: '/campaigns' }} next={{ label: 'Next: Landing pages →', to: '/work/landing-pages' }} />
      <Footer />
    </Layout>
  );
};
