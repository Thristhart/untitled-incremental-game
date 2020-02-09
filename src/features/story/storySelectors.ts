import { RootState } from "@store/rootReducer";

export const selectStoryLog = (state: RootState) => {
  return state.story.log;
};
