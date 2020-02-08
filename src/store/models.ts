import { Action, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
