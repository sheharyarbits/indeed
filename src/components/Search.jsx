import React, { useState } from "react";
import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [IsFilters, setIsFilters] = useState(false);

  return (
    <div className="col-lg-10  col-11  mx-auto mt-5">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap">
        <div className={styles["input-div"]}>
          <label htmlFor="what">What</label>
          <input
            id="what"
            type="text"
            placeholder="Job title, keywords, or company"
          />
        </div>
        <div className={styles["input-div"]}>
          <label htmlFor="where">Where</label>
          <input
            id="where"
            type="text"
            placeholder="city, province, or region"
          />
          <FontAwesomeIcon
            style={{ fontSize: "14px", color: "#7d7d7d" }}
            icon={faLocationDot}
          />
        </div>
        <div>
          <button
            className="button-theme"
            onClick={() => setIsFilters(!IsFilters)}
          >
            Find Jobs
          </button>
        </div>
      </div>
      {IsFilters && (
        <div className="d-flex flex-wrap gap-3 mt-4">
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
          <div class={`btn-group ${styles.dropdown}`}>
            <button
              type="button"
              class="btn btn-danger dropdown-toggle"
              style={{
                background: "#E4E2E0",
                border: "none",
                color: "black",
              }}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
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
              <li>
                <a class="dropdown-item" href="/">
                  Separated link
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
