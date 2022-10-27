import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CustomButton = styled.button(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'none',
    backgroundColor: 'black',
    color: '#d5ff40',
    padding: '10px 50px',
    borderRadius: '500px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  (props) => ({
    width: props.width,
  })
)

function Button({ children, width }) {
  return <CustomButton width={width}>{children}</CustomButton>
}
Button.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
}

export default Button
