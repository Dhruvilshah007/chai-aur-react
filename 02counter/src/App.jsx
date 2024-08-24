import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//If anything is updated in UI than react will control it.

function App() {
  const [count, setCount] = useState(0);

  // let counter = 15;

  // const addValue = () => {
  //   console.log("value added",counter);
  //   counter=counter+1;
  // };

  const addValue = () => {
    setCount(count < 20 ? count + 1 : 20);
  };

  const removeValue = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <>
      <h1>CHai aurr react -counter</h1>
      <h2>Counter value:{count}</h2>

      <button onClick={addValue} type="button">
        Add value
      </button>
      <br />
      <button onClick={removeValue} type="button">
        Remove value
      </button>
      <p></p>
    </>
  );
}

export default App;
