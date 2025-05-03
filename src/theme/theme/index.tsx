'use client';

import { createTheme } from '@mui/material/styles';
import { IranSans } from '../font';
import typography from '../typography';
import palette from '@/theme/color';
import breakpoints from '@/theme/responsive/breakpoint';

const theme = createTheme({
  direction: 'rtl',
  typography,
  palette: palette,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: IranSans.style.fontFamily,
        },
        breakpoints,
      },
    },
  },
});

export default theme;
