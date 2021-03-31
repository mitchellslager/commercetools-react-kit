import { Overrides } from '@material-ui/core/styles/overrides'

export const MuiDialog: Overrides['MuiDialog'] = {
  paper: {
    width: 600,
  },
}

export const MuiDialogContent: Overrides['MuiDialogContent'] = {
  root: {
    padding: 24,
  },
}
