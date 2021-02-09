import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import { useField } from 'formik'
import React, { ChangeEvent } from 'react'
import { ILabeledValue } from '~src/utils/filter'

interface ISelectInput {
  className?: string
  disabled?: boolean
  label: string
  name: string
  options: ILabeledValue<string | number>[]
  minWidth?: number
  type?: 'text' | 'email' | 'phone' | 'password'
}

const SelectInput: React.FC<ISelectInput> = ({
  disabled = false,
  minWidth = 100,
  label,
  options,
  ...props
}) => {
  const [field, meta, helpers] = useField(props)

  const { value } = meta
  const { setValue } = helpers

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => setValue(event.target.value)

  return (
    <FormControl variant="outlined" style={{ minWidth: minWidth }}>
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select variant="outlined" value={value} onChange={handleChange} {...props} label={label}>
        {options.map((o, i) => (
          <MenuItem key={i} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectInput
