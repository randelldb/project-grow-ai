import "./App.css";
import type { Plant } from "./types/plant.ts";
import { useState } from "react";

function App() {
  type ActiveTab = "overview" | "timeline" | "chat";

  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

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

      <section>
        {plants.map((plant) => (
          <div onClick={() => console.log(plant)} key={plant.id}>
            <div>{plant.name}</div>
            <div>{plant.species}</div>
          </div>
        ))}
      </section>

      <hr />
      <section>
        {activeTab === "overview" && (
          <>
            <div>{plants[0].name}</div>
            <div>{plants[0].species}</div>
            <div>{latestTimelineItem && latestTimelineItem.text}</div>
          </>
        )}

        {activeTab === "timeline" &&
          plants[0].history.map((item) => (
            <div key={item.id}>
              <div>{item.text}</div>
              <div>{item.type}</div>
              <div>{item.dateTime}</div>
            </div>
          ))}

        {activeTab === "chat" && <div>Chat content</div>}
      </section>
    </>
  );
}

export default App;
