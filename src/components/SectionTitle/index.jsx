import Shape from '../Shape'
import SvgItem from '../SvgItem'
import Typography from '../Typography'
import PropTypes from 'prop-types'

export default function SectionTitle({
  title,
  customPadding,
  wordBreak,
  fontSize,
  customShape,
  fontWeight,
  light,
}) {
  return (
    <div style={{ position: 'relative' }}>
      <Shape width={120 * fontSize || 'auto'} left='-15px'>
        <SvgItem
          src={
            customShape
              ? `/svg/shapes/${customShape}.svg`
              : `/svg/shapes/shape10.svg`
          }
          alt='shape10'
        />
      </Shape>
      <div style={{ padding: customPadding || '3rem 0' }}>
        <Typography
          wordBreak={wordBreak ? 'break-all' : 'normal'}
          size={fontSize ? `${fontSize}rem` : '6rem'}
          weight={fontWeight ? fontWeight : 700}
          font={
            light
              ? 'Akshar, san-serif'
              : 'ArchivoBlack, Akshar, san-serif'
          }
          main={!light}
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
