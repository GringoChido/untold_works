import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, PROJECT_CONTACT_HREF } from '../site';
import { tones } from '../theme';
import './WorkTogether.css';

const scopes = [
  {
    number: '01',
    title: 'Creative direction & AI production.',
    body: 'I help shape the idea, write the brief and direct how it becomes an image, a film or a campaign. Product references, precise prompting, scene building and editing connect the creative to what the brand needs to say.',
    examples: ['Campaign concepts', 'Product and lifestyle imagery', 'Film direction', 'Content for web and social'],
    proof: [
      { label: 'The art of prompting', to: '/art-of-prompting' },
      { label: 'Noxguard / Brand and campaign', to: '/work/noxguard' },
    ],
  },
  {
    number: '02',
    title: 'Websites & digital experiences.',
    body: 'I bring the story and the next action into the same experience. For a brand, an artist or a retailer, that means helping someone understand the work, explore the offer and know where to go next.',
    examples: ['Website strategy', 'Content and storytelling', 'Interactive experiences', 'Commerce and inquiry paths'],
    proof: [
      { label: 'Lalah Hathaway / An interactive artist site', to: '/work/lalah-hathaway' },
      { label: 'Savor / Website and storytelling through IDW Studio', to: '/work/savor' },
    ],
  },
  {
    number: '03',
    title: 'Marketing systems & team adoption.',
    body: 'I help connect planning, creative, review and delivery so the work can keep moving. I also work with teams on real tasks: testing AI tools, documenting what works and making the next handoff clear.',
    examples: ['Campaign planning', 'Creative workflows', 'Asset organization', 'Practical AI guidance'],
    proof: [
      { label: 'Engine Room / A connected marketing workflow', to: '/work/engine-room' },
      { label: 'The tools behind the work', to: '/about#toolkit' },
    ],
  },
] as const;

const firstSteps = [
  { number: '01', title: 'Bring the question.', body: 'Tell me what you’re making, who it’s for and where the work is getting stuck. Existing work and references give us a useful place to start.' },
  { number: '02', title: 'Define a useful first step.', body: 'We’ll identify what needs direction, what needs building and what the team needs to carry it forward.' },
  { number: '03', title: 'Make the work reviewable.', body: 'A brief, a creative study, a prototype or a working system gives us something concrete to discuss and improve.' },
] as const;

export const WorkTogether = () => {
  usePageMeta({
    title: 'Work Together — Consulting & Collaboration | Untold.works',
    description: 'Work with Joshua Semolik on creative direction, AI images and films, websites, commerce experiences, marketing workflows and practical team adoption. Contact Untold.works to discuss a project.',
    path: '/work-together',
  });

  return (
    <Layout tone={tones.close} className="work-together">
      <Header crumbs={[{ label: 'Work Together' }]} />
      <main id="main" className="work-together-main">
        <section className="work-together-hero" aria-labelledby="work-together-title">
          <p className="lbl work-together-eyebrow">Consulting &amp; collaboration</p>
          <h1 id="work-together-title" className="display work-together-title">Let’s put the<br />idea to work.</h1>
          <div className="work-together-hero-bottom">
            <div className="work-together-identity">
              <p className="work-together-name">Joshua Semolik</p>
              <p className="lbl work-together-role">Creative direction<br />Applied AI · Systems &amp; experiences</p>
            </div>
            <div className="work-together-hero-copy">
              <p>I help brands, artists and teams turn an idea into creative work and a system they can use. That might be a campaign, a website, a better path to purchase, or a practical way to bring AI into the team’s day.</p>
              <p>I bring creative direction, hands-on building and the experience of helping people carry the work forward.</p>
              <div className="work-together-actions">
                <a href="#contact" className="work-together-button">Tell me about your project <span aria-hidden="true">↗</span></a>
                <a href="#where-i-can-help" className="text-link">See how I work <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section id="where-i-can-help" className="work-together-section work-together-scopes" aria-labelledby="work-together-scope-title">
          <LabelRow left="Where I can help" right="Direction · Projects · Collaboration" />
          <h2 id="work-together-scope-title" className="name work-together-section-title">A clear direction.<br />Something concrete to build.</h2>
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
          <p className="voice work-together-engagement">I can help clarify the direction, take on a defined project, or work alongside your team as it develops a new way of working. The starting point is the problem you need to solve.</p>
        </section>

        <section className="work-together-section" aria-labelledby="work-together-start-title">
          <LabelRow left="The first conversation" right="A useful place to start" />
          <h2 id="work-together-start-title" className="name work-together-section-title">You don’t need<br />a finished brief.</h2>
          <ol className="work-together-first-steps">
            {firstSteps.map((step) => (
              <li key={step.number}>
                <span className="lbl" aria-hidden="true">{step.number}</span>
                <h3 className="name">{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="work-together-section work-together-contact" aria-labelledby="work-together-contact-title">
          <LabelRow left="Start a conversation" right="Joshua Semolik / Untold.works" />
          <div className="work-together-contact-grid">
            <div>
              <h2 id="work-together-contact-title" className="name work-together-section-title">What are you<br />working on?</h2>
              <p className="work-together-contact-intro">A few lines are enough to begin. Tell me about the project, what needs to change and what you already have. Include a link, a reference or a rough timeline if you have one.</p>
            </div>
            <div className="work-together-contact-details">
              <div className="work-together-contact-line">
                <span className="lbl">Email Joshua</span>
                <a href={PROJECT_CONTACT_HREF} className="work-together-email">{EMAIL}<span aria-hidden="true">↗</span></a>
              </div>
              <div className="work-together-contact-line">
                <span className="lbl">Call</span>
                <a href={PHONE_HREF} className="work-together-phone">{PHONE_DISPLAY}<span aria-hidden="true">↗</span></a>
              </div>
              <a href={PROJECT_CONTACT_HREF} className="work-together-button">Let’s discuss a project <span aria-hidden="true">↗</span></a>
              <Link to="/about" className="text-link work-together-about-link">More about Joshua <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
};
