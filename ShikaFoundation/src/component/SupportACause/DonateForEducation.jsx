import banner1 from "../../assets/HomeBanner/Banner1-scaled.webp";
import banner2 from "../../assets/HomeBanner/Banner4-1.jpg.webp";
import banner3 from "../../assets/media/pedh_Lagaye_paryawarn_bachaye_news_paper.jpg";
import HCarousel from "../Home/HCarousel";

function DonateForEducation() {
  const images = [banner1, banner2, banner3]; // Array of images

  return (
    <>
      <HCarousel images={images} />
    </>
  );
}

export default DonateForEducation;
