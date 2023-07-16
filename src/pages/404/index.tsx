import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import url from "../../img/gif.webp";

const PageNotFound = () => {
  return (
    <div className={`${styles.PNF_container} spacer`}>
      <h1>Getting cured.</h1>
      <h1>See you soon!</h1>
      <Image src={url} width={500} height={500} alt="Image is chilling" />
    </div>
  );
};

export default PageNotFound;
