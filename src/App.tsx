import "./App.css";
import type { Plant } from "./types/plant.ts";
import { useState } from "react";
import type { ActiveTab } from "./types/ui.ts";
import Tabs from "./components/Tabs.tsx";
import OverviewTab from "./components/OverviewTab.tsx";
import TimelineTab from "./components/TimelineTab.tsx";
import ChatTab from "./components/ChatTab.tsx";
import type { TimelineItem } from "./types/timelineItem.ts";

function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatImage, setChatImage] = useState<File | null>(null);
  const [plants, setPlants] = useState<Plant[]>([
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
  ]);

  const latestTimelineItem = plants[0].history[plants[0].history.length - 1];

  function addTimelineItem(item: TimelineItem) {
    console.log(item);

    const updatedPlant: Plant = {
      ...plants[0],
      history: [...plants[0].history, item],
    };

    setPlants([updatedPlant]);
  }

  return (
    <>
      <h1>Project grow ai</h1>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
          <OverviewTab
            plant={plants[0]}
            latestTimelineItem={latestTimelineItem}
          />
        )}

        {activeTab === "timeline" && <TimelineTab plant={plants[0]} />}

        {activeTab === "chat" && (
          <ChatTab
            plant={plants[0]}
            chatMessage={chatMessage}
            setChatMessage={setChatMessage}
            chatImage={chatImage}
            setChatImage={setChatImage}
            addTimelineItem={addTimelineItem}
          />
        )}
      </section>
    </>
  );
}

export default App;
