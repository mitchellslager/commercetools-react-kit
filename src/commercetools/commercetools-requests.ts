/**
 * Please write a function for each Commercetools api call,
 * so these can be mocked in the unit tests.
 */
import { client, categoriesService, productProjectionsSearchService } from './commercetools-client'

export const getAllCategories = () =>
  client
    .execute({
      uri: categoriesService.build(),
      method: 'GET',
    })
    .then((r) => r.body)

export const searchProductProjections = (
  filter: string[],
  sort: Array<{ by: string; direction: 'asc' | 'desc' }>,
  page: number,
  perPage: number
) =>
  client
    .execute({
      uri: productProjectionsSearchService
        .parse({
          filterByFacets: filter,
          facet: [
            // Categories
            'categories.id as categories counting products',
            // Designer attributes
            'variants.attributes.designer.key as designer-keys counting products',
            'variants.attributes.designer.label as designer-labels counting products',
            // Color attributes
            'variants.attributes.color.key as color-keys counting products',
            'variants.attributes.color.label.en as color-labels counting products',
          ],
          sort,
          page,
          perPage,
          markMatchingVariants: true,
        })
        .build(),
      method: 'GET',
    })
    .then((r) => r.body)
