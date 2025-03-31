// can be updated later to have a light/dark theme toggler
import React, { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { LightTheme } from '../themes/LightTheme';

type ThemeContextType = {
  theme: 'light';
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light'>('light');

  const toggleTheme = useCallback(() => {
    setTheme('light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={LightTheme }>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);