import { put, takeEvery } from "typed-redux-saga";
import mine from ".";

function* dig(action: ReturnType<typeof mine.actions.dig>) {
  yield* put(mine.actions.incrementRock());
}

export const mineSaga = function*() {
  yield takeEvery(mine.actions.dig.type, dig);
};
