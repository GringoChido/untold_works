import { Link } from 'react-router-dom';
import { CaseFilm } from '../../components/CaseFilm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { clBaileyFactoryFilm } from '../../data/campaignMedia';
import { WhatsNext } from '../../components/WhatsNext';
import { usePageMeta } from '../../hooks/usePageMeta';

const workflow = [
  { id: 'plan', label: 'Plan', kind: 'Strategy and campaign planning',
    body: 'A rolling calendar holds the year’s campaign windows and priorities. Each campaign has one brief that sets the idea, the dates and the offer rules, with supporting briefs for each audience.' },
  { id: 'make', label: 'Make', kind: 'Creative and content production',
    body: 'We use Higgsfield to make campaign rooms, images and films, and Claude Code to help build the web experiences around them. Every piece stays linked to the brief and the channel where it will run.' },
  { id: 'launch', label: 'Launch', kind: 'Publishing and media',
    body: 'Each channel row carries copy, linked files, an owner, a status and a date. Paid, organic, email, website and production work share one campaign record, and a person approves every piece before it goes out.' },
  { id: 'measure', label: 'Measure', kind: 'Reporting and attribution',
    body: 'Sales, leads, ads, email and social come together in Data Studio, each number against its target.' },
  { id: 'adjust', label: 'Adjust', kind: 'In-market optimization',
    body: 'Data Studio names what to change, who owns it and how sure the numbers are. That decision feeds the next plan.' },
] as const;

const CaseLink = ({ to, children }: { to: string; children: string }) => (
  <Link to={to} className="text-link">{children}<span aria-hidden="true">↗</span></Link>
);

