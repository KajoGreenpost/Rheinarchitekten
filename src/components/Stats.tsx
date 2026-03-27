import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 28, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 200, suffix: '+', label: 'Abgeschlossene Projekte' },
  { value: 4, suffix: '', label: 'Mitarbeiter' },
  { value: 3, suffix: '', label: 'CAD-Arbeitsplätze' }
];

function AnimatedCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className="text-5xl md:text-6xl font-light text-th-on-dark">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-th-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              <p className="text-th-on-dark/60 mt-3 text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
