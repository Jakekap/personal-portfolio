import { ThemeProvider, Global } from '@emotion/react'
import { theme, globalStyles } from '../constants/theme'
import Projects from './Projects'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Landing from './Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
