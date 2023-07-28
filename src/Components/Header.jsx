import React from "react";
import LogoColorImg from "../assets/img/LogoColorImg.png";
export default function Header() {
  return (
    <div className="header-shadow">
      <header className=" container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand header-logo-wrapper">
              <img src={LogoColorImg} className="img-fluid" alt="Bootstrap" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Product 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Product 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Product 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
              <button className="btn btn-light-green custom-btn-text mx-2 py-2 px-4">
                Get Started
              </button>
              <button className="btn btn-outline-dark custom-btn-text mx-2">
                Login{" "}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
