import * as Sentry from '@sentry/browser'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

if (SENTRY_DSN_FRONTEND) {
  try {
    Sentry.init({
      dsn: SENTRY_DSN_FRONTEND,
      environment: SENTRY_ENVIRONMENT,
    })
  } catch (err) {
    if (__DEV__) {
      console.error(err)
    }
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main')
)
