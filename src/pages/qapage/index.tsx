import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import GetStarted from "@/components/GetStarted";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FAQPageData, VitaminBenefits } from "@/components/Data";

interface DivInterface {
  id: number;
  question: string;
  answer: React.ReactElement;
}

const QAPage = () => {
  const DivElement = (e: DivInterface) => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    return (
      <div key={e.id} className={styles.answer_container}>
        <h1 role="button" id={`${e.id}`} onClick={() => setOpen(!open)}>
          <AiOutlineArrowRight
            style={
              open
                ? {}
                : {
                    transform: "rotate(90deg)",
                  }
            }
          />
          {e.question}
        </h1>
        <div
          ref={parentRef}
          className={styles.open}
          style={
            open
              ? {
                  boxShadow: "  0px 6px 3px -3px rgba(0, 0, 0, 0.15)",
                  height: parentRef.current?.scrollHeight + "px",
                }
              : {
                  height: 0,
                }
          }
          onClick={() => setOpen(!open)}
        >
          {e.answer}
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.qa_main_container} `}>
      <div className="top_img"></div>
      <div className={styles.qa_container}>
        <h1 className="naming naming_b">FAQ Page</h1>
        {FAQPageData.map((e) => {
          return DivElement(e);
        })}
        <h1 className="naming naming_b">Vitamins Benefits</h1>
        {VitaminBenefits.map((e) => {
          return DivElement(e);
        })}
      </div>
      <GetStarted />
    </div>
  );
};

export default QAPage;
