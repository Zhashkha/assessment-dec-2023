import { PayoutHistoryContainer } from "./payout-history.styles";
import PayoutHistoryTitle from "../title/payout-history-title.component";
import PayoutHistoryList from "../list/_container/payout-history-list.component";

const PayoutHistory: React.FC = () => {
  return (
    <PayoutHistoryContainer>
      <PayoutHistoryTitle />
      <PayoutHistoryList />
    </PayoutHistoryContainer>
  );
};

export default PayoutHistory;
