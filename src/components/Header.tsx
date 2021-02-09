import {
  AppBar,
  Badge,
  Container,
  Dialog,
  IconButton,
  makeStyles,
  Toolbar,
  useTheme,
} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import AccountIcon from '@material-ui/icons/AccountCircle'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import LoginPage from './Account/LoginPage'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.common.black,
    textDecoration: 'none',
    marginRight: 'auto',
    outline: 'none',
  },
}))

const Header: React.FunctionComponent = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [openDialog, setOpenDialog] = useState(false)
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  let history = useHistory()

  const goToRegisterPage = () => {
    setOpenDialog(false)
    history.push('/register')
  }

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar color="primary" disableGutters>
        <Container className={classes.root}>
          <Link to="/" className={classes.title}>
            Commercetools React
          </Link>
          <IconButton color="inherit" onClick={() => setOpenDialog(!openDialog)}>
            <AccountIcon />
          </IconButton>
          <Badge badgeContent={4} color="secondary">
            <ShoppingBasketIcon />
          </Badge>
        </Container>
      </Toolbar>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="md"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <LoginPage handleRegisterClick={goToRegisterPage} />
      </Dialog>
    </AppBar>
  )
}

export default Header
