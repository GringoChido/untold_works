import { CollaboratorLogos } from '../components/CollaboratorLogos';
import { NoxguardGallery } from '../components/NoxguardGallery';
import { Link } from 'react-router-dom';
import { PortfolioFilm } from '../components/PortfolioFilm';
import { HomeFieldFilm } from '../components/HomeFieldFilm';
import { CaseFilm } from '../components/CaseFilm';
import { clBaileyFactoryFilm } from '../data/campaignMedia';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Img } from '../components/Img';
import { Layout } from '../components/Layout';
import { ShowroomFilm } from '../components/ShowroomFilm';
import { usePageMeta } from '../hooks/usePageMeta';
import { EMAIL, PROJECT_CONTACT_HREF } from '../site';

const clientNeeds = [
  {
    title: '“We need photos and video. A big shoot is out of reach.”',
    body: 'Send us the product photos you have. We can use AI to show your product in use, from a set of lifestyle images for your store to a short film for your campaign.',
    link: 'See the film and lifestyle images',
    to: '/#ai',
  },
  {
    title: '“Which designs should we put into production?”',
    body: 'For Billiard Factory, I used AI to design three pool cues and build the pitch. Seeing the designs side by side helped the team decide to make all three.',
    link: 'See the Tierra cue pitch',
    to: '/work/tierra-cue-line',
  },
  {
    title: '“The holiday sale is booked. All we have is a product list.”',
    body: 'We can build a shoppable gift guide around who your customers are buying for, then work with your team on the ads and social posts that bring people to it.',
    link: 'See Billiard Factory’s holiday guides',
    to: '/work/billiard-factory-and-c-l-bailey#holiday-gift-guides',
  },
  {
    title: '“Could Claude help us run our campaigns?”',
    body: 'Pick one campaign. We’ll show your team how to use Claude to turn the brief into a plan, with an owner, a deadline and a place to review each piece.',
    link: 'See Engine Room, built with Claude Code',
    to: '/work/engine-room',
  },
  {
    title: '“Will our delivery options work on Shopify?”',
    body: 'Moving your store starts with a real order. We’ll map how customers choose a size, finish and delivery service, then test those choices with your team before switching checkout.',
    link: 'See Billiard Factory’s Shopify move',
    to: '/work/off-storis',
  },
  {
    title: '“Dealers keep asking us for the latest specs.”',
    body: 'We can build a private dealer portal where a rep can find a product, check its dimensions and download the right image while they’re talking to a buyer.',
    link: 'See the C.L. Bailey dealer portal',
    to: '/work/c-l-bailey-portal-and-concierge',
  },
];

