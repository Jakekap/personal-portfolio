import Typography from '../Typography'

function ContactMe() {
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
        Contact
        <br />
        Me
      </Typography>
      <div>
        <input type='email' />
        <input type='text' />
        <button>Submit</button>
      </div>
    </>
  )
}

export default ContactMe
