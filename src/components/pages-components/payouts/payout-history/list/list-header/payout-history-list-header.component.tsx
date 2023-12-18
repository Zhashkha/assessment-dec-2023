import {
  HeaderText,
  PayoutHistoryListHeaderContainer
} from "./payout-history-list-header.styles";

const PayoutHistoryListHeader: React.FC = () => {
  return (
    <PayoutHistoryListHeaderContainer>
      <HeaderText>Date &amp; Time</HeaderText>
      <HeaderText className="headerUsername">Username</HeaderText>
      <HeaderText className="headerStatus">Status</HeaderText>
      <HeaderText className="headerAmount">Amount</HeaderText>
    </PayoutHistoryListHeaderContainer>
  );
};

export default PayoutHistoryListHeader;
