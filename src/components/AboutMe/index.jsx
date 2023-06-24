import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import SvgItem from '../SvgItem'

const aboutContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 150px;
  gap: 100px;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
const figureStyle = css`
  max-width: 40%;
  margin: 0;
`
const spanStyle = css`
  text-decoration: underline;
  cursor: pointer;
  font-size: 2rem;
`

function AboutMe() {
  return (
    <div css={aboutContainer}>
      <div>
        <Shape left top='5rem'>
          <SvgItem
            src='/svg/shapes/shape6.svg'
            alt='shape6'
          />
        </Shape>
        <Typography
          header
          weight={700}
          size='64px'
          color='#464446'
          margin='0 0 4rem 100px'
        >
          ABOUT
          <br />
          ME
        </Typography>
        <Typography size='2rem' marginLeft='6rem'>
          Hi there! <br />
          I&apos;m Christian, a Colombian frontend web
          <br /> developer committed to creating attractive
          <br /> and efficient websites. If you need a<br />{' '}
          customized solution for your website,
          <br />
          <br /> feel free to{' '}
          <span css={spanStyle}>
            contact
          </span>{' '}
          me!
        </Typography>
      </div>
      <figure css={figureStyle}>
        <img
          style={{
            width: '100%',
            aspectRatio: '1/1',
            objectFit: 'cover',
          }}
          src='/images/chris.jpg'
          alt='Christian Andrade'
        />
      </figure>
    </div>
  )
}

export default AboutMe
