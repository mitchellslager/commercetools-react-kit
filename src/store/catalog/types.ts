import { Category, Product, ProductProjection } from '@commercetools/platform-sdk'

export interface ICatalogState {
  products: ProductProjection[]
  categories: Category[]
}
