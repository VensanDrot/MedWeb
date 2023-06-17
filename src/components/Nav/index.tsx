import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import img from "../../img/logo.png";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const changeBackground = () => {
    console.log(scrollY);
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (isBrowser()) {
    window.addEventListener("scroll", changeBackground);
  }

  return (
    <header
      className={` ${navbar ? `${styles.nav_container} ${styles.nav_active}` : styles.nav_container} ${
        isOpen ? styles.nav_container_mobile : ""
      } `}
    >
      <div className={styles.nav_box}>
        <Link href="/" className={styles.nav_img_con}>
          <Image src={img} alt="Chilling" className={styles.nav_img} />
        </Link>
        <div className={styles.Hamburger_container}>
          <Hamburger size={35} toggled={isOpen} toggle={setOpen} />
        </div>

        <div
          className={`
          ${isOpen ? `${styles.nav_link_mobile} ${styles.nav_link_mobile_active}` : styles.nav_link_mobile} ${
            styles.nav_link_holder
          } `}
        >
          <Link href="/qapaghe">Hydration Services</Link>
          <Link href="/qapaghe">FAQ Page</Link>
          <Link href="/aboutus">About us</Link>
          <Link href="/qapaghe">Contact</Link>
          <Link href="/qapaghe" className="yellow">
            BOOK AN APPOINTMENT
          </Link>
        </div>

        <div className={styles.nav_link_holder}>
          <Link href="/qapaghe">Hydration Services</Link>
          <Link href="/qapaghe">FAQ Page</Link>
          <Link href="/aboutus">About us</Link>
          <Link href="/qapaghe">Contact</Link>
          <Link href="/qapaghe" className="yellow">
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
