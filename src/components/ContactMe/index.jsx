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
  margin: 6rem 10rem;
  padding-bottom: 10rem;
  @media only screen and (max-width: 1200px) {
    margin: 6rem 5rem;
  }
`
const textFieldStyle = css`
  font-family: 'Akshar', sans-serif;
  width: 100%;
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
          src='/svg/shapes/shape7.svg'
          alt='shape7'
        />
      </Shape>
      <Shape left bottom='5rem'>
        <SvgItem
          src='/svg/shapes/shape8.svg'
          alt='shape8'
        />
      </Shape>
      <Shape right bottom='0'>
        <SvgItem
          src='/svg/shapes/shape9.svg'
          alt='shape9'
        />
      </Shape>
      <Typography
        header
        weight={700}
        size='64px'
        color='#464446'
        margin='0 0 6rem 100px'
      >
        CONTACT
        <br />
        ME
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
        <button onClick={e => {e.preventDefault()}} css={buttonSubmitStyle}>
          <Typography pointer>Submit</Typography>
        </button>
      </form>
    </section>
  )
}

// TODO hacer la funcionalidad del contacto, que envie el correo
export default ContactMe
