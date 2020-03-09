import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Verbs } from "./verbModels";

export interface VerbDescription {
  type: Verbs;
  startTime: number;
  duration: number;
}
interface VerbState {
  current: VerbDescription | undefined;
}

export default createSlice({
  name: "verbs",
  initialState: {
    current: undefined
  } as VerbState,
  reducers: {
    startVerb(state, action: PayloadAction<VerbDescription>) {
      state.current = action.payload;
    },
    stopVerb(state, action: PayloadAction<VerbDescription>) {
      state.current = undefined;
    }
  }
});
