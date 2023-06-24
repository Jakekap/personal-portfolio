import { css } from "@emotion/react"


export const theme = {
  color: {
    primary: '#464646',
    secondary: '#979797',
    background: '#F9F6EE',
    orange: '#FFB95F',
    light: '#F2F2F2',
    shadow: '#64646F33',
    cardGradient: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'
  },
}


export const globalStyles = css`
  @font-face {
  font-family: 'Akshar';
  src: url('/fonts/akshar/Akshar-Light.woff2') format('woff2');
  font-weight: 300;
  font-display: swap;
  }
  @font-face {
    font-family: 'Akshar';
    src: url('/fonts/akshar/Akshar-Regular.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Akshar';
    src: url('/fonts/akshar/Akshar-Bold.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'ArchivoBlack';
    src: url('/fonts/archivo-black/ArchivoBlack-Regular.woff2') format('woff2');
    font-weight: 700;
    font-display: swap;
  }
  * {
    box-sizing: border-box;
  }
  html {
    background-color: ${theme.color.background};
    font-size: 16px;
    font-family: 'Akshar', san-serif;
  }
  body {
    margin: 0;
  }
`
