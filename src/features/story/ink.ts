import storyContent from "@ink/main.ink";
import { Story } from "inkjs/engine/Story";

export const story = new Story(storyContent);

// @ts-ignore
window.$DEBUG_STORY = story;
