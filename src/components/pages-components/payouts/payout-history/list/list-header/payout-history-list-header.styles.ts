import styled from "styled-components";

export const PayoutHistoryListHeaderContainer = styled.div`
  width: 100%;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  margin-top: 20px;
  padding: 16px 24px;
  position: relative;
  background-color: ${(props) => props.theme.colourBackgroundLight};
`;

export const HeaderText = styled.span`
  width: 136px;
  color: ${(props) => props.theme.colourNeutral02};
  font-family: ${(props) => props.theme.captionFontFamily};
  font-size: ${(props) => props.theme.captionFontSize};
  font-style: ${(props) => props.theme.captionFontStyle};
  font-weight: ${(props) => props.theme.captionFontWeight};
  letter-spacing: ${(props) => props.theme.captionLetterSpacing};
  line-height: ${(props) => props.theme.captionLineHeight};
  position: relative;

  @media (max-width: 768px) {
    &.headerUsername {
      display: none;
    }
  }

  @media (max-width: 425px) {
    &.headerStatus {
      display: none;
    }
  }

  @media (max-width: 320px) {
    &.headerAmount {
      display: none;
    }
  }
`;
