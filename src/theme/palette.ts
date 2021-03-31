import { blue, green, grey, indigo, orange, pink, red } from '@material-ui/core/colors'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const palette: PaletteOptions = {
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  },
  background: {
    paper: '#FFFFFF',
    default: grey[50],
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
  },
  warning: {
    light: orange[300],
    main: orange[500],
    dark: orange[700],
  },
  info: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
  },
  primary: {
    light: indigo[300],
    main: indigo[500],
    dark: indigo[700],
  },
  secondary: {
    light: pink.A200,
    main: pink.A400,
    dark: pink.A700,
  },
}

export default palette
