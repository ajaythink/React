// import { NavLink } from "react-router-dom";
// import React from "react";

// export default function MobileNav({ closeMenu }) {
//   return (
//     <div className="bg-gray-100 p-4 rounded-2xl">
//       <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 bg-gray-100 p-4 rounded-2xl">
//         <li>
//           <NavLink
//             to="/"
//             onClick={closeMenu}
//             className={({ isActive }) =>
//               `block py-2 pr-4 pl-3 duration-200 ${
//                 isActive ? "text-orange-700" : "text-gray-700"
//               } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             onClick={closeMenu}
//             className={({ isActive }) =>
//               `block py-2 pr-4 pl-3 duration-200 ${
//                 isActive ? "text-orange-700" : "text-gray-700"
//               } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//             }
//           >
//             About
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/highlights"
//             onClick={closeMenu}
//             className={({ isActive }) =>
//               `block py-2 pr-4 pl-3 duration-200 ${
//                 isActive ? "text-orange-700" : "text-gray-700"
//               } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//             }
//           >
//             Highlights
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             onClick={closeMenu}
//             className={({ isActive }) =>
//               `block py-2 pr-4 pl-3 duration-200 ${
//                 isActive ? "text-orange-700" : "text-gray-700"
//               } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//             }
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// }

import { NavLink } from "react-router-dom";
import React from "react";

const MobileNav = ({ closeMenu }) => {
  return (
    <ul>
      {[
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/campiagn", label: "Campaign" },
        { path: "/volunteer", label: "Volunteer" },
        { path: "/event", label: "Event" },
        { path: "/highlights", label: "Highlights" },
        { path: "/media", label: "Media" },
        { path: "/contact", label: "Contact" },
        {path: "/Login", label: "Login"}, 
      ].map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            onClick = {closeMenu}
            className=
            {({ isActive }) =>
              `block py-3 pr-4 rounded-sm text-center ${
                isActive ? "bg-orange-700 text-white" : "text-gray-700"
              } hover:bg-gray-200`
            }
            >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default MobileNav;
