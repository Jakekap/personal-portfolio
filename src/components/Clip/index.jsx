import styled from '@emotion/styled'
import Typography from '../Typography'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

const ClipContainer = styled.div`
  display: inline-flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 1rem;
  background-color: #d9d9d9;
`

export default function Clip({ icon, name }) {
  return (
    <IconContext.Provider value={{ size: '25px' }}>
      <ClipContainer>
        {icon}
        <Typography size='1.2rem' weight={600}>
          {name}
        </Typography>
      </ClipContainer>
    </IconContext.Provider>
  )
}
Clip.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}
