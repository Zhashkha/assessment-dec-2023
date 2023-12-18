import styled from "styled-components";

export const PayoutsTitleContainer = styled.div`
  width: fit-content;
  white-space: nowrap;
  color: ${(props) => props.theme.colourNeutral03};
  font-family: ${(props) => props.theme.pageTitleFontFamily};
  font-size: ${(props) => props.theme.pageTitleFontSize};
  font-style: ${(props) => props.theme.pageTitleFontStyle};
  font-weight: ${(props) => props.theme.pageTitleFontWeight};
  letter-spacing: ${(props) => props.theme.pageTitleLetterSpacing};
  line-height: ${(props) => props.theme.pageTitleLineHeight};
`;
