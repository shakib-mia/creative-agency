import React from "react";
import Header from "./Header/Header";
import slack from "./../../images/logos/slack.png";
import google from "./../../images/logos/google.png";
import uber from "./../../images/logos/uber.png";
import netflix from "./../../images/logos/netflix.png";
import airbnb from "./../../images/logos/airbnb.png";
import web_Mobile from "./../../images/icons/service1.png";
import graphic_mobile from "./../../images/icons/service2.png";
import web_dev from "./../../images/icons/service3.png";
import carousel1 from "./../../images/carousel-1.png";
import carousel2 from "./../../images/carousel-2.png";
import carousel3 from "./../../images/carousel-3.png";
import carousel4 from "./../../images/carousel-4.png";
import carousel5 from "./../../images/carousel-5.png";

const Page1 = () => {
  return (
    <div>
      <div className="header-bg">
        <Header></Header>
      </div>

      <div className="container py-5" id="social">
        <div className="row row-cols-5 pt-3 pb-5 align-items-center">
          <div className="col d-flex justify-content-center">
            <img
              src={slack}
              className="img-fluid"
              width="140"
              height="36"
              alt=""
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src={google}
              className="img-fluid"
              width="129"
              height="44"
              alt=""
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src={uber}
              className="img-fluid"
              width="99"
              height="56"
              alt=""
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src={netflix}
              className="img-fluid"
              width="120"
              height="67"
              alt=""
            />
          </div>
          <div className="col d-flex justify-content-center">
            <img
              src={airbnb}
              className="img-fluid"
              width="161"
              height="51"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container py-5" id="services">
        <h2 className="text-center fw-bolder py-5">
          Provide Awesome <span className="text-success">Services</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center text-center">
          <div className="col py-5">
            <img className="col-3" src={web_Mobile} alt="" />
            <h4 className="mt-4 mb-2">Web & Mobile design</h4>
            <p className="px-5 mx-4">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
          <div className="col py-5">
            <img className="col-3" src={graphic_mobile} alt="" />
            <h4 className="mt-4 mb-2">Graphic Design</h4>
            <p className="px-5 mx-4">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
          <div className="col py-5">
            <img className="col-3" src={web_dev} alt="" />
            <h4 className="mt-4 mb-2">Web Development</h4>
            <p className="px-5 mx-4">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
      </div>

      <div id="works">
        <h2 className="text-center fw-bolder pb-5 text-white">
          Here are some of <span className="text-success">our works</span>
        </h2>

        <div class="owl-carousel">
          <div className="ms-5 ps-5">
            <img src={carousel1} alt="" />
          </div>
          <div>
            <img src={carousel2} alt="" />
          </div>
          <div>
            <img src={carousel3} alt="" />
          </div>
          <div>
            <img src={carousel4} alt="" />
          </div>
          <div>
            <img src={carousel5} alt="" />
          </div>
        </div>
      </div>

      <div id="feedback"></div>
    </div>
  );
};

export default Page1;
