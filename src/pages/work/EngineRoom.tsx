import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaseFilm } from '../../components/CaseFilm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { clBaileyFactoryFilm } from '../../data/campaignMedia';
import { usePageMeta } from '../../hooks/usePageMeta';
import { tones } from '../../theme';

const workflow = [
  {
    id: 'plan', label: 'Plan', title: 'Give the year a working structure.',
    body: 'A rolling 12-month calendar holds campaign windows and priorities. A, B and C tiers connect the scale of a campaign to reusable deliverable kits, so dates and channel needs become part of the plan from the start.',
    evidence: 'The October 3, 2026 working calendar contains 18 campaigns.',
    image: 'marketing-engine-calendar.png', alt: 'Marketing Engine working calendar showing campaign windows and planning structure',
  },
  {
    id: 'brief', label: 'Brief', title: 'One campaign, several useful stories.',
    body: 'The campaign brief establishes the idea, dates and offer rules. Supporting briefs give subcampaigns their own audience and purpose, with website destinations and deliverables attached to the wider campaign.',
    evidence: 'Home Field connects its main campaign to designer, custom-product, new-product and invitation briefs.',
    image: 'marketing-engine-home-field-briefs.png', alt: 'Supporting Home Field campaign briefs with distinct concepts, destinations and content status',
  },
  {
    id: 'make', label: 'Make', title: 'Carry the idea into things people can see.',
    body: 'I use Higgsfield to make campaign rooms, images and films, and Claude Code to help build the web experiences around them. Shared assets and links keep that creative connected to the brief and the channel where it will be used.',
    evidence: 'Home Field brings AI-made room imagery and film into a live campaign page.',
    image: 'home-field-shot.jpg', alt: 'Home Field campaign image of a player lining up a pool shot in a game room',
  },
  {
    id: 'review', label: 'Review & schedule', title: 'Make the handoff visible.',
    body: 'Channel rows carry copy, file links, an owner, a status and a date. Teammates can open or download the linked assets from the campaign record; asset-presence indicators show what is still missing. Review status and the calendar make the next handoff visible.',
    evidence: 'Home Field has 131 deliverables in its October 3 working plan; the count records the planned scope.',
    image: 'marketing-engine-home-field-assets.png', alt: 'Home Field asset and deliverable records with links and current working status',
  },
  {
    id: 'deliver', label: 'Deliver', title: 'Connect the channels to the same campaign.',
    body: 'Paid, Organic, Email, Website, Production and SEO share the campaign context. Social creative is reviewed, scheduled and published through Content Factory; Engine Room shows those scheduled and published records beside the brief and assets. Campaign pages give customers the next step.',
    evidence: 'The Organic view shows Content Factory records within the Home Field campaign context.',
    image: 'marketing-engine-home-field-social.png', alt: 'Home Field Organic view showing published and scheduled Content Factory social records',
  },
] as const;

const subcampaigns = [
  'Designer Program', 'Custom Built', 'This Season’s Roster', 'Something’s Taking Shape', 'Preferred Customer Invitation',
] as const;

const channels = [
  { name: 'Paid', detail: 'Ad copy, creative links, owners and planned dates.' },
  { name: 'Organic', detail: 'Published and scheduled social records from Content Factory.' },
  { name: 'Email', detail: 'Authored messages and a gallery for review.' },
  { name: 'Website', detail: 'Landing pages, banners, homepage changes and customer destinations.' },
  { name: 'Production', detail: 'Campaign films, in-store screen loops and creative handoffs.' },
  { name: 'SEO', detail: 'Search, AEO and blog ideas that can be promoted into production work.' },
] as const;

const CaseLink = ({ to, children }: { to: string; children: string }) => (
  <Link to={to} className="text-link">{children}<span aria-hidden="true">↗</span></Link>
);

