import { createContext, useContext, useState, ReactNode } from 'react';

const THEME_COUNT = 6;

interface ThemeContextType {
  theme: number;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 0,
  cycleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(0);
  const cycleTheme = () => setTheme((p) => (p + 1) % THEME_COUNT);

  return (
    <ThemeContext.Provider value={{ theme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
