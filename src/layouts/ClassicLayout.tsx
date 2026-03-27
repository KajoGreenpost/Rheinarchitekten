import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, MapPin, Phone, Printer, Mail, Building2, TrendingUp, Network, Award, Home, Building, Wrench, Briefcase, Trophy, RotateCcw, ZoomIn, Move } from 'lucide-react';
import { partners, services, projectCategories, officeInfo } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLayout, LAYOUT_NAMES } from '../contexts/LayoutContext';
import Impressum from '../components/Impressum';
import Datenschutz from '../components/Datenschutz';

const serviceIcons = [Building2, TrendingUp, Network, Award];
const projectIcons: Record<string, any> = {
  'aktuelle-projekte': Building, 'einfamilienhaeuser': Home, 'wohnungsbau': Building,
  'modernisierungen': Wrench, 'gewerbebau': Briefcase, 'wettbewerbe': Trophy,
};

export default function ClassicLayout() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cycleLayout, layout } = useLayout();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'impressum') { setShowImpressum(true); return; }
    if (id === 'datenschutz') { setShowDatenschutz(true); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Start' }, { id: 'about', label: 'Büroprofil' },
    { id: 'services', label: 'Leistungen' }, { id: 'projects', label: 'Projekte' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={cycleLayout} className="text-xs tracking-[0.2em] text-white/50 hover:text-white/80 transition-colors flex items-center gap-2 min-w-[90px]">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              {LAYOUT_NAMES[layout]}
            </button>
            <button onClick={() => scrollTo('home')} className="text-xl font-light tracking-[0.25em] text-white hover:opacity-70 transition-opacity">
              RHEINARCHITEKTEN
            </button>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs tracking-widest text-white/80 hover:text-white transition-colors uppercase">
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-stone-950 flex flex-col items-center justify-center gap-8">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-2xl font-light text-white tracking-[0.2em] uppercase hover:opacity-70">{item.label}</button>
          ))}
        </div>
      )}

      {/* Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-stone-950">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}hero-architecture.webp`} alt="" className="w-full h-full object-cover opacity-25" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-stone-950/60" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-amber-400/80 text-xs tracking-[0.5em] uppercase mb-10">Dipl.-Ing. Architekten AKNW · Köln seit 1996</p>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight text-white tracking-tight leading-none mb-8">
            RHEIN<br />ARCHITEKTEN
          </h1>
          <div className="w-24 h-px bg-amber-500/60 mx-auto mb-8" />
          <p className="text-lg text-white/60 font-light tracking-widest mb-14">Architektur mit Vision und Präzision</p>
          <button onClick={() => scrollTo('contact')} className="px-10 py-4 border border-white/30 text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-stone-900 transition-all duration-300">
            KONTAKT AUFNEHMEN
          </button>
        </div>
        <button onClick={() => scrollTo('about')} className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce">
          <ChevronDown size={28} />
        </button>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ v: '28+', l: 'Jahre Erfahrung' }, { v: '200+', l: 'Abgeschlossene Projekte' }, { v: '4', l: 'Mitarbeiter' }, { v: '3', l: 'CAD-Arbeitsplätze' }].map((s, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-extralight text-white mb-2">{s.v}</div>
                <div className="text-xs tracking-[0.2em] text-white/40 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-4">Das Büro</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight mb-6">Büroprofil</h2>
            <div className="w-16 h-px bg-amber-500 mx-auto mb-6" />
            <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
              {officeInfo.team.employees} Mitarbeiter · {officeInfo.team.cadWorkstations} CAD-Arbeitsplätze · {officeInfo.team.avaWorkstations} AVA-Arbeitsplätze
            </p>
          </div>
          <div ref={aboutRef} className={`grid md:grid-cols-2 gap-16 lg:gap-24 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {partners.map((partner, index) => (
              <div key={index} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="aspect-square mb-8 overflow-hidden bg-stone-100">
                  <img src={`${import.meta.env.BASE_URL}${index === 0 ? 'markus' : 'rainer'}.png`} alt={partner.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-xs tracking-[0.3em] text-amber-600 uppercase mb-2">{partner.title}</p>
                <h3 className="text-2xl font-extralight text-stone-900 mb-5">{partner.name}</h3>
                <div className="w-8 h-px bg-amber-500 mb-5" />
                <div className="space-y-1.5 text-stone-500 text-sm leading-relaxed">
                  <p>Geboren {partner.birthYear} in {partner.birthPlace}</p>
                  {partner.education.map((e, i) => <p key={i}>{e}</p>)}
                  <p className="text-stone-800 font-medium mt-4">Büro Rheinarchitekten seit {partner.foundingYear}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-4">Was wir bieten</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight mb-6">Leistungen</h2>
            <div className="w-16 h-px bg-amber-500 mx-auto" />
          </div>
          <div ref={servicesRef} className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <div key={index} className="bg-white p-10 border border-stone-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${index * 150}ms` }}>
                  <Icon className="w-10 h-10 text-amber-600 mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium text-stone-900 mb-5 tracking-wide">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-stone-500 text-sm leading-relaxed flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-4">Unsere Arbeit</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 tracking-tight mb-6">Projekte</h2>
            <div className="w-16 h-px bg-amber-500 mx-auto mb-8" />
            <p className="text-stone-500 text-sm max-w-2xl mx-auto leading-relaxed">Wohn- und Gewerbebau, Modernisierungen und ausgezeichnete Wettbewerbsbeiträge.</p>
          </div>
          <div ref={projectsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {projectCategories.map((cat, index) => {
              const Icon = projectIcons[cat.id] || Building;
              return (
                <div key={cat.id} className="group relative overflow-hidden aspect-[4/3]" style={{ transitionDelay: `${index * 100}ms` }}>
                  <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <Icon className="w-6 h-6 text-amber-400 mb-3" strokeWidth={1.5} />
                    <h3 className="text-xl font-light text-white tracking-wide mb-1.5">{cat.title}</h3>
                    <p className="text-white/55 text-xs leading-relaxed">{cat.description}</p>
                    <div className="h-px w-0 group-hover:w-10 bg-amber-400 mt-4 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3D Model */}
      <section className="py-24 bg-gradient-to-b from-stone-950 to-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Visualisierung</p>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">3D Modell</h2>
            <div className="w-16 h-px bg-amber-500/50 mx-auto mb-8" />
            <p className="text-stone-400 text-sm max-w-2xl mx-auto leading-relaxed">Erleben Sie Architektur in einer neuen Dimension. Drehen, zoomen und erkunden Sie jedes Detail.</p>
          </div>
          <div className="relative overflow-hidden h-[500px] md:h-[700px] border border-white/10">
            {/* @ts-ignore */}
            <model-viewer src={`${import.meta.env.BASE_URL}building2.glb`} alt="3D-Modell" auto-rotate camera-controls shadow-intensity="1.2" exposure="0.9" environment-image="neutral" loading="eager" touch-action="pan-y" style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} />
            <div className="absolute bottom-6 left-6 right-6 bg-stone-950/60 backdrop-blur-md p-4 border border-white/10">
              <p className="text-xs text-white/70">Ziehen zum Drehen · Scrollen zum Zoomen · Auto-Rotation aktiv</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[{ Icon: RotateCcw, t: '360° Ansicht', d: 'Vollständige Kamerakontrolle' }, { Icon: ZoomIn, t: 'Detail-Zoom', d: 'Erkunden Sie jedes Detail' }, { Icon: Move, t: 'Hochauflösend', d: 'Echtzeit 3D-Darstellung' }].map(({ Icon, t, d }, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 p-6 border border-white/10">
                <div className="p-3 bg-white/10 shrink-0"><Icon className="w-5 h-5 text-white/70" /></div>
                <div><h4 className="text-sm font-medium text-white mb-1">{t}</h4><p className="text-white/50 text-xs">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-4">Kompetenz</p>
            <h2 className="text-4xl font-extralight text-stone-900 tracking-tight">Qualifikationen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: 'Architektenkammer NRW', d: 'Mitglied der Architektenkammer Nordrhein-Westfalen' },
              { t: 'Spezialisierung', d: 'Umbau, Modernisierungen und Denkmalschutz' },
              { t: 'Bauherren-Schutzbund', d: 'Bauherrenberater des Bauherren-Schutzbund e.V. Berlin' },
              { t: 'Energieberatung', d: 'Zertifizierte Energieberatung (DENA, BAFA)' },
            ].map((q, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 border border-amber-300 group-hover:border-amber-500 mx-auto mb-6 flex items-center justify-center transition-colors">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                </div>
                <h3 className="text-sm font-medium text-stone-900 mb-3 tracking-wide">{q.t}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] text-amber-400/70 uppercase mb-4">Sprechen Sie uns an</p>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">Kontakt</h2>
            <div className="w-16 h-px bg-amber-500/60 mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl font-extralight mb-2 tracking-widest">{officeInfo.name}</p>
            <p className="text-stone-400 text-sm mb-1">{officeInfo.fullTitle}</p>
            <p className="text-stone-400 text-sm mb-16">{officeInfo.partners}</p>
            <div className="grid md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm"><p>{officeInfo.address.street}</p><p className="text-stone-400">{officeInfo.address.city}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href={`tel:${officeInfo.contact.phone}`} className="text-sm hover:text-stone-300 transition-colors">{officeInfo.contact.phone}</a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Printer className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="text-sm text-stone-300">{officeInfo.contact.fax}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href={`mailto:${officeInfo.contact.email}`} className="text-sm hover:text-stone-300 transition-colors">{officeInfo.contact.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Rheinarchitekten. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <button onClick={() => setShowImpressum(true)} className="hover:text-stone-300 transition-colors">Impressum</button>
            <button onClick={() => setShowDatenschutz(true)} className="hover:text-stone-300 transition-colors">Datenschutz</button>
          </div>
        </div>
      </footer>

      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
    </div>
  );
}
