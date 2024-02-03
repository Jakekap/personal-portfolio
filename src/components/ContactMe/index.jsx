import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import SvgItem from '../SvgItem'
import { theme } from '../../constants/theme'
import { footerIcons } from '../../constants'
import newPage from '../../utils/newPage'
import DownloadButton from '../DownloadCV'

const contactMeContainer = css`
  position: relative;
  width: 100%;
`
const formsContainer = css`
  display: flex;
  align-items: flex-end;
  width: 100%;
  gap: 60px;
  padding-bottom: 6rem;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
const mailContainer = css`
  display: flex;
  justify-content: center;
  position: relative;
  width: 45%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 6rem;
  }
`
const mailImg = css`
  width: 100%;
`
const cardContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  position: absolute;
  margin-top: 8%;
  width: 74%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  @media only screen and (max-width: 1200px) {
    width: 60%;
    gap: 6vw;
  }
  @media only screen and (max-width: 600px) {
    gap: 6vw;
  }
  @media only screen and (max-width: 470px) {
    width: 50%;
    gap: 3vw;
  }
`
const cardText = css`
  padding: 0 5%;
  text-align: center;
  font-size: 2vw;
  @media only screen and (max-width: 1200px) {
    font-size: 3vw;
  }
`
const formStyle = css`
  display: flex;
  width: 55%;
  padding: 0 0 2rem 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 6rem;
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
const networkIcons = css`
  display: flex;
  gap: 3vw;
  @media only screen and (max-width: 1200px) {
    gap: 6vw;
  }
`
const logoIcons = css`
  width: 3vw;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
    width: 4vw;
  }
  @media only screen and (max-width: 600px) {
    width: 6vw;
  }
`

function ContactMe() {
  return (
    <section css={contactMeContainer}>
      <Shape left='0' top='-80px'>
        <SvgItem src='/svg/shapes/shape7.svg' alt='shape7' />
      </Shape>
      <Shape left='0' bottom='5rem'>
        <SvgItem src='/svg/shapes/shape8.svg' alt='shape8' />
      </Shape>
      <Shape right='0' bottom='0'>
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
      <div css={formsContainer}>
        <form
          action='https://formsubmit.co/ce.andrade.p@gmail.com'
          method='POST'
          css={formStyle}
        >
          <label css={labelStyle}>
            Subject
            <input
              placeholder='Job offer'
              css={textFieldStyle}
              type='text'
              name='_subject'
              required
            />
          </label>
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
          <textarea
            name='message'
            placeholder="Let's work together!"
            css={[textFieldStyle, textAreaStyle]}
            required
          />
          <input
            type='hidden'
            name='_next'
            value={`${document.URL}projects`}
          ></input>
          <button type='submit' css={buttonSubmitStyle}>
            SUBMIT
          </button>
        </form>
        <div css={mailContainer}>
          <img css={mailImg} src='/svg/shapes/mail.svg' />
          <div css={cardContainer}>
            <Typography css={cardText} weight={700}>
              THANK YOU FOR VISITING MY WEBSITE!
            </Typography>
            <DownloadButton />
            <div css={networkIcons}>
              {footerIcons.map((icon, index) => {
                return (
                  <img
                    key={index}
                    onClick={() => {
                      newPage(icon.url)
                    }}
                    css={logoIcons}
                    src={icon.src}
                    alt={icon.alt}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// TODO hacer la funcionalidad del contacto, que envie el correo
export default ContactMe
