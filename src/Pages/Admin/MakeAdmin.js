import React from "react";

const MakeAdmin = () => {
  return (
    <div>
      <div className="bg-white d-flex justify-content-between align-items-center px-5">
        <h3 className="fw-bolder py-3">Make Admin</h3>
        <h5 className="fw-bolder py-3">Admin Name</h5>
      </div>

      <div id="make-admin" className="bg-white m-5 p-5 rounded-4">
        <h6>Email</h6>
        <form action="" className="row col-8 ps-2">
          <input type="text" className="col-8 py-1" />
          <div className="col-4">
            <button className="btn btn-success py-2 px-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
