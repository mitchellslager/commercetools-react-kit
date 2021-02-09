import { Box, Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Facetting from './Filters'
import ProductList from './ProductList'
import { queryProducts, searchProduct } from '~src/commercetools/commercetools-requests'
import { setProducts } from '~src/store/catalog'
import { useRootState } from '~src/utils/hooks'
import NavigationMenu from '../NavigationMenu'

const ProductOverviewPage: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  const {
    facetting: { sort },
  } = useRootState()

  const designers = ['"gabs"', '"dkny"']

  useEffect(() => {
    queryProducts(
      // 'masterData(current(name is defined))',
      `masterData(current(masterVariant(attributes(name="designer" and value(key in (${designers}))))))`,
      sort
    )
      .then((res) => {
        console.log(res.results)
        dispatch(setProducts(res.results))
      })
      .catch((err) => console.log(err))
  }, [sort])

  return (
    <>
      <NavigationMenu />
      <Box my={2}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item md={3}>
              <Facetting />
            </Grid>
            <Grid item md={9}>
              <ProductList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ProductOverviewPage
