import { Button } from "@controls/Button";
import verbs from "@features/verbs";
import { Verbs } from "@features/verbs/verbModels";
import { selectIsVerbing } from "@features/verbs/verbSelectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const WellButton = styled(Button)`
  background-color: #8f563b;
  flex-direction: row;
  color: white;
`;

const WellContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

interface GetWaterButtonProps {
  readonly className?: string;
}

function fetchWater() {
  return verbs.actions.startVerb({
    type: Verbs.FetchWater,
    duration: 8000,
    startTime: performance.now()
  });
}

export const GetWaterButton = (props: GetWaterButtonProps) => {
  const dispatch = useDispatch();

  const isVerbing = useSelector(selectIsVerbing);

  const onPress = () => {
    dispatch(fetchWater());
  };

  return (
    <WellContainer className={props.className}>
      <WellButton onClick={onPress} disabled={isVerbing}>
        operate well
      </WellButton>
    </WellContainer>
  );
};
