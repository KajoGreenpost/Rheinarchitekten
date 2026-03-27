/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        th: {
          dark: 'rgb(var(--th-dark) / <alpha-value>)',
          darker: 'rgb(var(--th-darker) / <alpha-value>)',
          light: 'rgb(var(--th-light) / <alpha-value>)',
          lighter: 'rgb(var(--th-lighter) / <alpha-value>)',
          card: 'rgb(var(--th-card) / <alpha-value>)',
          heading: 'rgb(var(--th-heading) / <alpha-value>)',
          body: 'rgb(var(--th-body) / <alpha-value>)',
          muted: 'rgb(var(--th-muted) / <alpha-value>)',
          'on-dark': 'rgb(var(--th-on-dark) / <alpha-value>)',
          accent: 'rgb(var(--th-accent) / <alpha-value>)',
          'hero-from': 'rgb(var(--th-hero-from) / <alpha-value>)',
          'hero-via': 'rgb(var(--th-hero-via) / <alpha-value>)',
          'hero-to': 'rgb(var(--th-hero-to) / <alpha-value>)',
          'btn-bg': 'rgb(var(--th-btn-bg) / <alpha-value>)',
          'btn-text': 'rgb(var(--th-btn-text) / <alpha-value>)',
          border: 'rgb(var(--th-border) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
