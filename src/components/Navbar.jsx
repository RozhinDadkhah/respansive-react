import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "@react-icons/all-files/go/GoThreeBars";
import { GrClose } from "@react-icons/all-files/gr/GrClose";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        {/* logo */}
        <Link className="logo" to="/" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="nav logo" />
        </Link>

        {/* nav links */}
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ path, name }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* nav buttons */}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <GrClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
