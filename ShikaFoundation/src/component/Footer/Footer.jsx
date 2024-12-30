import { IconButton } from "@material-tailwind/react";
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-800 ">
      {/* we need create five section, horizontal wise ABOUT US, OUR WORK, CAMPAIGNS, GET INVOLVED, RESOURCE CENTRE.  after then we need to create sub section for each section. */}
      <div className="bg-gray-800 text-gray-500 text-center pt-4 lg:flex lg:justify-between lg:ml-20 lg:mr-20 lg:pl-10 lg:pr-10 lg:pt-10 ">
        <div className="pb-4 bt-4 ">
          <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
            ABOUT US
          </p>
          <div className="pt-2">
            <p className="lg:pb-2">Our Mission</p>

            <p className="lg:pb-2">Our Vision</p>

            <p className="lg:pb-2">Our Team</p>

            <p className="lg:pb-2">Our Partners</p>

            <p className="lg:pb-2">Our Impact</p>
          </div>
        </div>
        <div className="pb-4 bt-4 ">
          <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
            OUR WORK
          </p>
          <div className="pt-2">
            <p className="lg:pb-2">Education</p>

            <p className="lg:pb-2">Health</p>

            <p className="lg:pb-2">Child Protection</p>

            <p className="lg:pb-2">Emergency Response</p>
          </div>
        </div>
        <div className="pb-4 bt-4 ">
          <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
            GET INVOLVED
          </p>
          <div className="pt-2">
            <p className="lg:pb-2">Donate</p>

            <p className="lg:pb-2">Volunteer</p>

            <p className="lg:pb-2">Work with Us</p>

            <p className="lg:pb-2">Join Our Team</p>

            <p className="lg:pb-2">Internship</p>
          </div>
        </div>
        <div className="pb-4 bt-4 ">
          <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
            CAMPAIGNS
          </p>

          <div className="pt-2">
            <p className="lg:pb-2">Back to School</p>

            <p className="lg:pb-2">End Child Marriage</p>

            <p className="lg:pb-2">End Child Labour</p>

            <p className="lg:pb-2">End Violence Against Children</p>
          </div>
        </div>
        <div className="pb-4 bt-4 ">
          <p className="border-b-2 border-gray-300 lg:mb-4 text-gray-300 pb-2">
            RESOURCE CENTRE
          </p>
          <div className="pt-2">
            <p className="lg:pb-2">Publications</p>

            <p className="lg:pb-2">Research</p>

            <p className="lg:pb-2">Reports</p>

            <p className="lg:pb-2">Policy & Advocacy</p>

            <p className="lg:pb-2">Media</p>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 lg:mr-20 lg:pl-10 lg:pr-10 lg:pt-10 p-4 text-justify bg-gray-800 text-gray-500 lg:flex gap-5">
        <div>
          <div className="lg:flex gap-5">
            {/* /trust logo */}
            <img
              src={logo}
              alt="logo"
              className="w-36 h-36 rounded-lg"
            />
            {/* about to the trust */}
            <p>
              Shika Foundation is a non-profit organization that aims to provide
              education to children in need. We believe that every child has the right to education, regardless of their background or financial status. Our mission is to empower children through education and help them reach their full potential. We work with local communities, schools, and other organizations to provide quality education to children in need. Our programs focus on improving literacy rates, reducing dropout rates, and promoting
            </p>
          </div>

          {/* tust address */}
          <p className="text-center">
            <i className="fas fa-map-marker-alt"></i> 123, near Central bank,
            Dhansoi, buxar, Bihar, India, Contact Us: Tel: +91-11-43123700 |
            E-mail: info@smilefoundationindia.org
          </p>
          {/* social media icons */}
          <div className="flex justify-center py-4 gap-2 ">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-gray-500 hover:bg-gray-300 hover:text-gray-700 text-lg">
                <i className="fab fa-discord"></i>
              </IconButton>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noonpener noreferrer"
            >
              <IconButton className="bg-gray-500 hover:bg-gray-300 hover:text-gray-700 text-lg">
                <i className="fab fa-facebook"></i>
              </IconButton>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-gray-500 hover:bg-gray-300 hover:text-gray-700 text-lg">
                <i className="fab fa-instagram"></i>
              </IconButton>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-gray-500 hover:bg-gray-300 hover:text-gray-700 text-lg">
                <i className="fab fa-twitter"></i>
              </IconButton>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-gray-500 hover:bg-gray-300 hover:text-gray-700 text-lg">
                <i className="fab fa-youtube"></i>
              </IconButton>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-gray-500 hover:bg-gray-300 hover:text-gray-700 text-lg">
                <i className="fab fa-linkedin"></i>
              </IconButton>
            </a>
          </div>
        </div>
        {/* <div className=" border border-red-200">
          Subscribe to Our Newsletter
          <h1 className="text-gray-300">Subscribe to Our Newsletter</h1>
          name and email and subscribe butoon
          <div className="lg:flex lg:flex-col lg:gap-6 lg:pt-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-2  rounded-xl"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-2  rounded-xl"
            />
            <button className="bg-red-300 hover:bg-red-400 focus:bg-red-800 text-white p-1  rounded-xl">
              Subscribe
            </button>
          </div>
        </div> */}
      </div>

      <div className="bg-gray-200 text-black text-center text-xs p-3  bottom-0 w-full">
        <p>Shika Foundation &copy; 2018</p>
      </div>
    </footer>
  );
}
