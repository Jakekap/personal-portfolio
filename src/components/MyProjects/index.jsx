import Typography from '../Typography'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  Splide,
  SplideSlide,
  SplideTrack,
} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import './splideSyles.css'
import { MdArrowForwardIos } from 'react-icons/md'
import Shape from '../Shape'
import SvgItem from '../SvgItem'
import { useEffect, useState } from 'react'

const Img = styled('img')({
  marginBottom: '20px',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

const CustomSplideSlide = {
  display: 'flex',
  flexDirection: 'column',
}

const customSplide = css`
  @media only screen and (max-width: 1200px) {
  }
`

function MyProjects() {
  const [page, setPage] = useState(2)

  useEffect(() => {
      if (window.innerWidth < 1200) {
        setPage(1)
      } else {
        setPage(2)
      }
  }, [window.innerWidth])


  return (
    <section style={{ marginBottom: '10rem' }}>
      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <Shape right>
          <SvgItem
            src='/svg/shapes/shape1.svg'
            alt='shape1'
          />
        </Shape>
        <Shape left bottom='0'>
          <SvgItem
            src='/svg/shapes/shape2.svg'
            alt='shape2'
          />
        </Shape>
        <div
          style={{
            position: 'relative',
            zIndex: '1',
            top: '1.4rem',
          }}
        >
          <Typography
            header
            size='4rem'
            weight={700}
            margin='0 0 0 6rem'

          >
            MY <br />
            PROJECTS
          </Typography>
        </div>
        <Splide
          css={customSplide}
          hasTrack={false}
          aria-label='MY PROJECTS'
          tag='section'
          options={{
            perPage: page,
            rewind: true,
            arrows: true,
            pagination: false,
            gap: '2rem',
          }}
        >
          <SplideTrack>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato1.png' alt='gato1' />
              <Typography
                size='2rem'
                weight={400}
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato2.png' alt='gato2' />
              <Typography
                size='2rem'
                weight={400}
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato3.jpg' alt='gato3' />
              <Typography
                size='2rem'
                weight={400}
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato4.jpg' alt='gato4' />
              <Typography
                size='2rem'
                weight={400}
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato5.jpg' alt='gato5' />
              <Typography
                size='2rem'
                weight={400}
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
          </SplideTrack>
          <div className='splide__arrows'>
            <button className='splide__arrow custom__arrow splide__arrow--prev'>
              <MdArrowForwardIos />
            </button>
            <button className='splide__arrow custom__arrow splide__arrow--next'>
              <MdArrowForwardIos />
            </button>
          </div>
        </Splide>
      </div>
      <div>
        <Typography
          size='2rem'
          weight={700}
          underline
          pointer
          inline
        >
          SEE ALL PROJECTS --&gt;
        </Typography>
      </div>
    </section>
  )
}

export default MyProjects
