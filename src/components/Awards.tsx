import { Award, Target, Users, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const awards = [
  {
    icon: Award,
    title: 'Architektenkammer NRW',
    description: 'Mitglied der Architektenkammer Nordrhein-Westfalen'
  },
  {
    icon: Target,
    title: 'Spezialisierung',
    description: 'Umbau, Modernisierungen und Denkmalschutz'
  },
  {
    icon: Users,
    title: 'Bauherren-Schutzbund',
    description: 'Bauherrenberater des Bauherren-Schutzbund e.V. Berlin'
  },
  {
    icon: Shield,
    title: 'Energieberatung',
    description: 'Zertifizierte Energieberatung (DENA, BAFA)'
  }
];

export default function Awards() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section className="py-24 bg-gradient-to-b from-th-lighter to-th-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl text-th-heading mb-6 ${ts.sectionHeading}`}>
            Qualifikationen
          </h2>
          <div className={`${ts.divider} mx-auto`} />
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="text-center group"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`${ts.iconBox} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-th-heading mb-3">
                  {award.title}
                </h3>
                <p className="text-th-body text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
