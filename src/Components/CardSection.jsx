import React from "react";

import PieChartThemeIcon from "../assets/img/PieChartThemeIcon.png";
import BarChartThemeIcon from "../assets/img/BarChartThemeIcon.png";
import LineChartThemeIcon from "../assets/img/LineChartThemeIcon.png";
export default function CardSection() {
  return (
    <section className="my-5">
      <div className="row justify-content-center mx-lg-5 mx-md-0 mx-sm-0 mx-0 px-lg-0 px-md-5 px-sm-0 px-0">
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
          <div
            className="card custom-card border-0  custom-shadow-2 rounded-4 p-3 mx-auto"
            
          >
            <div className="my-5 ">
              <img src={PieChartThemeIcon} className="img-fluid " alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h5>
              <p className="card-text">
                Convallis a cras semper auctor neque. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim, eiusmod tempor incididunt
                ut labore
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
          <div
            className="card custom-card border-0 custom-shadow-green rounded-4 p-3 mx-auto"
            
          >
            <div className="my-5 ">
              <img src={BarChartThemeIcon} className="img-fluid " alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h5>
              <p className="card-text">
                Convallis a cras semper auctor neque. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim, eiusmod tempor incididunt
                ut labore
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
          <div
            className="card custom-card border-0  custom-shadow-2 rounded-4 p-3 mx-auto"
            
          >
            <div className="my-5 ">
              <img src={LineChartThemeIcon} className="img-fluid " alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h5>
              <p className="card-text">
                Convallis a cras semper auctor neque. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim, eiusmod tempor incididunt
                ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
