import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';

const toolkit = [
  {
    group: 'AI & development',
    tools: [
      ['ChatGPT', 'Explore ideas and turn a rough brief into creative directions to review.'],
      ['Claude Cowork', 'Organize research, briefs and working files.'],
      ['Claude Code & Codex', 'Build and refine websites, dashboards and internal tools.'],
    ],
  },
  {
    group: 'Creative production',
    tools: [
      ['Higgsfield', 'Develop imagery and motion from product references and art direction.'],
      ['Adobe Creative Cloud', 'Prepare brand assets and campaign artwork for delivery.'],
      ['Adobe Premiere Pro', 'Edit release films, event footage and campaign cutdowns.'],
    ],
  },
  {
    group: 'Retail & spatial design',
    tools: [
      ['SketchUp', 'Explore showroom layouts and product groupings in 3D.'],
      ['AutoCAD', 'Draft floor plans for teams reviewing a retail footprint.'],
    ],
  },
  {
    group: 'Commerce & operations',
    tools: [
      ['Shopify Plus', 'Connect a headless storefront to the catalog, product options and checkout.'],
      ['Xorosoft', 'Coordinate the migration and implementation of the selected ERP system.'],
      ['Google Merchant Center', 'Keep product imagery, options and pricing connected to shopping listings.'],
      ['GoHighLevel', 'Route tagged inquiries to the sales team for follow-up.'],
    ],
  },
  {
    group: 'Campaigns & measurement',
    tools: [
      ['Klaviyo', 'Connect email and SMS signups to the customer journey.'],
      ['Meta & Vibe', 'Prepare creative for social campaigns and manage streaming TV placements through Vibe.'],
      ['Google Analytics 4 & Tag Manager', 'Track customer actions and review campaign performance.'],
      ['Google Search Console', 'Check indexing and search visibility after launch.'],
    ],
  },
  {
    group: 'Web delivery & integrations',
    tools: [
      ['GitHub, Cloudflare & Netlify', 'Manage site changes, connect domains and publish updates.'],
      ['Supabase', 'Store the records that power dashboards and internal tools.'],
      ['ImageKit', 'Deliver images sized for the page and device.'],
      ['Resend', 'Send transactional emails from websites and internal tools.'],
    ],
  },
] as const;

