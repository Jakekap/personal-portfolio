import { ScrollRestoration } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Typography from '../components/Typography/index.jsx'
import Divider from '../components/Divider/index.jsx'
import { videogamesData } from '../constants/artDesignData.js'
import styled from '@emotion/styled'
import {
  Splide,
  SplideSlide,
  SplideTrack,
} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../components/MyProjects/splideSyles.css'
import { MdArrowForwardIos } from 'react-icons/md'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% calc(35% - 20px);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 4rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const VideoPlayer = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  @media (max-width: 1200px) {
    grid-area: 1 / 1 / 1 / 2;
  }
  width: 100%;
`

export default function Videogames() {
  return (
    <div>
      <ScrollRestoration />
      <SectionTitle
        wordBreak
        customPadding='5rem 0'
        title='VIDEOGAMES'
      />
      <Typography
        header
        size='4rem'
        weight={700}
        margin='8rem 0 0 3rem'
      >
        {videogamesData[0].title}
      </Typography>
      <Divider />
      <Grid>
        <VideoPlayer>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/rTUz4ud2rHw?si=n5YV6MQlTCcmEIza'
            title='YouTube video player'
            style={{ border: 'none' }}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </VideoPlayer>
        <Splide
          hasTrack={false}
          aria-label='Where is my mind?'
          tag='section'
          options={{
            type: 'loop',
            perPage: 1,
            rewind: true,
            arrows: true,
            pagination: false,
            autoplay: true,
            pauseOnHover: false,
          }}
        >
          <SplideTrack>
            {videogamesData[0]?.images?.whereismymind?.map(
              (images, index) => {
                return (
                  <SplideSlide key={index}>
                    <Img src={images} alt={'whereismymind' + index} />
                  </SplideSlide>
                )
              }
            )}
          </SplideTrack>
          <div className='splide__progress'>
            <div className='splide__progress__bar'></div>
          </div>
          <div className='splide__arrows'>
            <button className='splide__arrow custom__arrow splide__arrow--prev'>
              <MdArrowForwardIos />
            </button>
            <button className='splide__arrow custom__arrow splide__arrow--next'>
              <MdArrowForwardIos />
            </button>
          </div>
        </Splide>
        <Splide
          hasTrack={false}
          aria-label='Where is my mind?'
          tag='section'
          options={{
            type: 'loop',
            perPage: 1,
            rewind: true,
            arrows: true,
            pagination: false,
            autoplay: true,
            pauseOnHover: false,
          }}
        >
          <SplideTrack>
            {videogamesData[0]?.images?.lainvacion?.map(
              (images, index) => {
                return (
                  <SplideSlide key={index}>
                    <Img src={images} alt={'lainvacion' + index} />
                  </SplideSlide>
                )
              }
            )}
          </SplideTrack>
          <div className='splide__progress'>
            <div className='splide__progress__bar'></div>
          </div>
          <div className='splide__arrows'>
            <button className='splide__arrow custom__arrow splide__arrow--prev'>
              <MdArrowForwardIos />
            </button>
            <button className='splide__arrow custom__arrow splide__arrow--next'>
              <MdArrowForwardIos />
            </button>
          </div>
        </Splide>
      </Grid>
    </div>
  )
}
