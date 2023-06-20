import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import { MdArrowForwardIos } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { experienceData } from '../../constants'
import SvgItem from '../SvgItem'

const workExperienceStyle = css`
  position: relative;
  margin-bottom: 250px;
`

function WorkExperience() {
  return (
    <section css={workExperienceStyle}>
      <Shape left>
        <SvgItem
          src='src/assets/svg/shapes/shape3.svg'
          alt='shape3'
        />
      </Shape>
      <Typography
        bold
        fontSize='4rem'
        color='#464446'
        lineHeight='88%'
        fontWeight={700}
        textTransform='uppercase'
        marginLeft='6rem'
      >
        Work <br />
        Experience
      </Typography>
      <div
        style={{
          display: 'flex',
          height: '7rem',
          marginTop: '4rem',
        }}
      >
        {experienceData.map((experience, index) => {
          return (
            <div
              key={index}
              style={{
                width: '50%',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gridTemplateRows: 'repeat(2, 1fr)',
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

              <Typography fontSize='36px' fontWeight={600}>
                {`${experience.profession} AT ${experience.company}`}
              </Typography>
              <Typography
                color='#979797'
                fontSize='24px'
                fontWeight={600}
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
