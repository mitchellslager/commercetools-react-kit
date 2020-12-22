import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { getAllProducts } from './commercetools/commercetools-requests'
import ProductDetailPage from './components/Catalog/ProductDetailPage'
import ProductOverviewPage from './components/Catalog/ProductOverviewPage'
import Header from './components/Header'
import theme from './theme'

const App: React.FunctionComponent = () => {
  useEffect(() => {
    getAllProducts()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  })

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <ProductOverviewPage />
          <ProductDetailPage />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
