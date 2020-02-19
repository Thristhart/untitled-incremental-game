import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoryBeat } from "./storyModels";

interface StoryState {
  log: StoryBeat[];
}

const storySlice = createSlice({
  name: "story",
  initialState: { log: [] } as StoryState,
  reducers: {
    addBeat(state, { payload: beat }: PayloadAction<StoryBeat>) {
      state.log.push(beat);
    },
    advance: state => state
  }
});

export default storySlice;
