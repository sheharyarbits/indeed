import React from "react";
import styles from "./JobDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFlag,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

const JobDetail = () => {
  return (
    <div className={styles["job-detail"]}>
      <div className={styles.inner} style={{ overflow: "hidden" }}>
        <div className={styles["job-detail-head"]}>
          <div>
            <p className="fs-5 fw-semibold mb-2">Full Stack Developer</p>
            <p className="mb-2">
              <a href="/">Company Name</a>
            </p>
            <p className={`${styles.city} mb-2`}>Lahore</p>
            <p className={`mb-1 ${styles.salary}`}>Rs 40,000 a month</p>
          </div>
          <div>
            <button className="button-theme mt-3">Apply now</button>
          </div>
        </div>
        <div className={styles["job-body"]}>
          <div className={styles["job-details"]}>
            <div>
              <p className="fw-bold fs-5">Job details</p>
              <p className={styles.pref}>
                <em>No matching job preferences</em>
              </p>

              <div className="d-flex gap-2">
                <div className={styles.icon}>
                  <FontAwesomeIcon className="mt-1" icon={faMoneyBill} />
                </div>
                <div>
                  <p className={styles["tag-name"]}>Salary</p>{" "}
                  <p className={styles.tag}>Rs 40,000 a month</p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className={styles.icon}>
                  <FontAwesomeIcon className="mt-1" icon={faBriefcase} />
                </div>
                <div>
                  <p className={styles["tag-name"]}>Job Type</p>{" "}
                  <p className={styles.tag}>Rs 40,000 a month</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["job-desc"]}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis eos illum, fuga temporibus quisquam rerum quis voluptas
              commodi iure ipsa accusamus itaque fugit eligendi. Provident
              doloremque optio nihil porro corporis magni, perferendis
              repudiandae laboriosam quibusdam labore. Voluptatem expedita in ex
              placeat debitis vitae dolore? Illo sint unde et dignissimos, ipsum
              doloremque ad repudiandae explicabo ullam, perferendis architecto
              reprehenderit eum possimus ea culpa aliquid voluptatem ipsam odio
              omnis, eos laborum asperiores hic vero. Placeat debitis excepturi
              nam provident rerum exercitationem vitae recusandae pariatur
              facilis magni dolore similique, quo quia quisquam dolor officia
              consequuntur quaerat eum obcaecati fuga. Quas voluptas sunt ex nam
              aliquam illum beatae obcaecati. Beatae quae unde quisquam dolore
              numquam odit doloremque, at eos id alias accusantium magnam
              perferendis atque dicta quia animi magni soluta sapiente dolorum.
              Consequatur eos itaque id similique, quidem voluptas. Asperiores
              veritatis, ex accusantium sapiente facere incidunt odit eligendi
              ullam deleniti quidem minima a iure alias odio autem sit! Officia
              ipsum sint quis. Dolore enim quam corporis dicta laborum,
              consequuntur, beatae sit totam reiciendis fugit soluta autem modi
              nobis culpa optio quidem voluptate illum perferendis deserunt
              mollitia id debitis, obcaecati porro et! Quod quis, laborum
              architecto magni quasi asperiores autem id ipsam? Quia,
              praesentium eius.
            </p>
            <div>
              <button className={styles["report-button"]}>
                <FontAwesomeIcon icon={faFlag} /> Report Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
