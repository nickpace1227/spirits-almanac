import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../Styles/GlobalStyles";
import Header from "../Header";
import LoginPage from "../Login";
import Almanac from "../Almanac";
import AdvancedSearch from "../AdvancedSearch";
import Home from "../Home";
import Contact from "../Contact";
import CreateUser from "../CreateUser";

export default function SpiritsAlmanac() {
const loggedIn = JSON.parse(sessionStorage.getItem("loggedIn"));
;

  return (
    <BrowserRouter>
    <body className="active-modal">
      <GlobalStyles>
        <Header />
        <Routes>
          <Route path="/CreateUser" exact element={<CreateUser />} />
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/Almanac" element={loggedIn ? <Almanac /> : <LoginPage />} />
          <Route path="/AdvancedSearch" exact element={<AdvancedSearch />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </GlobalStyles>
      </body>
    </BrowserRouter>
  );
}
