import { PAYOUTS_ACTION_TYPES } from "./payouts.types";
import { createAction } from "../../../utils/redux";
import { FilterPayout, GetPayoutsNormalized } from "./payouts.data-types";

export const fetchPayoutsStart = (
  page: number,
  itemsPerPage: number,
  filter?: FilterPayout
) =>
  createAction(PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_START, {
    page,
    itemsPerPage,
    filter
  });

export const fetchPayoutsSuccess = (payouts: GetPayoutsNormalized) =>
  createAction(PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_SUCCESS, payouts);

export const fetchPayoutsFailed = (error: Error) =>
  createAction(PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_FAILED, error);

export const setPayoutsPage = (page: number) =>
  createAction(PAYOUTS_ACTION_TYPES.SET_PAYOUTS_PAGE, page);

export const setPayoutsItemsPerPage = (itemsPerPage: number) =>
  createAction(PAYOUTS_ACTION_TYPES.SET_PAYOUTS_PAGE, itemsPerPage);

export const setPayoutsIsItemsPerPageChanged = (
  isItemsPerPageChanged: boolean
) =>
  createAction(
    PAYOUTS_ACTION_TYPES.SET_PAYOUTS_IS_ITEMS_PER_PAGE_CHANGED,
    isItemsPerPageChanged
  );

export const setPayoutsFilter = (filter: FilterPayout) =>
  createAction(PAYOUTS_ACTION_TYPES.SET_PAYOUTS_FILTER, filter);

export const setPayoutsIsFilterChanged = (isFilterChanged: boolean) =>
  createAction(
    PAYOUTS_ACTION_TYPES.SET_PAYOUTS_IS_FILTER_CHANGED,
    isFilterChanged
  );

export const clearPayouts = () =>
  createAction(PAYOUTS_ACTION_TYPES.CLEAR_PAYOUTS);
