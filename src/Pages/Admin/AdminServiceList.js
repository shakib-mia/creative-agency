import React from "react";
import ServiceItem from "../../components/ServiceItem";

const AdminServiceList = () => {
  return (
    <div>
      <div className="bg-white d-flex justify-content-between align-items-center px-5">
        <h3 className="fw-bolder py-3">Service List</h3>
        <h5 className="fw-bolder py-3">Admin Name</h5>
      </div>

      <div className="bg-white my-5 mx-3 p-5 rounded-3">
        <div className="bg-light text-muted row row-cols-5 justify-content-between align-items-center p-3 rounded-3 fw-normal">
          <div>Name</div>
          <div>Email ID</div>
          <div>Service</div>
          <div>Project Details</div>
          <div>Status</div>
        </div>

        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
        <ServiceItem></ServiceItem>
      </div>
    </div>
  );
};

export default AdminServiceList;
