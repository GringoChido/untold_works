import { useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PageFillProvider } from './components/PageFill';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
import { ArtOfPrompting } from './pages/ArtOfPrompting';
import { ElenaPinderhughes } from './pages/work/ElenaPinderhughes';
import { EngineRoom } from './pages/work/EngineRoom';
import { GlasperBlueNote } from './pages/work/GlasperBlueNote';
import { LalahHathaway } from './pages/work/LalahHathaway';
import { LandingPages } from './pages/work/LandingPages';
import { Noxguard } from './pages/work/Noxguard';
import { OtherProjects } from './pages/work/OtherProjects';
import { ProjectDetail } from './pages/work/ProjectDetail';
import { BilliardFactoryEngagement } from './pages/work/BilliardFactoryEngagement';
import { Savor } from './pages/work/Savor';

const LegacyCreativeCollection = () => {
  const { hash, search } = useLocation();
  return <Navigate to={{ pathname: '/art-of-prompting', hash, search }} replace />;
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    // Keep the browser's saved scroll position from overriding deep links on refresh.
    window.history.scrollRestoration = 'manual';
    if (hash) {
      let cancelled = false;
      const scrollToTarget = () => {
        if (cancelled) return;
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
      };
      scrollToTarget();
      const frame = window.requestAnimationFrame(scrollToTarget);
      const settle = window.setTimeout(scrollToTarget, 300);
      const stop = () => { cancelled = true; };
      window.addEventListener('wheel', stop, { once: true, passive: true });
      window.addEventListener('touchstart', stop, { once: true, passive: true });
      window.addEventListener('keydown', stop, { once: true });
      return () => {
        cancelled = true;
        window.cancelAnimationFrame(frame);
        window.clearTimeout(settle);
        window.removeEventListener('wheel', stop);
        window.removeEventListener('touchstart', stop);
        window.removeEventListener('keydown', stop);
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

export const App = () => (
  <BrowserRouter>
    <PageFillProvider>
      <ScrollManager />
      <a
        href="#main"
        className="lbl sr-only bg-ink text-vermilion focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:px-4 focus:py-3"
      >
        Skip to content
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand-and-product" element={<Category slug="brand-and-product" />} />
        <Route path="/platforms" element={<Category slug="platforms" />} />
        <Route path="/websites" element={<Category slug="websites" />} />
        <Route path="/campaigns" element={<Category slug="campaigns" />} />
        <Route path="/work/landing-pages" element={<LandingPages />} />
        <Route path="/work/engine-room" element={<EngineRoom />} />
        <Route path="/work/noxguard" element={<Noxguard />} />
        <Route path="/work/billiard-factory-and-c-l-bailey" element={<BilliardFactoryEngagement />} />
        <Route path="/work/robert-glasper-blue-note" element={<GlasperBlueNote />} />
        <Route path="/work/other-projects" element={<OtherProjects />} />
        <Route path="/work/savor" element={<Savor />} />
        <Route path="/work/lalah-hathaway" element={<LalahHathaway />} />
        <Route path="/work/elena-pinderhughes" element={<ElenaPinderhughes />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
        <Route path="/art-of-prompting" element={<ArtOfPrompting />} />
        <Route path="/photography-and-video" element={<LegacyCreativeCollection />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageFillProvider>
  </BrowserRouter>
);
