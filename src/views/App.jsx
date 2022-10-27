import Button from '../components/Button'
import styled from '@emotion/styled'
import { CgMenu } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { TfiArrowTopRight } from 'react-icons/tfi'

const AppContainer = styled('div')({
  padding: '0 1.5rem',
})

const Subtitle = styled('span')({
  fontFamily: 'Montserrat',
  fontSize: '1.2rem',
  fontWeight: '500',
})

const Navbar = styled('nav')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 0',
})

const MainTitle = styled('h1')({
  fontFamily: 'Archivo Black',
  fontSize: '3rem',
  fontWeight: '400',
  lineHeight: '0.8',
  letterSpacing: '-4px',
  marginTop: '100px',
})
const Paragraph = styled('p')({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
})
const ArrowIcon = styled(TfiArrowTopRight)({
  strokeWidth: '.5px',
  paddingTop: '5px',
  paddingLeft: '15px',
  fontSize: '1.8rem',
})
const ButtonText = styled('span')({
  fontWeight: '500',
  fontSize: '1.8rem',
  fontFamily: 'Montserrat',
})

function App() {
  return (
    <AppContainer>
      <IconContext.Provider value={{ size: '2rem' }}>
        <Navbar>
          <Subtitle>Welcome, i&#39;m</Subtitle>
          <CgMenu />
        </Navbar>
      </IconContext.Provider>
      <MainTitle>CHRISTIAN ANDRADE</MainTitle>
      <Paragraph>
        Frontend developer and digital entertainment design engineer,{' '}
        <br />I like to make things look good and be useful for
        people.
      </Paragraph>
      <Button width='100%'>
        <ButtonText>Contact Me</ButtonText>
        <ArrowIcon />
      </Button>
    </AppContainer>
  )
}

export default App
