export const THEME_COUNT = 6;

export interface ThemeStyle {
  name: string;
  heroHeading: string;
  sectionHeading: string;
  divider: string;
  dividerLight: string;
  buttonRadius: string;
  navScrolled: string;
  heroAnimated: boolean;
  heroOverlay: string;
  heroReflection: boolean;
  heroBottomLine: boolean;
  partnerCard: string;
  photoContainer: string;
  photoReflection: boolean;
  serviceCard: string;
  projectOverlay: string;
  projectCard: string;
  featureCard: string;
  iconBox: string;
  footerTop: string;
}

export const themes: ThemeStyle[] = [
  {
    name: 'Classic',
    heroHeading: 'font-light tracking-tight',
    sectionHeading: 'font-light tracking-tight',
    divider: 'w-20 h-0.5 bg-th-accent',
    dividerLight: 'w-20 h-0.5 bg-th-on-dark/50',
    buttonRadius: '',
    navScrolled: 'shadow-lg',
    heroAnimated: false,
    heroOverlay: '',
    heroReflection: false,
    heroBottomLine: false,
    partnerCard: '',
    photoContainer: 'bg-th-lighter',
    photoReflection: false,
    serviceCard: 'bg-th-card p-8 hover:shadow-xl transition-shadow duration-300',
    projectOverlay: 'bg-gradient-to-br from-th-dark/85 to-th-darker/85 group-hover:from-th-dark/90 group-hover:to-th-darker/90',
    projectCard: '',
    featureCard: 'bg-th-on-dark/5 backdrop-blur-sm p-6 border border-th-on-dark/10 rounded-lg',
    iconBox: 'inline-flex items-center justify-center w-20 h-20 bg-th-accent text-th-on-dark',
    footerTop: '',
  },
  {
    name: 'Glass Aurora',
    heroHeading: 'font-light tracking-tight',
    sectionHeading: 'font-light tracking-tight',
    divider: 'w-24 h-0.5 bg-th-accent shimmer-line',
    dividerLight: 'w-24 h-0.5 bg-th-accent shimmer-line',
    buttonRadius: 'rounded-xl',
    navScrolled: 'shadow-lg shadow-black/30',
    heroAnimated: true,
    heroOverlay: 'bg-gradient-to-tr from-teal-500/10 via-transparent to-emerald-500/10',
    heroReflection: true,
    heroBottomLine: false,
    partnerCard: 'glass-card p-6 rounded-2xl border border-th-on-dark/10',
    photoContainer: 'bg-th-card/10 rounded-2xl',
    photoReflection: true,
    serviceCard: 'glass-card bg-th-card/5 p-8 rounded-2xl border border-th-on-dark/10 hover:bg-th-card/10 transition-all duration-300',
    projectOverlay: 'bg-gradient-to-br from-th-dark/80 to-th-darker/80 group-hover:from-th-dark/85 group-hover:to-th-darker/85',
    projectCard: 'rounded-2xl',
    featureCard: 'glass-card bg-th-on-dark/5 p-6 rounded-2xl border border-th-on-dark/10',
    iconBox: 'inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-th-accent/20 text-th-accent border border-th-accent/30',
    footerTop: 'border-t border-th-on-dark/10',
  },
  {
    name: 'Warm Luxe',
    heroHeading: 'font-light tracking-[0.15em]',
    sectionHeading: 'font-light tracking-[0.15em]',
    divider: 'w-16 h-px bg-th-accent',
    dividerLight: 'w-16 h-px bg-th-accent/50',
    buttonRadius: '',
    navScrolled: 'shadow-lg shadow-black/40',
    heroAnimated: false,
    heroOverlay: 'bg-gradient-to-t from-[rgb(196_162_101_/_0.06)] to-transparent',
    heroReflection: false,
    heroBottomLine: true,
    partnerCard: 'border border-th-accent/20 p-6',
    photoContainer: 'border border-th-accent/30',
    photoReflection: false,
    serviceCard: 'bg-th-card p-8 border border-th-accent/15 hover:border-th-accent/30 transition-all duration-300',
    projectOverlay: 'bg-gradient-to-br from-th-dark/85 to-th-darker/85 group-hover:from-th-dark/90 group-hover:to-th-darker/90',
    projectCard: '',
    featureCard: 'bg-th-card p-6 border border-th-accent/20 rounded-lg',
    iconBox: 'inline-flex items-center justify-center w-20 h-20 border border-th-accent/40 text-th-accent',
    footerTop: 'border-t border-th-accent/20',
  },
  {
    name: 'Concrete',
    heroHeading: 'font-black tracking-wider',
    sectionHeading: 'font-bold tracking-wider uppercase',
    divider: 'w-32 h-1 bg-th-accent',
    dividerLight: 'w-32 h-1 bg-th-on-dark',
    buttonRadius: '',
    navScrolled: 'border-b-2 border-th-heading',
    heroAnimated: false,
    heroOverlay: '',
    heroReflection: false,
    heroBottomLine: false,
    partnerCard: 'border-2 border-th-heading p-6',
    photoContainer: '',
    photoReflection: false,
    serviceCard: 'bg-th-card p-8 border-2 border-th-heading shadow-[6px_6px_0px_rgba(0,0,0,0.12)]',
    projectOverlay: 'bg-gradient-to-br from-th-dark/85 to-th-darker/85 group-hover:from-th-dark/90 group-hover:to-th-darker/90',
    projectCard: '',
    featureCard: 'bg-th-on-dark/5 p-6 border-2 border-th-on-dark/20',
    iconBox: 'inline-flex items-center justify-center w-20 h-20 bg-th-accent text-th-on-dark',
    footerTop: 'border-t-2 border-th-on-dark/20',
  },
  {
    name: 'Pure Light',
    heroHeading: 'font-light tracking-tight',
    sectionHeading: 'font-light tracking-tight',
    divider: 'w-12 h-0.5 bg-th-accent rounded-full',
    dividerLight: 'w-12 h-0.5 bg-th-on-dark/50 rounded-full',
    buttonRadius: 'rounded-lg',
    navScrolled: 'shadow-sm',
    heroAnimated: false,
    heroOverlay: '',
    heroReflection: false,
    heroBottomLine: false,
    partnerCard: 'rounded-xl border border-th-border p-6 shadow-sm',
    photoContainer: 'bg-th-lighter rounded-xl',
    photoReflection: false,
    serviceCard: 'bg-th-card p-8 rounded-xl border border-th-border shadow-sm hover:shadow-md transition-shadow duration-300',
    projectOverlay: 'bg-gradient-to-br from-th-dark/80 to-th-darker/80 group-hover:from-th-dark/90 group-hover:to-th-darker/90',
    projectCard: 'rounded-xl',
    featureCard: 'bg-th-on-dark/5 p-6 rounded-xl border border-th-on-dark/10',
    iconBox: 'inline-flex items-center justify-center w-20 h-20 rounded-xl bg-th-accent/10 text-th-accent',
    footerTop: '',
  },
  {
    name: 'Midnight',
    heroHeading: 'font-extralight tracking-[0.2em]',
    sectionHeading: 'font-light tracking-widest uppercase',
    divider: 'w-20 h-px bg-th-accent',
    dividerLight: 'w-20 h-px bg-th-accent/50',
    buttonRadius: '',
    navScrolled: 'shadow-lg shadow-black/30 border-b border-th-accent/10',
    heroAnimated: false,
    heroOverlay: 'bg-gradient-to-t from-sky-400/5 to-transparent',
    heroReflection: false,
    heroBottomLine: true,
    partnerCard: 'border border-th-accent/15 p-6',
    photoContainer: 'border border-th-accent/10',
    photoReflection: false,
    serviceCard: 'bg-th-card p-8 border border-th-accent/15 hover:border-th-accent/30 transition-all duration-300',
    projectOverlay: 'bg-gradient-to-br from-th-dark/85 to-th-darker/85 group-hover:from-th-dark/90 group-hover:to-th-darker/90',
    projectCard: '',
    featureCard: 'bg-th-card p-6 border border-th-accent/20',
    iconBox: 'inline-flex items-center justify-center w-20 h-20 border border-th-accent/30 text-th-accent bg-th-accent/10',
    footerTop: 'border-t border-th-accent/10',
  },
];
