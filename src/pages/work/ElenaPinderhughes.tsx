import type { ReactNode } from 'react';
import { Chip } from '../../components/Chip';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { Rail } from '../../components/Rail';
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
    description: 'The debut album site for Elena Pinderhughes, I Hope You Feel It Too. Built by Untold.works. Live at elenapinderhughes.com.',
    path: '/work/elena-pinderhughes',
  });

  return (
    <div className="flex min-h-dvh flex-col bg-burgundy pr-rail text-cream">
      <Rail text="Websites, Elena Pinderhughes" />
      <main id="main" className="grid grow md:min-h-[860px] md:grid-cols-2">
        <div className="flex min-w-0 flex-col justify-between gap-8 px-5 py-10 md:px-14">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3.5">
              <span className="lbl">03 · Websites</span>
              <Chip className="border-rule border-cream text-[14px] tracking-[0.08em]">Web</Chip>
            </div>
            <Stamp big="Live" small="2026" />
          </div>
          <div className="flex flex-col gap-[18px]">
            <h1 className="name break-words text-[clamp(40px,6vw,84px)] leading-[0.9] tracking-[-0.035em]">Elena Pinderhughes</h1>
            <p className="voice text-[26px] leading-[1.3]">Flutist. Vocalist. Composer. Songwriter.</p>
          </div>
          <div className="wdth-62 flex flex-col text-[16px] font-semibold uppercase leading-[1.1] tracking-[0.05em] md:text-[18px]">
            <Row label="Client">Elena Pinderhughes</Row>
            <Row label="Shipped">Debut album site, I Hope You Feel It Too</Row>
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
      </main>
      <HouseBar wide back={{ label: '← Websites', to: '/websites' }} next={{ label: 'Next: Lalah Hathaway →', to: '/websites#lalah-hathaway' }} />
    </div>
  );
};
