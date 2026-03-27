import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <footer className={`bg-th-darker text-th-on-dark/60 py-8 ${ts.footerTop}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Rheinarchitekten. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-8 text-sm">
            <button
              onClick={() => onNavigate('impressum')}
              className="hover:text-th-on-dark transition-colors"
            >
              Impressum
            </button>
            <button
              onClick={() => onNavigate('datenschutz')}
              className="hover:text-th-on-dark transition-colors"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
