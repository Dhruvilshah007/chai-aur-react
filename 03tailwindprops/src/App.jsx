import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "dds",
    age: 21,
  };


  let newArr=[1,2,3]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card username="chaii aur code" btnText="chai click me" someObj={myObj} newArr={newArr} />


      {/* btnText="dds click me" */}
      <Card username="dds"  someObj={myObj} newArr={newArr} />

      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/26690031/pexels-photo-26690031/free-photo-of-back-view-of-atlantic-puffin-on-rock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure> */}
    </>
  );
}

export default App;
