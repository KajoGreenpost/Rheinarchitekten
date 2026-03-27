import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MapPin, Phone, Printer, Mail, Building2, TrendingUp, Network, Award, Home, Building, Wrench, Briefcase, Trophy, RotateCcw, ZoomIn, Move } from 'lucide-react';
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

export default function StudioLayout() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cycleLayout, layout } = useLayout();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={cycleLayout} className="text-xs tracking-[0.2em] text-zinc-400 hover:text-zinc-800 transition-colors flex items-center gap-2 min-w-[90px]">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              {LAYOUT_NAMES[layout]}
            </button>
            <button onClick={() => scrollTo('home')} className="text-sm font-bold tracking-[0.3em] text-zinc-900 hover:opacity-70 transition-opacity uppercase">
              Rheinarchitekten
            </button>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs tracking-wider text-zinc-500 hover:text-zinc-900 transition-colors uppercase">
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-zinc-900" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-start justify-center px-12 gap-8">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-3xl font-light text-zinc-900 hover:text-red-600 transition-colors">{item.label}</button>
          ))}
        </div>
      )}

      {/* Hero — Split Screen */}
      <section id="home" className="pt-16 min-h-screen flex">
        {/* Left panel */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-20 bg-white">
          <p className="text-xs tracking-[0.4em] text-zinc-400 uppercase mb-8">Dipl.-Ing. Architekten AKNW</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-zinc-900 uppercase leading-none mb-2">
            Rhein
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-zinc-900 uppercase leading-none mb-2">
            archi
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-red-600 uppercase leading-none mb-10">
            tekten
          </h1>
          <div className="w-12 h-1 bg-red-600 mb-8" />
          <p className="text-zinc-500 text-sm leading-relaxed max-w-xs mb-10">
            Architektur mit Vision und Präzision.<br />Köln seit 1996.
          </p>
          <button onClick={() => scrollTo('contact')} className="flex items-center gap-3 text-sm font-bold tracking-widest text-white bg-zinc-900 px-8 py-4 w-fit hover:bg-red-600 transition-colors duration-300 uppercase">
            Kontakt <ArrowRight size={16} />
          </button>
        </div>

        {/* Right panel — full height image */}
        <div className="hidden lg:block flex-1 relative">
          <img src={`${import.meta.env.BASE_URL}hero-architecture.webp`} alt="Architektur" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-zinc-900/20" />
          <div className="absolute bottom-10 right-10 text-white text-right">
            <p className="text-xs tracking-[0.3em] opacity-60">Köln</p>
            <p className="text-xs tracking-[0.3em] opacity-60">seit 1996</p>
          </div>
        </div>
      </section>

      {/* Stats — black bar */}
      <section className="py-12 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[{ v: '28+', l: 'Jahre Erfahrung' }, { v: '200+', l: 'Projekte' }, { v: '4', l: 'Mitarbeiter' }, { v: '3', l: 'CAD-Plätze' }].map((s, i) => (
              <div key={i} className="text-center py-4 px-6">
                <div className="text-4xl font-black text-white mb-1">{s.v}</div>
                <div className="text-xs tracking-widest text-zinc-500 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-16 border-b border-zinc-100 pb-8">
            <div>
              <p className="text-xs tracking-[0.4em] text-red-600 uppercase mb-3">Das Büro</p>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-none">Büroprofil</h2>
            </div>
            <p className="hidden md:block text-sm text-zinc-400 max-w-xs text-right leading-relaxed">
              {officeInfo.team.employees} Mitarbeiter · {officeInfo.team.cadWorkstations} CAD · {officeInfo.team.avaWorkstations} AVA
            </p>
          </div>
          <div ref={aboutRef} className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {partners.map((partner, index) => (
              <div key={index} className="flex gap-8" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="w-32 h-40 flex-shrink-0 bg-zinc-100 overflow-hidden">
                  <img src={`${import.meta.env.BASE_URL}${index === 0 ? 'markus' : 'rainer'}.png`} alt={partner.name} className="w-full h-full object-cover" />
                </div>
                <div className="pt-2">
                  <p className="text-xs tracking-[0.3em] text-red-600 uppercase mb-2">{partner.title}</p>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{partner.name}</h3>
                  <div className="w-6 h-0.5 bg-red-600 mb-4" />
                  <div className="space-y-1 text-zinc-500 text-xs leading-relaxed">
                    <p>Geb. {partner.birthYear}, {partner.birthPlace}</p>
                    {partner.education.map((e, i) => <p key={i}>{e}</p>)}
                    <p className="text-zinc-900 font-medium mt-3">Büro seit {partner.foundingYear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — numbered list */}
      <section id="services" className="py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 border-b border-zinc-200 pb-8">
            <p className="text-xs tracking-[0.4em] text-red-600 uppercase mb-3">Was wir bieten</p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-none">Leistungen</h2>
          </div>
          <div ref={servicesRef} className={`transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <div key={index} className="border-b border-zinc-200 py-8 grid md:grid-cols-[80px_1fr_1fr] gap-6 items-start group hover:bg-zinc-100 px-4 -mx-4 transition-colors duration-200" style={{ transitionDelay: `${index * 100}ms` }}>
                  <span className="text-4xl font-black text-zinc-200 group-hover:text-red-200 transition-colors leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <h3 className="text-lg font-bold text-zinc-900">{service.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-zinc-500 text-sm flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-red-500 mt-1 flex-shrink-0" />
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

      {/* Projects — alternating strips */}
      <section id="projects" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 border-b border-zinc-100 pb-8">
            <p className="text-xs tracking-[0.4em] text-red-600 uppercase mb-3">Unsere Arbeit</p>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 uppercase leading-none">Projekte</h2>
          </div>
          <div ref={projectsRef} className={`space-y-4 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {projectCategories.map((cat, index) => {
              const Icon = projectIcons[cat.id] || Building;
              const isEven = index % 2 === 0;
              return (
                <div key={cat.id} className={`flex flex-col md:flex-row group overflow-hidden ${isEven ? '' : 'md:flex-row-reverse'}`} style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="md:w-7/12 relative h-56 md:h-72 overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className={`md:w-5/12 bg-zinc-50 group-hover:bg-zinc-900 transition-colors duration-300 p-8 md:p-12 flex flex-col justify-center ${isEven ? 'md:border-l border-zinc-100' : 'md:border-r border-zinc-100'}`}>
                    <Icon className="w-8 h-8 text-red-600 mb-4 group-hover:text-red-400 transition-colors" strokeWidth={1.5} />
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-white transition-colors mb-3">{cat.title}</h3>
                    <p className="text-zinc-500 group-hover:text-zinc-400 transition-colors text-sm leading-relaxed">{cat.description}</p>
                    <div className="h-0.5 w-0 group-hover:w-12 bg-red-500 mt-6 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3D Model */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 border-b border-white/10 pb-8">
            <p className="text-xs tracking-[0.4em] text-red-500 uppercase mb-3">Visualisierung</p>
            <h2 className="text-4xl font-black text-white uppercase">3D Modell</h2>
          </div>
          <div className="relative h-[500px] md:h-[700px] border border-white/10">
            {/* @ts-ignore */}
            <model-viewer src={`${import.meta.env.BASE_URL}building2.glb`} alt="3D-Modell" auto-rotate camera-controls shadow-intensity="1.2" exposure="0.9" environment-image="neutral" loading="eager" touch-action="pan-y" style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} />
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-sm p-4">
              <p className="text-xs text-white/60 tracking-wide">Ziehen zum Drehen · Scrollen zum Zoomen · Auto-Rotation aktiv</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-px mt-px bg-white/10">
            {[{ Icon: RotateCcw, t: '360° Ansicht', d: 'Vollständige Kamerakontrolle' }, { Icon: ZoomIn, t: 'Detail-Zoom', d: 'Erkunden Sie jedes Detail' }, { Icon: Move, t: 'Hochauflösend', d: 'Echtzeit 3D-Darstellung' }].map(({ Icon, t, d }, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-900 p-6">
                <Icon className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div><p className="text-sm font-bold text-white">{t}</p><p className="text-xs text-zinc-500">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 border-b border-zinc-100 pb-8">
            <p className="text-xs tracking-[0.4em] text-red-600 uppercase mb-3">Kompetenz</p>
            <h2 className="text-4xl font-black text-zinc-900 uppercase">Qualifikationen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: 'Architektenkammer NRW', d: 'Mitglied der Architektenkammer Nordrhein-Westfalen' },
              { t: 'Spezialisierung', d: 'Umbau, Modernisierungen und Denkmalschutz' },
              { t: 'Bauherren-Schutzbund', d: 'Bauherrenberater des Bauherren-Schutzbund e.V. Berlin' },
              { t: 'Energieberatung', d: 'Zertifizierte Energieberatung (DENA, BAFA)' },
            ].map((q, i) => (
              <div key={i} className="border-l-2 border-red-600 pl-5">
                <h3 className="text-sm font-bold text-zinc-900 mb-2">{q.t}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 border-b border-white/10 pb-8">
            <p className="text-xs tracking-[0.4em] text-red-500 uppercase mb-3">Sprechen Sie uns an</p>
            <h2 className="text-4xl font-black text-white uppercase">Kontakt</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-2xl font-black text-white mb-1 uppercase">{officeInfo.name}</p>
              <p className="text-zinc-400 text-sm mb-1">{officeInfo.fullTitle}</p>
              <p className="text-zinc-400 text-sm mb-10">{officeInfo.partners}</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm"><p>{officeInfo.address.street}</p><p className="text-zinc-400">{officeInfo.address.city}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href={`tel:${officeInfo.contact.phone}`} className="text-sm hover:text-zinc-300 transition-colors">{officeInfo.contact.phone}</a>
                </div>
                <div className="flex items-center gap-4">
                  <Printer className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm text-zinc-400">{officeInfo.contact.fax}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href={`mailto:${officeInfo.contact.email}`} className="text-sm hover:text-zinc-300 transition-colors">{officeInfo.contact.email}</a>
                </div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="border border-white/10 p-8 w-full">
                <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">Spezialisierungen</p>
                {officeInfo.specializations.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-white/5">
                    <ArrowRight className="w-3 h-3 text-red-500 flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-zinc-600 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Rheinarchitekten. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8">
            <button onClick={() => setShowImpressum(true)} className="hover:text-zinc-300 transition-colors">Impressum</button>
            <button onClick={() => setShowDatenschutz(true)} className="hover:text-zinc-300 transition-colors">Datenschutz</button>
          </div>
        </div>
      </footer>

      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}
      {showDatenschutz && <Datenschutz onClose={() => setShowDatenschutz(false)} />}
    </div>
  );
}
