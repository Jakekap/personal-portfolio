import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const MasonryContainer = styled.div`
  width: 100%;
  margin: 3rem auto;
  columns: 2;
  column-gap: 2rem;
  @media (max-width: 600px) {
    columns: 1;
  }
`
const MasonryCard = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`
const CardImage = styled.img`
  width: 100%;
  border-radius: 18px;
`

export default function Masonry({ images }) {
  return (
    <MasonryContainer>
      {images.map((image, index) => (
        <MasonryCard key={index}>
          <CardImage src={image} alt={'image' + index} />
        </MasonryCard>
      ))}
    </MasonryContainer>
  )
}
Masonry.propTypes = {
  images: PropTypes.array.isRequired,
}
