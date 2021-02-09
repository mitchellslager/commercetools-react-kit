import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient } from '@commercetools/sdk-client'
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk'

export const projectKey = 'react-components-kit'

const authMiddleware = createAuthMiddlewareForClientCredentialsFlow({
  host: process.env.CTP_AUTH_URL,
  projectKey,
  credentials: {
    clientId: process.env.CTP_CLIENT_ID,
    clientSecret: process.env.CTP_CLIENT_SECRET,
  },
  scopes: ['manage_project:react-components-kit'],
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
