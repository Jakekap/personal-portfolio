import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import FlipCard from '../FlipCard'

const CarouselContent = styled('div')`
  margin: 200px 0;
`

const CarouselContainer = styled('div')`
  overflow: hidden;
  white-space: nowrap;
  :hover {
    & div {
      animation-play-state: paused;
    }
  }
`
const Slide = styled('div')`
  display: inline-block;
  animation: slide 35s linear infinite;
  & div {
    display: inline-block;
  }
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`

export default function Carousel({ skills }) {
  return (
    <CarouselContent>
      <CarouselContainer>
        <Slide>
          {skills.map((item, index) => {
            return <FlipCard key={index} skill={item} />
          })}
        </Slide>
        <Slide>
          {skills.map((item, index) => {
            return <FlipCard key={index} skill={item} />
          })}
        </Slide>
      </CarouselContainer>
    </CarouselContent>
  )
}

Carousel.propTypes = {
  skills: PropTypes.array,
}
