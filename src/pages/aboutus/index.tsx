import React from "react";
import styles from "./index.module.css";
import GetStarted from "@/components/GetStarted";
import { AboutData } from "@/components/Data";

const AboutUs = () => {
  return (
    <div className={styles.AboutUs_container}>
      <div className="top_img"></div>
      <div className={styles.about_container}>
        <h1 className="naming">ABOUT US</h1>
        {AboutData.map((e) => {
          return (
            <div className={styles.kid_container} key={e.id}>
              {e.text}
            </div>
          );
        })}
      </div>
      <GetStarted />
    </div>
  );
};

export default AboutUs;
