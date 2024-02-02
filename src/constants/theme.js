import { css } from '@emotion/react'

export const theme = {
  color: {
    primary: '#464646',
    secondary: '#979797',
    background: '#F9F6EE',
    orange: '#FFB95F',
    light: '#F2F2F2',
    white: '#FFF',
    shadow: '#64646F33',
    cardGradient: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
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
    src: url('/fonts/archivo-black/ArchivoBlack-Regular.woff2')
      format('woff2');
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'ArchivoBlack';
    src: url('/fonts/archivo-black/ArchivoBlack-Regular.woff2')
      format('woff2');
    font-weight: 400;
    font-display: swap;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    font-family: 'Akshar', sans-serif;
    border: none;
    background-color: transparent;
  }
  html {
    background-color: ${theme.color.background};
    font-size: 16px;
    font-family: 'Akshar', sans-serif;
    @media (max-width: 1200px) {
      font-size: 14px;
    }
    @media (max-width: 992px) {
      font-size: 12px;
    }
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
  body {
    margin: 0;
  }
`
