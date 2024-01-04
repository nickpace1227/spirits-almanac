import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./styles.js";

export default function Header() {
  const navigate = useNavigate();
  const isUserLoggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));

  if (!isUserLoggedIn) {
    if (
      window.location.pathname !== "/" &&
      window.location.pathname !== "/Home" &&
      window.location.pathname !== "/Contact" &&
      window.location.pathname !== "/CreateUser"
    ) {
      navigate("/");
    }
  }

  return (
    <Wrapper>
      <div className="header-content">
        <Link className="header-logo" to="/Home">
          Spirits Almanac
        </Link>
        <div className="nav-bar">
          <Link className="link-item" to="/Home">
            Home
          </Link>
          <Link className="link-item" to="/Almanac">
            Almanac
          </Link>
          <Link className="link-item" to="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
