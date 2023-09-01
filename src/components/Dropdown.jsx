import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItem";

function Dropdown({ onMouseLeave }) {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        onMouseLeave={onMouseLeave}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
