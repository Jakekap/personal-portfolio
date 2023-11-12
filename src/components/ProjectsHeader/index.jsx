import styled from '@emotion/styled'
import Shape from '../Shape'
import SvgItem from '../SvgItem'

const HeaderContainer = styled.section`
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
`
const HeaderCard = styled.div`
  position: relative;
  background-color: red;
  width: 70%;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`
const ShapeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
`

export default function ProjectsHeader() {
  return (
    <HeaderContainer>
      <ShapeContainer>
        <Shape right>
          <SvgItem src='/svg/shapes/shape1.svg' alt='shape1' />
        </Shape>
        <Shape left bottom='-100px'>
          <SvgItem src='/svg/shapes/shape2.svg' alt='shape2' />
        </Shape>
        <HeaderCard>
          <CardImage src='/images/gato1.png' alt='Projects' />
        </HeaderCard>
      </ShapeContainer>
    </HeaderContainer>
  )
}
