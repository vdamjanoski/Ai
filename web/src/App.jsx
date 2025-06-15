import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from "./pages/Root"
import Homepage from './pages/Homepage'
import ProtectRoute from './components/ProtectRoute'
import Login from './pages/Login'
import Pocva from './pages/Pocva'
import Signin from './pages/Signin'
import PocvaChat from './pages/PocvaChat'

const router = createBrowserRouter([
  {
    path:`/`,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'signin',
        element: <Signin />
      },
      {
        path: `login`,
        element: <Login />
      },
      {
        path: `pochva`,
        element: <Pocva />
      },
      {
        element: <ProtectRoute />,
        children: [
          {index: true,
          element: <Homepage />},
          {path: `pocva-chat`,
            element: <PocvaChat/>
          }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
