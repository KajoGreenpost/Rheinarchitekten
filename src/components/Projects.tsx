import { projectCategories } from '../data';
import { Home, Building, Wrench, Briefcase, Trophy } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const categoryIcons: Record<string, any> = {
  'aktuelle-projekte': Building,
  'einfamilienhaeuser': Home,
  'wohnungsbau': Building,
  'modernisierungen': Wrench,
  'gewerbebau': Briefcase,
  'wettbewerbe': Trophy
};

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section id="projects" className="py-24 bg-th-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl text-th-heading mb-6 ${ts.sectionHeading}`}>
            Projekte
          </h2>
          <div className={`${ts.divider} mx-auto mb-8`} />
          <p className="text-lg text-th-body max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie unsere vielfältigen Projekte im Bereich Wohn- und Gewerbebau,
            Modernisierung und ausgezeichnete Wettbewerbsbeiträge.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {projectCategories.map((category, index) => {
            const Icon = categoryIcons[category.id];
            return (
              <div
                key={category.id}
                className={`group relative overflow-hidden bg-th-lighter aspect-[4/3] hover:shadow-xl transition-all duration-500 ${ts.projectCard}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {category.image && (
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className={`absolute inset-0 ${ts.projectOverlay} transition-all duration-500`} />

                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <Icon className="w-12 h-12 text-th-on-dark/80 mb-4" strokeWidth={1.5} />
                    <h3 className="text-2xl font-light text-th-on-dark mb-3 tracking-wide">
                      {category.title}
                    </h3>
                    <p className="text-th-on-dark/70 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-0.5 w-12 bg-th-on-dark/50" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
