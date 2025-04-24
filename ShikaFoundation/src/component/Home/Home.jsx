import  HCarousel  from "/src/component/Home/HCarousel.jsx";
import { AboutforMobile } from "../About/About";
import OurImpact from "../Our Impact/OurImpact";
import OurProgram from "../OurProgram/OurProgram";
import StoryInMotion from "../StoryInMotion/StoryInMotion";
import SupportACause from "../SupportACause/SupportACause";
import banner1 from "../../assets/HomeBanner/Banner1-scaled.webp";
import banner2 from "../../assets/HomeBanner/Banner4-1.jpg.webp";

export default function Home() {
    const images = [banner1, banner2, banner1]; 
  return (
    <div>
      <HCarousel images={images}/>
      <AboutforMobile />
      <OurImpact />
      <OurProgram />
      <StoryInMotion />
      <SupportACause />
      {/* <h1 className="text-3xl text-white bg-black">
        Shika Foundation Home page
      </h1>
      <p>
        Shika Foundation is a non-profit organization that aims to provide
        education to children in need.
      </p> */}
    </div>
  );
}
