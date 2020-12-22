/**
 * Please write a function for each Commercetools api call,
 * so these can be mocked in the unit tests.
 */
import { projectKey, apiRoot } from './commercetools-client'

const container = 'order-numbers'
const key = 'order-number'

type OrderNumber = { version?: number; value: number }

export const getAllProducts = () =>
  apiRoot
    .withProjectKey({ projectKey })
    .products()
    .get()
    .execute()
    .then((r) => r.body)

export const increaseOrderNumber = (currentValue: number, version?: number) =>
  apiRoot
    .withProjectKey({ projectKey })
    .customObjects()
    .post({ body: { container, key, value: (currentValue ?? 0) + 1, version } })
    .execute()
    .then<OrderNumber>((r) => r.body)
