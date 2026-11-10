import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HouseBar } from '../../components/HouseBar';
import { Img } from '../../components/Img';
import { Layout } from '../../components/Layout';
import { PortfolioFilm } from '../../components/PortfolioFilm';
import { velocityLaunchFilm } from '../../data/campaignMedia';
import { ShowroomFilm } from '../../components/ShowroomFilm';
import { usePageMeta } from '../../hooks/usePageMeta';
import './BilliardFactoryEngagement.css';

const guides = [
  { title: 'Holiday Gift Guide', image: 'bf-holiday-guide-cover.webp', alt: 'Holiday campaign cover with four furnished game rooms', href: 'https://bf-landing-pages.netlify.app/holiday-gift-guide/' },
  { title: 'Black Friday Gift Guide', image: 'bf-black-friday-guide-cover.webp', alt: 'Black Friday campaign cover with gifts for players, hosts and families', href: 'https://bf-landing-pages.netlify.app/black-friday/' },
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
    description: 'Explore my work for Billiard Factory and C.L. Bailey, from shoppable rooms and dealer tools to a Shopify launch and the Stick family gift guides.',
    path: '/work/billiard-factory-and-c-l-bailey',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'Work', to: '/#work' }, { label: 'Billiard Factory + C.L. Bailey' }]} />
      <main id="main" className="bf-story">
        <section className="bf-opening" aria-labelledby="engagement-title">
          <div className="bf-opening-copy">
            <p className="lbl">Billiard Factory + C.L. Bailey</p>
            <h1 id="engagement-title" className="display">A showroom you can shop from home.</h1>
            <p>It started with a floor plan in Spring, Texas. I led the creative for the showroom and rebuilt the online shopping experience with the team, so customers could see a whole room, choose the pieces and buy them.</p>
            <CaseLink to="/work-together">Talk about your project</CaseLink>
          </div>
          <div className="bf-opening-film"><ShowroomFilm /></div>
        </section>

        <nav className="bf-nav" aria-label="Explore the Billiard Factory case">
          <a href="#retail-experience">Showroom design</a>
          <a href="#commerce-title">Shopify storefront</a>
          <a href="#velocity-launch">Velocity product launch</a>
          <a href="#holiday-gift-guides">Holiday &amp; Black Friday</a>
          <a href="#dealer-title">Dealer &amp; team tools</a>
        </nav>

        <section id="retail-experience" className="bf-chapter" aria-labelledby="gallery-title">
          <div className="bf-section-head">
            <div><p className="lbl">Retail design</p><h2 id="gallery-title">Let people shop the whole room.</h2></div>
            <p>A table looks different once you see the rug under it, the light above it and the space to take a shot. I mapped 34 showroom stations and used AI to try out those combinations with the team. We turned 27 room concepts into shoppable collections while the physical redesign continued.</p>
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
            <h2 id="commerce-title">Help shoppers choose a table and get it home.</h2>
            <p>Buying a pool table means choosing a size, finish and delivery option. I led the move to headless Shopify Plus across a storefront with more than 1,200 product pages. A four-question finder explains which tables fit, and the team connected those choices to checkout.</p>
            <p className="bf-note">Shopify checkout launched October 16, 2026. I’m now coordinating the Xorosoft ERP migration.</p>
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
            <p className="lbl">Product Launch · AI Film</p>
            <h2 id="velocity-title">Launching the Velocity ball set</h2>
            <p>I created the entire launch film for Billiard Factory’s Velocity Premium Billiard Ball Set using AI. A branded shipping container opens and oversized billiard balls roll out one by one. I wanted a product you can hold in one hand to make an entrance you couldn’t miss.</p>
            <a href="https://billiardfactory.com/velocity-ball-set" className="text-link">See the ball set <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section id="holiday-gift-guides" className="bf-chapter" aria-labelledby="gift-guides-title">
          <div className="bf-section-head" id="campaign-work">
            <div><p className="lbl">Holiday &amp; Black Friday</p><h2 id="gift-guides-title">Who’s on your list?</h2></div>
            <p>The brief was a list of products. I turned it into “Picked by the Sticks,” eight gift lists with recommendations from the family behind the store. In about two weeks I built the guide, using AI for imagery, copy and animation, then adapted it for Black Friday, Cyber Week and the holidays.</p>
          </div>
          <div className="bf-guide-spread">
            <figure className="bf-guide-photo"><img src="/images/bf-gift-guide-grandparents.webp" width="1120" height="840" loading="lazy" alt="Inside the gift guide, the grandparents’ chapter opens with a family gathered around a pool table" /></figure>
            {guides.map((guide) => <a className="bf-guide" href={guide.href} key={guide.href} target="_blank" rel="noopener noreferrer"><img src={'/images/' + guide.image} width="800" height="800" alt={guide.alt} loading="lazy" /><span>Open the {guide.title} <span aria-hidden="true">↗</span></span></a>)}
          </div>
          <section id="paid-media-ctv" className="bf-holiday-tv" aria-labelledby="holiday-tv-title">
            <div>
              <p className="lbl">Streaming TV · Vibe</p>
              <h3 id="holiday-tv-title">Taking the gift guide to TV.</h3>
              <p>I used AI to turn the Holiday Gift Guide I built into a 30-second spot that aired on streaming TV. The film follows the guide’s shopping lists, from a new cue for Dad to a game room rug for Mom.</p>
              <p>I also managed the campaign on Vibe. I used data I’d collected from earlier campaigns to decide where the spot would run.</p>
            </div>
            <PortfolioFilm
              id="bf-holiday-tv-film" src="/video/bf-holiday-tv.mp4" poster="/images/bf-holiday-tv-poster.webp"
              width={1280} height={720} label="Billiard Factory Holiday Gift Guide streaming TV spot"
              controlLabel="holiday TV spot" caption="Holiday Gift Guide · 30-second TV spot"
              nativeControls autoPlayWhenVisible={false}
            />
          </section>
        </section>

        <section className="bf-chapter" aria-labelledby="dealer-title">
          <div className="bf-section-head">
            <div><p className="lbl">Brand &amp; operations</p><h2 id="dealer-title">Give the people selling it what they need.</h2></div>
            <p>After the C.L. Bailey acquisition, dealers needed a better way to present the tables. At Billiard Factory, the marketing team needed a way to get campaigns out the door. I built a different tool for each.</p>
          </div>
          <div className="bf-tools">
            <article>
              <img src="/images/cl-bailey-pocket-detail.webp" width="1050" height="700" loading="lazy" alt="C.L. Bailey product imagery showing the wood rail and leather pocket of a table" />
              <h3>A sales kit for every dealer.</h3>
              <p>I directed the product imagery, wrote the copy and built the bilingual site and private dealer portal. Dealers can pull current images, specs and brand materials for their next conversation.</p>
              <CaseLink to="/work/c-l-bailey-portal-and-concierge">Explore the dealer experience</CaseLink>
            </article>
            <article id="marketing-engine">
              <Img src="engine-room-cover-2026.png" sizes="(max-width: 720px) 100vw, 45vw" alt="Engine Room campaign calendar and creative asset library" />
              <h3>A place to run the campaign.</h3>
              <p>I built Engine Room with Claude Code to put briefs, artwork, approvals and publishing dates together. The team can see what’s missing and who needs it next.</p>
              <CaseLink to="/work/engine-room">Explore Engine Room</CaseLink>
            </article>
          </div>
          <details className="bf-related"><summary>More from this engagement</summary><div className="bf-related-links">{related.map(([label, to]) => <CaseLink key={to} to={to}>{label}</CaseLink>)}</div><p>The Spring design is informing franchise planning. The Tierra cue line is in factory artwork development.</p></details>
        </section>

        <section className="bf-contact" aria-labelledby="bf-contact-title">
          <h2 id="bf-contact-title">What are your customers trying to do?</h2>
          <div><p>Show me where they get stuck, what your team has tried and the budget you’re working with. We can pick a useful first step and get a working version in front of people.</p><CaseLink to="/work-together">Talk with me about your project</CaseLink></div>
        </section>
      </main>
      <HouseBar back={{ label: '← All work', to: '/#work' }} next={{ label: 'Next: music work →', to: '/work/robert-glasper-blue-note' }} />
      <Footer />
    </Layout>
  );
};
