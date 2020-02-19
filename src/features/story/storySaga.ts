import { put, takeEvery } from "typed-redux-saga";
import storySlice from ".";
import { story } from "./ink";
import { parseChoices, parseDialogueMessage } from "./storyLib";

function* advanceStory(action: ReturnType<typeof storySlice.actions.advance>) {
  // TODO: check if animating the display of the previous beat, and if so, skip it. maybe not in this thunk
  if (story.canContinue) {
    const next = story.Continue();
    if (next) {
      const beat = parseDialogueMessage(next);
      yield* put(storySlice.actions.addBeat(beat));
    }
  } else if (story.currentChoices.length > 0) {
    const beat = parseChoices(story.currentChoices);
    yield* put(storySlice.actions.addBeat(beat));
  }
  // TODO: do something when you can't advance anymore
}

export const storySaga = function*() {
  yield takeEvery(storySlice.actions.advance.type, advanceStory);
};
