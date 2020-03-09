import { Sprite } from "@controls/Sprite";
import well_spritesheet_url from "@features/apprenticeship/assets/well_sheet.png";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCurrentVerb } from "../verbSelectors";

const wellFrameCount = 80;

const Well = styled(Sprite)`
  min-width: 128px;
  min-height: 128px;
  max-width: 128px;
  max-height: 128px;
  background-size: ${128 * wellFrameCount}px;
  image-rendering: pixelated;
`;

const FetchWaterContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export const FetchWater = () => {
  const currentVerb = useSelector(selectCurrentVerb)!;

  let frame = 0;
  let elapsed = performance.now() - currentVerb.startTime;
  frame = Math.floor(elapsed / (currentVerb.duration / wellFrameCount));

  return (
    <FetchWaterContainer>
      <Well url={well_spritesheet_url} frameWidth={128} frame={frame} />
      Fetching water...
    </FetchWaterContainer>
  );
};
