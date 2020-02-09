import React from "react";
import styled from "styled-components";
import { DialogueBeat } from "./storyModels";

const DialogueContainer = styled.li`
  height: 240px;

  margin-left: 2rem;
  margin-right: 2rem;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

const DialogueBackdrop = styled.div`
  background-color: #141518;
  transform: skew(10deg);

  z-index: 0;
  grid-row: 1;
  grid-column: 1;
`;

const DialogueText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: white;

  z-index: 10;
  grid-row: 1;
  grid-column: 1;

  padding-left: 3rem;
  padding-right: 2rem;
  padding-top: 1rem;
`;

interface DialogueProps {
  readonly beat: DialogueBeat;
}
export const Dialogue = (props: DialogueProps) => {
  const { beat } = props;
  return (
    <DialogueContainer>
      <DialogueBackdrop />
      <DialogueText>{beat.text}</DialogueText>
    </DialogueContainer>
  );
};
