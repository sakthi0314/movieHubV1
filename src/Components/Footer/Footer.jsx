import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./Footer.scss";
import { db } from "../../Firebase/firebase";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        feedback: feedback,
      })
      .then(() => {
        setMessage("Feedback has been submitted");
        setTimeout(() => {
          setMessage("");
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.message);
      });

    setName("");
    setEmail("");
    setFeedback("");
  };

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__left'>
          <h1 className='footer__logo'>MovieHub</h1>
          <div className='footer__social'>
            <a
              href='https://www.instagram.com/sakthi0314/?r=nametag'
              target='_blank'
              className='footer__social--insta'
            >
              <FiInstagram />
            </a>
            <a
              href='https://github.com/sakthi0314'
              target='_blank'
              className='footer__social--insta'
            >
              <FaGithub />
            </a>

            <a
              href='https://twitter.com/sakthi06658654'
              target='_blank'
              className='footer__social--insta'
            >
              <AiFillTwitterCircle />
            </a>
          </div>

          <p className='footer__left--text'>
            © 2021 Created By Sakthi All Rights Reserved.
          </p>
        </div>

        <div className='footer__right'>
          <h1 className='footer__right--Name'>Contact us</h1>
          <form className='footer__form' onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Feedback</label>
            <textarea
              name='feedback'
              placeholder='Share your feedback'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>

            <p className={`pop`}>{message}</p>

            <button className='primary'>Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
