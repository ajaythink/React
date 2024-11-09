// import React from 'react'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
        <form className="d-flex">
          <Link to="/registration" className="">Registration</Link>                     
        </form>
      </div>
    </nav>
  );
};
export default Navbar;
