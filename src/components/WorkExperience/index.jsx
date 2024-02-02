import Typography from '../Typography'
import Shape from '../Shape'
import { css } from '@emotion/react'
import { experienceData } from '../../constants'
import SvgItem from '../SvgItem'
import Accordion from '../Accordion'

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
      <Shape left='0'>
        <SvgItem src='/svg/shapes/shape3.svg' alt='shape3' />
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
            <Accordion
              accordionText={experience.description}
              key={index}
              experience={experience}
            />
          )
        })}
      </div>
    </section>
  )
}

export default WorkExperience
