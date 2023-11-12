import styled from '@emotion/styled'

const CustomShape = styled.div(
  ({ width, right, left, top, bottom, rotate }) => ({
    position: 'absolute',
    zIndex: '-1',
    width: width || 'auto',
    right: right ? 0 : 'auto',
    left: left ? 0 : 'auto',
    top: top || 'auto',
    bottom: bottom || 'auto',
    transform: rotate ? 'rotate(-180deg)' : 'none',
  })
)

function Shape({ ...props }) {
  return <CustomShape {...props}></CustomShape>
}

export default Shape