export const EngineRoom = () => {
  const [activeStep, setActiveStep] = useState(0);
  const step = workflow[activeStep];

  usePageMeta({
    title: 'Engine Room — A Marketing Engine Built with AI | Untold.works',
    description: 'Joshua Semolik designed and built Billiard Factory’s Engine Room with Claude Code: a marketing ecosystem connecting campaign strategy, briefs, creative assets, review, scheduling and channel delivery.',
    path: '/work/engine-room',
  });

  return (
    <Layout tone={tones.platforms}>
      <Header crumbs={[{ label: 'Work', to: '/#work' }, { label: 'Billiard Factory', to: '/work/billiard-factory-and-c-l-bailey' }, { label: 'Engine Room' }]} />
      <main id="main" className="flex flex-col">
        <section className="grid gap-9 pb-14 pt-14 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-end md:gap-16 md:pb-20 md:pt-20" aria-labelledby="engine-room-title">
          <div>
            <p className="lbl m-0 mb-7 text-[13px]">Engine Room / Billiard Factory</p>
            <h1 id="engine-room-title" className="display m-0 text-[clamp(49px,6.5vw,100px)] leading-[0.95]">A marketing engine.<br />Built with AI.</h1>
          </div>
          <div className="flex flex-col gap-6 border-t border-current pt-5">
            <p className="voice m-0 text-[clamp(23px,2.3vw,32px)] leading-[1.3]">I designed and built Engine Room with Claude Code so a campaign’s brief, assets, owners, dates and channel work can be found in one place.</p>
            <p className="m-0 text-[17px] leading-[1.55]">Teams can plan the film, posts, email and landing page against the same offer and deadline. Linked files and status indicators show what is ready, what is missing and who owns the next step.</p>
            <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Explore the Engine Room case">
              <a href="#workflow" className="text-link min-h-[44px]">The workflow <span aria-hidden="true">↓</span></a>
              <a href="#home-field" className="text-link min-h-[44px]">Home Field <span aria-hidden="true">↓</span></a>
              <a href="#ai-campaign-film" className="text-link min-h-[44px]">AI campaign film <span aria-hidden="true">↓</span></a>
            </nav>
          </div>
        </section>

        <figure className="m-0 min-w-0">
          <Img src="marketing-engine-overview.png" alt="The Marketing Engine overview in Billiard Factory’s working platform" sizes="(min-width: 1440px) 1312px, 100vw" eager className="block h-auto w-full bg-ink object-contain" />
          <figcaption className="lbl flex flex-wrap justify-between gap-3 border-b border-current py-4 text-[12px]"><span>Working platform / October 2026</span><span>Designed and built by Joshua Semolik with Claude Code</span></figcaption>
        </figure>

        <section id="workflow" className="flex scroll-mt-8 flex-col gap-8 py-20 md:py-28" aria-labelledby="workflow-title">
          <LabelRow left="From strategy to delivery" right="Explore the working process" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <h2 id="workflow-title" className="name m-0 max-w-[610px] text-[clamp(38px,4.3vw,64px)] leading-[0.98]">One brief carries through every channel.</h2>
            <p className="voice m-0 max-w-[640px] text-[22px] leading-[1.4]">Reusable campaign kits set out channel requirements early. AI helps me build the platform and produce creative options; product checks and human approval determine what gets published.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-5" role="group" aria-label="Explore the campaign workflow">
            {workflow.map((item, index) => (
              <button key={item.id} type="button" id={`workflow-${item.id}-button`} onClick={() => setActiveStep(index)} aria-pressed={activeStep === index} aria-controls="workflow-detail" className={`flex min-h-[76px] flex-col items-start justify-between gap-3 border border-current px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${activeStep === index ? 'bg-ink text-cream' : 'bg-transparent text-ink hover:bg-ink/5'}`}>
                <span className="lbl text-[11px]">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[15px] font-semibold leading-[1.25]">{item.label}</span>
              </button>
            ))}
          </div>
          <p className="sr-only" role="status">{`${step.label}: ${step.title}`}</p>
          <div id="workflow-detail" role="region" aria-labelledby={`workflow-${step.id}-button`} className="grid items-start gap-8 border-b border-current pb-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="name m-0 text-[clamp(29px,3vw,42px)] leading-[1.04]">{step.title}</h3>
              <p className="m-0 text-[18px] leading-[1.55]">{step.body}</p>
              <p className="m-0 border-t border-current pt-4 text-[15px] leading-[1.5]">{step.evidence}</p>
            </div>
            <figure className="m-0 min-w-0">
              <Img src={step.image} alt={step.alt} sizes="(min-width: 768px) 60vw, 100vw" className="block h-auto w-full bg-ink object-contain" />
              <figcaption className="lbl pt-3 text-[11px]">{step.id === 'make' ? 'Home Field / campaign creative made with AI' : 'Working platform / October 2026'}</figcaption>
            </figure>
          </div>
        </section>

        <section id="home-field" className="flex scroll-mt-8 flex-col gap-8 border-t border-current pb-20 pt-8 md:pb-28" aria-labelledby="home-field-example-title">
          <LabelRow left="Worked example / Home Field" right="September 14–October 11, 2026" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <div>
              <h2 id="home-field-example-title" className="name m-0 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">One campaign. A connected body of work.</h2>
              <p className="voice mb-0 mt-7 text-[23px] leading-[1.35]">“This year, everyone comes to you.”</p>
            </div>
            <p className="m-0 text-[19px] leading-[1.55]">In the October 3 working snapshot, Home Field’s central brief sets the tier, dates and offer rules. Five supporting briefs address distinct audiences or product stories. Each connects to files, owners, dates and a destination, so the team can trace a deliverable back to the campaign decision it serves.</p>
          </div>
          <dl className="m-0 grid gap-7 border-y border-current py-7 sm:grid-cols-3">
            <div><dt className="lbl text-[12px]">Home Field working plan</dt><dd className="m-0 mt-3"><span className="name block text-[42px] leading-none">131 deliverables</span><span className="mt-3 block text-[14px] leading-[1.45]">Planned work recorded October 3, 2026; completion varies by item.</span></dd></div>
            <div><dt className="lbl text-[12px]">Platform email review gallery</dt><dd className="m-0 mt-3"><span className="name block text-[42px] leading-none">28 authored emails</span><span className="mt-3 block text-[14px] leading-[1.45]">Messages available to review; this figure counts authored work.</span></dd></div>
            <div><dt className="lbl text-[12px]">Delivery structure</dt><dd className="m-0 mt-3"><span className="name block text-[42px] leading-none">One working home</span><span className="mt-3 block text-[14px] leading-[1.45]">Paid, social, email, website, production and search work stay connected.</span></dd></div>
          </dl>
          <div className="grid gap-7 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] md:gap-12">
            <div><h3 className="name m-0 text-[32px] leading-[1.05]">The stories inside the campaign.</h3><p className="mb-0 mt-4 text-[17px] leading-[1.5]">Each brief makes room for a distinct audience, product story or next action.</p></div>
            <div className="flex flex-col gap-5">
              <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">{subcampaigns.map((name) => <li key={name} className="border border-current px-4 py-4 text-[17px] font-semibold leading-[1.3]">{name}</li>)}</ul>
              <p className="m-0 text-[15px] leading-[1.5]">Sitewide Savings and Editorial continue as always-on work alongside those briefs.</p>
            </div>
          </div>
          <figure className="m-0 min-w-0">
            <Img src="marketing-engine-home-field-assets.png" alt="Home Field campaign asset records showing file links, asset presence and deliverable status" sizes="(min-width: 1440px) 1312px, 100vw" className="block h-auto w-full bg-ink object-contain" />
            <figcaption className="lbl border-b border-current py-4 text-[12px]">Working platform / October 2026 / Assets and deliverables</figcaption>
          </figure>
          <div className="flex flex-wrap gap-x-9 gap-y-4"><CaseLink to="/work/home-field">Explore the Home Field creative</CaseLink><CaseLink to="/work/landing-pages">Follow the landing page and lead capture</CaseLink></div>
        </section>

        <section className="flex flex-col gap-8 border-t border-current pb-20 pt-8 md:pb-28" aria-labelledby="channel-title">
          <LabelRow left="Parallel channels" right="One shared campaign context" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <h2 id="channel-title" className="name m-0 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">Make every handoff visible.</h2>
            <p className="m-0 text-[19px] leading-[1.55]">Each channel row shows copy, linked assets, an owner, a status and a date. Marketers can spot missing files, teammates can open or download the assets tied to a deliverable, and reviewers can see scheduled or published social in the campaign context.</p>
          </div>
          <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3" aria-label="Parallel campaign work lanes">
            {channels.map((channel) => <li key={channel.name} className="flex flex-col gap-4 border-t border-current bg-ink/5 p-5"><h3 className="name m-0 text-[29px] leading-none">{channel.name}</h3><p className="m-0 text-[16px] leading-[1.5]">{channel.detail}</p></li>)}
          </ul>
          <figure className="m-0 min-w-0">
            <Img src="marketing-engine-home-field-social.png" alt="Home Field Organic lane with published and scheduled records from Content Factory" sizes="(min-width: 1440px) 1312px, 100vw" className="block h-auto w-full bg-ink object-contain" />
            <figcaption className="lbl border-b border-current py-4 text-[12px]">Working platform / October 2026 / Organic channel records</figcaption>
          </figure>
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <div><h3 className="name m-0 text-[32px] leading-[1.05]">Engine Room coordinates. Content Factory publishes.</h3><p className="mb-0 mt-5 text-[18px] leading-[1.55]">The Organic view shows published and scheduled Content Factory records beside the campaign plan. That lets the team see what actually went out without losing the brief and assets behind it. I designed and directed Content Factory; Brady Stick built it. Posts still require human approval.</p><p className="mb-0 mt-6"><CaseLink to="/work/content-factory">Explore Content Factory</CaseLink></p></div>
            <div><h3 className="name m-0 text-[32px] leading-[1.05]">The page carries the next conversation.</h3><p className="mb-0 mt-5 text-[18px] leading-[1.55]">Home Field’s live landing page connects the campaign story to a GoHighLevel lead form. I connected the sales team to the CRM before building this campaign system, so interest has a path to sales follow-up.</p><p className="mb-0 mt-6"><CaseLink to="/work/landing-pages">Explore the customer handoff</CaseLink></p></div>
          </div>
        </section>

        <section id="ai-campaign-film" className="flex scroll-mt-8 flex-col gap-8 border-t border-current pb-20 pt-8 md:pb-28" aria-labelledby="factory-event-title">
          <LabelRow left="Upcoming campaign / C.L. Bailey Factory Event" right="Prepared for October 16–31, 2026" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <h2 id="factory-event-title" className="name m-0 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">A new campaign uses the same structure.</h2>
            <div className="flex flex-col gap-5"><p className="m-0 text-[19px] leading-[1.55]">The upcoming Factory Event brings a 10% offer on C.L. Bailey and Velocity into showrooms and online. Its creative, film and campaign destination are being prepared for the October 16 opening.</p><p className="m-0 text-[16px] leading-[1.5]">“The Table Is Open,” “The Long Game” and “On The Floor” are the page’s editorial lanes. Outdoor advertising scenes are creative concepts.</p></div>
          </div>
          <CaseFilm {...clBaileyFactoryFilm} id="engine-room-factory-event-film" />
          <div><CaseLink to="/work/c-l-bailey-factory-event">Explore the upcoming Factory Event</CaseLink></div>
        </section>

        <section className="grid gap-8 border-t border-current pb-24 pt-8 md:grid-cols-2 md:gap-16 md:pb-32" aria-labelledby="build-title">
          <div><LabelRow left="My role" right="Strategy · Design · Build" /><h2 id="build-title" className="name mb-0 mt-7 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">Give the next campaign a working starting point.</h2></div>
          <div className="flex flex-col gap-6"><p className="voice m-0 text-[24px] leading-[1.35]">I designed and built Engine Room with Claude Code around the team’s recurring tasks: plan a campaign, make assets, review them, schedule channels and track what shipped.</p><p className="m-0 text-[18px] leading-[1.55]">Supabase persists the records; linked assets keep the output attached to its brief. Reusable kits prefill the shape of future campaigns, so the team can spend its time on the new idea and offer while retaining clear owners, dates and review steps.</p><div className="flex flex-wrap gap-x-8 gap-y-4"><CaseLink to="/work/billiard-factory-and-c-l-bailey">See the wider Billiard Factory transformation</CaseLink><CaseLink to="/about">About my AI practice</CaseLink></div></div>
        </section>
      </main>
      <HouseBar back={{ label: '← Billiard Factory', to: '/work/billiard-factory-and-c-l-bailey' }} next={{ label: 'Next: Home Field →', to: '/work/home-field' }} />
      <Footer />
    </Layout>
  );
};
