import { RootState } from "@store/rootReducer";
import { StoryBeat } from "./storyModels";

export const selectStoryLog = (state: RootState) => {
  return state.story.log;
};

export const selectLatestStoryBeat = (
  state: RootState
): StoryBeat | undefined => {
  return state.story.log[state.story.log.length - 1];
};
