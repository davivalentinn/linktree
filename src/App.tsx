import { createBrowserRouter } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css';
//Importando paginas
import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { NetWorks } from './pages/networks'
import { Private } from './routes/private';

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
    element: <Private><Admin /></Private>
  },
  {
    path: '/admin/networks',
    element: <Private><NetWorks /></Private>
  },
])

export {router}
