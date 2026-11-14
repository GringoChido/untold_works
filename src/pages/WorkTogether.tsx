import { useProjectEmail } from '../components/ProjectInquiries';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, LINKEDIN_URL } from '../site';
import './WorkTogether.css';

const scopes = [
  {
    number: '01', title: 'Ongoing creative and marketing partner',
    body: 'For a CEO who needs someone to own priorities, direct the work, stay involved through delivery and review what to do next.',
    examples: [
      'One plan across sales, your team and outside partners.',
      'Direction of the work, hands-on through delivery.',
      'A regular review of what happened and what to do next.',
    ],
    proof: [
      { label: 'Billiard Factory / From showroom to storefront', to: '/work/billiard-factory-and-c-l-bailey' },
    ],
  },
  {
    number: '02', title: 'Focused project',
    body: 'For a team with one clear need, such as a launch, film, shopping experience, dealer portal, reporting system or AI workflow.',
    examples: [
      'A launch campaign with finished imagery, copy, social assets and a publishing calendar.',
      'A shopping experience, from the storefront online to the floor plan in the showroom.',
      'Sales presentations, brand kits and dealer tools with current product information.',
      'A dashboard where a team can find approved assets, see who owns a task and hand it off.',
    ],
    proof: [
      { label: 'Lalah Hathaway / From photo shoot to interactive album site', to: '/work/lalah-hathaway' },
      { label: 'Engine Room / From campaign brief to handoff', to: '/work/engine-room' },
      { label: 'C.L. Bailey / Brand guidance for dealers', to: '/work/c-l-bailey-brand-bible' },
    ],
  },
  {
    number: '03', title: 'Marketing and AI Review',
    body: 'For someone who knows something should work better but doesn’t know where to start.',
    examples: [
      'A short priority plan.',
      'One agreed working example you can try.',
      'A walkthrough with your team.',
    ],
    proof: [
      { label: 'Data Studio / Try a budget decision', to: '/data-studio#compare' },
    ],
  },
] as const;

const services = scopes.map((scope) => ({
  name: scope.title,
  description: scope.body,
  url: `/work-together#work-together-scope-${scope.number}`,
}));

export const WorkTogether = () => {
  const projectEmail = useProjectEmail();
  usePageMeta({
    title: 'Work with Untold.works | Three ways to hire us',
    description: 'Tell us about your project, timing and budget. We’ll decide together what to build first.',
    path: '/work-together', services,
  });

  return (
    <Layout className="work-together">
      <Header crumbs={[{ label: 'Work together' }]} />
      <main id="main" className="work-together-main">
        <section className="work-together-hero" aria-labelledby="work-together-title">
          <p className="lbl work-together-eyebrow">Work together</p>
          <h1 id="work-together-title" className="display work-together-title">Three ways<br />to hire us.</h1>
          <div className="work-together-hero-bottom">
            <div className="work-together-identity">
              <p className="work-together-name">Untold.works</p>
              <p className="lbl work-together-role">Independent creative<br />&amp; AI studio</p>
            </div>
            <div className="work-together-hero-copy">
              <p>Tell us what you’re trying to solve. A link, a launch date or a few lines about what your team needs is enough to start. If you have a deadline or budget in mind, include it.</p>
              <p>We’ll agree on scope, timing and budget up front. We work directly with the people making the decisions and can lead delivery or build alongside your team.</p>
              <div className="work-together-actions">
                <a href={projectEmail} className="work-together-button">Tell us what you’re trying to solve <span aria-hidden="true">↗</span></a>
                <a href="#where-i-can-help" className="text-link">The three ways <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="where-i-can-help" className="work-together-section work-together-scopes" aria-labelledby="work-together-scope-title">
          <LabelRow left="How to start" right="Three ways to hire us" />
          <h2 id="work-together-scope-title" className="name work-together-section-title">Pick the one that fits.</h2>
          <div className="work-together-scope-list">
            {scopes.map((scope) => (
              <article key={scope.number} className="work-together-scope" aria-labelledby={`work-together-scope-${scope.number}`}>
                <span className="lbl work-together-number" aria-hidden="true">{scope.number}</span>
                <h3 id={`work-together-scope-${scope.number}`} className="name work-together-scope-title">{scope.title}</h3>
                <div className="work-together-scope-copy">
                  <p>{scope.body}</p>
                  <p className="lbl work-together-get">What you get</p>
                  <ul className="work-together-examples" aria-label={`What you get: ${scope.title}`}>
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
          <LabelRow left="Start a conversation" right="Untold.works" />
          <div className="work-together-contact-grid">
            <div>
              <h2 id="work-together-contact-title" className="name work-together-section-title">Get in touch.</h2>
              <p className="work-together-contact-intro">A few lines are enough. What would you like to change? If there’s a deadline or a budget in mind, include it.</p>
            </div>
            <div className="work-together-contact-details">
              <div className="work-together-contact-line">
                <span className="lbl">Email us</span>
                <a href={projectEmail} className="work-together-email">{EMAIL}<span aria-hidden="true">↗</span></a>
              </div>
              <div className="work-together-contact-line">
                <span className="lbl">Call</span>
                <a href={PHONE_HREF} className="work-together-phone">{PHONE_DISPLAY}<span aria-hidden="true">↗</span></a>
              </div>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-link">Connect on LinkedIn ↗</a>
              <Link to="/about" className="text-link work-together-about-link">About Joshua <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
