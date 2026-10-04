import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Chip } from '../../components/Chip';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Stamp } from '../../components/Stamp';
import { usePageMeta } from '../../hooks/usePageMeta';

const Cap = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`wdth-62 text-[13px] font-semibold uppercase leading-[1.35] tracking-[0.1em] ${className}`}>{children}</span>
);

const Fact = ({ label, children, last = false }: { label: string; children: ReactNode; last?: boolean }) => (
  <div className={`flex justify-between gap-4 border-t-rule border-cream py-3 ${last ? 'border-b-rule' : ''}`}>
    <span>{label}</span>
    <span className="text-right">{children}</span>
  </div>
);

const Shot = ({ src, alt, ratio, sizes }: { src: string; alt: string; ratio?: string; sizes: string }) => (
  <Img src={src} alt={alt} sizes={sizes} className={`block w-full bg-ink ${ratio ? `${ratio} object-cover` : 'h-auto'}`} />
);

const Step = ({ n, name, children, aside }: { n: string; name: string; children: ReactNode; aside: ReactNode }) => (
  <div className="grid items-start gap-x-12 gap-y-5 border-t-rule border-ink py-10 md:grid-cols-[200px_minmax(0,1fr)_minmax(0,1.25fr)]">
    <div>
      <div className="name text-[64px] leading-[0.85]">{n}</div>
      <h3 className="name mt-3.5 text-[26px] leading-none tracking-[-0.02em]">{name}</h3>
    </div>
    <div className="flex flex-col gap-[18px]">{children}</div>
    <div>{aside}</div>
  </div>
);

const Pull = ({ children }: { children: ReactNode }) => <p className="name text-[38px] leading-[1.02] tracking-[-0.025em]">{children}</p>;
const Body = ({ children }: { children: ReactNode }) => <p className="text-[18px] leading-[1.5]">{children}</p>;

const Node = ({ children, small }: { children: string; small: string }) => (
  <div className="node gap-1 border-cream px-2.5 py-3 text-[14px] leading-[1.15]">
    {children}
    <span className="text-[13px] font-normal normal-case tracking-[0.02em]">{small}</span>
  </div>
);

const Arrow = ({ children }: { children: string }) => (
  <span aria-hidden="true" className="flex items-center justify-center text-[18px] font-semibold">
    {children}
  </span>
);

const season = [
  { date: 'Aug 17', name: 'Labor Day Sale', status: 'Live' },
  { date: 'Sep 14 – Oct 11', name: 'Home Field', status: 'Live' },
  { date: 'Oct 15', name: 'Preferred Customer Event', status: 'In progress' },
  { date: 'Oct 16 – 31', name: 'C.L. Bailey Factory Event', status: 'Built' },
  { date: 'Feb 2027', name: 'Big Game', status: 'Planned' },
];

const statusChip: Record<string, string> = {
  Live: 'bg-cream text-ink',
  'In progress': 'border-rule border-cream',
  Built: 'border-rule border-cream',
  Planned: 'border-rule border-cream/50 text-cream/75',
};

const strips = [
  { n: '01', path: '/new-arrivals', credit: 'By me · ported by Brady Stick', status: 'Live · Aug 2026', src: 'strip-new-arrivals.jpg', alt: 'The New Arrivals page, full length' },
  { n: '02', path: '/designers', credit: 'By me · ported by Brady Stick', status: 'Live · Aug 2026', src: 'strip-designers.jpg', alt: 'The Designer Program page, full length' },
  { n: '03', path: '/sitewide-sale', credit: 'By me · ported by Brady Stick', status: 'Live · Aug 2026', src: 'strip-sitewide-sale.jpg', alt: 'The Sitewide Sale page, full length' },
  { n: '04', path: '/labor-day-sale', credit: 'Brady Stick, on my template · SEO copy by Zorica', status: 'Live · Aug 2026', src: 'strip-labor-day-sale.jpg', alt: 'The Labor Day Sale page, full length' },
  { n: '05', path: '/custom', credit: 'By me · ported by Brady Stick', status: 'Live · Sep 2026', src: 'strip-custom.jpg', alt: 'The Custom Built page, full length' },
  { n: '06', path: '/home-field', credit: 'By me · ported by Brady Stick', status: 'Live · Sep 2026', src: 'strip-home-field.jpg', alt: 'The Home Field page, full length' },
  { n: '07', path: '/financing', credit: 'By me', status: 'Live · Sep 2026', src: 'strip-financing.jpg', alt: 'The financing page, full length' },
  { n: '08', path: '/cl-bailey-factory-event', credit: 'By me', status: 'Opens Oct 16', src: 'strip-cl-bailey-factory-event.jpg', alt: 'The C.L. Bailey Factory Event page, full length' },
];

