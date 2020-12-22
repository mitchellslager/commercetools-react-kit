import '@testing-library/jest-dom/extend-expect'

process.env.BABEL_ENV = 'test' // Make sure to load the appropriate babel plugins
process.env.NODE_ENV = 'test' // set the proper node env
global.__DEV__ = false

// For async tests, catch all errors here so we don't have to try / catch
// everywhere for safety
process.on('unhandledRejection', error => {
  console.log(error)
})


