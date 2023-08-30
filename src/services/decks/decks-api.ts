import { baseApi } from '@/services/base-api.ts'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, GetDecksArgs>({
        query: args => {
          return {
            url: `v1/decks`,
            method: 'GET',
            params: args,
          }
        },
        providesTags: ['Decks'],
      }),
      createDeck: builder.mutation<any, any>({
        query: ({ name }) => {
          return {
            url: `v1/decks`,
            method: 'POST',
            body: { name },
          }
        },
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi

type GetDecksArgs = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
}

export type Pagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}

export type Author = {
  id: string
  name: string
}

export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover?: string | null
  rating: number
  isDeleted?: boolean
  isBlocked?: boolean
  created: string
  updated: string
  cardsCount: number
  author: Author
}

export type DecksResponse = {
  maxCardsCount: number
  pagination: Pagination
  items: Deck[]
}
