import { useAnimationFrame } from "@utils/useAnimationFrame";
import React, { useEffect, useState } from "react";

interface BaseSpriteProps {
  readonly url: string;
  readonly frameWidth: number;
  readonly className?: string;
  readonly frame?: number;
}

interface SpritePropsWithoutAnimation extends BaseSpriteProps {
  readonly animate?: false;
}

interface SpritePropsWithAnimation extends BaseSpriteProps {
  readonly animate: true;
  readonly animationDirection?: -1 | 1;
  readonly fps: number;
}
type SpriteProps = SpritePropsWithoutAnimation | SpritePropsWithAnimation;
export const Sprite = (props: SpriteProps) => {
  const { url, className, frameWidth, animate } = props;

  const [animationFrame, setAnimationFrame] = useState(props.frame ?? 0);

  const [internalAnimationState] = useState(() => ({
    lastFrameTimestamp: Infinity,
    animationDirection: (props.animate && props.animationDirection) || 1
  }));

  internalAnimationState.animationDirection =
    (props.animate && props.animationDirection) || 1;

  const [startAnimation, stopAnimation] = useAnimationFrame(timestamp => {
    const animProps = props as SpritePropsWithAnimation;
    const timePerFrame = 1000 / animProps.fps;
    if (timestamp - internalAnimationState.lastFrameTimestamp > timePerFrame) {
      internalAnimationState.lastFrameTimestamp = timestamp;
      setAnimationFrame(
        frame => frame + internalAnimationState.animationDirection
      );
    }
  });

  useEffect(() => {
    if (animate) {
      internalAnimationState.lastFrameTimestamp = performance.now();
      startAnimation();
    } else {
      stopAnimation();
    }
  }, [animate]);

  const frame = props.frame ?? animationFrame;

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundPositionX: `${-frame * frameWidth}px`
      }}
      className={className}
    ></div>
  );
};
