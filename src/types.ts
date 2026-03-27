export interface Partner {
  name: string;
  title: string;
  birthYear: number;
  birthPlace: string;
  education: string[];
  foundingYear: number;
}

export interface Service {
  title: string;
  items: string[];
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  image?: string;
}
