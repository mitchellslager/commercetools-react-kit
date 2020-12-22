import React from 'react'
import { AppBar, Badge, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const Header: React.FunctionComponent = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Overview
        </Typography>
        <Button color="inherit">Login</Button>
        <Badge badgeContent={4} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  )
}

export default Header
