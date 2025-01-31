import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './components/Home.jsx'
// import Projects from './Projects-Newest-Filters.jsx'
import Projects from './components/Projects-New.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "projects/",
    element: <Projects />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* <HomePage /> */}
  </StrictMode>,
)
