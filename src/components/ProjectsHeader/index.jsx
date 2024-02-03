import styled from '@emotion/styled'
import Shape from '../Shape'
import SvgItem from '../SvgItem'
import PropTypes from 'prop-types'

const HeaderContainer = styled.section`
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
`
const HeaderCard = styled.div`
  position: relative;
  width: 70%;
  height: 600px;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1200px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`
const ShapeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`

export default function ProjectsHeader({ project }) {
  return (
    <HeaderContainer>
      <ShapeContainer>
        <Shape right='0'>
          <SvgItem src='/svg/shapes/shape1.svg' alt='shape1' />
        </Shape>
        <Shape left='0' bottom='-100px'>
          <SvgItem src='/svg/shapes/shape2.svg' alt='shape2' />
        </Shape>
        <HeaderCard>
          <CardImage src={project?.mainImage?.src} alt='Projects' />
        </HeaderCard>
      </ShapeContainer>
    </HeaderContainer>
  )
}
ProjectsHeader.propTypes = {
  project: PropTypes.object,
}
