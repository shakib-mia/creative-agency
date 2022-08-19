import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logos/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top pe-3" id="navbar">
      <div class="container py-1">
        <a href="#">
          <img src={logo} id="logo" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item px-4">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link" href="#works">
                Our Portfolio
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link" href="#">
                Our Team
              </a>
            </li>
            <li class="nav-item px-4">
              <a class="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <Link class="nav-link btn btn-dark text-white px-5" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
