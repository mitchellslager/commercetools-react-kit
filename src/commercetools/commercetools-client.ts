import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient } from '@commercetools/sdk-client'
import { createRequestBuilder } from '@commercetools/api-request-builder'

const projectKey = process.env.CTP_PROJECT_KEY

// API request builder
const requestBuilder = createRequestBuilder({ projectKey })
export const productProjectionsService = requestBuilder.productProjections
export const productProjectionsSearchService = requestBuilder.productProjectionsSearch
export const categoriesService = requestBuilder.categories
export const productsService = requestBuilder.products

// Middleware and client
const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: process.env.CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  scopes: [`manage_project:${process.env.CTP_PROJECT_KEY}`],
  fetch,
})

const httpMiddleware = createHttpMiddleware({
  host: process.env.CTP_API_URL,
  fetch,
})

export const client = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})
