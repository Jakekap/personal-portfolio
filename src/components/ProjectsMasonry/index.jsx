import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Typography from '../Typography'
import { iconsDictionary } from '../../utils/iconsDictionary'
import Clip from '../Clip'

const ProjectsMasonryContainer = styled.div`
  width: 100%;
  margin: ${({ margin }) => margin || '3rem 0'};
  columns: 2;
  column-gap: 2rem;
  @media (max-width: 600px) {
    columns: 1;
  }
`
const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  margin: 1rem;
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.2s ease-out;
`
const ProjectsMasonryCard = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-bottom: 2rem;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    background: linear-gradient(to bottom, transparent, #173144);
    opacity: 0;
    transition: all 0.2s ease-out;
  }
  &:hover:before {
    opacity: 1;
  }
  &:hover ${CardContent} {
    display: flex;
    transition: all 0.2s ease-out;
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
`

export default function ProjectsMasonry({ margin, projects }) {
  return (
    <ProjectsMasonryContainer margin={margin}>
      {projects?.map((project, index) => (
        <ProjectsMasonryCard key={index}>
          <CardContent>
            <Typography
              header
              size='4rem'
              weight={700}
              margin='3rem 0'
              color='white'
            >
              {project?.displayTitle}
            </Typography>
            <div
              style={{
                width: '100%',
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              {project?.technologies?.map((technology, index) => (
                <Clip
                  key={index}
                  icon={iconsDictionary[technology]}
                  name={technology}
                />
              ))}
            </div>
          </CardContent>
          <CardImage
            src={project?.mainImage?.src}
            alt={'image' + index}
          />
        </ProjectsMasonryCard>
      ))}
    </ProjectsMasonryContainer>
  )
}
ProjectsMasonry.propTypes = {
  margin: PropTypes.string,
  projects: PropTypes.array.isRequired,
}
