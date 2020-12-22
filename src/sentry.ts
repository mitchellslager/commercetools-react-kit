import * as Sentry from '@sentry/browser'

interface SentryConfig {
  dsn: string
  release: string
}

declare global {
  interface Window {
    sentryConfig: SentryConfig
    sentryRaiseException: CallableFunction
  }
}

declare const window: Window

if ('sentryConfig' in window) {
  Sentry.init(window.sentryConfig)
}

// This method is used for testing the sentry integration.
window.sentryRaiseException = () => {
  Sentry.captureException(new Error('Testing Sentry integration'))
}
