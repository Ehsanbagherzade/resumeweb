import { ThemeOptions } from '@mui/material/styles';

const typography: ThemeOptions['typography'] = {
  fontFamily: 'IranSans, Arial, sans-serif',
  fontSize: 14,
  h1: {
    fontSize: '2rem',
    fontWeight: 700,
  },
  h2: {
    fontSize: '1.75rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '0.9375rem',
    fontWeight: 400,
    '@media (max-width:1280px)': { fontSize: '0.9375rem' },
    '@media (max-width:960px)': { fontSize: '0.812rem' },
    '@media (max-width:600px)': { fontSize: '0.55rem' },
  },
  body1: {
    fontSize: '3rem',
    fontWeight: 400,
    '@media (max-width:1280px)': { fontSize: '2.49rem' },
    '@media (max-width:960px)': { fontSize: '1.95rem' },
    '@media (max-width:750px)': { fontSize: '1.39rem' },
    '@media (max-width:600px)': { fontSize: '1rem' },
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
  },
  button: {
    textTransform: 'none',
    fontWeight: 400,
  },
};

export default typography;
