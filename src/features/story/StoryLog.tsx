import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import storySlice from ".";
import { Dialogue } from "./Dialogue";
import { StoryBeat, StoryBeatType } from "./storyModels";
import { selectStoryLog } from "./storySelectors";

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  display: grid;
  row-gap: 1rem;
`;

interface BeatProps {
  beat: StoryBeat;
}

const Beat = ({ beat }: BeatProps) => {
  switch (beat.type) {
    case StoryBeatType.Dialogue:
      return <Dialogue beat={beat} />;
    default:
      return null;
  }
};

export const StoryLog = () => {
  const dispatch = useDispatch();
  const log = useSelector(selectStoryLog);

  const onClick = () => {
    dispatch(storySlice.actions.advance());
  };
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [log]);

  return (
    <List onClick={onClick} ref={listRef}>
      {log.map((beat, index) => (
        <Beat beat={beat} key={index} />
      ))}
    </List>
  );
};
