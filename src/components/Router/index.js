import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../styles/globalStyles";
import Header from "../Header";
import LoginPage from "../Login";
import Almanac from "../Almanac";
import AdvancedSearch from "../AdvancedSearch";
import Home from "../Home";
import ContactUs from "../ContactUs";
import CreateUser from "../CreateUser";

export default function SpiritsAlmanac() {
  return (
    <BrowserRouter>
      <GlobalStyles>
          <Header />
            <Routes>
              <Route path="/CreateUser" exact element={<CreateUser />} />
              <Route path="/" exact element={<LoginPage />} />
              <Route path="/LoginPage" exact element={<LoginPage />} />
              <Route path={"/Almanac"} exact element={<Almanac />} />
              <Route path="/AdvancedSearch" exact element={<AdvancedSearch />} />
              <Route path="/Home" exact element={<Home />} />
              <Route path="/ContactUs" exact element={<ContactUs />} />
            </Routes>
      </GlobalStyles>
    </BrowserRouter>
  );
};
