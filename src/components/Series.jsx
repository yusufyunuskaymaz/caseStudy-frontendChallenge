import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const Series = () => {
  const navigate = useNavigate();

  const [filmData, setFilmData] = useState([]);
  const fetchData = () => {
    const url =
      "https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json";
    try {
      axios.get(url).then((res) => setFilmData(res));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="container">
      <div className="top-navbar d-flex justify-content-between mt-3">
        <div className="input-group w-lg-25">
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

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-2">
        <button className="btn btn-success me-2">Go Home</button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
      <div className="row py-5">
        {filmData?.data?.entries
          ?.filter((film) => {
              if (film.title.toLowerCase().includes(searchInput)) {
                return film;
              }
          })
          .map((film, index) => {
            return (
              <div className="col col-lg-2" key={index}>
                <div className="series-box">
                  <img
                    height={200}
                    src={film.images["Poster Art"].url}
                    alt=""
                    
                  />
                  <p>{film.title}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Series;
