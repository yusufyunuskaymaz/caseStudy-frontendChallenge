import React from 'react'

const Posts = ({films, searchInput, fav, addFavs}) => {
  return (
    <>
        {films
          .filter((film) => {
            return film.title.toLowerCase().includes(searchInput);
          })
          //spagetti code
          // .sort((a, b) => {
          //   if (filterFilm == "z-a") {
          //     return a.title > b.title ? -1 : 1;
          //   } else if (filterFilm == "a-z") {
          //     return a.title > b.title ? 1 : -1;
          //   } else if (filterFilm == "1-100") {
          //     return a.releaseYear - b.releaseYear;
          //   } else if (filterFilm == "100-1") {
          //     return b.releaseYear - a.releaseYear;
          //   }
          // })
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
          })}
    </>
  )
}

export default Posts