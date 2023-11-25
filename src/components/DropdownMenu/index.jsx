import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { theme } from '../../constants/theme'

const Content = styled.div`
  width: 100%;
  display: none;
  position: absolute;
  z-index: 10;
  background-color: ${theme.color.background};
  &:hover {
    display: block;
  }
`

const Container = styled.div`
  position: relative;
  &:hover ${Content} {
    display: block;
  }
`

const Button = styled.button`
  list-style-type: none;
  color: ${theme.color.primary};
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
`
const linkStyle = css`
  display: inline-block;
  width: 100%;
  padding: 10px 10px;
  list-style-type: none;
  color: ${theme.color.primary};
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(167, 221, 240, 1) 0%,
      rgba(157, 224, 253, 1) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`

export default function DropdownMenu() {
  return (
    <Container>
      <Button>Art and design</Button>
      <Content>
        <Link css={linkStyle} to='/videogames'>
          Videogames
        </Link>
        <Link css={linkStyle} to='/3dmodels'>
          3D Models
        </Link>
        <Link css={linkStyle} to='/pixelart'>
          Pixel art
        </Link>
        <Link css={linkStyle} to='/illustrations'>
          Illustrations
        </Link>
        <Link css={linkStyle} to='/animations'>
          Animations
        </Link>
      </Content>
    </Container>
  )
}
