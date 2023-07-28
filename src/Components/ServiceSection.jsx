import React from "react";

import TableWithLineGraph from "../assets/img/TableWithLineGraph.png";
export default function ServiceSection() {
  return (
    <section className="my-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12"> 
          <p className="service-section-title">Nemo enim ipsam quia</p>
          <p className="service-section-subtitle">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed qu nemo enim
          </p>
          <ul className="list-unstyled service-section-list w-75 mx-lg-0 mx-md-0 mx-sm-auto mx-auto ">
            <li className="fw-bold custom-shadow-2 rounded-4 my-3 p-4">
              <i className="me-3 bi bi-check-circle"></i>
              Sed ut perspiciatis unde
            </li>
            <li className="fw-bold custom-shadow-3 rounded-4 my-3 p-4">
              <i className="me-3 bi bi-check-circle"></i>
              Omnis iste natus
            </li>
            <li className="fw-bold custom-shadow-3 rounded-4 my-3 p-4">
              <i className="me-3 bi bi-check-circle"></i>
              Error sit voluptatem
            </li>
            <li className="fw-bold custom-shadow-3 rounded-4 my-3 p-4">
              <i className="me-3 bi bi-check-circle"></i>
              Accusantium doloremque
            </li>
          </ul>
          <button className="btn btn-light-green custom-btn-text mx-2 px-5 mt-5">
            Try Out Now!
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12  my-auto">
          <img src={TableWithLineGraph} className="img-fluid rounded-4 custom-shadow-4  " alt="" />
        </div>
      </div>
    </section>
  );
}
