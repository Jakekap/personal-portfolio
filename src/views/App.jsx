import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import MyProjects from '../components/MyProjects'
import WorkExperience from '../components/WorkExperience'
import MySkills from '../components/MySkills'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import styled from '@emotion/styled'
import { ThemeProvider, Global } from '@emotion/react'
import { theme, globalStyles } from '../constants/theme'

const AppContainer = styled.main({
  margin: '0 100px',
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
      <Header />
      <AppContainer>
        <LandingPage />
        <MyProjects />
        <WorkExperience />
        <MySkills />
        <AboutMe />
        <ContactMe />
      </AppContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default App
