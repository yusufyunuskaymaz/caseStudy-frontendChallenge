import React from "react";
import { useQuery } from "react-query";

const Series = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      "https://raw.githubusercontent.com/pankod/frontend-challenge/master/feed/sample.json"
    ).then((res) => res.json())
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <div className="container">
      <div className="row py-5">
        {data.entries.map((film) => {
          return (
            <div className="col col-lg-2">
              <div className="series-box">
                <img height={200} src={film.images["Poster Art"].url} alt="" style={{opacity:"0.04"}} />
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
