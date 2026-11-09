import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, PROJECT_CONTACT_HREF, LINKEDIN_URL } from '../site';
import './WorkTogether.css';

const scopes = [
  {
    number: '01', title: 'Get your launch out the door.',
    body: 'You have a product, an idea or an opening date. I can turn it into a story you can pitch, an experience customers can use, and a campaign your team is ready to publish.',
    examples: [
      'A brand story, pitch and visual direction your team can present.',
      'A shopping experience, from the storefront online to the floor plan in the showroom.',
      'A launch campaign with finished imagery, copy, social assets and a publishing calendar.',
    ],
    proof: [
      { label: 'Billiard Factory / From showroom to storefront', to: '/work/billiard-factory-and-c-l-bailey' },
      { label: 'Lalah Hathaway / From photo shoot to interactive album site', to: '/work/lalah-hathaway' },
    ],
  },
  {
    number: '02', title: 'Give your team time back.',
    body: 'If every pitch starts from scratch or an approval gets lost in email, show me one example. I can build the sales materials, shared workspace or AI-assisted process that makes the next one easier.',
    examples: [
      'Sales presentations, brand kits and dealer tools with current product information.',
      'A dashboard where a team can find approved assets, see who owns a task and hand it off.',
      'Launch and ongoing support, including integrations, DNS setup, publishing and updates.',
    ],
    proof: [
      { label: 'Engine Room / From campaign brief to handoff', to: '/work/engine-room' },
      { label: 'C.L. Bailey / Brand guidance for dealers', to: '/work/c-l-bailey-brand-bible' },
    ],
  },
] as const;

export const WorkTogether = () => {
  usePageMeta({
    title: 'Work with Untold | Creative & AI Consulting',
    description: 'Tell me about your project, timing and budget. We’ll decide together what to build first.',
    path: '/work-together',
  });

  return (
    <Layout className="work-together">
      <Header crumbs={[{ label: 'Work together' }]} />
      <main id="main" className="work-together-main">
        <section className="work-together-hero" aria-labelledby="work-together-title">
          <p className="lbl work-together-eyebrow">Creative &amp; AI consulting</p>
          <h1 id="work-together-title" className="display work-together-title">Show me where<br />you are.</h1>
          <div className="work-together-hero-bottom">
            <div className="work-together-identity">
              <p className="work-together-name">Joshua Semolik</p>
              <p className="lbl work-together-role">Independent consultant<br />Creative direction &amp; applied AI</p>
            </div>
            <div className="work-together-hero-copy">
              <p>Bring me the idea you need to pitch, the launch you need to deliver, or the task that takes up too much of your week. Together we’ll pick one thing to build first and put a working version in your hands.</p>
              <p>We’ll agree on scope, timing and budget up front. I work directly with the people making the decisions and can lead delivery or build alongside your team.</p>
              <div className="work-together-actions">
                <a href={PROJECT_CONTACT_HREF} className="work-together-button">Email me <span aria-hidden="true">↗</span></a>
                <a href="#where-i-can-help" className="text-link">Where I can help <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="where-i-can-help" className="work-together-section work-together-scopes" aria-labelledby="work-together-scope-title">
          <LabelRow left="Consulting" right="Ways to work together" />
          <h2 id="work-together-scope-title" className="name work-together-section-title">Where I can help.</h2>
          <div className="work-together-scope-list">
            {scopes.map((scope) => (
              <article key={scope.number} className="work-together-scope" aria-labelledby={`work-together-scope-${scope.number}`}>
                <span className="lbl work-together-number" aria-hidden="true">{scope.number}</span>
                <h3 id={`work-together-scope-${scope.number}`} className="name work-together-scope-title">{scope.title}</h3>
                <div className="work-together-scope-copy">
                  <p>{scope.body}</p>
                  <ul className="work-together-examples" aria-label={`Examples of ${scope.title.replace(/\.$/, '').toLowerCase()}`}>
                    {scope.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                  <div className="work-together-proof-links">
                    {scope.proof.map((proof) => <Link key={proof.to} to={proof.to} className="text-link">{proof.label} <span aria-hidden="true">↗</span></Link>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="work-together-section work-together-contact" aria-labelledby="work-together-contact-title">
          <LabelRow left="Start a conversation" right="Joshua Semolik / Untold.works" />
          <div className="work-together-contact-grid">
            <div>
              <h2 id="work-together-contact-title" className="name work-together-section-title">Tell me about<br />your project.</h2>
              <p className="work-together-contact-intro">A few lines are enough. What would you like to change? If there’s a deadline or a budget in mind, include it.</p>
            </div>
            <div className="work-together-contact-details">
              <div className="work-together-contact-line">
                <span className="lbl">Email me</span>
                <a href={PROJECT_CONTACT_HREF} className="work-together-email">{EMAIL}<span aria-hidden="true">↗</span></a>
              </div>
              <div className="work-together-contact-line">
                <span className="lbl">Call</span>
                <a href={PHONE_HREF} className="work-together-phone">{PHONE_DISPLAY}<span aria-hidden="true">↗</span></a>
              </div>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">Connect on LinkedIn ↗</a>
              <Link to="/about" className="text-link work-together-about-link">About me <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
        <aside className="work-together-business"><div><p className="lbl">Website projects</p><p>Working with an existing site, product catalog or photo library?</p></div><Link to="/for-your-business#what-can-change" className="text-link">Explore website improvements ↗</Link></aside>
      </main>
      <Footer />
    </Layout>
  );
};
