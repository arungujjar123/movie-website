import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movielist, setMovielist] = useState(movies);

  const filterbycategory = (cat) => {
    setMovielist(movies.filter((data) => data.category == cat));
  };

  return (
    <>
      <>
        <div className="my-3" style={{ width: "1000px", margin: "auto" }}>
          <div className="mx-auto text-center">
            <button
              onClick={() => setMovielist(movies)}
              type="button"
              class="btn btn-outline-primary mx-3"
            >
              All
            </button>
            <button
              onClick={() => filterbycategory("Action")}
              type="button"
              class="btn btn-outline-primary mx-3"
            >
              Action
            </button>
            <button
              onClick={() => filterbycategory("thriller")}
              type="button"
              class="btn btn-outline-light mx-3"
            >
              thriller
            </button>
            <button
              onClick={() => filterbycategory("Animation")}
              type="button"
              class="btn btn-outline-danger mx-3"
            >
              Animation
            </button>
            <button
              onClick={() => filterbycategory("Horror")}
              type="button"
              class="btn btn-outline-info mx-3"
            >
              Horror
            </button>
            <button
              onClick={() => filterbycategory("Drama")}
              type="button"
              class="btn btn-outline-info mx-3"
            >
              Drama
            </button>
            <button
              onClick={() => filterbycategory("Sci-Fi")}
              type="button"
              class="btn btn-outline-light mx-3"
            >
              Sci-Fi
            </button>
          </div>
        </div>
      </>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          textAlign: "center",
          width: "1000px",

          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movielist.map((data) => (
          <div key={data.id} style={{ maxWidth: "200px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "278px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h9>{data.title}</h9>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
