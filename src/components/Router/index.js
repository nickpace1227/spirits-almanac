import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../Styles/GlobalStyles";
import Header from "../Header";
import LoginPage from "../Login";
import Almanac from "../Almanac";
import AdvancedSearch from "../AdvancedSearch";
import Home from "../Home";
import Contact from "../Contact";
import CreateUser from "../CreateUser";
import { addCard } from "../../store/cardSlice";
import { useDispatch } from "react-redux";

export default function SpiritsAlmanac() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const dispatch = useDispatch();
  const localData = JSON.parse(localStorage.getItem("localAlmanac"));

  if (!hasLoaded) {
    localData.map((card) => {
      dispatch(addCard(card));
    });
    setHasLoaded(true);
  }

  return (
    <BrowserRouter>
      <GlobalStyles>
        <Header />
        <Routes>
          <Route path="/CreateUser" exact element={<CreateUser />} />
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/Almanac" element={<Almanac />} />
          <Route path="/AdvancedSearch" exact element={<AdvancedSearch />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </GlobalStyles>
    </BrowserRouter>
  );
}
