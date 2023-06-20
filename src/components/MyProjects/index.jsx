import Typography from '../Typography'
import styled from '@emotion/styled'
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

function MyProjects() {
  return (
    <section style={{ marginBottom: '10rem' }}>
      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <Shape right>
          <SvgItem
            src='src/assets/svg/shapes/shape1.svg'
            alt='shape1'
          />
        </Shape>
        <Shape left bottom='0'>
          <SvgItem
            src='src/assets/svg/shapes/shape2.svg'
            alt='shape2'
          />
        </Shape>
        <div
          style={{
            position: 'relative',
            zIndex: '1',
            top: '1.6rem',
          }}
        >
          <Typography
            bold
            fontSize='4rem'
            color='#464446'
            lineHeight='88%'
            fontWeight={700}
            textTransform='uppercase'
            marginLeft='6rem'
          >
            My <br />
            Projects
          </Typography>
        </div>
        <Splide
          hasTrack={false}
          aria-label='My Projects'
          tag='section'
          options={{
            perPage: 2,
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
                bold
                fontSize='2rem'
                color='#111111'
                lineHeight='88%'
                fontWeight={500}
                textTransform='uppercase'
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato2.png' alt='gato2' />
              <Typography
                bold
                fontSize='2rem'
                color='#111111'
                lineHeight='88%'
                fontWeight={500}
                textTransform='uppercase'
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato3.jpg' alt='gato3' />
              <Typography
                bold
                fontSize='2rem'
                color='#111111'
                lineHeight='88%'
                fontWeight={500}
                textTransform='uppercase'
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato4.jpg' alt='gato4' />
              <Typography
                bold
                fontSize='2rem'
                color='#111111'
                lineHeight='88%'
                fontWeight={500}
                textTransform='uppercase'
              >
                12/10/18 - WEATHER APP
              </Typography>
            </SplideSlide>
            <SplideSlide style={CustomSplideSlide}>
              <Img src='src/assets/images/gato5.jpg' alt='gato5' />
              <Typography
                bold
                fontSize='2rem'
                color='#111111'
                lineHeight='88%'
                fontWeight={500}
                textTransform='uppercase'
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
          bold
          fontSize='2rem'
          color='#464446'
          lineHeight='88%'
          fontWeight={500}
          textDecoration='underline'
          textTransform='uppercase'
          cursor='pointer'
          display='inline'
        >
          SEE ALL PROJECTS --&gt;
        </Typography>
      </div>
    </section>
  )
}

export default MyProjects
