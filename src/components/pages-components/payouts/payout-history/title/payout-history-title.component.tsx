import {
  PayoutHistoryTitleContainer,
  PayoutHistoryTag,
  PayoutHistoryText
} from "./payout-history-title.styles";

const PayoutHistoryTitle: React.FC = () => {
  return (
    <PayoutHistoryTitleContainer>
      <PayoutHistoryTag />
      <PayoutHistoryText>Payout History</PayoutHistoryText>
    </PayoutHistoryTitleContainer>
  );
};

export default PayoutHistoryTitle;
