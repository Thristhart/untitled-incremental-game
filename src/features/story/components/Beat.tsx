import React from "react";
import { StoryBeat, StoryBeatType } from "../storyModels";
import { Dialogue } from "./Dialogue";

interface BeatProps {
  beat: StoryBeat;
}

export const Beat = ({ beat }: BeatProps) => {
  switch (beat.type) {
    case StoryBeatType.Dialogue:
      return <Dialogue beat={beat} />;
    default:
      return null;
  }
};
