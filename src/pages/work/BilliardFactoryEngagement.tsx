import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { Layout } from '../../components/Layout';
import { PortfolioFilm } from '../../components/PortfolioFilm';
import { velocityLaunchFilm } from '../../data/campaignMedia';
import { ShowroomFilm } from '../../components/ShowroomFilm';
import { WhatsNext } from '../../components/WhatsNext';
import { usePageMeta } from '../../hooks/usePageMeta';
import './BilliardFactoryEngagement.css';

const guides = [
  { title: 'Holiday Gift Guide', image: 'bf-holiday-guide-cover.webp', alt: 'Holiday campaign cover with four furnished game rooms', href: 'https://bf-landing-pages.netlify.app/holiday-gift-guide/' },
  { title: 'Cyber Week Gift Guide', image: 'gift-cyber.webp', alt: 'Cyber Week shopping checklist animation artwork', href: 'https://bf-landing-pages.netlify.app/cyber-week/' },
  { title: 'Black Friday Gift Guide', image: 'bf-black-friday-guide-cover.webp', alt: 'Black Friday campaign cover with gifts for players, hosts and families', href: 'https://billiardfactory.com/black-friday#list' },
];

const related = [
  ['Trade showroom for interior designers', '/work/game-room-furniture-partners'],
  ['Tierra cue line', '/work/tierra-cue-line'],
  ['Billiard Factory Brand Hub', '/work/brand-hub'],
  ['C.L. Bailey Brand Bible', '/work/c-l-bailey-brand-bible'],
  ['Content Factory', '/work/content-factory'],
  ['Campaign landing pages', '/work/landing-pages'],
  ['Home Field', '/work/home-field'],
  ['C.L. Bailey Factory Event', '/work/c-l-bailey-factory-event'],
  ['Season Opener', '/work/season-opener'],
  ['Labor Day Sale', '/work/labor-day-sale'],
] as const;

const CaseLink = ({ to, children }: { to: string; children: string }) => (
  <Link to={to} className="text-link">{children} <span aria-hidden="true">↗</span></Link>
);

