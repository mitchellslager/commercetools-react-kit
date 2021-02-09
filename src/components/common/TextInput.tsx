import { TextField } from '@material-ui/core'
import { useField } from 'formik'
import React from 'react'

interface ITextInput {
  className?: string
  disabled?: boolean
  label: string
  name: string
  type?: 'text' | 'email' | 'phone' | 'password'
}

const TextInput: React.FC<ITextInput> = ({ disabled = false, label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      error={!!meta.error}
      helperText={meta.error}
      {...field}
      {...props}
    />
  )
}

export default TextInput
