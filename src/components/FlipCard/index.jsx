import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import { useState } from 'react'
import Typography from '../Typography'
import { theme } from '../../constants/theme'

const cardContainer = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  aspect-ratio: 1/1;
  background-image: ${theme.color.cardGradient};
  border-radius: 12px;
  box-shadow: ${theme.color.shadow} 0px 7px 29px 0px;
`
const cardItem = css`
  position: absolute;
  margin: 0;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Akshar, san-serif';
  padding: 5%;
  aspect-ratio: 1/1;
  background-color: ${theme.color.light};
  box-shadow: ${theme.color.shadow} 0px 7px 29px 0px;
  cursor: pointer;
  transition: max-width 0.2s ease-in-out, margin 0.2s ease-in-out;
  border-radius: 10px;
`
const animation = css`
  max-width: 20%;
  margin: 10px;
`

function FlipCard({ skill }) {
  const [openCard, setOpenCard] = useState(false)

  const toggleCard = () => {
    setOpenCard(!openCard)
  }
  return (
    <div onClick={toggleCard} css={cardContainer}>
      <div css={[cardItem, openCard ? animation : '']}>
        <img
          draggable={false}
          style={{
            width: '100%',
            maxHeight: '100%',
            userSelect: 'none',
          }}
          src={skill.icon}
          alt={skill.name}
        />
      </div>
      <Typography
        color='white'
        size='2rem'
        margin='7% 0 0 30%'
        weight={700}
      >
        {skill.name}
      </Typography>
    </div>
  )
}

export default FlipCard
FlipCard.propTypes = {
  skill: PropTypes.object,
}
