import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="border-top border-dark-subtle">
      <div className="px-3 my-3 ">
        <div className={`d-flex flex-wrap gap-4 mb-4 ${styles.links}`}>
          <a href="/">Browse Jobs</a>
          <a href="/">Browse Companies</a>
          <a href="/">Coutries</a>
          <a href="/">About</a>
          <a href="/">Help Center</a>
          <a href="/">ESG at Indeed</a>
        </div>
        <div className={`d-flex  flex-wrap gap-4 ${styles.links}`}>
          <span>© 2023 Indeed</span>
          <a href="/">Accessibility at Indeed</a>
          <a href="/">Privacy Center</a>
          <a href="/">Cookies</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
