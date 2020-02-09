import { Choice as InkChoice } from "inkjs/engine/Choice";
import { Choice, ChoiceBeat, DialogueBeat, StoryBeatType } from "./storyModels";

const SPEAKER_REGEX = /(\w+)(\$?):\s?(.*)/;

function getSpeaker(line: string) {
  let speaker = "narrator";
  let text = line;
  let isNarration = true;

  const match = line.match(SPEAKER_REGEX);
  if (match) {
    speaker = match[1];
    isNarration = !!match[2];
    text = match[3];
  }
  return { speaker, text, isNarration };
}

export function parseDialogueMessage(next: string): DialogueBeat {
  const speakerData = getSpeaker(next);
  return { ...speakerData, type: StoryBeatType.Dialogue };
}

export function parseChoice(choice: InkChoice, index: number): Choice {
  const speakerData = getSpeaker(choice.text);
  return { ...speakerData, index };
}

export function parseChoices(choices: InkChoice[]): ChoiceBeat {
  return {
    type: StoryBeatType.Choice,
    choices: choices.map(parseChoice)
  };
}
