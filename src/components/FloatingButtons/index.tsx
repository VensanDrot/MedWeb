import React from "react";
import styles from "./index.module.css";
import { AiOutlinePhone } from "react-icons/ai";

const FloatingButtons = () => {
  return (
    <div className={styles.floating_Container}>
      <div className={` ${styles.floating_Container_mini} yellow `}>
        <a href="tel:443-212-8237">
          <AiOutlinePhone /> <span>(443) 212 8237</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
