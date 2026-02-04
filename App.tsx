import React, { useState, createContext, useContext, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkshopsPage from './pages/Workshops';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

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

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  const t = (obj: { en: string; es: string }) => obj[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col selection:bg-untold-orange selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Architecture Order: Home, Portfolio, About, Workshop, Contact */}
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/workshops" element={<WorkshopsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;