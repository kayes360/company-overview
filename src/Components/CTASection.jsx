import React from "react";

export default function CTASection() {
  return (
    <section className="my-5">
      <div className="cta-section-wrapper">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <p className="cta-section-title    ">
              Ullamcorper morbi tincidunt ornare massa eget
            </p>
            <p className="cta-section-subtitle  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center">
            <button className="btn btn-light-green custom-btn-text mx-2 py-3 px-5">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
