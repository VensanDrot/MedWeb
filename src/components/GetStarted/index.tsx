import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { MdWaterDrop } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

const GetStarted = () => {
  return (
    <div className={styles.get_main_container}>
      <div className={styles.get_container}>
        <h1>Get Started</h1>
        <ol className={styles.get_info_container}>
          <li>
            <MdWaterDrop />
            <p>Select a Drip just right for your body and mind</p>
          </li>
          <li>
            <BiCalendar />
            <p>Schedule your Drippin’ appointment</p>
          </li>
          <li>
            <GiPlagueDoctorProfile />
            <p>Receive our practitioner’s medical clearance and we will match a nurse to you</p>
          </li>
          <li>
            <AiOutlineHome />
            <p>Enjoy your Drip at our Drip Lounge or your home</p>
          </li>
        </ol>
        <Link href="/" className="yellow">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;
