import { Box, Container } from '@material-ui/core'
import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { HOME_ROUTE } from '~src/utils/routes'
import ProductList from './ProductList'

const ProductOverviewPage: React.FunctionComponent = () => {
  let match = useRouteMatch({
    path: HOME_ROUTE,
    exact: true,
  })

  if (!match) {
    return null
  }

  return (
    <Box my={2}>
      <Container maxWidth="lg">
        <ProductList />
      </Container>
    </Box>
  )
}

export default ProductOverviewPage
