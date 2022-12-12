import React, { useEffect, useState } from "react";

const Posts = ({ films, filteredFilms, fav, addFavs }) => {

  const result = filteredFilms ? filteredFilms : films;

  return (
    <>
      {result.map((film, index) => {
          return (
            <div className="col col-lg-2" key={film.id}>
              <div className="series-box">
                <img
                  height={200}
                  src={film.images["Poster Art"].url}
                  alt=""
                  style={{ opacity: "0.01" }}
                />
                <p>{film.title}</p>
                <div
                  style={{ width: "80%" }}
                  className="d-flex align-items-center justify-content-between"
                >
                  <span className="text-danger">
                    {film.releaseYear} -- {film.id}
                  </span>
                  <span>
                    {!fav.includes(film.id) && (
                      <i
                        className="fa-regular fa-star fs-3"
                        style={{ color: "gold" }}
                        onClick={() => addFavs(film.id)}
                        // onMouseOver={()=>console.log(index)}
                      ></i>
                    )}
                  </span>
                  <span>
                    {fav.includes(film.id) && (
                      <i
                        className="fa-solid fa-star fs-3"
                        style={{ color: "gold" }}
                        onClick={() => addFavs(film.id)}
                        // onMouseOver={()=>console.log(index)}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      {/* { films
        
          .map((film, index) => {
            return (
              <div className="col col-lg-2" key={film.id}>
                <div className="series-box">
                  <img
                    height={200}
                    src={film.images["Poster Art"].url}
                    alt=""
                    style={{ opacity: "0.01" }}
                  />
                  <p>{film.title}</p>
                  <div
                    style={{ width: "80%" }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text-danger">
                      {film.releaseYear} -- {film.id}
                    </span>
                    <span>
                      {!fav.includes(film.id) && (
                        <i
                          className="fa-regular fa-star fs-3"
                          style={{ color: "gold" }}
                          onClick={() => addFavs(film.id)}
                          // onMouseOver={()=>console.log(index)}
                        ></i>
                      )}
                    </span>
                    <span>
                      {fav.includes(film.id) && (
                        <i
                          className="fa-solid fa-star fs-3"
                          style={{ color: "gold" }}
                          onClick={() => addFavs(film.id)}
                          // onMouseOver={()=>console.log(index)}
                        ></i>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })} */}
    </>
  );
};

export default Posts;
