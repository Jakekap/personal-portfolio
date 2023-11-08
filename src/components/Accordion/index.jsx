import { css } from '@emotion/react'
import { MdArrowForwardIos } from 'react-icons/md'
import { IconContext } from 'react-icons'
import Typography from '../Typography'
import PropTypes from 'prop-types'
import { useState } from 'react'
const wrapper = css`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease-in-out;
`

const wrapperOpen = css`
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.5s ease;
  box-shadow: 0px 12px 14px -3px rgba(0, 0, 0, 0.1);
`

const inner = css`
  overflow: hidden;
  margin: 0 3rem;
`

const expItem = css`
  width: 50%;
  margin-bottom: 3rem;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`
const titleContainer = css`
  display: flex;
`

const arrowButton = css`
  display: grid;
  place-content: center;
  background: none;
  border: none;
  cursor: pointer;
  margin: auto 0;
  margin-right: 1rem;
  height: 50px;
  aspect-ratio: 1 / 1;
  border: 1px solid transparent;
  transition: border 0.1s ease;
  :hover {
    border: 1px solid #464646;
  }
`

const expText = css`
  font-size: 1.8rem;
`

export default function Accordion({ experience, accordionText }) {
  const [openAccordion, setOpenAccordion] = useState(false)
  return (
    <div css={expItem}>
      <div css={titleContainer}>
        <button
          onClick={() => setOpenAccordion(!openAccordion)}
          css={arrowButton}
        >
          <IconContext.Provider
            value={{
              color: '#464446',
              size: '40px',
              style: {
                transform: openAccordion
                  ? 'rotate(90deg)'
                  : 'rotate(0)',
                transition: 'transform 0.2s ease',
              },
            }}
          >
            <MdArrowForwardIos />
          </IconContext.Provider>
        </button>
        <div>
          <Typography size='2.3rem' weight={700}>
            {`${experience.profession} AT ${experience.company}`}
          </Typography>
          <Typography color='#979797' size='2rem' weight={400}>
            {`${experience.startDate} - ${experience.endDate}`}
          </Typography>
        </div>
      </div>
      <div css={openAccordion ? wrapperOpen : wrapper}>
        <div css={inner}>
          <p css={expText}>{accordionText}</p>
        </div>
      </div>
    </div>
  )
}
Accordion.propTypes = {
  experience: PropTypes.object,
  accordionText: PropTypes.string,
}
