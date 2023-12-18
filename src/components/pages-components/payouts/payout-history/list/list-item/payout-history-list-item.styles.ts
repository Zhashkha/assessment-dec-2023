import styled from "styled-components";
import { PayoutStatus } from "../../../../../../state-management/redux/payouts/payouts.data-types"; 

export const PayoutHistoryListItemContainer = styled.div<{ parity: boolean }>`
  height: 48px;
  width: 100%;
  flex: 0 0 auto;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 24px;
  position: relative;
  background-color: ${(props) =>
    props.parity
      ? props.theme.colourBackgroundDark
      : props.theme.colourBackgroundLight};
`;

export const DateAndTimeText = styled.span`
  width: 136px;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.colourNeutral02};
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size: ${(props) => props.theme.baseFontSize};
  font-style: ${(props) => props.theme.baseFontStyle};
  font-weight: ${(props) => props.theme.baseFontWeight};
  letter-spacing: ${(props) => props.theme.baseLetterSpacing};
  line-height: ${(props) => props.theme.baseLineHeight};
`;

export const UsernameText = styled.span`
  width: 136px;
  position: relative;
  color: ${(props) => props.theme.colourNeutral02};
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size: ${(props) => props.theme.baseFontSize};
  font-style: ${(props) => props.theme.baseFontStyle};
  font-weight: ${(props) => props.theme.baseFontWeight};
  letter-spacing: ${(props) => props.theme.baseLetterSpacing};
  line-height: ${(props) => props.theme.baseLineHeight};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StatusContainer = styled.div`
  width: 136px;

  @media (max-width: 425px) {
    display: none;
  }
`;

export const StatusText = styled.span<{ status: PayoutStatus }>`
  width: fit-content;
  display: block;
  padding: 2px 8px;
  text-align: center;
  position: relative;
  white-space: nowrap;
  border-radius: 6px;
  background-color: ${(props) =>
    props.status === PayoutStatus.paid
      ? props.theme.colourSecondary02
      : props.theme.colourNeutralShadeDark};
  color: ${(props) => props.theme.colourNeutral04};
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size: ${(props) => props.theme.baseFontSize};
  font-style: ${(props) => props.theme.baseFontStyle};
  font-weight: ${(props) => props.theme.baseFontWeight};
  letter-spacing: ${(props) => props.theme.baseLetterSpacing};
  line-height: ${(props) => props.theme.baseLineHeight};
`;

export const AmountText = styled.span`
  width: 136px;
  position: relative;
  color: ${(props) => props.theme.colourNeutral04};
  font-family: ${(props) => props.theme.baseFontFamily};
  font-size: ${(props) => props.theme.baseFontSize};
  font-style: ${(props) => props.theme.baseFontStyle};
  font-weight: ${(props) => props.theme.baseFontWeight};
  letter-spacing: ${(props) => props.theme.baseLetterSpacing};
  line-height: ${(props) => props.theme.baseLineHeight};

  @media (max-width: 320px) {
    display: none;
  }
`;
