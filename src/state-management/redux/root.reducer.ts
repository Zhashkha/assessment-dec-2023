import { combineReducers } from "redux";

import { payoutsReducer } from "./payouts/payouts.reducer";

export const rootReducer = combineReducers({
  payouts: payoutsReducer
});
