import styled from '@emotion/styled'

const CustomText = styled.p(
  {
    fontFamily: 'Akshar',
    fontStyle: 'normal',
    fontWeight: 'regular',
    color: '#464646',
    margin: '0',
  },
  (props) => ({
    ...props,
    transform: props.invert ? 'matrix(-1, 0, 0, 1, 0, 0)' : 'none',
    WebkitTextStroke: props.borders
      ? `1px ${props.borderColor ? props.borderColor : '#cccccc'}`
      : 'none',
  })
)

function Typography(props) {
  return <CustomText {...props}></CustomText>
}

export default Typography
