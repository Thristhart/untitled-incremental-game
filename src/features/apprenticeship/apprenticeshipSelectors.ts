import { RootState } from "@store/rootReducer";

export const selectWater = (state: RootState) => state.apprenticeship.water;

export const selectFilth = (state: RootState) => state.apprenticeship.filth;

export const selectCanMop = (state: RootState) =>
  state.apprenticeship.water > 0;
