import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_HREF, EMAIL } from '../site';

type Credit = { role: string; name: ReactNode };

const portraits = [
  { id: 'directed', label: 'Directed portrait', note: 'Higgsfield AI edit from the original photograph', alt: 'Joshua Semolik smiling in a warmly lit, cinematic studio portrait' },
  { id: 'original', label: 'The original', note: 'Original studio photograph', alt: 'Joshua Semolik smiling in the original white studio portrait' },
  { id: 'thinking', label: 'In thought', note: 'A candid moment from the studio session', alt: 'Joshua Semolik smiling with one hand near his chin' },
  { id: 'gesture', label: 'In motion', note: 'A candid moment from the studio session', alt: 'Joshua Semolik smiling and gesturing with one hand' },
] as const;

const portraitSource = (id: string) => `/images/about/joshua-${id}`;

const Year = ({ children }: { children: string }) => (
  <span className="wdth-62 text-[15px] font-semibold not-italic tracking-[0.08em]">{children}</span>
);

const clients: Credit[] = [
  { role: 'Brand and concept direction, campaigns and marketing systems', name: 'Billiard Factory' },
  { role: 'Site, dealer portal, Brand Bible', name: 'C.L. Bailey' },
  { role: 'Website for Billiard Factory’s trade-only showroom, focused on designers', name: 'Game Room Furniture Partners' },
  { role: 'Website, content and storytelling, through IDW Studio', name: 'Savor' },
  { role: 'Café site', name: "Ki'bok Coffee SMA" },
  { role: 'Retail sites', name: 'Regal Billiards, Lexington Billiards and Spas' },
  { role: 'Hotel site and ops dashboard', name: 'Casa Schuck' },
  { role: 'Lead intake', name: 'OMI Growth' },
  { role: 'Rebrand, website, photo/video campaign and marketing systems through Ingenia', name: 'Noxguard' },
];

const music: Credit[] = [
  { role: 'Release team for four records', name: 'Robert Glasper' },
  { role: 'Robtober content, five years', name: 'Robert Glasper, Blue Note New York' },
  { role: 'Launch and opening content', name: 'Blue Note Los Angeles' },
  { role: 'Content Director, four years', name: 'Black Radio Experience' },
  { role: 'Color of Noize tour content and artist site', name: 'Derrick Hodge' },
  { role: 'AI-built Made in Chicago artist site', name: 'Lalah Hathaway' },
  { role: 'Debut album site, I Hope You Feel It Too', name: 'Elena Pinderhughes' },
];

