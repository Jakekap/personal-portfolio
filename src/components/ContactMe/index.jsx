import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import SvgItem from '../SvgItem'
import { theme } from '../../constants/theme'

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
  @media only screen and (max-width: 600px) {
    margin: 6rem 2rem;
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
  background-color: ${theme.color.white};
  ::placeholder {
    color: ${theme.color.secondary};
  }
`
const labelStyle = css`
  width: 100%;
`
const textAreaStyle = css`
  height: 300px;
  resize: none;
`
const buttonSubmitStyle = css`
  font-weight: 700;
  border: none;
  font-size: 1rem;
  padding: 10px;
  width: 100%;
  background-color: #464646;
  border: 2px dashed #464646;
  cursor: pointer;
  color: #fff;
  :hover {
    background-color: #fff;
    color: #464646;
  }
`

function ContactMe() {
  return (
    <section css={contactMeContainer}>
      <Shape left top='-80px'>
        <SvgItem src='/svg/shapes/shape7.svg' alt='shape7' />
      </Shape>
      <Shape left bottom='5rem'>
        <SvgItem src='/svg/shapes/shape8.svg' alt='shape8' />
      </Shape>
      <Shape right bottom='0'>
        <SvgItem src='/svg/shapes/shape9.svg' alt='shape9' />
      </Shape>
      <Typography
        header
        weight={700}
        size='4rem'
        color='#464446'
        margin='0 0 3rem 3rem'
      >
        CONTACT
        <br />
        ME
      </Typography>
      <form
        action='https://formsubmit.co/ce.andrade.p@gmail.com'
        method='POST'
        css={formStyle}
      >
        <label css={labelStyle}>
          Email
          <input
            placeholder='youremail@exaple.com'
            css={textFieldStyle}
            type='email'
            name='email'
            required
          />
        </label>
        <label css={labelStyle}>
          Subject
          <input
            placeholder="Let's work together!"
            css={textFieldStyle}
            type='text'
            name='_subject'
            required
          />
        </label>
        <textarea
          name='message'
          placeholder='Message...'
          css={[textFieldStyle, textAreaStyle]}
          required
        />
        <input
          type='hidden'
          name='_next'
          value={`${document.URL}projects`}
        ></input>
        <button type='submit' css={buttonSubmitStyle}>
          Submit
        </button>
      </form>
    </section>
  )
}

// TODO hacer la funcionalidad del contacto, que envie el correo
export default ContactMe
