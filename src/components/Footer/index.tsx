import React, { useState } from "react";
import styles from "./index.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.main_footer}>
      <div className={styles.child_container}>
        <div>
          <h3>CONTACT US</h3>
          <a href="" target="_blank">
            smth@gmail.com
          </a>
          <a href="" target="_blank">
            (999) 999 9999
          </a>
          <a href="https://www.instagram.com/hydrationationiv/" target="_blank">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.facebook.com/HydratioNationIV/" target="_blank">
            <FaFacebookF />
            Facebook
          </a>
        </div>
        <div>
          <h3>Get In Touch</h3>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="text" placeholder="phone number" maxLength={10} />
          <textarea placeholder="message" cols={30} rows={5}></textarea>
          <button type="submit" className="yellow">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
