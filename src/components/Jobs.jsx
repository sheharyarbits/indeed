import React from "react";
import JobCard from "./JobCard";
import styles from "./Jobs.module.css";
import JobDetail from "./JobDetail";

const Jobs = () => {
  return (
    <div className={styles["jobs-page"]}>
      <div className="d-flex justify-content-between px-4">
        <div className={styles["job-card"]}>
          <p className="mb-3">Jobs based on your activity on Indeed</p>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className={styles["job-detail"]}>
          <JobDetail />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
