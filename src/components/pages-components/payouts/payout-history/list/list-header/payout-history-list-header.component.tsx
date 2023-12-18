import {
  HeaderText,
  PayoutHistoryListHeaderContainer
} from "./payout-history-list-header.styles";

const PayoutHistoryListHeader: React.FC = () => {
  return (
    <PayoutHistoryListHeaderContainer>
      <HeaderText>Date &amp; Time</HeaderText>
      <HeaderText>Username</HeaderText>
      <HeaderText>Status</HeaderText>
      <HeaderText>Amount</HeaderText>
    </PayoutHistoryListHeaderContainer>
  );
};

export default PayoutHistoryListHeader;
