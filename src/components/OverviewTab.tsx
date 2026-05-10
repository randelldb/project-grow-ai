import type { Plant } from "../types/plant.ts";
import type { TimelineItem } from "../types/timelineItem.ts";

type OverviewTabProps = {
  plant: Plant | null;
  latestTimelineItem: TimelineItem | undefined;
};

function OverviewTab(props: OverviewTabProps) {
  if (!props.plant) {
    return null;
  }

  const plant = props.plant;

  return (
    <>
      <div>{plant.name}</div>
      <div>{plant.species}</div>
      <div>{props.latestTimelineItem && props.latestTimelineItem.text}</div>
    </>
  );
}

export default OverviewTab;
