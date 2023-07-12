import React, { useState } from "react";
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

  const [done, setDone] = useState(false);

  // handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  // submit form
  const handleClick = async (res: any) => {
    try {
      await sendContactForm(data);
      setDone(!done);
      setTimeout(function () {
        setDone(false);
      }, 5500);
    } catch (error) {
      console.log(error);
    }
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
        <div>
          <h3>Get In Touch</h3>
          {done ? <h4 className={styles.success}>Success</h4> : ""}
          <div>
            <label>Name:</label>
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
            <input type="email" name="email" placeholder="email" onChange={(e) => handleChange(e)} />
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
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>

          <button type="submit" className="yellow" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
