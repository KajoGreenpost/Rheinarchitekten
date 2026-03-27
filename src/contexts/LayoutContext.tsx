import { createContext, useContext, useState, ReactNode } from 'react';

export const LAYOUT_COUNT = 4;
export const LAYOUT_NAMES = ['Original', 'Klassisch', 'Studio', 'Magazin'] as const;

interface LayoutContextType {
  layout: number;
  cycleLayout: () => void;
}

const LayoutContext = createContext<LayoutContextType>({
  layout: 0,
  cycleLayout: () => {},
});

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layout, setLayout] = useState(0);
  const cycleLayout = () => setLayout((p) => (p + 1) % LAYOUT_COUNT);

  return (
    <LayoutContext.Provider value={{ layout, cycleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
