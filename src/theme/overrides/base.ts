import { Overrides } from '@material-ui/core/styles/overrides'

export const MuiCssBaseline: Overrides['MuiCssBaseline'] = {
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
}
