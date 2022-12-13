import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import "./header.css";
import { clear } from "../features/favSlice";
// import {  GoogleLogout  } from 'react-google-login';




const Header = () => {

  const { fav } = useSelector((state) => state.fav);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = () => {
    setUser({ email: "", password: "" });
    localStorage.removeItem("user")
    localStorage.removeItem("oauth2_ss::http://localhost:3000::1::DEFAULT::_ss_")
    sessionStorage.clear()
    navigate("/login");
  };
  // console.log(user);
  const localUser = JSON.parse(localStorage.getItem("user"))

  const { user, setUser } = useContext(LoginContext);
  // console.log(fav, "burası fav")

  const handleClear = ()=>{
   if(window.confirm()){
      dispatch(clear())
   }
  }

  return (
    <header>
      <div className="container header">
        <div className="logo">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <h2>Logo Area </h2>
          </Link>
        </div>
        <div className="login">
          <span>{localUser?.email}</span>
          <span className="me-0" type="button" onClick={() => handleSubmit()}>
            {localUser?.email && "Logout"}
          </span>
          <span type="button" onClick={() => navigate("/login")}>
            {!localUser?.email && "Login"}
          </span>
          {fav.length && localUser?.email ? <span className="badge bg-success fs-6 me-1">{fav.length}</span> : null}
          {localUser?.email && fav.length > 0  ? <i type="button" onClick={()=>handleClear()} className="fa-solid fa-trash-can me-2 text-danger"></i> : null}
          <button id="navbar-start">Start Your Free Trial</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
