import { Bag, User } from "../../img/header";
import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import { Input } from "../UI";

const Header: React.FC<{ backgroundColor: string }> = ({ backgroundColor }) => {
  let colorText = "black";
  let colorIcon = "black";
  let colorBorder = "black";

  if (backgroundColor === "black") {
    colorText = "white";
  } else if (backgroundColor === "white") {
    colorText = "red";
  }

  if (backgroundColor === "black") {
    colorIcon = "brightness(10)";
  } else if (backgroundColor === "white") {
    colorIcon = "brightness(100%)";
  }

  if (backgroundColor === "black") {
    colorBorder = "#ffffff";
  } else if (backgroundColor === "white") {
    colorBorder = "#EB4C56";
  }

  return (
    <div
      className="header"
      style={{ borderBottom: `2px solid ${colorBorder}` }}
    >
      <div className="header-wrap">
        <div className="header-menu">
          <ul className="header-menu-items">
            <li className="header-menu-item">
              <Link
                to="/about us"
                className="header-item-link"
                style={{ color: colorText }}
              >
                About
              </Link>
            </li>
            <li className="header-menu-item">
              <Link
                to="/shop"
                className="header-item-link"
                style={{ color: colorText }}
              >
                Shop
              </Link>
            </li>
            <li className="header-menu-item">
              <Link
                to="/"
                className="header-item-link"
                style={{ color: colorText }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="header-menu-icons">
            <div className="header-menu-icon">
              <Input backgroundColor={backgroundColor} />
            </div>
            <div className="header-menu-icon">
              <img src={Bag} alt="Bag" style={{ filter: colorIcon }} />
            </div>
            <div className="header-menu-icon">
              <img src={User} alt="User" style={{ filter: colorIcon }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
