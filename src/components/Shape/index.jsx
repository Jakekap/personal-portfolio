import styled from '@emotion/styled'

const CustomShape = styled.div((props) => ({
  position: 'absolute',
  zIndex: '-1',
  right: props.right ? '-50px' : 'auto',
  left: props.left ? '-50px' : 'auto',
  top: props.top || 'auto',
  bottom: props.bottom || 'auto',
  transform: props.rotate ? 'rotate(-180deg)' : 'none',
}))

function Shape(props) {
  return <CustomShape {...props}></CustomShape>
}

export default Shape
