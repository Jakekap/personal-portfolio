import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const SkillSubtitle = styled('p')`
  margin: 10px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #464646;
`

const FlipCardContainer = styled('div')`
  border-radius: 10px;
  text-align: center;
`

function FlipCard({ skill }) {
  return (
    <FlipCardContainer>
      <img
        draggable={false}
        style={{
          width: '180px',
          height: '180px',
          userSelect: 'none',
          margin: '0 40px',
        }}
        src={skill.icon}
        alt={skill.name}
      />
      <SkillSubtitle>{skill.name}</SkillSubtitle>
    </FlipCardContainer>
  )
}

export default FlipCard
FlipCard.propTypes = {
  skill: PropTypes.object,
}
