import Typography from '../Typography'

function AboutMe() {
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
        About
        <br />
        Me
      </Typography>
      <p>
        Al contrario del pensamiento popular, el texto de Lorem Ipsum
        no es simplemente texto aleatorio. Tiene sus raices en una
        pieza cl´sica de la literatura del Latin, que data del año 45
        antes de Cristo, haciendo que este adquiera mas de 2000 años
        de antiguedad. Richard McClintock, un profesor de Latin de la
        Universidad de Hampden-Sydney en escrito en el <a>contact</a>{' '}
        45 antes!
      </p>
      <img />
    </>
  )
}

export default AboutMe
