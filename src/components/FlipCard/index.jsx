import PropTypes from 'prop-types'
import { css, keyframes } from '@emotion/react'
import { useState } from 'react'
import Typography from '../Typography'

const min = keyframes`
  0% {
    max-width: 100%;
    margin: 0;
  }
  100% {
    max-width: 20%;
    margin: 10px;
  }
`
const max = keyframes`
  0% {
    max-width: 20%;
    margin: 10px;
  }
  100% {
    max-width: 100%;
    margin: 0;
  }
`
const cardContainer = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  aspect-ratio: 1/1;
  background-color: #464446;
`
const cardItem = css`
  position: absolute;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  padding: 5%;
  aspect-ratio: 1/1;
  background-color: #ece8e1;
  box-shadow: 4px 4px 0px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  animation: ${max} 0.2s;
`
const animation = css`
  animation: ${min} 0.2s;
  max-width: 20%;
  margin: 10px;
`

function FlipCard({ skill }) {
  const [styles, setStyles] = useState([cardItem])
  const toggleAnimation = () => {
    setStyles((prev) => {
      const newStyle = [...prev]
      if (newStyle.length > 1) {
        newStyle.pop()
      } else {
        newStyle.push(animation)
      }
      return newStyle
    })
  }
  return (
    <div onClick={toggleAnimation} css={cardContainer}>
      <div css={styles}>
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
        style={{
          color: 'white',
          fontSize: '2rem',
          margin: '30px 0 0 120px',
          fontWeight: 'bold',
        }}
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
