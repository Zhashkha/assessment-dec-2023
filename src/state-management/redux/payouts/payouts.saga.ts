import { AnyAction } from "redux";
import { all, takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { fetchPayoutsSuccess, fetchPayoutsFailed } from "./payouts.action";
import { PAYOUTS_ACTION_TYPES } from "./payouts.action-types";
import {
  PAYOUTS_FETCH_API,
  PAYOUTS_SEARCH_API
} from "../../../utils/constants";
import {
  PayoutDataItemRaw,
  PayoutDataRaw,
} from "./payouts.data-types";
import { getPayoutsNormalized } from "./payouts.data-functions";

function* fetchPayoutsStartAsync({
  payload: { page: pageIndex, itemsPerPage, filter }
}: AnyAction) {
  try {
    if (filter && filter.username) {
      const { data: results }: { data: PayoutDataItemRaw[] } = yield call(
        axios.get,
        `${PAYOUTS_SEARCH_API}${filter.username}`
      );

      yield put(
        fetchPayoutsSuccess(
          getPayoutsNormalized(
            pageIndex,
            {
              metadata: {
                page: pageIndex,
                limit: itemsPerPage,
                totalCount: results.length
              },
              data: results
            },
            true
          )
        )
      );
    } else {
      const { data: results }: { data: PayoutDataRaw } = yield call(
        axios.get,
        `${PAYOUTS_FETCH_API}?page=${pageIndex}&limit=${itemsPerPage}`
      );

      yield put(fetchPayoutsSuccess(getPayoutsNormalized(pageIndex, results)));
    }
  } catch (error) {
    yield put(fetchPayoutsFailed(error as Error));
  }
}

function* onfetchPayouts() {
  yield takeLatest(
    PAYOUTS_ACTION_TYPES.FETCH_PAYOUTS_START,
    fetchPayoutsStartAsync
  );
}

export function* payoutsSaga() {
  yield all([call(onfetchPayouts)]);
}
