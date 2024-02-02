import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import SvgItem from '../SvgItem'

const aboutContainer = css`
  display: flex;
  position: relative;
  margin-bottom: 150px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
const aboutSection = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 100px;
  width: 50%;
  margin: 0 0 3rem 3rem;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`

const photoStyle = css`
  width: 50%;
  height: 600px;
  aspect-ratio: 1/1;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
  @media only screen and (max-width: 1200px) {
    height: 500px;
    width: 70%;
    object-fit: cover;
    clip-path: none;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`
const spanStyle = css`
  text-decoration: underline;
  cursor: pointer;
  font-size: 2rem;
`

function AboutMe() {
  return (
    <div css={aboutContainer}>
      <Shape width='100%' right top='5rem'>
        <SvgItem src='/svg/shapes/shape6.svg' alt='shape6' />
      </Shape>
      <div css={aboutSection}>
        <Typography
          alignSelf='flex-start'
          header
          weight={700}
          size='4rem'
          color='#464446'
        >
          ABOUT
          <br />
          ME
        </Typography>
        <Typography size='2rem' marginLeft='6rem'>
          Hi there! <br />
          I&apos;m Christian, a Colombian frontend web developer
          committed to creating attractive and efficient websites. If
          you need a customized solution for your website, feel free
          to <span css={spanStyle}>contact</span> me!
        </Typography>
      </div>
      <img
        css={photoStyle}
        src='/images/chris.jpg'
        alt='Christian Andrade'
      />
    </div>
  )
}

export default AboutMe
