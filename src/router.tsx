import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>hello</div>,
  },
]

const router = createBrowserRouter([...privateRoutes, ...publicRoutes])

export const Router = () => {
  return <RouterProvider router={router} />
}
