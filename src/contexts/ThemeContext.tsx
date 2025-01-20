import { darkTheme, lightTheme } from '@theme/index';
import React, { createContext, ReactNode, useContext } from 'react';
import { useColorScheme } from 'react-native';

export interface AppTheme {
  background: string,
  text: string,
}

const ThemeContext = createContext<AppTheme>(lightTheme);

interface Props {
  children: ReactNode,
}

export const ThemeProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
