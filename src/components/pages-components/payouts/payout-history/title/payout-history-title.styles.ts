import styled from "styled-components";

export const PayoutHistoryTitleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  position: relative;
`;

export const PayoutHistoryTag = styled.div`
  background-color: ${(props) => props.theme.colourSecondary01};
  border-radius: 4px;
  height: 32px;
  width: 16px;
  position: relative;
`;

export const PayoutHistoryText = styled.span`
  color: ${(props) => props.theme.colourNeutral04};
  font-family: ${(props) => props.theme.titleFontFamily};
  font-size: ${(props) => props.theme.titleFontSize};
  font-style: ${(props) => props.theme.titleFontStyle};
  font-weight: ${(props) => props.theme.titleFontWeight};
  letter-spacing: ${(props) => props.theme.titleLetterSpacing};
  line-height: ${(props) => props.theme.titleLineHeight};
  white-space: nowrap;
  width: fit-content;
  position: relative;
`;
