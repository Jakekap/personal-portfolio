import { ScrollRestoration } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import Typography from '../components/Typography/index.jsx'
import Divider from '../components/Divider/index.jsx'
import { pixelartData } from '../constants/artDesignData.js'
import {
  Splide,
  SplideSlide,
  SplideTrack,
} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import '../components/MyProjects/splideSyles.css'
import { MdArrowForwardIos } from 'react-icons/md'
import styled from '@emotion/styled'

const Img = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
const ImgContainer = styled.div`
  width: 180px;
  height: 180px;
  display: grid;
  place-content: center;
`
const AssetsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
const AssetsCard = styled.div`
  padding: 2rem;
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export default function Pixelart() {
  const propsUrls = pixelartData[0]?.images?.props
  const tilesUrls = pixelartData[0]?.images?.tiles
  return (
    <div>
      <ScrollRestoration />
      <SectionTitle customPadding='5rem 0' title='PIXEL ART' />
      <Typography
        header
        size='4rem'
        weight={700}
        margin='8rem 0 0 3rem'
      >
        {pixelartData[0].title} - {pixelartData[0].year}
      </Typography>
      <Divider />
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
          {pixelartData[0]?.images?.main?.map((images, index) => {
            return (
              <SplideSlide key={index}>
                <Img src={images} alt={'whereismymind' + index} />
              </SplideSlide>
            )
          })}
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
      <AssetsContainer>
        <div>
          <Typography
            header
            size='4rem'
            weight={700}
            margin='4rem 0 0 3rem'
          >
            PROPS
          </Typography>
          <Divider />
          <AssetsCard>
            {propsUrls?.map((props, index) => {
              return (
                <ImgContainer key={index}>
                  <Img src={props} alt={'props' + index} />
                </ImgContainer>
              )
            })}
          </AssetsCard>
        </div>
        <div>
          <Typography
            header
            size='4rem'
            weight={700}
            margin='4rem 0 0 3rem'
          >
            TILES
          </Typography>
          <Divider />
          <AssetsCard>
            {tilesUrls?.map((tiles, index) => {
              return (
                <ImgContainer key={index}>
                  <Img src={tiles} alt={'tiles' + index} />
                </ImgContainer>
              )
            })}
          </AssetsCard>
        </div>
      </AssetsContainer>
      <Typography
        header
        size='4rem'
        weight={700}
        margin='8rem 0 0 3rem'
      >
        {pixelartData[0].title} - {pixelartData[0].year}
      </Typography>
      <Divider />
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
          {pixelartData[0]?.images?.main?.map((images, index) => {
            return (
              <SplideSlide key={index}>
                <Img src={images} alt={'whereismymind' + index} />
              </SplideSlide>
            )
          })}
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
      <AssetsContainer>
        <div>
          <Typography
            header
            size='4rem'
            weight={700}
            margin='4rem 0 0 3rem'
          >
            PROPS
          </Typography>
          <Divider />
          <AssetsCard>
            {propsUrls?.map((props, index) => {
              return (
                <ImgContainer key={index}>
                  <Img src={props} alt={'props' + index} />
                </ImgContainer>
              )
            })}
          </AssetsCard>
        </div>
        <div>
          <Typography
            header
            size='4rem'
            weight={700}
            margin='4rem 0 0 3rem'
          >
            TILES
          </Typography>
          <Divider />
          <AssetsCard>
            {tilesUrls?.map((tiles, index) => {
              return (
                <ImgContainer key={index}>
                  <Img src={tiles} alt={'tiles' + index} />
                </ImgContainer>
              )
            })}
          </AssetsCard>
        </div>
      </AssetsContainer>
    </div>
  )
}
