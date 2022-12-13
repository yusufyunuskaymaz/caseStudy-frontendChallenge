import React, { useEffect, useState } from "react";
import Post from "./Post"

const Posts = ({ films, filteredFilms, fav, addFavs }) => {

  const result = filteredFilms ? filteredFilms : films;

  return (
    <>
      {result?.map((film, index) => {
          return (
            <Post film={film} fav={fav} addFavs={addFavs} />
          );
        })}
      
    </>
  );
};

export default Posts;
