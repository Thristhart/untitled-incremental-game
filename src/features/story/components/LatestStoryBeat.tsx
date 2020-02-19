import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimateChildrenChanging } from "utils/AnimateChildrenChanging";
import storySlice from "..";
import { selectLatestStoryBeat } from "../storySelectors";
import { Beat } from "./Beat";

const fadeIn = {
  keyframes: [
    {
      opacity: 0,
      transform: "translateY(10rem)"
    },
    {
      opacity: 1,
      transform: "translateY(0rem)"
    }
  ],
  options: { duration: 75 }
};

const fadeOut = {
  keyframes: [
    {
      opacity: 1,
      transform: "translateY(0rem)"
    },
    {
      opacity: 0,
      transform: "translateY(-10rem)"
    }
  ],
  options: { duration: 100 }
};

export const LatestBeat = () => {
  const latestStoryBeat = useSelector(selectLatestStoryBeat);
  const dispatch = useDispatch();
  if (!latestStoryBeat) {
    return null;
  }

  const onClick = () => {
    dispatch(storySlice.actions.advance());
  };
  return (
    <AnimateChildrenChanging mountAnimation={fadeIn} unmountAnimation={fadeOut}>
      <div onClick={onClick}>
        <Beat beat={latestStoryBeat} />
      </div>
    </AnimateChildrenChanging>
  );
};
