import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { MdWaterDrop } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

const GetStarted = () => {
  return (
    <div className={styles.get_container}>
      <div className={styles.get_started}>
        <h4>MOBILE IV THERAPY</h4>
        <h1>HydratioNation IV Comes To You</h1>
        <p>Bring any IV to your home, office, or event.</p>
        <a href="" className="yellow">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
