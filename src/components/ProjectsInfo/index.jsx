import Typography from '../Typography'
import Divider from '../Divider'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { BsGithub } from 'react-icons/bs'
import { LuExternalLink } from 'react-icons/lu'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiSass } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { IconContext } from 'react-icons'
import { weatherImages } from '../../constants'
import Masonry from '../Masonry'
import Clip from '../Clip'

const DataGrid = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(0, auto);
  grid-column-gap: 0px;
  grid-row-gap: 3rem;
  @media (max-width: 900px) {
    width: 100%;
  }
`
const InfoContainer = styled.div`
  display: flex;
  margin: 0 3rem;
  margin-top: 3rem;
  gap: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const description = css`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`

export default function ProjectsInfo() {
  return (
    <IconContext.Provider value={{ size: '35px' }}>
      <Typography header size='4rem' weight={700} margin='0 0 0 3rem'>
        WEATHER APP
      </Typography>
      <Divider />
      <InfoContainer>
        <DataGrid>
          <div
            style={{
              gridArea: '1 / 1 / 2 / 2',
            }}
          >
            <Typography
              header
              size='2.6rem'
              color='#464446'
              weight={600}
            >
              REPO / DEMO
            </Typography>
          </div>
          <div
            style={{
              gridArea: '1 / 2 / 2 / 3',
              display: 'flex',
              gap: '30px',
            }}
          >
            <BsGithub />
            <LuExternalLink />
          </div>
          <div style={{ gridArea: '2 / 1 / 3 / 2' }}>
            <Typography
              header
              size='2.6rem'
              color='#464446'
              weight={600}
            >
              CATEGORY
            </Typography>
          </div>
          <div style={{ gridArea: '2 / 2 / 3 / 3' }}>
            <Typography
              header
              size='2.6rem'
              color='#979797'
              weight={400}
            >
              Utility
            </Typography>
          </div>
          <div style={{ gridArea: '3 / 1 / 4 / 2' }}>
            <Typography
              header
              size='2.6rem'
              color='#464446'
              weight={600}
            >
              YEAR
            </Typography>
          </div>
          <div style={{ gridArea: '3 / 2 / 4 / 3' }}>
            <Typography
              header
              size='2.6rem'
              color='#979797'
              weight={400}
            >
              2023
            </Typography>
          </div>
          <div style={{ gridArea: '4 / 1 / 5 / 2' }}>
            <Typography
              header
              size='2.6rem'
              color='#464446'
              weight={600}
            >
              TECHNOLOGIES
            </Typography>
          </div>
          <div style={{ gridArea: '4 / 2 / 5 / 3' }}></div>
          <div
            style={{
              gridArea: '5 / 1 / 6 / 3',
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <Clip icon={<IoLogoJavascript />} name='JavaScript' />
            <Clip icon={<SiSass />} name='Sass' />
            <Clip icon={<FaReact />} name='React' />
            <Clip icon={<ImHtmlFive />} name='HTML' />
          </div>
        </DataGrid>
        <Typography css={description} size='2rem' weight={400}>
          Explora el mundo con nuestra app de pronóstico global en
          tiempo real. Descubre al instante las condiciones
          meteorológicas actuales en múltiples países.
        </Typography>
      </InfoContainer>
      <Masonry images={weatherImages} />
    </IconContext.Provider>
  )
}
