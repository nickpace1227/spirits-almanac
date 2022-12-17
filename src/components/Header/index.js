import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/HomePage">Spirits Almanac</Link>
      <br/>
      <Link to="/HomePage">Home</Link> 
      <Link to="/YourAlmanac">Almanac</Link>
      <Link to="/ContactUs">Contact Us</Link>
    </div>
  );
}
