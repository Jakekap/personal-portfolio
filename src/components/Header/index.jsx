import styled from '@emotion/styled'
import { IconContext } from 'react-icons'
import Typography from '../Typography'

const Navbar = styled('nav')({
  display: 'flex',
  minWidth: '400px',
  margin: '0 100px',
  gap: '2rem',
})

const NavItem = styled('li')({
  listStyleType: 'none',
  fontFamily: 'Akshar',
  fontSize: '20px',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
})
const TitleContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: '190px',
  width: '190px',
  margin: '0 100px',
})

const NavContainer = styled('div')({
  display: 'flex',
  boxSizing: 'border-box',
  backgroundColor: '#FFF',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0',
})
const Logo = styled('img')({
  width: '50px',
})
function Header() {
  return (
    <header>
      <IconContext.Provider value={{ size: '2rem' }}>
        <NavContainer>
          <TitleContainer>
            <Logo
              src='src/assets/images/jakekap_logo.png'
              alt='Jakekap Logo'
            />
            <Typography
              letterSpacing='5px'
              lineHeight='100%'
              fontWeight={600}
              fontSize='24px'
            >
              JAKEKAP
            </Typography>
          </TitleContainer>
          <Navbar>
            <NavItem>My projects</NavItem>
            <NavItem>Experience</NavItem>
            <NavItem>About me</NavItem>
            <NavItem>Contact</NavItem>
          </Navbar>
          {/* <CgMenu /> */}
        </NavContainer>
      </IconContext.Provider>
    </header>
  )
}

export default Header
