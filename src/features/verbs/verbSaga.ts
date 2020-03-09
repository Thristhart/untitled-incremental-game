import { waitForTick } from "@features/gameLoop/tickChannel";
import { put, select } from "typed-redux-saga";
import verbs from ".";
import { selectCurrentVerb } from "./verbSelectors";

export const verbSaga = function*() {
  while (true) {
    const timestamp = yield* waitForTick();
    const currentVerb = yield* select(selectCurrentVerb);
    if (!currentVerb) {
      continue;
    }

    const elapsed = timestamp - currentVerb.startTime;
    if (elapsed > currentVerb.duration) {
      yield* put(verbs.actions.stopVerb(currentVerb));
    }
  }
};
