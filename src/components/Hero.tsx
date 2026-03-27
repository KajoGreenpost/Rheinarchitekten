import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section
      id="home"
      className={`relative h-screen flex items-center justify-center bg-gradient-to-br from-th-hero-from via-th-hero-via to-th-hero-to ${
        ts.heroAnimated ? 'animated-gradient-bg' : ''
      }`}
    >
      <div className="absolute inset-0 bg-black/20" />
      {ts.heroOverlay && <div className={`absolute inset-0 ${ts.heroOverlay}`} />}

      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto ${ts.heroReflection ? 'hero-reflection' : ''}`}>
        <h1 className={`text-5xl md:text-7xl lg:text-8xl text-th-on-dark mb-6 ${ts.heroHeading}`}>
          RHEINARCHITEKTEN
        </h1>
        <p className="text-xl md:text-2xl text-th-on-dark/90 font-light mb-4 tracking-wide">
          Architektur mit Vision und Präzision
        </p>
        <p className="text-lg md:text-xl text-th-on-dark/80 font-light mb-12">
          Köln seit 1996
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className={`px-8 py-4 bg-th-btn-bg text-th-btn-text text-sm tracking-wider font-medium hover:opacity-90 transition-all duration-300 ${ts.buttonRadius}`}
        >
          KONTAKT AUFNEHMEN
        </button>
      </div>

      {ts.heroBottomLine && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-th-accent/40 to-transparent" />
      )}

      <button
        onClick={() => onNavigate('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-th-on-dark/70 hover:text-th-on-dark transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
