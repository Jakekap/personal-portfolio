import { ThemeProvider, Global } from '@emotion/react'
import { theme, globalStyles } from '../constants/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
