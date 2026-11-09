import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Img } from '../components/Img';
import { Layout } from '../components/Layout';
import { ShowroomFilm } from '../components/ShowroomFilm';
import { usePageMeta } from '../hooks/usePageMeta';
import { PROJECT_CONTACT_HREF } from '../site';
export const Home = () => {
  usePageMeta({ title: 'Untold.works | Creative & AI Consulting', description: 'Work with me on your brand story, digital experience or next launch. I use AI to help your team take an idea through delivery.', path: '/' });
  return (
    <Layout className="home-canvas hiring-home">
      <Header />
      <main id="main">
        <section className="studio-hero" aria-labelledby="home-title">
          <div className="studio-hero-scene">
            <picture>
              <source media="(max-width: 550px)" type="image/webp" srcSet="/images/untold-downtown-hero-clear-street-mobile-480.webp 480w, /images/untold-downtown-hero-clear-street-mobile-700.webp 700w" sizes="100vw" />
              <Img src="untold-downtown-hero-clear-street.png" alt="Imagined downtown New York scene of a man showing a woman his phone as they walk together on the sidewalk, with pedestrians receding into the distance" sizes="100vw" eager fetchPriority="high" className="studio-hero-scene-image" />
            </picture>
            <div className="studio-hero-overlay">
              <div>
                <p className="home-eyebrow">Untold.works <span aria-hidden="true">/</span> Independent creative &amp; AI studio</p>
                <h1 id="home-title" className="display studio-hero-title">What are you trying<br /><span>to make happen?</span></h1>
              </div>
              <div className="hiring-actions"><Link to="/work-together" className="hiring-button">Let’s talk about your project <span aria-hidden="true">↗</span></Link><a href="#work" className="text-link">Explore the work <span aria-hidden="true">↓</span></a></div>
            </div>
          </div>

          <div className="studio-hero-intro hiring-intro">
            <p>I’m Joshua. Bring me a brand that needs a clearer story, a launch you want to get into the world, or a process that’s costing your team time. We’ll work out what’s worth building within your budget.</p>
            <p className="hiring-availability">I can build it with you or lead it through launch, using AI where it saves time and expands what we can deliver.</p>
            <div className="hiring-actions"><Link to="/work-together#where-i-can-help" className="text-link">Ways to work together ↗</Link></div>
          </div>
        </section>

        <section id="work" className="hiring-work scroll-mt-5" aria-labelledby="selected-work-title">
          <p className="lbl">Selected work</p>
          <h2 id="selected-work-title" className="name hiring-section-title">What that can look like.</h2>
          <div className="hiring-lanes">
            <section id="billiard-factory" className="hiring-lane scroll-mt-5" aria-labelledby="bf-home-title">
              <p className="lbl">Brand, retail &amp; AI transformation</p>
              <div className="hiring-storefront">
                <ShowroomFilm />
                <Link to="/work/billiard-factory-and-c-l-bailey" className="absolute inset-0" aria-label="Explore the Billiard Factory and C.L. Bailey engagement" />
              </div>
              <h3 id="bf-home-title" className="name hiring-case-title"><Link to="/work/billiard-factory-and-c-l-bailey">Billiard Factory</Link></h3>
              <p>A showroom concept carried through to the online store, the campaigns that introduce it, and the tools the sales team uses.</p>
              <ul className="hiring-proof-list">
                <li><Link to="/work/off-storis"><strong>Shopify &amp; ecommerce ↗</strong><span>Configurable products, add-ons and delivery choices. The checkout is live.</span></Link></li>
                <li><Link to="/work/billiard-factory-and-c-l-bailey#paid-media-ctv"><strong>Paid media, SEO/AEO &amp; CTV ↗</strong><span>Campaign creative and placement across search, paid media and streaming TV.</span></Link></li>
                <li><Link to="/work/billiard-factory-and-c-l-bailey"><strong>Explore the full engagement ↗</strong></Link></li>
              </ul>
              <Link to="/work/engine-room" className="hiring-secondary"><Img src="engine-room-cover-2026.png" alt="Engine Room: a composed view of the campaign calendar and creative asset library" sizes="(min-width: 768px) 46vw, 100vw" className="hiring-work-image" /><h4 className="name hiring-case-title">Engine Room ↗</h4><p>I designed and built the marketing platform with Claude Code, connecting campaign plans, assets, owners and delivery.</p></Link>
            </section>

            <section id="second-son" className="hiring-lane scroll-mt-5" aria-labelledby="music-home-title">
              <p className="lbl">Music &amp; entertainment creative leadership</p>
              <Link to="/work/robert-glasper-blue-note" className="hiring-image-link"><Img src="robert-glasper-blue-note-at-sea-john-abbott.jpg" alt="Robert Glasper performing at the piano under blue and magenta lights" sizes="(min-width: 768px) 46vw, 100vw" className="hiring-work-image" /></Link>
              <h3 id="music-home-title" className="name hiring-case-title"><Link to="/work/robert-glasper-blue-note">Robert Glasper &amp; Blue Note</Link></h3>
              <p>Release films and Robtober stories with Robert Glasper’s team, alongside opening and festival work for Blue Note.</p>
              <ul className="hiring-proof-list">
                <li><Link to="/work/blue-note-los-angeles"><strong>Blue Note Los Angeles ↗</strong><span>Launch and opening content introducing the Hollywood room and its opening artist.</span></Link></li>
                <li><Link to="/work/black-radio-experience"><strong>Blue Note Napa / Black Radio Experience ↗</strong><span>Content Director across four years of Blue Note’s Napa festival, including its evolution into the Black Radio Experience.</span></Link></li>
                <li><Link to="/work/robert-glasper-blue-note"><strong>Explore the music work ↗</strong></Link></li>
              </ul>
              <Link to="/work/lalah-hathaway" className="hiring-secondary"><Img src="lalah-made-in-chicago.jpg" alt="Lalah Hathaway’s Made in Chicago interactive artist website" sizes="(min-width: 768px) 46vw, 100vw" className="hiring-work-image" /><h4 className="name hiring-case-title">Lalah Hathaway ↗</h4><p>Seven objects in an artist-supplied photograph became the navigation for an interactive album experience.</p></Link>
              <p className="home-practice-credit">Robert Glasper photo: <a href="https://www.wbgo.org/music/2023-09-25/robert-glasper-on-robtober-his-monthlong-residency-at-the-blue-note" target="_blank" rel="noreferrer">John Abbott / Jazz Cruises ↗</a></p>
            </section>
          </div>
        </section>

        <section id="ai" className="hiring-approach scroll-mt-5" aria-labelledby="home-ai-title">
          <div><p className="lbl">Approach</p><h2 id="home-ai-title" className="name hiring-section-title">Find the story.<br />Bring it to life.</h2></div>
          <div>
            <p>A working draft gives us something to react to. I use AI to explore directions and build an early version, then work with the people who know the brand to get the details right.</p>
            <h3 id="home-toolkit" className="lbl mt-6">Tools &amp; platforms</h3>
            <dl className="mt-2 space-y-2 text-[15px] leading-snug" aria-labelledby="home-toolkit">
              <div><dt className="inline font-semibold">Creative production</dt><dd className="inline"> · Adobe Creative Cloud, Higgsfield</dd></div>
              <div><dt className="inline font-semibold">Websites &amp; commerce</dt><dd className="inline"> · Claude Code, Shopify</dd></div>
              <div><dt className="inline font-semibold">Retail spaces</dt><dd className="inline"> · SketchUp, AutoCAD</dd></div>
            </dl>
            <div className="hiring-actions">
              <Link to="/about#toolkit" className="text-link">See the full toolkit ↗</Link>
              <Link to="/art-of-prompting" className="text-link">AI creative production ↗</Link>
            </div>
          </div>
        </section>
        <section id="other-projects" className="hiring-more scroll-mt-5" aria-label="Other Projects">
          <p className="lbl">More selected work</p><div className="hiring-actions"><Link to="/work/savor" className="text-link">Savor ↗</Link><Link to="/work/noxguard" className="text-link">Noxguard ↗</Link><Link to="/work/other-projects" className="text-link">Other Projects ↗</Link></div>
        </section>
        <section className="home-close" aria-labelledby="home-close-title">
          <p className="home-eyebrow">Work with Untold</p>
          <div className="home-close-grid"><h2 id="home-close-title">Where should<br />we start?</h2><div><p>Tell me what you’re working on, what you’d like to change, or where you’re stuck.</p><div className="hiring-actions"><a href={PROJECT_CONTACT_HREF} className="text-link">Email me ↗</a></div></div></div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
