import { Partner, Service, ProjectCategory } from './types';

export const partners: Partner[] = [
  {
    name: 'Markus Möller',
    title: 'Dipl.-Ing. Architekt',
    birthYear: 1960,
    birthPlace: 'Münster',
    education: ['Studium in Münster', 'Studium in Aachen'],
    foundingYear: 1996
  },
  {
    name: 'Rainer Bauer',
    title: 'Dipl.-Ing. Architekt',
    birthYear: 1960,
    birthPlace: 'Orscholz (Saarland)',
    education: ['Studium in Paderborn', 'Studium in Köln'],
    foundingYear: 1996
  }
];

export const services: Service[] = [
  {
    title: 'Architektur, Innenarchitektur, Städtebau',
    items: ['Entwurf', 'Planung', 'Ausschreibung', 'Bauleitung']
  },
  {
    title: 'Projektentwicklung',
    items: [
      'Begutachtung und Bewertung von Bestandsimmobilien',
      'Machbarkeitsstudien'
    ]
  },
  {
    title: 'Erschließungsplanung',
    items: ['Straßen- und Kanalbau', 'Versickerungsanlagen']
  },
  {
    title: 'Sachverständigentätigkeit',
    items: [
      'Energieberatung (DENA, BAFA)',
      'Bauherrenberater des Bauherren-Schutzbund e.V. Berlin'
    ]
  }
];

export const projectCategories: ProjectCategory[] = [
  {
    id: 'aktuelle-projekte',
    title: 'Aktuelle Projekte',
    description: 'Unsere neuesten Bauvorhaben und laufenden Projekte',
    image: `${import.meta.env.BASE_URL}hero-architecture.webp`
  },
  {
    id: 'einfamilienhaeuser',
    title: 'Einfamilienhäuser',
    description: 'Individuelle Wohnkonzepte für höchste Ansprüche',
    image: `${import.meta.env.BASE_URL}project-einfamilienhaus.webp`
  },
  {
    id: 'wohnungsbau',
    title: 'Wohnungsbau',
    description: 'Mehrfamilienhäuser und Wohnanlagen',
    image: `${import.meta.env.BASE_URL}project-wohnungsbau.webp`
  },
  {
    id: 'modernisierungen',
    title: 'Modernisierungen',
    description: 'Umbau, Sanierung und Denkmalschutz',
    image: `${import.meta.env.BASE_URL}project-modernisierung.webp`
  },
  {
    id: 'gewerbebau',
    title: 'Gewerbebau',
    description: 'Funktionale und ästhetische Gewerbeimmobilien',
    image: `${import.meta.env.BASE_URL}project-gewerbebau.webp`
  },
  {
    id: 'wettbewerbe',
    title: 'Wettbewerbe',
    description: 'Ausgezeichnete architektonische Konzepte',
    image: `${import.meta.env.BASE_URL}project-wettbewerb.webp`
  }
];

export const officeInfo = {
  name: 'RHEINARCHITEKTEN',
  fullTitle: 'Dipl.-Ing. Architekten AKNW',
  partners: 'M. Möller und R. Bauer',
  address: {
    street: 'Spiesergasse 2',
    city: '50670 Köln-City'
  },
  contact: {
    phone: '0221-9171704',
    fax: '0221-9171705',
    email: 'info@rheinarchitekten.de'
  },
  team: {
    employees: 4,
    cadWorkstations: 3,
    avaWorkstations: 2
  },
  specializations: ['Umbau', 'Modernisierungen', 'Denkmalschutz']
};
