import { Product, Category } from '@commercetools/platform-sdk'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICatalogState } from './types'

const initialState: ICatalogState = {
  products: [],
  categories: [],
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
  },
})

export const { setProducts, setCategories } = catalogSlice.actions

export const selectProducts = (state: ICatalogState) => state.products
export const selectCategories = (state: ICatalogState) => state.categories

export default catalogSlice.reducer
