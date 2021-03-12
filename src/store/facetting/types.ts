export type SortOption = 'default' | 'score desc' | 'createdAt desc' | 'price desc' | 'price asc'

export interface IPageState {
  limit: number
  offset: number
  total: number
}

export interface IFilterState {
  designer: string[]
  categories: string[]
  colors: string[]
}

export interface IFacettingState {
  filter: IFilterState
  sort: SortOption
  page: IPageState
}
