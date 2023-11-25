import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

const MasonryContainer = styled.div`
  width: 100%;
  margin: ${({ margin }) => margin || '3rem 0'};
  columns: ${({ columns }) => columns || 2};
  column-gap: 2rem;
  @media (max-width: 1200px) {
    columns: 2;
  }
  @media (max-width: 600px) {
    columns: 1;
  }
`
const MasonryCard = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const cardImage = css`
  width: 100%;
  border-radius: 18px;
  cursor: pointer;
`

const cardImageHover = css`
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`

export default function Masonry({
  setSelectedImage,
  images,
  margin,
  columns,
  hover,
}) {
  return (
    <MasonryContainer margin={margin} columns={columns}>
      {images?.map((image, index) => (
        <MasonryCard key={index}>
          <img
            css={[cardImage, hover && cardImageHover]}
            onClick={() => setSelectedImage(image)}
            src={image}
            alt={'image' + index}
          />
        </MasonryCard>
      ))}
    </MasonryContainer>
  )
}
Masonry.propTypes = {
  images: PropTypes.array.isRequired,
  margin: PropTypes.string,
  columns: PropTypes.number,
  setSelectedImage: PropTypes.func,
  hover: PropTypes.bool,
}
