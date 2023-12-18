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
  baseFontFamily: "Inter",
  baseFontSize: "14px",
  baseFontStyle: "normal",
  baseFontWeight: 600,
  baseLetterSpacing: "-0.14px",
  baseLineHeight: "24px",
  captionFontFamily: "Inter",
  captionFontSize: "12px",
  captionFontStyle: "normal",
  captionFontWeight: 500,
  captionLetterSpacing: "-0.12px",
  captionLineHeight: "12px",
  pageTitleFontFamily: "Inter",
  pageTitleFontSize: "40px",
  pageTitleFontStyle: "normal",
  pageTitleFontWeight: 600,
  pageTitleLetterSpacing: "-0.8px",
  pageTitleLineHeight: "48px",
  colourNeutral01: "rgba(252, 252, 252, 1)",
  colourNeutral02: "rgba(111, 118, 126, 1)",
  colourNeutral03: "rgba(39, 43, 48, 1)",
  colourNeutral04: "rgba(26, 29, 31, 1)",
  colourNeutralShadeDark: "rgba(111, 118, 126, 0.4)",
  colourBackgroundDark: "rgba(244, 244, 244, 0.50)",
  colourBackgroundLight: "#fff",
  colourSecondary01: "rgba(153, 157, 255, 1)",
  colourSecondary02: "rgba(96, 202, 87, 1)",
  titleFontFamily: "Inter",
  titleFontSize: "20px",
  titleFontStyle: "normal",
  titleFontWeight: 600,
  titleLetterSpacing: "-0.4px",
  titleLineHeight: "32px"
};
