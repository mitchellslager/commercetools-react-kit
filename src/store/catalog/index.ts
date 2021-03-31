import { ProductProjection, Category } from '@commercetools/platform-sdk'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICatalogState, IFacets } from './types'

const initialState: ICatalogState = {
  products: [],
  categories: [],
  facets: {
    categories: [],
    designer: [],
    colors: [],
  },
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductProjection[]>) => {
      state.products = action.payload
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
    setFacets: (state, action: PayloadAction<IFacets>) => ({
      ...state,
      facets: action.payload,
    }),
  },
})

export const { setProducts, setCategories, setFacets } = catalogSlice.actions

export const selectProducts = (state: ICatalogState) => state.products
export const selectCategories = (state: ICatalogState) => state.categories

export default catalogSlice.reducer
