import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import SvgItem from '../SvgItem'

const contactMeContainer = css`
  position: relative;
`
const formStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 6rem auto;
  padding-bottom: 10rem;
  width: 60%;
`
const textFieldStyle = css`
  width: 100%;
  font-family: 'Akshar';
  box-sizing: border-box;
  padding: 10px;
  border: none;
  margin-bottom: 10px;
  font-size: 1rem;
  background-color: #fff;
`
const textAreaStyle = css`
  height: 300px;
  resize: none;
`
const buttonSubmitStyle = css`
  border: none;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
  background-color: #464646;
  cursor: pointer;
  & p {
    color: #fff;
    font-weight: bold;
  }
  :hover {
    background-color: #7f7f7f;
  }
`

function ContactMe() {
  return (
    <section css={contactMeContainer}>
      <Shape left top='-80px'>
        <SvgItem
          src='src/assets/svg/shapes/shape7.svg'
          alt='shape7'
        />
      </Shape>
      <Shape left bottom='5rem'>
        <SvgItem
          src='src/assets/svg/shapes/shape8.svg'
          alt='shape8'
        />
      </Shape>
      <Shape right bottom='0'>
        <SvgItem
          src='src/assets/svg/shapes/shape9.svg'
          alt='shape9'
        />
      </Shape>
      <Typography
        bold
        fontSize='64px'
        color='#464446'
        lineHeight='88%'
        fontWeight={700}
        textTransform='uppercase'
        marginLeft='100px'
        marginBottom='6rem'
      >
        Contact
        <br />
        Me
      </Typography>
      <form css={formStyle}>
        <input
          placeholder='Email'
          css={textFieldStyle}
          type='email'
        />
        <textarea
          name='message'
          placeholder="Let's work together..."
          css={[textFieldStyle, textAreaStyle]}
        />
        <button css={buttonSubmitStyle}>
          <Typography>Submit</Typography>
        </button>
      </form>
    </section>
  )
}

// TODO hacer la funcionalidad del contacto, que envie el correo
export default ContactMe
