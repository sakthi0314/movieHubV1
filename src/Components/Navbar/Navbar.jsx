import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import "./Navbar.scss";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [clip, setClip] = useState(false);
  const [scroll, setScroll] = useState("stay");

  let prevScrollpos = window.pageYOffset;
  document.addEventListener("scroll", () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setScroll("stay");
    } else {
      setScroll("hide");
    }
    prevScrollpos = currentScrollPos;
  });

  const handleClick = () => {
    setMenu(!menu);
    setClip(!clip);
  };

  return (
    <nav className={`nav ${scroll}`}>
      <div className='container'>
        <div className='nav__logo'>
          <Link to='/' className='nav__logo--d'>
            TheMovieHub
          </Link>
        </div>
        <div className='nav__humburger' onClick={handleClick}>
          {menu ? <CgClose /> : <HiMenuAlt1 />}
        </div>
        <ul className={`nav__list ${clip && "open"}`} onClick={handleClick}>
          <li>
            <Link to='trendings' className='nav__link'>
              Trendings
            </Link>
          </li>

          <li>
            <Link to='movies' className='nav__link'>
              Movies
            </Link>
          </li>

          <li>
            <Link to='series' className='nav__link'>
              Tv Shows
            </Link>
          </li>

          <li>
            <Link to='persons' className='nav__link'>
              Persons
            </Link>
          </li>

          <li>
            <Link to='search' className='nav__link'>
              Search
            </Link>
          </li>

          <li className='active'>
            <Link to='logout' className='nav__link block-log'>
              Log Out
            </Link>
            <Link to='logout' className='nav__list--icon block-icon'>
              <BiLogOut />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
