import React from "react";
import logo from "./../../images/logos/logo.png";
import gIcon from "./../../images/icons/google.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <Link to="/" className="d-flex justify-content-center my-5">
        <img src={logo} className="col-4 col-lg-2" alt="" />
      </Link>

      <div className="border rounded-3 mt-5 col-12 col-lg-6 mx-auto pt-5">
        <h5 className="fw-bolder text-center mt-5">Login With</h5>
        <button className="d-flex btn btn-outline-dark my-4 rounded-pill justify-content-between align-items-center p-1 col-9 mx-auto">
          <img className="col-1 img-fluid" src={gIcon} alt="" />
          <div>
            <h6 className="fw-bolder my-auto">Continue With Google</h6>
          </div>
          <div></div>
        </button>

        <div className="text-center mt-2 mb-5 pb-5">
          <p>
            Don't have Account? <Link to="/">Create An Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
