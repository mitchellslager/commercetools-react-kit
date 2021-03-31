import { grey } from '@material-ui/core/colors'
import { Overrides } from '@material-ui/core/styles/overrides'
import '../'

export const MuiAppBar: Overrides['MuiAppBar'] = {
  root: {
    borderBottom: `1px solid ${grey[200]}`,
  },
}

export const MuiToolbar: Overrides['MuiToolbar'] = {
  dense: {
    borderBottom: `1px solid ${grey[200]}`,
  },
}
