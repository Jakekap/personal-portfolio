import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import { MdArrowForwardIos } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { experienceData } from '../../constants'
import SvgItem from '../SvgItem'

const workExperienceStyle = css`
  position: relative;
  margin-bottom: 7rem;
`

const expContainer = css`
  display: flex;
  margin-top: 4rem;
  @media only screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

function WorkExperience() {
  return (
    <section css={workExperienceStyle}>
      <Shape left>
        <SvgItem
          src='/svg/shapes/shape3.svg'
          alt='shape3'
        />
      </Shape>
      <Typography
        header
        size='4rem'
        color='#464446'
        weight={700}
        margin='0 0 3rem 3rem'
      >
        WORK <br />
        EXPERIENCE
      </Typography>
      <div css={expContainer}>
        {experienceData.map((experience, index) => {
          return (
            <div
              key={index}
              style={{
                width: '50%',
                display: 'grid',
                gridTemplateColumns: '60px 1fr',
                gridAutoFlow: 'column',
                marginBottom: '3rem',
              }}
            >
              <IconContext.Provider
                value={{
                  color: '#464446',
                  size: '40px',
                  style: {
                    gridRow: '1 / span 2',
                    margin: 'auto 0',
                  },
                }}
              >
                <MdArrowForwardIos />
              </IconContext.Provider>

              <Typography size='2.3rem' weight={700}>
                {`${experience.profession} AT ${experience.company}`}
              </Typography>
              <Typography
                color='#979797'
                size='2rem'
                weight={400}
              >
                {`${experience.startDate} - ${experience.endDate}`}
              </Typography>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default WorkExperience
