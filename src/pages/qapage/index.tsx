import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import GetStarted from "@/components/GetStarted";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Rotate } from "hamburger-react";

interface DivInterface {
  id: number;
  question: string;
  answer: any;
}

const QAPage = () => {
  const question_answers: { id: number; question: string; answer: any }[] = [
    {
      id: 1,
      question: "How do your hydration infusion services help me?",
      answer: (
        <p>
          For optimal health we need to be adequately hydrated. With proper nutrition and hydration, we are able to
          treat and prevent diseases. IV infusions and injections provide immediate results by going directly into the
          bloodstream, completely bypassing the digestive system. IV infusion and injections provide increased blood
          concentration of vital nutrients, vitamins, antioxidants, and hydration. Our hydrating treatments go straight
          to the cells most in need of a nutrient-filled hydration boost!
        </p>
      ),
    },
    {
      id: 2,
      question: "How quickly will I feel results from the IV infusion or injection?",
      answer: <p>Within minutes! It usually takes 15-90 minutes to feel the full effects of your treatment.</p>,
    },
    {
      id: 3,
      question: "How long will I feel the effects of my IV infusion or injection treatment?",
      answer: (
        <p>
          Some are felt long term and some are more short lived. Hangover relief is nearly instantaneous. Other
          treatments, like NAD+ can be felt for up to 2 weeks.
        </p>
      ),
    },
    {
      id: 4,
      question: "How often should I get an IV infusion?",
      answer: (
        <p>
          Treatment frequency varies based on 2 main factors: metabolism and activity level. The quicker your metabolism
          and more active lifestyle you live, the faster you will burn through the benefits of your vitamin and nutrient
          boost. Infusions every 1-2 weeks are reasonable and safe depending on your lifestyle.
        </p>
      ),
    },
    {
      id: 5,
      question: "How often should I get an IV infusion?",
      answer: (
        <p>
          <b>Vitamin C </b>is a very powerful antioxidant, is critical for immune function, and can prevent certain
          aspects of aging. Vitamin C can combat the slow molecular decay caused by free radicals in our environment.{" "}
          <br />
          <strong>Zinc </strong> is important for the immune system and hormone balance in your body. Zinc also helps
          control blood sugar and promotes a healthy cardiovascular system. <br />
          <strong>Vitamin B1 (Thiamin) </strong> assists the body in converting food into energy. <br />
          <strong>Thiamin </strong> is critical for energy production and is important for heart and nervous system
          function. <br />
          <strong>Vitamin B2 (Riboflavin) </strong>promotes healthy muscle, nervous and cardiovascular functions.
          Riboflavin is also important for red blood cell production and to prevent certain anemias. <br />
          <strong>Vitamin B3 (Niacin) </strong>assists the body in converting food into energy and is useful in lowering
          triglyceride in the blood and regulating cholesterol. <br />
          Niacin cardiovascular, nervous, and dermatological health. <br />
          <strong>Vitamin B5 (Pantothenic Acid) </strong>supports metabolism and energy production. It is critical for
          the production of hemoglobin. B5 can reduce stress and anxiety and support skin and hair health. <br />
          <strong>Vitamin B6 (Pyridoxine) </strong>supports cardiovascular function and healthy brain cognition and can
          promote good mood and sleep regulations and helps sharpen memory, particularly in an aging adult. <br />
          <strong>Vitamin B7 (Biotin) </strong>is crucial for healthy skin, hair, and nails. Biotin can strengthen your
          nails and improve the quality and appearance of your hair and nails. Biotin is also important for the
          metabolism of protein and carbs. <br />
          <strong>Vitamin B9 (Folic Acid)</strong> is a necessary vitamin for development of a healthy nervous system in
          a fetus. Folic Acid supports our nervous system function and aids in the repair of DNA and therefore can slow
          the effects of aging. <br />
          <strong>Vitamin B12 (Cobalamin) </strong> is critical for metabolism and energy production. Along with
          boosting energy, B12 can improve memory, supports the nervous system, and assists in formation of red blood
          cells.
        </p>
      ),
    },
  ];

  const divElement = (e: DivInterface) => {
    const parentRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    return (
      <div key={e.id} className={styles.answer_container}>
        <h1 className={styles.active} role="button" id={`${e.id}`} onClick={() => setOpen(!open)}>
          <AiOutlineArrowRight
            style={
              open
                ? {
                    transform: "rotate(90deg)",
                  }
                : {}
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
        >
          {e.answer}
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.qa_main_container} spacer `}>
      <div className={styles.qa_container}>
        {question_answers.map((e) => {
          return divElement(e);
        })}
      </div>
      <GetStarted />
    </div>
  );
};

export default QAPage;
