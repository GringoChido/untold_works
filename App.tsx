import React, { useState, createContext, useContext, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import ExitIntentPopup from './components/ExitIntentPopup';
import Home from './pages/Home';

// Lazy-loaded pages
const WorkshopsPage = lazy(() => import('./pages/Workshops'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));
const StereoPage = lazy(() => import('./pages/Stereo'));
const SlidesPage = lazy(() => import('./pages/Slides'));
const Solutions = lazy(() => import('./pages/Solutions'));
const ProfessionalServices = lazy(() => import('./pages/solutions/ProfessionalServices'));
const SmallBusiness = lazy(() => import('./pages/solutions/SmallBusiness'));
const Enterprise = lazy(() => import('./pages/solutions/Enterprise'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Privacy = lazy(() => import('./pages/Privacy'));
const SanMiguelDeAllende = lazy(() => import('./pages/locations/SanMiguelDeAllende'));
const Queretaro = lazy(() => import('./pages/locations/Queretaro'));
const MexicoCity = lazy(() => import('./pages/locations/MexicoCity'));
const UnitedStates = lazy(() => import('./pages/locations/UnitedStates'));
const Mexico = lazy(() => import('./pages/locations/Mexico'));
const NetworkSystems = lazy(() => import('./pages/NetworkSystems'));
const SeoAeo = lazy(() => import('./pages/SeoAeo'));
const SocialMedia = lazy(() => import('./pages/SocialMedia'));
const Ads = lazy(() => import('./pages/Ads'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Websites = lazy(() => import('./pages/Websites'));
const Copywriting = lazy(() => import('./pages/Copywriting'));
const AiContent = lazy(() => import('./pages/AiContent'));
const SalesEnablement = lazy(() => import('./pages/SalesEnablement'));
const WhatsApp = lazy(() => import('./pages/WhatsApp'));
const MobileApps = lazy(() => import('./pages/MobileApps'));
const Hosting = lazy(() => import('./pages/Hosting'));
const ReviewReputation = lazy(() => import('./pages/ReviewReputation'));
const Savings = lazy(() => import('./pages/Savings'));

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (obj: { en: string; es: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};

// Global scroll to top rule
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading fallback
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-untold-beige">
    <div className="w-3 h-3 rounded-full bg-untold-orange animate-pulse"></div>
  </div>
);

// Layout wrapper — hides Navbar/Footer on standalone pages like /analog
const AppLayout: React.FC = () => {
  const { pathname } = useLocation();
  const isStandalone = pathname === '/analog' || pathname === '/slides';

  return (
    <div className="min-h-screen flex flex-col selection:bg-untold-orange selection:text-white overflow-x-hidden">
      {!isStandalone && <StickyBar />}
      {!isStandalone && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/network-systems" element={<NetworkSystems />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/professional-services" element={<ProfessionalServices />} />
            <Route path="/solutions/small-business" element={<SmallBusiness />} />
            <Route path="/solutions/enterprise" element={<Enterprise />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/category/:category" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/san-miguel-de-allende" element={<SanMiguelDeAllende />} />
            <Route path="/queretaro" element={<Queretaro />} />
            <Route path="/mexico-city" element={<MexicoCity />} />
            <Route path="/united-states" element={<UnitedStates />} />
            <Route path="/mexico" element={<Mexico />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/seo-aeo" element={<SeoAeo />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/ads" element={<Ads />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/copywriting" element={<Copywriting />} />
            <Route path="/ai-content" element={<AiContent />} />
            <Route path="/sales-enablement" element={<SalesEnablement />} />
            <Route path="/whatsapp" element={<WhatsApp />} />
            <Route path="/mobile-apps" element={<MobileApps />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/review-reputation" element={<ReviewReputation />} />
            <Route path="/digital-presence" element={<Navigate to="/solutions" replace />} />
            <Route path="/business-operations" element={<Navigate to="/solutions" replace />} />
            <Route path="/infrastructure" element={<Navigate to="/solutions" replace />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/analog" element={<StereoPage />} />
            <Route path="/slides" element={<SlidesPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isStandalone && <Footer />}
      {!isStandalone && <ExitIntentPopup />}
    </div>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'es') return 'es';
      const stored = localStorage.getItem('untold-lang');
      if (stored === 'es') return 'es';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('untold-lang', lang);
  }, [lang]);

  const t = (obj: { en: string; es: string }) => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
