import { Category, TermFacetResult } from '@commercetools/platform-sdk'
import { IFacetOption, IFacets } from '~src/store/catalog/types'
import { IFilterState, SortOption } from '~src/store/facetting/types'
import { byLabel } from './sort'
// import { IFilterState } from '~src/store/facetting/types'

export interface ILabeledValue<T> {
  label: string
  value: T
}

export interface IFilterOptions {
  designer: ILabeledValue<string>[]
  categories: ILabeledValue<string>[]
  colors: ILabeledValue<string>[]
}

const mapCategoriesToFilterOptions = (categories: Category[]) => {
  // We need to find the product count for each category in the facetting options
  return categories
    .filter((c) => !c.ancestors.length)
    .map((value) => ({
      label: value.name.en,
      value: value.id,
    }))
}

const mapFacetsToFilterOptions = (facets: IFacetOption[]) => {
  return facets
    .map((facet) => ({
      label: facet.label,
      value: facet.key,
      count: facet.productCount,
    }))
    .sort(byLabel)
}

export const filterOptions = (facets: IFacets, categories: Category[]) => {
  const categoryOptions = mapCategoriesToFilterOptions(categories)
  const designerOptions = mapFacetsToFilterOptions(facets['designer'])
  const colorOptions = mapFacetsToFilterOptions(facets['colors'])

  return {
    categories: categoryOptions,
    designer: designerOptions,
    colors: colorOptions,
  }
}

export const buildFilterQuery = (filter: IFilterState) => {
  let queries = []

  if (filter.categories.length) {
    queries.push(`categories.id: ${filter.categories.map((item) => `subtree("${item}")`)}`)
  }

  if (filter.colors.length) {
    queries.push(`variants.attributes.color.label.en:"${filter.colors.join('","')}"`)
  }

  if (filter.designer.length) {
    queries.push(`variants.attributes.designer.label:"${filter.designer.join('","')}"`)
  }

  return queries
}

export const buildSortingOption = (sort: SortOption): { by: string; direction: 'asc' | 'desc' } => {
  return {
    by: sort.split(' ')[0],
    direction: sort.split(' ')[1] as 'asc' | 'desc',
  }
}

export const buildFacettingOptions = (facetLabels: TermFacetResult): IFacetOption[] => {
  const result = facetLabels.terms.map((item) => ({
    key: item.term,
    label: item.term,
    count: item.count,
    productCount: item.productCount,
  }))

  return result
}
