import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0f1117',
      paper: '#1C2536',
    },
    primary: {
      main: '#3b82f6',
    },
    error: {
      main: '#d32f2f',
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#e2e8f0',
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    bodySmall: {
      fontSize: 13,
      fontWeight: 500,
    },
    label: {
      fontSize: 13,
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1C2536',
        },
      },
    },
  },
});
