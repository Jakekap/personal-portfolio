import styled from '@emotion/styled'
import { IconContext } from 'react-icons'
import { css } from '@emotion/react'
import Typography from '../Typography'
import { useNavigate, Link } from 'react-router-dom'
import { theme } from '../../constants/theme'
import DropdownMenu from '../DropdownMenu'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react'

const NavContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  @media (max-width: 1200px) {
    justify-content: center;
  }
`
const Navbar = styled.nav`
  display: flex;
  margin: 0 100px;
  gap: 2rem;
  @media (max-width: 1200px) {
    display: none;
  }
`
const linkStyle = css`
  list-style-type: none;
  color: ${theme.color.primary};
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`
const TitleContainer = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  min-width: 190px;
  margin: 0 3rem;
  gap: 1rem;
`

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-right: 10%;
  }
  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }
`

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
`

const SideContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  a {
    font-size: 2.5rem;
  }
`

const SideMenu = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    z-index: 100;
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    transition: 0.5s;
    padding: 20px 10% 0;
    @media only screen and (max-width: 600px) {
      padding: 20px 20px 0;
    }
    box-sizing: border-box;
    ${({ isOpen }) =>
      isOpen &&
      `
      left: 0;
      transition: 0.5s;
    `}
  }
`

const Logo = styled('img')({
  width: '50px',
})
function Header() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate('/')
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header>
      <IconContext.Provider value={{ size: '2rem' }}>
        <NavContainer>
          <TitleContainer onClick={handleRedirect}>
            <Logo src='/images/jakekap_logo.png' alt='Jakekap Logo' />
            <Typography pointer weight={600} size='2rem'>
              JAKEKAP
            </Typography>
          </TitleContainer>
          <Navbar>
            <Link css={linkStyle} to='/'>
              Home
            </Link>
            <Link css={linkStyle} to='/projects'>
              Web projects
            </Link>
            <DropdownMenu />
            <Link css={linkStyle} to='/about-me'>
              About me
            </Link>
          </Navbar>
          <HamburgerMenu onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu size='2.5rem' color='#464646' />
          </HamburgerMenu>
          <SideMenu isOpen={isOpen}>
            <CloseContainer onClick={() => setIsOpen(false)}>
              <GrClose size='3rem' color='#464646' />
            </CloseContainer>
            <SideContent>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/'
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/projects'
              >
                Web projects
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/videogames'
              >
                Videogames
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/3dmodels'
              >
                3D Models
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/pixelart'
              >
                Pixel art
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/illustrations'
              >
                Illustrations
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/animations'
              >
                Animations
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                css={linkStyle}
                to='/about-me'
              >
                About me
              </Link>
            </SideContent>
          </SideMenu>
        </NavContainer>
      </IconContext.Provider>
    </header>
  )
}

export default Header
