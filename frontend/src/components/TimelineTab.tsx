import type { Plant } from "../types/plant.ts";

type TimelineTabProps = {
  plant: Plant | null;
};

function TimelineTab(props: TimelineTabProps) {
  if (!props.plant) {
    return null;
  }

  const plant = props.plant;

  return plant.history
    .sort((a, b) => {
      return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
    })
    .map((item) => (
      <div key={item.id}>
        <div>{item.text}</div>
        <div>{item.type}</div>
        <div>{item.dateTime}</div>
        <br />
      </div>
    ));
}

export default TimelineTab;
