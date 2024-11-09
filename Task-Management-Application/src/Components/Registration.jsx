// import React from 'react';
// //rafce
// const rafce = () => {
//   // code here
// };
// export default rafce;
// import React from 'react'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Registration = () => {
  const [fromData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(fromData);
    let isValid = true;
    let validationError = {};
    // if (
    //   fromData.fname === "" ||
    //   fromData.fname === null ||
    //   fromData.lname === "" ||
    //   fromData.lname === null ||
    //   fromData.email === "" ||
    //   fromData.email === null ||
    //   fromData.password === "" ||
    //   fromData.password === null ||
    //   fromData.cpassword === "" ||
    //   fromData.cpassword === null
    // ) {
    //   isValid = false;
    //   validationError = "All fields are required";
    // }
    if (fromData.fname === "" || fromData.fname === null) {
      isValid = false;
      validationError.fname = "First name is required";
    }
    if (fromData.lname === "" || fromData.lname === null) {
      isValid = false;
      validationError.lname = "Last name is required";
    }
    if (fromData.email === "" || fromData.email === null) {
      isValid = false;
      validationError.email = "Email is required";
    } else if (
      !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(fromData.email)
    ) {
      isValid = false;
      validationError.email = "Email is not valid";
    }
    if (fromData.password === "" || fromData.password === null) {
      isValid = false;
      validationError.password = "Password is required";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(fromData.password)
    ) {
      isValid = false;
      validationError.password =
        "Password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
    }
    if (fromData.cpassword === "" || fromData.cpassword === null) {
      isValid = false;
      validationError.cpassword = "Confirm Password is required";
    }
    if (fromData.password !== fromData.cpassword) {
      isValid = false;
      validationError.cpassword = "Password and Confirm Password must be same";
    }

    setError(validationError);
    setValid(isValid);

    if (Object.keys(validationError).length === 0) {
      // alert("Registration Successfully");
      axios
        .post("http://localhost:8000/user", fromData)
        .then(result => {
          alert("Registration Successfully")
          navigate('/login')
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <>
      <div>Registration</div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="signup-form">
              <form
                action=""
                className="mt-5 border p-4 bg-light shadow"
                onSubmit={handleSubmit}
              >
                {valid ? (
                  <></>
                ) : (
                  <span className="text-danger">
                    {/*error*/}
                    {error.fname}
                    {error.lname}
                    {error.email}
                    {error.password}
                    {error.cpassword}
                  </span>
                )}{" "}
                <h4 className="mb-5 text-secondary">Create Your Account</h4>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label>
                      First Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      className="form-control"
                      placeholder="Enter First Name"
                      onChange={(event) =>
                        setFormData({ ...fromData, fname: event.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 col-md-6">
                    <label>
                      Last Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      className="form-control"
                      placeholder="Enter Last Name"
                      onChange={(event) =>
                        setFormData({ ...fromData, lname: event.target.value })
                      }
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      onChange={(event) =>
                        setFormData({ ...fromData, email: event.target.value })
                      }
                    />
                  </div>{" "}
                  <div className="mb-3 col-md-12">
                    <label>
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(event) =>
                        setFormData({
                          ...fromData,
                          password: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      Confirm Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={(event) =>
                        setFormData({
                          ...fromData,
                          cpassword: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary float-end">
                      Signup Now
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center mt-3 text-secondary">
                If you have account, Please <Link to="/login">Login Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
// 190
