import { createApi } from '@reduxjs/toolkit/query/react'

import { customFetchBase } from '@/services/base-api-with-refetch.ts'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
  baseQuery: customFetchBase,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://api.flashcards.andrii.es',
  //   credentials: 'include',
  //   // prepareHeaders: headers => {
  //   //   headers.append('x-auth-skip', 'true')
  //   // },
  // }),
  endpoints: () => ({}),
})
