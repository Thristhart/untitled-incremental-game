import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "@store/models";

export const mine = createSlice({
  name: "mine",
  initialState: {
    rocks: 0
  },
  reducers: {
    incrementRock(state) {
      state.rocks++;
    },
    decrementRock(state) {
      state.rocks--;
    }
  }
});

export const digAtMine = (): AppThunk => async dispatch => {
  dispatch(mine.actions.incrementRock());
};
