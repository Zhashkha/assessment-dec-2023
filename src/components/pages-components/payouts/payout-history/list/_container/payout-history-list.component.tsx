import { PayoutHistoryListContainer } from "./payout-history-list.styles";
import PayoutHistoryListHeader from "../list-header/payout-history-list-header.component";
import PayoutHistoryListItem from "../list-item/payout-history-list-item.component";

import PAYOUT_DATA from "../../data";

const PayoutHistoryList: React.FC = () => {
  const { data: payouts } = PAYOUT_DATA;

  return (
    <PayoutHistoryListContainer>
      <PayoutHistoryListHeader />
      {payouts &&
        payouts.map((payoutItem, index) => (
          <PayoutHistoryListItem
            key={payoutItem.id}
            parity={index % 2 === 0}
            data={payoutItem}
          />
        ))}
    </PayoutHistoryListContainer>
  );
};

export default PayoutHistoryList;
