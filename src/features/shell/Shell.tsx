import { RouteMapping } from "@features/navigation/RouteMapping";
import { LatestBeat } from "@features/story/components/LatestStoryBeat";
import { Verb } from "@features/verbs/Verb";
import { store } from "@store/bootstrap";
import * as React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

const RootGrid = styled.div`
  width: 100vw;
  height: 100vh; /* TODO: use JS hackery to get around annoying mobile vh behavior */
  display: grid;
  grid-template-rows: 164px 1fr min-content;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  overflow: hidden;
`;

const ContentContainer = styled.section`
  grid-row: 2/3;
  margin: 1rem;
`;

export const Shell = () => {
  return (
    <Provider store={store}>
      <RootGrid>
        <Verb />
        <ContentContainer>
          <RouteMapping />
        </ContentContainer>
        <LatestBeat />
      </RootGrid>
    </Provider>
  );
};
