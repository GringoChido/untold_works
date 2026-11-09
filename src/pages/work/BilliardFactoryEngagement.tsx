import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { LabelRow } from '../../components/LabelRow';
import { Layout } from '../../components/Layout';
import { usePageMeta } from '../../hooks/usePageMeta';

const caseLinkClass = 'inline-flex items-baseline gap-2 border-b border-current pb-1 text-[15px] font-semibold no-underline';

const CaseLink = ({ to, children }: { to: string; children: string }) => (
  <Link to={to} className={caseLinkClass}>{children}<span aria-hidden="true">↗</span></Link>
);

const ExternalLink = ({ href, children }: { href: string; children: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={caseLinkClass}>{children}<span aria-hidden="true">↗</span></a>
);

const Detail = ({ label, children }: { label: string; children: string }) => (
  <div className="flex flex-col gap-3 border-t border-current py-5">
    <dt className="lbl text-[13px]">{label}</dt>
    <dd className="m-0 max-w-[590px] text-[17px] leading-[1.5]">{children}</dd>
  </div>
);

const related = [
  { group: 'Retail & product', items: [
    { name: 'Spring Gallery', to: '/work/spring-stuebner-store', note: 'Live digital rooms; physical redesign in progress' },
    { name: 'Game Room Furniture Partners', to: '/work/game-room-furniture-partners', note: 'Billiard Factory’s trade-only showroom, focused on interior designers' },
    { name: 'Billiard Factory Brand Hub', to: '/work/brand-hub', note: 'Live brand reference and design tokens' },
    { name: 'Tierra cue line', to: '/work/tierra-cue-line', note: 'Approved product direction; factory artwork in progress' },
  ] },
  { group: 'Customer & dealer experience', items: [
    { name: 'C.L. Bailey portal and concierge', to: '/work/c-l-bailey-portal-and-concierge', note: 'Bilingual public site and private dealer path' },
    { name: 'C.L. Bailey Brand Bible', to: '/work/c-l-bailey-brand-bible', note: 'Live guidelines for consistent dealer-facing work' },
    { name: 'Commerce transition', to: '/work/off-storis', note: 'Shopify checkout launch documented in October 2026; ERP transition continues' },
  ] },
  { group: 'Campaign & delivery', items: [
    { name: 'Landing pages', to: '/work/landing-pages', note: 'Offer pages, CRM capture and sales handoff' },
    { name: 'Season Opener', to: '/work/season-opener', note: 'August campaign brief and creative direction' },
    { name: 'Home Field', to: '/work/home-field', note: 'Room-led retail campaign' },
    { name: 'Engine Room', to: '/work/engine-room', note: 'Marketing platform built with AI: planning, assets, schedules and delivery' },
    { name: 'C.L. Bailey Factory Event', to: '/work/c-l-bailey-factory-event', note: 'Factory Event film, artwork and interactive offer page' },
    { name: 'Content Factory', to: '/work/content-factory', note: 'AI-assisted creative and publishing workflow' },
  ] },
] as const;

const channelProof = [
  {
    number: '01',
    title: 'Home Field',
    description: 'A campaign idea carried from the live offer page into an Instagram story about coming home to the game.',
    href: 'https://www.instagram.com/billiard_factory/p/DeCbgGbl88X/',
    label: 'View the published campaign post',
  },
  {
    number: '02',
    title: 'Spring, in progress',
    description: 'Public posts show the physical showroom changing while the digital room stories are already shoppable.',
    href: 'https://www.instagram.com/billiard_factory/p/Ddbl1dMFI2r/',
    label: 'View the showroom update',
  },
  {
    number: '03',
    title: 'C.L. Bailey',
    description: 'Product and craft storytelling uses a quieter voice for the dealer-focused brand.',
    href: 'https://www.instagram.com/the_clbailey_co/p/DeC97-ojOG8/',
    label: 'View the published brand post',
  },
] as const;

const giftGuides = [
  { title: 'Holiday Gift Guide', url: 'https://bf-landing-pages.netlify.app/holiday-gift-guide/', image: 'bf-holiday-guide-cover.webp', alt: 'Holiday campaign artwork featuring four gifts for the game room' },
  { title: 'Black Friday Gift Guide', url: 'https://bf-landing-pages.netlify.app/black-friday/', image: 'bf-black-friday-guide-cover.webp', alt: 'Black Friday campaign artwork featuring gifts for players, hosts and families' },
] as const;

const campaignExamples = [
  { name: 'Home Field', image: 'home-field-shot.jpg', alt: 'Home Field campaign image of a player lining up a pool shot', line: 'AI-made rooms and film carried into a live page and social campaign.', to: '/work/home-field' },
  { name: 'C.L. Bailey Factory Event', image: 'cl-bailey-factory-event-still.jpg', alt: 'A city billboard scene from the AI-created C.L. Bailey Factory Event film', line: '“The Table Is Open” carried the film’s invitation into a page where shoppers could explore the C.L. Bailey line and find a showroom.', to: '/work/c-l-bailey-factory-event' },
  { name: 'Labor Day', image: 'labor-day-page.jpg', alt: 'Live Labor Day offer page for Billiard Factory', line: 'Set the creative direction and supplied the template. The team built the page and wrote the search copy.', to: '/work/labor-day-sale' },
] as const;

const roomFinishes = [
  { name: 'Lighting', image: 'bf-fall-light.webp', alt: 'AI-assisted Billiard Factory room visualization with a chandelier over a pool table', detail: 'Pendant and chandelier options change how the table and seating read as one space.', href: 'https://billiardfactory.com/lighting', linkLabel: 'Shop lighting' },
  { name: 'Rugs', image: 'bf-fall-rug.webp', alt: 'AI-assisted Billiard Factory room visualization with a patterned rug beneath a pool table', detail: 'A rug helps customers judge scale, color and the space needed around the table.', href: 'https://billiardfactory.com/rugs', linkLabel: 'Shop rugs' },
  { name: 'Art & walls', image: 'bf-fall-wall.webp', alt: 'AI-assisted Billiard Factory room visualization with artwork and wallpaper behind a pool table', detail: 'Artwork and wallpaper complete the setting and create another route into the assortment.', href: 'https://billiardfactory.com/artwork', linkLabel: 'Shop artwork' },
] as const;

export const BilliardFactoryEngagement = () => {
  usePageMeta({
    title: 'Billiard Factory + C.L. Bailey, Untold.works',
    description: 'Explore my work for Billiard Factory and C.L. Bailey, from shoppable rooms and dealer tools to a Shopify launch and the Stick family gift guides.',
    path: '/work/billiard-factory-and-c-l-bailey',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/' }, { label: 'Billiard Factory + C.L. Bailey' }]} />
      <main id="main" className="flex flex-col">
        <section className="pb-12 pt-12 md:pb-16 md:pt-16" aria-labelledby="engagement-title">
          <p className="lbl m-0 mb-6 text-[13px]">Featured engagement / AI-assisted retail transformation</p>
          <h1 id="engagement-title" className="display m-0 max-w-[1150px] text-[clamp(52px,7vw,100px)] leading-[0.92]">Billiard Factory + C.L. Bailey</h1>
          <p className="name m-0 mt-9 max-w-[950px] border-t border-current pt-6 text-[clamp(28px,3vw,42px)] leading-[1.04]">From a showroom floor plan to a room you can shop.</p>
          <div className="mt-7 grid items-start gap-5 md:grid-cols-2 md:gap-14">
            <p className="m-0 text-[19px] leading-[1.5]">Led the creative for Billiard Factory’s Spring showroom and website rebuild. Working from the floor plan, we turned 27 room concepts into shoppable collections. Shoppers can see how a table looks with a rug, lighting and art, then buy the pieces online.</p>
            <p className="m-0 text-[19px] leading-[1.5]">After the C.L. Bailey acquisition, I built a site that shows the craftsmanship behind the tables and a private portal where dealers can find product images, specs and sales materials.</p>
          </div>
          <nav className="mt-7 flex flex-wrap gap-x-7 gap-y-2" aria-label="Explore the Billiard Factory engagement">
            <a href="#holiday-gift-guides" className="text-link min-h-[44px]">Holiday &amp; Black Friday gift guides <span aria-hidden="true">↓</span></a>
            <a href="#retail-experience" className="text-link min-h-[44px]">Retail experience <span aria-hidden="true">↓</span></a>
            <a href="#seasonal-storefront" className="text-link min-h-[44px]">Seasonal storefront <span aria-hidden="true">↓</span></a>
            <a href="#campaign-work" className="text-link min-h-[44px]">Campaign work <span aria-hidden="true">↓</span></a>
            <a href="#marketing-engine" className="text-link min-h-[44px]">Marketing Engine <span aria-hidden="true">↓</span></a>
          </nav>
        </section>

        <div className="grid aspect-[2.6/1] grid-cols-[1fr_auto_1fr] items-center gap-[5%] bg-[#e9e4da] px-[8%] md:aspect-[3.7/1]">
          <img src="/images/bf-identity-mark.webp" width="970" height="268" alt="Billiard Factory" className="block w-full" />
          <span aria-hidden="true" className="h-[30%] w-px bg-black/25" />
          <img src="/images/cl-bailey-identity-mark.webp" width="970" height="262" alt="The C.L. Bailey Co." className="block w-full" />
        </div>

        <section id="holiday-gift-guides" className="scroll-mt-8 pt-12 md:pt-16" aria-labelledby="gift-guides-title">
          <LabelRow left="Seasonal campaigns" right="2026" />
          <div className="grid items-start gap-7 pt-7 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <h2 id="gift-guides-title" className="name m-0 text-[clamp(36px,4vw,60px)] leading-[1.02]">Holiday &amp; Black Friday gift guides</h2>
              <p className="m-0 mt-5 max-w-[560px] text-[18px] leading-[1.55]">I started with a product list and one question for the shopper. Who’s on your list? That became “Picked by the Sticks,” eight shoppable gift lists with recommendations from the family behind Billiard Factory.</p>
              <p className="m-0 mt-4 max-w-[560px] text-[17px] leading-[1.55]">I built the guide in about two weeks, using AI for imagery, copy and animation. I worked with the team on product selection and campaign timing, then prepared the paid ads, social posts and publishing calendar for the Holiday, Black Friday and Cyber Week editions.</p>
            </div>
            <div className="grid grid-cols-2 items-start gap-4 md:gap-6">
              {giftGuides.map((guide) => (
                <a key={guide.url} href={guide.url} target="_blank" rel="noopener noreferrer" className="block min-w-0 no-underline">
                  <img src={'/images/' + guide.image} width="800" height="800" loading="lazy" alt={guide.alt} className="block h-auto w-full" />
                  <span className="text-link mt-3 inline-block">Open the {guide.title} <span aria-hidden="true">↗</span></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 pt-16 md:pb-20 md:pt-20" aria-labelledby="scope-title">
          <LabelRow left="The engagement" right="Connected work" />
          <div className="grid items-start gap-8 pt-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
            <h2 id="scope-title" className="name m-0 max-w-[560px] text-[clamp(38px,4.3vw,64px)] leading-[0.98]">Connect the showroom plan to what shoppers can buy.</h2>
            <p className="voice m-0 max-w-[740px] text-[clamp(23px,2.5vw,34px)] leading-[1.28]">The 34-station Spring plan gives the showroom team a shared map. Twenty-seven published collections turn those stations into digital rooms with linked tables, rugs, lighting, art and wall treatments. A shopper can inspect a complete look, then shop its pieces or visit the store.</p>
          </div>
          <dl className="m-0 mt-10 grid gap-x-12 border-b border-current md:grid-cols-2">
            <Detail label="My role">Led the retail concept, product and campaign direction, and the move to Shopify. Built the Marketing Engine, directed paid media and search, and connected campaign inquiries to the sales team through GoHighLevel.</Detail>
            <Detail label="Collaboration">Shaped the Spring showroom concept with the team and directed the storefront rebuild. The team brought the Gallery online, integrated Shopify and built the catalog tools.</Detail>
            <Detail label="Built with AI">Claude helped structure and build the web and internal systems; Higgsfield supported room mockups and campaign media. Product checks and human review sit between generation and publication.</Detail>
            <Detail label="What is live">Customers can shop the room collections, check out on Shopify and browse the Black Friday guide. Dealers can access C.L. Bailey’s private portal. The physical Spring redesign, franchise planning and ERP implementation are ongoing.</Detail>
          </dl>
        </section>

        <section className="pb-16 md:pb-20" aria-labelledby="method-title">
          <LabelRow left="The build method" right="Direction · generation · verification · delivery" />
          <div className="grid items-start gap-x-14 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <h2 id="method-title" className="name m-0 max-w-[570px] text-[clamp(38px,4.3vw,64px)] leading-[0.98]">Review room and campaign ideas before committing to production.</h2>
            <p className="voice m-0 max-w-[730px] text-[clamp(23px,2.5vw,33px)] leading-[1.3]">I use AI to try out room layouts and campaign ideas. Once we pick a direction, we check the visuals against the actual products before anything goes live.</p>
          </div>
          <p className="m-0 mt-8 max-w-[1030px] border-t border-current pt-6 text-[18px] leading-[1.55]">The Spring station plot turns floor decisions into a brief for Higgsfield room mockups. Claude Code helped build web experiences and the internal Engine Room. Content Factory carries product and brand references through media generation, approval and scheduling. This makes proposed rooms and assets concrete enough for product, web and showroom teams to check before publishing.</p>
          <ol className="m-0 mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4" aria-label="AI-assisted retail workflow">
            {[
              { number: '01', title: 'Direct', detail: 'Set the room concept, station decisions, product mix and campaign rules.' },
              { number: '02', title: 'Make', detail: 'Use Higgsfield for room and campaign visuals; use Claude to help build pages and systems.' },
              { number: '03', title: 'Check', detail: 'Match real products and specifications; review renders, copy and posts with the team.' },
              { number: '04', title: 'Ship', detail: 'Publish shoppable rooms, campaign pages and approved social; route relevant inquiries to sales.' },
            ].map((step) => (
              <li key={step.number} className="flex min-h-[220px] flex-col border-t border-current bg-current/5 p-5">
                <span className="lbl text-[13px]">{step.number + ' / 04'}</span>
                <strong className="name mt-8 text-[30px] leading-[1.05]">{step.title}</strong>
                <span className="mt-auto pt-5 text-[16px] leading-[1.45]">{step.detail}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="retail-experience" className="flex scroll-mt-8 flex-col gap-8 pb-24 md:pb-28" aria-labelledby="gallery-title">
          <LabelRow left="01 / Retail experience" right="Live online · physical redesign ongoing" />
          <div className="grid items-start gap-x-16 gap-y-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <h2 id="gallery-title" className="name m-0 max-w-[560px] text-[clamp(40px,4.4vw,66px)] leading-[0.98]">Shop the complete room, online and in Spring.</h2>
              <p className="m-0 mt-6 max-w-[600px] text-[19px] leading-[1.55]">The existing Spring showroom is open. Its working redesign maps 34 coded stations with a visual mockup at each code. 27 room stories are already published on Billiard Factory’s Collections site, connecting digital renderings to tables, cloth, lights, rugs, art and wall treatments shoppers can explore.</p>
              <p className="m-0 mt-4 max-w-[600px] text-[17px] leading-[1.55]">The room images are renders of the design direction, not photographs of finished installations. The digital collection pages and expanded rugs, lighting, art and wallpaper assortment are live. New physical room installations and the formal Spring relaunch remain underway.</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <CaseLink to="/work/spring-stuebner-store">Explore the Spring case</CaseLink>
                <ExternalLink href="https://billiardfactory.com/collections">See the live collections</ExternalLink>
              </div>
            </div>
            <figure className="m-0 min-w-0">
              <Img src="spring-gallery-collections-live.jpg" alt="Screenshot of the live Billiard Factory Collections hub with station-coded, shoppable room stories" sizes="(min-width: 768px) 55vw, 100vw" className="block aspect-[16/10] w-full object-cover" />
              <figcaption className="lbl border-b border-current py-4 text-[13px]">Live Collections hub / station-coded digital rooms</figcaption>
            </figure>
          </div>
        </section>

        <section id="seasonal-storefront" className="scroll-mt-8 border-t border-current pb-24 pt-10 md:pb-28" aria-labelledby="seasonal-title">
          <LabelRow left="The fall storefront" right="Live online · October 2026" />
          <div className="grid gap-x-16 gap-y-8 pt-7 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <h2 id="seasonal-title" className="name m-0 max-w-[600px] text-[clamp(40px,4.4vw,66px)] leading-[0.98]">Sell the setting around the game.</h2>
            <p className="voice m-0 max-w-[740px] text-[clamp(23px,2.5vw,33px)] leading-[1.3]">The fall storefront moves Billiard Factory beyond an equipment-led catalog. Tables now appear with the light, rug, art and wall treatment that make a room feel lived in.</p>
          </div>
          <figure className="m-0 mt-10">
            <Img src="bf-fall-opener.webp" alt="AI-assisted fall room visualization from the live Billiard Factory storefront: burgundy-cloth pool table with pendant lighting, artwork and a rust rug" sizes="(min-width: 1440px) 1312px, 100vw" className="block aspect-[4/3] w-full object-cover md:aspect-auto" />
            <figcaption className="lbl border-b border-current py-4 text-[13px]">Live fall storefront / an AI-assisted visualization using catalog products, not a finished showroom photograph</figcaption>
          </figure>
          <div className="grid items-start gap-x-14 gap-y-8 pt-10 md:grid-cols-2">
            <div>
              <h3 className="name m-0 max-w-[560px] text-[clamp(30px,3vw,43px)] leading-[1.04]">Four new ways to finish a room.</h3>
              <p className="m-0 mt-5 max-w-[620px] text-[18px] leading-[1.55]">Rugs, lighting, artwork and wallpaper became four new décor categories in the site navigation. The seasonal opening scene, product hotspots, shoppable room stories, new-arrival rail and supporting film give a customer ways to move from inspiration to a verified product page. Showing pieces together makes scale and style easier to assess and exposes more of the assortment in a single visit; sales impact has not yet been measured here.</p>
            </div>
            <div>
              <p className="m-0 max-w-[620px] text-[18px] leading-[1.55]">The fall experience is organized through one seasonal content system, so the team can change room imagery, featured products and campaign messages for another season without redesigning the storefront each time. Motion brings the rooms to life, while media loads as it comes into view and supports reduced-motion preferences. I helped shape the retail concept and its look. The team built the storefront.</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <ExternalLink href="https://billiardfactory.com/collections">Explore the live rooms</ExternalLink>
                <ExternalLink href="https://billiardfactory.com/wallpaper">See the wallpaper category</ExternalLink>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3" aria-label="New room-finishing categories">
            {roomFinishes.map((finish) => (
              <figure key={finish.name} className="m-0 min-w-0 border-t border-current pt-4">
                <Img src={finish.image} alt={finish.alt} sizes="(min-width: 768px) 30vw, 100vw" className="block aspect-[4/5] w-full object-cover" />
                <figcaption className="pt-5">
                  <h3 className="name m-0 text-[30px] leading-[1.05]">{finish.name}</h3>
                  <p className="m-0 mt-3 text-[16px] leading-[1.5]">{finish.detail}</p>
                  <div className="mt-5"><ExternalLink href={finish.href}>{finish.linkLabel}</ExternalLink></div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-16 grid items-start gap-x-14 gap-y-8 border-t border-current pt-10 md:grid-cols-2">
            <div>
              <p className="lbl m-0 mb-5">Distinct brand worlds</p>
              <h3 className="name m-0 max-w-[570px] text-[clamp(35px,3.8vw,54px)] leading-[1.02]">Help a shopper choose the right kind of table.</h3>
              <p className="m-0 mt-5 max-w-[550px] text-[17px] leading-[1.55]">I chose how to present each brand, from the room setting to the details a shopper sees first. The team brought those choices into the storefront.</p>
            </div>
            <div>
              <p className="m-0 max-w-[690px] text-[18px] leading-[1.55]">The brand pages no longer treat every maker as the same product list. C.L. Bailey uses a warm, furniture-led presentation, with Tunbridge shown in 3D and cloth options close to the product story. Velocity uses a sharper match-play language and a 3D Velocity Pro. Level Best, Olhausen and Brunswick have their own visual worlds. The difference helps shoppers understand why each brand belongs in a particular room or style of play.</p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                <ExternalLink href="https://billiardfactory.com/cl-bailey-pool-tables">See C.L. Bailey</ExternalLink>
                <ExternalLink href="https://billiardfactory.com/velocity-products">See Velocity</ExternalLink>
              </div>
            </div>
          </div>
          <figure className="m-0 mt-10">
            <Img src="bf-fall-tunbridge.webp" alt="AI-assisted fall visual of the C.L. Bailey Tunbridge table and coordinated furnishings from the live storefront" sizes="(min-width: 1440px) 1312px, 100vw" className="block h-auto w-full" />
            <figcaption className="lbl border-b border-current py-4 text-[13px]">Tunbridge / C.L. Bailey product setting in the live seasonal experience</figcaption>
          </figure>
        </section>

        <section className="grid gap-8 border-t border-current pb-24 pt-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:pb-28" aria-labelledby="trade-title">
          <div>
            <p className="lbl m-0 mb-6">Billiard Factory / Designers &amp; trade</p>
            <h2 id="trade-title" className="name m-0 text-[clamp(36px,4vw,60px)] leading-[1.02]">Game Room Furniture Partners</h2>
          </div>
          <div>
            <p className="m-0 max-w-[650px] text-[19px] leading-[1.55]">Billiard Factory’s trade-only Dallas Market Center showroom serves interior designers. Its website lets them browse 421 catalog items across coordinated collections, collect product details before market and contact the showroom about pricing or a complete room specification.</p>
            <div className="mt-8"><CaseLink to="/work/game-room-furniture-partners">Explore the trade showroom</CaseLink></div>
          </div>
        </section>

        <section className="flex flex-col gap-8 pb-24 md:pb-28" aria-labelledby="dealer-title">
          <LabelRow left="02 / Customer & dealer experience" right="Live public site · private dealer tools" />
          <div className="grid items-start gap-x-16 gap-y-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <figure className="m-0 min-w-0 md:order-first">
              <Img src="clbailey-concierge.jpg" alt="The C.L. Bailey public site with its AI showroom concierge open" sizes="(min-width: 768px) 55vw, 100vw" className="block aspect-[16/10] w-full object-cover" />
              <figcaption className="lbl border-b border-current py-4 text-[13px]">C.L. Bailey / public product experience</figcaption>
            </figure>
            <div>
              <h2 id="dealer-title" className="name m-0 max-w-[550px] text-[clamp(40px,4.4vw,66px)] leading-[0.98]">Answer the buyer, equip the dealer.</h2>
              <p className="m-0 mt-6 max-w-[590px] text-[19px] leading-[1.55]">I drew on my photography and video experience to direct the AI product imagery. I also wrote the copy and built C.L. Bailey’s English and Spanish site. A buyer can compare tables, check room fit, ask the concierge a product question and find a dealer.</p>
              <p className="m-0 mt-4 max-w-[590px] text-[17px] leading-[1.55]">I also proposed and built the dealer dashboard. Sales teams use it to find brand and product assets. The companion Brand Bible shows how to use the imagery, write about the tables and co-brand materials. Order, inventory and lead screens use demonstration data.</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <CaseLink to="/work/c-l-bailey-portal-and-concierge">Explore the site and portal</CaseLink>
                <CaseLink to="/work/c-l-bailey-brand-bible">See the brand system</CaseLink>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-8 pb-24 md:pb-28" aria-labelledby="commerce-title">
          <LabelRow left="03 / Shopify & ecommerce" right="Shopify checkout launched October 2026" />
          <div className="grid gap-x-16 gap-y-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <h2 id="commerce-title" className="name m-0 max-w-[550px] text-[clamp(40px,4.4vw,66px)] leading-[0.98]">From choosing a table to checking out.</h2>
              <p className="m-0 mt-6 max-w-[580px] text-[19px] leading-[1.55]">I led the move to headless Shopify Plus. The team launched checkout on October 16, 2026. The rebuilt storefront included more than 1,200 product pages. A four-question table finder recommends three tables and explains each match. On the product page, shoppers can choose a size and finish, see the price and check delivery options.</p>
              <p className="m-0 mt-4 max-w-[580px] text-[17px] leading-[1.55]">Customers who want help can reach the sales team through campaign forms connected to GoHighLevel. Behind the storefront, I’m coordinating the migration to Xorosoft’s XoroERP.</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <CaseLink to="/work/landing-pages">Explore campaigns and CRM</CaseLink>
                <CaseLink to="/work/off-storis">Explore the ecommerce transformation</CaseLink>
                <ExternalLink href="https://billiardfactory.com/">Visit the live storefront</ExternalLink>
              </div>
            </div>
            <figure className="m-0 min-w-0">
              <Img src="bf-skylar-product.webp" alt="C.L. Bailey Skylar product page showing the table, size options, pricing and delivery information" sizes="(min-width: 768px) 55vw, 100vw" className="block aspect-[16/10] w-full object-cover" />
              <figcaption className="lbl border-b border-current py-4 text-[13px]">C.L. Bailey Skylar / size selection, pricing and delivery on the rebuilt storefront</figcaption>
            </figure>
          </div>
        </section>

        <section id="campaign-work" className="scroll-mt-8 pb-24 md:pb-28" aria-labelledby="channels-title">
          <LabelRow left="04 / Paid media, SEO/AEO & CTV" right="Creative production · Contractor leadership" />
          <h2 id="channels-title" className="name m-0 max-w-[740px] pt-7 text-[clamp(40px,4.4vw,66px)] leading-[0.98]">Campaign creative and delivery</h2>
          <div id="paid-media-ctv" className="scroll-mt-8 mt-10 grid gap-8 md:grid-cols-3">
            <article className="border-t border-current pt-6"><h3 className="name m-0 text-[29px]">Paid media</h3><p className="text-[18px] leading-[1.55]">I lead paid media and manage the contractor team. I create and build the ad assets, then direct where the contractors place them, connecting the creative idea to campaign delivery.</p></article>
            <article className="border-t border-current pt-6"><h3 className="name m-0 text-[29px]">SEO &amp; AEO</h3><p className="text-[18px] leading-[1.55]">I lead search engine optimization and answer engine optimization, managing the contractor team responsible for that work alongside paid media.</p></article>
            <article className="border-t border-current pt-6"><h3 className="name m-0 text-[29px]">Vibe / Streaming TV</h3><p className="text-[18px] leading-[1.55]">I direct our connected TV (CTV) campaign through Vibe, build the ads and manage the account. My role spans creative production and hands-on campaign management.</p></article>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3" aria-label="Selected Billiard Factory campaign work">
            {campaignExamples.map((item) => (
              <article key={item.to} className="flex min-w-0 flex-col">
                <Link to={item.to} className="block overflow-hidden bg-ink" aria-label={'Explore ' + item.name}>
                  <Img src={item.image} alt={item.alt} sizes="(min-width: 768px) 45vw, 100vw" className="block aspect-[4/3] w-full object-cover" />
                </Link>
                <h3 className="name m-0 mt-5 text-[31px] leading-[1.05]">{item.name}</h3>
                <p className="m-0 mt-3 grow text-[16px] leading-[1.45]">{item.line}</p>
                <Link to={item.to} className="text-link mt-5 self-start">Explore the campaign <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
          <LabelRow left="Published social examples" right="Billiard Factory · C.L. Bailey" className="mt-16 border-current" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {channelProof.map((item) => (
              <article key={item.number} className="flex flex-col border-t border-current py-5">
                <span className="lbl text-[13px]">{item.number + ' / Published social'}</span>
                <h3 className="name m-0 mt-5 text-[32px] leading-[1.05]">{item.title}</h3>
                <p className="m-0 mt-4 grow text-[17px] leading-[1.45]">{item.description}</p>
                <div className="mt-7"><ExternalLink href={item.href}>{item.label}</ExternalLink></div>
              </article>
            ))}
          </div>
        </section>

        <section id="marketing-engine" className="flex scroll-mt-8 flex-col gap-8 pb-16 md:pb-20" aria-labelledby="system-title">
          <LabelRow left="05 / The marketing engine" right="Built with AI · Used by the team" />
          <div className="grid items-start gap-x-14 gap-y-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <h2 id="system-title" className="name m-0 max-w-[550px] text-[clamp(40px,4.4vw,66px)] leading-[0.98]">I built the system the campaigns run through.</h2>
            <p className="voice m-0 max-w-[740px] text-[clamp(23px,2.5vw,33px)] leading-[1.3]">Built Engine Room with Claude Code so the team could plan and track campaigns in one place. Its Marketing Engine links a rolling calendar to briefs, assets, owners, review status and channel schedules. In the Home Field working plan, 131 recorded deliverables sit in one campaign context, making missing files and next handoffs visible to the team.</p>
          </div>
          <div className="grid items-start gap-x-14 gap-y-5 border-t border-current pt-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <p className="m-0 max-w-[580px] text-[18px] leading-[1.55]">Higgsfield-made images and films, social assets and landing pages use that same brief. Teammates can open linked assets from the campaign record. Content Factory handles social review, scheduling and publishing, and its records appear back in Engine Room. I designed Content Factory and directed the build with the team.</p>
            <div className="flex flex-wrap items-start gap-x-7 gap-y-4 md:justify-end"><CaseLink to="/work/engine-room">Explore Engine Room</CaseLink><CaseLink to="/work/content-factory">Explore Content Factory</CaseLink></div>
          </div>
          <figure className="m-0">
            <Link to="/work/engine-room" className="block" aria-label="Explore the Marketing Engine case study">
              <Img src="marketing-engine-home-field-assets.png" alt="Home Field campaign assets organized by channel in the Marketing Engine" sizes="(min-width: 1440px) 1312px, 100vw" className="block h-auto w-full" />
            </Link>
            <figcaption className="lbl border-b border-current py-4 text-[13px]">Working platform / Home Field asset library, October 2026</figcaption>
          </figure>
        </section>

        <section className="flex flex-col gap-8 pb-24 md:pb-28" aria-labelledby="product-title">
          <LabelRow left="06 / Brand & product" right="Live guidelines · product concept in progress" />
          <div className="grid items-start gap-x-16 gap-y-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <figure className="m-0 min-w-0">
              <Img src="tierra-cover.png" alt="Concept render of the three Tierra cue designs, not finished physical products" sizes="(min-width: 768px) 55vw, 100vw" className="block aspect-[16/10] w-full object-cover" />
              <figcaption className="lbl border-b border-current py-4 text-[13px]">Tierra / approved direction, shown as concept renders</figcaption>
            </figure>
            <div>
              <h2 id="product-title" className="name m-0 max-w-[550px] text-[clamp(40px,4.4vw,66px)] leading-[0.98]">Rules for the brand. Specifications for the product.</h2>
              <p className="m-0 mt-6 max-w-[590px] text-[19px] leading-[1.55]">Developed three cue designs for Tierra. The factory artwork is underway. For the separate Billiard Factory Playing Cue launch, shoppers can see the launch film on the blue, coffee and grey cue product pages. The Brand Hub gives the team a shared set of visual and editorial rules.</p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                <CaseLink to="/work/brand-hub">Explore the Brand Hub</CaseLink>
                <CaseLink to="/work/tierra-cue-line">Explore Tierra</CaseLink>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-x-16 gap-y-8 pb-24 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:pb-28" aria-labelledby="scale-title">
          <div>
            <LabelRow left="07 / Model for scale" right="In development" />
            <h2 id="scale-title" className="name m-0 max-w-[570px] pt-7 text-[clamp(40px,4.4vw,66px)] leading-[0.98]">Test whether the retail system can be repeated.</h2>
          </div>
          <div className="border-t border-current pt-5">
            <p className="voice m-0 max-w-[700px] text-[clamp(23px,2.5vw,33px)] leading-[1.3]">The station plan, brand rules, product mix, campaign workflow and operating tools are being documented as parts of a possible repeatable store model.</p>
            <p className="m-0 mt-5 max-w-[700px] text-[18px] leading-[1.55]">That model is informing Billiard Factory’s franchise planning with consultants. It remains under review; this case describes design and systems work, not an approved franchise program, launched offer or completed store rollout.</p>
          </div>
        </section>

        <section className="pb-24 md:pb-32" aria-labelledby="related-title">
          <LabelRow left="The project record" right="Detailed cases" />
          <h2 id="related-title" className="name m-0 max-w-[900px] pt-7 text-[clamp(38px,4.3vw,62px)] leading-[0.98]">Explore the parts in detail.</h2>
          <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {related.map((section) => (
              <div key={section.group}>
                <h3 className="lbl m-0 pb-3 text-[13px]">{section.group}</h3>
                <ul className="m-0 list-none border-b border-current p-0">
                  {section.items.map((item) => (
                    <li key={item.to} className="border-t border-current py-5">
                      <Link to={item.to} className="name flex items-baseline justify-between gap-3 text-[23px] leading-[1.12] no-underline">
                        <span>{item.name}</span><span aria-hidden="true">↗</span>
                      </Link>
                      <p className="m-0 mt-2 text-[15px] leading-[1.4]">{item.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <HouseBar back={{ label: '← All work', to: '/' }} next={{ label: 'Next: music work →', to: '/work/robert-glasper-blue-note' }} />
      <Footer />
    </Layout>
  );
};
