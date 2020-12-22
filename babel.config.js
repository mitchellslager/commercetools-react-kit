module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV)

  return {
    presets: ['@labd/babel-preset-react'],
    // Only enable react-refresh during development
    plugins: [!api.env('production') && !api.env('test') && 'react-refresh/babel'].filter(Boolean),
  }
}
