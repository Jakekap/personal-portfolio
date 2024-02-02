import styled from '@emotion/styled'
import { theme } from '../../constants/theme'

const CustomParagraph = styled.p((props) => ({
  cursor: props.pointer ? 'pointer' : 'auto',
  display: props.inline ? 'inline' : 'block',
  textDecoration: props.underline ? 'underline' : 'none',
  color: props.color || theme.color.primary,
  fontSize: props.size || '1rem',
  fontWeight: props.weight || 400,
  fontFamily: props.font || 'Akshar, san-serif',
  transform: props.invert ? 'matrix(-1, 0, 0, 1, 0, 0)' : 'none',
  WebkitTextStroke: props.borders ? '1px #cccccc' : 'none',
  margin: props.margin || 0,
  lineHeight: props.main || props.header ? '88%' : '',
  letterSpacing: props.main ? '-0.1em' : '',
  textAlign: props.align,
  alignSelf: props.alignSelf,
  width: props.width,
  wordBreak: props.wordBreak,
  '@media (max-width: 1200px)': {
    margin: props.margin || 0,
  },
}))

export default function Typography(props) {
  return <CustomParagraph {...props}></CustomParagraph>
}
