import {
  Box,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import TextInput from '../common/TextInput'

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
  },
  control: {
    marginBottom: theme.spacing(3),
  },
  actions: {
    marginTop: theme.spacing(4),

    '& .MuiTypography-body1': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}))

const LoginPage: React.FunctionComponent<{ handleRegisterClick: () => void }> = ({
  handleRegisterClick,
}) => {
  const classes = useStyles()

  type LoginValues = {
    email: string
    password: string
  }

  const initialValues: LoginValues = {
    email: '',
    password: '',
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid emailaddress').required('Email is a required field'),
    password: Yup.string().required('Password is a required field'),
  })

  const handleSubmit = (values: LoginValues) => {
    console.log(values)
  }

  return (
    <>
      <DialogTitle id="max-width-dialog-title">Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          If you already have an account, you can sign in. Otherwise, please register an account. By
          registering we'll remember your info which will make your next visit easier and faster.
        </DialogContentText>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <Form action="/" className={classes.form}>
            <TextInput type="email" name="email" label="Email" className={classes.control} />
            <TextInput type="password" name="password" label="Password" />
            <Box display="flex" alignItems="center" className={classes.actions}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
              <Typography>or</Typography>
              <Link
                component="button"
                variant="body2"
                color="secondary"
                onClick={handleRegisterClick}
              >
                Register
              </Link>
            </Box>
          </Form>
        </Formik>
      </DialogContent>
    </>
  )
}

export default LoginPage
