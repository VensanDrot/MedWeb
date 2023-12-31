import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

const FeelBetter = () => {
  return (
    <div className={styles.FB_container}>
      <div className={styles.FB_content}>
        <h1>Why IV?</h1>
        <p>Hydrate—it purifies the soul.</p>
        <p>
          Whether you&apos;re focused on everyday wellness or in need of instant recovery, our IV hydration packs are
          formulated with the essential nutrients your body needs to thrive.{" "}
        </p>
        <p>Feel great NOW with the immediate effects of IV hydration.</p>
        <Link href="/services" className="yellow">
          Check Out Our Full Service Menu Here
        </Link>
      </div>
    </div>
  );
};

export default FeelBetter;
