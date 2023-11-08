import styled from '@emotion/styled'
import { IconContext } from 'react-icons'
// import { css } from '@emotion/react'
import Typography from '../Typography'
// import { Link } from 'react-router-dom'
// import { theme } from '../../constants/theme'

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
// const LinkStyle = css`
//   list-style-type: none;
//   color: ${theme.color.primary};
//   text-decoration: none;
//   font-size: 1.3rem;
//   cursor: pointer;
//   :hover {
//     text-decoration: underline;
//   }
// `
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 190px;
  margin: 0 3rem;
  gap: 1rem;
`

const Logo = styled('img')({
  width: '50px',
})
function Header() {
  return (
    <header>
      <IconContext.Provider value={{ size: '2rem' }}>
        <NavContainer>
          <TitleContainer>
            <Logo src='/images/jakekap_logo.png' alt='Jakekap Logo' />
            <Typography weight={600} size='2rem'>
              JAKEKAP
            </Typography>
          </TitleContainer>
          <Navbar></Navbar>
          {/* <CgMenu /> */}
        </NavContainer>
      </IconContext.Provider>
    </header>
  )
}

export default Header
