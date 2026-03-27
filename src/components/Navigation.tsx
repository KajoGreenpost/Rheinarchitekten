import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();
  const ts = themes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `bg-th-light/95 backdrop-blur-sm ${ts.navScrolled}`
            : 'bg-transparent'
        }`}
      >
        <button
          onClick={cycleTheme}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 opacity-0 cursor-default z-10"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => onNavigate('home')}
              className="text-2xl font-light tracking-wider hover:opacity-70 transition-opacity"
            >
              <span className={isScrolled ? 'text-th-heading' : 'text-th-on-dark'}>
                RHEINARCHITEKTEN
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-light tracking-wide hover:opacity-70 transition-opacity ${
                    isScrolled ? 'text-th-heading' : 'text-th-on-dark'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden ${isScrolled ? 'text-th-heading' : 'text-th-on-dark'}`}
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
          </div>
        </div>
      )}
    </>
  );
}
