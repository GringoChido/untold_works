import type { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';

type Credit = { role: string; name: ReactNode };

const Year = ({ children }: { children: string }) => (
  <span className="wdth-62 text-[15px] font-semibold not-italic tracking-[0.08em]">{children}</span>
);

const clients: Credit[] = [
  { role: 'Creative direction, platforms, campaigns', name: 'Billiard Factory' },
  { role: 'Site, dealer portal, Brand Bible', name: 'C.L. Bailey' },
  { role: 'Trade showroom site', name: 'Game Room Furniture Partners' },
  { role: 'Album releases, Robtober, the Blue Note Los Angeles opening', name: 'Robert Glasper' },
  { role: 'Content Director, Black Radio Experience', name: 'Blue Note Jazz Festival' },
  { role: 'Color of Noize tour content, artist site', name: 'Derrick Hodge' },
  { role: 'Artist sites', name: 'Lalah Hathaway, Elena Pinderhughes' },
  { role: 'Website, content and storytelling, through IDW Studio', name: 'Savor' },
  { role: 'Café site', name: "Ki'bok Coffee SMA" },
  { role: 'Retail sites', name: 'Regal Billiards, Lexington Billiards and Spas' },
  { role: 'Hotel site and ops dashboard', name: 'Casa Schuck' },
  { role: 'Lead intake', name: 'OMI Growth' },
  { role: 'Brand and AI roadmap', name: 'Noxguard' },
];

const career: Credit[] = [
  {
    role: 'Senior and broadcast producer',
    name: (
      <>
        NBA Entertainment, Sacramento Kings <Year>1999–2010</Year>
      </>
    ),
  },
  { role: 'Two Emmy nominations', name: 'NBA Entertainment, Sacramento Kings' },
  {
    role: 'Global product launch and GTM systems lead',
    name: (
      <>
        Videndum PLC <Year>2010–2016</Year>
      </>
    ),
  },
  {
    role: 'Senior brand and growth manager',
    name: (
      <>
        NorCal Cannabis <Year>2016–2019</Year>
      </>
    ),
  },
  {
    role: 'Global marketing and growth strategy lead',
    name: (
      <>
        Ingenia Agency <Year>2020–2023</Year>
      </>
    ),
  },
];

const film: Credit[] = [
  { role: 'Directed, shot and edited the release films', name: 'Robert Glasper Experiment, Art Science and R+R=NOW' },
  { role: 'Employee portrait campaign films', name: 'Hewlett Packard' },
];

const education: Credit[] = [
  {
    role: 'AI Strategy, executive education',
    name: (
      <>
        MIT Sloan <Year>2026</Year>
      </>
    ),
  },
  { role: 'Education', name: 'Arizona State University' },
];

/** End-credits layout: role on the right-aligned left column in condensed caps, name on the right in italic. */
const Roll = ({ id, title, note, credits }: { id: string; title: string; note?: string; credits: Credit[] }) => (
  <section className="flex flex-col gap-7 pb-[88px]" aria-labelledby={id}>
    <LabelRow left={<span id={id}>{title}</span>} right={note ?? ''} />
    <dl className="flex flex-col gap-[22px] pt-3">
      {credits.map((credit) => (
        <div key={credit.role} className="grid gap-x-10 gap-y-1 md:grid-cols-2 md:items-baseline">
          <dt className="wdth-62 text-[17px] font-semibold uppercase tracking-[0.06em] md:text-right">{credit.role}</dt>
          <dd className="voice m-0 text-[24px] leading-[1.25]">{credit.name}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export const About = () => {
  usePageMeta({
    title: 'About, Untold.works',
    description:
      'Joshua Semolik. Almost three decades in brand, product and marketing. Storytelling first, AI as the crew. Clients, career, earlier film work and education.',
    path: '/about',
  });

  return (
    <Layout rail="Untold.works, about Joshua Semolik">
      <Header crumbs={[{ label: 'About' }]} />
      <main id="main" className="flex flex-col">
        <section className="flex max-w-[1040px] flex-col gap-[26px] pb-20 pt-16 md:pt-[88px]">
          <span className="lbl">About</span>
          <h1 className="display text-[clamp(52px,8vw,116px)]">Joshua Semolik</h1>
          <p className="voice text-[clamp(24px,2.6vw,34px)] leading-[1.2]">
            Almost three decades in brand, product and marketing. Storytelling first, AI as the crew.
          </p>
          <p className="max-w-[860px] text-[20px] leading-[1.55]">
            I started in broadcast in 1999, producing for NBA Entertainment and the Sacramento Kings, with two Emmy nominations along the
            way. Then global product launches at Videndum, brand and growth at NorCal Cannabis and Ingenia Agency, and since 2024,
            Untold.works. Today I’m Creative Director at Billiard Factory. Based in Houston, working in English and Spanish.
          </p>
        </section>
        <Roll id="clients" title="Clients" note="2024 to now" credits={clients} />
        <Roll id="career" title="Career" note="1999–2023" credits={career} />
        <Roll id="film" title="Earlier film work" note="Before 2024" credits={film} />
        <Roll id="education" title="Education" credits={education} />
      </main>
      <div className="mt-auto" />
      <Footer />
    </Layout>
  );
};
