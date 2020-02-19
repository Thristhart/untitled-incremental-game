import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectStoryLog } from "../storySelectors";
import { Beat } from "./Beat";

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: auto;
  display: grid;
  row-gap: 1rem;
`;

export const StoryLog = () => {
  const log = useSelector(selectStoryLog);

  return (
    <List>
      {log.map((beat, index) => (
        <Beat beat={beat} key={index} />
      ))}
    </List>
  );
};
