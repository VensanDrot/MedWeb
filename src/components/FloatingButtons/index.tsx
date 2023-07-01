import React from "react";
import styles from "./index.module.css";
import { AiOutlinePhone } from "react-icons/ai";

const FloatingButtons = () => {
  return (
    <div className={styles.floating_Container}>
      <div className={` ${styles.floating_Container_mini} yellow `}>
        <a href="#">
          <AiOutlinePhone /> <span>(999) 999 9999</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
