import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { DETAIL_ROUTE } from '~src/utils/routes'
import BackButton from '../BackButton'

const useStyles = makeStyles({
  image: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
})

const ProductDetailPage: React.FunctionComponent = () => {
  const classes = useStyles()
  let match = useRouteMatch(DETAIL_ROUTE)

  if (!match) {
    return null
  }

  return (
    <Box my={2}>
      <Container maxWidth="lg">
        <Box mb={2}>
          <BackButton>Back to overview</BackButton>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img
              src="https://placehold.co/600x400"
              alt="Product image"
              width="500"
              height="300"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <h2>Product detail page</h2>
            <Rating name="read-only" value={2} readOnly />
            <Typography>
              In sed urna lacinia, finibus nisi ut, aliquet mi. Praesent porttitor ullamcorper
              purus, ut mattis orci pulvinar at. Sed maximus felis ut felis sagittis, nec
              sollicitudin tortor tristique. Nulla tempus, neque sed pharetra scelerisque, risus
              diam semper dui, hendrerit vulputate velit enim non nibh. Vivamus id viverra quam.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ProductDetailPage
