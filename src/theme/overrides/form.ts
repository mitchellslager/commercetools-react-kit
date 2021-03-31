import { Overrides } from '@material-ui/core/styles/overrides'
import palette from '../palette'

export const MuiFormControlLabel: Overrides['MuiFormControlLabel'] = {
  label: {
    color: palette.text.primary,
  },
}

export const MuiCheckbox: Overrides['MuiCheckbox'] = {
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}
