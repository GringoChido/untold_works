import type { ReactNode } from 'react';
import { Chip } from '../../components/Chip';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { Stamp } from '../../components/Stamp';
import { usePageMeta } from '../../hooks/usePageMeta';

/** Open items, ask Joshua. The two rows stay out of the page until these have values. */
const STACK: string | null = null;
const AI_TOOLS: string | null = null;

const Row = ({ label, children, last = false }: { label: string; children: ReactNode; last?: boolean }) => (
  <div className={`flex justify-between gap-4 border-t-rule border-cream py-3 ${last ? 'border-b-rule' : ''}`}>
    <span>{label}</span>
    <span className="text-right">{children}</span>
  </div>
);

export const ElenaPinderhughes = () => {
  usePageMeta({
    title: 'Elena Pinderhughes, Untold.works',
    description: 'An artist website for Elena Pinderhughes that introduces her debut album I Hope You Feel It Too alongside her music, credits, story and contact paths. Built by Untold.works.',
    path: '/work/elena-pinderhughes',
  });

  return (
    <div className="flex min-h-dvh flex-col bg-burgundy text-cream">
      <main id="main" className="grow">
        <section className="grid md:min-h-[860px] md:grid-cols-2" aria-labelledby="elena-title">
          <div className="flex min-w-0 flex-col justify-between gap-8 px-5 py-10 md:px-14">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="lbl">03 · Websites</span>
                <Chip className="border-rule border-cream text-[14px] tracking-[0.08em]">Web</Chip>
              </div>
              <Stamp big="Live" small="2026" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 id="elena-title" className="name break-words text-[clamp(40px,6vw,84px)] leading-[0.9] tracking-[-0.035em]">Elena Pinderhughes</h1>
              <p className="voice text-[26px] leading-[1.3]">Flutist. Vocalist. Composer. Songwriter.</p>
            </div>
            <div className="wdth-62 flex flex-col text-[16px] font-semibold uppercase leading-[1.1] tracking-[0.05em] md:text-[18px]">
              <Row label="Client">Elena Pinderhughes</Row>
              <Row label="Shipped">Artist site with a debut album chapter</Row>
              <Row label="Credit">Built by Untold.works</Row>
              {STACK && <Row label="Stack">{STACK}</Row>}
              {AI_TOOLS && <Row label="Built with">{AI_TOOLS}</Row>}
              <Row label="Status" last>
                <a href="https://elenapinderhughes.com" target="_blank" rel="noopener noreferrer" className="no-underline">
                  Live ↗ elenapinderhughes.com
                </a>
              </Row>
            </div>
          </div>
          <div className="relative min-h-[60vw] overflow-hidden bg-ink md:min-h-0">
            <Img
              src="elena-home.jpg"
              alt="The home page of elenapinderhughes.com"
              sizes="(min-width: 768px) 50vw, 100vw"
              eager
              className="absolute inset-0 block h-full w-full object-cover object-[52%_30%]"
            />
          </div>
        </section>
        <section className="grid gap-10 bg-cream px-5 py-16 text-ink md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20 md:px-14 md:py-24" aria-labelledby="elena-story-title">
          <div>
            <p className="lbl m-0 text-[13px]">The idea / An artist arriving on her own terms</p>
            <h2 id="elena-story-title" className="name mt-7 max-w-[560px] text-[clamp(39px,4.5vw,68px)] leading-[0.98]">
              A first album, inside a fuller body of work.
            </h2>
          </div>
          <div className="flex flex-col gap-6 md:pt-12">
            <p className="voice m-0 max-w-[700px] text-[clamp(24px,2.7vw,36px)] leading-[1.22]">
              The debut album leads the site, while selected credits show the practice behind it.
            </p>
            <p className="m-0 max-w-[660px] text-[18px] leading-[1.55]">
              The site introduces I Hope You Feel It Too, then connects it to Elena’s work as a flutist, vocalist, composer and songwriter. Listeners can follow the release, while presenters and collaborators can assess credits, press and a direct contact route.
            </p>
          </div>
        </section>
        <section className="bg-cream px-5 pb-20 text-ink md:px-14 md:pb-28" aria-labelledby="elena-inside-title">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-ink pt-4">
            <h2 id="elena-inside-title" className="lbl m-0 text-[13px]">Inside the site</h2>
            <span className="lbl text-[13px]">Music · Story · Connection</span>
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-12">
            <div className="border-t border-ink pt-4">
              <span className="lbl text-[12px]">01 / Music</span>
              <h3 className="name mt-5 text-[clamp(28px,2.7vw,38px)] leading-none">The next record and the road here.</h3>
              <p className="mt-5 max-w-[400px] text-[17px] leading-[1.5]">
                The music page introduces the debut, then places it beside a selected discography spanning albums, featured work and film and television credits.
              </p>
              <a href="https://elenapinderhughes.com/music" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border-b border-ink pb-1 font-semibold no-underline">
                Explore the music ↗
              </a>
            </div>
            <div className="border-t border-ink pt-4">
              <span className="lbl text-[12px]">02 / Artist</span>
              <h3 className="name mt-5 text-[clamp(28px,2.7vw,38px)] leading-none">Credits and context for collaborators.</h3>
              <p className="mt-5 max-w-[400px] text-[17px] leading-[1.5]">
                An about page carries Elena’s story, collaborators and press coverage, connecting the new album to the breadth of her existing practice.
              </p>
              <a href="https://elenapinderhughes.com/about" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border-b border-ink pb-1 font-semibold no-underline">
                Read her story ↗
              </a>
            </div>
            <div className="border-t border-ink pt-4">
              <span className="lbl text-[12px]">03 / Connection</span>
              <h3 className="name mt-5 text-[clamp(28px,2.7vw,38px)] leading-none">A path from listening to contact.</h3>
              <p className="mt-5 max-w-[400px] text-[17px] leading-[1.5]">
                Listening-platform links, a contact page and a management route give fans and collaborators different ways to follow or get in touch.
              </p>
              <a href="https://elenapinderhughes.com/contact" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border-b border-ink pb-1 font-semibold no-underline">
                Visit the contact page ↗
              </a>
            </div>
          </div>
        </section>
      </main>
      <HouseBar wide back={{ label: '← Websites', to: '/websites' }} next={{ label: 'Next: Lalah Hathaway →', to: '/work/lalah-hathaway' }} />
    </div>
  );
};
