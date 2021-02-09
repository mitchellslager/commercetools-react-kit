import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  control: {},
}))

const CheckboxInput = ({
  checked,
  label,
  value,
  onChange,
}: {
  checked: boolean
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const classes = useStyles()

  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          checked={checked}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          disableRipple
          className={classes.control}
          onChange={onChange}
        />
      }
      value={value}
      label={label}
      className={classes.root}
    />
  )
}

export default CheckboxInput
