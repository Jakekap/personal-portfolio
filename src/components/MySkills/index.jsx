import Typography from '../Typography'
import Shape from '../Shape'
import skills from './skills'
import FlipCard from '../FlipCard'
import SvgItem from '../SvgItem'

function MySkills() {
  return (
    <section style={{ position: 'relative' }}>
      <Shape left>
        <SvgItem
          src='/svg/shapes/shape4.svg'
          alt='shape4'
        />
      </Shape>
      <Shape right bottom='0'>
        <SvgItem
          src='/svg/shapes/shape5.svg'
          alt='shape5'
        />
      </Shape>
      <Typography
        header
        size='4rem'
        color='#464446'
        weight={700}
        margin='0 0 2rem 6rem'
      >
        MY <br />
        SKILLS
      </Typography>
      <Typography
        header
        size='36px'
        color='#464446'
        weight={600}
        margin='0 0 6rem 0'
      >
        I HAVE EXPERIENCE WITH
        <br />
        THESE TECHNOLOGIES
      </Typography>
      <div
        style={{
          display: 'grid',
          placeContent: 'center',
          gridTemplateColumns: 'repeat(auto-fill, 300px)',
          gridAutoFlow: 'row',
          gap: '30px',
          marginBottom: '15rem',
        }}
      >
        {skills.map((el, index) => {
          return <FlipCard key={index} skill={el} />
        })}
      </div>
    </section>
  )
}

export default MySkills
