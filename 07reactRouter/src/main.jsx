import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//this line is commented out because we are not using App component
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import GithubAuto, { GithubInfoLoader } from "./components/Github/GithubAuto";

// This is the code for the router configuration: First way
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// This is the code for the router configuration: Second way
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
      <Route 
      loader={GithubInfoLoader}
      path="githubauto" element={<GithubAuto />} />
      {/* <Route path="*" element={<div>Not Found</div>} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </StrictMode>
);
