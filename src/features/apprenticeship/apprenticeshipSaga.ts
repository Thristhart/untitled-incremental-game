import { put, takeEvery } from "typed-redux-saga";
import work from ".";

function* mop(action: ReturnType<typeof work.actions.mop>) {
  yield* put(work.actions.removeWater({ waterToRemove: 1 }));
}

export const apprenticeshipSaga = function*() {
  yield takeEvery(work.actions.mop.type, mop);
};
