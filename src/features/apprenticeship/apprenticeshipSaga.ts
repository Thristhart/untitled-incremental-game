import verbs from "@features/verbs";
import { Verbs } from "@features/verbs/verbModels";
import { put, takeEvery } from "typed-redux-saga";
import apprenticeship from ".";

function* mop(action: ReturnType<typeof apprenticeship.actions.mop>) {
  yield* put(apprenticeship.actions.removeWater({ waterToRemove: 1 }));
}

function* onStartVerb(action: ReturnType<typeof verbs.actions.startVerb>) {
  switch (action.payload.type) {
    case Verbs.Mop:
      yield* put(apprenticeship.actions.removeWater({ waterToRemove: 1 }));
      break;
  }
}

function* onStopVerb(action: ReturnType<typeof verbs.actions.stopVerb>) {
  switch (action.payload.type) {
    case Verbs.FetchWater:
      yield* put(apprenticeship.actions.addWater({ additionalWater: 1 }));
      break;
    case Verbs.Mop:
      yield* put(apprenticeship.actions.removeFilth({ filthToRemove: 1 }));
      break;
  }
}

export const apprenticeshipSaga = function*() {
  yield* takeEvery(apprenticeship.actions.mop.type, mop);
  yield* takeEvery(verbs.actions.startVerb.type, onStartVerb);
  yield* takeEvery(verbs.actions.stopVerb.type, onStopVerb);
};
