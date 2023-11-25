import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Typography from '../Typography'
import { iconsDictionary } from '../../utils/iconsDictionary'
import { useNavigate } from 'react-router-dom'
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
  opacity: 0;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.2s ease-out;
`
const ProjectsMasonryCard = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
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
    opacity: 1;
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
  const navigate = useNavigate()
  const handleProject = (project) => {
    navigate(`/project/${project.id}`)
  }
  return (
    <ProjectsMasonryContainer margin={margin}>
      {projects?.map((project, index) => (
        <ProjectsMasonryCard
          onClick={() => handleProject(project)}
          key={index}
        >
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
