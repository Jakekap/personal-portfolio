import styled from '@emotion/styled'
import { CgMenu } from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { IoIosArrowDown } from 'react-icons/io'

const AppContainer = styled('div')({})
const Navbar = styled('nav')({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 20px',
})

const PageContainer = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  backgroundImage:
    'linear-gradient(to top, #EAEFF2, transparent 15%), url(src/assets/main_image.png)',
  width: '100%',
  height: '60vh',
})
const Logo = styled('img')({
  width: '50px',
})
/* Texto */

const TitleWrapper = styled('div')({
  boxSizing: 'border-box',
  padding: '100px 30px',
})
const Title = styled.h2(
  {
    fontFamily: 'Akshar',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#000000',
    margin: '0',
  },
  (props) => ({
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    color: props.color,
    lineHeight: props.lineHeight,
    textTransform: props.textTransform,
    textShadow: props.textShadow,
  })
)
const Section = styled.section(
  {
    boxSizing: 'border-box',
    padding: '0 30px',
  },
  (props) => ({
    padding: props.padding,
    display: props.display,
    justifyContent: props.justifyContent,
  })
)

function App() {
  return (
    <>
      <Navbar>
        <IconContext.Provider value={{ size: '2rem' }}>
          <Logo
            src='src/assets/jakekap_logo.png'
            alt='Jakekap Logo'
          />
          <CgMenu />
        </IconContext.Provider>
      </Navbar>
      <AppContainer>
        <PageContainer>
          <TitleWrapper>
            <Title
              lineHeight='100%'
              color='#FFFFFF'
              fontWeight={600}
              fontSize='32px'
              textShadow='0px 0px 4px #000'
            >
              Christian Andrade
            </Title>
            <Title
              fontSize='48px'
              color='#FFB95F'
              lineHeight='100%'
              fontWeight={600}
              textShadow='0px 0px 4px #000'
              textTransform='uppercase'
            >
              Web Developer
            </Title>
            <Title
              fontSize='24px'
              color='#FFFFFF'
              lineHeight='107%'
              fontWeight={600}
              textShadow='0px 0px 4px #000'
              textTransform='uppercase'
            >
              Turning ideas into digital
              <br /> reality
            </Title>
          </TitleWrapper>
        </PageContainer>
        <Section
          display='flex'
          justifyContent='center'
          padding='100px 30px'
        >
          <IconContext.Provider value={{ size: '2rem' }}>
            <IoIosArrowDown />
          </IconContext.Provider>
        </Section>
        <Section>
          <Title
            fontSize='40px'
            color='#464446'
            lineHeight='88%'
            fontWeight={700}
            textTransform='uppercase'
          >
            My <br />
            Projects
          </Title>
        </Section>
      </AppContainer>
    </>
  )
}

export default App