export const BilliardFactoryEngagement = () => {
  usePageMeta({
    title: 'Billiard Factory + C.L. Bailey | Untold.works',
    description: 'Explore our work for Billiard Factory and C.L. Bailey, from shoppable rooms and dealer tools to a Shopify launch and the Stick family gift guides.',
    path: '/work/billiard-factory-and-c-l-bailey',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/work' }, { label: 'Billiard Factory + C.L. Bailey' }]} />
      <main id="main" className="bf-story">
        <section className="bf-opening" aria-labelledby="engagement-title">
          <div className="bf-opening-copy">
            <p className="lbl">Billiard Factory + C.L. Bailey</p>
            <h1 id="engagement-title" className="display">A showroom you can shop from home.</h1>
            <p>It started with a floor plan in Spring, Texas. We led the creative for the showroom and rebuilt the online shopping experience with the team, so customers could see a whole room, choose the pieces and buy them.</p>
            <CaseLink to="/work-together">Talk about your project</CaseLink>
          </div>
          <div className="bf-opening-film"><ShowroomFilm /></div>
        </section>

        <nav className="bf-nav" aria-label="Explore the Billiard Factory case">
          <a href="#retail-experience">Showroom design</a>
          <a href="#commerce-title">Shopify storefront</a>
          <a href="#velocity-launch">Velocity product launch</a>
          <a href="#holiday-gift-guides">Holiday &amp; Black Friday</a>
          <a href="#data-studio">Data Studio</a>
          <a href="#dealer-title">Dealer &amp; team tools</a>
        </nav>

        <section id="retail-experience" className="bf-chapter" aria-labelledby="gallery-title">
          <div className="bf-section-head">
            <div><p className="lbl">What you get: In-store screens and showroom tools</p><h2 id="gallery-title">Let people shop the whole room.</h2></div>
            <p>A table looks different once you see the rug under it, the light above it and the space to take a shot. We mapped 34 showroom stations and used AI to try out those combinations with the team. We turned 27 room concepts into shoppable collections while the physical redesign continued.</p>
          </div>
          <div className="bf-room-pair" id="seasonal-storefront">
            <figure><div className="bf-plan-mat"><Img src="spring-stuebner-plot.svg" alt="Spring showroom floor plan with numbered display stations" /></div><figcaption>The working floor plan for Spring, Texas.</figcaption></figure>
            <figure><img src="/images/bf-tunbridge-field-house.webp" srcSet="/images/bf-tunbridge-field-house-mobile.webp 700w, /images/bf-tunbridge-field-house.webp 1600w" sizes="(max-width: 720px) 58vw, 62vw" width="1600" height="900" loading="lazy" alt="Tunbridge pool table with a plaid rug, leather chair and pendant light in the Field House room rendering" /><figcaption>Tunbridge Field House, one of the shoppable room concepts.</figcaption></figure>
          </div>
          <div className="bf-links"><CaseLink to="/work/spring-stuebner-store">Explore the showroom design</CaseLink><a href="https://billiardfactory.com/collections" className="text-link">Shop the live collections <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="bf-commerce" aria-labelledby="commerce-title" id="commerce">
          <figure><img src="/images/bf-skylar-product.webp" width="1200" height="750" loading="lazy" alt="Skylar product page with table sizes, finishes, pricing and delivery options" /></figure>
          <div className="bf-commerce-copy">
            <img src="/images/shopify-primary.svg" width="500" height="143" alt="Shopify" className="bf-shopify-logo" loading="lazy" />
            <p className="lbl">What you get: Online store</p>
            <h2 id="commerce-title">Help shoppers choose a table and get it home.</h2>
            <p>Buying a pool table means choosing a size, finish and delivery option. We led the move to headless Shopify Plus across a storefront with more than 1,200 product pages. A four-question finder explains which tables fit, and the team connected those choices to checkout.</p>
            <p className="bf-note">Shopify checkout launched October 16, 2026. We’re now coordinating the Xorosoft ERP migration.</p>
            <CaseLink to="/work/off-storis">Inside the Shopify rebuild</CaseLink>
          </div>
        </section>

        <section id="velocity-launch" className="bf-launch" aria-labelledby="velocity-title">
          <PortfolioFilm
            {...velocityLaunchFilm}
            id="bf-velocity-film"
            caption="Watch the launch film · 0:28"
            nativeControls
            autoPlayWhenVisible={false}
          />
          <div className="bf-launch-copy">
            <p className="lbl">What you get: Campaign film, made with AI</p>
            <h2 id="velocity-title">Launching the Velocity ball set</h2>
            <p>We created the entire launch film for Billiard Factory’s Velocity Premium Billiard Ball Set using AI. A branded shipping container opens and oversized billiard balls roll out one by one. We wanted a product you can hold in one hand to make an entrance you couldn’t miss.</p>
            <a href="https://billiardfactory.com/velocity-ball-set" className="text-link">See the ball set <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section id="holiday-gift-guides" className="bf-chapter" aria-labelledby="gift-guides-title">
          <div className="bf-section-head" id="campaign-work">
            <div><p className="lbl">What you get: Buying guides and landing pages</p><h2 id="gift-guides-title">Who’s on your list?</h2></div>
            <div><p>We worked with Ryan and Mike from logistics on available inventory, the products to feature and pricing changes. Then we built the shoppable guide. While building it we came up with “Picked by the Sticks,” drawing on our earlier decision to feature the family in the brand.</p>
            <p>We built three landing pages and animated each campaign: a split-flap savings board for Black Friday, a checklist for Cyber Week and a ribbon tying into a bow for Holiday. We created the imagery in Higgsfield, wrote the editorial and blog posts, and produced the organic and paid social creative.</p></div>
          </div>
          <div className="bf-guide-spread">
            <figure className="bf-guide-photo"><img src="/images/bf-gift-guide-grandparents.webp" width="1120" height="840" loading="lazy" alt="Inside the gift guide, the grandparents’ chapter opens with a family gathered around a pool table" /></figure>
            {guides.map((guide) => <a className="bf-guide" href={guide.href} key={guide.href} target="_blank" rel="noopener noreferrer"><img src={'/images/' + guide.image} width="800" height="800" alt={guide.alt} loading="lazy" /><span>Open the {guide.title} <span aria-hidden="true">↗</span></span></a>)}
          </div>
          <section id="paid-media-ctv" className="bf-holiday-tv" aria-labelledby="holiday-tv-title">
            <div>
              <p className="lbl">What you get: Streaming TV spots</p>
              <h3 id="holiday-tv-title">Taking the gift guide to TV.</h3>
              <p>We used AI to turn the Holiday Gift Guide we built into a 30-second spot that aired on streaming TV. The film follows the guide’s shopping lists, from a new cue for Dad to a game room rug for Mom.</p>
              <p>We also managed the campaign on Vibe. We used data we’d collected from earlier campaigns to decide where the spot would run.</p>
            </div>
            <PortfolioFilm
              id="bf-holiday-tv-film" src="/video/bf-holiday-tv.mp4" poster="/images/bf-holiday-tv-title.webp"
              width={1280} height={720} label="Billiard Factory Holiday Gift Guide streaming TV spot"
              controlLabel="holiday TV spot" caption="Holiday Gift Guide · 30-second TV spot"
              nativeControls autoPlayWhenVisible={false}
            />
          </section>
        </section>

        <section id="data-studio" className="bf-chapter" aria-labelledby="data-studio-title">
          <div className="bf-section-head">
            <div><p className="lbl">What you get: Data Studio dashboard</p><h2 id="data-studio-title">See what happened after launch.</h2></div>
            <div><p>We built a Data Studio for the team to review campaign dates, storefront changes, orders and showroom inquiries together. They can see where follow-up is waiting and which changes to investigate.</p>
            <CaseLink to="/data-studio#compare">Try a Data Studio decision</CaseLink></div>
          </div>
        </section>

        <section className="bf-chapter" aria-labelledby="dealer-title">
          <div className="bf-section-head">
            <div><p className="lbl">What you get: Dealer portal and campaign calendar</p><h2 id="dealer-title">Give the people selling it what they need.</h2></div>
            <p>After the C.L. Bailey acquisition, dealers needed a better way to present the tables. At Billiard Factory, the marketing team needed a way to get campaigns out the door. We built a different tool for each.</p>
          </div>
          <div className="bf-tools">
            <article>
              <img src="/images/cl-bailey-pocket-detail.webp" width="1050" height="700" loading="lazy" alt="C.L. Bailey product imagery showing the wood rail and leather pocket of a table" />
              <h3>A sales kit for every dealer.</h3>
              <p>We directed the product imagery, wrote the copy and built the bilingual site and private dealer portal. Dealers can pull current images, specs and brand materials for their next conversation.</p>
              <CaseLink to="/work/c-l-bailey-portal-and-concierge">Explore the dealer experience</CaseLink>
            </article>
            <article id="marketing-engine">
              <Img src="home-field-shot.jpg" sizes="(max-width: 720px) 100vw, 45vw" alt="Home Field campaign image of a player lining up a pool shot, made and run through Engine Room" />
              <h3>A place to run the campaign.</h3>
              <p>We built Engine Room with Claude Code to put briefs, artwork, approvals and publishing dates together. The team can see what’s missing and who needs it next.</p>
              <CaseLink to="/work/engine-room">Explore Engine Room</CaseLink>
            </article>
          </div>
          <details className="bf-related"><summary>More from this engagement</summary><div className="bf-related-links">{related.map(([label, to]) => <CaseLink key={to} to={to}>{label}</CaseLink>)}</div><p>The Spring design is informing franchise planning. Billiard Factory chose all three Tierra cue designs for production.</p></details>
        </section>
        <WhatsNext />
      </main>
      <HouseBar back={{ label: '← All work', to: '/work' }} next={{ label: 'Next: music work →', to: '/work/robert-glasper-blue-note' }} />
      <Footer />
    </Layout>
  );
};
