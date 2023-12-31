import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

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
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