const career: Credit[] = [
  {
    role: 'Intern',
    name: (
      <>
        Howard Stern, KROCK Studios, New York City <Year>Summer 1997</Year>
      </>
    ),
  },
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
        Lowepro, later DayMen <Year>2010–May 2016</Year>
      </>
    ),
  },
  {
    role: 'Senior brand and growth manager',
    name: (
      <>
        NorCal Cannabis <Year>Jun 2016–2019</Year>
      </>
    ),
  },
  {
    role: 'Founder, brand and AI systems',
    name: (
      <>
        Untold.works, Mexico City <Year>Jan 2017–present</Year>
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
  {
    role: 'Head of Brand and Concept, contract',
    name: (
      <>
        Billiard Factory <Year>Jan 2025–present</Year>
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
        MIT Sloan <Year>2025</Year>
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
  const [activePortrait, setActivePortrait] = useState<(typeof portraits)[number]>(portraits[0]);
  usePageMeta({
    title: 'Joshua Semolik — AI Transformation Leader | Untold.works',
    description:
      'Joshua Semolik is an AI Transformation Leader building across brand, retail, commerce and creative systems. Daily AI practice, creative direction and team adoption through Untold.works.',
    path: '/about',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'About' }]} />
      <main id="main" className="flex flex-col">
        <section className="about-opening" aria-labelledby="about-name">
          <div className="about-opening-copy">
            <span className="lbl">About / The person behind the work</span>
            <h1 id="about-name" className="display about-opening-name">Joshua<br />Semolik<span className="about-name-period">.</span></h1>
            <p className="lbl about-opening-title">AI Transformation Leader<br />Brand, Retail, Commerce &amp; Creative Systems</p>
            <p className="about-opening-statement">I build AI-powered creative and operating systems teams can actually use.</p>
            <p className="about-opening-summary">
              I build with AI every day—across websites, creative production, retail experiences and the systems teams use to deliver
              them. I combine creative direction with hands-on building and help people bring these tools into their own work. Recent
              projects include Billiard Factory’s shoppable showroom and Shopify Plus transition, C.L. Bailey’s dealer tools, and Lalah
              Hathaway’s artist site.
            </p>
          </div>
          <div className="about-portrait" aria-label="Joshua Semolik portrait study">
            <figure className="about-portrait-figure">
              <div className="about-portrait-image-wrap">
                <img
                  key={activePortrait.id}
                  className="about-portrait-image"
                  src={`${portraitSource(activePortrait.id)}-800.webp`}
                  srcSet={`${portraitSource(activePortrait.id)}-480.webp 480w, ${portraitSource(activePortrait.id)}-800.webp 800w, ${portraitSource(activePortrait.id)}-1200.webp 1200w`}
                  sizes="(max-width: 900px) 90vw, 42vw"
                  width="800"
                  height="1000"
                  alt={activePortrait.alt}
                  fetchPriority="high"
                />
                <span className="about-portrait-stamp" aria-hidden="true">JS / {String(portraits.indexOf(activePortrait) + 1).padStart(2, '0')}</span>
              </div>
              <figcaption className="about-portrait-caption"><span>{activePortrait.label}</span><span>{activePortrait.note}</span></figcaption>
            </figure>
            <div className="about-portrait-selector" role="group" aria-label="Choose a portrait from the studio study">
              {portraits.map((portrait, index) => (
                <button
                  className="about-portrait-option"
                  type="button"
                  key={portrait.id}
                  aria-label={`Show ${portrait.label.toLowerCase()}`}
                  aria-pressed={activePortrait.id === portrait.id}
                  onClick={() => setActivePortrait(portrait)}
                >
                  <img src={`${portraitSource(portrait.id)}-480.webp`} width="72" height="90" alt="" loading="lazy" />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="pb-20" aria-labelledby="selected-work-title">
          <LabelRow left={<span id="selected-work-title">Selected work</span>} right="Roles and projects" />
          <ul className="about-proof-list m-0 list-none p-0" aria-labelledby="selected-work-title">
            <li><Link to="/work/billiard-factory-and-c-l-bailey"><strong>Billiard Factory + C.L. Bailey</strong><span>Retail redesign, live shoppable rooms, Shopify Plus migration, dealer tools and AI-led campaigns.</span><span aria-hidden="true">↗</span></Link></li>
            <li><Link to="/work/robert-glasper-blue-note"><strong>Second Son Productions & related music work</strong><span>Artist sites, Robert Glasper releases and distinct Blue Note content roles.</span><span aria-hidden="true">↗</span></Link></li>
            <li><Link to="/work/savor"><strong>Savor</strong><span>Website and content storytelling through IDW Studio.</span><span aria-hidden="true">↗</span></Link></li>
          </ul>
          <a href={CONTACT_HREF} target={EMAIL ? undefined : '_blank'} rel={EMAIL ? undefined : 'noopener noreferrer'} className="text-link mt-8">
            {EMAIL ? 'Discuss a role or project' : 'Discuss a role or project on LinkedIn'}<span aria-hidden="true">↗</span>
          </a>
        </section>
        <section className="about-ai-turning-point pb-20" aria-labelledby="about-practice-title">
          <LabelRow left="Applied AI / The turning point" right="MIT Sloan · 2025" />
          <div className="about-ai-turning-point-grid">
            <div className="about-ai-year" aria-hidden="true">2025<span>MIT Sloan</span></div>
            <h2 id="about-practice-title" className="name m-0 max-w-[820px] text-[clamp(36px,4.4vw,62px)] leading-[0.98]">The class changed how I work.</h2>
          </div>
          <div className="mt-9 grid items-start gap-7 border-t border-current pt-6 md:grid-cols-3 md:gap-10">
              <p className="m-0 text-[18px] leading-[1.55]">
                I took MIT Sloan’s AI Strategy executive education course in 2025. It gave me the moment of clarity I had been looking for: AI could change how work is organized, with an impact I think of in terms of the assembly line. Since that course, a day has not gone by without me working with AI, testing what it can do and putting it into practice.
              </p>
              <p className="m-0 text-[18px] leading-[1.55]">
                That practice now runs from campaign planning and retail systems to websites, photography and film. Higgsfield is my primary AI image and video tool. Years behind the lens shape how I direct it: lighting, framing, composition and pacing still matter. I use ChatGPT across models to think through problems, and Claude Code to turn ideas into working sites and tools.
              </p>
              <p className="m-0 text-[18px] leading-[1.55]">
                I also teach skeptical colleagues with tasks they already need to finish: preparing campaign assets, reviewing product details and finding the next handoff. We document what works, keep approvals visible and give the team a repeatable process.
              </p>
          </div>
        </section>
        <section id="toolkit" className="about-toolkit scroll-mt-6 pb-20" aria-labelledby="about-toolkit-title">
          <LabelRow left="Working toolkit" right="From idea to a live system" />
          <div className="about-toolkit-intro">
            <h2 id="about-toolkit-title" className="name m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02]">The tools behind the work.</h2>
            <p className="m-0 text-[18px] leading-[1.5]">I use these platforms to build the creative, connect it to commerce and customer operations, and give teams a way to publish and maintain it.</p>
          </div>
          <div className="about-toolkit-grid">
            <div className="about-toolkit-group">
              <p className="lbl">01 / Think and create</p>
              <dl>
                <div><dt>ChatGPT</dt><dd>Work across models for research, planning, writing and problem solving.</dd></div>
                <div><dt>Higgsfield</dt><dd>Direct AI photography and video with the judgment I developed behind the lens.</dd></div>
                <div><dt>Claude Code</dt><dd>Build and revise websites, campaign tools and internal systems.</dd></div>
              </dl>
            </div>
            <div className="about-toolkit-group">
              <p className="lbl">02 / Sell and operate</p>
              <dl>
                <div><dt>Shopify Plus</dt><dd>Headless commerce transition underway for Billiard Factory’s live storefront.</dd></div>
                <div><dt>Xorosoft / XoroERP</dt><dd>Working on Billiard Factory’s phased move to an operational system for inventory and orders.</dd></div>
                <div><dt>GoHighLevel</dt><dd>Capture tagged campaign inquiries and route them to sales follow-up.</dd></div>
                <div><dt>HubSpot</dt><dd>Additional CRM experience.</dd></div>
              </dl>
            </div>
            <div className="about-toolkit-group">
              <p className="lbl">03 / Build and ship</p>
              <dl>
                <div><dt>GitHub</dt><dd>Daily source control and collaboration across site and system builds.</dd></div>
                <div><dt>Cloudflare</dt><dd>Workers and routing for connected web experiences.</dd></div>
                <div><dt>Netlify</dt><dd>Previews and delivery for websites and campaign pages.</dd></div>
                <div><dt>Supabase + ImageKit</dt><dd>Working records and organized media for campaign operations.</dd></div>
              </dl>
            </div>
          </div>
        </section>
        <section className="flex max-w-[1000px] flex-col gap-7 pb-20" aria-labelledby="about-path-title">
          <LabelRow left={<span id="about-path-title">The path here</span>} right="1997–present" />
          <p className="max-w-[900px] text-[19px] leading-[1.55]">
            In summer 1997, I interned for Howard Stern at KROCK Studios in New York City. My broadcast production career began in 1999
            with NBA Entertainment and later the Sacramento Kings, with two Emmy nominations along the way. I later led global product
            launches at Lowepro, supporting the creative and marketing pitches for the JOBY and Acme Made acquisitions before working
            across both brands. Lowepro was later acquired by DayMen; I stayed through May 2016.
          </p>
          <p className="max-w-[900px] text-[19px] leading-[1.55]">
            I then moved into brand and growth at NorCal Cannabis and founded Untold.works in January 2017. The studio is based in Mexico
            City. I later led strategy at Ingenia Agency and began expanding Untold’s AI practice in 2024. The MIT Sloan course in 2025 made that direction central to my daily work. I have led brand and concept work at Billiard Factory since January 2025. I work in English and Spanish.
          </p>
          <p className="max-w-[900px] text-[19px] leading-[1.55]">
            Jazz and R&B have been a through line. My work with Robert Glasper spans album releases, five years of Robtober content and
            content for the launch and opening of Blue Note Los Angeles. I served as Content Director for the Black Radio Experience for four
            years. I also built the Made in Chicago site for Lalah Hathaway with AI around supplied media, and an artist site for Derrick Hodge, alongside content for Hodge’s
            Color of Noize tour. The eye and judgment I built behind the lens now shape how I work with AI across creative production and the
            systems around it.
          </p>
        </section>
        <Roll id="music" title="Music and artists" note="Selected work" credits={music} />
        <Roll id="clients" title="Clients" note="Selected work" credits={clients} />
        <Roll id="career" title="Career" note="1997–present" credits={career} />
        <Roll id="film" title="Earlier film work" note="Before 2024" credits={film} />
        <Roll id="education" title="Education" credits={education} />
      </main>
      <div className="mt-auto" />
      <Footer />
    </Layout>
  );
};
