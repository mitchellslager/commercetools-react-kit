import { Category, Product } from '@commercetools/platform-sdk'
import { IFilterState } from '~src/store/facetting/types'

export interface ILabeledValue<T> {
  label: string
  value: T
}

export interface IFilterOptions {
  designer: ILabeledValue<string>[]
  categories: ILabeledValue<string>[]
  colors: ILabeledValue<string>[]
}

const mapAttributeToFilterOptions = (name: string, products: Product[]) => {
  return (
    products
      // 1. Get all attributes with `name`
      .map((p) => p.masterData.current.masterVariant.attributes.find((a) => a.name === name))
      // 2. Map the data to a filter option
      .map((value) => ({
        label: value.value.label.en || value.value.label, // This kinda sucks, is there a better way?
        value: value.value.key,
      }))
      // 3. Remove duplicate entries from final array
      .filter((v, i, a) => a.findIndex((t) => t.value === v.value) === i)
  )
}

const mapCategoriesToFilterOptions = (categories: Category[]) => {
  return categories
    .filter((c) => !c.ancestors.length)
    .map((value) => ({
      label: value.name.en,
      value: value.key,
    }))
}

export const filterOptions = (products: Product[], categories: Category[]): IFilterOptions => {
  const categoryOptions = mapCategoriesToFilterOptions(categories)
  const designerOptions = mapAttributeToFilterOptions('designer', products)
  const colorOptions = mapAttributeToFilterOptions('color', products)

  return {
    designer: designerOptions,
    categories: categoryOptions,
    colors: colorOptions,
  }
}

function getProductAttribute(product: Product, attribute: string) {
  return product.masterData.current.masterVariant.attributes.find((a) => a.name === attribute).value
    .key
}

export const filteredProducts = (products: Product[], filterState: IFilterState) =>
  products.filter(
    (product) =>
      nothingOrIncludes(filterState.designer, getProductAttribute(product, 'designer')) &&
      nothingOrIncludes(filterState.colors, getProductAttribute(product, 'color'))
  )

export const nothingOrIncludes = <T>(list: T[], value: T) => !list.length || list.includes(value)
