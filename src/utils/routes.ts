import { useRouteMatch } from 'react-router-dom'

export const HOME_ROUTE = '/'
export const PRODUCT_ROUTE = '/product/:slug'
export const CATEGORY_ROUTE = '/category/:slug'
export const ACCOUNT_ROUTE = '/account/'
export const REGISTER_ROUTE = '/register/'

const route = {
  HOME_ROUTE: 'Overview',
  PRODUCT_ROUTE: 'Product detail page',
  ACCOUNT_ROUTE: 'My account',
  REGISTER_ROUTE: 'Register account',
}

export default route

export const useMatch = () => {
  return useRouteMatch()
}
