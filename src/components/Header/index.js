import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles.js";

export default function Header() {

  return (
    <Wrapper>
        <Link className="header-logo" to="/Home">Spirits Almanac</Link>
        <div className="nav-bar">
          <Link to="/Home">Home</Link> 
          <Link to="/YourAlmanac">Almanac</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>
    </Wrapper>
  );
}
