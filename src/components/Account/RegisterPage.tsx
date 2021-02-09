import * as Yup from 'yup'
import { Box, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import SelectInput from '../common/SelectInput'
import TextInput from '../common/TextInput'

const useStyles = makeStyles((theme) => ({
  form: {
    margin: '0 auto',
    maxWidth: 960,
  },
  control: {
    marginBottom: theme.spacing(2),
  },
}))

const RegisterPage: React.FunctionComponent = () => {
  const classes = useStyles()

  type RegisterValues = {
    gender: 'male' | 'female' | ''
    first_name: string
    middle_name: string
    last_name: string
    email: string
    password: string
  }

  const initialValues: RegisterValues = {
    gender: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
  }

  const SignupSchema = Yup.object().shape({
    gender: Yup.string().required(),
    first_name: Yup.string().required('First name is a required field'),
    middle_name: Yup.string(),
    last_name: Yup.string().required('Last name is a required field'),
    email: Yup.string().email('Invalid emailaddress').required('Email is a required field'),
    password: Yup.string().required('Password is a required field'),
  })

  const handleSubmit = (values: RegisterValues) => {
    console.log(values)
  }

  return (
    <Box my={2}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box mb={5}>
              <Typography variant="h4" component="h1" align="center">
                Register account
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
              validateOnChange
            >
              <Form action="/" className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box mb={2}>
                      <Typography variant="h6" component="h2">
                        Account information
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <SelectInput
                      name="gender"
                      label="Gender"
                      minWidth={200}
                      options={[
                        {
                          label: 'Male',
                          value: 'm',
                        },
                        {
                          label: 'Female',
                          value: 'f',
                        },
                      ]}
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextInput
                      type="text"
                      name="first_name"
                      label="First name"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextInput
                      type="text"
                      name="middle_name"
                      label="Middle name"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextInput
                      type="text"
                      name="last_name"
                      label="Last name"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput
                      type="email"
                      name="email"
                      label="Email"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={2}>
                      <Typography variant="h6" component="h2">
                        Billing address
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput
                      type="text"
                      name="street_name"
                      label="Street name"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextInput
                      type="text"
                      name="house_number"
                      label="House number"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <TextInput
                      type="text"
                      name="house_number_extension"
                      label="Extension"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput
                      type="text"
                      name="zipcode"
                      label="Zipcode"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput type="text" name="city" label="City" className={classes.control} />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mb={2}>
                      <Typography variant="h6" component="h2">
                        Password
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput
                      type="text"
                      name="password"
                      label="Password"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput
                      type="text"
                      name="confirm_password"
                      label="Confirm password"
                      className={classes.control}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="flex-end">
                      <Button type="submit" variant="contained" color="primary" size="large">
                        Register
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default RegisterPage
