// import { common, grey } from '@material-ui/core/colors'
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import palette from './palette'
import * as overrides from './overrides'

const themeOptions: ThemeOptions = {
  palette,
  overrides,
  props: {
    MuiAccordion: {
      square: true,
      elevation: 0,
    },
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
    MuiButton: {
      disableElevation: true,
    },
    MuiIconButton: {
      disableFocusRipple: true,
      disableTouchRipple: true,
    },
  },
}

const theme = createMuiTheme(themeOptions)

export default theme
