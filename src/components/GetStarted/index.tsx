import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

const GetStarted = () => {
  return (
    <div className={styles.get_container}>
      <div className={styles.get_started}>
        <h4>MOBILE IV THERAPY</h4>
        <h1>HydratioNation IV Comes To You</h1>
        <p>Bring any IV to your home, office, or event.</p>
        <Link href="/services" className="yellow">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
