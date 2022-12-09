import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basic from "../components/Basic";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Series from "../components/Series";
import { LoginContext } from "../context/LoginContext";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [user, setUser] = useState("deneme :)")
  return (
    <LoginContext.Provider value={{user,setUser}}>
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<Series />} />
        </Route>
        <Route path="/series" element={<PrivateRouter />}>
            <Route path="" element={<Series />} />
        </Route>
        <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<Series />} />
        </Route> */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/series" element={<Series />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default AppRouter;
