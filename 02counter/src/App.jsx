import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//If anything is updated in UI than react will control it.

function App() {
  const [count, setCount] = useState(15);

  // let counter = 15;

  // const addValue = () => {
  //   console.log("value added",counter);
  //   counter=counter+1;
  // };

  const addValue = () => {
    // setCount(count < 20 ? count + 1 : 20);

    //Asked in interview AFter counter +- question
    //Here one onclick output wont be 19, as react sends this as a batch, Data is added in variable but at last is sended once in UI for update as batch
    //Explanation:Since state updates are batched, all four setCount calls see the same count value, which is the initial value of count before any of the updates are processed. Let's say count is initially 15. All four setCount calls see count as 15, so each of them tries to set it to 16 (i.e., count + 1).
    // However, React batches these updates and effectively only processes the last setCount(count + 1) call, resulting in count being updated to 16, not 19.

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    //If we want to achieve such thing either add counter+4 or below way
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
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
