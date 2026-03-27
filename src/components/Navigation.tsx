import { useState, useEffect } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLayout, LAYOUT_NAMES } from '../contexts/LayoutContext';
import { themes } from '../themes';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();
  const { layout, cycleLayout } = useLayout();
  const ts = themes[theme];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Start' },
    { id: 'about', label: 'Büroprofil' },
    { id: 'services', label: 'Service' },
    { id: 'projects', label: 'Projekte' },
    { id: 'contact', label: 'Kontakt' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const textColor = isScrolled ? 'text-th-heading' : 'text-th-on-dark';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `bg-th-light/95 backdrop-blur-sm ${ts.navScrolled}` : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Left: Layout + Theme switchers */}
            <div className="flex items-center gap-1">
              <button
                onClick={cycleLayout}
                title="Design wechseln"
                className={`flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase px-2 py-1.5 rounded hover:bg-white/10 transition-colors ${textColor} opacity-60 hover:opacity-100`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-th-accent flex-shrink-0" />
                <span className="hidden sm:inline">{LAYOUT_NAMES[layout]}</span>
              </button>
              <button
                onClick={cycleTheme}
                title="Farbschema wechseln"
                className={`p-1.5 rounded hover:bg-white/10 transition-colors ${textColor} opacity-50 hover:opacity-90`}
              >
                <Palette size={13} />
              </button>
            </div>

            {/* Center: Logo */}
            <button
              onClick={() => onNavigate('home')}
              className={`text-lg sm:text-2xl font-light tracking-wider hover:opacity-70 transition-opacity ${textColor}`}
            >
              RHEINARCHITEKTEN
            </button>

            {/* Right: Nav items / Hamburger */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity ${textColor}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${textColor}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-th-light">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-2xl font-light text-th-heading hover:opacity-70 transition-opacity"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-th-border">
              <button onClick={cycleLayout} className="text-xs tracking-widest text-th-muted hover:text-th-heading transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-th-accent" />
                {LAYOUT_NAMES[layout]}
              </button>
              <button onClick={cycleTheme} className="text-xs tracking-widest text-th-muted hover:text-th-heading transition-colors flex items-center gap-2">
                <Palette size={12} />
                Farbe
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
