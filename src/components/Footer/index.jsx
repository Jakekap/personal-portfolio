import Typography from '../Typography'
import { css } from '@emotion/react'
import { footerIcons } from '../../constants'
import newPage from '../../utils/newPage'

const footerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  padding: 3rem 0;
  justify-content: center;
`
const logoStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  margin-bottom: 2rem;
`
const logoIcons = css`
  width: 50px;
  cursor: pointer;
`

function Footer() {
  return (
    <footer css={footerStyle}>
      <div css={logoStyle}>
        {footerIcons.map((icon, index) => {
          return (
            <img
              key={index}
              onClick={() => {
                newPage(icon.url)
              }}
              css={logoIcons}
              src={icon.src}
              alt={icon.alt}
            />
          )
        })}
      </div>
      <Typography>
        &copy; 2023 - Jakekap. All rights reserved.
      </Typography>
    </footer>
  )
}

export default Footer
