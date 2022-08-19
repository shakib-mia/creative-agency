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
import customer1 from "./../../images/customer-1.png";
import customer2 from "./../../images/customer-2.png";
import customer3 from "./../../images/customer-3.png";
import Navbar from "../../components/Navbar";

const Page1 = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 740) {
      document.getElementById("navbar").style.background = "#fff";
    } else {
      document.getElementById("navbar").style.background = "#FBD062";
    }
  });

  return (
    <div>
      <Navbar></Navbar>
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
            <p className="px-lg-5 mx-lg-4">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
          <div className="col py-5">
            <img className="col-3" src={graphic_mobile} alt="" />
            <h4 className="mt-4 mb-2">Graphic Design</h4>
            <p className="px-lg-5 mx-lg-4">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
          <div className="col py-5">
            <img className="col-3" src={web_dev} alt="" />
            <h4 className="mt-4 mb-2">Web Development</h4>
            <p className="px-lg-5 mx-lg-4">
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
          <img src={carousel1} alt="" />

          <img src={carousel2} alt="" />

          <img src={carousel3} alt="" />

          <img src={carousel4} alt="" />

          <img src={carousel5} alt="" />
        </div>
      </div>

      <div className="my-5 py-5 container" id="feedback">
        <h2 className="text-center fw-bolder pb-5">
          Clients <span className="text-success">Feedback</span>
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col p-4">
            <div className="border rounded">
              <div className="row align-items-center p-3">
                <img src={customer1} alt="" className="col-4" />
                <div className="col-8">
                  <h3 className="fw-bold">Nash Patrik</h3>
                  <h5 className="fw-bold">CEO, Manpol</h5>
                </div>
                <p className="col-12 mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, doloribus? Voluptate est dolore eaque veniam!
                </p>
              </div>
            </div>
          </div>
          <div className="col p-4">
            <div className="border rounded">
              <div className="row align-items-center p-3">
                <img src={customer2} alt="" className="col-4" />
                <div className="col-8">
                  <h3 className="fw-bold">Nash Patrik</h3>
                  <h5 className="fw-bold">CEO, Manpol</h5>
                </div>
                <p className="col-12 mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, doloribus? Voluptate est dolore eaque veniam!
                </p>
              </div>
            </div>
          </div>
          <div className="col p-4">
            <div className="border rounded">
              <div className="row align-items-center p-3">
                <img src={customer3} alt="" className="col-4" />
                <div className="col-8">
                  <h3 className="fw-bold">Nash Patrik</h3>
                  <h5 className="fw-bold">CEO, Manpol</h5>
                </div>
                <p className="col-12 mt-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quam, doloribus? Voluptate est dolore eaque veniam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="contact">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <div className="col-12 col-lg-8">
                <h2>Let us handle your project, professionally.</h2>
                <p className="footer-text">
                  With well written codes, we build amazing apps for all
                  platforms, mobile and web apps in general.
                </p>
              </div>
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Your name / Company's Name"
              />
              <textarea
                name=""
                id=""
                className="form-control"
                rows="10"
                placeholder="Your Message"
              ></textarea>

              <button className="btn btn-dark px-5 text-white mt-2">
                Send
              </button>
            </div>
          </div>
        </div>

        <p className="text-center">copyright Orange labs 2020</p>
      </footer>
    </div>
  );
};

export default Page1;
