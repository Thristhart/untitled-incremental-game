import { useAnimationFrame } from "@utils/useAnimationFrame";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { VerbDescription } from ".";
import { Verbs } from "./verbModels";
import { FetchWater } from "./verbs/FetchWater";
import { Mop } from "./verbs/Mop";
import { selectCurrentVerb } from "./verbSelectors";

interface VerbDecorationProps {
  readonly currentVerb: VerbDescription;
}
const VerbDecoration = (props: VerbDecorationProps) => {
  switch (props.currentVerb.type) {
    case Verbs.FetchWater:
      return <FetchWater />;
    case Verbs.Mop:
      return <Mop />;
    default:
      return null;
  }
};

const VerbContainer = styled.section`
  grid-row: 1/2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const VerbProgress = styled.progress`
  margin-left: 0.5rem;
`;

export const Verb = () => {
  const currentVerb = useSelector(selectCurrentVerb);
  const [timestamp, setTimestamp] = useState(0);

  const [startAnimation, stopAnimation] = useAnimationFrame(timestamp => {
    setTimestamp(timestamp);
  });

  useEffect(() => {
    if (currentVerb) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => stopAnimation();
  }, [currentVerb]);

  if (!currentVerb) {
    return <VerbContainer />;
  }

  const elapsed = performance.now() - currentVerb.startTime;
  const progression = elapsed / currentVerb.duration;

  return (
    <VerbContainer>
      <VerbDecoration currentVerb={currentVerb} />
      <VerbProgress value={progression} />
    </VerbContainer>
  );
};
