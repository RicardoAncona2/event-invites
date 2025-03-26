'use client';
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FBA0E3',      // Soft pink
      light: '#F472B6',      // Slightly deeper pink
      dark: '#D81B60',       // Richer, contrasting pink
    },
    secondary: {
      main: '#FF4081',       // More vibrant contrast color for the secondary palette
    },
    background: {
      default: '#fff',       // Clean, classic white
      paper: '#f8f8f8',      // Light gray with a little more contrast for the paper background
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
          backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Slightly transparent white background
        },
      },
    },
  },
})
