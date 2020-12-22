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
  // host: 'https://auth.europe-west1.gcp.commercetools.com',
  // projectKey,
  // credentials: {
  //   clientId: 'SSAcsDVRsc80nD-UpIulM5C1',
  //   clientSecret: 'onq1hdKUQfIVKPOb6FYBw2BzWkYBnLAT',
  // },
  scopes: ['manage_project:react-components-kit'],
  fetch,
})

const httpMiddleware = createHttpMiddleware({
  host: process.env.CTP_API_URL,
  // host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

export const apiRoot = createApiBuilderFromCtpClient(ctpClient)
