import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export default createSlice({
  name: "apprenticeship",
  initialState: {
    isApprentice: false,
    water: 0,
    filth: 10
  },
  reducers: {
    addWater(state, action: PayloadAction<{ additionalWater: number }>) {
      state.water += action.payload.additionalWater;
    },
    removeWater(state, action: PayloadAction<{ waterToRemove: number }>) {
      state.water -= action.payload.waterToRemove;
    },
    addFilth(state, action: PayloadAction<{ additionalFilth: number }>) {
      state.filth += action.payload.additionalFilth;
    },
    removeFilth(state, action: PayloadAction<{ filthToRemove: number }>) {
      state.filth += action.payload.filthToRemove;
    },
    beginApprenticeship(state) {
      state.isApprentice = true;
    },
    setIsApprentice(state, action: PayloadAction<{ isApprentice: boolean }>) {
      state.isApprentice = action.payload.isApprentice;
    }
  }
});