const blocks = [
  ['01', 'Claim', 'Home Field'],
  ['02', 'Film', 'Shoot pool, not people'],
  ['03', 'Ladder', 'The more the room needs'],
  ['04', 'Breath', 'From here, it’s every weekend'],
  ['05', 'Arithmetic', 'The room climbs the ladder by itself'],
  ['06', 'Rooms', 'Every home field looks different'],
  ['07', 'Trust', 'What it takes to get it in the room'],
  ['08', 'Capture', 'We’ll give you a $150 ball set'],
];

const funnel = [
  { name: 'Campaign', job: 'Give someone a reason to arrive.' },
  { name: 'Landing page', job: 'Make the offer and next step clear.' },
  { name: 'Lead capture', job: 'Collect the inquiry.' },
  { name: 'GoHighLevel', job: 'Keep the lead in the sales CRM.' },
  { name: 'Sales follow-up', job: 'Continue the conversation.' },
];

export const LandingPages = () => {
  usePageMeta({
    title: 'Landing pages, Untold.works',
    description:
      'Ten Billiard Factory campaign pages in a program that connects creative to sales. Joshua connected the sales team to GoHighLevel first; capture and next steps vary by page.',
    path: '/work/landing-pages',
  });

  return (
    <div className="flex min-h-dvh flex-col bg-cream text-ink">
      <main id="main" className="mx-auto flex w-full max-w-[1440px] flex-col">
        {/* The spread */}
        <section className="grid bg-teal text-cream md:min-h-[900px] md:grid-cols-2" aria-label="Landing pages">
          <div className="flex min-w-0 flex-col justify-between gap-7 px-5 py-10 md:px-14">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3.5">
                <span className="lbl">04 · Campaigns</span>
                <Chip className="border-rule border-cream text-[14px] tracking-[0.08em]">Campaign</Chip>
              </div>
              <Stamp big="Live" small="2026" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <h1 className="name break-words text-[clamp(40px,6vw,84px)] leading-[0.9] tracking-[-0.035em]">Landing pages</h1>
              <p className="voice text-[26px] leading-[1.3]">Ten Billiard Factory campaign pages connect an offer or product story to a specific next step, including CRM capture where appropriate.</p>
            </div>
            <div className="wdth-62 flex flex-col text-[16px] font-semibold uppercase leading-[1.1] tracking-[0.05em] md:text-[18px]">
              <Fact label="Client">Billiard Factory</Fact>
              <Fact label="Shipped">Ten pages, Aug–Oct 2026</Fact>
              <Fact label="Live">
                <a href="https://billiardfactory.com/home-field" target="_blank" rel="noopener noreferrer" className="no-underline">
                  Eight on billiardfactory.com ↗
                </a>
              </Fact>
              <Fact label="CRM foundation">GoHighLevel · sales team connected</Fact>
              <Fact label="Page capture">Forms and next steps vary</Fact>
              <Fact label="Stack">HTML · Netlify · Cloudflare Worker</Fact>
              <Fact label="Built with">Claude Code · Higgsfield</Fact>
              <Fact label="With" last>
                Brady Stick · Zorica
              </Fact>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 bg-ink p-5 md:p-10">
            <div className="flex flex-col gap-2">
              <Img
                src="clb-factory-event-page.jpg"
                alt="The C.L. Bailey Factory Event landing page, hero and offer"
                sizes="(min-width: 768px) 45vw, 100vw"
                eager
                className="block aspect-[16/10] w-full object-cover"
              />
              <div className="flex justify-between gap-4 text-cream">
                <Cap>/cl-bailey-factory-event</Cap>
                <Cap>Opens Oct 16</Cap>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3.5 text-cream">
              <div className="flex flex-col gap-2">
                <Shot src="labor-day-page.jpg" alt="The Labor Day Sale landing page" ratio="aspect-[16/10]" sizes="15vw" />
                <Cap>/labor-day-sale</Cap>
              </div>
              <div className="flex flex-col gap-2">
                <Shot src="designers-page.jpg" alt="The Designer Program landing page" ratio="aspect-[16/10]" sizes="15vw" />
                <Cap>/designers</Cap>
              </div>
              <div className="flex flex-col gap-2">
                <Shot src="financing-page.jpg" alt="The financing landing page" ratio="aspect-[16/10]" sizes="15vw" />
                <Cap>/financing</Cap>
              </div>
            </div>
          </div>
        </section>

        {/* The sequence that connects the pages to sales */}
        <section className="flex flex-col gap-9 border-b border-ink px-5 py-16 md:px-16 md:py-24" aria-labelledby="funnel-headline">
          <LabelRow left="The sales path" right="CRM first · pages next" />
          <div className="grid gap-x-16 gap-y-7 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <h2 id="funnel-headline" className="name m-0 max-w-[530px] text-[clamp(38px,4.4vw,64px)] leading-[0.98]">The CRM came first.</h2>
            <div className="flex max-w-[730px] flex-col gap-5">
              <p className="voice m-0 text-[clamp(23px,2.3vw,31px)] leading-[1.32]">
                I learned GoHighLevel and connected Billiard Factory’s sales team to the CRM before building the campaign pages and the broader marketing system.
              </p>
              <p className="m-0 text-[18px] leading-[1.55]">
                Each page gets a next action suited to its purpose: shop an offer, find a showroom, ask an expert or submit a lead form. Where GoHighLevel captures the inquiry, campaign tags and contact details give the sales team a usable follow-up record.
              </p>
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="A campaign lead's path to sales follow-up">
            {funnel.map((stage, index) => (
              <li key={stage.name} className="flex min-h-[160px] flex-col gap-4 border-t border-ink bg-ink/5 px-4 py-4">
                <span className="lbl text-[13px]">{`${String(index + 1).padStart(2, '0')} / 05`}</span>
                <strong className="name text-[27px] leading-[1.05]">{stage.name}</strong>
                <span className="mt-auto text-[15px] leading-[1.35]">{stage.job}</span>
              </li>
            ))}
          </ol>
          <p className="m-0 max-w-[900px] text-[16px] leading-[1.5]">
            Home Field, Sitewide Sale and Labor Day share one GoHighLevel capture form. Custom Built uses a separate Ask an Expert form. The Home Field breakdown below follows that campaign’s own route.
          </p>
        </section>

        {/* How a page gets made */}
        <section className="flex flex-col px-5 py-16 md:px-16 md:py-24" aria-labelledby="how-headline">
          <LabelRow left="How a page gets made" right="Worked example · /home-field" />
          <div className="flex max-w-[980px] flex-col gap-4 pb-12 pt-7">
            <h2 id="how-headline" className="name text-[clamp(36px,4.2vw,56px)] leading-[0.95]">
              From the idea to the handoff, in six steps.
            </h2>
            <p className="voice text-[24px] leading-[1.35]">
              Home Field runs sitewide from September 14 to October 11, 2026. This is the one page, start to finish.
            </p>
          </div>

          <Step
            n="01"
            name="The idea"
            aside={<Shot src="hf-hero.jpg" alt="The Home Field hero: HOME FIELD, This year, everyone comes to you" ratio="aspect-[16/10]" sizes="(min-width: 768px) 40vw, 100vw" />}
          >
            <Pull>Every fall, one house becomes the one.</Pull>
            <Body>
              The savings were already standing. The brief gave them a claim: September is the last month anyone has the bandwidth to change
              the house before everybody shows up to use it. Home Field. This year, everyone comes to you.
            </Body>
            <Cap>Source · HOME-FIELD-Campaign-Brief.md · Aug 20, 2026</Cap>
          </Step>

          <Step n="02" name="The copy" aside={<Shot src="hf-film.jpg" alt="The film block: Shoot Pool, Not People, beside the campaign film" sizes="(min-width: 768px) 40vw, 100vw" />}>
            <div className="name flex flex-col gap-2.5 text-[24px] leading-[1.08] tracking-[-0.015em]">
              <span>Shoot pool, not people.</span>
              <span>The more the room needs, the more comes off.</span>
              <span>From here, it’s every weekend.</span>
              <span>What it takes to get it in the room.</span>
            </div>
            <Body>
              Written to the brief’s guardrails: brands credited by name, no end date on the savings, no league or team names anywhere, and
              $1,000 always with the comma.
            </Body>
            <Cap>Headlines as they run on the page</Cap>
          </Step>

          <Step
            n="03"
            name="The images"
            aside={
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <Shot src="hf-shuffleboard.jpg" alt="Two friends playing shuffleboard in a loft" ratio="aspect-[4/5]" sizes="20vw" />
                  <Shot src="hf-foosball.jpg" alt="Two people playing foosball on a deck at golden hour" ratio="aspect-[4/5]" sizes="20vw" />
                </div>
                <Shot src="hf-filmstill.jpg" alt="A still from the Home Field film, a player lining up a shot" ratio="aspect-video" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            }
          >
            <Pull>Rooms, stills and the film, made in Higgsfield.</Pull>
            <Body>
              Shot to the brief’s direction: the room mid-game-night, warm and lived-in, people standing around the table. The same images
              carry the page, the social posts and the film.
            </Body>
            <Cap>Higgsfield · served through ImageKit</Cap>
          </Step>

          <Step
            n="04"
            name="The layout"
            aside={
              <div className="flex flex-col gap-3">
                <Shot src="hf-ladder.jpg" alt="The ladder block: the more the room needs, the more comes off" sizes="(min-width: 768px) 40vw, 100vw" />
                <Shot src="hf-climb.jpg" alt="The arithmetic block: the room climbs the ladder by itself" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            }
          >
            <Pull>Eight blocks. Each one has a job.</Pull>
            <div className="wdth-62 grid grid-cols-[34px_120px_minmax(0,1fr)] text-[15px] font-semibold uppercase leading-[1.15] tracking-[0.05em]">
              {blocks.map(([n, name, line], i) => {
                const cell = `border-t-rule border-ink py-[9px] ${i === blocks.length - 1 ? 'border-b-rule' : ''}`;
                return (
                  <div key={n} className="contents">
                    <span className={cell}>{n}</span>
                    <span className={cell}>{name}</span>
                    <span className={cell}>{line}</span>
                  </div>
                );
              })}
            </div>
            <Cap>Source · HOME-FIELD-Landing-Page-Direction.md · Aug 21, 2026</Cap>
          </Step>

          <Step
            n="05"
            name="The build"
            aside={
              <div className="flex flex-col gap-3.5 bg-ink px-7 py-8 text-cream">
                <div className="grid grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)_28px_minmax(0,1fr)]">
                  <Node small="/home-field">billiardfactory.com</Node>
                  <Arrow>→</Arrow>
                  <Node small="bf-page-proxy">Cloudflare Worker</Node>
                  <Arrow>→</Arrow>
                  <Node small="the page itself">Netlify</Node>
                </div>
                <div className="mt-4 grid gap-3 border-t border-cream/35 pt-4 sm:grid-cols-2">
                  <Node small="header and footer">Store chrome</Node>
                  <Node small="chat, calls, analytics">Tag Manager</Node>
                </div>
                <div className="mt-1.5 flex justify-between gap-4 border-t border-cream/35 pt-3">
                  <Cap>Eight campaign routes</Cap>
                  <Cap>The URL never changes</Cap>
                </div>
              </div>
            }
          >
            <Pull>Hand-built HTML, at the store’s own address.</Pull>
            <Body>
              Each page is static HTML on Netlify, wearing billiardfactory.com’s own header and footer. A Cloudflare Worker serves it at
              billiardfactory.com/home-field, and Google Tag Manager brings the store’s chat, call tracking and analytics along.
            </Body>
            <Cap>Built with Claude Code</Cap>
          </Step>

          <Step
            n="06"
            name="The lead"
            aside={<Shot src="hf-capture.jpg" alt="The capture block: We’ll give you a $150 ball set, beside the GoHighLevel form" sizes="(min-width: 768px) 40vw, 100vw" />}
          >
            <Pull>The lead has to reach a person.</Pull>
            <Body>
              A GoHighLevel form offers a $150 ball set in exchange for a name, phone and email. The lead enters the CRM, where the connected sales team can follow up. The page reads campaign tags and includes a thank-you conversion hook.
            </Body>
            <div className="rows text-[15px]">
              <div>
                <span>Form</span>
                <span>GoHighLevel</span>
              </div>
              <div>
                <span>After capture</span>
                <span>GoHighLevel CRM · sales follow-up</span>
              </div>
              <div>
                <span>Page tracking</span>
                <span>Campaign-tag reader · thank-you hook</span>
              </div>
              <div>
                <span>Same form</span>
                <span>Labor Day · Sitewide Sale</span>
              </div>
              <div>
                <span>Custom Built</span>
                <span>Ask an Expert form</span>
              </div>
            </div>
          </Step>
        </section>

        {/* The season */}
        <section className="flex flex-col gap-10 bg-ink px-5 py-16 text-cream md:px-16 md:py-[72px]" aria-labelledby="season-headline">
          <LabelRow left={<span id="season-headline">The season</span>} right="One arc, page to page" className="border-cream/50" />
          <ol className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {season.map((item) => (
              <li key={item.name} className="flex flex-col gap-3 border-t-rule border-cream pt-4">
                <span className="lbl">{item.date}</span>
                <span className="name text-[30px] leading-none tracking-[-0.02em]">{item.name}</span>
                <Chip className={`self-start ${statusChip[item.status]}`}>{item.status}</Chip>
              </li>
            ))}
          </ol>
          <p className="voice max-w-[980px] text-[26px] leading-[1.35]">
            Each page hands off to the next. Home Field ends October 11, the Preferred Customer Event is October 15, and the C.L. Bailey
            Factory Event opens the next morning.
          </p>
          <Cap className="border-t border-cream/35 pt-3.5 text-[14px]">
            Always on · New Arrivals · Designer Program · Custom Built · Financing · In-store financing kiosk · Sitewide Sale
          </Cap>
        </section>

        {/* Every page */}
        <section className="flex flex-col gap-8 px-5 py-16 md:px-16 md:py-24" aria-labelledby="every-headline">
          <LabelRow left={<span id="every-headline">Every page</span>} right="Ten-page program · Live and upcoming" />
          <ol className="grid grid-cols-2 items-start gap-x-3.5 gap-y-7 sm:grid-cols-4 lg:grid-cols-8">
            {strips.map((strip) => (
              <li key={strip.path} className="flex flex-col gap-3">
                <div className="flex min-h-[150px] flex-col gap-1.5">
                  <Cap>{strip.n}</Cap>
                  <Cap className="text-[14px]">{strip.path}</Cap>
                  <span className="voice text-[15px] leading-[1.3]">{strip.credit}</span>
                  <Cap className="mt-auto">{strip.status}</Cap>
                </div>
                <Img src={strip.src} alt={strip.alt} sizes="(min-width: 1024px) 12vw, (min-width: 640px) 25vw, 50vw" className="block h-auto w-full shadow-[0_0_0_1px_rgba(20,18,16,0.18)]" />
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap justify-between gap-x-10 gap-y-2 border-t border-ink pt-3.5">
            <Cap className="text-[14px]">
              Not pictured · /financing-splash, the in-store financing kiosk, built by Brady Stick · /preferred-customer-event, in progress for
              Oct 15
            </Cap>
            <Cap className="whitespace-nowrap text-[14px]">Full pages, top to bottom</Cap>
          </div>
        </section>
        <section className="flex flex-col gap-5 border-t border-ink px-5 py-12 md:px-16" aria-labelledby="engine-link-title">
          <h2 id="engine-link-title" className="name m-0 text-[clamp(30px,4vw,48px)] leading-[1.05]">Keep the customer destination attached to its campaign.</h2>
          <p className="m-0 max-w-[800px] text-[19px] leading-[1.5]">In Engine Room, a page belongs to the same campaign record as its brief, assets, owners and channel schedule. That helps the team see what each page promises, when it runs and where customer interest goes next.</p>
          <Link to="/work/engine-room" className="text-link self-start">Explore the Marketing Engine <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <HouseBar wide back={{ label: '← Campaigns', to: '/campaigns' }} next={{ label: 'Next: Home Field →', to: '/work/home-field' }} />
    </div>
  );
};
