import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createBrowserHistory } from 'history'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'
import { getAllCategories } from './commercetools/commercetools-requests'
import RegisterPage from './components/Account/RegisterPage'
import ProductDetailPage from './components/Catalog/ProductDetailPage'
import ProductOverviewPage from './components/Catalog/ProductOverviewPage'
import Footer from './components/Footer'
import Header from './components/Header'
import { setCategories } from './store/catalog'
import theme from './theme/index'
import { HOME_ROUTE, PRODUCT_ROUTE, REGISTER_ROUTE } from './utils/routes'

const history = createBrowserHistory()

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    getAllCategories()
      .then((res) => dispatch(setCategories(res.results)))
      .catch((err) => console.log(err))
  }, [])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path={HOME_ROUTE}>
              <ProductOverviewPage />
            </Route>
            <Route path={REGISTER_ROUTE}>
              <RegisterPage />
            </Route>
            <Route path={PRODUCT_ROUTE}>
              <ProductDetailPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
