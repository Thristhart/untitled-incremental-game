import { Apprenticeship } from "@features/apprenticeship/Apprenticeship";
import { selectIsApprentice } from "@features/apprenticeship/apprenticeshipSelectors";
import React from "react";
import { useSelector } from "react-redux";

export const Home = () => {
  const isApprentice = useSelector(selectIsApprentice);
  if (!isApprentice) {
    return null;
  }
  return <Apprenticeship />;
};
