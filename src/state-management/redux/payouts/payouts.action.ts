import { PAYOUTS_ACTION_TYPES } from "./payouts.types";
import { createAction } from "../../../utils/redux";
import { FilterPayout, GetPayoutsNormalized } from "./payouts.data-types";

export const fetchPayoutsStart = (page: number, filter?: FilterPayout) =>
  createAction(PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_START, {
    page,
    filter
  });

export const fetchPayoutsSuccess = (payouts: GetPayoutsNormalized) =>
  createAction(PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_SUCCESS, payouts);

export const fetchPayoutsFailed = (error: Error) =>
  createAction(PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_FAILED, error);

export const setPayoutsPage = (page: number) =>
  createAction(PAYOUTS_ACTION_TYPES.SET_PAYOUTS_PAGE, page);

export const setPayoutsFilter = (filter: FilterPayout) =>
  createAction(PAYOUTS_ACTION_TYPES.SET_PAYOUTS_FILTER, filter);

export const clearPayouts = () =>
  createAction(PAYOUTS_ACTION_TYPES.CLEAR_PAYOUTS);
