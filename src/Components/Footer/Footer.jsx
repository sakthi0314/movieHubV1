import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__header'>
          <h1>Contact Us</h1>
          <Link to='/' className='footer__logo'>
            MovieHub
          </Link>
        </div>
        <form className='footer__form'>
          <div className='footer__form--name'>
            <label>Name</label>
            <input type='text' placeholder='Enter your name' />
          </div>

          <div className='footer__form--name'>
            <label>Email Id</label>
            <input type='email' placeholder='Enter your mail id' />
          </div>

          <input type='button' className='footer__btn primary' value='Summit' />
        </form>
      </div>
    </footer>
  );
}

export default Footer;
