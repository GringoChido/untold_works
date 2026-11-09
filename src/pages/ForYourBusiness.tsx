import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ConsultingOpening } from '../components/ConsultingOpening';
import { Img } from '../components/Img';
import { LabelRow } from '../components/LabelRow';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, PROJECT_CONTACT_HREF } from '../site';
import './ForYourBusiness.css';

const improvements = [
  {
    number: '01',
    title: 'A website that makes sense again.',
    body: 'Old pages, missing information and an unclear next step can make a good business hard to understand. I help sort the content, simplify the structure and bring the site into line with what you offer today.',
    examples: ['Clear pages and navigation', 'Current services, hours and contact details', 'Useful inquiry or purchase paths', 'Layouts that work on a phone'],
  },
  {
    number: '02',
    title: 'Ready for search and AI answers.',
    body: 'Search engine optimization (SEO) helps search engines find and understand your pages. Answer engine optimization (AEO) focuses on making the information useful when people ask questions in AI search. Both start with clear services, accurate product details, useful answers and pages that search tools can access. I review those foundations and connect the information across your site.',
    examples: ['Check that search tools can read your pages', 'Clear service and product information', 'Useful page titles and descriptions', 'Current business and contact details'],
    source: true,
  },
  {
    number: '03',
    title: 'More from your photos and video.',
    body: 'I can rework existing photography and footage, create AI-assisted lifestyle images from actual product references, and turn approved material into useful versions for your site and social channels. That can reduce the cost and coordination of repeated shoots, with the production budget agreed for your project.',
    examples: ['Review and organize existing assets', 'Product-led AI image studies', 'Photo and video edits', 'Crops, shorter cuts and reusable versions'],
  },
  {
    number: '04',
    title: 'Less platform clutter.',
    body: 'A new project shouldn’t automatically mean another tool to manage. I review the setup you already use, keep useful services and consolidate overlap where possible. New tools come in when the work actually needs them.',
    examples: ['Review current tools and subscriptions', 'Identify duplicated services', 'Simplify everyday updates', 'Document hosting and other ongoing costs'],
  },
] as const;

const process = [
  { number: '01', title: 'Look at what’s there.', body: 'We review your current site, content, photos, video and tools. You tell me what is out of date and what customers need to do.' },
  { number: '02', title: 'Choose what matters.', body: 'We agree on priorities, scope and budget. The proposal names any continuing hosting, domain or third-party costs before work begins.' },
  { number: '03', title: 'Build. Review. Refine.', body: 'I organize the content, build the agreed changes and develop the assets. You review the pages, business information and creative before launch.' },
  { number: '04', title: 'Launch and hand over.', body: 'We check the site and its key actions, then publish. You get the access, assets and practical guidance needed to keep it current.' },
] as const;

const questions = [
  { question: 'Will my business appear in AI answers?', answer: 'The work helps search tools access and understand your website through clear, current information and sound SEO foundations. I also check any settings that control whether the site can appear in AI search. Search engines decide what to show; rankings, indexing and AI mentions cannot be guaranteed.' },
  { question: 'Can we improve the website I already have?', answer: 'Often, yes. I start with the current site and the services you already use. The review helps us decide whether a focused cleanup, a redesign or a rebuild is the useful next step.' },
  { question: 'What will I still need to pay for?', answer: 'That depends on your setup. Hosting, your domain and services such as commerce, email or booking may still have ongoing costs. I identify those in the proposal, along with any tools needed to create or maintain the work.' },
  { question: 'Can AI replace a photo or video shoot?', answer: 'For some assets, it can reduce the need for another shoot. Real references and a careful review matter, especially for product details. We choose the approach for the job; production costs vary with the scope.' },
] as const;

