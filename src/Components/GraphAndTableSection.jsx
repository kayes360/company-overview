import React from "react";

import LineGraph from "../assets/img/LineGraph.png";
export default function GraphAndTableSection() {
  return (
    <section>
      <div className="graph-and-table-section-heading">
        <p className="graph-and-table-section-title text-center  ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <p className="graph-and-table-section-subtitle text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>
      <img src={LineGraph} alt="" className="img-fluid" />

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <p className="graph-and-table-section-table-title text-center fw-bold">
            Facebook data
          </p>
          <div className="table-responsive">
            <table className="table custom-table text-center">
              <thead className="thead">
                <tr className="thead-row">
                  <td className="table-column-title">Ad name</td>
                  <td className="table-column-title">Orders</td>
                  <td className="table-column-title">ROAS</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>All_25+_Static_split_screen</td>
                  <td>12</td>
                  <td>3.2</td>
                </tr>
                <tr>
                  <td>M_25+_Static_split_screen_2</td>
                  <td>2</td>
                  <td style={{ background: "#F6D45B" }}>1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <p className="graph-and-table-section-table-title text-center fw-bold">
            Logoipsum data
          </p>
          <div className="table-responsive">
            <table className="table custom-table text-center">
              <thead>
                <tr className="thead-row">
                  <td className="table-column-title">Ad name</td>
                  <td className="table-column-title">Orders</td>
                  <td className="table-column-title">ROAS</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>All_25+_Static_split_screen</td>
                  <td>10</td>
                  <td>2.8</td>
                </tr>
                <tr>
                  <td>M_25+_Static_split_screen_2</td>
                  <td>8</td>
                  <td style={{ background: "#64B992" }}>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
