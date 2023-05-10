import Typography from '../Typography'

function WorkExperience() {
  return (
    <>
      <Typography
        bold
        fontSize='64px'
        color='#464446'
        lineHeight='88%'
        fontWeight={700}
        textTransform='uppercase'
        marginLeft='100px'
      >
        Work <br />
        Experience
      </Typography>
      <div>
        <div>
          <img className='icono-arrow' />
          <Typography>3d Artist at monster truck ninja</Typography>
          <Typography>Jun. 2021 - Dec. 2021</Typography>
        </div>
        <div>
          <img className='icono-arrow' />
          <Typography>3d Artist at monster truck ninja</Typography>
          <Typography>Jun. 2021 - Dec. 2021</Typography>
        </div>
      </div>
    </>
  )
}

export default WorkExperience
