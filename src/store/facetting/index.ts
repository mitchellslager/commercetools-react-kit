import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFacettingState } from './types'
import { ILabeledValue } from '~src/utils/filter'

const initialState: IFacettingState = {
  filter: {
    designer: [],
    categories: [],
    colors: [],
  },
  sort: 'createdAt desc',
  page: {
    limit: 20,
    offset: 0,
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
    setSortOption: (state, action: PayloadAction<string>) => ({
      ...state,
      sort: action.payload,
    }),
  },
})

export const { setFilterOption, removeFilterOption, setSortOption } = facettingSlice.actions

export default facettingSlice.reducer
