import path from 'path'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import ImageminPlugin from 'imagemin-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import autoprefixer from 'autoprefixer'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import flexbugs from 'postcss-flexbugs-fixes'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import Dotenv from 'dotenv-webpack'
import { ConfigurationFactory, DefinePlugin } from 'webpack'

// Standard file path resolves
const source = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')
const staticFiles = path.resolve(__dirname, 'static')

const isDevelopment = process.env.NODE_ENV !== 'production'
const isTesting = process.env.NODE_ENV === 'test'

process.env.BROWSERSLIST_ENV = process.env.NODE_ENV

const configFactory: ConfigurationFactory = (_, argv) => ({
  entry: {
    main: ['core-js', 'regenerator-runtime/runtime', path.join(source, 'main.tsx')],
    sentry: [path.join(source, 'sentry.ts')],
  },
  output: {
    filename: '[name].js',
    path: dist,
    publicPath: staticFiles,
    sourceMapFilename: 'sourcemaps/[file].map',
  },
  devtool: argv.mode === 'production' ? false : 'source-map',
  devServer: {
    historyApiFallback: {
      index: staticFiles,
    },
    contentBase: '/',
    port: 8080,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: [source],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },

      {
        test: /\.s?css$/,
        use: [
          argv.mode === 'production' ? MiniCssExtractPlugin.loader : { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [flexbugs, autoprefixer],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true,
            },
          },
        ],
      },
      // Only .woff & .woff2 are required for modern browsers (IE9+)
      // for complete support table see: https://caniuse.com/#search=woff
      {
        test: /\.(png|jpe?g|gif|svg|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[md5:hash:hex:8]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules')],
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  optimization:
    (argv.mode === 'production' && {
      splitChunks: {
        cacheGroups: {
          vendors: {
            // Don't include sentry in the vendor bundle to be able to compile sentry to a isolated file.
            test: /node_modules\/(?!@sentry\/)/i,
            priority: 1,
            name: 'vendors',
            enforce: true,
            chunks: 'initial',
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: {
              annotation: true,
            },
          },
        }),
      ],
    }) ||
    {},
  plugins: [
    new Dotenv(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(argv.mode),
      __DEV__: JSON.stringify(argv.mode === 'development'),
      SENTRY_DSN_FRONTEND: JSON.stringify(process.env.SENTRY_DSN_FRONTEND),
      SENTRY_ENVIRONMENT: JSON.stringify(process.env.SENTRY_ENVIRONMENT),
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './static', to: '.' }],
    }),
    isDevelopment && new ForkTsCheckerWebpackPlugin({}),
    new ImageminPlugin({
      disable: argv.mode !== 'production',
      svgo: {
        plugins: [{ convertPathData: false }, { removeViewBox: false }],
      },
    }),

    new HTMLWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: path.resolve(dist, 'index.html'),
      template: path.resolve(__dirname, 'templates', 'index.html'),
      favicon: path.resolve(staticFiles, 'favicons', 'favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    isDevelopment && !isTesting && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
})

export default configFactory
