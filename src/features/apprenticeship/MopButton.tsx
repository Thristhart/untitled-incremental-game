import { ButtonWithDisabledReason } from "@controls/ButtonWithDisabledReason";
import verbs from "@features/verbs";
import { Verbs } from "@features/verbs/verbModels";
import { selectIsVerbing } from "@features/verbs/verbSelectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectCanMop } from "./apprenticeshipSelectors";

const MopButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

function mop() {
  return verbs.actions.startVerb({
    type: Verbs.Mop,
    duration: 6000,
    startTime: performance.now()
  });
}

export const MopButton = () => {
  const dispatch = useDispatch();

  const onPress = () => dispatch(mop());

  const canMop = useSelector(selectCanMop);

  const isVerbing = useSelector(selectIsVerbing);

  return (
    <MopButtonContainer>
      <ButtonWithDisabledReason
        onClick={onPress}
        disabled={isVerbing || !canMop}
        style={{ backgroundColor: "#81e6d3" }}
        disabledReason={!canMop ? "Not enough water" : undefined}
      >
        🧼 mop up
      </ButtonWithDisabledReason>
    </MopButtonContainer>
  );
};
