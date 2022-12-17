// Node modules.
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Relative imports
import { Wrapper } from "./styles";
import Header from "../Header";
import LoginPage from "../../pages/Login";
import Almanac from "../../pages/Almanac";
import AdvancedSearch from "../../pages/AdvancedSearch";
import HomePage from "../../pages/HomePage";
import ContactUs from "../../pages/ContactUs";

function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <main>
          <Header />
          <div className="page">
            <Routes>
              <Route path="/" exact element={<LoginPage />} />
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
}

export default Router;
