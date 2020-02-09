import React from "react";
import { useDispatch, useSelector } from "react-redux";
import mine from ".";
import { selectRocks } from "./mineSelectors";

export const MineButton = () => {
  const dispatch = useDispatch();

  const onPress = () => dispatch(mine.actions.dig());

  const rocks = useSelector(selectRocks);

  return <button onClick={onPress}>⛏ {rocks}</button>;
};
