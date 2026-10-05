import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Img } from '../components/Img';
import { Layout } from '../components/Layout';
import { ShowroomFilm } from '../components/ShowroomFilm';
import { PortfolioFilm } from '../components/PortfolioFilm';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_HREF, CONTACT_LABEL, EMAIL } from '../site';
import { tones, type HomeScene } from '../theme';

const paths = [
  { number: '01', name: 'Billiard Factory', image: 'hf-shuffleboard.jpg', alt: 'Two people leaning over a shuffleboard table in a bright loft', imageClass: '', credit: null, detail: 'Seasonal storefront, 27 shoppable rooms, four new décor categories and a commerce transition', to: '#billiard-factory' },
  { number: '02', name: 'Second Son Productions', image: 'robert-glasper-blue-note-at-sea-john-abbott.jpg', alt: 'Robert Glasper playing piano under blue and magenta stage lights', imageClass: '', credit: { text: 'Photo: John Abbott / Jazz Cruises', href: 'https://www.wbgo.org/music/2023-09-25/robert-glasper-on-robtober-his-monthlong-residency-at-the-blue-note' }, detail: 'Release films, live-event content and artist sites that extend the music', to: '#second-son' },
  { number: '03', name: 'Other Projects', image: 'noxguard-packaging.webp', alt: 'Noxguard DEF packaging concept with branded cartons stacked on a pallet', imageClass: 'home-practice-image--noxguard', credit: null, detail: 'Websites and tools built around specific audience decisions', to: '#other-projects' },
] as const;

const bfParts = [
  { name: 'Shopify Plus transition', detail: 'The current checkout remains live while headless Shopify and Xorosoft’s XoroERP are phased in.', to: '/work/off-storis' },
  { name: 'Rooms & new categories', detail: '27 shoppable rooms connect tables with new rugs, lighting, artwork and wallpaper.', to: '/work/spring-stuebner-store' },
  { name: 'Game Room Furniture Partners', detail: 'A 421-item trade catalog helps designers plan rooms before a showroom visit.', to: '/work/game-room-furniture-partners' },
  { name: 'Landing pages & CRM', detail: 'Offer pages capture tagged inquiries in GoHighLevel for sales follow-up.', to: '/work/landing-pages' },
  { name: 'Content Factory', detail: 'AI-assisted posts move through product checks, approval and scheduling.', to: '/work/content-factory' },
  { name: 'C.L. Bailey', detail: 'A bilingual AI concierge answers product questions and routes buyers to dealers.', to: '/work/c-l-bailey-portal-and-concierge' },
] as const;

const connectedWork = [
  { number: '01', kind: 'The platform', name: 'Marketing Engine', image: 'marketing-engine-overview.png', alt: 'Billiard Factory’s Marketing Engine with campaign planning and calendar controls', fit: 'contain', detail: 'Plan the campaign, find its files and see owners, dates and scheduled work in one place.', to: '/work/engine-room', action: 'Explore the platform', note: 'Inside Engine Room' },
  { number: '02', kind: 'The campaign', name: 'Home Field', image: 'home-field-shot.jpg', alt: 'An AI-created Home Field campaign scene of a player lining up a pool shot', fit: 'cover', detail: 'AI-made rooms and film lead to a live offer page, scheduled social and CRM capture.', to: '/work/home-field', action: 'Explore the campaign', note: 'September 14–October 11, 2026' },
  { number: '03', kind: 'The film', name: 'C.L. Bailey Factory Event', image: 'cl-bailey-factory-event-still.jpg', alt: 'A city billboard scene from the C.L. Bailey campaign film, created entirely with AI', fit: 'cover', detail: 'An AI-made film and interactive page give three product lines one campaign destination.', to: '/work/c-l-bailey-factory-event', action: 'Watch the film & explore', note: 'Prepared for October 16–31, 2026' },
] as const;

const musicParts = [
  { name: 'Robert Glasper', detail: 'Four release-team records, two release films and five years of Robtober content.', to: '/work/robert-glasper-album-releases' },
  { name: 'Artist sites', detail: 'Artist sites organize recordings, stories, live dates and a route to connect.', to: '/work/second-son-productions' },
  { name: 'Black Radio Experience', detail: 'Four years of content direction across the Napa festival’s changing identity.', to: '/work/black-radio-experience' },
  { name: 'Blue Note Los Angeles', detail: 'Content that introduced the new Hollywood room and its opening artist.', to: '/work/blue-note-los-angeles' },
] as const;

