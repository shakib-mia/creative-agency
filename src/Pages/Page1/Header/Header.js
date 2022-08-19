import React from "react";
import frame from "../../../images/logos/Frame.png";

const Header = () => {
  return (
    <header>
      <div className="container pt-4 mt-2 mt-lg-5 pt-lg-5">
        <div className="row align-items-center mt-5">
          <div className="col-12 col-lg-4">
            <h1>Let’s Grow Your Brand To The Next Level</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>

            <a href="#" className="btn btn-dark px-5">
              Hire Us
            </a>
          </div>
          <div className="col-12 col-lg-8 d-flex justify-content-end px-0 order-1">
            <img src={frame} className="img-fluid col-10" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
