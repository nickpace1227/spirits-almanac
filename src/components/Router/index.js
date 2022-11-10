// Node modules.
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Relative imports
import { Wrapper } from "./styles";
import Header from "../Header";
import LoginPage from "../../pages/Login";
import Landing from "../../pages/Landing";

function Router() {
  return (
    <BrowserRouter>
      <Wrapper>
        <main>
          <Header />
          <div className="page">
            <Routes>
              <Route path="/" exact element={<LoginPage />} />
              <Route path="/Landing" exact element={<Landing />} />
            </Routes>
          </div>
        </main>
      </Wrapper>
    </BrowserRouter>
  );
}

export default Router;
