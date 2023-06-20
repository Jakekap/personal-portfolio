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
          src='src/assets/svg/shapes/shape4.svg'
          alt='shape4'
        />
      </Shape>
      <Shape right bottom='0'>
        <SvgItem
          src='src/assets/svg/shapes/shape5.svg'
          alt='shape5'
        />
      </Shape>
      <Typography
        bold
        fontSize='4rem'
        color='#464446'
        lineHeight='88%'
        fontWeight={700}
        textTransform='uppercase'
        marginLeft='6rem'
        marginBottom='2rem'
      >
        My <br />
        Skills
      </Typography>
      <Typography
        fontSize='36px'
        color='#464446'
        lineHeight='88%'
        fontWeight={600}
        textTransform='uppercase'
        marginLeft='6rem'
        marginBottom='6rem'
      >
        I have experience with
        <br />
        these technologies
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
