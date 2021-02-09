import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(8),
    padding: `${theme.spacing(4)}px 0`,
  },
  columnTitle: {
    marginBottom: theme.spacing(1),
  },
  list: {
    paddingLeft: 0,
    margin: 0,
    listStyle: 'none',
  },
  table: {
    width: '100%',
  },
}))

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Box my={2}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Typography variant="h6" component="h4" className={classes.columnTitle}>
                General
              </Typography>
              <ul className={classes.list}>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Jobs</li>
                <li>Sustainability</li>
              </ul>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" component="h4" className={classes.columnTitle}>
                Customer service
              </Typography>
              <ul className={classes.list}>
                <li>Help</li>
                <li>Shipping costs</li>
                <li>Exchanges and Returns</li>
                <li>Order Payments</li>
                <li>My orders</li>
              </ul>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" component="h4" className={classes.columnTitle}>
                Contact us
              </Typography>
              <ul className={classes.list}>
                <li>Chat with us</li>
                <li>Call +31 555 2288333</li>
                <li>Send us a message on WhatsApp</li>
              </ul>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" component="h4" className={classes.columnTitle}>
                Availability
              </Typography>
              <table className={classes.table}>
                <tbody>
                  <tr>
                    <td>Monday to friday</td>
                    <td>09:00 - 20:00</td>
                  </tr>
                  <tr>
                    <td>Saturday and sunday</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
