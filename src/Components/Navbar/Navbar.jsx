import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import "./Navbar.scss";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [clip, setClip] = useState(false);
  const [show, handleShow] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
    setClip(!clip);
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        handleShow(false);
      } else {
        handleShow(true);
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  return (
    <nav className={`nav ${show && "top"}`}>
      <div className='nav__container'>
        <div className='nav__logo'>
          <NavLink to='/' style={{ outline: "none", textDecoration: "none" }}>
            <span className='nav__logo--d'>MovieHub</span>
          </NavLink>
        </div>
        <div className='nav__humburger' onClick={handleClick}>
          {menu ? <CgClose /> : <HiMenuAlt1 />}
        </div>
        <ul className={`nav__list ${clip && "open"}`} onClick={handleClick}>
          <li>
            <NavLink
              to='/trendings'
              className='nav__link'
              activeClassName='selected'
            >
              Trendings
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/movies'
              className='nav__link'
              activeClassName='selected'
            >
              Movies
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/series'
              className='nav__link'
              activeClassName='selected'
            >
              Tv Shows
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/persons'
              className='nav__link'
              activeClassName='selected'
            >
              Persons
            </NavLink>
          </li>

          <li>
            <NavLink
              to='/search'
              className='nav__link'
              activeClassName='selected'
            >
              Search
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
