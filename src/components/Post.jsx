import React, { useState } from "react";
import ModalWithPortal from "./ModalWithPortal";

const Post = ({ film, addFavs, fav}) => {


  const [isOpenPortal, setIsOpenPortal] = useState(false);

  const handleOpenPortal = () => {
    setIsOpenPortal(true);
  };
  console.log(film);

  return (
      <div className="col col-lg-2" key={film?.id}>

        <div className="series-box">
          <div
            style={{
              height: "200px",
              background: "#F5f5f5",
              maxWidth: "130px",
            }}
          >
            <img
              height={200}
              src={film?.images["Poster Art"].url}
              alt=""
              style={{ opacity: "0.1" }}
            />
          </div>
          <p>{film?.title}</p>
          <button className="btn btn-success p-1" onClick={handleOpenPortal}>More</button>
          <div
            style={{ width: "80%" }}
            className="d-flex align-items-center justify-content-between"
          >
            <span className="text-danger">
              {film?.releaseYear} -- {film?.id}
            </span>
            <span>
              {!fav?.includes(film?.id) && (
                <i
                  className="fa-regular fa-star fs-3"
                  style={{ color: "gold" }}
                  onClick={() => addFavs(film?.id)}
                ></i>
              )}
            </span>
            <span>
              {fav?.includes(film?.id) && (
                <i
                  className="fa-solid fa-star fs-3"
                  style={{ color: "gold" }}
                  onClick={() => addFavs(film?.id)}
                ></i>
              )}
            </span>
          </div>
        </div>
        <ModalWithPortal
        isOpenPortal={isOpenPortal}
        setIsOpenPortal={setIsOpenPortal}
        productName={"Pubg"}
        film={film}
      />
      </div>
      
  );
};

export default Post;
