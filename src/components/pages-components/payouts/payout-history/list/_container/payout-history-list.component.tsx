import { useDispatch, useSelector } from "react-redux";

import { PayoutHistoryListContainer } from "./payout-history-list.styles";
import PayoutHistoryListSearch from "../../search/search.component";
import PayoutHistoryListHeader from "../list-header/payout-history-list-header.component";
import PayoutHistoryListItem from "../list-item/payout-history-list-item.component";
import PaginationItemsPerPage from "../../../../../shared-components/pagination/items-per-page/items-per-page.component";
import Spinner from "../../../../../general-components/spinner/spinner.component";
import {
  selectPayoutsByPage,
  selectPayoutsIsLoading,
  selectPayoutsItemsPerPage,
  selectPayoutsPageIndex
} from "../../../../../../state-management/redux/payouts/payouts.selector";
import { PayoutDataItem } from "../../../../../../state-management/redux/payouts/payouts.data-types";
import { setPayoutsItemsPerPage } from "../../../../../../state-management/redux/payouts/payouts.action";

const PayoutHistoryList: React.FC = () => {
  const isLoading: boolean = useSelector(selectPayoutsIsLoading);
  const pageIndex: number = useSelector(selectPayoutsPageIndex);
  const itemsPerPage: number = useSelector(selectPayoutsItemsPerPage);
  const payouts: PayoutDataItem[] = useSelector(selectPayoutsByPage(pageIndex));
  const dispatch = useDispatch();
  
  const handleSetItemsPerPage = (itemsPerPage: number) => {
    dispatch(setPayoutsItemsPerPage(itemsPerPage));
  };

  return (
    <PayoutHistoryListContainer>
      <PayoutHistoryListSearch />
      <PaginationItemsPerPage
        label="Items Per Page:"
        itemsPerPageValues={[10, 20, 50, 100]}
        currentValue={itemsPerPage}
        setItemsPerPage={handleSetItemsPerPage}
      />
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
