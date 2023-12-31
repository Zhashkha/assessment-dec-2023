import { all, call } from "redux-saga/effects";

import { payoutsSaga } from "./payouts/payouts.saga";

export function* rootSaga() {
  yield all([call(payoutsSaga)]);
}
