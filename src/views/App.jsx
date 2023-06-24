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
import Projects from './Projects'
import { Route } from 'wouter'

const AppContainer = styled.main`
  margin: 0 10%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: 0 10px;
  }
`


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
      <Header />
      <Route path='/'>
        <AppContainer>
          <LandingPage />
          <MyProjects />
          <WorkExperience />
          <MySkills />
          <AboutMe />
          <ContactMe />
        </AppContainer>
      </Route>
      <Route path='/projects' component={Projects} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
