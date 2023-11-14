import styled from '@emotion/styled'
import { IconContext } from 'react-icons'
import { css } from '@emotion/react'
import Typography from '../Typography'
import { useNavigate, Link } from 'react-router-dom'
import { theme } from '../../constants/theme'
import DropdownMenu from '../DropdownMenu'

const NavContainer = styled.div`
  display: flex;
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

const Logo = styled('img')({
  width: '50px',
})
function Header() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate('/')
  }
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
            <Link css={linkStyle} to='/aboutme'>
              About me
            </Link>
          </Navbar>
        </NavContainer>
      </IconContext.Provider>
    </header>
  )
}

export default Header
