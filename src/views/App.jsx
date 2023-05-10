import styled from '@emotion/styled'
import Header from '../components/Header'
import LandingPage from '../components/LandingPage'
import MyProjects from '../components/MyProjects'
import WorkExperience from '../components/WorkExperience'
import MySkills from '../components/MySkills'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

const AppContainer = styled('div')({ margin: '0 100px' })

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <LandingPage />
        <MyProjects />
        <WorkExperience />
        <MySkills />
        <AboutMe />
        <ContactMe />
        <Footer />
      </AppContainer>
    </>
  )
}

export default App
