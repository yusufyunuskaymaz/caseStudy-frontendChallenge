import React from "react";
import Apple from "../img/app-store.svg"
import Microsoft from "../img/windows-store.svg"
import playStore from "../img/play-store.svg"

import Facebook from "../img/facebook-white.svg"
import Twitter from "../img/twitter-white.svg"
import Instagram from "../img/instagram-white.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
      <div className="top">
        <ul className="p-0">
          <li>
            <a>Home | </a>
          </li>
          <li>
            <a> Terms And Conditions | </a>
          </li>
          <li>
            <a> Privacy Policy | </a>
          </li>
          <li>
            <a>Collection Statement | </a>
          </li>
          <li>
            <a>Help | </a>
          </li>
          <li>
            <a>Management</a>
          </li>
        </ul>
        <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
      </div>
      <div className="bottom">
        <div className="social">
        <img src={Facebook} alt="" />
                <img src={Twitter} alt="" />
                <img src={Instagram} alt="" />
        </div>
        <div className="app-store">
                <img src={Apple} alt="" />
                <img src={Microsoft} alt="" />
                <img src={playStore} alt="" />
        </div>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
