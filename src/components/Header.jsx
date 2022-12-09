import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import "./header.css";

const Header = () => {
  const {fav} = useSelector((state) => state.fav)
  const navigate = useNavigate()
  const handleSubmit = ()=>{
    setUser({email:"", password:""})
    navigate("/login")
  }
  // console.log(user);
  const {user, setUser} = useContext(LoginContext)
  // console.log(fav, "burası fav")


  return (
    <header>
      <div className="container header">
        <div className="logo">
          <Link to="/home" style={{textDecoration:"none", color:"black"}}>
            <h2>Logo Area </h2>
          </Link>
        </div>
        <div className="login">
          <span className="me-0" type="button" onClick={()=>handleSubmit()}>{ user.email && "Logout"}</span>
          <span type="button" onClick={()=>navigate("/login")}>{ !user.email && "Login"}</span>
          {fav && <span class="badge bg-danger fs-6 me-1">{fav.length}</span>}
          <button>Start Your Free Trial</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
