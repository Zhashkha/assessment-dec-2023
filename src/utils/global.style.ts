import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**/
  * {
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0px;
    height: 100%;
  }
  /* a blue color as a generic focus style */
  button:focus-visible {
    outline: 2px solid #4a90e2 !important;
    outline: -webkit-focus-ring-color auto 5px !important;
  }
  a {
    text-decoration: none;
  }
`;

export const GlobalVariables: { [key: string]: string | number } = {
  baseFontFamily: "Inter-SemiBold, Helvetica",
  baseFontSize: "14px",
  baseFontStyle: "normal",
  baseFontWeight: 600,
  baseLetterSpacing: "-0.14px",
  baseLineHeight: "24px",
  captionFontFamily: "Inter-Medium, Helvetica",
  captionFontSize: "12px",
  captionFontStyle: "normal",
  captionFontWeight: 500,
  captionLetterSpacing: "-0.12px",
  captionLineHeight: "12px",
  h3FontFamily: "Inter-SemiBold, Helvetica",
  h3FontSize: "40px",
  h3FontStyle: "normal",
  h3FontWeight: 600,
  h3LetterSpacing: "-0.8px",
  h3LineHeight: "48px",
  neutral01: "rgba(252, 252, 252, 1)",
  neutral03: "rgba(239, 239, 239, 1)",
  neutral04: "rgba(111, 118, 126, 1)",
  neutral06: "rgba(39, 43, 48, 1)",
  neutral07: "rgba(26, 29, 31, 1)",
  neutralshadeDark04: "rgba(111, 118, 126, 0.4)",
  secondary01: "rgba(153, 157, 255, 1)",
  secondary04: "rgba(96, 202, 87, 1)",
  secondary05: "rgba(255, 150, 244, 1)",
  titleFontFamily: "Inter-SemiBold, Helvetica",
  titleFontSize: "20px",
  titleFontStyle: "normal",
  titleFontWeight: 600,
  titleLetterSpacing: "-0.4px",
  titleLineHeight: "32px",
};
