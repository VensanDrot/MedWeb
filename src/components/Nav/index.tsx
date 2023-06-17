import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import img from "../../img/logo.png";

const Nav = () => {
  const isBrowser = () => typeof window !== "undefined";
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleclick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
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
    <header className={navbar ? `${styles.nav_container} ${styles.nav_active}` : styles.nav_container}>
      <div className={styles.nav_box}>
        <Link href="/">
          <Image src={img} alt="Chilling" className={styles.nav_img} />
        </Link>
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
