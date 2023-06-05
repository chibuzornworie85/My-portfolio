import React from "react";
import { Route, Routes } from "react-router-dom";
import More from "../Component/Body/More";
import About from "../Component/Pages/About";
import Home from "../Home";
import ScrollToTop from "../Component/Navigation/scrollToTop";

const Rout1 = () => {
  return (
    <>
    <ScrollToTop />
        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="/more" element={<More />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
    </>
  );
};

export default Rout1;
