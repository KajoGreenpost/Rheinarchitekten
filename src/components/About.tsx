import { partners, officeInfo } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section id="about" className="py-24 bg-th-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl text-th-heading mb-6 ${ts.sectionHeading}`}>
            Büroprofil
          </h2>
          <div className={`${ts.divider} mx-auto mb-8`} />
          <p className="text-lg text-th-body max-w-3xl mx-auto leading-relaxed">
            {officeInfo.team.employees} Mitarbeiter, {officeInfo.team.cadWorkstations} CAD-Arbeitsplätze, {officeInfo.team.avaWorkstations} AVA-Arbeitsplätze
          </p>
          <p className="text-base text-th-muted mt-4">
            Planung / Ausschreibung / Vergabe / Bauleitung
          </p>
          <p className="text-base text-th-heading font-medium mt-4">
            Spezialisierung: {officeInfo.specializations.join(', ')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 lg:gap-20 mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {partners.map((partner, index) => {
            const photoSrc = index === 0 ? `${import.meta.env.BASE_URL}markus.png` : `${import.meta.env.BASE_URL}rainer.png`;
            return (
              <div
                key={index}
                className={`group ${ts.partnerCard}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`${ts.photoContainer} aspect-square mb-6 flex items-center justify-center overflow-hidden`}>
                  <img
                    src={photoSrc}
                    alt={partner.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      ts.photoReflection ? 'photo-reflection' : ''
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-light text-th-heading mb-3">
                  {partner.title} {partner.name}
                </h3>
                <div className="space-y-2 text-th-body">
                  <p>Geboren: {partner.birthYear} in {partner.birthPlace}</p>
                  {partner.education.map((edu, i) => (
                    <p key={i}>{edu}</p>
                  ))}
                  <p className="font-medium text-th-heading mt-4">
                    Büro Rheinarchitekten seit {partner.foundingYear}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-lg text-th-body max-w-4xl mx-auto leading-relaxed">
            Wir übernehmen alle Leistungen zur Realisierung Ihres Projekts. Beratung bei der
            Grundstücksauswahl, Klärung zur Machbarkeit im städtebaulichen Kontext, den Entwurf,
            den Bauantrag, die Ausschreibung und die örtliche Bauleitung.
          </p>
        </div>
      </div>
    </section>
  );
}
