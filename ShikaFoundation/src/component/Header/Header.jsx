import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import MobileNav from "./MobileNav";
// ShikaFoundation/src/component/Header/Header.jsx
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-200 shadow sticky z-50 top-0">
      <nav className=" bg-transparent border-gray-200 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto px-5 md:px-10">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Org logo"
              className="mr-5 rounded-lg scale-105"
              style={{ height: "5rem" }}
            />
          </Link>
          <div className="flex justify-between lg:flex lg:items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg  px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none hidden lg:block"
            >
              Log In
            </Link>

            <Link
              to="/DonateForEducation"
              className=" animate-pulse text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 rounded-lg px-1 lg:px-4 lg-px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              Donate Now
            </Link>
            <div className="lg:hidden">
              <i
                className="bx bx-menu text-4xl cursor-pointer pl-4"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              ></i>
            </div>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md">
              <MobileNav closeMenu={closeMenu} />
            </div>
          )}

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 sm:"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 bg-gray-100 p-4 rounded-2xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/campiagn"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Campiagn
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/member"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Member
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/volunteer"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Volunteer
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/event"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Event
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/highlights"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Highlights
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/media"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* <div
          className={`absolute md:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } `}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
        </div> */}
      </nav>
      {/* <p>Shika Foundation Header &copy; 2021</p> */}
    </header>
  );
}

