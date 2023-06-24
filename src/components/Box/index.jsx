import styled from '@emotion/styled'

const Container = styled.div((props) => ({
    margin: props.margin || 0,
    padding: props.padding || 0,
    display: props.flex || props.center ? 'flex' : 'block',
    justifyContent: props.center ? 'center' : '',
    alignItems: props.center ? 'center' : '',
    flexDirection: props.column ? 'column' : 'row',
    border: props.border ? '1px solid red' : '',
}))

export function Box() {
  return (
    <Container></Container>
  )
}
