export enum StoryBeatType {
  Dialogue = "Dialogue",
  Choice = "Choice"
}
export interface DialogueBeat {
  readonly type: StoryBeatType.Dialogue;
  readonly speaker: string;
  readonly text: string;
  readonly isNarration: boolean;
}
export interface ChoiceBeat {
  readonly type: StoryBeatType.Choice;
  readonly choices: Choice[];
}

export interface Choice {
  readonly text: string;
  readonly speaker: string;
  readonly index: number;
}

export type StoryBeat = DialogueBeat | ChoiceBeat;
