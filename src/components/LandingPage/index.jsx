import SvgItem from '../SvgItem'
import Typography from '../Typography'
import { css } from '@emotion/react'

const landingPageContainer = css`
  display: flex;
  margin: 0 100px 350px;
  gap: 50px;
  justify-content: space-between;
/* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
const landingSection = css`
  @media only screen and (max-width: 1200px) {
  }
`

const landingSectionText = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  position: relative;
  top: 100px;
  font-size: 3.5vw;
  @media only screen and (max-width: 1200px) {
    font-size: 5vw;
  }
`
const bgTypo = css`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`


function LandingPage() {
  return (
    <div
      css={landingPageContainer}
    >
      <section css={landingSectionText}>
      <div css={bgTypo}>
        <Typography
          align='right'
          invert
          borders
          color='transparent'
          size='2em'
          weight={700}
          font='ArchivoBlack, Akshar, san-serif'
          main
        >
          WEB<br/> DEV<br/> ELOPER
        </Typography>
        <Typography
          main
          borders
          color='transparent'
          size='1em'
          font='ArchivoBlack, Akshar, san-serif'
          >
            {'</></></></></>'}
          </Typography>
        <Typography
          align='right'
          invert
          borders
          color='transparent'
          size='2em'
          weight={700}
          font='ArchivoBlack, Akshar, san-serif'
          main
        >
          WEB<br/> DEV<br/> ELOPER
        </Typography>
      </div>
        <Typography weight={700} size='1em'>
          Hello!
        </Typography>
        <Typography weight={700} size='1em'>
          I&rsquo;m Christian Andrade
        </Typography>
        <Typography
          color='#FFB95F'
          size='2em'
          weight={700}
          font='ArchivoBlack, Akshar, san-serif'
          main
        >
          WEB
          <br /> DEV
          <br />
          ELOPER
        </Typography>
      </section>
      <section css={landingSection}>
        <div style={{minWidth: '440px', marginTop: '50px'}}>
          <SvgItem src='/svg/shapes/movile-device.svg' alt='Movile device' />
        </div>
        <div
          style={{
            display: 'grid',
            placeContent: 'center',
            position: 'absolute',
            background:
              'linear-gradient(90deg, #A7DDF0 -14.03%, rgba(157, 224, 253, 0.51) 46.91%, rgba(217, 217, 217, 0) 85.97%)',
          }}
        >
          <Typography
            size='32px'
            margin='40px 60px'
            weight={600}
          >
            TURNING IDEAS INTRO DIGITAL <br />
            REALITY {'{・・・}'}
          </Typography>
        </div>
      </section>
    </div>
  )
}

export default LandingPage