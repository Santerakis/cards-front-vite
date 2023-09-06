import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const baseUrl = `https://api.flashcards.andrii.es`

// Create a new mutex
const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
})

export const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  // console.log(result)
  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          { url: 'v1/auth/refresh-token', method: 'POST' },
          api,
          extraOptions
        )

        // console.log(refreshResult)
        if (refreshResult?.meta?.response?.status === 204) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          // globalNavigate('/login')
          // window.location.hr ef = '/login'
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
