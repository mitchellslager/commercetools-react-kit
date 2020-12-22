import { useRouteMatch } from 'react-router-dom'

export const HOME_ROUTE = '/'
export const DETAIL_ROUTE = '/detail/'
export const ACCOUNT_ROUTE = '/account/'

const route = {
  HOME_ROUTE: 'Overview',
  DETAIL_ROUTE: 'Detail page',
  ACCOUNT_ROUTE: 'My account',
}

export default route

export const useMatch = () => {
  return useRouteMatch()
}
