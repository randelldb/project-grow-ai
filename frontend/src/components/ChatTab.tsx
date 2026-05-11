import type { Plant } from "../types/plant.ts";
import type { TimelineItem } from "../types/timelineItem.ts";

type ChatTabProps = {
  plant: Plant | null;
  chatMessage: string;
  setChatMessage: (message: string) => void;
  chatImage: File | null;
  setChatImage: (image: File | null) => void;
  addTimelineItem: (item: TimelineItem) => void;
};

function ChatTab(props: ChatTabProps) {
  if (!props.plant) {
    return null;
  }

  const plant = props.plant;

  return (
    <>
      <div>Chat about {plant.name}</div>
      <div>
        <input
          type={"text"}
          value={props.chatMessage}
          onChange={(e) => props.setChatMessage(e.target.value)}
        />
      </div>
      <div>
        <input
          type={"file"}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              props.setChatImage(e.target.files[0]);
            }
          }}
        />
        {props.chatImage && "selected" + props.chatImage.name}
      </div>
      <div>
        <button
          onClick={() => {
            let aiContext = {
              plantName: plant.name,
              plantSpecies: plant.species,
              timelineItems: plant.history,
              message: props.chatMessage,
              image: props.chatImage,
            };

            console.log(aiContext);

            props.setChatMessage("");
            props.setChatImage(null);
          }}
        >
          Send
        </button>
        <div>
          AI answer: This is a mock AI response
          <button
            onClick={() => {
              let newTimelineItem: TimelineItem = {
                id: 1,
                text: "AI answer: This is a mock AI response",
                type: "ai_response",
                dateTime: "2020-03-01",
              };

              console.log(newTimelineItem);
              props.addTimelineItem(newTimelineItem);
            }}
          >
            Save to timeline
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatTab;
