import { createGlobalStyle } from 'styled-components';

const fontStyle = `
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

const resetStyle = `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section, div {
    display: flex;
  }
  body {
    line-height: 1;
    color: #2c3333;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  p code {
    font-weight: 400;
    font-size: 15px;
    line-height: calc(1.66667);
  }
`;

const variableStyle = `
  :root {
    --sidebar-width: 270px;
    --content-width: 740px;
    --index-width: 300px;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${fontStyle}
  ${resetStyle}
  ${variableStyle}
`;

export default GlobalStyle;
