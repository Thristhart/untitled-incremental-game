import React, { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { usePrevious } from "./usePrevious";

type AnimationParameters = {
  keyframes: Keyframe[];
  options: KeyframeAnimationOptions;
};

interface AnimateChildrenChangingProps {
  children: ReactNode;
  unmountAnimation: AnimationParameters;
  mountAnimation?: AnimationParameters;
}
export const AnimateChildrenChanging = (
  props: AnimateChildrenChangingProps
) => {
  const { children, unmountAnimation, mountAnimation } = props;
  const previousChildren = usePrevious(children);
  const [animatingOutChildren, setAnimatingOutChildren] = useState<
    ReactNode | undefined
  >();
  const animationContainerRef = useRef<HTMLDivElement>(null);
  if (!animatingOutChildren && previousChildren !== children) {
    setAnimatingOutChildren(previousChildren);
  }

  useLayoutEffect(() => {
    if (animatingOutChildren) {
      const animation = animationContainerRef.current?.animate(
        unmountAnimation.keyframes,
        unmountAnimation.options
      );

      animation?.addEventListener("finish", () => {
        setAnimatingOutChildren(undefined);
      });
    } else {
      if (mountAnimation) {
        const animation = animationContainerRef.current?.animate(
          mountAnimation.keyframes,
          mountAnimation.options
        );
      }
    }
  }, [animatingOutChildren]);

  return (
    <div ref={animationContainerRef}>{animatingOutChildren ?? children}</div>
  );
};
