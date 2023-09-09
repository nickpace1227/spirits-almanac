// Node modules.
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Relative imports
import { Wrapper } from "./styles";
import Header from "../Header";
import LoginPage from "../Login";
import Almanac from "../Almanac";
import AdvancedSearch from "../AdvancedSearch";
import HomePage from "../HomePage";
import ContactUs from "../ContactUs";
import CreateUser from "../CreateUser";

export default function SpiritsAlmanac() {
  return (
    <BrowserRouter>
      <Wrapper>
        <main>
          <Header />
          <div className="page">
            <Routes>
              <Route path="/CreateUser" exact element={<CreateUser />} />
              <Route path="/" exact element={<LoginPage />} />
              <Route path="/LoginPage" exact element={<LoginPage />} />
              <Route path="/YourAlmanac" exact element={<Almanac />} />
              <Route path="/AdvancedSearch" exact element={<AdvancedSearch />} />
              <Route path="/HomePage" exact element={<HomePage />} />
              <Route path="/ContactUs" exact element={<ContactUs />} />
            </Routes>
          </div>
        </main>
      </Wrapper>
    </BrowserRouter>
  );
};
