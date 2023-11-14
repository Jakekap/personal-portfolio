import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './views/Layout'
import Project from './views/Project'
import Landing from './views/Landing'
import AllProjects from './views/AllProjects'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Landing />
      </Layout>
    ),
  },
  {
    path: '/project/:id',
    element: (
      <Layout>
        <Project />
      </Layout>
    ),
  },
  {
    path: '/projects',
    element: (
      <Layout>
        <AllProjects />
      </Layout>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
