import React from "react";
import webAndMobile from "../../images/icons/service1.png";
import GraphicDesign from "../../images/icons/service2.png";

const ServiceList = () => {
  return (
    <div>
      <div className="bg-white d-flex justify-content-between align-items-center px-5">
        <h3 className="fw-bolder py-3">Service List</h3>
        <h5 className="fw-bolder py-3">User Name</h5>
      </div>

      <div className="services ps-5 py-5 row">
        <div class="card col-12 col-lg-5 border-0 rounded-4 mt-3 mt-lg-0">
          <div className="row px-4 justify-content-between align-items-top pt-3">
            <div className="col-4">
              <img src={webAndMobile} className="col-5" alt="..." />
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button className="pending px-4 py-2 rounded fw-bold h-75">
                Pending
              </button>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">Web & Mobile Design</h5>
            <p class="card-text mb-5">
              We craft stunning and amazing web UI, using a well drrafted UX to
              fit your product.
            </p>
          </div>
        </div>

        <div class="card col-12 col-lg-5 border-0 rounded-4 ms-lg-4 mt-3 mt-lg-0">
          <div className="row px-4 justify-content-between align-items-top pt-3">
            <div className="col-4">
              <img src={GraphicDesign} className="col-5" alt="..." />
            </div>
            <div className="col-4 d-flex justify-content-end">
              <button className="done px-4 py-2 rounded fw-bold h-75">
                Done
              </button>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title fw-bold">Graphic design</h5>
            <p class="card-text mb-5 col-10">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
