/**
 * Please write a function for each Commercetools api call,
 * so these can be mocked in the unit tests.
 */
import { projectKey, apiRoot } from './commercetools-client'

const container = 'order-numbers'
const key = 'order-number'

type OrderNumber = { version?: number; value: number }

export const searchProduct = (filter: string, sort: string) =>
  apiRoot
    .withProjectKey({ projectKey })
    .productProjections()
    .search()
    .get({ queryArgs: { markMatchingVariants: true, sort: sort } })
    .execute()
    .then((r) => r.body)

export const getAllCategories = () =>
  apiRoot
    .withProjectKey({ projectKey })
    .categories()
    .get()
    .execute()
    .then((r) => r.body)

export const queryProducts = (filter: string, sort: string) =>
  apiRoot
    .withProjectKey({ projectKey })
    .products()
    .get({ queryArgs: { where: filter, sort: sort } })
    .execute()
    .then((r) => r.body)

export const getAllProducts = () =>
  apiRoot
    .withProjectKey({ projectKey })
    .products()
    .get()
    .execute()
    .then((r) => r.body)

export const getProductWithKey = (key: string) =>
  apiRoot
    .withProjectKey({ projectKey })
    .products()
    .withKey({ key: key })
    .get()
    .execute()
    .then((r) => r.body)

export const getSortedProducts = (sort: string) =>
  apiRoot
    .withProjectKey({ projectKey })
    .products()
    .get({ queryArgs: { sort: sort } })
    .execute()
    .then((r) => r.body)

export const increaseOrderNumber = (currentValue: number, version?: number) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customObjects()
    .post({ body: { container, key, value: (currentValue ?? 0) + 1, version } })
    .execute()
    .then<OrderNumber>((r) => r.body)
