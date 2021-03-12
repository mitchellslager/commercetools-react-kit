import { Category, TermFacetResult } from '@commercetools/platform-sdk'
import { IFacetOption, IFacets } from '~src/store/catalog/types'
import { IFilterState, SortOption } from '~src/store/facetting/types'
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

const mapCategoriesToFilterOptions = (categories: Category[]): ILabeledValue<string>[] => {
  return categories
    .filter((c) => !c.ancestors.length)
    .map((value) => ({
      label: value.name.en,
      value: value.id,
    }))
}

const mapFacetsToFilterOptions = (facets: IFacetOption[]) => {
  return facets.map((facet) => ({
    label: facet.label,
    value: facet.key,
    count: facet.productCount,
  }))
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
    queries.push(`variants.attributes.color.key:"${filter.colors.join('","')}"`)
  }

  if (filter.designer.length) {
    queries.push(`variants.attributes.designer.key:"${filter.designer.join('","')}"`)
  }

  return queries
}

export const buildSortingOption = (sort: SortOption): { by: string; direction: 'asc' | 'desc' } => {
  return {
    by: sort.split(' ')[0],
    direction: sort.split(' ')[1] as 'asc' | 'desc',
  }
}

export const buildFacettingOptions = (
  facetKeys: TermFacetResult,
  facetLabels: TermFacetResult
): IFacetOption[] => {
  let facets: IFacetOption[] = []
  // We need to make a new object that combines the values from both facet results.
  facetKeys.terms.forEach((facet, index) => {
    let result = {
      key: facet.term,
      label: facetLabels.terms[index].term,
      count: facet.count,
      productCount: facet.productCount,
    }

    facets.push(result)
  })

  return facets
}
