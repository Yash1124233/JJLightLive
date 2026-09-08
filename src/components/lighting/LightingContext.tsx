import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type LightingContextValue = {
  isNightMode: boolean;
  lightIntensity: number;
  toggleTheme: () => void;
  setLightIntensity: (intensity: number) => void;
};

const LightingContext = createContext<LightingContextValue | undefined>(undefined);
const clampIntensity = (intensity: number) => Math.min(1, Math.max(0.1, intensity));

export function LightingProvider({ children }: { children: ReactNode }) {
  const [isNightMode, setIsNightMode] = useState(true);
  const [lightIntensity, setLightIntensityState] = useState(0.72);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.lighting = isNightMode ? 'night' : 'day';
    root.style.setProperty('--lighting-bg', isNightMode ? '#080808' : '#F5F2EB');
    root.style.setProperty('--lighting-surface', isNightMode ? '#141312' : '#ECE7DE');
    root.style.setProperty('--lighting-text', isNightMode ? '#F5F2EB' : '#161513');
    root.style.setProperty('--lighting-muted', isNightMode ? '#8E8A83' : '#8C8275');
    root.style.setProperty('--lighting-border', isNightMode ? '#242220' : '#D8D0C4');
    root.style.setProperty('--lighting-glow', isNightMode ? '#FFB35A' : '#8C8275');
    root.style.setProperty('--light-intensity', String(lightIntensity));
    root.style.setProperty('--background', isNightMode ? '0 0% 3%' : '40 20% 94%');
    root.style.setProperty('--foreground', isNightMode ? '40 15% 92%' : '30 10% 8%');
    root.style.setProperty('--card', isNightMode ? '30 5% 8%' : '40 15% 90%');
    root.style.setProperty('--card-foreground', isNightMode ? '40 15% 92%' : '30 10% 8%');
    root.style.setProperty('--border', isNightMode ? '30 5% 14%' : '35 15% 82%');
    root.style.setProperty('--muted-foreground', isNightMode ? '35 7% 54%' : '30 8% 45%');
  }, [isNightMode, lightIntensity]);

  const value = useMemo(() => ({
    isNightMode,
    lightIntensity,
    toggleTheme: () => setIsNightMode((current) => !current),
    setLightIntensity: (intensity: number) => setLightIntensityState(clampIntensity(intensity)),
  }), [isNightMode, lightIntensity]);

  return <LightingContext.Provider value={value}>{children}</LightingContext.Provider>;
}

export function useLighting() {
  const context = useContext(LightingContext);
  if (!context) throw new Error('useLighting must be used within a LightingProvider');
  return context;
}