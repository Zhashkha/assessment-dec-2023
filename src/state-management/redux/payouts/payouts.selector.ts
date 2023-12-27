import { createSelector } from "reselect";

import { RootState } from "../root.types";

const selectPayoutsReducer = (state: RootState) => state.payouts;

export const selectPayouts = createSelector(
  [selectPayoutsReducer],
  (payoutsReducer) => payoutsReducer.payouts
);

export const selectPayoutsByPage = (page: number) =>
  createSelector([selectPayouts], (payouts) => payouts[page]);

export const selectIsPageFetched = (page: number) =>
  createSelector([selectPayouts], (payouts) => !!payouts[page]);

export const selectPayoutsPagination = createSelector(
  [selectPayoutsReducer],
  (payoutsReducer) => payoutsReducer.pagination
);

export const selectPayoutsPageIndex = createSelector(
  [selectPayoutsPagination],
  (payoutsPagination) => payoutsPagination.pageIndex
);

export const selectPayoutsIsPageChangedFromUI = createSelector(
  [selectPayoutsReducer],
  (payoutsReducer) => payoutsReducer.isPageChangedFromUI
);

export const selectPayoutsItemsPerPage = createSelector(
  [selectPayoutsPagination],
  (payoutsPagination) => payoutsPagination.itemsPerPage
);

export const selectPayoutsFilter = createSelector(
  [selectPayoutsReducer],
  (payoutsReducer) => payoutsReducer.filter
);

export const selectPayoutsIsLoading = createSelector(
  [selectPayoutsReducer],
  (payoutsReducer) => payoutsReducer.isLoading
);

export const selectPayoutsIsFirstRun = createSelector(
  [selectPayoutsReducer],
  (payoutsReducer) => payoutsReducer.isFirstRun
);
