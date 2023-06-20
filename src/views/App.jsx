import styled from '@emotion/styled'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import MyProjects from '../components/MyProjects'
import WorkExperience from '../components/WorkExperience'
import MySkills from '../components/MySkills'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import Projects from './Projects'
import { Route } from 'wouter'

const AppContainer = styled.main({
  margin: '0 100px',
})

function App() {
  return (
    <>
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
    </>
  )
}

export default App
