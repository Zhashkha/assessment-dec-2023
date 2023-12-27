import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PayoutHistoryContainer } from "./payout-history.styles";
import PayoutHistoryTitle from "../title/payout-history-title.component";
import PayoutHistoryList from "../list/_container/payout-history-list.component";
import Pagination from "../../../../shared-components/pagination/_container/pagination.component";
import {
  selectIsPageFetched,
  selectPayoutsFilter,
  selectPayoutsPagination,
  selectPayoutsIsFirstRun,
  selectPayoutsIsPageChangedFromUI
} from "../../../../../state-management/redux/payouts/payouts.selector";
import {
  clearPayouts,
  fetchPayoutsStart,
  setPayoutsIsPageChangedFromUI,
  setPayoutsPage
} from "../../../../../state-management/redux/payouts/payouts.action";
import { useIsMount } from "../../../../../utils/customHooks";

const PayoutHistory: React.FC = () => {
  const isFirstRun = useSelector(selectPayoutsIsFirstRun);
  const { pagesCount, pageIndex, itemsPerPage } = useSelector(
    selectPayoutsPagination
  );
  const isPageFetched = useSelector(selectIsPageFetched(pageIndex));
  const isPageChangedFromUI = useSelector(selectPayoutsIsPageChangedFromUI);
  const filter = useSelector(selectPayoutsFilter);
  const isMount = useIsMount();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFirstRun) {
      return;
    }

    dispatch(setPayoutsPage(1));
    dispatch(fetchPayoutsStart(1, itemsPerPage, filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isMount) {
      return;
    }

    if (!isPageFetched && isPageChangedFromUI) {
      dispatch(fetchPayoutsStart(pageIndex, itemsPerPage, filter));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex]);

  useEffect(() => {
    if (isMount) {
      return;
    }

    dispatch(setPayoutsIsPageChangedFromUI(false));
    dispatch(clearPayouts());
    dispatch(setPayoutsPage(1));
    dispatch(fetchPayoutsStart(1, itemsPerPage, filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsPerPage]);

  useEffect(() => {
    if (isMount) {
      return;
    }

    dispatch(setPayoutsIsPageChangedFromUI(false));
    dispatch(clearPayouts());
    dispatch(setPayoutsPage(1));
    dispatch(fetchPayoutsStart(1, itemsPerPage, filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleSetPage = (pageIndex: number) => {
    dispatch(setPayoutsIsPageChangedFromUI(true));
    dispatch(setPayoutsPage(pageIndex));
  };

  return (
    <PayoutHistoryContainer>
      <PayoutHistoryTitle />
      <PayoutHistoryList />
      <Pagination
        pagesCount={pagesCount}
        page={pageIndex}
        setPage={handleSetPage}
      />
    </PayoutHistoryContainer>
  );
};

export default PayoutHistory;
