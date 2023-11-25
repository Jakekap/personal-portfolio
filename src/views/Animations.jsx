import { ScrollRestoration } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import Typography from '../components/Typography/index.jsx'
import Divider from '../components/Divider/index.jsx'
import { animationsData } from '../constants/artDesignData.js'
import styled from '@emotion/styled'
import React from 'react'

const ContentContainer = styled.div`
  margin-bottom: 5rem;
`

const VideoPlayer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
`

export default function Animations() {
  return (
    <div>
      <ScrollRestoration />
      <SectionTitle customPadding='5rem 0' title='3D MODELS' />
      <ContentContainer>
        {animationsData?.map((animation) => {
          return (
            <React.Fragment key={animation?.id}>
              <Typography
                header
                size='4rem'
                weight={700}
                margin='8rem 0 0 3rem'
              >
                {animation?.title} - {animation?.year}
              </Typography>
              <Divider />
              <VideoPlayer>
                <iframe
                  width='100%'
                  height='100%'
                  src={animation?.trailerUrl}
                  title='YouTube video player'
                  style={{ border: 'none' }}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe>
              </VideoPlayer>
            </React.Fragment>
          )
        })}
      </ContentContainer>
    </div>
  )
}
