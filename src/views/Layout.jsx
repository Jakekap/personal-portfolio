import { ThemeProvider, Global } from '@emotion/react'
import { theme, globalStyles } from '../constants/theme'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const AppContainer = styled.main`
  margin: 0 10%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: 0 10px;
  }
`
function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Header />
      <AppContainer>{children}</AppContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
