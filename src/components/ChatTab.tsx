import type { Plant } from "../types/plant.ts";

type ChatTabProps = {
  plant: Plant;
  chatMessage: string;
  setChatMessage: (message: string) => void;
  chatImage: File | null;
  setChatImage: (image: File | null) => void;
};

function ChatTab(props: ChatTabProps) {
  return (
    <>
      <div>Chat about {props.plant.name}</div>
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
            console.log(props.chatMessage, props.chatImage);
            props.setChatMessage("");
            props.setChatImage(null);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}

export default ChatTab;