export const EngineRoom = () => {
  usePageMeta({
    title: 'Engine Room | A Marketing Engine Built with AI | Untold.works',
    description: 'We built Billiard Factory’s Engine Room with Claude Code so the team could plan campaigns, review assets and track delivery.',
    path: '/work/engine-room',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/work' }, { label: 'Billiard Factory', to: '/work/billiard-factory-and-c-l-bailey' }, { label: 'Engine Room' }]} />
      <main id="main" className="flex flex-col">
        <section className="pb-12 pt-12 md:pb-16 md:pt-16" aria-labelledby="engine-room-title">
          <p className="lbl m-0 mb-6 text-[13px]">Engine Room / Billiard Factory</p>
          <h1 id="engine-room-title" className="display m-0 max-w-[1100px] text-[clamp(49px,6.5vw,96px)] leading-[0.95]">A marketing engine.<br />Built with AI.</h1>
          <div className="mt-9 grid items-start gap-8 border-t border-current pt-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
            <p className="voice m-0 max-w-[570px] text-[clamp(23px,2.3vw,32px)] leading-[1.3]">Which artwork is approved, who owns it and when does it run? We built Engine Room with Claude Code so the marketing team can answer those questions from the campaign brief.</p>
            <div className="flex flex-col gap-6">
            <nav className="flex flex-wrap gap-x-7 gap-y-2" aria-label="Explore the Engine Room case">
              <a href="#workflow" className="text-link min-h-[44px]">The workflow <span aria-hidden="true">↓</span></a>
              <a href="#home-field" className="text-link min-h-[44px]">Home Field <span aria-hidden="true">↓</span></a>
              <a href="#ai-campaign-film" className="text-link min-h-[44px]">AI campaign film <span aria-hidden="true">↓</span></a>
            </nav>
            </div>
          </div>
        </section>

        <figure className="m-0 min-w-0">
          <Img src="home-field-shot.jpg" alt="Home Field campaign image of a player lining up a pool shot in a game room" sizes="(min-width: 1440px) 1312px, 100vw" eager className="block h-auto w-full bg-ink object-cover" />
          <figcaption className="lbl border-b border-current py-4 text-[12px]">Home Field / campaign creative made with AI</figcaption>
        </figure>

        <section id="workflow" className="flex scroll-mt-8 flex-col gap-8 py-20 md:py-28" aria-labelledby="workflow-title">
          <LabelRow left="From strategy to delivery" right="Plan. Make. Launch. Measure. Adjust." />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <h2 id="workflow-title" className="name m-0 max-w-[610px] text-[clamp(38px,4.3vw,64px)] leading-[0.98]">One brief carries through every channel.</h2>
            <p className="voice m-0 max-w-[640px] text-[22px] leading-[1.4]">Reusable campaign kits set out channel requirements early. AI helps us build the platform and produce creative options; product checks and human approval determine what gets published.</p>
          </div>
          <ol className="m-0 list-none border-b border-current p-0">
            {workflow.map((item) => (
              <li key={item.id} className="grid items-baseline gap-x-10 gap-y-1 border-t border-current py-4 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.2fr)_minmax(0,2.6fr)]">
                <span className="name text-[clamp(24px,2.4vw,36px)] uppercase leading-none">{item.label}</span>
                <span className="text-[15px] font-bold">{item.kind}</span>
                <span className="text-[17px] leading-[1.5]">{item.body}</span>
              </li>
            ))}
          </ol>
          <p className="m-0 max-w-[640px] text-[17px] leading-[1.5]">The working platform holds a client’s real campaigns, so we show it in a walkthrough with sample data. <Link to="/work-together#contact" className="underline underline-offset-4">Ask for a walkthrough</Link>.</p>
        </section>

        <section id="home-field" className="flex scroll-mt-8 flex-col gap-8 border-t border-current pb-20 pt-8 md:pb-28" aria-labelledby="home-field-example-title">
          <LabelRow left="Worked example / Home Field" right="A fall campaign" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <div>
              <h2 id="home-field-example-title" className="name m-0 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">One campaign. A connected body of work.</h2>
              <p className="voice mb-0 mt-7 text-[23px] leading-[1.35]">“This year, everyone comes to you.”</p>
            </div>
            <p className="m-0 text-[19px] leading-[1.55]">Home Field’s central brief sets the tier, the dates and the offer rules. Supporting briefs address distinct audiences and product stories. Each connects to files, owners, dates and a destination, so the team can trace a deliverable back to the campaign decision it serves.</p>
          </div>
          <div className="flex flex-wrap gap-x-9 gap-y-4"><CaseLink to="/work/home-field">Explore the Home Field creative</CaseLink><CaseLink to="/work/landing-pages">Follow the landing page and lead capture</CaseLink></div>
        </section>

        <section className="flex flex-col gap-8 border-t border-current pb-20 pt-8 md:pb-28" aria-labelledby="channel-title">
          <LabelRow left="Parallel channels" right="One shared campaign context" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <h2 id="channel-title" className="name m-0 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">Make every handoff visible.</h2>
            <p className="m-0 text-[19px] leading-[1.55]">Each channel row shows copy, linked assets, an owner, a status and a date. Marketers can spot missing files, teammates can open or download the assets tied to a deliverable, and reviewers can see scheduled or published social in the campaign context.</p>
          </div>
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <div><h3 className="name m-0 text-[32px] leading-[1.05]">Engine Room coordinates. Content Factory publishes.</h3><p className="mb-0 mt-5 text-[18px] leading-[1.55]">The Organic view shows published and scheduled Content Factory records beside the campaign plan. That lets the team see what actually went out without losing the brief and assets behind it. We designed and directed Content Factory with the team. Posts still require human approval.</p><p className="mb-0 mt-6"><CaseLink to="/work/content-factory">Explore Content Factory</CaseLink></p></div>
            <div><h3 className="name m-0 text-[32px] leading-[1.05]">The page carries the next conversation.</h3><p className="mb-0 mt-5 text-[18px] leading-[1.55]">Home Field’s live landing page connects the campaign story to a GoHighLevel lead form. We connected the sales team to the CRM before building this campaign system, so interest has a path to sales follow-up.</p><p className="mb-0 mt-6"><CaseLink to="/work/landing-pages">Explore the customer handoff</CaseLink></p></div>
          </div>
        </section>

        <section id="ai-campaign-film" className="flex scroll-mt-8 flex-col gap-8 border-t border-current pb-20 pt-8 md:pb-28" aria-labelledby="factory-event-title">
          <LabelRow left="Campaign film / C.L. Bailey Factory Event" right="Prepared for October 16–31, 2026" />
          <div className="grid gap-7 md:grid-cols-2 md:gap-16">
            <h2 id="factory-event-title" className="name m-0 text-[clamp(38px,4.3vw,64px)] leading-[0.98]">A new campaign uses the same structure.</h2>
            <div className="flex flex-col gap-5"><p className="m-0 text-[19px] leading-[1.55]">The October 16–31 Factory Event campaign brings a 10% offer on C.L. Bailey and Velocity into showrooms and online. Its creative, film and campaign destination were prepared for the October 16 opening.</p><p className="m-0 text-[16px] leading-[1.5]">“The Table Is Open,” “The Long Game” and “On The Floor” are the page’s editorial lanes. Outdoor advertising scenes are creative concepts.</p></div>
          </div>
          <CaseFilm {...clBaileyFactoryFilm} id="engine-room-factory-event-film" />
          <div><CaseLink to="/work/c-l-bailey-factory-event">See the Factory Event campaign</CaseLink></div>
        </section>
        <WhatsNext />
      </main>
      <HouseBar back={{ label: '← Billiard Factory', to: '/work/billiard-factory-and-c-l-bailey' }} next={{ label: 'Next: Home Field →', to: '/work/home-field' }} />
      <Footer />
    </Layout>
  );
};
