import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
