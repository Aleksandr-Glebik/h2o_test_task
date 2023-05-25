import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

import Layout from './components/Layout/Layout'
import UsersPage from './Pages/UsersPage/UsersPage'
const styleForEmptyPage ={
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/calendar",
        element: <div style={styleForEmptyPage}>calendar</div>,
      },
      {
        path: "/note",
        element: <div style={styleForEmptyPage}>note</div>,
      },
      {
        path: "/data",
        element: <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>data</div>,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/money",
        element: <div style={styleForEmptyPage}>money</div>,
      },
      {
        path: "/statistic",
        element: <div style={styleForEmptyPage}>statistic</div>,
      },
      {
        path: "/settings",
        element: <div style={styleForEmptyPage}>settings</div>,
      },
    ],
  },
])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(<RouterProvider router={router} />)

