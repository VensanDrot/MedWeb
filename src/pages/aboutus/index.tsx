import React, { useState } from "react";
import styles from "./index.module.css";

const AboutUs = () => {
  const about_elements: { id: number; text: any }[] = [
    {
      id: 1,
      text: (
        <p>
          <b>HydratioNation IV</b> is dedicated to infusing you with relief through our mobile IV hydration services.
          Enjoy personalized attention to your needs at your own convenience.
        </p>
      ),
    },
    {
      id: 2,
      text: (
        <p>
          <b>
            We are a mobile concierge medicine company committed to bringing the immediate results of IV therapy to you.{" "}
          </b>
          You no longer have to wait for hours in an emergency room to receive IV hydration therapy. HydratioNation IV
          can treat and prevent diseases without the wait or outstanding medical bills.{" "}
        </p>
      ),
    },
    {
      id: 3,
      text: (
        <p>
          <b>Our dedicated practitioners can help you restore, replenish, and maintain optimal health and wellness. </b>
          Whether you’re recovering from a cold or flu, suffering through a migraine, need a jetlag pick-me-up, are
          seeking hangover relief, desire a quick athletic recovery for sore muscles or chronic pain, or just want the
          rejuvenating, anti-aging effects of a hydrating energy boost, our IV hydration packs and injections is the
          fastest way to hydration.
        </p>
      ),
    },
    {
      id: 4,
      text: (
        <p>
          Owned and operated by Benjamin Labovitz, a Critical Care Nurse Practitioner, who, after spending thousands of
          hours treating our nation’s most critically ill, has learned the importance of proactively managing our health
          and wellness.
        </p>
      ),
    },
    {
      id: 5,
      text: (
        <p>
          IV hydration therapy is an important part of protecting, nourishing, and infusing your body with essential
          vitamins and nutrients for long-lasting physical and mental health.
        </p>
      ),
    },
  ];
  return (
    <div className={styles.AboutUs_container}>
      <div className={styles.about_container}>
        {about_elements.map((e) => {
          return (
            <div className={styles.kid_container} key={e.id}>
              {e.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
