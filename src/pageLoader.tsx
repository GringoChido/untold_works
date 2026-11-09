import { useEffect, useState, type ComponentType } from 'react';

// Load the first route before hydration, so its saved HTML stays intact. Later
// navigation loads only the requested page without downloading the whole portfolio.
const loaders = {
  Home: () => import('./pages/Home').then((m) => m.Home),
  About: () => import('./pages/About').then((m) => m.About),
  Category: () => import('./pages/Category').then((m) => m.Category),
  ArtOfPrompting: () => import('./pages/ArtOfPrompting').then((m) => m.ArtOfPrompting),
  WorkTogether: () => import('./pages/WorkTogether').then((m) => m.WorkTogether),
  ForYourBusiness: () => import('./pages/ForYourBusiness').then((m) => m.ForYourBusiness),
  NotFound: () => import('./pages/NotFound').then((m) => m.NotFound),
  ElenaPinderhughes: () => import('./pages/work/ElenaPinderhughes').then((m) => m.ElenaPinderhughes),
  EngineRoom: () => import('./pages/work/EngineRoom').then((m) => m.EngineRoom),
  GlasperBlueNote: () => import('./pages/work/GlasperBlueNote').then((m) => m.GlasperBlueNote),
  LalahHathaway: () => import('./pages/work/LalahHathaway').then((m) => m.LalahHathaway),
  LandingPages: () => import('./pages/work/LandingPages').then((m) => m.LandingPages),
  Noxguard: () => import('./pages/work/Noxguard').then((m) => m.Noxguard),
  OtherProjects: () => import('./pages/work/OtherProjects').then((m) => m.OtherProjects),
  ProjectDetail: () => import('./pages/work/ProjectDetail').then((m) => m.ProjectDetail),
  BilliardFactoryEngagement: () => import('./pages/work/BilliardFactoryEngagement').then((m) => m.BilliardFactoryEngagement),
  Savor: () => import('./pages/work/Savor').then((m) => m.Savor),
};
type PageName = keyof typeof loaders;
type PageProps = { slug?: string };
const loaded = new Map<PageName, ComponentType<PageProps>>();
const pending = new Map<PageName, Promise<void>>();

export const loadPage = (name: PageName) => {
  if (!pending.has(name)) {
    pending.set(name, loaders[name]().then((component) => { loaded.set(name, component as ComponentType<PageProps>); }).catch((error) => { pending.delete(name); throw error; }));
  }
  return pending.get(name)!;
};

const routePages: Record<string, PageName> = {
  '/': 'Home', '/about': 'About', '/art-of-prompting': 'ArtOfPrompting',
  '/work-together': 'WorkTogether', '/for-your-business': 'ForYourBusiness',
  '/brand-and-product': 'Category', '/platforms': 'Category', '/websites': 'Category', '/campaigns': 'Category',
  '/work/elena-pinderhughes': 'ElenaPinderhughes', '/work/engine-room': 'EngineRoom',
  '/work/robert-glasper-blue-note': 'GlasperBlueNote', '/work/lalah-hathaway': 'LalahHathaway',
  '/work/landing-pages': 'LandingPages', '/work/noxguard': 'Noxguard', '/work/other-projects': 'OtherProjects',
  '/work/billiard-factory-and-c-l-bailey': 'BilliardFactoryEngagement', '/work/savor': 'Savor',
};
export const preloadRoute = (path: string) => loadPage(routePages[path] ?? (path.startsWith('/work/') ? 'ProjectDetail' : 'NotFound'));

export const pageComponent = (name: PageName) => function LoadedPage(props: PageProps) {
  const [, render] = useState(0);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let active = true;
    void loadPage(name).then(() => { if (active) render((value) => value + 1); }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, []);
  const Page = loaded.get(name);
  if (Page) return <Page {...props} />;
  return <main id="main" className="p-10" aria-live="polite">{failed ? <><p>The page could not load.</p><a href={window.location.href}>Reload this page</a></> : <p>Loading page…</p>}</main>;
};
