import styles from "./Search.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Search = () => {
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
          <Link to="/search" className="button-theme text-decoration-none">
            Find Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
