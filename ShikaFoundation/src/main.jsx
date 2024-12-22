import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './component/Layout/Layout'
import{RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About'
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout /> }>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="footer" element={<Footer />} />
      <Route path="contact" element={<Contact />} />  

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
