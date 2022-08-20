import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Customer = () => {
  return (
    <div id="customer-page">
      <div className="row">
        <div className="col-2 vh-100">
          <Link to="/">
            <h3 className="pb-5 px-5 fw-bolder mt-3">Logo Here</h3>
          </Link>
          <NavLink to="/customer/" className="d-flex align-items-center mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="35px"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>

            <h4 className="my-auto">Order</h4>
          </NavLink>
          <NavLink
            to="/customer/service-list"
            className="d-flex align-items-center mx-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="35"
              fill="currentColor"
              class="bi bi-hdd"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              <path d="M16 11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.51c0-.418.105-.83.305-1.197l2.472-4.531A1.5 1.5 0 0 1 4.094 3h7.812a1.5 1.5 0 0 1 1.317.782l2.472 4.53c.2.368.305.78.305 1.198V11zM3.655 4.26 1.592 8.043C1.724 8.014 1.86 8 2 8h12c.14 0 .276.014.408.042L12.345 4.26a.5.5 0 0 0-.439-.26H4.094a.5.5 0 0 0-.44.26zM1 10v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
            </svg>

            <h4 className="my-auto">Service List</h4>
          </NavLink>
          <NavLink
            to="/customer/review"
            className="d-flex align-items-center mx-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="35"
              fill="currentColor"
              class="bi bi-chat-left-dots"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>

            <h4 className="my-auto">Review</h4>
          </NavLink>
        </div>
        <div className="col-10 ps-0 bg-light">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Customer;
