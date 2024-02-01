import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './views/Layout'
import Project from './views/Project'
import Landing from './views/Landing'
import AllProjects from './views/AllProjects'
import Videogames from './views/Videogames'
import ThreeDModels from './views/ThreeDModels'
import Pixelart from './views/Pixelart'
import Illustrations from './views/Illustrations'
import Animations from './views/Animations'
import AboutMe from './views/AboutMe'

const router = createHashRouter([
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
  {
    path: '/videogames',
    element: (
      <Layout>
        <Videogames />
      </Layout>
    ),
  },
  {
    path: '/3dmodels',
    element: (
      <Layout>
        <ThreeDModels />
      </Layout>
    ),
  },
  {
    path: '/pixelart',
    element: (
      <Layout>
        <Pixelart />
      </Layout>
    ),
  },
  {
    path: '/illustrations',
    element: (
      <Layout>
        <Illustrations />
      </Layout>
    ),
  },
  {
    path: '/animations',
    element: (
      <Layout>
        <Animations />
      </Layout>
    ),
  },
  {
    path: '/about-me',
    element: (
      <Layout>
        <AboutMe />
      </Layout>
    ),
  },
  {
    path: '*',
    element: (
      <Layout>
        <div>
          <h1>Error 404 - Página no encontrada</h1>
          <p>La página que estás buscando no existe.</p>
        </div>
      </Layout>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
