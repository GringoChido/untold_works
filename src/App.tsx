import { useLayoutEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { PageFillProvider } from './components/PageFill';
import { About } from './pages/About';
import { Category } from './pages/Category';
import { Home } from './pages/Home';
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

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ block: 'start' });
        return;
      }
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
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageFillProvider>
  </BrowserRouter>
);
