import { mineSaga } from "@features/mine/mineSaga";
import { history } from "@features/navigation/history";
import storySlice from "@features/story";
import { storySaga } from "@features/story/storySaga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    routerMiddleware(history),
    sagaMiddleware
  ]
});

const sagas = [storySaga, mineSaga];

sagas.forEach(saga => {
  sagaMiddleware.run(saga);
});

function onReady() {
  store.dispatch(storySlice.actions.advance());
}

onReady();
