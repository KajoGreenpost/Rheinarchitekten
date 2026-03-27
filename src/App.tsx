import { useState } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Projects from './components/Projects';
import Model3D from './components/Model3D';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function AppContent() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const { theme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'impressum') {
      setShowImpressum(true);
      return;
    }
    if (sectionId === 'datenschutz') {
      setShowDatenschutz(true);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" data-theme={theme}>
      <Navigation onNavigate={scrollToSection} />
      <Hero onNavigate={scrollToSection} />
      <About />
      <Stats />
      <Services />
      <Projects />
      <Model3D />
      <Awards />
      <Contact />
      <Footer onNavigate={scrollToSection} />
      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
