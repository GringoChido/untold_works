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
    title: '“Which designs should we put into production?”',
    body: 'For Billiard Factory, I used AI to design three pool cues and build the pitch. Seeing the designs side by side helped the team decide to make all three.',
    link: 'See the Tierra cue pitch',
    to: '/work/tierra-cue-line',
  },
  {
    title: '“The holiday sale is booked. All we have is a product list.”',
    body: 'I can build a shoppable gift guide around who your customers are buying for, then work with your team on the ads and social posts that bring people to it.',
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
                <p className="home-hero-pitch">I’m Joshua Semolik. I lead creative teams and use AI to make campaign films, build digital experiences and design tools that help teams get the work out.</p>
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
            <p>Bring me a pitch, a launch date or a process your team has outgrown. We’ll decide what’s worth building within your budget.</p>
            <p>I’ll make a first version you can see and try, then work alongside you or lead it through launch. Sometimes that starts with a floor plan or a single photograph.</p>
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
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <Link to="/work/off-storis" className="text-link">Inside the Shopify rebuild <span aria-hidden="true">↗</span></Link>
                <Link to="/work/billiard-factory-and-c-l-bailey#velocity-launch" className="text-link">Watch the Velocity launch <span aria-hidden="true">↗</span></Link>
              </div>
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
        </section>

        <section className="home-needs" aria-labelledby="home-needs-title">
          <h2 id="home-needs-title" className="name hiring-section-title">Ways I can help</h2>
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
          <div id="corporate-work" className="home-corporate scroll-mt-5">
            <p className="lbl">Corporate clients · Projects I led for the agency Ingenia</p>
            <div className="home-corporate-grid">
              {[
                { to: '/work/coca-cola-femsa', title: 'Coca-Cola FEMSA', scope: 'Corporate website', image: 'coca-cola-femsa-laptop.png', alt: 'A laptop on a wooden desk showing the Coca-Cola FEMSA corporate website and its product portfolio page' },
                { to: '/work/tekniplex', title: 'TekniPlex', scope: 'Digital business card platform', image: 'tekniplex-request-form.png', alt: 'A person typing on a laptop that shows the TekniPlex Digital Business Card request form' },
              ].map(({ to, title, scope, image, alt }) => (
                <Link key={to} to={to} className="home-project-card">
                  <Img src={image} alt={alt} sizes="(min-width: 701px) 46vw, 50vw" />
                  <span className="lbl">{scope}</span>
                  <span className="name">{title} <span aria-hidden="true">↗</span></span>
                </Link>
              ))}
            </div>
          </div>
          <Link className="text-link" to="/work/other-projects">Explore food, hospitality and industrial brands ↗</Link>
        </nav>

        <section id="ai" className="home-process scroll-mt-5" aria-labelledby="home-ai-title">
          <div className="home-process-spread">
            <div className="home-process-copy">
              <p className="lbl">Capabilities</p>
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
