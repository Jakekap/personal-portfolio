import LandingPage from '../components/LandingPage'
import MyProjects from '../components/MyProjects'
import WorkExperience from '../components/WorkExperience'
import MySkills from '../components/MySkills'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import styled from '@emotion/styled'

const AppContainer = styled.main`
  margin: 0 10%;
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    margin: 0 10px;
  }
`

export default function Landing() {
  return (
    <AppContainer>
      <LandingPage />
      <MyProjects />
      <WorkExperience />
      <MySkills />
      <AboutMe />
      <ContactMe />
    </AppContainer>
  )
}