export const About = () => {
  usePageMeta({
    title: 'About Joshua Semolik | Creative & AI Consulting at Untold.works',
    description:
      'I founded Untold.works to bring my background in photography, film and marketing to creative direction, hands-on builds and applied AI.',
    path: '/about',
  });

  return (
    <Layout>
      <Header crumbs={[{ label: 'About' }]} />
      <main id="main" className="flex flex-col">
        <section className="about-opening" aria-labelledby="about-name">
          <div className="about-identity">
            <h1 id="about-name" className="display about-opening-name">Joshua Semolik<span className="about-name-period">.</span></h1>
            <p className="lbl about-opening-title">Founder, Untold.works · Creative &amp; AI consulting</p>
          </div>
          <div className="about-opening-copy">
            <p className="about-opening-statement">Show me the idea you’re still trying to explain.</p>
            <p className="about-opening-summary">I came to consulting through photography, film and marketing. Years behind a camera taught me to ask what someone should notice first. I bring that same eye to the way a fan discovers an album, a buyer walks through a showroom or a team pitches a new idea.</p>
            <p className="about-opening-summary">I like to make a first version we can look at together. I use AI to sketch the room, test the campaign or build a working tool, so you can decide what’s worth your time and budget. I can build it myself or direct your team, then stay involved through launch and the changes that follow.</p>
            <Link to="/work-together" className="text-link about-project-link">Talk with me about your project <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="about-portrait">
            <img
              className="about-portrait-image"
              src="/images/about/joshua-thinking-800.webp"
              srcSet="/images/about/joshua-thinking-480.webp 480w, /images/about/joshua-thinking-800.webp 800w, /images/about/joshua-thinking-1200.webp 1200w"
              sizes="(max-width: 700px) 27vw, (max-width: 1200px) 34vw, 440px"
              width="800"
              height="1000"
              alt="Joshua Semolik smiling with his hand on his chin against a white background"
              fetchPriority="high"
            />
          </div>
        </section>
        <section className="answer-section" aria-labelledby="leadership-questions-title">
          <LabelRow left="Working together" right="Inside the business" />
          <h2 id="leadership-questions-title" className="name answer-section-title">What your team can use.</h2>
          <div className="answer-grid">
            <div><h3>A place to run the campaign</h3><p>When a launch has a dozen moving parts, the team needs to see which assets are approved and who has the next step. I built <Link to="/work/engine-room">Engine Room</Link> so the marketing team could find the brief, the files and the publishing schedule in one place.</p></div>
            <div><h3>A way to tell the product story</h3><p>A dealer preparing a pitch needs the right image and a clear explanation of the product. For C.L. Bailey, I built a <Link to="/work/c-l-bailey-portal-and-concierge">dealer portal</Link> for the materials and a brand guide that shows partners how to use them.</p></div>
          </div>
        </section>
        <section className="pb-20" aria-labelledby="selected-work-title">
          <LabelRow left={<span id="selected-work-title">Selected work</span>} right="Roles and projects" />
          <ul className="about-proof-list m-0 list-none p-0" aria-labelledby="selected-work-title">
            <li><Link to="/work/billiard-factory-and-c-l-bailey"><strong>Billiard Factory + C.L. Bailey</strong><span>Retail redesign, live shoppable rooms, Shopify Plus migration, dealer tools and AI-led campaigns.</span><span aria-hidden="true">↗</span></Link></li>
            <li><Link to="/work/robert-glasper-blue-note"><strong>Second Son Productions & related music work</strong><span>Artist sites, Robert Glasper releases and distinct Blue Note content roles.</span><span aria-hidden="true">↗</span></Link></li>
            <li><Link to="/work/savor"><strong>Savor</strong><span>Website and content storytelling through IDW Studio.</span><span aria-hidden="true">↗</span></Link></li>
          </ul>
          <Link to="/work-together" className="text-link mt-8">
            Work with me <span aria-hidden="true">↗</span>
          </Link>
        </section>
        <section className="about-ai-turning-point pb-20" aria-labelledby="about-practice-title">
          <LabelRow left="Applied AI / The turning point" right="MIT Sloan · 2025" />
          <div className="about-ai-turning-point-grid">
            <div className="about-ai-year" aria-hidden="true">2025<span>MIT Sloan</span></div>
            <h2 id="about-practice-title" className="name m-0 max-w-[820px] text-[clamp(36px,4.4vw,62px)] leading-[0.98]">The class changed how I work.</h2>
          </div>
          <div className="mt-9 grid items-start gap-7 border-t border-current pt-6 md:grid-cols-3 md:gap-10">
              <p className="m-0 text-[18px] leading-[1.55]">
                At MIT Sloan in 2025, I studied how AI changes the way a business works. I started looking for places where a first draft could help a team make a decision sooner.
              </p>
              <p className="m-0 text-[18px] leading-[1.55]">
                On a shoot, I decide what belongs in the frame. I bring the same judgment to an AI image, down to how light hits a product and whether the details hold up.
              </p>
              <p className="m-0 text-[18px] leading-[1.55]">
                When I teach a team, we use work already on the calendar. We might prepare a campaign asset, check the product details together and leave the next person a process they can use.
              </p>
          </div>
        </section>
        <section id="toolkit" className="about-toolkit scroll-mt-6 pb-20" aria-labelledby="about-toolkit-title">
          <LabelRow left="Tools & platforms" right="My working toolkit" />
          <div className="about-toolkit-intro">
            <h2 id="about-toolkit-title" className="name m-0 text-[clamp(34px,4.2vw,58px)] leading-[1.02]">The tools behind the work.</h2>
            <p className="m-0 text-[18px] leading-[1.5]">The tools I use to create and build, alongside the platforms I coordinate with client teams.</p>
          </div>
          <div className="about-toolkit-grid">
            {toolkit.map(({ group, tools }, index) => (
              <div key={group} className="about-toolkit-group">
                <h3 className="lbl">{String(index + 1).padStart(2, '0')} / {group}</h3>
                <dl>
                  {tools.map(([name, purpose]) => (
                    <div key={name}><dt>{name}</dt><dd>{purpose}</dd></div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <Link to="/art-of-prompting" className="text-link mt-8">Explore the art of prompting <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <div className="mt-auto" />
      <Footer />
    </Layout>
  );
};
