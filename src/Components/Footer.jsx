import React from "react";
import LogoBlackAndWhiteImg from "../assets/img/LogoBlackAndWhiteImg.png";

export default function Footer() {
  return (
    <footer className="">
      <div className="  container py-5 ">
       <div className="row justify-content-evenly m-lg-5 m-md-0 m-sm-0 m-3 p-lg-0 p-md-5 p-sm-0 p-3  ">
       <div className="col-lg-2 col-md-6 col-sm-12 col-12  ">
          <ul className="list-unstyled">
            <li className="fw-bold mb-3">Products</li>
            <li>Features</li>
            <li>Enterprice</li>
            <li>Innovation</li>
            <li>Offline</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 col-12 ">
          <ul className="list-unstyled">
            <li className="fw-bold mb-3">Company</li>
            <li>About</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12   "> 
          <ul className="list-unstyled">
            <li className="fw-bold mb-3">Support</li>
            <li>Documentation</li>
            <li>Community</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="vertical-rule d-lg-block d-md-none d-sm-none d-none"></div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-12  ">
          <a className="navbar-brand" href="#">
            <img src={LogoBlackAndWhiteImg} alt="Bootstrap" />
          </a>
          <p className="fw-bold">
            Tristique senectus et netus et malesuada fames
          </p>
          <p>©2023 Logoipsum. All rights reserved</p>
        </div>
       </div>
      </div>
    </footer>
  );
}
