import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import link from "../../img/HydrationServicesPageBanner.svg";
import icon1 from "../../img/IVTherapyHydrationServices.svg";
import icon2 from "../../img/InjectionTherapyHydrationServices.svg";
import Link from "next/link";
import { WellnessHydrationPacks, RecoveryHydrationPacks } from "@/components/Data";

interface DivInterface {
  id: number;
  icon: boolean;
  name: string;
  price: string;
  description: string;
}

const Services = () => {
  const card = (e: DivInterface) => {
    return (
      <div key={e.id} className={styles.element}>
        <div className={styles.element_des}>
          <div className={styles.element_block}>
            <div className={styles.name_price}>
              <h1>{e.name}</h1>
              <hr />
              <p>
                <b>${e.price}</b>
              </p>
            </div>
          </div>
          <p>Wellness Hydration Packs</p>
          <span>{e.description}</span>

          <Link href="#" className="yellow">
            Book Now
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.services_container}>
      <div className={styles.img_container}>
        <Image src={link} className={styles.image_main} alt="Image is chilling" />
      </div>
      <div className={styles.services_content_container}>
        <div className={styles.services_content}>
          {/* Top part */}
          <div className={styles.content_top_part}>
            <div className={styles.top_part_text}>
              <h1>Hydration Packs</h1>
              <p>
                Our customizable hydration packs are curated with the highest-quality ingredients to give you immediate
                results. IV therapy takes about 30-60 minutes per treatment. Injections take about 5 minutes.
              </p>
            </div>
            <div className={styles.top_part_text_2}>
              <div>
                <h3>Legend</h3>
              </div>
              <div className={styles.icon_holder}>
                <div className={styles.text_holder}>
                  <Image src={icon1} alt="icon" height={50} />
                  <p>- </p>
                  <p>Wellness Hydration Packs</p>
                </div>
                <div className={styles.text_holder}>
                  <Image src={icon2} alt="icon" height={50} />
                  <p>- </p>
                  <p>Recovery Hydration Packs</p>
                </div>
              </div>
            </div>
          </div>
          {/* Services part */}
          <div className={styles.services_menu_content}>
            <div className={styles.menu_container}>
              <div className={styles.menu_top}>
                <h1>Wellness Hydration Packs</h1>
              </div>
              {WellnessHydrationPacks.map((e) => {
                return card(e);
              })}
            </div>
            {/* */}
            <div className={styles.menu_container}>
              <div className={styles.menu_top}>
                <h1>Recovery Hydration Packs </h1>
              </div>
              {RecoveryHydrationPacks.map((e) => {
                return card(e);
              })}
            </div>
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
