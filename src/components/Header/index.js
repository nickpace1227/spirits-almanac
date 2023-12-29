import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles.js";

export default function Header() {

  return (
    <Wrapper>
      <div className="header-content">
        <Link className="header-logo" to="/Home">Spirits Almanac</Link>
        <div className="nav-bar">
          <Link className="link-item" to="/Home">Home</Link> 
          <Link className="link-item" to="/Almanac">Almanac</Link>
          <Link className="link-item" to="/Contact">Contact</Link>
        </div>

      </div>
    </Wrapper>
  );
}
