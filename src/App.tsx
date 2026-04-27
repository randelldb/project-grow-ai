import "./App.css";
import type { Plant } from "./types/plant.ts";

function App() {
  let plant1: Plant = {
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
  };

  return (
    <>
      <h1>Project grow ai</h1>
      <section>
        {plant1.id}
        {plant1.name}
        {plant1.species}
        {plant1.history.map((item) => (
          <div key={item.id}>
            <div>{item.text}</div>
            <div>{item.type}</div>
            <div>{item.dateTime}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
