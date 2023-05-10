import Typography from '../Typography'

function MySkills() {
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
        My <br />
        Skills
      </Typography>
      <Typography
        fontSize='40px'
        color='#464446'
        lineHeight='88%'
        fontWeight={700}
        textTransform='uppercase'
      >
        I have experience with these technologies
      </Typography>
      <div>
        <div>
          <img />
          <p>HTML</p>
        </div>
        <div>
          <img />
          <p>CSS</p>
        </div>
        <div>
          <img />
          <p>Javascript</p>
        </div>
        <div>
          <img />
          <p>React.js</p>
        </div>
        <div>
          <img />
          <p>Data Base SQL</p>
        </div>
        <div>
          <img />
          <p>Material UI</p>
        </div>
        <div>
          <img />
          <p>Bootstrap</p>
        </div>
        <div>
          <img />
          <p>Github</p>
        </div>
        <div>
          <img />
          <p>Git</p>
        </div>
        <div>
          <img />
          <p>Figma</p>
        </div>
      </div>
    </>
  )
}

export default MySkills
