import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import SvgItem from '../SvgItem'

const aboutContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  margin-bottom: 150px;
`
const figureStyle = css`
  width: 600px;
  height: 100%;
  margin: 0;
`

function AboutMe() {
  return (
    <div css={aboutContainer}>
      <div>
        <Shape left top='5rem'>
          <SvgItem
            src='src/assets/svg/shapes/shape6.svg'
            alt='shape6'
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
          marginBottom='4rem'
        >
          About
          <br />
          Me
        </Typography>
        <Typography fontSize='2rem' marginLeft='6rem'>
          Hi there! <br />
          I&apos;m Christian, a Colombian frontend web
          <br /> developer committed to creating attractive
          <br /> and efficient websites. If you need a<br />{' '}
          customized solution for your website,
          <br />
          <br /> feel free to{' '}
          <span
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
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
          src='src/assets/images/chris.jpg'
          alt='Christian Andrade'
        />
      </figure>
    </div>
  )
}

export default AboutMe
