import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Internship(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

Internship.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          className=" flex place-content-center p-5 md:p-8 lg:p-10 "
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Internship verification" {...a11yProps(0)} />
            <Tab label="Our Internship" {...a11yProps(1)} />
            <Tab label="Apply Internship" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <Internship value={value} index={0}>
          <InternshipVerification />
        </Internship>
        <Internship value={value} index={1}>
          <OurInternship />
        </Internship>
        <Internship value={value} index={2}>
          <RegistrationForm />
        </Internship>
      </Box>
    </>
  );
}

const InternshipVerification = () => {
  return (
    <>
      <div>
        <div className="mx-auto mt-4 max-w-xl sm:mt-10 border p-5 rounded-xl">
          <h2 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
            Internship verification
          </h2>
          <label
            htmlFor="Volunteer id"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Internship ID
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 focus:outline-green-600"
            />
          </div>

          <label className="text-sm/6 font-semibold text-gray-900 ">
            Date of birth
          </label>
          <div className="mt-2.5">
            <input
              htmlFor="dob"
              type="date"
              className="w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-800 placeholder:text-gray-400 focus:-outline-1 focus:-outline-offset-1 focus:outline-green-600"
            />
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className=" w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export { InternshipVerification };

// import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MoneyIcon from "@mui/icons-material/Money";
const OurInternship = () => {
  return (
    <>
      <div>
        <h1 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
          Our Internship
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-10 md:px-20 lg:px-32">
          {/* inside this div i will write the content of our internship Internship name, duration, stipend, location, and other details */}
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />

          <div></div>
        </div>
      </div>
    </>
  );
};
export { OurInternship };
const IntershipCardData = [
  {
    id: 1,
    title: "Software Testing",
    duration: "3 months",
    stipend: "$500/month",
    location: "Remote",
    type: "Internship",
    company: "Shika Foundation",
    start: "2021-10-10",
    end: "2021-12-10",
    
  },
  {
    id: 2,
    title: "Web Development",
    duration: "6 months",
    stipend: "$1000/month",
    location: "Remote",
    type: "Internship",
    company: "Shika Foundation",
    posted: "2021-10-10",
    applyby: "2021-12-10",
    joinning: "Immediately",
    aboutinternship: "This is a software testing internship",
  },
  {
    id: 3,
    title: "Backend Development",
    duration: "6 months",
    stipend: "unpaid",
    location: "Remote",
    type: "Internship",
    company: "Shika Foundation",
    start: "2021-10-10",
    end: "2021-12-10",
  },
];

const InternshipCard = () => {
  return (
    <>
      {IntershipCardData.map((data) => (
        <div key={data.id}>
          <div className="border p-5 rounded-xl max-w-sm">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {data.title}
                </h2>
                <p className="text-lg text-gray-600">{data.company}</p>
                <div className="flex items-center gap-2 pt-3">
                  <MoneyIcon />
                  <span className="text-lg text-gray-600">{data.stipend}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationOnIcon />
                  <span className="text-lg text-gray-600">{data.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarMonthIcon />
                  <span className="text-lg text-gray-600">{data.duration}</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <p className="text-lg text-gray-600 bg-green-50 rounded-lg px-2">{data.type}</p>
                <a href="#">
                  <button className="text-green-800 flex items-center">
                    View details <KeyboardArrowRightIcon />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export { InternshipCard };

const RegistrationForm = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="uppercase text-center text-3xl text-bold pb-5 italic font-bold text-green-500">
            Apply Internship
          </h1>
          <form action="#" method="post">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-2 sm:px-10 md:px-20 lg:px-32">
              <div className="">
                <label
                  htmlFor="first-name"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    name="first-name"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="middle-name"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Middle name
                </label>
                <div className="mt-2.5">
                  <input
                    name="middle-name"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="Last-name"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    name="Last-name"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="mobile"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Mobile
                </label>
                <div className="mt-2.5">
                  <input
                    name="mobile"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="address"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2.5">
                  <input
                    name="address"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="state"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  State
                </label>
                <div className="mt-2.5">
                  <input
                    name="state"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="city"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  City
                </label>
                <div className="mt-2.5">
                  <input
                    name="city"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="pincode"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Pincode
                </label>
                <div className="mt-2.5">
                  <input
                    name="pincode"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="country"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2.5">
                  <input
                    name="country"
                    type="text"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className=" block text-sm/6 font-semibold text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    name="email"
                    type="email"
                    className="block w-full border border-green-800 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:-outline-offset-1 focus:outline-green-600"
                  />
                </div>
              </div>
              {/* Register button */}
              <div className="mt-10 sm:col-span-3">
                <button
                  type="submit"
                  className=" w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
