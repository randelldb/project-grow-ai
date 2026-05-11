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
          text: "Leaves are starting to curl slightly",
          type: "user_message",
          dateTime: "2026-05-01",
        },
        {
          id: 2,
          text: "AI suggested increasing watering frequency",
          type: "ai_response",
          dateTime: "2026-05-02",
        },
      ],
    },
    {
      id: 2,
      name: "Basil",
      species: "Genovese",
      history: [
        {
          id: 1,
          text: "Plant moved closer to the window",
          type: "user_message",
          dateTime: "2026-05-03",
        },
        {
          id: 2,
          text: "New healthy leaves appeared",
          type: "user_message",
          dateTime: "2026-05-05",
        },
      ],
    },
    {
      id: 3,
      name: "Monstera",
      species: "Deliciosa",
      history: [
        {
          id: 1,
          text: "Brown spots noticed on lower leaves",
          type: "user_message",
          dateTime: "2026-05-04",
        },
        {
          id: 2,
          text: "AI suggested checking humidity levels",
          type: "ai_response",
          dateTime: "2026-05-05",
        },
      ],
    },
    {
      id: 4,
      name: "Strawberry",
      species: "Albion",
      history: [
        {
          id: 1,
          text: "First flowers started blooming",
          type: "user_message",
          dateTime: "2026-05-01",
        },
        {
          id: 2,
          text: "Small strawberries are beginning to form",
          type: "user_message",
          dateTime: "2026-05-06",
        },
      ],
    },
  ]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  const latestTimelineItem =
    selectedPlant?.history[selectedPlant.history.length - 1];

  function addTimelineItem(item: TimelineItem) {
    if (!selectedPlant) {
      return null;
    }
    console.log(item);

    const updatedPlant: Plant = {
      ...selectedPlant,
      history: [...selectedPlant.history, item],
    };

    setPlants(
      plants.map((plant) => {
        if (plant.id === selectedPlant.id) {
          return updatedPlant;
        }

        return plant;
      }),
    );

    setSelectedPlant(updatedPlant);
  }

  return (
    <>
      <h1>Project grow ai</h1>

      <section>
        {plants.map((plant) => (
          <div
            onClick={() => {
              console.log(plant);
              setSelectedPlant(plant);
            }}
            key={plant.id}
          >
            <div>------------</div>
            <div>{plant.name}</div>
            <div>{plant.species}</div>
          </div>
        ))}
      </section>

      <br />
      <hr />
      <hr />

      {selectedPlant && (
        <>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <section>
            {activeTab === "overview" && (
              <OverviewTab
                plant={selectedPlant}
                latestTimelineItem={latestTimelineItem}
              />
            )}

            {activeTab === "timeline" && <TimelineTab plant={selectedPlant} />}

            {activeTab === "chat" && (
              <ChatTab
                plant={selectedPlant}
                chatMessage={chatMessage}
                setChatMessage={setChatMessage}
                chatImage={chatImage}
                setChatImage={setChatImage}
                addTimelineItem={addTimelineItem}
              />
            )}
          </section>
        </>
      )}
    </>
  );
}

export default App;