const process = [
  { number: '01', name: 'Find the direction.', detail: 'Define the audience, buying or operating problem, decision owner and next action before production starts.' },
  { number: '02', name: 'Explore the possibilities.', detail: 'Use AI to turn a brief into reviewable images, copy, prototypes or film treatments while changes are still inexpensive.' },
  { number: '03', name: 'Build it into the work.', detail: 'Build the page, asset library or internal tool; connect it to publishing, commerce or CRM so the work has a delivery path.' },
  { number: '04', name: 'Help people make it their own.', detail: 'Teach the people using the system, keep product checks and approvals visible, and turn repeatable tasks into shared workflows.' },
] as const;

const useHomeScene = () => {
  const [scene, setScene] = useState<HomeScene>('intro');
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-home-scene]'));
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.42;
      let current: HomeScene = 'intro';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= readingLine) current = section.dataset.homeScene as HomeScene;
      }
      setScene(current);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return scene;
};

export const Home = () => {
  const scene = useHomeScene();
  usePageMeta({
    title: 'Joshua Semolik — AI Transformation Leader | Untold.works',
    description: 'Joshua Semolik, AI Transformation Leader across brand, retail, commerce and creative systems. Hands-on building, creative direction and team adoption through Untold.works.',
    path: '/',
  });

  return (
    <Layout tone={tones[scene]} className="home-canvas">
      <Header />
      <main id="main" className="flex flex-col">
        <section data-home-scene="intro" className="studio-hero" aria-labelledby="home-title">
          <div className="studio-hero-scene">
            <picture>
              <source media="(max-width: 550px)" type="image/webp" srcSet="/images/untold-downtown-hero-clear-street-mobile-480.webp 480w, /images/untold-downtown-hero-clear-street-mobile-700.webp 700w" sizes="100vw" />
              <Img src="untold-downtown-hero-clear-street.png" alt="Imagined downtown New York scene of a man showing a woman his phone as they walk together on the sidewalk, with pedestrians receding into the distance" sizes="(max-width: 1459px) 1460px, 100vw" eager fetchPriority="high" className="studio-hero-scene-image" />
            </picture>
            <div className="studio-hero-overlay">
              <div>
                <p className="home-eyebrow">Joshua Semolik <span aria-hidden="true">/</span> AI Transformation Leader</p>
                <h1 id="home-title" className="display studio-hero-title">AI transformation.<br /><span>Creative direction.</span></h1>
              </div>
              <a href="#work" className="text-link">Explore the work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="studio-hero-intro">
            <p>Untold.works is Joshua Semolik’s working studio for AI-led creative and operational change across brand, retail, commerce and creative systems. We build retail experiences, commerce paths, images, films, sites and tools, then connect them to the briefs, approvals, publishing and sales workflows that let a team use them.</p>
          </div>
        </section>

        <section id="ai" data-home-scene="intro" className="home-ai scroll-mt-5" aria-labelledby="home-ai-title">
          <div className="home-ai-overline"><span>How the work gets made</span><span>Build · Create · Teach</span></div>
          <div className="home-ai-grid home-direction-intro">
            <Link to="/art-of-prompting" className="home-direction-image-link" aria-label="Explore the art of prompting">
              <Img src="angelica-street-walking.png" alt="A man walking past a yellow Angelica grocery storefront on a sunny city street" sizes="(min-width: 851px) 55vw, 100vw" className="home-direction-street" />
            </Link>
            <div className="home-ai-copy">
              <h2 id="home-ai-title">Human direction.<br />AI in the making.</h2>
              <p>Human direction shapes the brief, the performance, the image and the edit. AI helps me explore images and films, build websites and connect creative work to marketing systems. Creative judgment, product references and review shape what gets used.</p>
              <Link to="/work/engine-room" className="text-link mt-7">See the Marketing Engine built with AI <span aria-hidden="true">↗</span></Link>
              <Link to="/art-of-prompting" className="text-link mt-4">Explore the art of prompting <span aria-hidden="true">↗</span></Link>
              <Link to="/about#toolkit" className="text-link mt-4">See the tools behind the work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <ol className="studio-process-list">
            {process.map((step) => <li key={step.number}><span className="studio-process-number" aria-hidden="true">{step.number}</span><div><h3>{step.name}</h3><p>{step.detail}</p></div></li>)}
          </ol>
        </section>

        <div id="work" data-home-scene="intro" className="scroll-mt-5 border-b border-current py-16 md:py-20">
          <div className="flex flex-wrap items-start justify-between gap-7">
            <div><p className="lbl m-0">Selected work / Three areas of practice</p><h2 className="name m-0 mt-5 text-[clamp(37px,4.5vw,64px)]">Where the work gets used.</h2></div>
            <p className="m-0 max-w-[530px] text-[18px] leading-[1.5]">Retail systems that connect planning to sales. Music work that extends releases and live events. Focused sites and tools built around what an audience needs to do next.</p>
          </div>
          <nav aria-label="Three bodies of work" className="home-practice-nav">
            {paths.map((item) => (
              <div key={item.number} className="home-practice-card">
                <a href={item.to} className="home-practice-link">
                  <span className="home-practice-meta">{item.number + ' / 03'}</span>
                  <Img src={item.image} alt={item.alt} sizes="(min-width: 768px) 31vw, 100vw" className={`home-practice-image ${item.imageClass}`.trim()} />
                  <strong className="home-practice-title">{item.name}</strong>
                  <span className="home-practice-detail">{item.detail}</span>
                  <span className="home-practice-arrow" aria-hidden="true">↓</span>
                </a>
                <p className="home-practice-credit" aria-hidden={item.credit ? undefined : true}>{item.credit && <a href={item.credit.href} target="_blank" rel="noreferrer">{item.credit.text} <span aria-hidden="true">↗</span></a>}</p>
              </div>
            ))}
          </nav>
        </div>

        <section id="billiard-factory" data-home-scene="brand-and-product" className="scroll-mt-5 border-b border-current py-16 md:py-24" aria-labelledby="bf-home-title">
          <div className="lbl mb-9 flex flex-wrap justify-between gap-4"><span>01 / Billiard Factory</span><span>Retail · Commerce · Campaigns · AI systems</span></div>
          <ShowroomFilm />
          <div className="mt-10 md:mt-14">
            <h2 id="bf-home-title" className="display m-0 max-w-[950px] text-[clamp(50px,5.7vw,86px)]">Billiard Factory</h2>
            <p className="chapter-statement m-0 mt-5 max-w-[1050px] text-[clamp(29px,3vw,43px)] leading-[1.1]">From selling a table to helping people imagine the whole room.</p>
            <p className="m-0 mt-7 max-w-[1120px] border-t border-current pt-6 text-[19px] leading-[1.5]">A roughly three-month push put a seasonal storefront and 27 shoppable room stories online, built from a 34-station showroom plan. Four new décor categories—rugs, lighting, artwork and wallpaper—let shoppers build a setting around the table. The same system connects distinct brand presentations, campaign assets and sales handoffs. Headless Shopify Plus and Xorosoft’s XoroERP are being phased in; the physical showroom redesign continues, and a franchise model is in consultant review.</p>
            <Link to="/work/billiard-factory-and-c-l-bailey" className="text-link mt-6 inline-flex">Explore the full ecosystem <span aria-hidden="true">↗</span></Link>
          </div>
          <section className="home-retail-feature" aria-labelledby="home-retail-title">
            <Link to="/work/billiard-factory-and-c-l-bailey#seasonal-storefront" className="home-retail-image-link" aria-label="Explore the Billiard Factory seasonal storefront and room-led retail work">
              <Img src="bf-fall-opener.webp" alt="AI-assisted fall room visualization from the live Billiard Factory storefront, with a pool table, pendant lighting, artwork and rug" sizes="(min-width: 768px) 58vw, 100vw" className="home-retail-image" />
              <span>Fall storefront / Billiard Factory <span aria-hidden="true">↗</span></span>
            </Link>
            <div className="home-retail-copy">
              <p className="lbl m-0">Retail in practice / Storefront to checkout</p>
              <h3 id="home-retail-title" className="name m-0">A table is the start of the room.</h3>
              <p className="m-0 text-[17px] leading-[1.5]">The fall storefront pairs tables with lighting, rugs, artwork and wallpaper. Twenty-seven digital room stories show those pieces together and link shoppers to the products. Seasonal content gives the team a repeatable way to refresh the offer and creative.</p>
              <div className="home-retail-status">
                <strong>Shopify Plus</strong>
                <span>Headless commerce migration underway. The existing eSTORIS checkout stays live during the transition.</span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <Link to="/work/billiard-factory-and-c-l-bailey#seasonal-storefront" className="text-link">Explore the seasonal storefront <span aria-hidden="true">↗</span></Link>
                <Link to="/work/spring-stuebner-store" className="text-link">Explore the room system <span aria-hidden="true">↗</span></Link>
                <Link to="/work/off-storis" className="text-link">Explore the Shopify transition <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </section>
          <section id="connected-work" className="mt-14 scroll-mt-6 border-t border-current pt-6 md:mt-20" aria-labelledby="connected-work-title">
            <div className="mb-8 grid items-end gap-5 md:grid-cols-2 md:gap-12">
              <div><p className="lbl m-0 mb-4">Billiard Factory / Applied AI in practice</p><h3 id="connected-work-title" className="name m-0 text-[clamp(32px,3.5vw,50px)] leading-[1.02]">The platform, the campaign, the film.</h3></div>
              <p className="m-0 max-w-[520px] text-[17px] leading-[1.5]">Engine Room plans and tracks the work. Home Field carries one brief into assets, publishing and lead capture. The Factory Event shows how the next AI-created campaign uses the same structure.</p>
            </div>
            <div className="grid gap-x-7 gap-y-10 md:grid-cols-3">
              {connectedWork.map((item) => (
                <Link key={item.to} to={item.to} className="group flex min-w-0 flex-col border-b border-current pb-6 no-underline">
                  <div className="lbl flex items-baseline justify-between gap-3 border-t border-current py-3 text-[12px]"><span>{item.number + ' / ' + item.kind}</span><span aria-hidden="true">↗</span></div>
                  <div className="flex aspect-[16/10] items-center overflow-hidden bg-cream">
                    <Img src={item.image} alt={item.alt} sizes="(min-width: 768px) 31vw, 100vw" className={`block h-full w-full ${item.fit === 'contain' ? 'object-contain' : 'object-cover'}`} />
                  </div>
                  <h4 className="name m-0 mt-5 text-[clamp(27px,2.6vw,37px)] leading-[1.06] group-hover:underline group-hover:underline-offset-4">{item.name}</h4>
                  <p className="m-0 mt-4 text-[16px] leading-[1.5]">{item.detail}</p>
                  <span className="mt-auto pt-6 text-[12px] leading-[1.4]">{item.note}</span>
                  <span className="mt-4 text-[14px] font-semibold underline underline-offset-4">{item.action} <span aria-hidden="true">↗</span></span>
                </Link>
              ))}
            </div>
          </section>
          <div className="mt-12 grid gap-x-9 border-b border-current sm:grid-cols-2 lg:grid-cols-3" aria-label="Billiard Factory project layers">
            {bfParts.map((item) => <Link key={item.to} to={item.to} className="flex flex-col gap-3 border-t border-current py-6 pr-6 no-underline"><span className="name flex justify-between gap-3 text-[24px] leading-[1.12]"><strong className="font-[inherit]">{item.name}</strong><span aria-hidden="true">↗</span></span><span className="text-[15px] leading-[1.45]">{item.detail}</span></Link>)}
          </div>
        </section>

        <section id="second-son" data-home-scene="campaigns" className="scroll-mt-5 border-b border-current py-16 md:py-24" aria-labelledby="music-home-title">
          <div className="lbl mb-9 flex flex-wrap justify-between gap-4"><span>02 / Second Son Productions</span><span>Artist sites · Film · Social · Live music</span></div>
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-16">
            <PortfolioFilm id="glasper-film" src="/video/robert-glasper-birthday.mp4" mobileSrc="/video/robert-glasper-birthday-mobile.mp4" poster="/images/robert-glasper-birthday-poster.jpg" width={1920} height={1080} label="Robert Glasper birthday celebration at Blue Note Los Angeles" controlLabel="Robert Glasper birthday film" caption="Robert Glasper / Birthday celebration at Blue Note Los Angeles" nativeControls autoPlayWhenVisible={false} />
            <div className="flex flex-col items-start gap-7">
              <h2 id="music-home-title" className="display m-0 text-[clamp(47px,5.2vw,80px)]">Second Son Productions</h2>
              <p className="chapter-statement m-0 text-[clamp(29px,3vw,43px)] leading-[1.1]">Content that travels beyond a release or a night on stage.</p>
              <p className="m-0 max-w-[690px] text-[19px] leading-[1.5]">With Second Son Productions, I have worked across four Robert Glasper releases, five years of Robtober content, festival and club openings, and artist sites. Film and photography give each project material to announce, document and share; newer AI-built sites give audiences a place to explore after the moment passes.</p>
              <Link to="/work/robert-glasper-blue-note" className="text-link">Explore the music work <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="mt-12 grid gap-x-9 border-b border-current sm:grid-cols-2 lg:grid-cols-4" aria-label="Music projects">
            {musicParts.map((item) => <Link key={item.to} to={item.to} className="flex flex-col gap-3 border-t border-current py-6 pr-6 no-underline"><span className="name flex justify-between gap-3 text-[23px] leading-[1.12]"><strong className="font-[inherit]">{item.name}</strong><span aria-hidden="true">↗</span></span><span className="text-[15px] leading-[1.45]">{item.detail}</span></Link>)}
          </div>
        </section>

        <section id="other-projects" data-home-scene="websites" className="scroll-mt-5 border-b border-current py-16 md:py-24" aria-labelledby="other-home-title">
          <div className="lbl mb-9 flex flex-wrap justify-between gap-4"><span>03 / Other Projects</span><span>Independent · Agency · Focused builds</span></div>
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-16">
            <div className="flex flex-col items-start gap-7">
              <h2 id="other-home-title" className="display m-0 text-[clamp(50px,5.7vw,86px)]">Other Projects</h2>
              <p className="chapter-statement m-0 text-[clamp(29px,3vw,43px)] leading-[1.1]">Different clients, specific problems to solve.</p>
              <p className="m-0 max-w-[660px] text-[19px] leading-[1.5]">For Savor, website and chef content explain fats made from carbon through familiar food. Other work includes multilingual café and hotel sites, product explanations and lead capture. Each build gives its audience a specific way to learn, choose or respond.</p>
              <Link to="/work/other-projects" className="text-link">Explore other projects <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <div className="savor-feature">
                <PortfolioFilm id="savor-film" src="/video/savor-food.mp4" mobileSrc="/video/savor-food-mobile.mp4" poster="/images/savor-film-poster.jpg" width={1280} height={720} label="Savor food film showing pastry making, butter and cooking" controlLabel="Savor film" caption="Savor / From idea to the kitchen" sourceHref="https://www.savor.it/" sourceLabel="Film from Savor" />
                <Link to="/work/savor" className="savor-feature-copy" aria-label="Explore Savor: website and storytelling for a new way to make butter"><span className="lbl">Featured collaboration / Savor</span><h3>A new way to make butter.<br />A story people can taste.</h3><span className="savor-feature-link">Explore Savor <span aria-hidden="true">↗</span></span></Link>
              </div>
              <p className="lbl m-0 border-b border-current py-4 text-[12px] leading-[1.5]">Website &amp; storytelling / through IDW Studio</p>
            </div>
          </div>
          <div className="mt-12 grid gap-x-9 border-b border-current sm:grid-cols-2" aria-label="Other selected projects">
            <Link to="/work/savor" className="flex justify-between gap-4 border-t border-current py-6 pr-6 text-[19px] font-semibold no-underline">Savor <span aria-hidden="true">↗</span></Link>
            <Link to="/work/noxguard" className="flex justify-between gap-4 border-t border-current py-6 pr-6 text-[19px] font-semibold no-underline">Noxguard <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section data-home-scene="close" className="home-close" aria-labelledby="home-close-title">
          <p className="home-eyebrow">Work with Untold.works</p>
          <div className="home-close-grid">
            <h2 id="home-close-title">Put AI into work people can use.</h2>
            <div>
              <p>We can define the use case, build the creative or tool, connect it to the team’s workflow and teach people to use it. The goal is work that can be reviewed, shipped and repeated.</p>
              <p className="home-close-credits">AI transformation across brand, retail, commerce and creative systems.</p>
              <div className="home-close-actions">
                <Link to="/about" className="text-link">About the studio <span aria-hidden="true">↗</span></Link>
                <a href={CONTACT_HREF} target={EMAIL ? undefined : '_blank'} rel={EMAIL ? undefined : 'noopener noreferrer'} className="text-link">{'Connect on ' + CONTACT_LABEL}<span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
