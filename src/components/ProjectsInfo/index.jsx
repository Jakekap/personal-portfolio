import Typography from '../Typography'
import Divider from '../Divider'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { BsGithub } from 'react-icons/bs'
import { LuExternalLink } from 'react-icons/lu'
import { IconContext } from 'react-icons'
import Masonry from '../Masonry'
import Clip from '../Clip'
import newPage from '../../utils/newPage'
import { iconsDictionary } from '../../utils/iconsDictionary'

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
const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export default function ProjectsInfo({ project }) {
  const projectImages = project?.images?.map((image) => image.src)
  const handleClick = (url) => {
    newPage(url)
  }
  return (
    <IconContext.Provider value={{ size: '35px' }}>
      <Typography header size='4rem' weight={700} margin='0 0 0 3rem'>
        {project.displayTitle}
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
            <IconButton onClick={() => handleClick(project.repo)}>
              <BsGithub />
            </IconButton>
            <IconButton onClick={() => handleClick(project.demo)}>
              <LuExternalLink />
            </IconButton>
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
              {project.category}
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
              {project.year}
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
            {project?.technologies?.map((technology, index) => (
              <Clip
                icon={iconsDictionary[technology]}
                key={index}
                name={technology}
              />
            ))}
          </div>
        </DataGrid>
        <Typography css={description} size='2rem' weight={400}>
          {project.description}
        </Typography>
      </InfoContainer>
      <Masonry images={projectImages} />
    </IconContext.Provider>
  )
}
ProjectsInfo.propTypes = {
  project: PropTypes.object,
}
