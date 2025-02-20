import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ec4899',
      light: '#f9a8d4',
      dark: '#db2777',
    },
    secondary: {
      main: '#f472b6',
    },
    background: {
      default: '#fff',
      paper: '#ffffff99',
    },
  },
  typography: {
    fontFamily: 'var(--font-playfair-display), serif',
    h1: {
      fontSize: '3.5rem',
      '@media (min-width:600px)': {
        fontSize: '7rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      '@media (min-width:600px)': {
        fontSize: '3.25rem',
      },
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
  },
})
