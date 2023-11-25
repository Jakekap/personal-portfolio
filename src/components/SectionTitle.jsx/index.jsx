import Shape from '../Shape'
import SvgItem from '../SvgItem'
import Typography from '../Typography'
import PropTypes from 'prop-types'

export default function SectionTitle({ title, customPadding }) {
  return (
    <div style={{ position: 'relative' }}>
      <Shape left='-15px'>
        <SvgItem src='/svg/shapes/shape10.svg' alt='shape6' />
      </Shape>
      <div style={{ padding: customPadding || '3rem 0' }}>
        <Typography
          size='6rem'
          weight={700}
          font='ArchivoBlack, Akshar, san-serif'
          main
        >
          {title}
        </Typography>
      </div>
    </div>
  )
}
SectionTitle.propTypes = {
  title: PropTypes.element.isRequired,
  customPadding: PropTypes.string,
}
