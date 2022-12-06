import React from "react";
import { useNavigate } from "react-router-dom";
import PlaceHolder from "../img/placeholder.png";

const Home = () => {
  const navigate = useNavigate()
  return (
    <main>
      <div className="container d-flex py-5">
        <div
          type="button"
          className="box me-3"
          style={{
            backgroundImage: `url(${PlaceHolder})`,
            backgroundColor: "black",
          }}
          onClick={()=>navigate("series")}
        >
          <h1 className="display-2">Series</h1>
        </div>
        <div
          type="button"
          className="box"
          style={{
            backgroundImage: `url(${PlaceHolder})`,
            backgroundColor: "black",
          }}
        >
          <h1 className="display-2">Movies</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
