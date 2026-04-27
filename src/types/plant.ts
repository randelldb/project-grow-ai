import type { TimelineItem } from "./timelineItem.ts";

export type Plant = {
  id: number;
  name: string;
  species: string;
  history: TimelineItem[];
};
