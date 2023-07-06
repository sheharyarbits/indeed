import React from "react";
import styles from "./JobCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEllipsisVertical,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const JobCard = () => {
  return (
    <div className={styles["job-card"]}>
      <div className="d-flex justify-content-between">
        <div>
          <p className="">new</p>
          <p className="fw-bold">Full Stack developer</p>
        </div>
        <div>
          <a
            class="nav-link dropdown"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-toggle="dropdown"
          >
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/">
                Save job
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Not interested
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Is there a problem with job
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>Company Name</p>
        <p>Lahore</p>
      </div>
      <div>
        <div className="d-flex gap-2">
          <p className={styles.tag}>
            <FontAwesomeIcon icon={faMoneyBill} /> Rs 40,000 a month
          </p>
          <p className={styles.tag}>
            <FontAwesomeIcon icon={faBriefcase} /> Full-time
          </p>
        </div>
      </div>
      <div>
        <ul className={styles.desc}>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum alias
            nihil aut totam in ratione tempora sint sunt sed ad.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            accusamus qui dolorum dicta aspernatur dignissimos.
          </li>
        </ul>
      </div>
      <div className={styles.active}>
        <p>Active 2 days ago</p>
      </div>
    </div>
  );
};

export default JobCard;
