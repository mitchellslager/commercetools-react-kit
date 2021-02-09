import { Box, Container, Link, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { RootState } from '~src/store'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    zIndex: theme.zIndex.appBar,
  },
  list: {
    margin: `0 -10px`,
  },
  link: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    padding: '0 10px',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  },
}))

const NavigationMenu: React.FunctionComponent = () => {
  const classes = useStyles()
  const categories = useSelector((state: RootState) => state.catalog.categories)
  const filtered = categories.filter((category) => !category.ancestors.length)

  return (
    <Toolbar color="primary" variant="dense" disableGutters className={classes.root}>
      <Container maxWidth="lg">
        <Box className={classes.list}>
          {filtered.map((category) => (
            <Link
              key={category.id}
              to={`category/${category.slug.en}`}
              component={RouterLink}
              className={classes.link}
            >
              {category.name.en}
            </Link>
          ))}
        </Box>
      </Container>
    </Toolbar>
  )
}

export default NavigationMenu
