import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Landing from '../pages/Landing/Landing'
import Mes from '../pages/Mes/Mes'
import Collage from '../pages/Collage/Collage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'mes-1', element: <Mes mesNum={1} /> },
      { path: 'mes-2', element: <Mes mesNum={2} /> },
      { path: 'mes-3', element: <Mes mesNum={3} /> },
      { path: 'mes-4', element: <Mes mesNum={4} /> },
      { path: 'collage', element: <Collage /> },
    ],
  },
])
