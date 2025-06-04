import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:`/`,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: `login`,
        element: <Login />
      },
      {
        element: <ProtectRoute />,
        children: [
          {index: true,
          element: <Homepage />}
        ]
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
