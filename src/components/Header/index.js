import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles.js";

export default function Header() {
  return (
    <Wrapper>
        <Link class="header-logo" to="/HomePage">Spirits Almanac</Link>
        <div class="nav-bar">
          <Link to="/HomePage">Home</Link> 
          <Link to="/YourAlmanac">Almanac</Link>
          <Link to="/ContactUs">Contact Us</Link>
        </div>
    </Wrapper>
  );
}
