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
    body: 'Send me the product photos you have. I can use AI to show your product in use, from a set of lifestyle images for your store to a short film for your campaign.',
    link: 'See the film and lifestyle images',
    to: '/#ai',
  },
  {
    title: '“Can we give the client something to click through?”',
    body: 'I’ll turn your pitch for a digital experience into a working prototype. The client can open a link, try the idea and give you feedback before funding the full build.',
    link: 'See the Village Tenders pitch',
    to: '/work/village-tenders',
  },
  {
    title: '“The holiday sale is booked. All we have is a product list.”',
    body: 'For Billiard Factory, I turned a product list into eight gift lists picked by the family behind the store.',
    guideUrl: 'https://bf-landing-pages.netlify.app/black-friday/',
    link: 'See Billiard Factory’s holiday guides',
    to: '/work/billiard-factory-and-c-l-bailey#holiday-gift-guides',
  },
  {
    title: '“Could Claude help us run our campaigns?”',
    body: 'Pick one campaign. I’ll show your team how to use Claude to turn the brief into a plan, with an owner, a deadline and a place to review each piece.',
    link: 'See Engine Room, built with Claude Code',
    to: '/work/engine-room',
  },
  {
    title: '“Will our delivery options work on Shopify?”',
    body: 'Moving your store starts with a real order. I’ll map how customers choose a size, finish and delivery service, then test those choices with your team before switching checkout.',
    link: 'See Billiard Factory’s Shopify move',
    to: '/work/off-storis',
  },
  {
    title: '“Dealers keep asking us for the latest specs.”',
    body: 'I can build a private dealer portal where a rep can find a product, check its dimensions and download the right image while they’re talking to a buyer.',
    link: 'See the C.L. Bailey dealer portal',
    to: '/work/c-l-bailey-portal-and-concierge',
  },
];

