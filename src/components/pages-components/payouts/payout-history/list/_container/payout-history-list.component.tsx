import { useSelector } from "react-redux";

import { PayoutHistoryListContainer } from "./payout-history-list.styles";
import PayoutHistoryListSearch from "../../search/search.component";
import PayoutHistoryListHeader from "../list-header/payout-history-list-header.component";
import PayoutHistoryListItem from "../list-item/payout-history-list-item.component";
import {
  selectPayoutsByPage,
  selectPayoutsIsLoading,
  selectPayoutsPageIndex
} from "../../../../../../state-management/redux/payouts/payouts.selector";
import { PayoutDataItem } from "../../../../../../state-management/redux/payouts/payouts.data-types";
import Spinner from "../../../../../general-components/spinner/spinner.component";

const PayoutHistoryList: React.FC = () => {
  const isLoading: boolean = useSelector(selectPayoutsIsLoading);
  const pageIndex: number = useSelector(selectPayoutsPageIndex);
  const payouts: PayoutDataItem[] = useSelector(selectPayoutsByPage(pageIndex));

  return (
    <PayoutHistoryListContainer>
      <PayoutHistoryListSearch />
      <PayoutHistoryListHeader />
      {isLoading ? (
        <Spinner />
      ) : (
        payouts &&
        payouts.map((payoutItem, index) => (
          <PayoutHistoryListItem
            key={payoutItem.id}
            parity={index % 2}
            data={payoutItem}
          />
        ))
      )}
    </PayoutHistoryListContainer>
  );
};

export default PayoutHistoryList;
