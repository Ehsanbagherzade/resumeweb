'use client';

import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  Theme,
} from '@mui/material';
import { IranSans } from '@/theme';
import React, { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme | undefined;
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  if (!theme) return <>{children}</>;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className={IranSans.className}>{children}</div>
    </MuiThemeProvider>
  );
}
