import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { usePageMeta } from '../hooks/usePageMeta';
import metadata from '../data/seo.json';
import './Practice.css';

const collections = [
  { path: '/brand-and-product', title: 'Brand', image: 'noxguard-truck-800.webp', alt: 'Noxguard branding on a fleet vehicle' },
  { path: '/websites', title: 'Website and store', image: 'lalah-made-in-chicago-live-800.webp', alt: 'Lalah Hathaway’s interactive listening room' },
  { path: '/campaigns', title: 'Campaigns, photo and film', image: 'home-field-shot-800.webp', alt: 'A scene from the Home Field campaign film' },
  { path: '/platforms', title: 'Sales tools, data and AI', image: 'clbailey-concierge-800.webp', alt: 'The C.L. Bailey website with a showroom manager assistant answering a shopper' },
];
export const Work = () => {
  usePageMeta({ ...metadata['/work'], path:'/work' });
  return <Layout><Header crumbs={[{label:'Work'}]} /><main id="main" className="practice">
    <header className="intelligence-lead"><p className="folio">Untold.works / Work</p><h1>The work, by <em>what you get.</em></h1>
    <p>Pick what you need and see where we have made it for a client.</p></header>
    <div className="collection-grid">{collections.map(c => <Link key={c.path} to={c.path}><img loading="lazy" src={'/images/'+c.image} alt={c.alt} /><h2>{c.title} ↗</h2></Link>)}</div>
    <nav id="corporate-work" className="work-directory" aria-label="Featured engagements"><div><Link to="/work/billiard-factory-and-c-l-bailey">Billiard Factory &amp; C.L. Bailey ↗</Link><Link to="/work/lalah-hathaway">Lalah Hathaway ↗</Link><Link to="/work/coca-cola-femsa">Coca-Cola FEMSA ↗</Link><Link to="/work/tekniplex">TekniPlex ↗</Link><Link to="/work/other-projects">More projects ↗</Link></div></nav>
  </main><Footer /></Layout>;
};
