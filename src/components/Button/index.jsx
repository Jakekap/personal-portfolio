import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CustomButton = styled.button({
  borderStyle: 'none',
})

function Button({ children }) {
  return <CustomButton>{children}</CustomButton>
}
Button.propTypes = {
  children: PropTypes.node,
}

export default Button
