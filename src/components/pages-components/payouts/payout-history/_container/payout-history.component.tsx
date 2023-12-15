import { PayoutHistoryContainer } from "./payout-history.component.styles";
import PayoutHistoryTitle from "../title/payout-history-title.component";
import List from "../../../../shared-components/list/_container/list.component";

const PayoutHistory: React.FC = () => {
  return (
    <PayoutHistoryContainer>
      <PayoutHistoryTitle />
      <List />
    </PayoutHistoryContainer>
  );
};

export default PayoutHistory;
