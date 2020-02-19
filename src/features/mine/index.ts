import { createSlice } from "@reduxjs/toolkit";

const mine = createSlice({
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
    },
    dig: state => state
  }
});

export default mine;
