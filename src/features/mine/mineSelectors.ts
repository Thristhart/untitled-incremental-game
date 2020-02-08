import { RootState } from "@store/rootReducer";

export const selectRocks = (state: RootState) => state.mine.rocks;
