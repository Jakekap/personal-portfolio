import styled from '@emotion/styled'
import { IconContext } from 'react-icons'
import { css } from '@emotion/react'
import Typography from '../Typography'
import { Link } from 'wouter'

const Navbar = styled('nav')({
  display: 'flex',
  minWidth: '400px',
  margin: '0 100px',
  gap: '2rem',
})

const NavItem = styled('li')({
  listStyleType: 'none',
  fontFamily: 'Akshar, san-serif',
  fontSize: '20px',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
})
const TitleContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  minWidth: '190px',
  margin: '0 100px',
  gap: '1rem',
})

const NavContainer = styled('div')({
  display: 'flex',
  boxSizing: 'border-box',
  backgroundColor: 'transparent',
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
              weight={600}
              size='24px'
            >
              JAKEKAP
            </Typography>
          </TitleContainer>
          <Navbar>
            <Link css={LinkStyle} href='/projects'>
              My projects
            </Link>
            <Link css={LinkStyle} href='/'>
              Experience
            </Link>
            <Link css={LinkStyle} href='#'>
              About me
            </Link>
            <Link css={LinkStyle} href='#'>
              Contact
            </Link>
          </Navbar>
          {/* <CgMenu /> */}
        </NavContainer>
      </IconContext.Provider>
    </header>
  )
}

export default Header
