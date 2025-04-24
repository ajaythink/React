import banner1 from "../../assets/DonateForHealthBanner/close-up-doctor-with-stethoscope.jpg";
import banner2 from "../../assets/DonateForHealthBanner/Health-photo.jpg";
import banner3 from "../../assets/DonateForHealthBanner/HealthPhoto.jpg";
import AIDSday2024 from "../../assets/DonateForHealthBanner/AIDS-DAY-FREE-CHECKUP-MEDICINE.jpg";
import SecAIDSday2024 from "../../assets/DonateForHealthBanner/Health-checkup-news-paper.jpg";
import Bg_green_frame from "../../assets/DonateForHealthBanner/bg-green-frame.jpg";
import HCarousel from "../Home/HCarousel";
import { Link } from "react-router-dom";

function DonateForHealth() {
  const images = [banner1, banner2, banner3]; // Array of images
  return (
    <>
      <HCarousel images={images} />
      <div className="px-5 lg:px-20 py-10">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
          WHY HEALTHCARE
        </h2>
        <div className="text-black/75  text-xl *:pt-3">
          <p>
            Shika Foundation Trust recognizes that access to quality healthcare
            is a fundamental right, yet millions in India, particularly in rural
            and economically weaker sections, lack essential medical services.
            With a population exceeding 1.4 billion, ensuring last-mile
            healthcare delivery remains a significant challenge. The
            geographical diversity of the country, including remote villages and
            underdeveloped regions, further limits accessibility and
            availability of medical care.
          </p>
          <p className="pt-2">
            Over 65% of the population resides in rural areas, yet they receive
            a smaller share of the healthcare infrastructure. Additionally,
            urban slum dwellers struggle to prioritize health due to financial
            constraints, making them vulnerable to preventable diseases. Lack of
            awareness, affordability issues, and insufficient healthcare
            facilities widen the healthcare gap.
          </p>
          <p>
            Shika Foundation is committed to bridging this gap by providing
            affordable, accessible, and quality healthcare services. Through
            medical camps, mobile health clinics, awareness programs, and
            partnerships with healthcare institutions, we aim to reach the most
            vulnerable communities. Our goal is to support the Government of
            India’s Ayushman Bharat vision and work towards Universal Health
            Coverage, ensuring that no one is deprived of essential healthcare
            due to poverty or inaccessibility.
          </p>
        </div>
      </div>
      <div className="px-5 lg:px-20 py-10 bg-green-50">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl ">
          HOW WE HELP
        </h2>
        <div className="text-black/75 text-xl pt-3">
          <p>
            Shika Foundation Trust’s healthcare initiatives focus on preventive,
            promotive, and curative healthcare services. Our programs are
            designed to address the healthcare needs of the most marginalized
            communities and provide them with the necessary medical care. Our
            healthcare interventions include:
          </p>
          <ul className="list-disc pl-5 *:py-2">
            <li>Medical camps </li>
            <li>Health awareness programs</li>
            <li>Support for medical treatment and surgeries</li>
            <li>Providing medicine and medical equipment</li>
            <li>
              Partnering with hospitals and organizations to extend healthcare
              support in crisis situations.
            </li>
          </ul>
          <p className="pt-2">
            Our healthcare programs are implemented in collaboration with local
            communities, healthcare professionals, and government agencies. We
            work towards building a sustainable healthcare ecosystem that
            ensures access to quality medical services for all. Your support can
            help us save lives, prevent diseases, and improve the health and
            well-being of thousands of individuals.
          </p>
        </div>
      </div>
      <div className="px-5 lg:px-20 py-10">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl ">
          HOW WE DO
        </h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-0   ">
          <img
            src={AIDSday2024}
            alt="health care"
            className="w-[400px]  object-cover object-center  h-auto rounded-lg border border-green-600 "
          />
          <div className="text-black/75  text-xl *:pt-4 ">
            <p>
              On World AIDS Day, Shika Foundation Trust organized a free health
              check-up camp in Dhansoi at Vivek Skill Mission Bihar&apos; premises.
              The event was inaugurated by prominent figures, including Chanchal
              Mehta, Sumit Kumar, Dr. Navneet Neel, and Dr. Vishnu Kumar. The
              foundation’s district president, Vivek Prajapati, emphasized the
              trust’s commitment to continuous community service.
            </p>
            <p>
              The health camp provided free medical check-ups and medicines to
              62 individuals. The initiative aimed to raise awareness and ensure
              people could benefit from government health schemes without
              hurdles. The camp was conducted by Harendra Kumar, with support
              from medical professionals and social workers.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 lg:px-20 py-10 bg-green-50 ">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5  pt-5 ">
          <img
            src={SecAIDSday2024}
            alt="health care 2"
            className="w-[400px] sm:hidden  object-cover object-center  h-auto rounded-lg border border-green-600   "
          />
          <div className="text-black/75  text-xl *:pt-4 ">
            <p>
              On World AIDS Day, Shika Foundation Trust organized a free health
              check-up camp in Dhansoi at Vivek Skill Mission Bihar&apos; premises.
              The event was inaugurated by prominent figures, including Chanchal
              Mehta, Sumit Kumar, Dr. Navneet Neel, and Dr. Vishnu Kumar. The
              foundation’s district president, Vivek Prajapati, emphasized the
              trust’s commitment to continuous community service.
            </p>
            <p>
              The health camp provided free medical check-ups and medicines to
              62 individuals. The initiative aimed to raise awareness and ensure
              people could benefit from government health schemes without
              hurdles. The camp was conducted by Harendra Kumar, with support
              from medical professionals and social workers.
            </p>
          </div>
          <img
            src={SecAIDSday2024}
            alt="health care 2"
            className="w-[400px] hidden sm:block object-cover object-center  h-auto rounded-lg border border-green-600 p-4 "
          />
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat min-h-[300px] flex flex-col items-center justify-center text-white p-10 backdrop-opacity-10"
        style={{ backgroundImage: `url(${Bg_green_frame})` }}
      >
        <Link to="/donate-for-healthcare">
          <button className="uppercase bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 rounded-lg px-4 py-2 focus:outline-none">
            Donate for Healthcare
          </button>
        </Link>
        <div className="text-center mt-5">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800">
            FOR CSR SUPPORT
          </h2>
          <p className="text-gray-700">Write to Vivek Kumar – 9431869421</p>
          <p className="text-gray-700">csr@shikafoundationtrust.in</p>
        </div>
      </div>
    </>
  );
}

export default DonateForHealth;
