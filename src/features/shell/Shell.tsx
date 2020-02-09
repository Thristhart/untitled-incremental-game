import { RouteMapping } from "@features/navigation/RouteMapping";
import { StoryLog } from "@features/story/StoryLog";
import { store } from "@store/bootstrap";
import * as React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";

const RootGrid = styled.div`
  width: 100vw;
  height: 100vh; /* TODO: use JS hackery to get around annoying mobile vh behavior */
  display: grid;
  grid-template-rows: 1fr 240px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ContentContainer = styled.section`
  grid-row: 1;
`;

export const Shell = () => {
  return (
    <Provider store={store}>
      <RootGrid>
        <ContentContainer>
          <RouteMapping />
        </ContentContainer>
        <StoryLog />
      </RootGrid>
    </Provider>
  );
};
