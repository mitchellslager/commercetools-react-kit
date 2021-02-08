import { common, grey } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  //   palette: {
  //      primary:
  //   },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: common['white'],
        },
      },
    },
    MuiAppBar: {
      root: {
        borderBottom: `1px solid ${grey[200]}`,
      },
    },
    MuiToolbar: {
      dense: {
        borderBottom: `1px solid ${grey[200]}`,
      },
    },
    MuiDialog: {
      paper: {
        width: 600,
      },
    },
    MuiDialogContent: {
      root: {
        padding: 24,
      },
    },
  },
})

export default theme