export const Home = () => {
  usePageMeta({ title: 'Untold.works | Independent Creative Agency & Applied AI', description: 'Untold.works helps brands launch products, build digital experiences and equip sales teams. Bring us a pitch, a launch date or a process your team has outgrown.', path: '/' });

  return (
    <Layout className="home-canvas hiring-home print-home">
      <Header />
      <main id="main">
        <section className="print-hero" aria-labelledby="home-title">
          <div className="print-hero-meta"><span>Independent creative &amp; AI studio</span><Link to="/about">Joshua Semolik ↗</Link></div>
          <h1 id="home-title" className="print-wordmark" aria-label="Untold.works">
            <svg viewBox="0 0 1000 340" role="img" aria-hidden="true" focusable="false">
              <text x="0" y="259" textLength="1000" lengthAdjust="spacingAndGlyphs" className="print-untold">UNTOLD</text>
              <text x="999" y="334" textAnchor="end" className="print-works">.works</text>
            </svg>
          </h1>
          <div className="print-hero-bottom"><p>Creative direction.<br />Brand storytelling. Applied AI.</p><a className="print-button" href="#work">Explore the work <span aria-hidden="true">↗</span></a></div>
          <div className="print-hero-colophon" aria-hidden="true"><span>Ideas into experiences.</span><span>Independent by design.</span><span>Scroll to explore ↓</span></div>
        </section>

        <div className="print-discipline-strip" aria-label="Creative disciplines"><span>Brand</span><i aria-hidden="true">✳</i><span>Commerce</span><i aria-hidden="true">✳</i><span>Culture</span><i aria-hidden="true">✳</i><span>Applied AI</span></div>

        <section id="where-to-start" className="home-start scroll-mt-5" aria-labelledby="home-start-title">
          <p className="print-section-marker">01 / A place to start</p>
          <h2 id="home-start-title" className="name hiring-section-title">What do you need to make happen?</h2>
          <div className="home-start-intro">
            <p>A product sample, a launch date or a process your team has outgrown is enough to start. Together we’ll decide what’s worth building within your budget.</p>
            <p>We use AI to put a first version in your hands early, so you can try it and decide what to change. We can build it alongside your team or lead it through launch.</p>
          </div>
        </section>

        <section id="work" className="hiring-work scroll-mt-5" aria-labelledby="selected-work-title">
          <p className="print-section-marker">02 / Selected work</p>
          <h2 id="selected-work-title" className="name hiring-section-title">A floor plan. An album photo.<br />Two places to start.</h2>
          <div className="hiring-lanes">
            <article id="billiard-factory" className="hiring-lane scroll-mt-5">
              <div className="print-case-meta"><span>01 / Brand &amp; commerce</span><span>Ongoing engagement ↗</span></div>
              <div className="hiring-storefront">
                <ShowroomFilm />
                <Link to="/work/billiard-factory-and-c-l-bailey" className="absolute inset-0" aria-label="Explore the Billiard Factory showroom project" />
              </div>
              <h3 className="name hiring-case-title"><Link to="/work/billiard-factory-and-c-l-bailey">Billiard Factory ↗</Link></h3>
              <p>Customers wanted to picture a table in their own home. I designed the showroom around complete rooms. With the team, I turned 27 of those rooms into collections customers can shop online.</p>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <Link to="/work/off-storis" className="text-link">Inside the Shopify rebuild <span aria-hidden="true">↗</span></Link>
                <Link to="/work/billiard-factory-and-c-l-bailey#velocity-launch" className="text-link">Watch the Velocity launch <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article id="second-son" className="hiring-lane scroll-mt-5">
              <div className="print-case-meta"><span>02 / Music &amp; culture</span><span>Artist experience ↗</span></div>
              <Link to="/work/lalah-hathaway" className="hiring-image-link">
                <Img src="lalah-made-in-chicago-live.png" alt="Lalah Hathaway in a listening room lined with records, the opening image for Made in Chicago" sizes="(min-width: 768px) 46vw, 100vw" className="hiring-work-image" />
              </Link>
              <h3 className="name hiring-case-title"><Link to="/work/lalah-hathaway">Lalah Hathaway ↗</Link></h3>
              <p>The team had a photograph for <em>Made in Chicago</em>. I hid seven ways into the album inside it. About five days later, Lalah could try the first version herself.</p>
              <a href="https://lalahhathaway.com/" className="text-link self-start">Step inside the artist site <span aria-hidden="true">↗</span></a>
            </article>
          </div>
        </section>

        <CollaboratorLogos />

        <section className="home-needs" aria-labelledby="home-needs-title">
          <p className="print-section-marker">03 / From the brief</p>
          <h2 id="home-needs-title" className="name hiring-section-title">Ways we can help</h2>
          <div className="home-start-grid">
            {clientNeeds.map(({ title, body, link, to }) => (
              <article key={to} className="home-start-card">
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to={to} className="home-start-link">{link} <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <nav id="other-projects" className="home-related" aria-label="More selected work">
          <div id="corporate-work" className="home-corporate scroll-mt-5">
            <p className="lbl">Projects I led for Ingenia</p>
            <div className="home-corporate-grid">
              {[
                { to: '/work/coca-cola-femsa', title: 'Coca-Cola FEMSA', summary: 'One navigation for journalists, shareholders and job seekers.', image: 'coca-cola-femsa-laptop.png', alt: 'A laptop on a wooden desk showing the Coca-Cola FEMSA corporate website and its product portfolio page' },
                { to: '/work/tekniplex', title: 'TekniPlex', summary: 'Digital business cards for sales teams on the trade-show floor.', image: 'tekniplex-request-form.png', alt: 'A person typing on a laptop that shows the TekniPlex Digital Business Card request form' },
              ].map(({ to, title, summary, image, alt }) => (
                <Link key={to} to={to} className="home-project-card">
                  <Img src={image} alt={alt} sizes="(max-width: 700px) 100vw, (min-width: 1440px) 643px, 48vw" />
                  <div>
                    <span className="name">{title} <span aria-hidden="true">↗</span></span>
                    <span className="home-corporate-summary">{summary}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="home-related-grid">
            {[
              { to: '/work/engine-room', title: 'Engine Room', scope: 'Campaign operations', image: 'marketing-engine-overview.png', alt: 'Campaign dashboard in Billiard Factory’s Engine Room', credit: '' },
              { to: '/work/robert-glasper-blue-note', title: 'Robert Glasper & Blue Note', scope: 'Four years directing festival content', image: 'blue-note-la-glasper.jpg', alt: 'Robert Glasper on stage at the opening of Blue Note Los Angeles', credit: 'Photo by Todd Cooper / @toddcoop' },
              { to: '/work/savor', title: 'Savor', scope: 'Food and storytelling', image: 'savor-chef-series.jpg', alt: 'A chef preparing food for the Savor Chef Series', credit: 'Chef Series frame by IDW Studio' },
            ].map(({ to, title, scope, image, alt, credit }) => (
              <div key={to}>
                <Link to={to} className="home-project-card">
                  <Img src={image} alt={alt} sizes="(min-width: 701px) 30vw, 100vw" />
                  <span className="lbl">{scope}</span>
                  <span className="name">{title} <span aria-hidden="true">↗</span></span>
                </Link>
                {credit && <small>{credit}</small>}
              </div>
            ))}
          </div>
          <Link className="text-link" to="/work/other-projects">Explore food, hospitality and industrial brands ↗</Link>
        </nav>

        <section id="ai" className="home-process scroll-mt-5" aria-labelledby="home-ai-title">
          <div className="print-ai-masthead" aria-hidden="true"><span>HUMAN LED.</span><span>AI ENABLED.</span></div>
          <div className="home-process-spread">
            <div className="home-process-copy">
              <p className="print-section-marker">04 / The creative practice</p>
              <h2 id="home-ai-title" className="name hiring-section-title">Applied AI &amp; Creative Production</h2>
              <p>Creative Direction · AI Product Imagery · Campaign Films · End-to-End Production</p>
              <p>For C.L. Bailey, the brief was a 10% offer. The idea was a man who keeps putting off buying a pool table. Then it starts finding him everywhere, from his morning paper to his train ride home.</p>
              <Link to="/art-of-prompting#process" className="text-link">See how I direct AI imagery ↗</Link>
            </div>
            <CaseFilm
              {...clBaileyFactoryFilm}
              id="home-factory-event-film"
              poster="/images/cl-bailey-waterfront-poster.jpg"
              title="C.L. Bailey · Factory Event"
              caption="The full campaign film, made entirely with AI. The billboards and transit ads are scenes in the film."
              sourceHref="/work/c-l-bailey-factory-event"
              sourceLabel="Explore the campaign"
            />
          </div>
          <section id="holiday-gift-guide" className="home-photo-story home-gift-feature" aria-labelledby="home-gift-title">
            <PortfolioFilm
              id="home-gift-list-film" src="/video/bf-gift-list.mp4" poster="/images/bf-gift-list-poster.webp"
              width={1920} height={1080} label="Billiard Factory’s animated holiday gift checklist"
              controlLabel="gift guide preview" caption="Billiard Factory · Gift guide preview"
            />
            <div className="home-photo-story-copy">
              <p className="lbl">Holiday &amp; Black Friday</p>
              <h3 id="home-gift-title" className="name">Who’s on your list?</h3>
              <p>I turned Billiard Factory’s product list into eight shoppable gift lists with picks from the family behind the store. Then I made a 30-second AI spot that aired on streaming TV and used data from earlier campaigns to choose its placements on Vibe.</p>
              <Link to="/work/billiard-factory-and-c-l-bailey#holiday-gift-guides" className="text-link">Explore the guide and TV spot <span aria-hidden="true">↗</span></Link>
            </div>
          </section>
          <section id="noxguard" className="home-noxguard" aria-label="Noxguard brand gallery">
            <NoxguardGallery />
            <Link to="/work/noxguard" className="text-link">Noxguard’s rebrand, from pallet to sales pitch <span aria-hidden="true">↗</span></Link>
          </section>
          <div id="home-field-stills" className="home-photo-story">
            <HomeFieldFilm featured />
            <div className="home-photo-story-copy">
              <p className="lbl">Billiard Factory · Home Field</p>
              <h3 className="name">Behind the film.</h3>
              <p>For Home Field, I used AI to take the viewer from one pool room to the next. In this shot, the stained-glass lamp, the jukebox and the license plates give the room its character.</p>
              <Link to="/work/home-field" className="text-link">Explore the Home Field campaign ↗</Link>
            </div>
          </div>
          <div className="home-toolkit-strip">
            <div>
              <h3 id="home-toolkit" className="lbl">Tools &amp; platforms</h3>
              <Link to="/about#toolkit" className="text-link">Full toolkit ↗</Link>
            </div>
            <dl aria-labelledby="home-toolkit">
              <div><dt>Creative production</dt><dd>Adobe Creative Cloud, Higgsfield</dd></div>
              <div><dt>Digital experiences &amp; commerce</dt><dd>Claude Code, Shopify</dd></div>
              <div><dt>Retail spaces</dt><dd>SketchUp, AutoCAD</dd></div>
            </dl>
            <Link to="/art-of-prompting" className="text-link">See how I use AI ↗</Link>
          </div>
        </section>

        <section id="contact" className="home-invitation print-contact" aria-labelledby="home-close-title">
          <div>
            <p className="print-section-marker">05 / Your next project</p><h2 id="home-close-title" className="name">What’s<br />next<span className="print-ivory">?</span></h2>
            <p>Send us a brief, a link or a few lines about the project.</p>
          </div>
          <a className="text-link" href={PROJECT_CONTACT_HREF}>{EMAIL} <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
