import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PayoutHistoryContainer } from "./payout-history.styles";
import PayoutHistoryTitle from "../title/payout-history-title.component";
import PayoutHistoryList from "../list/_container/payout-history-list.component";
import {
  selectIsPageFetched,
  selectPayoutsFilter,
  selectPayoutsPagination
} from "../../../../../state-management/redux/payouts/payouts.selector";
import {
  clearPayouts,
  fetchPayoutsStart,
  setPayoutsPage
} from "../../../../../state-management/redux/payouts/payouts.action";
import { useIsMount } from "../../../../../utils/customHooks";

const PayoutHistory: React.FC = () => {
  const filter = useSelector(selectPayoutsFilter);
  const { pagesCount, pageIndex } = useSelector(selectPayoutsPagination);
  const isPageFetched = useSelector(selectIsPageFetched(pageIndex));
  const isMount = useIsMount();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMount) {
      return;
    }
    
    dispatch(clearPayouts());
    dispatch(setPayoutsPage(1));
    dispatch(fetchPayoutsStart(1, filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // TODO: nullify fetched pages after items per page is changes
  
  return (
    <PayoutHistoryContainer>
      <PayoutHistoryTitle />
      <PayoutHistoryList />
    </PayoutHistoryContainer>
  );
};

export default PayoutHistory;
