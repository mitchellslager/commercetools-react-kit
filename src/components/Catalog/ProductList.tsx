import { Box, FormControl, Grid, MenuItem, Select, Typography } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import ProductItem from './ProductItem'
import { setSortOption } from '~src/store/facetting'
import { SortOption } from '~src/store/facetting/types'
import { useRootState } from '~src/utils/hooks'

const ProductList: React.FunctionComponent = () => {
  const {
    catalog: { products },
    facetting: { sort },
  } = useRootState()
  const dispatch = useDispatch()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSortOption(event.target.value as SortOption))
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" component="h1">
            All products
          </Typography>
          <FormControl style={{ minWidth: 200 }}>
            <Select variant="outlined" value={sort} onChange={handleChange}>
              <MenuItem value="score desc">Popularity</MenuItem>
              <MenuItem value="createdAt desc">Newest products</MenuItem>
              <MenuItem value="price asc">Lowest price</MenuItem>
              <MenuItem value="price desc">Highest price</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      {products &&
        products.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
    </Grid>
  )
}

export default ProductList
