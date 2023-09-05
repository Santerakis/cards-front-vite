import { baseApi } from '@/services/base-api.ts'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      me: builder.query<any, void>({
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
      login: builder.mutation<any, any>({
        query: args => {
          return {
            url: `v1/auth/login`,
            method: 'POST',
            params: args,
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useMeQuery } = authApi
