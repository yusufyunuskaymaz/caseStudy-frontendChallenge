import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFav, setFav } from "../features/favSlice";

const Series = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filmData, setFilmData] = useState([]);
  const fetchData = () => {
    const url =
      "https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json";
    try {
      axios.get(url).then((res) => setFilmData(res.data.entries));
      console.log(filmData, "burası");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [searchInput, setSearchInput] = useState("");

  const handleSort = (event) => {
    const options = {
      "a-z": [...filmData].sort((a, b) => (a.title < b.title ? -1 : 1)),
      "z-a": [...filmData].sort((a, b) => (a.title < b.title ? 1 : -1)),
      "1-100": [...filmData].sort((a, b) => a.releaseYear - b.releaseYear),
      "100-1": [...filmData].sort((a, b) => b.releaseYear - a.releaseYear),
    };
    setFilmData(options[event.target.value]);
  };

  const { fav } = useSelector((state) => state.fav);

  const addFavs = (index) => {
    if (fav.includes(index)) {
      console.log("burası");
      dispatch(removeFav(index));
    } else if(!fav.includes(index)) {
      dispatch(setFav(index));
      console.log("deneme")
    }

  };

  // spagetti code example :)
  // const handleClick = (opt) => {
  //   if (opt == "z-a") {
  //     setFilterFilm("z-a");
  //   } else if (opt == "a-z") {
  //     setFilterFilm("a-z");
  //   } else if (opt == "1-100") {
  //     setFilterFilm("1-100");
  //   } else if (opt == "100-1") {
  //     setFilterFilm("100-1");
  //   }
  // };

  return (
    <div className="container">
      <div className="row mt-4 justify-content-between mb-3">
        <div className="col-lg-3">
          <div className="top-navbar d-flex justify-content-between">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search..."
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={handleSort}
          >
            <option selected disabled>
              Sort By Name and Date
            </option>
            <option value="a-z">Sort By Title A-Z</option>
            <option value="z-a">Sort By Title Z-A</option>
            <option value="1-100">Sort By Release Year 1-100</option>
            <option value="100-1">Sort By Release Year 100-1</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="mt-2">
          {/* <button className="btn btn-success me-2"  onClick={() => navigate("/")}>Go Home</button> */}
          <button className="btn btn-warning" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
      <div className="row py-5">
        {filmData
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
              <div
                
                className="col col-lg-2"
                key={index}
              >
                <div className="series-box">
                  <img
                    height={200}
                    src={film.images["Poster Art"].url}
                    alt=""
                    style={{ opacity: "0.1" }}
                  />
                  <p>{film.title}</p>
                  <div
                    style={{ width: "80%" }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span className="text-danger">{film.releaseYear} -- {index}</span>
                    <span>
                      {!fav.includes(index) && (
                        <i
                          className="fa-regular fa-star fs-3"
                          style={{ color: "gold" }}
                          onClick={() => addFavs(index)}
                          // onMouseOver={()=>console.log(index)}
                        ></i>
                      )}
                    </span>
                    <span>
                      {fav.includes(index) && (
                        <i className="fa-solid fa-star fs-3"
                        style={{color:"gold"}}
                        onClick={() => addFavs(index)}
                        // onMouseOver={()=>console.log(index)}

                        ></i>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Series;
