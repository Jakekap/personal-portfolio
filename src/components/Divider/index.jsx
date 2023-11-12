import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const MyDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.color || '#979797'};
  margin: ${(props) => props.margin || '2rem 0'};
`

export default function Divider({ margin, color }) {
  return <MyDivider margin={margin} color={color}></MyDivider>
}
Divider.propTypes = {
  margin: PropTypes.string,
  color: PropTypes.string,
}
