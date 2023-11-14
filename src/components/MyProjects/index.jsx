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
import { useEffect, useState } from 'react'
import { projectsData } from '../../constants/projectsData'
import { useNavigate } from 'react-router-dom'

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CustomFigure = styled.figure`
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #173144);
    opacity: 0;
    transition: all 0.2s ease-out;
  }
  &:hover:before {
    opacity: 1;
  }
`

const CustomSplideSlide = {
  display: 'flex',
  flexDirection: 'column',
}

const SeeAllProjects = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  img {
    transition: transform 0.1s ease-in-out;
  }
  :hover {
    cursor: pointer;
    img {
      transform: translateX(10px);
    }
  }
`

const CustomArrow = styled.img`
  width: 2rem;
`

function MyProjects() {
  const navigate = useNavigate()
  const handleAllProjects = () => {
    navigate('/projects')
  }
  const handleClick = (id) => {
    navigate('/project/' + id)
  }
  const [page, setPage] = useState(2)
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setPage(1)
    } else {
      setPage(2)
    }
  }, [window.innerWidth])

  return (
    <section style={{ marginBottom: '10rem' }}>
      <div style={{ marginBottom: '3rem', position: 'relative' }}>
        <Shape right>
          <SvgItem src='/svg/shapes/shape1.svg' alt='shape1' />
        </Shape>
        <Shape left bottom='0'>
          <SvgItem src='/svg/shapes/shape2.svg' alt='shape2' />
        </Shape>
        <div
          style={{
            position: 'relative',
            zIndex: '1',
            top: '1.4rem',
          }}
        >
          <Typography
            header
            size='4rem'
            weight={700}
            margin='0 0 0 3rem'
          >
            OUTSTANDING <br />
            PROJECTS
          </Typography>
        </div>
        <Splide
          hasTrack={false}
          aria-label='MY PROJECTS'
          tag='section'
          options={{
            perPage: page,
            rewind: true,
            arrows: true,
            pagination: false,
            gap: '2rem',
          }}
        >
          <SplideTrack>
            {projectsData.map((project) => (
              <SplideSlide
                onClick={() => handleClick(project.id)}
                key={project.id}
                style={CustomSplideSlide}
              >
                <CustomFigure>
                  <Img
                    src={project.mainImage.src}
                    alt={project.mainImage.alt}
                  />
                </CustomFigure>
                <Typography size='2rem' weight={400}>
                  {`${project.date} - ${project.displayTitle}`}
                </Typography>
              </SplideSlide>
            ))}
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
      <SeeAllProjects onClick={handleAllProjects}>
        <Typography size='2rem' weight={700} underline pointer inline>
          SEE ALL PROJECTS
        </Typography>
        <CustomArrow src='/svg/icons/right-arrow.svg' alt='arrow' />
      </SeeAllProjects>
    </section>
  )
}

export default MyProjects
