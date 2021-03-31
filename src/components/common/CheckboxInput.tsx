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
  count,
  onChange,
}: {
  checked: boolean
  label: string
  value: string
  count: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  const classes = useStyles()
  const numberOfProducts = count && `(${count?.toString()})`

  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          value={value}
          checked={checked}
          disableRipple
          className={classes.control}
          onChange={onChange}
        />
      }
      value={value}
      label={`${label} ${numberOfProducts ?? ''}`}
      className={classes.root}
    />
  )
}

export default CheckboxInput
