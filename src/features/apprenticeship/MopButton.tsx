import { ButtonWithDisabledReason } from "@controls/ButtonWithDisabledReason";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import mine from ".";
import { selectCanMop } from "./apprenticeshipSelectors";

const MopButtonContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const MopButton = () => {
  const dispatch = useDispatch();

  const onPress = () => dispatch(mine.actions.mop());

  const canMop = useSelector(selectCanMop);

  return (
    <MopButtonContainer>
      <ButtonWithDisabledReason
        onClick={onPress}
        disabled={!canMop}
        style={{ backgroundColor: "#81e6d3" }}
        disabledReason="Not enough water"
      >
        🧼 mop up
      </ButtonWithDisabledReason>
    </MopButtonContainer>
  );
};
