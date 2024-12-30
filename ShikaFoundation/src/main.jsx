import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./component/Layout/Layout";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact/Contact";
import Volunteer from "./component/Volunteer/Volunteer";
import Media from "./component/Media/Media";
import Campiagn from "./component/Campiagn/Campiagn";
import Highlights from "./component/Highlights/Highlights";
import Event from "./component/Event/Event";
import Member from "./component/Member/Member";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="member" element={<Member />} />
      <Route path="footer" element={<Footer />} />
      <Route path="contact" element={<Contact />} />
      <Route path="volunteer" element={<Volunteer />} />
      <Route path="media" element={<Media />} />
      <Route path="campiagn" element={<Campiagn />} />
      <Route path="highlights" element={<Highlights />} />
      <Route path="event" element={<Event />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>{/*ThemeProvider is a component that provides the Material Tailwind theme to its children. */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
