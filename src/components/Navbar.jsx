import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    setOpen(!open);
  }
  function closeMenu() {
    setOpen(false);
  }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <nav className="navbar">
      <Link to={"/"} className="navbar-logo">
        EPIC
        <i className="fab fa-firstdraft" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={open ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item" onMouseEnter={onMouseEnter}>
          <Link to="/services" className="nav-links" onClick={closeMenu}>
            Services <i className="fas fa-caret-down" />
          </Link>

          {dropdown && <Dropdown onMouseLeave={onMouseLeave} />}
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMenu}>
            contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-links" onClick={closeMenu}>
            contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up" className="nav-links-mobile" onClick={closeMenu}>
            sign up
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
