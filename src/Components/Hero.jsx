import React from "react";
import HeroImg from "../assets/img/HeroImg.png";
export default function Hero() {
  return (
    <section className="row m-0 p-0">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12  ">
        <div className=" d-flex flex-column align-items-center mt-5">
          <div className="hero-title ms-5">
            <p>
              Lore <span>ipsum .</span>
            </p>
            <p>
              Dolor <span>sit .</span>
            </p>
          </div>
         <div>
         <p className="hero-text mx-auto w-50">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde
            omnis iste natus error.
          </p>
         </div>
          <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column   ms-4">
            <button className="btn btn-outline-dark custom-btn-text mx-2 px-5">
              Viverra orci sagittis
            </button>

            <button className="btn btn-light-green custom-btn-text mx-2 px-5 mt-lg-0 mt-md-0 mt-sm-3 mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-play-circle-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              </svg>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-lg-0 mt-md-0 mt-sm-5 mt-5  d-flex justify-content-center hero-img-wrapper pe-0"> 
          <img src={HeroImg} alt="" className="img-fluid hero-img my-auto  " /> 
      </div>
    </section>
  );
}
