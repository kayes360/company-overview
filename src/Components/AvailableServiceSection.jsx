import React from "react";
import BarGraphGreen from "../assets/img/BarGraphGreen.png";
import BarGraphYellow from "../assets/img/BarGraphYellow.png";
export default function AvailableServiceSection() {
  return (
    <section className="my-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <h1 className="available-service section">
            Consectetur adipiscing elit
          </h1>
          <p className="fs-4 available-service section">
            Convallis a cras semper auctor neque. Fringilla est ullamcorper eget
            nulla facilisi etiam dignissim viverra
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="rounded-3 custom-shadow-1 p-3">
                <img src={BarGraphGreen} alt="" className="img-fluid" />
              </div>
              <div className="rounded-3 custom-shadow-1 p-2 mt-2 text-center">
                <p className="m-0 fw-bold text-light-green ">First Touch</p>
              </div>
            </div>
            <div>
              <div className="rounded-3 custom-shadow-1 p-3">
                <img src={BarGraphYellow} alt="" className="img-fluid" />
              </div>
              <div className="rounded-3 custom-shadow-1 p-2 mt-2 text-cente mt-2r mt-2">
                <p className="m-0 fw-bold text-light-orange ">Last Touch</p>
              </div>
            </div>
            <div>
              <div className=" round-shape custom-shadow-1 p-4 text-center">
                 <h1 className="  m-0">3</h1>
                 <p className="fs-6 fw-bold m-0">+Custom <br /> Ones</p>
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
