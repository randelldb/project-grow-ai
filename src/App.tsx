import "./App.css";
import type { Plant } from "./types/plant.ts";

function App() {
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

  return (
    <>
      <h1>Project grow ai</h1>
      <section>
        {plants.map((plant) => (
          <div onClick={() => console.log(plant)} key={plant.id}>
            <div>{plant.name}</div>
            <div>{plant.species}</div>
            {plant.history.map((item) => (
              <div key={item.id}>
                <div>{item.text}</div>
                <div>{item.type}</div>
                <div>{item.dateTime}</div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
