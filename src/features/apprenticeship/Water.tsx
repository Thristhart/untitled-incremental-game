import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectWater } from "./apprenticeshipSelectors";
import bucket_image_url from "./assets/bucket.png";

const WaterContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const WaterLabel = styled.span`
  margin-left: 1rem;
`;

const Bucket = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-right: -0.9rem;
`;
export const Water = () => {
  const waterAmount = useSelector(selectWater);

  let buckets: JSX.Element[] = [];
  if (waterAmount === 0) {
    buckets.push(<WaterLabel key="none">None</WaterLabel>);
  } else if (waterAmount < 5) {
    for (let i = 0; i < waterAmount; i++) {
      buckets.push(<Bucket src={bucket_image_url} key={i} />);
    }
  } else {
    buckets.push(<Bucket src={bucket_image_url} key={"label"} />);
    buckets.push(<WaterLabel key="amount">x {waterAmount}</WaterLabel>);
  }

  return (
    <WaterContainer>
      <WaterLabel>Buckets of water: </WaterLabel>
      {buckets}
    </WaterContainer>
  );
};
