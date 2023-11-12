import Typography from '../Typography'
import { css } from '@emotion/react'

const footerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  padding: 3rem 0;
  justify-content: center;
`

function Footer() {
  return (
    <footer css={footerStyle}>
      <Typography>
        &copy; 2023 - Jakekap. All rights reserved.
      </Typography>
    </footer>
  )
}

export default Footer
