import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/services/base-api.ts'
import { decksReducer } from '@/services/decks/decks-slice.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    decks: decksReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
