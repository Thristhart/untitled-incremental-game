import { mine } from "@features/mine/mineSlice";
import { history } from "@features/navigation/history";
import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  mine: mine.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
