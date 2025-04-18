"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Brand = "fleetcard" | "cardlink";

interface ThemeContextType {
  brand: Brand;
  setBrand: (brand: Brand) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [brand, setBrand] = useState<Brand>("fleetcard");

  useEffect(() => {
    document.documentElement.classList.forEach(className => {
      if (className.startsWith('brand-')) {
        document.documentElement.classList.remove(className);
      }
    });
    document.documentElement.classList.add(`brand-${brand}`);
  }, [brand]);

  return (
    <ThemeContext.Provider value={{ brand, setBrand }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}