export const ForYourBusiness = () => {
  usePageMeta({
    title: 'Creative & AI Consulting | Untold.works',
    description: 'Creative direction, digital experiences and practical AI for your business, from the first working idea through launch and ongoing improvements.',
    path: '/for-your-business',
  });

  return (
    <Layout className="business-page consulting-page">
      <Header crumbs={[{ label: 'For your business' }]} />
      <main id="main" className="business-main">
        <ConsultingOpening />
        <section id="business-contact" className="business-section business-contact" aria-labelledby="business-contact-title">
          <LabelRow left="Start a conversation" right="Joshua Semolik / Untold.works" />
          <div className="business-contact-grid">
            <div>
              <h2 id="business-contact-title" className="name">Where could<br />we start?</h2>
              <p>Bring the idea you’re trying to launch, or show me something your team does the hard way. We’ll look at what you want to change, what you have to work with, and what’s worth building first.</p>
              <p>Once we agree on the opportunity and budget, I can build a first version for you to react to. I can lead the work, build alongside your team, and help get it live and keep it current.</p>
              <nav className="business-credentials" aria-label="More about my work">
                <Link to="/about" className="text-link">About me <span aria-hidden="true">↗</span></Link>
                <Link to="/work-together" className="text-link">Discuss a leadership role <span aria-hidden="true">↗</span></Link>
              </nav>
            </div>
            <div className="business-contact-details">
              <div className="business-contact-line">
                <span className="lbl">Email me</span>
                <a href={PROJECT_CONTACT_HREF} className="business-email">{EMAIL}<span aria-hidden="true">↗</span></a>
              </div>
              <div className="business-contact-line">
                <span className="lbl">Call</span>
                <a href={PHONE_HREF} className="business-phone">{PHONE_DISPLAY}<span aria-hidden="true">↗</span></a>
              </div>
              <a href={PROJECT_CONTACT_HREF} className="business-button">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="business-section business-proof" aria-labelledby="business-proof-title">
          <LabelRow left="Selected work" right="Websites · Brand · Content" />
          <div className="business-section-heading">
            <h2 id="business-proof-title" className="name">The work, in practice.</h2>
            <p>A café that welcomes visitors. A technical product people need to understand. Different businesses, with a clear story and a useful destination.</p>
          </div>
          <div className="business-case-grid">
            <article className="business-case" aria-labelledby="business-kibok-title">
              <Link to="/work/kibok-coffee" className="business-case-image-link" aria-label="Explore the Ki’bok Coffee website project">
                <Img src="kibok-home.jpg" alt="Ki’bok Coffee’s website home page, with a coffee-making scene and clear links to the menu and café location" sizes="(max-width: 799px) 100vw, 50vw" eager className="business-case-image" />
              </Link>
              <div className="business-case-caption">
                <p className="lbl">Ki’bok Coffee / Café website</p>
                <h3 id="business-kibok-title" className="name">A place to plan a visit.</h3>
                <p>A website brings the café’s story, menu and location into one experience, with English, Spanish and Japanese versions.</p>
                <Link to="/work/kibok-coffee" className="text-link">Explore Ki’bok Coffee <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className="business-case" aria-labelledby="business-noxguard-title">
              <Link to="/work/noxguard" className="business-case-image-link" aria-label="Explore the Noxguard brand, website and marketing project">
                <Img src="noxguard-truck.jpg" alt="Fleet-livery concept showing the Noxguard brand on a diesel exhaust fluid truck and trailer" sizes="(max-width: 799px) 100vw, 50vw" eager className="business-case-image business-case-image--contain" />
              </Link>
              <div className="business-case-caption">
                <p className="lbl">Noxguard / Brand, website &amp; marketing</p>
                <h3 id="business-noxguard-title" className="name">One business, connected.</h3>
                <p>I delivered a rebrand, website, photo and video campaign, and marketing process work through Untold.works. Shown: a fleet-livery concept.</p>
                <Link to="/work/noxguard" className="text-link">Explore Noxguard <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section id="what-can-change" className="business-section business-improvements" aria-labelledby="business-improvements-title">
          <LabelRow left="What we can improve" right="Start with what you have" />
          <div className="business-section-heading">
            <h2 id="business-improvements-title" className="name">Make it clearer.<br />Make it easier to use.</h2>
            <p>We choose the changes that matter to your business. Depending on the project, the work can include:</p>
          </div>
          <div className="business-improvement-grid">
            {improvements.map((item) => (
              <article key={item.number} className="business-improvement" aria-labelledby={`business-improvement-${item.number}`}>
                <span className="lbl business-number" aria-hidden="true">{item.number}</span>
                <div>
                  <h3 id={`business-improvement-${item.number}`} className="name">{item.title}</h3>
                  <p>{item.body}</p>
                  <ul aria-label={`Possible work for ${item.title.replace(/\.$/, '').toLowerCase()}`}>
                    {item.examples.map((example) => <li key={example}>{example}</li>)}
                  </ul>
                  {'source' in item && <a href="https://developers.google.com/search/docs/appearance/ai-features" className="business-source-link" target="_blank" rel="noreferrer">Google’s guidance on AI search <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
          <div id="mobile-workflows" className="business-mobile-note">
            <h3 className="name">Can you run your business from your phone?</h3>
            <p>Often, the useful first step is a simple path for each inquiry: see the new lead, reply, book the next step and keep a record of what happened. If your work requires it, you can add invoicing and team handoffs. Check each action on the phone you actually use, keep customer communication in a business account and make sure someone else can take over when you are away. I start with your existing tools and only add a service when it solves a specific gap.</p>
          </div>
        </section>

        <section className="business-section business-asset-study" aria-labelledby="business-assets-title">
          <LabelRow left="A practical AI example" right="Product reference → Lifestyle image" />
          <div className="business-section-heading">
            <h2 id="business-assets-title" className="name">A new setting.<br />Built from a real reference.</h2>
            <p>This bar-cart study shows how a product reference can guide an AI-created lifestyle image. I direct the scene, review the product details and refine the result before putting it to use.</p>
          </div>
          <div className="business-study-grid">
            <figure>
              <div className="business-study-image-wrap"><Img src="prompting-bar-cart-reference.jpg" alt="Industrial Bar Cart product reference with three wood shelves, metal pipe uprights, bottle cradles and casters on a plain background" sizes="(max-width: 699px) 100vw, 50vw" className="business-study-image" /></div>
              <figcaption><span className="lbl">01 / Product reference</span><strong>Start with the product.</strong></figcaption>
            </figure>
            <figure>
              <div className="business-study-image-wrap"><Img src="prompting-bar-cart-lifestyle.jpg" alt="AI-created lifestyle study of the Industrial Bar Cart with bottles and glasses beside a black leather sofa in a marble and plaster living room" sizes="(max-width: 699px) 100vw, 50vw" className="business-study-image" /></div>
              <figcaption><span className="lbl">02 / AI lifestyle study</span><strong>Give it a place in the room.</strong></figcaption>
            </figure>
          </div>
          <div className="business-study-note">
            <p>One approved asset can lead to different crops, page placements and edits. Existing photos and footage can also be cleaned up, reorganized and adapted for another use.</p>
            <Link to="/art-of-prompting#process" className="text-link">See the creative process <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="business-section business-process" aria-labelledby="business-process-title">
          <LabelRow left="For website projects" right="A clear scope, then the work" />
          <div className="business-section-heading">
            <h2 id="business-process-title" className="name">Start with your site.<br />Agree on a useful next step.</h2>
            <p>You don’t need to arrive with a finished brief. Your current website and a few things you’d like to improve give us a place to begin.</p>
          </div>
          <ol className="business-process-list">
            {process.map((step) => (
              <li key={step.number}>
                <span className="lbl business-number" aria-hidden="true">{step.number}</span>
                <h3 className="name">{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="business-section business-questions" aria-labelledby="business-questions-title">
          <LabelRow left="A few questions" right="Before we begin" />
          <div className="business-questions-grid">
            <h2 id="business-questions-title" className="name">Good to know.</h2>
            <div className="business-questions-list">
              {questions.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}<span aria-hidden="true" className="business-question-toggle" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </Layout>
  );
};
