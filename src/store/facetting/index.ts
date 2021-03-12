import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFacettingState, IPageState, SortOption } from './types'
import { ILabeledValue } from '~src/utils/filter'

const initialState: IFacettingState = {
  filter: {
    designer: [],
    categories: [],
    colors: [],
  },
  sort: 'createdAt desc',
  page: {
    limit: 10,
    offset: 1,
    total: 200,
  },
}

export const facettingSlice = createSlice({
  name: 'facetting',
  initialState,
  reducers: {
    setFilterOption: (state, action: PayloadAction<ILabeledValue<string>>) => ({
      ...state,
      filter: {
        ...state.filter,
        [action.payload.label]: [
          ...(state as any).filter[action.payload.label],
          action.payload.value,
        ],
      },
    }),
    removeFilterOption: (state, action: PayloadAction<ILabeledValue<string>>) => ({
      ...state,
      filter: {
        ...state.filter,
        [action.payload.label]: ((state as any).filter[action.payload.label] as string[]).filter(
          (x) => x !== action.payload.value
        ),
      },
    }),
    resetFilterOptions: (state) => ({
      ...state,
      filter: {
        ...initialState.filter,
      },
    }),
    setSortOption: (state, action: PayloadAction<SortOption>) => ({
      ...state,
      sort: action.payload,
    }),
    updatePagination: (state, action: PayloadAction<Partial<IPageState>>) => ({
      ...state,
      page: {
        ...state.page,
        ...action.payload,
      },
    }),
  },
})

export const {
  updatePagination,
  setFilterOption,
  removeFilterOption,
  resetFilterOptions,
  setSortOption,
} = facettingSlice.actions

export default facettingSlice.reducer
