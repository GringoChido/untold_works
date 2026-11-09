import { Link, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { usePageMeta } from '../hooks/usePageMeta';

export const NotFound = () => {
  const { pathname } = useLocation();
  usePageMeta({ title: 'Page not found | Untold.works', description: 'This page could not be found. Explore my work or get in touch.', path: pathname, noindex: true });
  return <Layout><Header /><main id="main" className="flex grow flex-col items-start gap-7 py-24"><p className="lbl">404 / Page not found</p><h1 className="display text-[clamp(48px,8vw,100px)]">That page isn’t here.</h1><p>The address may have changed. Explore the work or get in touch.</p><Link to="/" className="text-link">Back to the homepage ↗</Link><Link to="/work-together" className="text-link">Get in touch ↗</Link></main><Footer /></Layout>;
};
