import React from "react";
import styles from "./index.module.css";
import { AiOutlinePhone } from "react-icons/ai";

const FloatingButtons = () => {
  return (
    <div className={` ${styles.floating_Container} yellow `}>
      <a href="#">
        <AiOutlinePhone /> <span>(999) 999 9999</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
