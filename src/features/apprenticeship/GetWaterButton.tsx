import { Button } from "@controls/Button";
import { Sprite } from "@controls/Sprite";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import apprenticeship from ".";
import well_spritesheet_url from "./assets/well_sheet.png";

const Well = styled(Sprite)`
  min-width: 128px;
  min-height: 128px;
  max-width: 128px;
  max-height: 128px;
  background-size: ${128 * 20}px;
  image-rendering: pixelated;
`;

const WellButton = styled(Button)`
  background-color: #81e6d3;
  flex-direction: row;

  &:disabled {
    filter: none;
    opacity: 1;
  }
`;

const WellContainer = styled.div`
  display: inline-flex;
`;

interface GetWaterButtonProps {
  readonly className?: string;
}

export const GetWaterButton = (props: GetWaterButtonProps) => {
  const dispatch = useDispatch();

  const [waterProgress, setWaterProgress] = useState(0);

  const onPress = () => {
    setWaterProgress(prog => prog + 1);
  };

  useEffect(() => {
    if (waterProgress >= 40) {
      setWaterProgress(0);
      dispatch(apprenticeship.actions.addWater({ additionalWater: 1 }));
    }
  }, [waterProgress]);

  const frame = waterProgress <= 19 ? waterProgress : 39 - waterProgress;

  return (
    <WellContainer className={props.className}>
      <Well url={well_spritesheet_url} frameWidth={128} frame={frame} />
      <WellButton onClick={onPress}>operate well</WellButton>
    </WellContainer>
  );
};
