import { RootState } from "@store/rootReducer";

export const selectIsVerbing = (state: RootState) => {
  return selectCurrentVerb(state) !== undefined;
};

export const selectCurrentVerb = (state: RootState) => {
  return state.verbs.current;
};
