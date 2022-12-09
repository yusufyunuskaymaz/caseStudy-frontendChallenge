import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basic from "../components/Basic";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Series from "../components/Series";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<Series />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/basic" element={<Basic />} />
        {/* <Route path="/series" element={<Series />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
