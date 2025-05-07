import { createBrowserRouter } from 'react-router-dom'
//Importando components
import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { NetWorks } from './pages/networks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/networks',
    element: <NetWorks />
  },
])

export {router}
