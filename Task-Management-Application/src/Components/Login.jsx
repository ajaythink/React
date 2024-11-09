// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {             
  const [fromData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(fromData);
    let isValid = true;
    let validationError = {};

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
    } 
    

    axios
      .get("http://localhost:8000/user")
      .then((result) => {
        result.data.map((user) => {
          if (user.email === fromData.email) {
            if (user.password === fromData.password) {
              // alert("Login successfully");
              navigate('/')
            } else {
              isValid = false;
              validationError.password = "Password is incorrect";
            }
          }
          else{
            isValid = false;
            validationError.email = "Email is not registered";
          }
        });
        setError(validationError);
        setValid(isValid);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>Login</div>
      <div className="container justify-content-center">
        <div className="row ">
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
                  <div className="col-md-12">
                    <button className="btn btn-primary float-end">
                      Login Now
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center mt-3 text-secondary">
                If you have account, Please{" "}
                <Link to="/registration">Register here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
