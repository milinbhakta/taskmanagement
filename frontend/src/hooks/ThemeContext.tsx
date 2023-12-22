import { createContext, useState, useEffect, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { blue, pink } from '@mui/material/colors';

export const ThemeContext = createContext({
  toggleDarkMode: () => {},
  themeMode: 'light',
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [themeMode, setThemeMode] = useState(
    prefersDarkMode ? 'dark' : 'light'
  );

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? blue[200] : blue[700], // light blue in dark mode, dark blue in light mode
      },
      secondary: {
        main: darkMode ? pink[200] : pink[700], // light pink in dark mode, dark pink in light mode
      },
    },
  });

  useEffect(() => {
    setDarkMode(prefersDarkMode);
    setThemeMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setThemeMode(!darkMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, themeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
