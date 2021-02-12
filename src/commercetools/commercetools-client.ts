import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient } from '@commercetools/sdk-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

export const projectKey = process.env.CTP_PROJECT_KEY

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

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

export const apiRoot = createApiBuilderFromCtpClient(ctpClient)
