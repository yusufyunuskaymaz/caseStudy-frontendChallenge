import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFav, setFav } from "../features/favSlice";
import Paginate from "./Paginate";
import Posts from "./Posts";

const Series = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filmData, setFilmData] = useState([]);
  const fetchData = () => {
    const url =
      "https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json";
    try {
      axios.get(url).then((res) =>
        setFilmData(
          res.data.entries.map((film, index) => {
            return { ...film, id: index + 1 };
          })
        )
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  // const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const [filteredFilms, setFilteredFilms] = useState("");

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentFilms = filmData.slice(indexOfFirstPost, indexOfLastPost);
  const currentFilteredFilms = filteredFilms?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = (event, data) => {
    console.log(data);
    const options = {
      "a-z": [...data].sort((a, b) => (a.title < b.title ? -1 : 1)),
      "z-a": [...data].sort((a, b) => (a.title < b.title ? 1 : -1)),
      "1-100": [...data].sort((a, b) => a.releaseYear - b.releaseYear),
      "100-1": [...data].sort((a, b) => b.releaseYear - a.releaseYear),
    };
    if (filmData.length === 100) {
      setFilmData(options[event.target.value]);
    } else {
      setFilteredFilms(options[event.target.value]);
    }
  };

  const { fav } = useSelector((state) => state.fav);

  const addFavs = (id) => {
    if (fav.includes(id)) {
      dispatch(removeFav(id));
    } else if (!fav.includes(id)) {
      dispatch(setFav(id));
    }
  };

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (!searchInput) {
      alert("Please enter something");
    } else {
      const filtered = filmData.filter((film) => {
        return film.title.toLowerCase().includes(searchInput);
      });
      setFilteredFilms(filtered);
    }
  };
  

  // When search input deleted show all films
  const onChangeHandle = (e)=>{
    console.log(e)
    setSearchInput(e)
    if(searchInput.length === 1){
      console.log("evet sifir");
      setFilmData(filmData)
      setFilteredFilms("")
    }
  }

  return (
    <div className="container" >
      <span id="ana-div"></span>
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
                onChange={(e)=>onChangeHandle(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) =>
              handleSort(e, filteredFilms.length > 0 ? filteredFilms : filmData)
            }
          >
            <option defaultValue disabled>
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
        <Posts
          films={currentFilms}
          filteredFilms={currentFilteredFilms}
          fav={fav}
          addFavs={addFavs}
        />
        <Paginate
          postsPerPage={postsPerPage}
          totalFilms={filmData.length}
          filteredTotalFilms={filteredFilms?.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Series;
