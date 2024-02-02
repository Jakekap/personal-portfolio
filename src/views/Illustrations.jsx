import { ScrollRestoration } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import Typography from '../components/Typography/index.jsx'
import Divider from '../components/Divider/index.jsx'
import { illustrationsData } from '../constants/artDesignData.js'
import Masonry from '../components/Masonry'
import styled from '@emotion/styled'
import React, { useState } from 'react'

const ContentContainer = styled.div`
  margin-bottom: 5rem;
`

const PopUpContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
`

const PopUpImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 95%;
  max-height: 95%;
  object-fit: contain;
`

export default function Illustrations() {
  const [selectedImage, setSelectedImage] = useState(null)
  return (
    <div>
      <ScrollRestoration />
      <SectionTitle
        wordBreak
        customPadding='5rem 0'
        title='ILLUSTRATIONS'
      />
      <ContentContainer>
        {illustrationsData?.map((illustration) => {
          return (
            <React.Fragment key={illustration?.id}>
              <Typography
                header
                size='4rem'
                weight={700}
                margin='8rem 0 0 3rem'
              >
                {illustration?.title} - {illustration?.year}
              </Typography>
              <Divider />
              <Masonry
                hover
                setSelectedImage={setSelectedImage}
                images={illustration?.images}
                columns={3}
              />
            </React.Fragment>
          )
        })}
        {selectedImage && (
          <PopUpContainer onClick={() => setSelectedImage(null)}>
            <PopUpImage src={selectedImage} alt='enlarged pic' />
          </PopUpContainer>
        )}
      </ContentContainer>
    </div>
  )
}
