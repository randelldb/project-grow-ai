import type { Plant } from "../types/plant.ts";
import type { TimelineItem } from "../types/timelineItem.ts";

type OverviewTabProps = {
  plant: Plant;
  latestTimelineItem: TimelineItem;
};

function OverviewTab(props: OverviewTabProps) {
  return (
    <>
      <div>{props.plant.name}</div>
      <div>{props.plant.species}</div>
      <div>{props.latestTimelineItem && props.latestTimelineItem.text}</div>
    </>
  );
}

export default OverviewTab;
