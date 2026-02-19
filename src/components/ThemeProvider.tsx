import { createContext } from 'react';

import { useEffect, useState, useContext } from 'react';

/**types***/
type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const intialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProvideContext = createContext<ThemeProviderState>(intialState);

export const ThemeProvider = ({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

useEffect(() => {
  const root = window.document.documentElement;

  root.classList.remove('light', 'dark');

  if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    root.classList.add(systemTheme);
  } else {
    root.classList.add(theme); // ✅ THIS WAS MISSING
  }
}, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProvideContext.Provider
      {...props}
      value={value}
    >
        {children}
    </ThemeProvideContext.Provider>
  );
};

export const useTheme = ()=>{
    const context = useContext(ThemeProvideContext);

    if (context === undefined){
        throw new Error('usetheme must be used within a ThemeProvider');
    }
    return context;
}