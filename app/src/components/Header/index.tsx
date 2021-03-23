import * as React from "react";
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
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/login">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
