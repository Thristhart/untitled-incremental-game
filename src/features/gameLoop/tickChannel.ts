import { multicastChannel } from "redux-saga";
import { take } from "typed-redux-saga";

export const tickChannel = multicastChannel<number>();

function tick(timestamp: number) {
  requestAnimationFrame(tick);
  tickChannel.put(timestamp);
}

requestAnimationFrame(tick);

export const waitForTick = () => {
  return take(tickChannel, () => true);
};
