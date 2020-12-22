import React from 'react'
import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Link as RouterLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  actions: {
    '& > .MuiButton-root': {
      marginRight: theme.spacing(1),
    },
  },
}))

const ProductItem: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <Paper elevation={0}>
      <img
        src="https://placehold.co/500x300"
        alt="Product image"
        width="500"
        height="300"
        className={classes.image}
      />
      <Box p={2}>
        <Typography variant="h6" component="span">
          € 24,95
        </Typography>
        <Typography variant="subtitle1" component="h3">
          Product name
        </Typography>
        <Typography variant="body2">Product description consectetur adipiscing elit</Typography>
        <Box className={classes.actions} mt={2}>
          <Button variant="contained" color="primary" endIcon={<AddShoppingCartIcon />}>
            Add to cart
          </Button>
          <Button variant="contained" color="secondary" component={RouterLink} to="detail">
            Go to product
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

export default ProductItem
