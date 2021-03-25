import * as React from "react";
import { NavLink } from "react-router-dom";
// @ts-ignore
import Logo from "./../../assets/imgs/logo.png";

import "./style.scss";

export const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="header-left">
          <img src={Logo} height="40px" />
          <h1>Dashboard</h1>
        </div>
        <div className="header-right">
          <ul>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
