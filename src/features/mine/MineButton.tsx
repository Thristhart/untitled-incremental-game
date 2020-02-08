import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRocks } from "./mineSelectors";
import { digAtMine } from "./mineSlice";

export const MineButton = () => {
  const dispatch = useDispatch();

  const onPress = () => dispatch(digAtMine());

  const rocks = useSelector(selectRocks);

  return <button onClick={onPress}>⛏ {rocks}</button>;
};
