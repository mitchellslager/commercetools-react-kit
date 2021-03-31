import { Box, Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Filters, { FilterBlockConfig } from './Filters'
import ProductList from './ProductList'
import PaginationRow from './PaginationRow'
import NavigationMenu from '../NavigationMenu'
import { setProducts, setFacets } from '~src/store/catalog'
import { useRootState } from '~src/utils/hooks'
import { searchProductProjections } from '~src/commercetools/commercetools-requests'
import {
  buildFacettingOptions,
  buildFilterQuery,
  buildSortingOption,
  filterOptions,
} from '~src/utils/filter'
import { updatePagination } from '~src/store/facetting'

const ProductOverviewPage: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  const {
    catalog: { categories, facets },
    facetting: { filter, sort, page },
  } = useRootState()

  const options = filterOptions(facets, categories)

  const filterBlockConfigs: FilterBlockConfig[] = [
    {
      title: 'Categories',
      name: 'categories',
      options: options.categories,
      visibleAmount: 5,
      defaultExpanded: true,
    },
    {
      title: 'Designer',
      name: 'designer',
      options: options.designer,
      defaultExpanded: true,
    },
    {
      title: 'Colors',
      name: 'colors',
      options: options.colors,
      defaultExpanded: true,
    },
  ]

  useEffect(() => {
    searchProductProjections(
      buildFilterQuery(filter),
      [buildSortingOption(sort)],
      page.offset,
      page.limit
    )
      .then((res) => {
        dispatch(setProducts(res.results))
        dispatch(
          updatePagination({
            limit: res.limit,
            total: res.total,
          })
        )
        return res
      })
      .then((res) => {
        const categoriesFacets = buildFacettingOptions(res.facets['categories'])
        const designerFacets = buildFacettingOptions(res.facets['designer-labels'])
        const colorFacets = buildFacettingOptions(res.facets['color-labels'])

        dispatch(
          setFacets({
            categories: categoriesFacets,
            designer: designerFacets,
            colors: colorFacets,
          })
        )
      })
      .catch((err) => console.log(err))
  }, [sort, filter.colors, filter.designer, filter.categories, page.offset])

  return (
    <>
      <NavigationMenu />
      <Box my={2}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item sm={3}>
              <Filters filterBlockConfigs={filterBlockConfigs} />
            </Grid>
            <Grid item sm={9}>
              <PaginationRow />
              <ProductList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default ProductOverviewPage
