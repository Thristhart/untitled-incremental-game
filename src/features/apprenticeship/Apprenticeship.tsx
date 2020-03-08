import React from "react";
import styled from "styled-components";
import { GetWaterButton } from "./GetWaterButton";
import { MopButton } from "./MopButton";
import { Water } from "./Water";

const ApprenticeshipContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

const Well = styled(GetWaterButton)`
  grid-column: 3;
`;

export const Apprenticeship = () => {
  return (
    <ApprenticeshipContainer>
      <MopButton />
      <Water />
      <Well />
    </ApprenticeshipContainer>
  );
};
