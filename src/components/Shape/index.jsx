import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CustomShape = styled.div(
  ({ fill, right, left, top, bottom, rotate }) => ({
    position: 'absolute',
    zIndex: '-1',
    width: fill ? '100%' : 'auto',
    right: right ? 0 : 'auto',
    left: left ? 0 : 'auto',
    top: top || 'auto',
    bottom: bottom || 'auto',
    transform: rotate ? 'rotate(-180deg)' : 'none',
  })
)

function Shape({ fill, ...props }) {
  return <CustomShape fill={fill} {...props}></CustomShape>
}

export default Shape
Shape.propTypes = {
  fill: PropTypes.bool.isRequired,
  right: PropTypes.bool,
  left: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  rotate: PropTypes.bool,
}
