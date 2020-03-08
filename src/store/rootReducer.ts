import apprencticeship from "@features/apprenticeship";
import { history } from "@features/navigation/history";
import story from "@features/story";
import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";

export const rootReducer = combineReducers({
  router: connectRouter(history),
  apprenticeship: apprencticeship.reducer,
  story: story.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
