import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const svgStyle = css`
  width: 100%;
`

function SvgItem({ src, alt }) {
  return <img src={src} alt={alt} css={svgStyle} />
}

export default SvgItem
SvgItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}
