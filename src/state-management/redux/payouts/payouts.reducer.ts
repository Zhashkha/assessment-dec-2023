import { AnyAction } from "redux";

import { PAYOUTS_ACTION_TYPES } from "./payouts.action-types";
import { PayoutDataItem } from "./payouts.data-types";

export type PayoutsReducer = {
  payouts: {
    [key: number]: Array<PayoutDataItem>;
  };
  pagination: {
    itemsCount: number;
    pagesCount: number;
    itemsPerPage: number;
    pageIndex: number;
  };
  filter: {
    username: string;
    status: string;
  };
  isLoading: boolean;
  isPageChangedFromUI: boolean;
  isFirstRun: boolean;
  error: Error | null;
};

export const PAYOUTS_INITIAL_STATE: PayoutsReducer = {
  payouts: {},
  pagination: {
    itemsCount: 0,
    pagesCount: 0,
    itemsPerPage: 10,
    pageIndex: 1
  },
  filter: {
    username: "",
    status: ""
  },
  isLoading: false,
  isPageChangedFromUI: true,
  isFirstRun: true,
  error: null
};

export const payoutsReducer = (
  state = PAYOUTS_INITIAL_STATE,
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_START:
      return {
        ...state,
        isLoading: true,
        isFirstRun: false
      };
    case PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_SUCCESS:
      const {
        metadata: {
          page: pageIndex,
          limit: itemsPerPage,
          totalCount: itemsCount
        }
      } = payload;
      const pagesCount = Math.ceil(itemsCount / itemsPerPage);

      return {
        ...state,
        isLoading: false,
        payouts: { ...state.payouts, ...payload.data },
        pagination: {
          ...state.pagination,
          pageIndex,
          itemsPerPage,
          itemsCount,
          pagesCount
        }
      };
    case PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_FAILED:
      return { ...state, isLoading: false, error: payload };
    case PAYOUTS_ACTION_TYPES.SET_PAYOUTS_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, pageIndex: payload }
      };
    case PAYOUTS_ACTION_TYPES.SET_PAYOUTS_IS_PAGE_CHANGED_FROM_UI:
      return {
        ...state,
        isPageChangedFromUI: payload
      };
    case PAYOUTS_ACTION_TYPES.SET_PAYOUTS_ITEMS_PER_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, itemsPerPage: payload }
      };
    case PAYOUTS_ACTION_TYPES.SET_PAYOUTS_FILTER:
      return {
        ...state,
        filter: { ...state.filter, ...payload }
      };
    case PAYOUTS_ACTION_TYPES.CLEAR_PAYOUTS:
      return {
        ...state,
        payouts: {}
      };
    default:
      return state;
  }
};
