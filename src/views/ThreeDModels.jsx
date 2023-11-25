import { ScrollRestoration } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import Typography from '../components/Typography/index.jsx'
import Divider from '../components/Divider/index.jsx'
import { threeDModelsData } from '../constants/artDesignData.js'
import ReactPlayer from 'react-player'
import styled from '@emotion/styled'

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ModelsContainer = styled.div`
  margin-bottom: 5rem;
`

export default function ThreeDModels() {
  return (
    <div>
      <ScrollRestoration />
      <SectionTitle customPadding='5rem 0' title='3D MODELS' />
      {threeDModelsData.map((model) => {
        const extension = model?.content
          ?.split('.')
          ?.pop()
          ?.toLowerCase()
        return (
          <ModelsContainer key={model.id}>
            <Typography
              header
              size='4rem'
              weight={700}
              margin='8rem 0 0 3rem'
            >
              {model.title} - {model.year}
            </Typography>
            <Divider />
            {extension === 'mp4' ? (
              <ReactPlayer
                url={model.content}
                width='100%'
                height='100%'
                controls={true}
              />
            ) : (
              <Img src={model.content} />
            )}
          </ModelsContainer>
        )
      })}
    </div>
  )
}
