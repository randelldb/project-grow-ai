import type { ActiveTab } from "../types/ui.ts";

type TabsProps = {
  activeTab: ActiveTab;
  setActiveTab: (value: ActiveTab) => void;
};

function Tabs(props: TabsProps) {
  return (
    <>
      <button
        onClick={() => props.setActiveTab("overview")}
        className={props.activeTab === "overview" ? "activeTab" : ""}
      >
        Overview
      </button>
      <button
        onClick={() => props.setActiveTab("timeline")}
        className={props.activeTab === "timeline" ? "activeTab" : ""}
      >
        Timeline
      </button>
      <button
        onClick={() => props.setActiveTab("chat")}
        className={props.activeTab === "chat" ? "activeTab" : ""}
      >
        Chat
      </button>
    </>
  );
}

export default Tabs;
