import styled from '@emotion/styled'

const CustomShape = styled.div((props) => ({
  position: 'absolute',
  zIndex: '-1',
  width: props.fill ? '100%' : 'auto',
  right: props.right ? 0 : 'auto',
  left: props.left ? 0 : 'auto',
  top: props.top || 'auto',
  bottom: props.bottom || 'auto',
  transform: props.rotate ? 'rotate(-180deg)' : 'none',
}))

function Shape(props) {
  return <CustomShape {...props}></CustomShape>
}

export default Shape
