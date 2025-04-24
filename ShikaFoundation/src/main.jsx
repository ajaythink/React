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
import DonateForEducation from "./component/SupportACause/DonateForEducation";
import DonateForHealth from "./component/SupportACause/DonateForHealth";
import Why_trust_us from "./component/About/Why_trust_us";
import Login from "./component/Login/Login";
import Blog from "./component/Blog/Blog";
import Financial from "./component/Financial/financial";
import Annual_report from "./component/Annual-report/Annual_report";
import Privacy_policy from "./component/Privacy-policy/Privacy_policy";
import Refund_Policy from "./component/Refund-Policy/Refund_Policy";
import Aao_Pedh_Lagaye from "./component/Campiagn/Aao_Pedh_Lagaye";
import Internship from "./component/Internship/Internship";
import DonateForHealthcare from "./component/SupportACause/donate-for-healthcare";


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
      <Route path="donateforeducation" element={<DonateForEducation />} />
      <Route path="donate-for-health" element={<DonateForHealth />} />
      <Route path="why_trust_us" element={<Why_trust_us />} />
      <Route path="login" element={<Login />} />
      <Route path="blog" element={<Blog />} />
      <Route path="financial" element={<Financial />} />
      <Route path="annual-report" element={<Annual_report />} />
      <Route path="privacy-policy" element={<Privacy_policy />} />
      <Route path="refund-policy" element={<Refund_Policy />} />
      <Route path="campaign/Aao_Pedh_Lagaye" element={<Aao_Pedh_Lagaye />} />
      <Route path="internship" element={<Internship /> } />
      <Route path="/donate-for-healthcare" element={<DonateForHealthcare />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/*ThemeProvider is a component that provides the Material Tailwind theme to its children. */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
