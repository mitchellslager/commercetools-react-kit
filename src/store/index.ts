import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from './catalog'
import facettingReducer from './facetting'

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    facetting: facettingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
