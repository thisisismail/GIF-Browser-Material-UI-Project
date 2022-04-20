import { createTheme } from '@mui/material/styles';

const themeKoe = createTheme(
  {
    palette: {
      type: 'light',
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#558b2f',
      },
      background: {
        default: '#fafafa',
        paper: '#ffffff',
      },
      text: {
        primary: '#263238',
        secondary: '#2e7d32',
        disabled: '#aaaaaa',
      },
    },
    props: {
      MuiAppBar: {
        color: 'transparent',
      },
    },
  }
)

  export default themeKoe;