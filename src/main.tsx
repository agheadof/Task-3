import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import About from './pages/About/About'
import Academics from './pages/Academics/Academics'
import Home from './pages/Home/Home'
import Admissions from './pages/Admissions/Admissions'
import StudentLife from './pages/StudentLife/StudentLife'
import Contact from './pages/Contact/Contact'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path:'academics',
      element:<Academics/>
    },
    {
      path:'admissions',
      element:<Admissions/>
    },
    {
      path:'studentlife',
      element:<StudentLife/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
