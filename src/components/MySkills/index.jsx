import Typography from '../Typography'
import Shape from '../Shape'
import skills from './skills'
import SvgItem from '../SvgItem'
import Carousel from '../Carousel'

function MySkills() {
  return (
    <section style={{ position: 'relative' }}>
      <Shape left='0'>
        <SvgItem src='/svg/shapes/shape4.svg' alt='shape4' />
      </Shape>
      <Shape right='0' bottom='0'>
        <SvgItem src='/svg/shapes/shape5.svg' alt='shape5' />
      </Shape>
      <Typography
        header
        size='4rem'
        color='#464446'
        weight={700}
        margin='0 0 3rem 3rem'
      >
        MY <br />
        SKILLS
      </Typography>
      <Typography
        header
        size='3rem'
        color='#464446'
        weight={600}
        margin='0 0 6rem 0'
      >
        I HAVE EXPERIENCE WITH
        <br />
        THESE TECHNOLOGIES
      </Typography>
      <Carousel skills={skills} />
    </section>
  )
}

export default MySkills
