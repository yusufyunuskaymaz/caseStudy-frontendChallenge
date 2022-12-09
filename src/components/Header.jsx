import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header">
        <div className="logo">
          <a href="">
            <h2>Logo Area</h2>
          </a>
        </div>
        <div className="login">
          <span>Login</span>
          <button>Start Your Free Trial</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
