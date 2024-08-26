import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

//1st way for router writing
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },
// ]);

//2nd way for router writing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />

      {/* For more nesting you can do as below for /about/aboutus */}
      {/* <Route path="about" element={<About />}>
        <Route path="aboutus" element={<AboutUs />} />
      </Route> */}

      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      {/* <Route path="github" element={<Github />} /> */}
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

//loader concept in react-router dom autmatically loads data so extra efficiency, no need of useEffect here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