export const Home = () => {
  usePageMeta({ title: 'Untold.works | Creative & AI Consulting', description: 'Bring a launch, a pitch or a process that needs work. Joshua Semolik helps you shape the story, build a first version with AI and carry it through launch.', path: '/' });

  return (
    <Layout className="home-canvas hiring-home">
      <Header />
      <main id="main">
        <section className="studio-hero" aria-labelledby="home-title">
          <div className="studio-hero-scene">
            <picture>
              <source media="(max-width: 550px)" type="image/webp" srcSet="/images/untold-downtown-hero-clear-street-mobile-480.webp 480w, /images/untold-downtown-hero-clear-street-mobile-700.webp 700w" sizes="100vw" />
              <Img src="untold-downtown-hero-clear-street.png" alt="Two people sharing something on a phone as they walk down a New York street" sizes="100vw" eager fetchPriority="high" className="studio-hero-scene-image" />
            </picture>
            <div className="studio-hero-overlay">
              <div>
                <p className="home-eyebrow">Independent creative &amp; AI consulting</p>
                <h1 id="home-title" className="display studio-hero-title">Show them<br />what you mean.</h1>
                <p className="home-hero-pitch">I’m Joshua Semolik. I help teams turn an idea into something they can put in front of a customer.</p>
              </div>
              <div className="hiring-actions">
                <a href={PROJECT_CONTACT_HREF} className="hiring-button">Talk with me about your project <span aria-hidden="true">↗</span></a>
                <a href="#work" className="text-link">See the work <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="where-to-start" className="home-start scroll-mt-5" aria-labelledby="home-start-title">
          <h2 id="home-start-title" className="name hiring-section-title">What do you need to make happen?</h2>
          <div className="home-start-intro">
            <p>Bring me a pitch you need to land, a brand that’s hard to explain, or a process that eats up your team’s week. We’ll work out what’s worth building within your budget.</p>
            <p>I’ll build a first version you can see and try. From there, I can work alongside you or lead your team through launch. I use AI where it saves us time or puts something new within reach, like making a campaign film from product photos.</p>
          </div>
          <div className="home-start-grid">
            {clientNeeds.map(({ title, body, link, to, guideUrl }) => (
              <article key={to} className="home-start-card">
                <h3>{title}</h3>
                <p>{body}</p>
                {guideUrl && (
                  <div id="holiday-gift-guide" className="home-gift-preview">
                    <PortfolioFilm
                      id="home-gift-list-film" src="/video/bf-gift-list.mp4" poster="/images/bf-gift-list-poster.webp"
                      width={1920} height={1080} label="Who’s on your list? Billiard Factory’s animated gift checklist"
                      controlLabel="gift guide preview" caption={null}
                    />
                    <a className="home-gift-guide-link" href={guideUrl} aria-label="Open Billiard Factory’s Black Friday gift guide">
                      <span>Open the gift guide ↗</span>
                    </a>
                  </div>
                )}
                <Link to={to} className="home-start-link">{link} <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="hiring-work scroll-mt-5" aria-labelledby="selected-work-title">
          <p className="lbl">Selected work</p>
          <h2 id="selected-work-title" className="name hiring-section-title">A floor plan. An album photo.<br />Two places to start.</h2>
          <div className="hiring-lanes">
            <article id="billiard-factory" className="hiring-lane scroll-mt-5">
              <div className="hiring-storefront">
                <ShowroomFilm />
                <Link to="/work/billiard-factory-and-c-l-bailey" className="absolute inset-0" aria-label="Explore the Billiard Factory showroom project" />
              </div>
              <h3 className="name hiring-case-title"><Link to="/work/billiard-factory-and-c-l-bailey">Billiard Factory ↗</Link></h3>
              <p>Customers wanted to picture a table in their own home. I designed the showroom around complete rooms. With the team, I turned 27 of those rooms into collections customers can shop online.</p>
              <Link to="/work/off-storis" className="text-link self-start">Inside the Shopify rebuild <span aria-hidden="true">↗</span></Link>
            </article>
            <article id="second-son" className="hiring-lane scroll-mt-5">
              <Link to="/work/lalah-hathaway" className="hiring-image-link">
                <Img src="lalah-made-in-chicago.jpg" alt="Lalah Hathaway in a listening room lined with records, the opening image for Made in Chicago" sizes="(min-width: 768px) 46vw, 100vw" className="hiring-work-image" />
              </Link>
              <h3 className="name hiring-case-title"><Link to="/work/lalah-hathaway">Lalah Hathaway ↗</Link></h3>
              <p>The team had a photograph for <em>Made in Chicago</em>. I hid seven ways into the album inside it. About five days later, Lalah could try the first version herself.</p>
              <a href="https://lalahhathaway.com/" className="text-link self-start">Step inside the artist site <span aria-hidden="true">↗</span></a>
            </article>
          </div>
          <nav id="other-projects" className="home-related" aria-label="More selected work">
            <div className="home-related-grid">
              {[
                { to: '/work/engine-room', title: 'Engine Room', scope: 'Campaign operations', image: 'marketing-engine-overview.png', alt: 'Campaign dashboard in Billiard Factory’s Engine Room', credit: '' },
                { to: '/work/robert-glasper-blue-note', title: 'Robert Glasper & Blue Note', scope: 'Music and live events', image: 'blue-note-la-glasper.jpg', alt: 'Robert Glasper on stage at the opening of Blue Note Los Angeles', credit: 'Photo by Todd Cooper / @toddcoop' },
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
            <Link className="text-link" to="/work/other-projects">More projects ↗</Link>
          </nav>
        </section>

        <section id="ai" className="home-process scroll-mt-5" aria-labelledby="home-ai-title">
          <div className="home-process-spread">
            <div className="home-process-copy">
              <p className="lbl">Capabilities</p>
              <h2 id="home-ai-title" className="name hiring-section-title">Applied AI &amp; Creative Production</h2>
              <p>Creative Direction · AI Product Imagery · Campaign Films · End-to-End Production</p>
              <p>For C.L. Bailey, the brief was a 10% offer. The idea was a man who keeps putting off buying a pool table. Then it starts finding him everywhere, from his morning paper to his train ride home.</p>
              <Link to="/work-together#where-i-can-help" className="text-link">Ways to work together ↗</Link>
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
          <section id="noxguard" className="home-noxguard" aria-label="Noxguard brand gallery">
            <NoxguardGallery />
            <Link to="/work/noxguard" className="text-link">Explore the Noxguard rebrand <span aria-hidden="true">↗</span></Link>
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

        <section id="contact" className="home-invitation" aria-labelledby="home-close-title">
          <div>
            <h2 id="home-close-title" className="name">Tell me what you’re working on.</h2>
            <p>Send me a brief, a link or a few lines about the project.</p>
          </div>
          <a className="text-link" href={PROJECT_CONTACT_HREF}>{EMAIL} <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
