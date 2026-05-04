import "./App.css";
import type { Plant } from "./types/plant.ts";
import { useState } from "react";

function App() {
  type ActiveTab = "overview" | "timeline" | "chat";

  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatImage, setChatImage] = useState<File | null>(null);

  let plants: Plant[] = [
    {
      id: 1,
      name: "Tomato",
      species: "Cherry",
      history: [
        {
          id: 1,
          text: "this is a text",
          type: "user_message",
          dateTime: "2020-03-01",
        },
        {
          id: 2,
          text: "this is a second text",
          type: "user_message",
          dateTime: "2020-03-07",
        },
      ],
    },
  ];

  const latestTimelineItem = plants[0].history[plants[0].history.length - 1];

  return (
    <>
      <h1>Project grow ai</h1>
      <button
        onClick={() => setActiveTab("overview")}
        className={activeTab === "overview" ? "activeTab" : ""}
      >
        Overview
      </button>
      <button
        onClick={() => setActiveTab("timeline")}
        className={activeTab === "timeline" ? "activeTab" : ""}
      >
        Timeline
      </button>
      <button
        onClick={() => setActiveTab("chat")}
        className={activeTab === "chat" ? "activeTab" : ""}
      >
        Chat
      </button>

      {/*<section>*/}
      {/*  {plants.map((plant) => (*/}
      {/*    <div onClick={() => console.log(plant)} key={plant.id}>*/}
      {/*      <div>{plant.name}</div>*/}
      {/*      <div>{plant.species}</div>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</section>*/}
      {/*<hr />*/}

      <section>
        {activeTab === "overview" && (
          <>
            <div>{plants[0].name}</div>
            <div>{plants[0].species}</div>
            <div>{latestTimelineItem && latestTimelineItem.text}</div>
          </>
        )}

        {activeTab === "timeline" &&
          plants[0].history
            .sort((a, b) => {
              return (
                new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
              );
            })
            .map((item) => (
              <div key={item.id}>
                <div>{item.text}</div>
                <div>{item.type}</div>
                <div>{item.dateTime}</div>
              </div>
            ))}

        {activeTab === "chat" && (
          <>
            <div>Chat about {plants[0].name}</div>
            <div>
              <input
                type={"text"}
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
            </div>
            <div>
              <input
                type={"file"}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setChatImage(e.target.files[0]);
                  }
                }}
              />
              {chatImage && "selected" + chatImage.name}
            </div>
            <div>
              <button
                onClick={() => {
                  console.log(chatMessage, chatImage);
                  setChatMessage("");
                  setChatImage(null);
                }}
              >
                Send
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default App;
