import Typography from '../Typography'
import { css } from '@emotion/react'
import Atropos from 'atropos/react'
import 'atropos/css'

const landingPageContainer = css`
  display: flex;
  margin: 80px 0;
  gap: 50px;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`
const rightSection = css`
  width: 50%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`

const leftSection = css`
  display: flex;
  gap: 20px;
  flex-direction: column;
  position: relative;
  font-size: 3.5rem;
  width: 50%;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`
const bgTypo = css`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const atropos = css`
  .atropos-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function LandingPage() {
  return (
    <div css={landingPageContainer}>
      <section css={leftSection}>
        <div css={bgTypo}>
          <Typography
            align='right'
            invert
            borders
            color='transparent'
            size='6rem'
            weight={700}
            font='ArchivoBlack, Akshar, san-serif'
            main
          >
            WEB
            <br /> DEV
            <br /> ELOPER
          </Typography>
          <Typography
            main
            borders
            color='transparent'
            size='5rem'
            font='ArchivoBlack, Akshar, san-serif'
          >
            {'</></></></></>'}
          </Typography>
          <Typography
            align='right'
            invert
            borders
            color='transparent'
            size='6rem'
            weight={700}
            font='ArchivoBlack, Akshar, san-serif'
            main
          >
            WEB
            <br /> DEV
            <br /> ELOPER
          </Typography>
        </div>
        <Typography weight={700} size='1em'>
          Hi!
        </Typography>
        <Typography weight={700} size='1em'>
          I&rsquo;m Christian Andrade
        </Typography>
        <Typography
          color='#FFB95F'
          size='6rem'
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
      <section css={rightSection}>
        <div style={{ margin: '0 auto' }}>
          <Atropos
            css={atropos}
            activeOffset={40}
            shadowScale={0}
            className='atropos my-atropos'
          >
            <div style={{ position: 'relative' }}>
              <img
                style={{ width: '100%', marginBottom: '18%' }}
                src='/svg/shapes/back-web.svg'
                data-atropos-offset='-6'
              />
              <img
                style={{
                  width: '50%',
                  position: 'absolute',
                  left: '8%',
                  top: '13%',
                }}
                src='/svg/shapes/front-web.svg'
                data-atropos-offset='-3'
              />
              <img
                style={{
                  width: '40%',
                  position: 'absolute',
                  top: '18%',
                  right: '3%',
                }}
                src='/svg/shapes/back-mobile.svg'
                data-atropos-offset='3'
              />
              <img
                style={{
                  width: '25%',
                  position: 'absolute',
                  top: '35%',
                  right: '10%',
                }}
                src='/svg/shapes/front-mobile.svg'
                data-atropos-offset='6'
              />
            </div>
          </Atropos>
        </div>
        <div
          style={{
            display: 'grid',
            placeContent: 'center',
            background:
              'linear-gradient(90deg, #A7DDF0 -14.03%, rgba(157, 224, 253, 0.51) 46.91%, rgba(217, 217, 217, 0) 85.97%)',
          }}
        >
          <Typography size='2rem' margin='40px 60px' weight={600}>
            TURNING IDEAS INTRO DIGITAL <br />
            REALITY {'{・・・}'}
          </Typography>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
