import { Grid } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProductItem />
      </Grid>
    </Grid>
  )
}

export default ProductList
