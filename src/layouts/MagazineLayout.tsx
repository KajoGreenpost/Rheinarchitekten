import { useState } from 'react';
import { Menu, X, MapPin, Phone, Printer, Mail, Building2, TrendingUp, Network, Award, Home, Building, Wrench, Briefcase, Trophy, RotateCcw, ZoomIn, Move } from 'lucide-react';
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

export default function MagazineLayout() {
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
    <div className="min-h-screen bg-stone-50 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <button onClick={cycleLayout} className="text-xs tracking-[0.2em] text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-2 min-w-[90px]">
              <span className="w-2 h-2 bg-orange-600 rounded-full" />
              {LAYOUT_NAMES[layout]}
            </button>
            <button onClick={() => scrollTo('home')} className="text-xs font-medium tracking-[0.4em] text-stone-800 hover:opacity-70 transition-opacity uppercase">
              Rheinarchitekten
            </button>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="text-xs tracking-widest text-stone-500 hover:text-stone-900 transition-colors uppercase">
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden text-stone-800" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-stone-50 flex flex-col items-start justify-center px-12 gap-6">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="text-3xl font-light text-stone-900 hover:text-orange-600 transition-colors">{item.label}</button>
          ))}
        </div>
      )}

      {/* Hero — Full-bleed editorial */}
      <section id="home" className="pt-14 relative h-screen overflow-hidden">
        <img src={`${import.meta.env.BASE_URL}hero-architecture.webp`} alt="Architektur" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-stone-950/10" />

        {/* Top right label */}
        <div className="absolute top-20 right-8 text-right">
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase">Ausgabe 2024</p>
          <p className="text-xs tracking-[0.4em] text-white/50 uppercase">Köln</p>
        </div>

        {/* Bottom left — editorial headline */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs tracking-[0.5em] text-orange-400 uppercase mb-4">Dipl.-Ing. Architekten AKNW</p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-extralight text-white leading-none tracking-tight mb-6">
              RHEIN<br />ARCHI<span className="text-orange-400">—</span><br />TEKTEN
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-white/60 text-sm tracking-widest">Architektur mit Vision und Präzision</p>
              <button onClick={() => scrollTo('contact')} className="text-xs tracking-[0.3em] text-white border border-white/40 px-6 py-3 hover:bg-white hover:text-stone-900 transition-all duration-300 uppercase">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — Magazine pullout */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[{ v: '28+', l: 'Jahre Erfahrung' }, { v: '200+', l: 'Abgeschlossene Projekte' }, { v: '4', l: 'Mitarbeiter' }, { v: '3', l: 'CAD-Arbeitsplätze' }].map((s, i) => (
              <div key={i}>
                <div className="text-5xl font-extralight mb-1">{s.v}</div>
                <div className="text-xs tracking-[0.2em] text-white/70 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About — Editorial style */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2px_2fr] gap-12 mb-20">
            <div>
              <p className="text-xs tracking-[0.5em] text-orange-600 uppercase mb-6">01 — Das Büro</p>
              <h2 className="text-4xl font-extralight text-stone-900 leading-tight mb-6">Büro&shy;profil</h2>
              <div className="w-8 h-px bg-orange-500 mb-6" />
              <p className="text-stone-400 text-xs leading-relaxed">
                {officeInfo.team.employees} Mitarbeiter<br />
                {officeInfo.team.cadWorkstations} CAD-Arbeitsplätze<br />
                {officeInfo.team.avaWorkstations} AVA-Arbeitsplätze
              </p>
            </div>
            <div className="bg-stone-100 hidden lg:block" />
            <div className="flex items-start">
              <blockquote className="text-2xl md:text-3xl font-extralight text-stone-700 leading-relaxed italic border-l-4 border-orange-400 pl-8">
                "Wir übernehmen alle Leistungen zur Realisierung Ihres Projekts — von der Grundstücksauswahl bis zur Bauleitung."
              </blockquote>
            </div>
          </div>

          <div ref={aboutRef} className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {partners.map((partner, index) => (
              <div key={index} className="group" style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-stone-100 relative">
                  <img src={`${import.meta.env.BASE_URL}${index === 0 ? 'markus' : 'rainer'}.png`} alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs tracking-[0.3em] text-orange-400 uppercase">{partner.title}</p>
                    <p className="text-xl font-light text-white">{partner.name}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-stone-500">
                  <div>
                    <p className="text-orange-600 font-medium uppercase tracking-wider mb-1">Studium</p>
                    {partner.education.map((e, i) => <p key={i}>{e}</p>)}
                  </div>
                  <div>
                    <p className="text-orange-600 font-medium uppercase tracking-wider mb-1">Büro seit</p>
                    <p>{partner.foundingYear}</p>
                    <p className="mt-2 text-stone-400">Geb. {partner.birthYear}<br />{partner.birthPlace}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — Large editorial panels */}
      <section id="services" className="py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-orange-600 uppercase mb-4">02 — Was wir bieten</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 leading-tight">Leistungen</h2>
          </div>
          <div ref={servicesRef} className={`grid md:grid-cols-2 gap-1 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              const bgColors = ['bg-stone-900', 'bg-stone-800', 'bg-orange-700', 'bg-stone-700'];
              return (
                <div key={index} className={`${bgColors[index]} p-10 md:p-12 group hover:brightness-110 transition-all duration-300`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="flex items-start justify-between mb-8">
                    <Icon className="w-10 h-10 text-white/60 group-hover:text-white transition-colors" strokeWidth={1} />
                    <span className="text-6xl font-extralight text-white/10 leading-none">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-light text-white mb-6 leading-snug">{service.title}</h3>
                  <div className="w-8 h-px bg-orange-400 mb-6" />
                  <ul className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-white/60 text-sm flex items-start gap-2.5">
                        <span className="w-1 h-1 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
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

      {/* Projects — Magazine mosaic grid */}
      <section id="projects" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-orange-600 uppercase mb-4">03 — Unsere Arbeit</p>
            <h2 className="text-4xl md:text-5xl font-extralight text-stone-900 leading-tight">Projekte</h2>
          </div>
          <div ref={projectsRef} className={`transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Row 1: 1 large + 2 stacked */}
            <div className="grid md:grid-cols-3 gap-2 mb-2">
              {projectCategories.slice(0, 1).map((cat) => {
                const Icon = projectIcons[cat.id] || Building;
                return (
                  <div key={cat.id} className="md:col-span-2 group relative overflow-hidden h-72 md:h-96">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Icon className="w-5 h-5 text-orange-400 mb-2" strokeWidth={1.5} />
                      <h3 className="text-xl font-light text-white mb-1">{cat.title}</h3>
                      <p className="text-white/60 text-xs">{cat.description}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex flex-col gap-2">
                {projectCategories.slice(1, 3).map((cat) => {
                  const Icon = projectIcons[cat.id] || Building;
                  return (
                    <div key={cat.id} className="group relative overflow-hidden flex-1 h-44 md:h-auto">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <Icon className="w-4 h-4 text-orange-400 mb-1.5" strokeWidth={1.5} />
                        <h3 className="text-base font-light text-white">{cat.title}</h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Row 2: 3 equal */}
            <div className="grid md:grid-cols-3 gap-2">
              {projectCategories.slice(3).map((cat) => {
                const Icon = projectIcons[cat.id] || Building;
                return (
                  <div key={cat.id} className="group relative overflow-hidden h-56">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <Icon className="w-4 h-4 text-orange-400 mb-2" strokeWidth={1.5} />
                      <h3 className="text-base font-light text-white mb-1">{cat.title}</h3>
                      <p className="text-white/55 text-xs hidden group-hover:block">{cat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs tracking-[0.5em] text-orange-400 uppercase mb-4">04 — Visualisierung</p>
            <h2 className="text-4xl font-extralight text-white">3D Modell</h2>
          </div>
          <div className="relative h-[500px] md:h-[700px]">
            {/* @ts-ignore */}
            <model-viewer src={`${import.meta.env.BASE_URL}building2.glb`} alt="3D-Modell" auto-rotate camera-controls shadow-intensity="1.2" exposure="0.9" environment-image="neutral" loading="eager" touch-action="pan-y" style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }} />
            <div className="absolute bottom-6 left-6 right-6 bg-stone-950/70 backdrop-blur-sm p-4 border-l-2 border-orange-500">
              <p className="text-xs text-white/60">Ziehen zum Drehen · Scrollen zum Zoomen · Auto-Rotation aktiv</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[{ Icon: RotateCcw, t: '360° Ansicht', d: 'Vollständige Kamerakontrolle' }, { Icon: ZoomIn, t: 'Detail-Zoom', d: 'Erkunden Sie jedes Detail' }, { Icon: Move, t: 'Hochauflösend', d: 'Echtzeit 3D-Darstellung' }].map(({ Icon, t, d }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div><p className="text-sm font-medium text-white">{t}</p><p className="text-xs text-stone-500">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-orange-600 uppercase mb-4">05 — Kompetenz</p>
            <h2 className="text-4xl font-extralight text-stone-900">Qualifikationen</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: 'Architektenkammer NRW', d: 'Mitglied der Architektenkammer Nordrhein-Westfalen' },
              { t: 'Spezialisierung', d: 'Umbau, Modernisierungen und Denkmalschutz' },
              { t: 'Bauherren-Schutzbund', d: 'Bauherrenberater des Bauherren-Schutzbund e.V. Berlin' },
              { t: 'Energieberatung', d: 'Zertifizierte Energieberatung (DENA, BAFA)' },
            ].map((q, i) => (
              <div key={i}>
                <div className="w-10 h-10 bg-orange-600 mb-5 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-sm font-medium text-stone-900 mb-2">{q.t}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{q.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-xs tracking-[0.5em] text-orange-400 uppercase mb-4">06 — Kontakt</p>
            <h2 className="text-5xl md:text-7xl font-extralight text-white leading-tight">Sprechen<br />Sie uns an.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <p className="text-xl font-light mb-2">{officeInfo.name}</p>
              <p className="text-stone-400 text-sm mb-10">{officeInfo.fullTitle} · {officeInfo.partners}</p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <div className="text-sm"><p>{officeInfo.address.street}</p><p className="text-stone-400">{officeInfo.address.city}</p></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <a href={`tel:${officeInfo.contact.phone}`} className="text-sm hover:text-stone-300 transition-colors">{officeInfo.contact.phone}</a>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Printer className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-sm text-stone-400">{officeInfo.contact.fax}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <a href={`mailto:${officeInfo.contact.email}`} className="text-sm hover:text-stone-300 transition-colors">{officeInfo.contact.email}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-orange-600 p-8 flex flex-col justify-between">
              <p className="text-white/80 text-sm leading-relaxed">Wir freuen uns auf Ihre Anfrage — ob Neubau, Umbau oder Beratung.</p>
              <div>
                <div className="w-8 h-px bg-white/40 mb-4" />
                <p className="text-white/60 text-xs">Rheinarchitekten<br />Köln seit 1996</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-600 py-8 border-t-4 border-orange-600">
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
