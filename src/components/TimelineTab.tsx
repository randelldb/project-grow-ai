import type { Plant } from "../types/plant.ts";

type TimelineTabProps = {
  plant: Plant;
};

function TimelineTab(props: TimelineTabProps) {
  return props.plant.history
    .sort((a, b) => {
      return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
    })
    .map((item) => (
      <div key={item.id}>
        <div>{item.text}</div>
        <div>{item.type}</div>
        <div>{item.dateTime}</div>
      </div>
    ));
}

export default TimelineTab;
