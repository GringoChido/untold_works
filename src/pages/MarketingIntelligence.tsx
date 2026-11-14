import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { DataBoard } from '../components/DataBoard';
import { MarketDecision } from '../components/MarketDecision';
import { WhatsNext } from '../components/WhatsNext';
import { usePageMeta } from '../hooks/usePageMeta';
import metadata from '../data/seo.json';
import './Practice.css';
import './DataStudio.css';

const promises = [
  ['One view', 'The store, the ads, the email, the social accounts, the site and the sales team, each number against its target.'],
  ['It tells you what to do', 'Every recommendation names the decision, who owns it and how sure the numbers are.'],
  ['A person decides', 'AI does the reading. Your team makes the call, today or at the monthly review.'],
] as const;

export function MarketingIntelligence() {
  usePageMeta({ ...metadata['/data-studio'], path: '/data-studio' });
  return <Layout><Header crumbs={[{label:'Data Studio'}]} /><main id="main" className="practice ds-page">
    <section className="intelligence-lead"><p className="folio">Data Studio</p>
      <h1>One<br /><em>dashboard.</em></h1>
      <p>Everything your marketing does and everything your business sells, in one place. AI reads it every day and tells you what to change. Every client gets their own Data Studio, built around their business.</p></section>

    <section className="ds-block ds-board" aria-labelledby="ds-frames-title"><p className="folio">When you look</p>
      <h2 id="ds-frames-title">Adjust on the fly. Or weekly, monthly, yearly.</h2>
      <DataBoard /></section>

    <section className="ds-block" aria-labelledby="ds-promise-title"><p className="folio">What it does</p>
      <h2 id="ds-promise-title">It reads every number, so your team can spend its time on the decision.</h2>
      <div className="ds-three">{promises.map(([name, text]) => <div key={name}><b>{name}</b><p>{text}</p></div>)}</div></section>

    <section id="compare" className="practice-pair ds-try"><div><p className="folio">Try it</p><h2>Which market earns the next dollar?</h2>
      <p>A booking business is running the same ad in two markets. One generates more interest. The other fills more appointments. Look at the evidence and choose a budget test. This is the kind of call Data Studio sets up for you.</p>
      <details><summary>Where the numbers come from</summary><p>All figures in the exercise are invented. An inquiry is a new request from this campaign. A booking is a confirmed appointment from one of those requests. Cost per result divides the week’s media spend by the selected outcome.</p></details></div>
      <MarketDecision /></section>

    <section className="practice-pair"><div><p className="folio">What you get</p><h2>From a signal to a decision.</h2>
      <ul className="ds-get"><li>Data Studio dashboard</li><li>Weekly and monthly reports</li></ul></div>
      <div><p>If people watch the film but leave the page, we look at the creative and the experience together. If inquiries sit unanswered, we trace the handoff. We can change the work, assign an owner and check the next comparable period.</p>
      <p className="credits">It connects to the tools you already run: Google Analytics 4 for site activity · Klaviyo for email · Shopify for sales · GoHighLevel for follow-up</p>
      <Link className="proof" to="/work/home-field">See a campaign connected to sales follow-up ↗</Link></div></section>
    <WhatsNext />
  </main><Footer /></Layout>;
}
