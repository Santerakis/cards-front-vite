import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Loader } from '@/components/ui/loader/Loader.tsx'
import { DecksPage } from '@/pages/decks/decks-page.tsx'
import { SignInPage } from '@/pages/sign-in/sign-in-page.tsx'
import { useMeQuery } from '@/services/auth/auth-api.ts'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignInPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DecksPage />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoute() {
  const { data, isLoading, error } = useMeQuery()

  if (isLoading) return <Loader />
  const isAuthenticated = !!data

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
