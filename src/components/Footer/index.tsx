import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { sendContactForm } from "@/lib/api";

const Footer = () => {
  // data
  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    number: "",
    message: "",
  });

  const [result, setResult] = useState("");
  const [active, setActive] = useState(true);

  // handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  // submit form
  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setActive(false);

    try {
      await sendContactForm(data)
        .then((res) => res.json())
        .then((json) => {
          if (!json.message.code) {
            setResult(json.message);
          } else {
            setResult("Error occured");
          }

          setTimeout(function () {
            setActive(true);
          }, 5500);
        });
    } catch (error) {
      console.log(error);
    }
    // set
  };

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
        {/* Contact Form */}

        <form
          onSubmit={(e) => {
            handleClick(e);
          }}
        >
          <h3>Get In Touch</h3>
          {!active ? <h4 className={`${result !== "Success" ? "error" : ""}  ${styles.success}`}>{result}</h4> : ""}
          <div>
            <label>Name: </label>
            <input type="text" name="name" placeholder="name" value={data.name} onChange={(e) => handleChange(e)} />
          </div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              value={data.subject}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="email" value={data.email} onChange={(e) => handleChange(e)} />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="number"
              placeholder="phone number"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              minLength={9}
              maxLength={10}
              value={data.number}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              placeholder="message"
              name="message"
              cols={30}
              rows={5}
              value={data.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>

          <button type="submit" className={`yellow ${active ? "" : "disabled"}`} disabled={active ? false : true}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
