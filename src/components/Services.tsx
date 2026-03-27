import { services } from '../data';
import { Building2, TrendingUp, Network, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../themes';

const icons = [Building2, TrendingUp, Network, Award];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const ts = themes[theme];

  return (
    <section id="services" className="py-24 bg-th-lighter">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl text-th-heading mb-6 ${ts.sectionHeading}`}>
            Service
          </h2>
          <div className={`${ts.divider} mx-auto`} />
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className={ts.serviceCard}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-12 h-12 text-th-accent mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-th-heading mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-th-body leading-relaxed flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-th-muted rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
