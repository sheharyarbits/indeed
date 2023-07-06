import React from "react";
import MainLogo from "../assets/images/ukraine_support.7ad2b5d444bc427dbc5d.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav class="navbar bg-body-tertiary navbar-expand-md border-bottom ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={MainLogo} width="50px" alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-start flex-grow-1 pe-3 me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Find jobs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Company reviews
                </a>
              </li>
            </ul>
            <div className="align-content-center me-3">
              <ul className="navbar-nav d-flex flex-row gap-3">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <FontAwesomeIcon icon={faMessage} />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    <FontAwesomeIcon icon={faBell} />
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-toggle="dropdown"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={`d-flex align-items-center ${styles["post-job"]}`}>
              <ul class="navbar-nav justify-content-start flex-grow-1 pe-3 me-auto">
                <li class="nav-item">
                  <a href="/">Employers / Post Job</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
