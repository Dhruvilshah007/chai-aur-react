import { StrictMode ,React} from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";


// It can be used this rather doing createElement
import {jsx as jsx} from "react/jsx-runtime"

function MyApp() {
  return (
    <div>
      <h1>Custom App!!!</h1>
    </div>
  );
}

//MyApp function at last parses in below format

// ReactElement it donest woork because it is different synatx for our custom react
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.co.in/",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const anotherUser="Chaii another user"


// const reactElement1 = React.createElement(
//   'a',
//   { href: "https://www.amazon.in/", target: "_blank" },
//   "Click me to go to Amazon",
// anotherUser
// );



const anotherElement = (
  <a href="https://www.google.co.in/" target="_blank">
    Visit google
  </a>
);

createRoot(document.getElementById("root")).render(
  //reactElement1

  // {/* MyApp () Can call in this way also*/}

  // anotherElement
  <App/>
);
