import { Category, ProductProjection } from '@commercetools/platform-sdk'

export interface IFacetOption {
  key: string
  label: string
  count?: number
  productCount?: number
}

export interface IFacets {
  categories: IFacetOption[]
  designer: IFacetOption[]
  colors: IFacetOption[]
}

export interface ICatalogState {
  products: ProductProjection[]
  categories: Category[]
  facets: IFacets
}
