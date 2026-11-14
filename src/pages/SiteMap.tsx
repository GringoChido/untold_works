import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';
import metadata from '../data/seo.json';
import categories from '../data/projects.json';
import './Practice.css';

const mainPages = [
  ['/', 'Home', 'The offer, the process and the work behind it.'],
  ['/data-studio', 'Data Studio', 'One dashboard for your marketing, with a sample board and a budget decision to try.'],
  ['/work', 'Work', 'Campaigns, brand work, platforms and digital experiences.'],
  ['/about', 'About', 'Joshua’s background, project credits and working toolkit.'],
  ['/work-together', 'Work together', 'Ways to engage and how to start a conversation.'],
  ['/art-of-prompting', 'The art of prompting', 'A closer look at creative direction with AI.'],
] as const;
export const SiteMap = () => {
  usePageMeta({ ...metadata['/site-map'], path:'/site-map' });
  return <Layout><Header crumbs={[{label:'Site map'}]} /><main id="main" className="practice">
    <header className="intelligence-lead"><h1>Site map.</h1></header>
    <div className="map-list">{mainPages.map(([path,title,desc]) => <div key={path}><Link to={path}>{title} ↗</Link><p>{desc}</p></div>)}</div>
    <section className="map-collections"><h2>Work, by what you get</h2>
      <p><Link to="/work/billiard-factory-and-c-l-bailey">Billiard Factory &amp; C.L. Bailey</Link> · <Link to="/work/robert-glasper-blue-note">Robert Glasper &amp; Blue Note</Link> · <Link to="/work/other-projects">Other projects</Link></p>
      <div>{categories.map(c => <section key={c.slug}><h3><Link to={'/'+c.slug}>{c.name}</Link></h3>
        <ul>{[...c.music,...c.projects].map(p => <li key={p.projectPage}><Link to={p.projectPage}>{p.name}</Link></li>)}</ul></section>)}</div>
    </section></main><Footer /></Layout>;
};
